import fs from 'node:fs';
import path from 'node:path';

export interface CatalogSkill {
  id: string;
  path: string;
  category: string;
  name: string;
  description: string;
  risk?: string;
  source?: string;
  date_added?: string;
  plugin?: any;
}

const CATALOG_INDEX_PATH = fs.existsSync(path.resolve(process.cwd(), '.agents/aas-catalog/skills_index.json'))
  ? path.resolve(process.cwd(), '.agents/aas-catalog/skills_index.json')
  : 'C:/Users/Administrator/.gemini/mcp/agentic-awesome-skills/skills_index.json';
const TARGET_SKILLS_DIR = path.resolve(process.cwd(), '.agents/skills');

export function loadCatalog(): CatalogSkill[] {
  if (!fs.existsSync(CATALOG_INDEX_PATH)) {
    throw new Error(`Catalog index not found at ${CATALOG_INDEX_PATH}. Run 'bun run scripts/aas-catalog.ts update' first.`);
  }
  const raw = fs.readFileSync(CATALOG_INDEX_PATH, 'utf-8');
  return JSON.parse(raw);
}

export function searchSkills(query: string, category?: string, limit = 15): CatalogSkill[] {
  const catalog = loadCatalog();
  const q = query.toLowerCase().trim();
  const cat = category ? category.toLowerCase().trim() : null;

  return catalog
    .filter((skill) => {
      if (cat && skill.category.toLowerCase() !== cat) return false;
      if (!q) return true;
      return (
        skill.id.toLowerCase().includes(q) ||
        skill.name.toLowerCase().includes(q) ||
        skill.description.toLowerCase().includes(q) ||
        (skill.category && skill.category.toLowerCase().includes(q))
      );
    })
    .slice(0, limit);
}

export async function fetchSkillContent(skillId: string): Promise<string> {
  const catalog = loadCatalog();
  const skill = catalog.find((s) => s.id === skillId || s.name === skillId);
  if (!skill) {
    throw new Error(`Skill '${skillId}' not found in catalog.`);
  }

  const url = `https://raw.githubusercontent.com/sickn33/agentic-awesome-skills/main/${skill.path}/SKILL.md`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch SKILL.md for '${skillId}' from ${url} (status: ${response.status})`);
  }
  return await response.text();
}

export async function installSkill(skillId: string): Promise<{ targetDir: string; files: string[] }> {
  const catalog = loadCatalog();
  const skill = catalog.find((s) => s.id === skillId || s.name === skillId);
  if (!skill) {
    throw new Error(`Skill '${skillId}' not found in catalog.`);
  }

  const targetDir = path.join(TARGET_SKILLS_DIR, skill.id);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 1. Download SKILL.md
  const skillMdContent = await fetchSkillContent(skill.id);
  const skillMdPath = path.join(targetDir, 'SKILL.md');
  fs.writeFileSync(skillMdPath, skillMdContent, 'utf-8');
  const installedFiles = ['SKILL.md'];

  // 2. Query GitHub repo directory contents to fetch any companion files (references, scripts)
  try {
    const apiUrl = `https://api.github.com/repos/sickn33/agentic-awesome-skills/contents/${skill.path}`;
    const apiRes = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'AAS-Catalog-Client'
      }
    });

    if (apiRes.ok) {
      const items = (await apiRes.json()) as Array<{ name: string; type: string; download_url: string | null }>;
      for (const item of items) {
        if (item.type === 'file' && item.name !== 'SKILL.md' && item.download_url) {
          const fileRes = await fetch(item.download_url);
          if (fileRes.ok) {
            const content = await fileRes.text();
            fs.writeFileSync(path.join(targetDir, item.name), content, 'utf-8');
            installedFiles.push(item.name);
          }
        }
      }
    }
  } catch (err) {
    // Non-fatal if companion files can't be fetched
  }

  return { targetDir, files: installedFiles };
}

// CLI Execution
if (import.meta.main) {
  const [cmd, arg1, arg2] = process.argv.slice(2);

  if (!cmd || cmd === '--help' || cmd === 'help') {
    console.log(`
AAS Catalog Client — Control Plane for 2,113+ Agentic Skills
Usage:
  bun run scripts/aas-catalog.ts search <termo> [categoria]
  bun run scripts/aas-catalog.ts get <skill-id>
  bun run scripts/aas-catalog.ts install <skill-id>
  bun run scripts/aas-catalog.ts list-categories
  bun run scripts/aas-catalog.ts update
`);
    process.exit(0);
  }

  if (cmd === 'search') {
    if (!arg1) {
      console.error('Error: Informe o termo de busca.');
      process.exit(1);
    }
    const results = searchSkills(arg1, arg2);
    console.log(`Encontradas ${results.length} skills correspondentes:\n`);
    for (const r of results) {
      console.log(`- [${r.id}] (${r.category} | ${r.risk || 'safe'})`);
      console.log(`  ${r.description.slice(0, 110)}...`);
    }
  } else if (cmd === 'get') {
    if (!arg1) {
      console.error('Error: Informe o ID da skill.');
      process.exit(1);
    }
    fetchSkillContent(arg1)
      .then((content) => console.log(content))
      .catch((err) => {
        console.error(err.message);
        process.exit(1);
      });
  } else if (cmd === 'install') {
    if (!arg1) {
      console.error('Error: Informe o ID da skill a instalar.');
      process.exit(1);
    }
    console.log(`Instalando skill '${arg1}'...`);
    installSkill(arg1)
      .then(({ targetDir, files }) => {
        console.log(`✓ Skill instalada com sucesso em: ${targetDir}`);
        console.log(`  Arquivos: ${files.join(', ')}`);
      })
      .catch((err) => {
        console.error('Erro na instalação:', err.message);
        process.exit(1);
      });
  } else if (cmd === 'list-categories') {
    const catalog = loadCatalog();
    const categories: Record<string, number> = {};
    for (const s of catalog) {
      categories[s.category] = (categories[s.category] || 0) + 1;
    }
    const sorted = Object.entries(categories).sort((a, b) => b[1] - a[1]);
    console.log(`Total de ${sorted.length} categorias disponíveis:\n`);
    for (const [cat, count] of sorted) {
      console.log(`- ${cat.padEnd(25)}: ${count} skills`);
    }
  } else if (cmd === 'update') {
    console.log('Atualizando catálogo do repositório canônico...');
    fetch('https://raw.githubusercontent.com/sickn33/agentic-awesome-skills/main/skills_index.json')
      .then((res) => res.json())
      .then((data) => {
        fs.writeFileSync(CATALOG_INDEX_PATH, JSON.stringify(data, null, 2), 'utf-8');
        console.log(`✓ Catálogo atualizado com sucesso (${data.length} skills).`);
      })
      .catch((err) => {
        console.error('Erro ao atualizar catálogo:', err.message);
        process.exit(1);
      });
  }
}
