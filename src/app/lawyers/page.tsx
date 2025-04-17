"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import AdvocateCard from "@/components/common/AdvocateCard";
import { db } from "@/config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { Loader2 } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export interface LawyerDetails {
  fullName: string;
  emailAddress: string;
  mobileNumber: string;
  profileImage: any;
  barCouncilEnrollment: {
    stateBarCouncil: string;
    enrollmentNumber: string;
    yearOfEnrollment: string;
    enrollmentCertificate: any;
  };
  educationalQualifications: Array<{
    degree: string;
    university: string;
    graduationYear: string;
    degreeCertificate: any;
  }>;
  practiceAreas: string[];
  yearsOfExperience: number;
  addressDetails: {
    chamberAddress: string;
    city: string;
    state: string;
    pincode: string;
  };
  languagesProficiency: string[];
  termsAndConditionsAgreement: boolean;
  verificationConsent: boolean;
  isApproved: boolean;
  userd?: string; // Assuming 'userd' is the document ID
}

function Page() {
  const searchParams = useSearchParams();
  const cityParam = searchParams.get("city");
  const stateParam = searchParams.get("state");
  const lawyerId = searchParams.get("id");

  const [lawyers, setLawyers] = useState<LawyerDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  function formatState(state: string) {
    return state.includes(" ") ? state.replace(/\s+/g, "_") : state;
  }

  useEffect(() => {
    const fetchLawyers = async (
      city: string | null,
      state: string | null,
      lawyerId: string | null
    ) => {
      setIsLoading(true);
      try {
        const lawyersRef = collection(db, "lawyers_details");
        let q = query(lawyersRef, where("isApproved", "==", true));
        console.log(lawyerId, "asdfasdf");
        if (lawyerId) {
          // Fetch details for a specific lawyer ID
          const lawyerDoc = await getDoc(doc(db, "lawyers_details", lawyerId));
          if (lawyerDoc.exists()) {
            setLawyers([
              { ...lawyerDoc.data(), userd: lawyerDoc.id } as LawyerDetails,
            ]);
          } else {
            setLawyers([]);
            console.log("No such lawyer!");
          }
          setIsLoading(false);
          return;
        }

        if (city && state) {
          const formattedState = formatState(state);
          q = query(
            lawyersRef,
            where("addressDetails.city", "==", city?.toLowerCase()),
            where("addressDetails.state", "==", formattedState?.toLowerCase()),
            where("isApproved", "==", true)
          );
        }

        const querySnapshot = await getDocs(q);
        const lawyersList: LawyerDetails[] = [];
        querySnapshot.forEach((doc) => {
          lawyersList.push({ ...doc.data(), userd: doc.id } as LawyerDetails);
        });
        setLawyers(lawyersList);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
        setLawyers([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLawyers(cityParam, stateParam, lawyerId);
  }, [cityParam, stateParam, lawyerId]);

  return (
    <div>
      <NavBar />
      <div className="py-8 px-2 md:px-0 md:max-w-5xl mx-auto">
        {isLoading ? (
          <div className="mx-auto my-4 flex justify-center items-center">
            <Loader2 className="w-6 h-6 mt-6 animate-spin" />
          </div>
        ) : lawyers.length > 0 ? (
          <>
            {cityParam && stateParam && (
              <div className="text-2xl font-semibold mb-4">
                Lawyers Near {cityParam}, {stateParam}
              </div>
            )}
            {lawyers.map((advocate, index) => (
              <AdvocateCard
                key={advocate.userd || index}
                props={{
                  ...advocate,
                  ratings: parseFloat((Math.random() * 4 + 1).toFixed(1)),
                }}
              />
            ))}
          </>
        ) : (
          <div className="text-center py-12 my-4 bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-medium text-gray-700">
              No advocates found
            </h3>
            {cityParam && stateParam ? (
              <p className="text-gray-500 mt-2">
                Try adjusting your search criteria to find more legal
                professionals in {cityParam}, {stateParam}.
              </p>
            ) : (
              <p className="text-gray-500 mt-2">
                Try searching for a specific location or advocate.
              </p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
