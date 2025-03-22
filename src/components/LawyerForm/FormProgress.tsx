import React from "react";
import { motion } from "framer-motion";

type FormProgressProps = {
  percentage: number;
};

const FormProgress: React.FC<FormProgressProps> = ({ percentage }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
        <span>Progress</span>
        <span>{percentage}% Complete</span>
      </div>
      <div className="progress-bar bg-blue-100 ">
        <motion.div
          className="progress-value"
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default FormProgress;
