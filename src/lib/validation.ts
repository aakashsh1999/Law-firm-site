import * as Yup from "yup";

// Add the custom method for file validation
const mixedSchema = Yup.mixed as any;
mixedSchema.prototype.isFile = function (message = "Must be a valid file") {
  return this.test("is-file", message, function (value: any) {
    if (!value) return true; // Allow empty values
    return value instanceof File;
  });
};

// Define education qualification schema
const educationalQualificationSchema = Yup.object().shape({
  degree: Yup.string().required("Degree is required"),
  university: Yup.string().required("University is required"),
  graduationYear: Yup.string()
    .required("Graduation year is required")
    .matches(/^\d{4}$/, "Must be a valid year"),
  degreeCertificate: Yup.mixed()
    .isFile("Must be a valid file")
    .test("file-size", "File is too large (max 5MB)", function (value) {
      if (!value || !(value instanceof File)) return true;
      return value.size <= 5 * 1024 * 1024; // 5MB
    })
    .test("file-type", "Only PDF or image files are allowed", function (value) {
      if (!value || !(value instanceof File)) return true;
      return [
        "application/pdf",
        "image/jpeg",
        "image/png",
        "image/jpg",
      ].includes(value.type);
    })
    .required("Degree certificate is required"),
});

// Define address details schema
const addressDetailsSchema = Yup.object().shape({
  chamberAddress: Yup.string(),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string()
    .required("Pincode is required")
    .matches(/^\d{6}$/, "Must be a valid 6-digit pincode"),
});

// Main validation schema
export const lawyerFormValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  mobileNumber: Yup.string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Must be a valid 10-digit mobile number"),
  profileImage: Yup.mixed()
    .isFile("Must be a valid file")
    .test("file-size", "File is too large (max 2MB)", function (value) {
      if (!value || !(value instanceof File)) return true;
      return value.size <= 2 * 1024 * 1024; // 2MB
    })
    .test("file-type", "Only image files are allowed", function (value) {
      if (!value || !(value instanceof File)) return true;
      return ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
    }),
  barCouncilEnrollment: Yup.object().shape({
    stateBarCouncil: Yup.string().required("State bar council is required"),
    enrollmentNumber: Yup.string().required("Enrollment number is required"),
    yearOfEnrollment: Yup.string()
      .required("Year of enrollment is required")
      .matches(/^\d{4}$/, "Must be a valid year"),
    enrollmentCertificate: Yup.mixed()
      .isFile("Must be a valid file")
      .test("file-size", "File is too large (max 5MB)", function (value) {
        if (!value || !(value instanceof File)) return true;
        return value.size <= 5 * 1024 * 1024; // 5MB
      })
      .test(
        "file-type",
        "Only PDF or image files are allowed",
        function (value) {
          if (!value || !(value instanceof File)) return true;
          return [
            "application/pdf",
            "image/jpeg",
            "image/png",
            "image/jpg",
          ].includes(value.type);
        }
      )
      .required("Enrollment certificate is required"),
  }),
  educationalQualifications: Yup.array()
    .of(educationalQualificationSchema)
    .min(1, "At least one educational qualification is required"),
  practiceAreas: Yup.array()
    .of(Yup.string())
    .min(1, "At least one practice area is required"),
  yearsOfExperience: Yup.number()
    .required("Years of experience is required")
    .min(0, "Years of experience must be a positive number"),
  addressDetails: addressDetailsSchema,
  languagesProficiency: Yup.array()
    .of(Yup.string())
    .min(1, "At least one language is required"),
  termsAndConditionsAgreement: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
  verificationConsent: Yup.boolean().oneOf(
    [true],
    "You must consent to verification"
  ),
});

// Default form values
export const defaultFormValues = {
  fullName: "",
  emailAddress: "",
  mobileNumber: "",
  profileImage: null,
  barCouncilEnrollment: {
    stateBarCouncil: "",
    enrollmentNumber: "",
    yearOfEnrollment: "",
    enrollmentCertificate: null,
  },
  educationalQualifications: [
    {
      degree: "",
      university: "",
      graduationYear: "",
      degreeCertificate: null,
    },
  ],
  practiceAreas: [],
  yearsOfExperience: 0,
  addressDetails: {
    chamberAddress: "",
    city: "",
    state: "",
    pincode: "",
  },
  languagesProficiency: [],
  termsAndConditionsAgreement: false,
  verificationConsent: false,
};

