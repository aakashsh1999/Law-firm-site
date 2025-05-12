// seed_lawyers.js
import { addDoc, collection } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "./src/config";
import { ref } from "firebase/storage";

const defaultProfileImageUrl =
  "https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg";

const initialLawyerList = [
  { name: "Mani Sinha", court: "Supreme Court of India" },
  { name: "Pranav Prakash", court: "Supreme Court of India" },
  { name: "Dr Bidhu Ranjan", court: "Patna High Court" },
  { name: "Ashok Sinha", court: "Delhi High Court" },
  { name: "Dhananjay Pandey", court: "Patna High Court" },
  { name: "Sanjay Sinha", court: "Bhagalpur Civil Court" },
  { name: "Sujit", court: "Bhagalpur Civil Court" },
  { name: "Mukesh Thakur", court: "Bhagalpur Civil Court" },
  { name: "Rabindra Narayan Sinha", court: "Munger Civil Court" },
  { name: "Ananmika Sinha", court: "Munger Civil Court" },
  { name: "Payel Bhattacharjee", court: "Kolkata Court" },
  { name: "Sunil Kumar", court: "Ranchi High Court" },
  { name: "Astha Gupta", court: "Delhi High Court" },
  { name: "Pooja Dubey", court: "" },
  { name: "Ranjani Mishra", court: "Jamshedpur Session Court" },
  { name: "Jaya Saraswati Prakash", court: "Banka Civil Court" },
  { name: "Manoranjan Kumar Sinha", court: "Jamui Civil Court" },
  { name: "Awdhesh Kumar Sinha", court: "Bhagalpur Civil Court" },
  { name: "Kashi Nath Mishra", court: "Bhagalpur Civil Court" },
  { name: "Alka Pandey", court: "Bhagalpur Civil Court" },
  { name: "Chandan Karn", court: "Bhagalpur Civil Court" },
  { name: "Amit Kumar Sinha", court: "Bhagalpur Civil Court" },
  { name: "Seema Sinha", court: "Khagaria Civil Court" },
  { name: "Antra Shukla", court: "Lucknow High Court" },
  { name: "Ajit Rukhaiyar", court: "Kathiar Civil Court" },
];

export const saveInitialLawyersToFirebase = async () => {
  try {
    const lawyersCollectionRef = collection(db, "lawyers_details");

    for (const lawyerData of initialLawyerList) {
      const userId = uuidv4();

      const defaultProfileRef = ref(storage, `default/lawyer_avatar.png`);
      let defaultProfileUrl = defaultProfileImageUrl;

      try {
        // ... (Code for fetching default profile image URL - same as before) ...
      } catch (error) {
        console.error("Error uploading/getting default profile image:", error);
      }

      await addDoc(lawyersCollectionRef, {
        userId: userId,
        fullName: lawyerData.name,
        emailAddress: "",
        mobileNumber: "",
        profileImage: defaultProfileUrl,
        barCouncilEnrollment: {
          enrollmentNumber: "",
          enrollmentDate: null,
          barCouncil: lawyerData.court,
          enrollmentCertificate: "",
        },
        educationalQualifications: [],
        practiceAreas: [],
        experienceYears: 0,
        addressDetails: {
          streetAddress: "",
          city: "",
          state: "",
          pincode: "",
        },
        bio: "",
        isApproved: true,
        isPayment: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      console.log(`Lawyer "${lawyerData.name}" saved with ID: ${userId}`);
    }

    console.log("Successfully saved initial lawyers to Firebase!");
  } catch (error) {
    console.error("Error adding lawyer details: ", error);
  }
};

// Call the function directly when the script is run
saveInitialLawyersToFirebase();
