import React from "react";
import { motion } from "framer-motion";
import { Scale, Briefcase } from "lucide-react";
import LawyerRegistrationForm from "./LawyerRegistrationForm";
import Form from "../Footer/Form";
import { FormikProvider } from "formik";

const FormLayout: React.FC = () => {
  return (
    <div className="">
        <LawyerRegistrationForm />
    </div>
  );
};

export default FormLayout;
