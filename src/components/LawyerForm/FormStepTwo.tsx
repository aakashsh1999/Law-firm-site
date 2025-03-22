import React from "react";
import { motion } from "framer-motion";
import FormField from "../form/FormField";
import SelectField from "../form/SelectField";
import YearInput from "../form/YearInput";
import FileUploadField from "../form/FileUploadField";
import { barCouncils } from "@/lib/validation";

const FormStepTwo: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.1 }}
      className="form-section"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <SelectField
            label="State Bar Council"
            name="barCouncilEnrollment.stateBarCouncil"
            options={barCouncils}
            required
          />
        </div>

        <FormField
          label="Enrollment Number"
          name="barCouncilEnrollment.enrollmentNumber"
          type="text"
          required
        />

        <YearInput
          label="Year of Enrollment"
          name="barCouncilEnrollment.yearOfEnrollment"
          required
        />

        <div className="md:col-span-2">
          <FileUploadField
            label="Enrollment Certificate"
            name="barCouncilEnrollment.enrollmentCertificate"
            accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            description="Upload your bar enrollment certificate (PDF or DOC/DOCX, max 5MB)"
            required
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FormStepTwo;
