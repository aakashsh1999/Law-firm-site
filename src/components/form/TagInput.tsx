
import React, { useState, useRef, KeyboardEvent } from 'react';
import { useField } from 'formik';
import { X, Plus } from 'lucide-react';

type TagInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  suggestions?: string[];
  max?: number;
};

const TagInput: React.FC<TagInputProps> = ({
  label,
  placeholder = 'Type and press Enter...',
  suggestions = [],
  max = 10,
  className = "",
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched } = helpers;
  const [inputValue, setInputValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const hasError = meta.touched && meta.error;
  const tags = field.value || [];
  
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    if (value.trim() && suggestions.length > 0) {
      const filtered = suggestions.filter(item => 
        item.toLowerCase().includes(value.toLowerCase()) && 
        !tags.includes(item)
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  
  // Add a new tag
  const addTag = (tag: string) => {
    if (!tag.trim()) return;
    
    const normalizedTag = tag.trim();
    
    if (!tags.includes(normalizedTag) && tags.length < max) {
      const newTags = [...tags, normalizedTag];
      setValue(newTags);
      setTouched(true);
    }
    
    setInputValue('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };
  
  // Remove a tag
  const removeTag = (tagToRemove: string) => {
    const newTags = tags.filter(tag => tag !== tagToRemove);
    setValue(newTags);
    setTouched(true);
  };
  
  // Handle key press events
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Add tag on Enter
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag(inputValue);
    }
    
    // Remove last tag on Backspace if input is empty
    if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };
  
  // Select a suggestion
  const selectSuggestion = (suggestion: string) => {
    addTag(suggestion);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  return (
    <div className={`form-field ${className}`}>
      <label htmlFor={props.name} className="form-label">
        {label} {props.required && <span className="text-destructive">*</span>}
      </label>
      
      <div 
        className={`form-input px-3 py-1.5 min-h-[44px] flex flex-wrap items-center gap-1.5 ${
          hasError ? 'border-destructive' : ''
        }`}
      >
        {tags.map(tag => (
          <div key={tag} className="tag group">
            <span>{tag}</span>
            <button 
              type="button"
              className="tag-close"
              onClick={() => removeTag(tag)}
              aria-label={`Remove ${tag}`}
            >
              <X size={14} />
            </button>
          </div>
        ))}
        
        <div className="relative flex-1 min-w-[100px]">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => inputValue && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder={tags.length === 0 ? placeholder : ''}
            className="w-full outline-none bg-transparent text-sm"
            disabled={tags.length >= max}
          />
          
          {/* Suggestions dropdown */}
          {showSuggestions && filteredSuggestions.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white rounded-xl border border-border shadow-lg max-h-60 overflow-auto animate-fade-in">
              <ul className="py-1">
                {filteredSuggestions.map(suggestion => (
                  <li
                    key={suggestion}
                    className="px-3 py-2 cursor-pointer hover:bg-secondary transition-colors flex items-center"
                    onClick={() => selectSuggestion(suggestion)}
                  >
                    <Plus size={14} className="mr-2 text-primary" />
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {tags.length >= max && (
        <p className="text-xs text-muted-foreground mt-1">
          Maximum of {max} items reached
        </p>
      )}
      
      {hasError && <div className="form-error">{meta.error}</div>}
    </div>
  );
};

export default TagInput;
