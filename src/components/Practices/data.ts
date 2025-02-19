import { PracticeArea } from "./types";

export const practiceAreas: PracticeArea[] = [
  {
    title: "Medical Malpractice",
    description:
      "Medical misdiagnosis or malpractice causes extensive pain and suffering, often leading to unnecessary procedures. Our New York City personal injury legal firm handles complex malpractice cases, including hospital negligence, birth injuries, and medical misdiagnoses.",
    additionalInfo:
      "Our attorneys know the challenges of malpractice cases and have the resources to handle complex claims.",
    services: [
      { title: "Birth Injuries", link: "/birth-injuries" },
      {
        title: "Medical Misdiagnosis",
        link: "https://www.fuchsberg.com/medical-malpractice/medical-misdiagnosis",
      },
      {
        title: "Hospital Negligence",
        link: "/medical-malpractice/hospital-negligence",
      },
      { title: "Medical Errors", link: "/medical-malpractice/medical-errors" },
    ],
    viewAllLink: "/medical-malpractice",
  },
  {
    title: "Civil Rights Violations",
    description:
      "Our NYC personal injury attorneys take civil rights violations seriously, including sexual assault in jail or police misconduct. We protect the rights of those who suffer and work to ensure your voice is heard while seeking compensation for your emotional, physical, and financial harm.",
    services: [
      {
        title: "Medical Malpractice in Prisons",
        link: "/civil-rights/prison-medical-malpractice-attorney",
      },
      {
        title: "Sexual Abuse in Prisons",
        link: "/sexual-abuse-lawyer/sexual-assault-prison",
      },
      { title: "Prison Injuries", link: "/civil-rights/injury-in-prison" },
      { title: "Police Misconduct", link: "/civil-rights/police-misconduct" },
      {
        title: "Sexual Assault in Police Custody",
        link: "/civil-rights/sexual-assault-in-police-custody",
      },
      {
        title: "Medical Malpractice in Police Custody",
        link: "/civil-rights/sexual-assault-in-police-custody",
      },
    ],
    viewAllLink: "/civil-rights",
  },
  // Add the rest of the practice areas here...
];
