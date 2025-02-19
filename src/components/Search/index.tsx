"use client";
import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "../utils";
import { searchFirestore } from "@/lib/firestore";
import { ArrowUpCircleIcon, CircleStackIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import "./search.css";
import { cities } from "@/lib/cities";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filterSuggestions = (query) => {
    if (query.trim() === "") {
      return [];
    }

    const filteredCities = cities.filter((city) =>
      city.toLowerCase().startsWith(query.toLowerCase())
    );
    return filteredCities;
  };

  const debouncedSearch = useCallback(
    debounce(async (term: string) => {
      if (term.trim() === "") {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const searchResults = await filterSuggestions(term);
        setResults(searchResults);
      } catch (error) {
        console.error("Error searching Firestore:", error);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  return (
    <div className="grid w-full grid-cols-1 sm:max-w-lg bg-white rounded-lg max-h-60 focus-visible:none relative">
      <input
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="search"
        autoComplete="off"
        placeholder="Search a service..."
        className={`col-start-1 row-start-1 block w-full  bg-white py-1.5 pl-3 pr-10 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline sm:text-sm/6 ${
          results.length === 0 ? "rounded-lg" : "rounded-t-lg"
        }`}
      />
      <svg
        className="pointer-events-none absolute  right-2 top-1.5 size-6 fill-slate-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path d="M20.47 21.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-9.97-4.28a6.75 6.75 0 0 1-6.75-6.75h-1.5a8.25 8.25 0 0 0 8.25 8.25v-1.5ZM3.75 10.5a6.75 6.75 0 0 1 6.75-6.75v-1.5a8.25 8.25 0 0 0-8.25 8.25h1.5Zm6.75-6.75a6.75 6.75 0 0 1 6.75 6.75h1.5a8.25 8.25 0 0 0-8.25-8.25v1.5Zm11.03 16.72-5.196-5.197-1.061 1.06 5.197 5.197 1.06-1.06Zm-4.28-9.97c0 1.864-.755 3.55-1.977 4.773l1.06 1.06A8.226 8.226 0 0 0 18.75 10.5h-1.5Zm-1.977 4.773A6.727 6.727 0 0 1 10.5 17.25v1.5a8.226 8.226 0 0 0 5.834-2.416l-1.061-1.061Z"></path>
      </svg>
      {results.length !== 0 ? (
        <div
          className="max-h-[18.375rem] w-full z-50 absolute bg-white py-3 top-9 overflow-y-auto rounded-b-lg border-t border-slate-200 text-sm"
          style={{ maxHeight: "300px", overflowY: "auto", zIndex: 1 }}
        >
          {results.map((item) => (
            <Link
              href={`/lawyers/${item}`}
              key={item}
              className="flex items-center justify-between px-4 py-2 cursor-pointer hover:text-blue-500 text-slate-900 "
            >
              <span className="font-light hover:font-semibold ">{item}</span>
            </Link>
          ))}
        </div>
      ) : results.length === 0 && searchTerm && !isLoading ? (
        <div
          className="max-h-[18.375rem] w-full z-50 absolute bg-white py-3 top-9 overflow-y-auto rounded-b-lg border-t border-slate-200 text-sm"
          style={{ maxHeight: "300px", overflowY: "auto", zIndex: 1 }}
        >
          <div className="px-4">No Results found</div>
        </div>
      ) : results.length === 0 && searchTerm && isLoading ? (
        <div
          className="max-h-[18.375rem] w-full z-50 absolute flex justify-center bg-white py-3 top-9 overflow-y-auto rounded-b-lg border-t border-slate-200 text-sm"
          style={{ maxHeight: "300px", overflowY: "auto", zIndex: 1 }}
        >
          <div className="loader"></div>
        </div>
      ) : null}
    </div>
  );
}

export default Search;
