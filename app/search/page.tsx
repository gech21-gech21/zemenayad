"use client";
import Image from "next/image";
import { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = () => {
    const results = [
      { id: 1, title: "Job Title 1", description: "Description for job 1" },
      { id: 2, title: "Job Title 2", description: "Description for job 2" },
    ];
    setSearchResults(
      results.filter((result) =>
        result.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Search Job</h1>
        <div className="bg-gray-200 rounded-full flex items-center px-4 py-2 transition-all duration-200 hover:bg-gray-300 focus-within:bg-gray-300">
          <input
            type="text"
            placeholder="Search your job..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="flex-grow bg-transparent border-none focus:outline-none px-3 py-1 text-gray-800 placeholder-gray-500"
          />

          <button
            onClick={handleSearch}
            className="ml-2 p-2 rounded-full hover:bg-gray-400 focus:outline-none transition-colors duration-200"
          >
            <Image
              className="cursor-pointer"
              src="/icons & logs/serching.jpg"
              width={74}
              height={24}
              alt="searching icon"
            />
          </button>
        </div>
        <div className="flex justify-between ">
          <div className="p-4">
            <label htmlFor="sort" className="block text-lg font-medium mb-2">
              Job Type
            </label>
            <select
              id="sort"
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option>Full Time</option>
              <option>Freelance</option>
              <option>Remote</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Contract</option>
              <option>Temporary</option>
            </select>
          </div>
          <div className="p-4">
            <label
              htmlFor="category"
              className="block text-lg font-medium mb-2"
            >
              Select Category
            </label>
            <select
              id="category"
              className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option>Accounting & Finance</option>
              <option>Administrative/Secretarial</option>
              <option>Agriculture</option>
              <option>Architecture</option>
              <option>Banking and Insurance</option>
              <option>Communication & Media Jobs</option>
              <option>Economics</option>
              <option>Educational Job</option>
              <option>Engineering Jobs</option>
              <option>Ethiopian Airlines Vacancy</option>
              <option>Fresh Graduates</option>
              <option>General</option>
              <option>Hotel & Tourism Jobs</option>
              <option>Human Resource</option>
              <option>ICT/Computer Science Jobs</option>
              <option>Law</option>
              <option>Management and Business Administration</option>
              <option>Medical & Health Jobs</option>
              <option>NGO Jobs</option>
              <option>Non-Clerical Office</option>
              <option>Driver</option>
              <option>Nursing Job</option>
              <option>Sales & Marketing</option>
              <option>Social & Development Jobs</option>
              <option>Political Science</option>
              <option>Sociology</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          {searchResults.length > 0 ? (
            <ul className="space-y-4">
              {searchResults.map((result) => (
                <li
                  key={result.id}
                  className="py-3 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="font-semibold text-lg">{result.title}</h3>
                  <p className="text-gray-600 mt-1">{result.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            searchTerm && (
              <p className="text-center text-gray-500 mt-4">
                No results found for "{searchTerm}"
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
