
import React from 'react';
import { motion } from 'framer-motion';
import { FieldArray, useFormikContext } from 'formik';
import FormField from '../form/FormField';
import YearInput from '../form/YearInput';
import FileUploadField from '../form/FileUploadField';
import { Trash2, Plus } from 'lucide-react';

const FormStepThree: React.FC = () => {
  const { values } = useFormikContext<any>();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="form-section"
    >
      <FieldArray name="educationalQualifications">
        {({ push, remove }) => (
          <div className="space-y-8">
            {values.educationalQualifications.map((_, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative p-6 bg-secondary/50 rounded-xl border border-border/50"
              >
                <div className="absolute right-4 top-4">
                  {values.educationalQualifications.length > 1 && (
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                      aria-label="Remove qualification"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
                
                <h3 className="text-sm font-medium mb-4">
                  Qualification #{index + 1}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label="Law Degree"
                    name={`educationalQualifications.${index}.degree`}
                    type="text"
                    required
                  />
                  
                  <FormField
                    label="University"
                    name={`educationalQualifications.${index}.university`}
                    type="text"
                    required
                  />
                  
                  <YearInput
                    label="Graduation Year"
                    name={`educationalQualifications.${index}.graduationYear`}
                    required
                  />
                  
                  <div className="md:col-span-2">
                    <FileUploadField
                      label="Degree Certificate"
                      name={`educationalQualifications.${index}.degreeCertificate`}
                      accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      description="Upload your degree certificate (PDF or DOC/DOCX, max 5MB)"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <button
                type="button"
                onClick={() => push({
                  degree: '',
                  university: '',
                  graduationYear: '',
                  degreeCertificate: null
                })}
                className="w-full p-3 border border-dashed border-primary/40 rounded-xl text-primary flex items-center justify-center hover:bg-primary/5 transition-colors"
              >
                <Plus size={18} className="mr-2" />
                Add Another Qualification
              </button>
            </motion.div>
          </div>
        )}
      </FieldArray>
    </motion.div>
  );
};

export default FormStepThree;
