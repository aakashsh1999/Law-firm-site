import React from "react";
import { useField } from "formik";

export type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: string;
  className?: string;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<any>) => void;
  disabled?: boolean;
  autoComplete?: string;
  rows?: number;
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  children,
  className = "",
  ...props
}) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  const renderInput = () => {
    if (children) {
      return children;
    }

    if (props.as === "textarea") {
      return (
        <textarea
          {...field}
          {...props}
          id={props.name}
          className={`form-input ${
            hasError ? "border-destructive" : ""
          } ${className}`}
          placeholder=" "
          rows={props.rows || 4}
        />
      );
    }

    return (
      <input
        {...field}
        {...props}
        id={props.name}
        className={`  form-input h-12 ${
          hasError ? "border-destructive" : ""
        } ${className}`}
        placeholder=" "
      />
    );
  };

  return (
    <div className="form-field">
      <div className="relative">
        <label
          htmlFor={props.name}
          className={`text-sm font-light ${hasError ? "text-destructive" : ""}`}
        >
          {label}{" "}
          {props.required && <span className="text-destructive">*</span>}
        </label>
        {renderInput()}
      </div>
      {hasError && <div className="form-error">{meta.error}</div>}
    </div>
  );
};

export default FormField;
