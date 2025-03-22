import React from "react";
import { motion } from "framer-motion";
import { useFormikContext } from "formik";
import CheckboxField from "../form/CheckboxField";
import { formatFileSize } from "@/lib/file-utils";

const FormStepSix: React.FC = () => {
  const { values } = useFormikContext<any>();

  const renderReviewSection = (title: string, fields: any) => {
    return (
      <div className="mb-6">
        <h3 className="text-sm font-medium text-primary mb-2">{title}</h3>
        <div className="bg-secondary/50 rounded-xl p-4 border border-border/50">
          <dl className="space-y-2">
            {Object.entries(fields).map(([key, value]: [string, any]) => {
              // Skip file objects, arrays, objects and empty fields
              if (
                value === null ||
                typeof value === "undefined" ||
                (typeof value === "object" && !(value instanceof File)) ||
                Array.isArray(value)
              ) {
                return null;
              }

              // Format file fields
              if (value instanceof File) {
                return (
                  <div key={key} className="grid grid-cols-3 gap-2">
                    <dt className="text-sm font-medium text-muted-foreground col-span-1 truncate capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </dt>
                    <dd className="text-sm col-span-2 truncate">
                      {value.name} ({formatFileSize(value.size)})
                    </dd>
                  </div>
                );
              }

              return (
                <div key={key} className="grid grid-cols-3 gap-2">
                  <dt className="text-sm font-medium text-muted-foreground col-span-1 truncate  capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </dt>
                  <dd className="text-sm col-span-2 truncate">
                    {typeof value === "boolean"
                      ? value
                        ? "Yes"
                        : "No"
                      : value}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    );
  };

  const renderArrayReview = (
    title: string,
    array: any[],
    labelField: string
  ) => {
    if (!array || array.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-sm font-medium text-primary mb-2">{title}</h3>
        <div className="bg-secondary/50 rounded-xl p-4 border border-border/50">
          <ul className="space-y-1">
            {array.map((item, index) => (
              <li key={index} className="text-sm">
                {typeof item === "object" ? item[labelField] : item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const JoiningFeesReview = (joiningAmout: string) => {
    return (
      <div className="mb-6">
        <h3 className="text-sm font-medium text-primary mb-2">
          Payment Detail
        </h3>
        <div className="bg-secondary/50 rounded-xl p-4 border border-border/50">
          <div className="grid grid-cols-3 gap-2">
            <dt className="text-sm font-medium text-muted-foreground col-span-1 truncate">
              {"Joining Fees"}
            </dt>
            <dd className="text-sm col-span-2 truncate">₹ {joiningAmout}/-</dd>
          </div>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="form-section"
    >
      <div className="space-y-6 mb-8">
        <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
          <h3 className="text-lg font-medium mb-2">Review Your Application</h3>
          <p className="text-sm text-muted-foreground">
            Please review all the information you've provided before submitting
            your application.
          </p>
        </div>

        {renderReviewSection("Personal Information", {
          fullName: values.fullName,
          emailAddress: values.emailAddress,
          mobileNumber: values.mobileNumber,
          profileImage: values.profileImage,
        })}

        {renderReviewSection("Bar Council Details", {
          stateBarCouncil: values.barCouncilEnrollment.stateBarCouncil,
          enrollmentNumber: values.barCouncilEnrollment.enrollmentNumber,
          yearOfEnrollment: values.barCouncilEnrollment.yearOfEnrollment,
          enrollmentCertificate:
            values.barCouncilEnrollment.enrollmentCertificate,
        })}

        {values.educationalQualifications?.map((edu: any, index: number) => (
          <div key={index} className="mb-6">
            <h3 className="text-sm font-medium text-primary mb-2">
              Educational Qualification #{index + 1}
            </h3>
            <div className="bg-secondary/50 rounded-xl p-4 border border-border/50">
              <dl className="space-y-2">
                <div className="grid grid-cols-3 gap-2">
                  <dt className="text-sm font-medium text-muted-foreground col-span-1">
                    Degree
                  </dt>
                  <dd className="text-sm col-span-2">{edu.degree}</dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="text-sm font-medium text-muted-foreground col-span-1">
                    University
                  </dt>
                  <dd className="text-sm col-span-2">{edu.university}</dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="text-sm font-medium text-muted-foreground col-span-1">
                    Graduation Year
                  </dt>
                  <dd className="text-sm col-span-2">{edu.graduationYear}</dd>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <dt className="text-sm font-medium text-muted-foreground col-span-1">
                    Certificate
                  </dt>
                  <dd className="text-sm col-span-2 truncate">
                    {edu.degreeCertificate?.name}
                    {edu.degreeCertificate &&
                      `(${formatFileSize(edu.degreeCertificate.size)})`}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        ))}

        {renderReviewSection("Practice Details", {
          yearsOfExperience: values.yearsOfExperience,
        })}

        {renderArrayReview("Areas of Practice", values.practiceAreas, "")}

        {renderReviewSection("Address Details", {
          chamberAddress: values.addressDetails.chamberAddress,
          city: values.addressDetails.city,
          state: values.addressDetails.state,
          pincode: values.addressDetails.pincode,
        })}

        {renderArrayReview(
          "Language Proficiency",
          values.languagesProficiency,
          ""
        )}
        {JoiningFeesReview("999")}
      </div>

      <div className="space-y-4 p-5 bg-secondary/80 rounded-xl border border-border">
        <CheckboxField
          label="I confirm that all information provided is accurate and complete. I understand that any false or misleading information may result in the rejection of my application."
          name="termsAndConditionsAgreement"
          required
        />

        <CheckboxField
          label="I consent to the verification of my credentials and information provided in this application by the relevant authorities."
          name="verificationConsent"
          required
        />
      </div>
    </motion.div>
  );
};

export default FormStepSix;
