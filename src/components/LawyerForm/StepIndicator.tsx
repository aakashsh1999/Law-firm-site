
import React from 'react';
import { Check } from 'lucide-react';
import { Step } from '@/hooks/use-step-form';
import { motion } from 'framer-motion';

type StepIndicatorProps = {
  steps: Step[];
  activeIndex: number;
  onStepClick: (index: number) => void;
};

const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  activeIndex,
  onStepClick,
}) => {
  return (
    <div className="step-indicator">
      {steps.map((step, index) => {
        const isActive = index === activeIndex;
        const isCompleted = step.isCompleted;
        
        return (
          <React.Fragment key={step.id}>
            {/* Step dot */}
            <motion.button
              type="button"
              className={`relative h-8 w-8 rounded-full flex items-center justify-center cursor-pointer border transition-all ${
                isActive
                  ? 'border-primary bg-primary/10'
                  : isCompleted
                  ? 'border-primary/50 bg-primary/5 hover:bg-primary/10'
                  : 'border-muted-foreground/30 hover:border-muted-foreground/50'
              }`}
              onClick={() => onStepClick(index)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {isCompleted ? (
                <Check size={14} className="text-primary" />
              ) : (
                <span
                  className={`text-xs font-medium ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {index + 1}
                </span>
              )}
            </motion.button>
            
            {/* Connector line between dots */}
            {index < steps.length - 1 && (
              <motion.div
                className="step-connector"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              >
                <div
                  className={`h-full ${
                    isCompleted && steps[index + 1].isCompleted
                      ? 'bg-primary/60'
                      : 'bg-muted-foreground/20'
                  }`}
                />
              </motion.div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
