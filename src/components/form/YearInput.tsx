
import React from 'react';
import { useField } from 'formik';
import { ChevronUp, ChevronDown } from 'lucide-react';

type YearInputProps = {
  label: string;
  name: string;
  required?: boolean;
  minYear?: number;
  maxYear?: number;
  className?: string;
};

const YearInput: React.FC<YearInputProps> = ({
  label,
  minYear = 1950,
  maxYear = new Date().getFullYear(),
  className = "",
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched } = helpers;
  
  const hasError = meta.touched && meta.error;
  const currentValue = field.value || '';
  
  // Increment year
  const incrementYear = () => {
    const currentYear = parseInt(currentValue, 10) || minYear - 1;
    const newYear = Math.min(currentYear + 1, maxYear);
    setValue(newYear.toString());
    setTouched(true);
  };
  
  // Decrement year
  const decrementYear = () => {
    const currentYear = parseInt(currentValue, 10) || maxYear + 1;
    const newYear = Math.max(currentYear - 1, minYear);
    setValue(newYear.toString());
    setTouched(true);
  };
  
  // Handle manual input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Only allow numbers
    if (/^[0-9]*$/.test(value)) {
      setValue(value);
    }
  };
  
  // Handle blur event
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    
    // Ensure value is within valid range
    if (!isNaN(value)) {
      if (value < minYear) {
        setValue(minYear.toString());
      } else if (value > maxYear) {
        setValue(maxYear.toString());
      }
    }
    
    setTouched(true);
  };
  
  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={props.name} className="form-label">
        {label} {props.required && <span className="text-destructive">*</span>}
      </label>
      
      <div className="relative">
        <input
          {...field}
          id={props.name}
          type="text"
          inputMode="numeric"
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input pr-10 ${hasError ? 'border-destructive' : ''}`}
          placeholder="YYYY"
          maxLength={4}
        />
        
        <div className="absolute right-0 top-0 h-full flex flex-col border-l border-input">
          <button
            type="button"
            className="flex-1 px-3 flex items-center justify-center hover:bg-muted transition-colors rounded-tr-xl"
            onClick={incrementYear}
            aria-label="Increment year"
          >
            <ChevronUp size={16} />
          </button>
          <button
            type="button"
            className="flex-1 px-3 flex items-center justify-center hover:bg-muted transition-colors rounded-br-xl border-t border-input"
            onClick={decrementYear}
            aria-label="Decrement year"
          >
            <ChevronDown size={16} />
          </button>
        </div>
      </div>
      
      {hasError ? (
        <div className="form-error">{meta.error}</div>
      ) : (
        <p className="text-xs text-muted-foreground mt-1">
          Year between {minYear} and {maxYear}
        </p>
      )}
    </div>
  );
};

export default YearInput;
