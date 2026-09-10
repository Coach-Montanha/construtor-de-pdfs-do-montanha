import React from "react";
import { cn } from "../../lib/utils";
import { Check } from "lucide-react";

export interface StepItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface StepperProps {
  steps: StepItem[];
  activeStep: number;
  onStepClick?: (stepIndex: number) => void;
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  activeStep,
  onStepClick,
  className,
}) => {
  return (
    <div className={cn("w-full select-none font-sans", className)}>
      <div className="flex items-center justify-between relative">
        {steps.map((step, index) => {
          const isCompleted = index < activeStep;
          const isActive = index === activeStep;
          const isClickable = onStepClick !== undefined && (isCompleted || index <= activeStep + 1);
          const StepIcon = step.icon;

          return (
            <React.Fragment key={step.id}>
              {/* Step Node */}
              <div
                onClick={() => isClickable && onStepClick?.(index)}
                className={cn(
                  "flex flex-col items-center group relative z-10 transition-all duration-200",
                  isClickable ? "cursor-pointer" : "cursor-default"
                )}
              >
                {/* Circle / Icon Pill */}
                <div
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-black transition-all duration-200 border-2",
                    isCompleted &&
                      "bg-amber-400 text-black border-amber-500 shadow-xs group-hover:bg-amber-500",
                    isActive &&
                      "bg-zinc-950 text-amber-400 border-amber-400 ring-4 ring-amber-400/20 shadow-md scale-105",
                    !isCompleted &&
                      !isActive &&
                      "bg-zinc-900/60 text-zinc-500 border-zinc-700 group-hover:border-zinc-500"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : StepIcon ? (
                    <StepIcon className="w-4 h-4" />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>

                {/* Step Labels */}
                <div className="mt-2 text-center max-w-[90px] sm:max-w-[120px]">
                  <p
                    className={cn(
                      "text-[11px] font-black uppercase tracking-wider leading-tight truncate transition-colors",
                      isActive && "text-amber-400 font-extrabold",
                      isCompleted && "text-zinc-200",
                      !isCompleted && !isActive && "text-zinc-500"
                    )}
                  >
                    {step.title}
                  </p>
                  {step.description && (
                    <p className="hidden sm:block text-[9px] text-zinc-400 opacity-70 truncate mt-0.5">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Connecting Line between steps */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-2 sm:mx-4 h-0.5 relative -top-3.5 bg-zinc-800 rounded">
                  <div
                    className="h-full bg-amber-400 transition-all duration-300 rounded"
                    style={{
                      width: isCompleted ? "100%" : isActive ? "50%" : "0%",
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
