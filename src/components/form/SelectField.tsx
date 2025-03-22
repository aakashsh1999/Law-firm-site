import React, { useRef, useState } from "react";
import { useField } from "formik";
import { Check, ChevronDown, ChevronUp, X } from "lucide-react";
import { useOnClickOutside } from "@/hooks/use-click-outside";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[] | SelectOption[];
  required?: boolean;
  multiple?: boolean;
  className?: string;
  placeholder?: string;
};

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options,
  multiple = false,
  className = "",
  placeholder = "Select...",
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched } = helpers;
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const hasError = meta.touched && meta.error;

  // Normalize options to have value/label structure
  const normalizedOptions = options.map((option) =>
    typeof option === "string" ? { value: option, label: option } : option
  );

  useOnClickOutside(ref, () => {
    setIsOpen(false);
    setTouched(true);
  });

  const toggleOption = (optionValue: string) => {
    if (multiple) {
      const currentValues = field.value || [];
      if (Array.isArray(currentValues) && currentValues.includes(optionValue)) {
        setValue(
          currentValues.filter((value: string) => value !== optionValue)
        );
      } else {
        setValue([
          ...(Array.isArray(currentValues) ? currentValues : []),
          optionValue,
        ]);
      }
    } else {
      setValue(optionValue);
      setIsOpen(false);
    }
    setTouched(true);
  };

  const removeOption = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const currentValues = field.value || [];
    if (Array.isArray(currentValues)) {
      setValue(currentValues.filter((value: string) => value !== optionValue));
    }
  };

  const getDisplayValue = () => {
    if (
      !field.value ||
      (Array.isArray(field.value) && field.value.length === 0)
    ) {
      return <span className="text-muted-foreground">{placeholder}</span>;
    }

    if (multiple && Array.isArray(field.value)) {
      return (
        <div className="flex flex-wrap gap-1 max-w-full">
          {field.value.map((value: string) => {
            const option = normalizedOptions.find((o) => o.value === value);
            return (
              <div key={value} className="tag group">
                <span className="truncate max-w-[150px]">
                  {option?.label || value}
                </span>
                <span // Changed from <button> to <span>
                  className="tag-close cursor-pointer" // Added cursor-pointer for visual feedback
                  onClick={(e) => removeOption(value, e)}
                  aria-label={`Remove ${option?.label || value}`}
                  role="button" // Added role="button" for accessibility
                  tabIndex={0} // Added tabIndex for focusability
                >
                  <X size={14} />
                </span>
              </div>
            );
          })}
        </div>
      );
    }

    const option = normalizedOptions.find((o) => o.value === field.value);
    return option?.label || field.value;
  };

  return (
    <div className="form-field" ref={ref}>
      <label htmlFor={props.name} className="form-label">
        {label} {props.required && <span className="text-destructive">*</span>}
      </label>

      <div className="relative">
        <button
          type="button"
          className={`form-input text-left flex justify-between items-center pr-2 ${
            hasError ? "border-destructive" : ""
          } ${className}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          id={`${props.name}-button`}
        >
          <div className="truncate flex-1">{getDisplayValue()}</div>
          <div className="flex-shrink-0 text-muted-foreground">
            {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </div>
        </button>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white rounded-xl border border-border shadow-lg max-h-60 overflow-auto animate-fade-in">
            <ul
              className="py-1"
              role="listbox"
              aria-labelledby={`${props.name}-button`}
            >
              {normalizedOptions.map((option) => {
                const isSelected = multiple
                  ? Array.isArray(field.value) &&
                    field.value.includes(option.value)
                  : field.value === option.value;

                return (
                  <li
                    key={option.value}
                    className={`px-3 py-2 cursor-pointer flex items-center justify-between hover:bg-secondary transition-colors ${
                      isSelected ? "bg-primary/5 text-primary" : ""
                    }`}
                    onClick={() => toggleOption(option.value)}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span>{option.label}</span>
                    {isSelected && <Check size={16} className="text-primary" />}
                  </li>
                );
              })}

              {normalizedOptions.length === 0 && (
                <li className="px-3 py-2 text-muted-foreground">
                  No options available
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      {hasError && <div className="form-error">{meta.error}</div>}
    </div>
  );
};

export default SelectField;
