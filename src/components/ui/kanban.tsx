import React, { useState, DragEvent } from "react";
import { cn } from "../../lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  GripVertical,
  Plus,
  FileText,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";
import { Button } from "./button";

export interface KanbanColumnDef {
  id: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
}

export interface KanbanItemDef {
  id: string;
  columnId: string;
  title: string;
  category?: string;
  meta?: string;
  description?: string;
  tags?: string[];
  rawItem?: any;
}

export interface KanbanProps {
  columns: KanbanColumnDef[];
  items: KanbanItemDef[];
  onMoveItem: (itemId: string, targetColumnId: string) => void;
  onItemClick?: (item: KanbanItemDef) => void;
  renderItemExtra?: (item: KanbanItemDef) => React.ReactNode;
  className?: string;
}

export const Kanban: React.FC<KanbanProps> = ({
  columns,
  items,
  onMoveItem,
  onItemClick,
  renderItemExtra,
  className,
}) => {
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [dragOverColumnId, setDragOverColumnId] = useState<string | null>(null);

  const handleDragStart = (e: DragEvent<HTMLDivElement>, itemId: string) => {
    e.dataTransfer.setData("text/plain", itemId);
    setDraggedItemId(itemId);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, colId: string) => {
    e.preventDefault();
    setDragOverColumnId(colId);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOverColumnId(null);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>, colId: string) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("text/plain") || draggedItemId;
    if (itemId) {
      onMoveItem(itemId, colId);
    }
    setDraggedItemId(null);
    setDragOverColumnId(null);
  };

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4 font-sans", className)}>
      {columns.map((column, colIdx) => {
        const columnItems = items.filter((item) => item.columnId === column.id);
        const ColIcon = column.icon;
        const isDragTarget = dragOverColumnId === column.id;

        return (
          <div
            key={column.id}
            onDragOver={(e) => handleDragOver(e, column.id)}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, column.id)}
            className={cn(
              "flex flex-col rounded-xl border-2 transition-all min-h-[460px] bg-zinc-950/60 p-3.5 space-y-3",
              isDragTarget
                ? "border-amber-400 bg-amber-400/5 ring-2 ring-amber-400/30"
                : "border-zinc-800 hover:border-zinc-700"
            )}
          >
            {/* Column Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5">
              <div className="flex items-center gap-2">
                {ColIcon && <ColIcon className="w-4 h-4 text-amber-400" />}
                <h3 className="font-black text-xs uppercase tracking-wider text-zinc-100">
                  {column.title}
                </h3>
              </div>
              <span
                className={cn(
                  "font-mono text-xs font-black px-2 py-0.5 rounded border",
                  column.badgeColor || "bg-zinc-800 text-zinc-200 border-zinc-700"
                )}
              >
                {columnItems.length}
              </span>
            </div>

            {column.description && (
              <p className="text-[11px] text-zinc-400 leading-snug">
                {column.description}
              </p>
            )}

            {/* Column Cards Container */}
            <div className="flex-1 space-y-2.5 overflow-y-auto max-h-[600px] pr-1 custom-scrollbar">
              {columnItems.length === 0 ? (
                <div className="h-40 border-2 border-dashed border-zinc-800/80 rounded-lg flex flex-col items-center justify-center text-center p-4 text-zinc-500 text-xs font-mono">
                  <span>Nenhum texto nesta coluna</span>
                  <span className="text-[10px] text-zinc-600 mt-1">Arraste um card até aqui</span>
                </div>
              ) : (
                columnItems.map((item) => {
                  const canMoveLeft = colIdx > 0;
                  const canMoveRight = colIdx < columns.length - 1;

                  return (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, item.id)}
                      onClick={() => onItemClick?.(item)}
                      className={cn(
                        "theme-app-card p-3.5 rounded-lg border-2 border-zinc-800 hover:border-amber-400/80 transition-all space-y-2 cursor-grab active:cursor-grabbing shadow-xs group",
                        draggedItemId === item.id && "opacity-40"
                      )}
                    >
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-1.5 flex-wrap">
                        {item.category && (
                          <span className="font-mono text-[9px] font-black px-1.5 py-0.5 rounded bg-amber-400 text-black border border-black uppercase truncate max-w-[120px]">
                            {item.category}
                          </span>
                        )}
                        {item.meta && (
                          <span className="font-mono text-[9px] text-zinc-400 ml-auto truncate">
                            {item.meta}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="font-black text-xs uppercase tracking-tight text-zinc-100 group-hover:text-amber-300 transition-colors leading-snug line-clamp-2">
                        {item.title}
                      </h4>

                      {/* Description Preview */}
                      {item.description && (
                        <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {/* Extra custom node */}
                      {renderItemExtra && renderItemExtra(item)}

                      {/* Card Moving Actions */}
                      <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between gap-1 text-xs">
                        <div className="flex items-center gap-1">
                          {canMoveLeft && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onMoveItem(item.id, columns[colIdx - 1].id);
                              }}
                              className="p-1 rounded text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                              title={`Mover para ${columns[colIdx - 1].title}`}
                            >
                              <ArrowLeft className="w-3.5 h-3.5" />
                            </button>
                          )}
                          {canMoveRight && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onMoveItem(item.id, columns[colIdx + 1].id);
                              }}
                              className="p-1 rounded text-zinc-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                              title={`Mover para ${columns[colIdx + 1].title}`}
                            >
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        <span className="text-[9px] font-mono text-zinc-500 opacity-60 flex items-center gap-0.5">
                          <GripVertical className="w-3 h-3" />
                          arrastar
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
