"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import AdvocateCard from "@/components/common/AdvocateCard";
import { db } from "@/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ChevronRight, Loader, Loader2 } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
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
}

export interface SearchCriteria {
  location: string;
  legalIssue: string;
}

function Page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const city = searchParams.get("city");
  const state = searchParams.get("state");

  const pathkey = pathname.split("/").pop() as string;
  const [lawyers, setLawyers] = useState<LawyerDetails[]>([]); // Correct type: Lawyer[]
  const [isLoading, setIsLoading] = useState(false);

  function formatState(state: string) {
    return state.includes(" ") ? state.replace(/\s+/g, "_") : state;
  }

  useEffect(() => {
    const fetchLawyersByCity = async (
      city: string | null,
      state: string | null
    ) => {
      if (!city || !state) return;
      state = formatState(state);

      setIsLoading(true);
      try {
        const lawyersRef = collection(db, "lawyers_details");
        const q = query(
          lawyersRef,
          where("addressDetails.city", "==", city?.toLowerCase()),
          where("addressDetails.state", "==", state?.toLowerCase()),
          where("isApproved", "==", true)
        );

        const querySnapshot = await getDocs(q);
        const lawyersList: LawyerDetails[] = [];
        querySnapshot.forEach((doc) => {
          lawyersList.push(doc.data() as LawyerDetails);
        });

        setLawyers(lawyersList);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
        setLawyers([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLawyersByCity(city, state); // Only call the function if city and state exist
  }, [city, state]);

  return (
    <div>
      <NavBar />
      <div className="py-8 px-2 md:px-0 md:max-w-5xl mx-auto">
        <div className="text-2xl font-semibold">
          Lawyers Near {city}, {state}
        </div>
        {isLoading ? (
          <div className="mx-auto my-4 flex justify-center items-center">
            <Loader2 className="w-6 h-6 mt-6 animate-spin" />
          </div>
        ) : lawyers.length > 0 ? (
          lawyers.map((advocate, index) => (
            <AdvocateCard
              key={advocate.userd || index}
              props={{
                ...advocate,
                ratings: parseFloat((Math.random() * 4 + 1).toFixed(1)),
              }}
            />
          ))
        ) : (
          <div className="text-center py-12 my-4 bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h3 className="text-xl font-medium text-gray-700">
              No advocates found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search criteria to find more legal
              professionals
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
