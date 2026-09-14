import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface SlideToConfirmProps {
  onConfirm: () => void;
  text?: string;
  confirmedText?: string;
  className?: string;
}

export const SlideToConfirm: React.FC<SlideToConfirmProps> = ({
  onConfirm,
  text = 'Deslize para Confirmar',
  confirmedText = 'Confirmado!',
  className = '',
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragProgress, setDragProgress] = useState(0); // 0 to 1
  const [isConfirmed, setIsConfirmed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    if (isConfirmed) return;
    setIsDragging(true);
  };

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || isConfirmed || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const handleWidth = 48; // thumb width
      const maxDrag = rect.width - handleWidth;
      const currentDrag = Math.max(0, Math.min(clientX - rect.left - handleWidth / 2, maxDrag));
      const progress = currentDrag / maxDrag;
      setDragProgress(progress);

      if (progress >= 0.9) {
        setIsConfirmed(true);
        setIsDragging(false);
        setDragProgress(1);
        onConfirm();
      }
    },
    [isDragging, isConfirmed, onConfirm]
  );

  const handleEnd = useCallback(() => {
    if (!isDragging || isConfirmed) return;
    setIsDragging(false);
    if (dragProgress < 0.9) {
      setDragProgress(0);
    }
  }, [isDragging, isConfirmed, dragProgress]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();
    const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => handleEnd();

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', onTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [isDragging, handleMove, handleEnd]);

  return (
    <div
      ref={containerRef}
      className={`relative h-12 w-full max-w-md rounded-full bg-slate-900/90 border border-slate-700/60 p-1 select-none overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Background Track Fill */}
      <div
        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full transition-all duration-75"
        style={{ width: `${Math.max(48, dragProgress * 100)}%`, opacity: isConfirmed ? 1 : 0.8 }}
      />

      {/* Label Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-xs font-semibold uppercase tracking-wider text-slate-300">
        {isConfirmed ? (
          <span className="text-white flex items-center gap-1.5 animate-pulse">
            <Check className="w-4 h-4" /> {confirmedText}
          </span>
        ) : (
          <span style={{ opacity: 1 - dragProgress * 1.2 }}>{text}</span>
        )}
      </div>

      {/* Slide Thumb */}
      <div
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        className={`relative z-10 h-10 w-10 rounded-full flex items-center justify-center cursor-grab active:cursor-grabbing shadow-lg transition-transform duration-75 ${
          isConfirmed
            ? 'bg-white text-emerald-600 pointer-events-none'
            : 'bg-emerald-500 text-white hover:scale-105'
        }`}
        style={{
          transform: `translateX(${dragProgress * ((containerRef.current?.getBoundingClientRect().width || 280) - 48)}px)`,
        }}
      >
        {isConfirmed ? <Check className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
      </div>
    </div>
  );
};
