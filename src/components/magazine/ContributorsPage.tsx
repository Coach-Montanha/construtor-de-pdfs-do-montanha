import React from "react";
import { MagazineProject, MagazineTheme } from "../../types/magazine";
import { Users, Instagram, Building, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

interface ContributorsPageProps {
  project: MagazineProject;
  theme: MagazineTheme;
  pageNumber?: number;
  isPrintMode?: boolean;
}

export const ContributorsPage: React.FC<ContributorsPageProps> = ({
  project,
  theme,
  pageNumber = 3,
  isPrintMode = false,
}) => {
  const { editorialInfo, coverConfig } = project;
  const contributors = editorialInfo.contributors || [];

  return (
    <div
      className={`magazine-page relative w-full h-full bg-[#0B0F19] text-white overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none ${
        isPrintMode ? "print-page" : "shadow-2xl rounded-sm"
      }`}
      style={{
        aspectRatio: "210 / 297",
        fontFamily: theme.fontSerif ? "Georgia, serif" : "inherit",
      }}
    >
      {/* Background Subtle Industrial Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Header Block: Minimalist Bold Header */}
      <div className="relative z-10 border-b-2 border-amber-400 pb-3 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="bg-amber-400 text-black font-black text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded-xs">
              EDITORIAL DOSSIER
            </span>
            <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              {project.volume} // {coverConfig.editionNumber || "ISSUE #01"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter uppercase text-white leading-none">
            CONTRIBUTORS <span className="text-amber-400 font-mono text-2xl sm:text-3xl">// COLABORADORES</span>
          </h1>
        </div>

        <div className="text-right hidden sm:block font-mono text-[10px] text-slate-400">
          <p className="font-bold text-amber-400">MASTER COACHES & AUTHORS</p>
          <p className="tracking-widest">UNCONVENTIONAL KNOWLEDGE</p>
        </div>
      </div>

      {/* Main Grid: Asymmetric Card System with Graphic Accents */}
      <div className="relative z-10 my-4 flex-1 overflow-hidden flex flex-col justify-between">
        <div className="space-y-3.5">
          {contributors.map((c, idx) => (
            <div
              key={c.id}
              className="relative group bg-slate-900/80 border border-slate-800 hover:border-amber-400 rounded-lg p-3 sm:p-4 transition-all shadow-md flex flex-col sm:flex-row items-start gap-4 overflow-hidden"
            >
              {/* Vertical Typographic Side-Tab along the card margin */}
              <div className="absolute top-0 right-0 bottom-0 w-6 bg-black/70 border-l border-slate-800 flex items-center justify-center pointer-events-none">
                <span className="transform rotate-90 text-[7.5px] font-mono font-black text-amber-400/80 tracking-widest uppercase whitespace-nowrap">
                  {c.name.split(" ")[0]} // PROTOCOL
                </span>
              </div>

              {/* 1. Thumbnail Photo: High-Contrast Athletic Portrait in B&W / Desaturated Tone */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden border-2 border-slate-700 group-hover:border-amber-400 shrink-0 transition-colors shadow-inner">
                <img
                  src={c.photo}
                  alt={c.name}
                  className="w-full h-full object-cover filter contrast-125 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-1 left-1 bg-black/80 px-1 py-0.5 rounded text-[7px] font-mono font-bold text-amber-400 uppercase">
                  #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
              </div>

              {/* 2. Name & Credentials, 3. Short Bio, 4. Contact / Handle */}
              <div className="flex-1 space-y-1.5 pr-6">
                {/* Name & Credentials */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-sm sm:text-base text-white uppercase tracking-tight group-hover:text-amber-300 transition-colors">
                      {c.name}
                    </h3>
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  </div>
                  <p className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wide">
                    {c.title}
                  </p>
                </div>

                {/* Short Bio: Coaching expertise & methodology */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {c.bio}
                </p>

                {/* Contact, Handle & Facility */}
                <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-slate-800/80 text-[10px] font-mono">
                  {c.handle && (
                    <div className="flex items-center gap-1 text-slate-300 font-semibold">
                      <Instagram className="w-3 h-3 text-amber-400" />
                      <span>{c.handle}</span>
                    </div>
                  )}
                  {c.facility && (
                    <div className="flex items-center gap-1 text-slate-400">
                      <Building className="w-3 h-3 text-slate-500" />
                      <span className="uppercase text-[9px]">{c.facility}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Spotlight / Studio Banner at the Bottom */}
        <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-lg flex items-center justify-between mt-2">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-amber-400/10 border border-amber-400/30 rounded text-amber-400 font-mono font-bold text-xs">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-black text-white uppercase tracking-tight">
                MONTANHA PERFORMANCE LAB // FACILITIES
              </h4>
              <p className="text-[9px] font-mono text-slate-400">
                Treinamento não-convencional, biomecânica e avaliações metabólicas.
              </p>
            </div>
          </div>
          <div className="text-right font-mono text-[9px] text-amber-400 font-bold uppercase hidden sm:block">
            UNCONVENTIONAL ALLIANCE
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar & Page Numbering */}
      <div className="relative z-10 border-t border-slate-800 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold uppercase">
        <span>{project.title} • CONTRIBUTORS DIRECTORY</span>
        <span className="bg-slate-900 text-amber-400 border border-slate-700 px-2 py-0.5 rounded">
          PAGE {pageNumber < 10 ? `0${pageNumber}` : pageNumber}
        </span>
      </div>
    </div>
  );
};
