import React, { useCallback, useRef, useState } from "react";
import { useField } from "formik";
import {
  Upload,
  File,
  X,
  Image as ImageIcon,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  formatFileSize,
  isImageFile,
  createImagePreview,
} from "@/lib/file-utils";

type FileUploadFieldProps = {
  label: string;
  name: string;
  accept?: string;
  required?: boolean;
  className?: string;
  description?: string;
  maxSize?: number;
};

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  label,
  accept = "image/*,application/pdf",
  className = "",
  description,
  maxSize = 5 * 1024 * 1024, // 5MB
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched } = helpers;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const hasError = meta.touched && meta.error;
  const hasFile = !!field.value;

  // Handle file selection
  const handleFileChange = useCallback(
    async (file: File | null) => {
      setValue(file);
      setTouched(true);

      // Clear preview when file is removed
      if (!file) {
        setPreview(null);
        return;
      }

      // Generate image preview if it's an image file
      if (isImageFile(file)) {
        try {
          const previewUrl = await createImagePreview(file);
          setPreview(previewUrl);
        } catch (error) {
          console.error("Error creating preview:", error);
          setPreview(null);
        }
      } else {
        setPreview(null);
      }
    },
    [setValue, setTouched]
  );

  // Handle input change event
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const file = files && files.length > 0 ? files[0] : null;
    handleFileChange(file);
  };

  // Handle drag events
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    const file = files && files.length > 0 ? files[0] : null;
    handleFileChange(file);
  };

  // Trigger file input click
  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Remove the selected file
  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleFileChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Render file preview/details
  const renderFilePreview = () => {
    if (!field.value) return null;

    const file = field.value as File;

    return (
      <div className="mt-4 animate-fade-in">
        {preview ? (
          <div className="relative rounded-lg overflow-hidden border border-border">
            <img
              src={preview}
              alt={file.name}
              className="max-h-40 w-auto mx-auto object-contain"
            />
            <button
              type="button"
              onClick={handleRemoveFile}
              className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1 rounded-full hover:bg-white transition-colors"
              aria-label="Remove file"
            >
              <X size={16} className="text-foreground" />
            </button>
          </div>
        ) : (
          <div className="document-thumbnail group">
            <File size={20} className="text-primary mr-2 flex-shrink-0" />
            <span className="text-sm truncate flex-1">{file.name}</span>
            <span className="text-xs text-muted-foreground ml-2">
              {formatFileSize(file.size)}
            </span>
            <button
              type="button"
              onClick={handleRemoveFile}
              className="ml-2 p-1 rounded-full hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Remove file"
            >
              <X size={16} className="text-foreground" />
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={props.name} className="form-label">
        {label} {props.required && <span className="text-destructive">*</span>}
      </label>

      <div
        className={`file-drop-area h-40 ${
          isDragging ? "file-drop-area-active" : ""
        } ${hasError ? "border-destructive" : ""}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleBrowseClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          id={props.name}
          name={props.name}
          accept={accept}
          onChange={handleInputChange}
          className="sr-only"
          aria-hidden="true"
        />

        {!hasFile ? (
          <div className="text-center">
            <div className="mb-3">
              {isDragging ? (
                <CheckCircle
                  size={36}
                  className="mx-auto text-primary animate-bounce-subtle"
                />
              ) : (
                <Upload size={25} className="mx-auto text-muted-foreground" />
              )}
            </div>
            <p className="text-xs font-medium mb-1">
              {isDragging ? "Drop file here" : "Drag & drop file here"}
            </p>
            <p className="text-xs text-muted-foreground mb-2">— or —</p>
            <button
              type="button"
              className="px-4 py-1.5 bg-secondary hover:bg-secondary/80 rounded-lg text-xs font-medium transition-colors"
            >
              Browse Files
            </button>
            {description && (
              <p className="text-xs text-muted-foreground mt-2">
                {description}
              </p>
            )}
          </div>
        ) : (
          <div className="text-center">
            {hasError ? (
              <AlertCircle
                size={30}
                className="mx-auto text-destructive mb-2"
              />
            ) : (
              <CheckCircle size={30} className="mx-auto text-primary mb-2" />
            )}
            <p className="text-sm">File selected</p>
          </div>
        )}
      </div>

      {renderFilePreview()}

      {hasError && <div className="form-error">{meta.error}</div>}
    </div>
  );
};

export default FileUploadField;
