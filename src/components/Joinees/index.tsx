"use client";
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid"; // Assuming you are using Heroicons
import { db } from "@/config";
import AdvocateCard from "../common/AdvocateCard";
import { AdvocateCard2 } from "../common/AdvocateCard2";
// Define the interface for LawyerDetails (adjust based on your actual data structure)
interface LawyerDetails {
  id: string;
  name: string;
  profilePicture?: string;
  practiceAreas?: string[];
  addressDetails?: {
    city?: string;
    state?: string;
    // Add other address fields as needed
  };
  contactDetails?: {
    email?: string;
    phone?: string;
    // Add other contact fields as needed
  };
  experience?: number;
  description?: string;
  isApproved: boolean;
  title?: string; // Add title if available
  role?: string; // Add role if available
  // Add other relevant fields
}

function Joiness() {
  const [approvedUsers, setApprovedUsers] = useState<LawyerDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApprovedUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const usersRef = collection(db, "lawyers_details"); // Assuming your collection name is "lawyers_details"
        const q = query(usersRef, where("isApproved", "==", true));
        const querySnapshot = await getDocs(q);
        const usersList: LawyerDetails[] = [];
        querySnapshot.forEach((doc) => {
          usersList.push({ id: doc.id, ...doc.data() } as LawyerDetails);
        });
        setApprovedUsers(usersList);
      } catch (err: any) {
        console.error("Error fetching approved users:", err);
        setError("Failed to fetch approved users.");
        setApprovedUsers([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApprovedUsers();
  }, []);

  if (isLoading) {
    return <div>Loading approved users...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="my-2 px-4 md:px-0 max-w-7xl mx-auto">
      <h1 className="mt-12">Our Joniees</h1>
      <div className="max-w-full">
        {approvedUsers.length > 0 ? (
          <ul
            role="list"
            className="mt-4 mb-8 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {approvedUsers.map((person, index) => (
              <li
                key={person.id}
                className="col-span-1 w-full flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow-sm"
              >
                <AdvocateCard2
                  key={person.id || index}
                  props={{
                    ...person,
                    ratings: Math.floor(Math.random() * 6) * 0.1 + 4.5,
                  }}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No approved users found.</p>
        )}
      </div>
    </div>
  );
}

export default Joiness;
