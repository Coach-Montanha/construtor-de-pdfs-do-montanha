import React, { useState, useRef, DragEvent, ChangeEvent } from "react";
import { cn } from "../../lib/utils";
import { Upload, FileText, X, AlertCircle, CheckCircle2, FileUp } from "lucide-react";
import { Button } from "./button";

export interface FileUploadProps {
  accept?: string;
  maxSizeMB?: number;
  multiple?: boolean;
  onFilesSelected: (files: File[]) => void;
  selectedFiles?: File[];
  onRemoveFile?: (index: number) => void;
  title?: string;
  description?: string;
  tags?: string[];
  className?: string;
  inputTestId?: string;
  disabled?: boolean;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
}

export const FileUpload: React.FC<FileUploadProps> = ({
  accept,
  maxSizeMB = 50,
  multiple = false,
  onFilesSelected,
  selectedFiles = [],
  onRemoveFile,
  title = "Arraste e solte seus arquivos aqui",
  description = "Ou clique para selecionar arquivos do seu dispositivo.",
  tags = [],
  className,
  inputTestId = "file-upload-input",
  disabled = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const validateAndHandleFiles = (files: FileList | File[]) => {
    setErrorMessage(null);
    const validFiles: File[] = [];
    const maxSizeBytes = maxSizeMB * 1024 * 1024;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      // Check size
      if (file.size > maxSizeBytes) {
        setErrorMessage(`O arquivo "${file.name}" ultrapassa o limite de ${maxSizeMB}MB.`);
        continue;
      }

      // Check accept format if specified
      if (accept) {
        const acceptList = accept.split(",").map((a) => a.trim().toLowerCase());
        const ext = "." + file.name.split(".").pop()?.toLowerCase();
        const matchesExt = acceptList.includes(ext);
        const matchesMime = acceptList.some((a) => {
          if (a.endsWith("/*")) {
            const typePrefix = a.replace("/*", "");
            return file.type.startsWith(typePrefix);
          }
          return file.type.toLowerCase() === a;
        });

        if (!matchesExt && !matchesMime) {
          setErrorMessage(`Arquivo "${file.name}" não é um tipo aceito (${accept}).`);
          continue;
        }
      }

      validFiles.push(file);
      if (!multiple) break;
    }

    if (validFiles.length > 0) {
      onFilesSelected(validFiles);
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (disabled) return;
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndHandleFiles(e.dataTransfer.files);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndHandleFiles(e.target.files);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={cn("w-full space-y-3 font-sans", className)}>
      {/* Dropzone Container */}
      <div
        onClick={() => !disabled && fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          "relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center gap-3.5 group select-none",
          isDragging
            ? "border-amber-400 bg-amber-400/10 scale-[1.005] shadow-lg"
            : "border-zinc-700 hover:border-amber-400/70 bg-zinc-900/40 hover:bg-zinc-900/70",
          disabled && "opacity-50 cursor-not-allowed pointer-events-none"
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          data-testid={inputTestId}
          className="hidden"
          onChange={handleInputChange}
          disabled={disabled}
        />

        {/* Upload Icon Badge */}
        <div
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 border",
            isDragging
              ? "bg-amber-400 text-black border-amber-500 scale-110"
              : "bg-zinc-800/80 group-hover:bg-amber-400/10 text-zinc-400 group-hover:text-amber-400 border-zinc-700 group-hover:border-amber-400/40"
          )}
        >
          <Upload className={cn("w-7 h-7 transition-transform group-hover:-translate-y-0.5", isDragging && "animate-bounce")} />
        </div>

        {/* Texts */}
        <div className="space-y-1">
          <h3 className="text-sm font-black text-zinc-100 uppercase tracking-wider group-hover:text-amber-300 transition-colors">
            {title}
          </h3>
          <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Format Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-800/90 text-zinc-400 border border-zinc-700/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Error Message */}
      {errorMessage && (
        <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Selected Files List Cards */}
      {selectedFiles.length > 0 && (
        <div className="space-y-2 pt-1">
          <div className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center justify-between">
            <span>Arquivos Selecionados ({selectedFiles.length})</span>
            <span className="text-[10px] text-amber-400">Pronto para processamento</span>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {selectedFiles.map((file, idx) => (
              <div
                key={`${file.name}-${idx}`}
                className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-zinc-200 truncate">{file.name}</p>
                    <p className="text-[10px] font-mono text-zinc-400">{formatFileSize(file.size)}</p>
                  </div>
                </div>

                {onRemoveFile && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemoveFile(idx);
                    }}
                    className="p-1 rounded text-zinc-400 hover:text-red-400 hover:bg-zinc-800 transition-colors cursor-pointer"
                    title="Remover arquivo"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
