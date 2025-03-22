import React from "react";
import { motion } from "framer-motion";
import FormField from "../form/FormField";
import SelectField from "../form/SelectField";
import TagInput from "../form/TagInput";
import { practiceAreaOptions } from "@/lib/validation";

const FormStepFour: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="form-section"
    >
      <div className="grid grid-cols-1 gap-6">
        <div>
          <SelectField
            label="Areas of Practice"
            name="practiceAreas"
            options={practiceAreaOptions}
            multiple
            required
          />
        </div>

        <div>
          <FormField
            label="Years of Experience"
            name="yearsOfExperience"
            type="number"
            required
          />
        </div>
      </div>
    </motion.div>
  );
};

export default FormStepFour;
