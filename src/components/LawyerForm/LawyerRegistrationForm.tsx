"use client";
import React, { useState } from "react";
import { Formik, Form, useFormik, FormikProvider } from "formik";
import { ArrowRight, ArrowLeft, Loader2, Check, Vault } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useStepForm } from "@/hooks/use-step-form";
import { formSteps } from "./formSteps";
import {
  lawyerFormValidationSchema,
  defaultFormValues,
  barCouncils,
} from "@/lib/validation";
import StepIndicator from "./StepIndicator";
import FormProgress from "./FormProgress";
import FormStepOne from "./FormStepOne";
import FormStepTwo from "./FormStepTwo";
import FormStepThree from "./FormStepThree";
import FormStepFour from "./FormStepFour";
import FormStepFive from "./FormStepFive";
import FormStepSix from "./FormStepSix";
import { fakeUploadDelay } from "@/lib/file-utils";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "@/config";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { startPayment } from "@/lib/utils";

interface LawyerRegistrationFormProps {
  formik: ReturnType<typeof useFormik<typeof defaultFormValues>>;
}

const LawyerRegistrationFormInner: React.FC<LawyerRegistrationFormProps> = ({
  formik,
}) => {
  const {
    steps,
    currentStep,
    activeStepIndex,
    isFirstStep,
    isLastStep,
    nextStep,
    prevStep,
    goToStep,
    progressPercentage,
  } = useStepForm({
    steps: formSteps,
    formik,
  });

  const renderStep = () => {
    switch (activeStepIndex) {
      case 0:
        return <FormStepOne />;
      case 1:
        return <FormStepTwo />;
      case 2:
        return <FormStepThree />;
      case 3:
        return <FormStepFour />;
      case 4:
        return <FormStepFive />;
      case 5:
        return <FormStepSix />;
      default:
        return null;
    }
  };

  return (
    <div className="step-container mt-0">
      <p className="text-muted-foreground max-w-xl text-sm">
        Complete the registration form to join our legal platform. We'll need
        some information about your qualifications and practice.
      </p>
      <FormProgress percentage={progressPercentage} />

      <div className="my-6">
        <StepIndicator
          steps={steps}
          activeIndex={activeStepIndex}
          onStepClick={goToStep}
        />
      </div>

      <motion.div
        key={`header-${currentStep.id}`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-6"
      >
        <h2 className="step-title">{currentStep.title}</h2>
        <p className="step-description">{currentStep.description}</p>
      </motion.div>

      <Form>
        <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>

        <motion.div
          className="flex justify-between mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <button
            type="button"
            onClick={prevStep}
            className={`secondary-button ${isFirstStep ? "invisible" : ""}`}
          >
            <ArrowLeft size={16} className="mr-2" />
            Previous
          </button>

          {isLastStep ? (
            <button
              type="submit"
              disabled={formik?.isSubmitting}
              className="inline-flex items-center gap-x-1.5 bg-blue-600 px-5 py-1 rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {formik.isSubmitting ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>Submit Application</>
              )}
            </button>
          ) : (
            <button
              type="button"
              onClick={nextStep}
              className="inline-flex items-center gap-x-1.5 bg-blue-600 px-5 py-1 rounded-xl text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Next
              <ArrowRight size={16} className="ml-2" />
            </button>
          )}
        </motion.div>
      </Form>
      <motion.div
        className="mt-4 text-center text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p>
          Your information is secure and will be verified before approval. For
          assistance, please contact support.
        </p>
      </motion.div>
    </div>
  );
};

const LawyerRegistrationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (values: typeof defaultFormValues) => {
    setIsSubmitting(true);
    const userId = uuidv4();
    try {
      if (!values?.profileImage) {
        alert("Please select a profile image and at least one document.");
        return;
      }
      //profile uploadtask
      const profileRef = ref(
        storage,
        `profileImages/${userId}/${values.profileImage?.name}`
      );
      const profileUploadTask = uploadBytesResumable(
        profileRef,
        values?.profileImage
      );
      await profileUploadTask;
      const profileImageUrl = await getDownloadURL(profileRef);

      //enrollment upload task
      const enrollmentCertifcateRef = ref(
        storage,
        `documents/enrollment_certificates/${userId}/${values?.barCouncilEnrollment.enrollmentCertificate?.name}`
      );
      const enrollmentCertifcateTask = uploadBytesResumable(
        enrollmentCertifcateRef,
        values?.barCouncilEnrollment?.enrollmentCertificate?.name
      );
      await enrollmentCertifcateTask;
      const enrollmentCertifcateUrl = await getDownloadURL(
        enrollmentCertifcateRef
      );

      const educationalQualifications = values?.educationalQualifications || [];
      const updatedEducationDetails = await Promise.all(
        educationalQualifications.map(async (qualification, index) => {
          if (qualification?.degreeCertificate) {
            const degreeCertificateRef = ref(
              storage,
              `documents/${userId}/degree_${index}_${qualification.degreeCertificate.name}`
            );

            const degreeCertificateTask = uploadBytesResumable(
              degreeCertificateRef,
              qualification.degreeCertificate
            );

            await degreeCertificateTask;
            const degreeCertificateUrl = await getDownloadURL(
              degreeCertificateRef
            );

            return {
              ...qualification, // Keep existing details
              degreeCertificate: degreeCertificateUrl, // Append the uploaded URL
            };
          }
          return qualification; // If no certificate, return as is
        })
      );

      await addDoc(collection(db, "lawyers_details"), {
        ...values,
        userId,
        profileImage: profileImageUrl,
        barCouncilEnrollment: {
          ...values?.barCouncilEnrollment,
          enrollmentCertificate: enrollmentCertifcateUrl, // Adds the certificate URL
        },
        educationalQualifications: updatedEducationDetails,
        addressDetails: {
          ...values.addressDetails,
          city: values?.addressDetails.city.toLowerCase(),
          state: values?.addressDetails.state.toLowerCase(),
          pincode: "110095",
        },
        isApproved: false,
        isPayment: false,
        createdAt: new Date(),
      });

      toast.success("Your lawyer registration has been submitted successfully");
      await startPayment({
        userId,
        userInfo: {
          name: values?.fullName,
          email: values?.emailAddress,
          contact: values?.mobileNumber,
        },
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(
        "There was a problem submitting your application. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: defaultFormValues,
    validationSchema: lawyerFormValidationSchema,
    onSubmit: handleSubmit,
  });

  // Render the success screen after submission
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="step-container"
      >
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={28} className="text-primary" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Payment Completed.</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Thank you for registering. Your application has been received and is
            now being reviewed. We will contact you soon with further
            instructions.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button
              type="button"
              className="secondary-button mx-auto"
              onClick={() => window.location.reload()}
            >
              Submit Another Application
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  return (
    <FormikProvider value={formik}>
      <LawyerRegistrationFormInner formik={formik} />{" "}
    </FormikProvider>
  );
};

export default LawyerRegistrationForm;
