import readline from 'node:readline';
import { searchSkills, fetchSkillContent, installSkill, loadCatalog } from './aas-catalog';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function sendResponse(id: number | string | null, result: any) {
  const msg = {
    jsonrpc: '2.0',
    id,
    result
  };
  process.stdout.write(JSON.stringify(msg) + '\n');
}

function sendError(id: number | string | null, code: number, message: string) {
  const msg = {
    jsonrpc: '2.0',
    id,
    error: { code, message }
  };
  process.stdout.write(JSON.stringify(msg) + '\n');
}

const TOOLS = [
  {
    name: 'aas_search_skills',
    description: 'Search 2,113+ curated agentic skills from the AAS Core catalog by keywords, topics, or categories.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search term (e.g. "pdf", "editorial", "typography", "testing")' },
        category: { type: 'string', description: 'Optional category filter (e.g. "marketing", "content", "security")' },
        limit: { type: 'number', description: 'Max number of results to return (default: 10, max: 30)' }
      },
      required: ['query']
    }
  },
  {
    name: 'aas_get_skill',
    description: 'Retrieve full markdown instructions and metadata for any skill in the AAS catalog by ID.',
    inputSchema: {
      type: 'object',
      properties: {
        skill_id: { type: 'string', description: 'Unique skill ID (e.g. "pdf-conversion-router", "e2e-testing-patterns")' }
      },
      required: ['skill_id']
    }
  },
  {
    name: 'aas_install_skill',
    description: 'Directly download and activate a skill into the project .agents/skills directory.',
    inputSchema: {
      type: 'object',
      properties: {
        skill_id: { type: 'string', description: 'Skill ID to install into the workspace' }
      },
      required: ['skill_id']
    }
  },
  {
    name: 'aas_list_categories',
    description: 'List all available skill categories in the AAS catalog with counts.',
    inputSchema: {
      type: 'object',
      properties: {}
    }
  }
];

rl.on('line', async (line) => {
  const trimmed = line.trim();
  if (!trimmed) return;

  let request: any;
  try {
    request = JSON.parse(trimmed);
  } catch (err) {
    sendError(null, -32700, 'Parse error');
    return;
  }

  const { id, method, params } = request;

  // Handle Notifications (no ID)
  if (id === undefined || id === null) {
    if (method === 'notifications/initialized') {
      // client initialized notification
    }
    return;
  }

  // Handle Methods
  if (method === 'initialize') {
    sendResponse(id, {
      protocolVersion: '2024-11-05',
      capabilities: {
        tools: {}
      },
      serverInfo: {
        name: 'aas-catalog-mcp',
        version: '1.0.0'
      }
    });
    return;
  }

  if (method === 'tools/list') {
    sendResponse(id, { tools: TOOLS });
    return;
  }

  if (method === 'tools/call') {
    const { name, arguments: args = {} } = params || {};

    try {
      if (name === 'aas_search_skills') {
        const results = searchSkills(args.query || '', args.category, args.limit || 10);
        const formatted = results.map((r) => `### \`${r.id}\` (${r.category} | ${r.risk || 'safe'})\n${r.description}`).join('\n\n');
        sendResponse(id, {
          content: [
            {
              type: 'text',
              text: results.length > 0 ? formatted : `Nenhuma skill encontrada para a busca: "${args.query}"`
            }
          ]
        });
        return;
      }

      if (name === 'aas_get_skill') {
        const content = await fetchSkillContent(args.skill_id);
        sendResponse(id, {
          content: [
            {
              type: 'text',
              text: content
            }
          ]
        });
        return;
      }

      if (name === 'aas_install_skill') {
        const { targetDir, files } = await installSkill(args.skill_id);
        sendResponse(id, {
          content: [
            {
              type: 'text',
              text: `Skill '${args.skill_id}' instalada com sucesso!\nDiretório: ${targetDir}\nArquivos criados: ${files.join(', ')}`
            }
          ]
        });
        return;
      }

      if (name === 'aas_list_categories') {
        const catalog = loadCatalog();
        const categories: Record<string, number> = {};
        for (const s of catalog) {
          categories[s.category] = (categories[s.category] || 0) + 1;
        }
        const sorted = Object.entries(categories).sort((a, b) => b[1] - a[1]);
        const text = sorted.map(([c, count]) => `- **${c}**: ${count} skills`).join('\n');
        sendResponse(id, {
          content: [
            {
              type: 'text',
              text: `Total de ${sorted.length} categorias:\n\n${text}`
            }
          ]
        });
        return;
      }

      sendError(id, -32601, `Unknown tool: ${name}`);
    } catch (err: any) {
      sendResponse(id, {
        isError: true,
        content: [
          {
            type: 'text',
            text: `Erro ao executar ${name}: ${err.message}`
          }
        ]
      });
    }
    return;
  }

  sendError(id, -32601, `Method not found: ${method}`);
});
