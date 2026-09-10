import React, { useState, useMemo } from "react";
import { cn } from "../../lib/utils";
import {
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  CheckSquare,
  Square,
  MinusSquare,
  Layers,
  Sparkles,
  Trash2,
  CheckCircle2,
  FileText,
  Archive,
  ArrowUpDown,
} from "lucide-react";
import { Button } from "./button";

export interface DataGridColumn<T> {
  key: string;
  header: string;
  width?: string;
  sortable?: boolean;
  align?: "left" | "center" | "right";
  render?: (row: T, index: number) => React.ReactNode;
}

export interface DataGridAction<T> {
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  onClick: (selectedRows: T[]) => void;
  className?: string;
}

export interface DataGridProps<T> {
  data: T[];
  columns: DataGridColumn<T>[];
  keyExtractor: (item: T) => string;
  selectedIds?: string[];
  onSelectionChange?: (selectedIds: string[]) => void;
  bulkActions?: DataGridAction<T>[];
  emptyMessage?: string;
  className?: string;
}

export function DataGrid<T>({
  data,
  columns,
  keyExtractor,
  selectedIds = [],
  onSelectionChange,
  bulkActions = [],
  emptyMessage = "Nenhum registro encontrado.",
  className,
}: DataGridProps<T>) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleSort = (key: string) => {
    if (sortKey === key) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else {
        setSortKey(null);
        setSortDirection("asc");
      }
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  // Sort rows if sortKey is set
  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a: any, b: any) => {
      const valA = a[sortKey];
      const valB = b[sortKey];

      if (typeof valA === "number" && typeof valB === "number") {
        return sortDirection === "asc" ? valA - valB : valB - valA;
      }
      const strA = String(valA || "").toLowerCase();
      const strB = String(valB || "").toLowerCase();
      if (strA < strB) return sortDirection === "asc" ? -1 : 1;
      if (strA > strB) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortDirection]);

  // Selection helpers
  const allIds = useMemo(() => data.map(keyExtractor), [data, keyExtractor]);
  const isAllSelected = data.length > 0 && allIds.every((id) => selectedIds.includes(id));
  const isPartiallySelected =
    !isAllSelected && allIds.some((id) => selectedIds.includes(id));

  const handleToggleSelectAll = () => {
    if (!onSelectionChange) return;
    if (isAllSelected) {
      onSelectionChange([]);
    } else {
      onSelectionChange(allIds);
    }
  };

  const handleToggleRow = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onSelectionChange) return;
    if (selectedIds.includes(id)) {
      onSelectionChange(selectedIds.filter((item) => item !== id));
    } else {
      onSelectionChange([...selectedIds, id]);
    }
  };

  const selectedRows = useMemo(() => {
    const idSet = new Set(selectedIds);
    return data.filter((row) => idSet.has(keyExtractor(row)));
  }, [data, selectedIds, keyExtractor]);

  return (
    <div className={cn("w-full space-y-2.5 font-sans", className)}>
      {/* Bulk Action Toolbar */}
      {selectedIds.length > 0 && (
        <div className="p-2.5 px-3 rounded-lg bg-zinc-900 border-2 border-amber-400 text-zinc-100 flex flex-wrap items-center justify-between gap-2 shadow-md animate-in fade-in-50 duration-200">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-amber-400 text-black">
              {selectedIds.length}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">
              {selectedIds.length === 1 ? "item selecionado" : "itens selecionados"}
            </span>
            <button
              type="button"
              onClick={() => onSelectionChange?.([])}
              className="text-[11px] text-zinc-400 hover:text-white underline cursor-pointer ml-2"
            >
              Desmarcar todos
            </button>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {bulkActions.map((action, idx) => {
              const ActionIcon = action.icon;
              return (
                <Button
                  key={idx}
                  size="sm"
                  variant={action.variant || "default"}
                  onClick={() => action.onClick(selectedRows)}
                  className={cn(
                    "h-8 text-xs font-black cursor-pointer flex items-center gap-1.5",
                    action.className
                  )}
                >
                  {ActionIcon && <ActionIcon className="w-3.5 h-3.5" />}
                  <span>{action.label}</span>
                </Button>
              );
            })}
          </div>
        </div>
      )}

      {/* Table Container */}
      <div className="w-full overflow-x-auto rounded-xl border-2 border-zinc-800 bg-zinc-950/90 shadow-sm custom-scrollbar">
        <table className="w-full text-left border-collapse text-xs">
          {/* Table Header */}
          <thead>
            <tr className="border-b-2 border-zinc-800 bg-zinc-900/90 text-zinc-300 uppercase font-mono tracking-wider text-[11px]">
              {onSelectionChange && (
                <th className="py-3 px-3.5 w-10 text-center">
                  <button
                    type="button"
                    onClick={handleToggleSelectAll}
                    className="cursor-pointer text-zinc-400 hover:text-amber-400 transition-colors flex items-center justify-center"
                    title={isAllSelected ? "Desmarcar todos" : "Selecionar todos"}
                  >
                    {isAllSelected ? (
                      <CheckSquare className="w-4 h-4 text-amber-400" />
                    ) : isPartiallySelected ? (
                      <MinusSquare className="w-4 h-4 text-amber-400" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                </th>
              )}

              {columns.map((col) => (
                <th
                  key={col.key}
                  style={{ width: col.width }}
                  className={cn(
                    "py-3 px-3.5 font-black select-none",
                    col.sortable && "cursor-pointer hover:text-amber-400 transition-colors",
                    col.align === "right" && "text-right",
                    col.align === "center" && "text-center"
                  )}
                  onClick={() => col.sortable && handleSort(col.key)}
                >
                  <div
                    className={cn(
                      "flex items-center gap-1.5",
                      col.align === "right" && "justify-end",
                      col.align === "center" && "justify-center"
                    )}
                  >
                    <span>{col.header}</span>
                    {col.sortable && (
                      <span className="opacity-70">
                        {sortKey === col.key ? (
                          sortDirection === "asc" ? (
                            <ChevronUp className="w-3.5 h-3.5 text-amber-400" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
                          )
                        ) : (
                          <ArrowUpDown className="w-3 h-3 opacity-40" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-zinc-800/80">
            {sortedData.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (onSelectionChange ? 1 : 0)}
                  className="py-8 text-center text-zinc-500 font-mono text-xs"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              sortedData.map((row, index) => {
                const id = keyExtractor(row);
                const isSelected = selectedIds.includes(id);

                return (
                  <tr
                    key={id}
                    className={cn(
                      "transition-colors hover:bg-zinc-900/60",
                      isSelected ? "bg-amber-400/10" : "bg-transparent"
                    )}
                  >
                    {onSelectionChange && (
                      <td className="py-3 px-3.5 text-center">
                        <button
                          type="button"
                          onClick={(e) => handleToggleRow(id, e)}
                          className="cursor-pointer text-zinc-400 hover:text-amber-400 transition-colors flex items-center justify-center"
                        >
                          {isSelected ? (
                            <CheckSquare className="w-4 h-4 text-amber-400" />
                          ) : (
                            <Square className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    )}

                    {columns.map((col) => (
                      <td
                        key={col.key}
                        className={cn(
                          "py-3 px-3.5",
                          col.align === "right" && "text-right",
                          col.align === "center" && "text-center"
                        )}
                      >
                        {col.render
                          ? col.render(row, index)
                          : (row as any)[col.key] ?? "-"}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
