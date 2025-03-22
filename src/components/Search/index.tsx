"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, MapPin, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

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
}

export default function LocationSearch() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const debounceTimeout = useRef<NodeJS.Timeout>();
  const router = useRouter();

  const parseLocationDetails = (location: Location): ParsedLocation => {
    const parts = location.display_name.split(",").map((part) => part.trim());

    let city = "";
    let state = "";

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
    };
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 3) {
        setSuggestions([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
            query
          )}&limit=5&addressdetails=1`
        );
        const data = await response.json();
        setSuggestions(data);
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
  }, [query]);

  const handleSelect = (location: Location) => {
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

  return (
    <div className="client-step w-full max-w-md relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a location..."
          className="w-full pl-10 pr-4  py-1 md:py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {loading && (
          <Loader2 className="absolute right-3 top-[12px] translate-y-1/2 h-5 w-5 animate-spin text-gray-400" />
        )}
      </div>

      {suggestions.length > 0 && (
        <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
          {suggestions.map((suggestion) => {
            const locationDetails = parseLocationDetails(suggestion);
            return (
              <button
                key={suggestion.place_id}
                onClick={() => handleSelect(suggestion)}
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
    </div>
  );
}
