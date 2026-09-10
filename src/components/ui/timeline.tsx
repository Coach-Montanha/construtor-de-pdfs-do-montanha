import React from "react";
import { cn } from "../../lib/utils";
import { Calendar, Clock, CheckCircle2, Circle } from "lucide-react";

export interface TimelineItem {
  id: string;
  date?: string;
  title: string;
  subtitle?: string;
  icon?: React.ComponentType<{ className?: string }>;
  status?: string;
  statusVariant?: "default" | "success" | "warning" | "info" | "neutral";
  content?: React.ReactNode;
  actions?: React.ReactNode;
}

export interface TimelineProps {
  items: TimelineItem[];
  className?: string;
  emptyMessage?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  className,
  emptyMessage = "Nenhum evento registrado no histórico.",
}) => {
  if (items.length === 0) {
    return (
      <div className="py-12 text-center text-zinc-500 font-mono text-xs">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={cn("relative pl-6 sm:pl-8 space-y-8 font-sans", className)}>
      {/* Continuous Vertical Connecting Line */}
      <div className="absolute left-[15px] sm:left-[19px] top-3 bottom-3 w-0.5 bg-zinc-800" />

      {items.map((item, index) => {
        const ItemIcon = item.icon;

        return (
          <div key={item.id} className="relative group">
            {/* Milestone Icon Node */}
            <div
              className={cn(
                "absolute -left-[23px] sm:-left-[27px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-md",
                item.statusVariant === "success"
                  ? "bg-zinc-950 text-emerald-400 border-emerald-500"
                  : item.statusVariant === "warning"
                  ? "bg-zinc-950 text-amber-400 border-amber-500"
                  : item.statusVariant === "info"
                  ? "bg-zinc-950 text-blue-400 border-blue-500"
                  : "bg-zinc-950 text-zinc-400 border-zinc-700"
              )}
            >
              {ItemIcon ? (
                <ItemIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              ) : (
                <div className="w-2 h-2 rounded-full bg-amber-400" />
              )}
            </div>

            {/* Timeline Item Card */}
            <div className="theme-app-card p-4 sm:p-5 rounded-xl border-2 hover:border-amber-400/80 transition-all space-y-3 shadow-xs">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-2.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-black text-sm uppercase tracking-tight text-zinc-100">
                    {item.title}
                  </h4>
                  {item.status && (
                    <span
                      className={cn(
                        "font-mono text-[9px] font-black px-2 py-0.5 rounded border uppercase",
                        item.statusVariant === "success" &&
                          "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
                        item.statusVariant === "warning" &&
                          "bg-amber-500/15 text-amber-300 border-amber-500/30",
                        item.statusVariant === "info" &&
                          "bg-blue-500/15 text-blue-300 border-blue-500/30",
                        (!item.statusVariant || item.statusVariant === "neutral") &&
                          "bg-zinc-800 text-zinc-300 border-zinc-700"
                      )}
                    >
                      {item.status}
                    </span>
                  )}
                </div>

                {item.date && (
                  <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    <span>{item.date}</span>
                  </div>
                )}
              </div>

              {/* Subtitle / Notes */}
              {item.subtitle && (
                <p className="text-xs text-zinc-300 opacity-90 leading-relaxed">
                  {item.subtitle}
                </p>
              )}

              {/* Custom Content (Cover, Stats, etc.) */}
              {item.content && <div>{item.content}</div>}

              {/* Actions Footer */}
              {item.actions && (
                <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between gap-2 flex-wrap">
                  {item.actions}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
