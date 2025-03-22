
import React from 'react';
import { useField } from 'formik';
import { Check } from 'lucide-react';

type CheckboxFieldProps = {
  label: string;
  name: string;
  className?: string;
  required?: boolean;
};

const CheckboxField: React.FC<CheckboxFieldProps> = ({ 
  label, 
  className = "",
  ...props 
}) => {
  const [field, meta, helpers] = useField({ ...props, type: 'checkbox' });
  const { setValue } = helpers;
  const hasError = meta.touched && meta.error;

  const handleClick = () => {
    setValue(!field.value);
  };
  
  return (
    <div className="form-field">
      <div 
        className={`flex items-start space-x-3 ${className}`}
        onClick={handleClick}
      >
        <div className="relative flex items-center h-5">
          <div
            className={`w-5 h-5 border rounded flex items-center justify-center transition-colors cursor-pointer ${
              field.value 
                ? 'bg-primary border-primary' 
                : hasError 
                  ? 'border-destructive' 
                  : 'border-input'
            }`}
          >
            {field.value && <Check size={14} className="text-white" />}
          </div>
          <input
            {...field}
            {...props}
            type="checkbox"
            className="absolute w-0 h-0 opacity-0"
            id={props.name}
          />
        </div>
        <label 
          htmlFor={props.name}
          className="text-sm cursor-pointer"
        >
          {label} {props.required && <span className="text-destructive">*</span>}
        </label>
      </div>
      {hasError && <div className="form-error">{meta.error}</div>}
    </div>
  );
};

export default CheckboxField;
