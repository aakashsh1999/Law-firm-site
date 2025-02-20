"use client";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { db } from "@/config";
import { collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Lawyer {
  // Define a TypeScript interface for your lawyer data
  address: string;
  certificates: string[];
  city: string;
  degrees: string[];
  email: string;
  mobile: string;
  name: string;
  state: string;
  lastSeen: string;
}

function Page() {
  const pathname = usePathname();
  const pathkey = pathname.split("/").pop() as string;
  const [lawyers, setLawyers] = useState<Lawyer[]>([]); // Correct type: Lawyer[]
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchLawyersByCity = async (city: string) => {
      if (!city) return;

      setIsLoading(true);
      try {
        const lawyersRef = collection(db, "lawyers_details");
        const q = query(lawyersRef, where("city", "==", city));
        const querySnapshot = await getDocs(q);

        const lawyersData = querySnapshot.docs.map(
          (doc) => doc.data() as Lawyer
        ); // Type assertion here

        setLawyers(lawyersData);
      } catch (error) {
        console.error("Error fetching lawyers:", error);
        setLawyers([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchLawyersByCity(pathkey); // Only call the function if pathkey exists
  }, [pathkey]);

  console.log(lawyers, "adsfdsf");
  return (
    <div>
      <NavBar />
      <div className="py-8 px-2 md:px-0 md:max-w-7xl mx-auto">
        <div className="text-2xl font-semibold">Lawyers Near {pathkey}</div>
        {isLoading ? (
          <div className="mx-auto my-4 loader"></div>
        ) : (
          <ul role="list" className="divide-y divide-gray-100">
            {lawyers.length > 0 ? (
              lawyers.map((person) => (
                <li
                  key={person.email}
                  className="relative text-black flex flex-col md:flex-row justify-between gap-x-6 py-5"
                >
                  <div className="flex items-center max-w-full gap-x-4">
                    <img
                      alt=""
                      src={
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      }
                      className="size-12 flex-none rounded-full bg-gray-50"
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm/6 font-semibold text-gray-900">
                        <div className="capitalize">
                          <span className="absolute inset-x-0 -top-px bottom-0" />
                          {person.name}
                        </div>
                      </p>
                      <p className=" flex text-xs/5 text-gray-500">
                        <div className="relative truncate hover:underline">
                          {person.email} | +91-{person.mobile}
                        </div>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <div className=" sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm/6 text-gray-900">{person.city}</p>
                      {person?.lastSeen ? (
                        <></>
                      ) : (
                        <div className="mt-1 flex items-center gap-x-1.5">
                          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                            <div className="size-1.5 rounded-full bg-emerald-500" />
                          </div>
                          <p className="text-xs/5 text-gray-500">Online</p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <div className="text-center my-4">Lawyers Not found!</div>
            )}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Page;
