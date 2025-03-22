
import { Step } from '@/hooks/use-step-form';

export const formSteps: Omit<Step, 'isCompleted' | 'isActive'>[] = [
  {
    id: 'personal-info',
    title: 'Personal Information',
    description: 'Let us know who you are',
    fields: ['fullName', 'emailAddress', 'mobileNumber', 'profileImage'],
    validateFields: ['fullName', 'emailAddress', 'mobileNumber']
  },
  {
    id: 'bar-council',
    title: 'Bar Council Details',
    description: 'Provide your enrollment information',
    fields: [
      'barCouncilEnrollment.stateBarCouncil',
      'barCouncilEnrollment.enrollmentNumber',
      'barCouncilEnrollment.yearOfEnrollment',
      'barCouncilEnrollment.enrollmentCertificate'
    ]
  },
  {
    id: 'education',
    title: 'Educational Background',
    description: 'Share your law education details',
    fields: ['educationalQualifications[]']
  },
  {
    id: 'practice-details',
    title: 'Practice Details',
    description: 'Tell us about your legal practice',
    fields: [
      'practiceAreas',
      'yearsOfExperience',
      'practiceLocations'
    ]
  },
  {
    id: 'address-language',
    title: 'Location & Languages',
    description: 'Add your address and language proficiency',
    fields: [
      'addressDetails.chamberAddress',
      'addressDetails.city',
      'addressDetails.state',
      'addressDetails.pincode',
      'languagesProficiency'
    ]
  },
  {
    id: 'agreements',
    title: 'Review & Submit',
    description: 'Review your information and agree to terms',
    fields: [
      'termsAndConditionsAgreement',
      'verificationConsent'
    ]
  }
];