// Add the missing exports needed by other components
export const barCouncils = [
  { value: "bar_council_of_india", label: "Bar Council of India" },
  { value: "bar_council_of_delhi", label: "Bar Council of Delhi" },
  {
    value: "bar_council_of_maharashtra",
    label: "Bar Council of Maharashtra & Goa",
  },
  { value: "bar_council_of_tamil_nadu", label: "Bar Council of Tamil Nadu" },
  { value: "bar_council_of_kerala", label: "Bar Council of Kerala" },
  { value: "bar_council_of_karnataka", label: "Bar Council of Karnataka" },
  { value: "bar_council_of_west_bengal", label: "Bar Council of West Bengal" },
  {
    value: "bar_council_of_uttar_pradesh",
    label: "Bar Council of Uttar Pradesh",
  },
  {
    value: "bar_council_of_punjab_and_haryana",
    label: "Bar Council of Punjab & Haryana",
  },
  { value: "bar_council_of_gujarat", label: "Bar Council of Gujarat" },
  { value: "bar_council_of_rajasthan", label: "Bar Council of Rajasthan" },
  {
    value: "bar_council_of_andhra_pradesh",
    label: "Bar Council of Andhra Pradesh",
  },
  { value: "bar_council_of_telangana", label: "Bar Council of Telangana" },
  { value: "bar_council_of_assam", label: "Bar Council of Assam" },
];

export const indianStates = [
  { value: "andhra_pradesh", label: "Andhra Pradesh" },
  { value: "arunachal_pradesh", label: "Arunachal Pradesh" },
  { value: "assam", label: "Assam" },
  { value: "bihar", label: "Bihar" },
  { value: "chhattisgarh", label: "Chhattisgarh" },
  { value: "goa", label: "Goa" },
  { value: "gujarat", label: "Gujarat" },
  { value: "haryana", label: "Haryana" },
  { value: "himachal_pradesh", label: "Himachal Pradesh" },
  { value: "jharkhand", label: "Jharkhand" },
  { value: "karnataka", label: "Karnataka" },
  { value: "kerala", label: "Kerala" },
  { value: "madhya_pradesh", label: "Madhya Pradesh" },
  { value: "maharashtra", label: "Maharashtra" },
  { value: "manipur", label: "Manipur" },
  { value: "meghalaya", label: "Meghalaya" },
  { value: "mizoram", label: "Mizoram" },
  { value: "nagaland", label: "Nagaland" },
  { value: "odisha", label: "Odisha" },
  { value: "punjab", label: "Punjab" },
  { value: "rajasthan", label: "Rajasthan" },
  { value: "sikkim", label: "Sikkim" },
  { value: "tamil_nadu", label: "Tamil Nadu" },
  { value: "telangana", label: "Telangana" },
  { value: "tripura", label: "Tripura" },
  { value: "uttar_pradesh", label: "Uttar Pradesh" },
  { value: "uttarakhand", label: "Uttarakhand" },
  { value: "west_bengal", label: "West Bengal" },
  { value: "delhi", label: "Delhi" },
];

export const indianLanguages = [
  { value: "hindi", label: "Hindi" },
  { value: "english", label: "English" },
  { value: "bengali", label: "Bengali" },
  { value: "marathi", label: "Marathi" },
  { value: "telugu", label: "Telugu" },
  { value: "tamil", label: "Tamil" },
  { value: "gujarati", label: "Gujarati" },
  { value: "urdu", label: "Urdu" },
  { value: "kannada", label: "Kannada" },
  { value: "odia", label: "Odia" },
  { value: "malayalam", label: "Malayalam" },
  { value: "punjabi", label: "Punjabi" },
  { value: "assamese", label: "Assamese" },
];

export const practiceAreaOptions = [
  { value: "civil_law", label: "Civil Law" },
  { value: "criminal_law", label: "Criminal Law" },
  { value: "corporate_law", label: "Corporate Law" },
  { value: "family_law", label: "Family Law" },
  { value: "intellectual_property", label: "Intellectual Property" },
  { value: "tax_law", label: "Tax Law" },
  { value: "real_estate", label: "Real Estate" },
  { value: "constitutional_law", label: "Constitutional Law" },
  { value: "environmental_law", label: "Environmental Law" },
  { value: "employment_law", label: "Employment Law" },
  { value: "bankruptcy", label: "Bankruptcy" },
  { value: "immigration_law", label: "Immigration Law" },
  { value: "international_law", label: "International Law" },
  { value: "human_rights", label: "Human Rights" },
  { value: "consumer_protection", label: "Consumer Protection" },
];
