"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, Loader2, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { db } from "@/config";
import { collection, getDocs, query, where } from "firebase/firestore";

interface Location {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    city?: string;
    state?: string;
    country?: string;
  };
}

interface ParsedLocation {
  city: string;
  state: string;
  fullAddress?: string;
}

interface Lawyer {
  id: string;
  fullName: string;
  // Add other lawyer details as needed
}

export default function LocationSearch() {
  const [text, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Location[] | Lawyer[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [searchType, setSearchType] = useState<string>("location");
  const debounceTimeout = useRef<NodeJS.Timeout>();
  const router = useRouter();

  const parseLocationDetails = (location: Location): ParsedLocation => {
    const parts = location.display_name.split(",").map((part) => part.trim());

    let city = "";
    let state = "";
    let fullAddress = location.display_name;

    if (location.address) {
      city = location.address.city || "";
      state = location.address.state || "";
    }

    if (!city || !state) {
      if (parts.length >= 3) {
        if (!city) {
          city = parts[0];
        }
        if (!state) {
          for (let i = parts.length - 3; i >= 0; i--) {
            const part = parts[i].trim();
            if (part.length > 2 && !part.match(/^\d+$/)) {
              state = part;
              break;
            }
          }
        }
      }
    }

    return {
      city,
      state,
      fullAddress,
    };
  };
  console.log(searchType, "asdfasdfsdf");
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (text.length < 3) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        if (searchType === "lawyer") {
          // Fetch from Firebase
          console.log("fetching from firebase");
          const usersRef = collection(db, "lawyers_details"); // Assuming your collection name is "lawyers_details"
          const q = query(usersRef, where("isApproved", "==", true));
          const querySnapshot = await getDocs(q);
          console.log(querySnapshot.docs, "adsffds");

          const filteredLawyers = querySnapshot.docs
            .map((doc) => ({ id: doc.id, ...doc.data() } as Lawyer))
            .filter((lawyer) =>
              lawyer.fullName.toLowerCase().includes(text.toLowerCase())
            );

          setSuggestions(filteredLawyers);
        } else {
          // Fetch from Nominatim
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
              text
            )}&limit=5&addressdetails=1&countrycodes=in`
          );
          const data = await response.json();
          setSuggestions(data);
        }
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(fetchSuggestions, 300);

    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [text, searchType]);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setQuery(location.display_name);
    setSuggestions([]);

    const locationDetails = parseLocationDetails(location);
    if (locationDetails?.city && locationDetails?.state) {
      router.push(
        `/lawyers?city=${encodeURIComponent(
          locationDetails.city
        )}&state=${encodeURIComponent(locationDetails.state)}`
      );
    } else {
      console.error("City or state is missing in locationDetails");
    }
  };

  const handleLawyerSelect = (lawyer: Lawyer) => {
    setQuery(lawyer.fullName);
    setSuggestions([]);
    // Navigate to the lawyer's profile page or search results
    router.push(`/lawyers?id=${lawyer.id}`);
  };

  return (
    <div className="client-step w-full max-w-md flex items-center gap-1 relative">
      <div>
        <div className="grid grid-cols-1">
          <select
            id="location"
            name="location"
            defaultValue="location"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            onChange={(e) => setSearchType(e.target.value)}
          >
            <option value={"location"}>Location</option>
            <option value={"lawyer"}>Advocate</option>
          </select>
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
          />
        </div>
      </div>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={text}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={
            searchType === "location"
              ? "Search for a location..."
              : "Search for an advocate..."
          }
          className="w-full pl-10 pr-4  text-sm py-1 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {loading && (
          <Loader2 className="absolute right-3 top-[12px] translate-y-1/2 h-5 w-5 animate-spin text-gray-400" />
        )}
      </div>

      {suggestions.length > 0 && searchType === "location" && (
        <div className="absolute w-full mt-1 bg-white top-9 rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
          {suggestions.map((suggestion: Location) => {
            const locationDetails = parseLocationDetails(suggestion);
            if (locationDetails.city === "" || locationDetails.state === "") {
              return null;
            }
            return (
              <button
                key={suggestion.place_id}
                onClick={() => handleLocationSelect(suggestion)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-start gap-2"
              >
                <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0 mt-1" />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">
                    {locationDetails.city}
                    {locationDetails.state && `, ${locationDetails.state}`}
                  </span>
                  <span className="text-xs text-gray-500 line-clamp-1">
                    {locationDetails.fullAddress}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {suggestions.length > 0 && searchType === "lawyer" && (
        <div className="absolute w-full mt-1 bg-white top-9 rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
          {suggestions.map((lawyer: Lawyer) => (
            <button
              key={lawyer.id}
              onClick={() => handleLawyerSelect(lawyer)}
              className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-start gap-2"
            >
              {/* You might want to display a user icon here */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  {lawyer.fullName}
                </span>
                {/* Display other relevant lawyer information if available */}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
