import React from "react";
import { motion } from "framer-motion";
import FormField from "../form/FormField";
import FileUploadField from "../form/FileUploadField";
import { useFormikContext } from "formik";

const FormStepOne: React.FC = () => {
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
          <FormField label="Full Name" name="fullName" type="text" required />
        </div>

        <FormField
          label="Email Address"
          name="emailAddress"
          type="email"
          required
          autoComplete="email"
        />

        <FormField
          label="Mobile Number"
          name="mobileNumber"
          type="tel"
          required
          autoComplete="tel"
        />

        <div className="md:col-span-2">
          <FileUploadField
            label="Profile Picture"
            name="profileImage"
            accept="image/*"
            description="Upload a professional photo (JPEG, PNG, max 5MB)"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FormStepOne;
