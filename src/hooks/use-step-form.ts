
import { useState, useCallback, useMemo } from 'react';
import { FormikProps } from 'formik';

export type Step = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  validateFields?: string[];
  fields: string[];
};

export type UseStepFormProps = {
  steps: Omit<Step, 'isCompleted' | 'isActive'>[];
  formik: FormikProps<any>;
};

export const useStepForm = ({ steps: initialSteps, formik }: UseStepFormProps) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  // Process the steps array to add isCompleted and isActive properties
  const steps = useMemo(() => {
    return initialSteps.map((step, index) => ({
      ...step,
      isCompleted: completedSteps[index] || false,
      isActive: index === activeStepIndex,
    }));
  }, [initialSteps, activeStepIndex, completedSteps]);

  // Calculate progress percentage
  const progressPercentage = useMemo(() => {
    const completed = Object.values(completedSteps).filter(Boolean).length;
    const total = initialSteps.length;
    return Math.floor((completed / total) * 100);
  }, [completedSteps, initialSteps.length]);

  // Get current step
  const currentStep = useMemo(() => steps[activeStepIndex], [steps, activeStepIndex]);

  // Check if fields in the current step are valid
  const isStepValid = useCallback((stepIndex: number) => {
    const step = initialSteps[stepIndex];
    const fields = step.validateFields || step.fields;
    const { errors, touched } = formik;

    // Check if any required fields are empty or have errors
    for (const field of fields) {
      // Handle nested fields (objects)
      if (field.includes('.')) {
        const [parent, child] = field.split('.');
        const parentErrors = errors[parent];
        const parentTouched = touched[parent];

        if (
          parentErrors && 
          typeof parentErrors === 'object' && 
          child in parentErrors &&
          parentTouched && 
          typeof parentTouched === 'object' && 
          child in parentTouched
        ) {
          return false;
        }
      } 
      // Handle array fields with special syntax: fields[]
      else if (field.endsWith('[]')) {
        const arrayField = field.slice(0, -2);
        const arrayErrors = errors[arrayField];
        const arrayTouched = touched[arrayField];

        if (
          arrayErrors &&
          Array.isArray(arrayErrors) &&
          arrayErrors.length > 0 &&
          arrayTouched &&
          Array.isArray(arrayTouched)
        ) {
          return false;
        }
      }
      // Regular fields
      else if (field in errors && field in touched) {
        return false;
      }
    }

    return true;
  }, [formik, initialSteps]);

  // Move to the next step
  const nextStep = useCallback(() => {
    const isValid = isStepValid(activeStepIndex);
    
    if (isValid) {
      setCompletedSteps(prev => ({ ...prev, [activeStepIndex]: true }));
      setActiveStepIndex(prev => Math.min(prev + 1, steps.length - 1));
      return true;
    } else {
      // Touch all fields in the current step to show validation errors
      const currentStepFields = initialSteps[activeStepIndex].fields;
      
      currentStepFields.forEach(field => {
        // Handle nested fields
        if (field.includes('.')) {
          const [parent, child] = field.split('.');
          formik.setFieldTouched(`${parent}.${child}`, true, false);
        } 
        // Handle array fields
        else if (field.endsWith('[]')) {
          const arrayField = field.slice(0, -2);
          const arrayValue = formik.values[arrayField];
          
          if (Array.isArray(arrayValue)) {
            arrayValue.forEach((_, index) => {
              Object.keys(arrayValue[index]).forEach(key => {
                formik.setFieldTouched(`${arrayField}[${index}].${key}`, true, false);
              });
            });
          }
        } 
        // Regular fields
        else {
          formik.setFieldTouched(field, true, false);
        }
      });
      
      // Validate all fields
      formik.validateForm();
      return false;
    }
  }, [activeStepIndex, formik, initialSteps, isStepValid, steps.length]);

  // Move to the previous step
  const prevStep = useCallback(() => {
    setActiveStepIndex(prev => Math.max(prev - 1, 0));
  }, []);

  // Go to a specific step
  const goToStep = useCallback((index: number) => {
    if (index >= 0 && index < steps.length) {
      // Can only navigate to completed steps or the next incomplete step
      if (completedSteps[index - 1] || index <= activeStepIndex) {
        setActiveStepIndex(index);
      }
    }
  }, [steps.length, completedSteps, activeStepIndex]);

  // Check if current step is the first step
  const isFirstStep = activeStepIndex === 0;

  // Check if current step is the last step
  const isLastStep = activeStepIndex === steps.length - 1;

  return {
    steps,
    currentStep,
    activeStepIndex,
    isFirstStep,
    isLastStep,
    nextStep,
    prevStep,
    goToStep,
    progressPercentage,
  };
};
