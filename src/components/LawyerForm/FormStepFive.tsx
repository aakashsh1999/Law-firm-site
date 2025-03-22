
import React from 'react';
import { motion } from 'framer-motion';
import FormField from '../form/FormField';
import SelectField from '../form/SelectField';
import { indianStates, indianLanguages } from '@/lib/validation';

const FormStepFive: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="form-section"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <FormField
            label="Chamber/Office Address"
            name="addressDetails.chamberAddress"
            as="textarea"
          />
        </div>
        
        <FormField
          label="City"
          name="addressDetails.city"
          type="text"
          required
        />
        
        <SelectField
          label="State"
          name="addressDetails.state"
          options={indianStates}
          required
        />
        
        <FormField
          label="Pincode"
          name="addressDetails.pincode"
          type="text"
          required
        />
        
        <div className="md:col-span-2">
          <SelectField
            label="Languages You Can Communicate In"
            name="languagesProficiency"
            options={indianLanguages}
            multiple
            required
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FormStepFive;
