"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">
          Senior Expert in Employee Performance Evaluation
        </h1>
        <p className="text-gray-700 mb-2">Full Time</p>
        <Link
          href="#"
          className="text-blue-500 underline hover:text-blue-700 transition-colors"
          aria-label="Visit company website"
        >
          Visit Company Website
        </Link>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => console.log("Sent to friend")}
          >
            Send to friend
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            onClick={() => console.log("Sent inquiry")}
          >
            Send Inquiry
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
            onClick={() => console.log("Added to favorites")}
          >
            Add to favorites
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
            onClick={() => window.print()}
          >
            Print
          </button>
        </div>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Company Info</h2>
          <p>
            <strong>Company Name:</strong> Ethiopian Customs Commission
          </p>
          <p>
            <strong>Position:</strong> Senior Expert in Employee Performance
            Evaluation
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-xl font-semibold">Job Description</h2>
          <p className="mt-2">
            The Ethiopian Customs Commission is seeking qualified and capable
            candidates for the following vacant positions. As per Proclamation
            Number 1097/2018, the Ethiopian Customs Commission has recently been
            established as a separate entity from the previous Ethiopian
            Revenues and Customs Authority. The Commission operates under the
            leadership of a Commissioner, who is accountable to the Ministry of
            Revenues, and operates with its own distinct vision and mission.
          </p>
        </section>

        <section className="mt-4">
          <h3 className="font-semibold">Objectives:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            {[
              "Establishing a modern customs administration system to provide equitable, efficient, and high-quality services.",
              "Timely and efficient collection of duties and taxes on imported or exported goods.",
              "Implementation of relevant customs laws and adherence to international agreements ratified by Ethiopia.",
              "Regulation of import and export activities related to prohibited or restricted goods.",
              "Prevention and control of customs-related offenses.",
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-4">
          <h3 className="font-semibold">Education:</h3>
          <p className="mt-1">
            BA Degree in Human Resource Management, Management, Business
            Management, Business Administration, Development Management,
            Entrepreneurship and Business Management, MIS or other associated
            fields.
          </p>
        </section>

        <section className="mt-4">
          <h3 className="font-semibold">Experience:</h3>
          <p className="mt-1">Four years work expertise.</p>
        </section>

        <section className="mt-4">
          <h3 className="font-semibold">Place of labor:</h3>
          <p className="mt-1">Addis Ababa.</p>
        </section>

        <section className="mt-4">
          <h3 className="font-semibold">Salary:</h3>
          <p className="mt-1">13,184 ETB.</p>
        </section>

        <section className="mt-4">
          <h3 className="font-semibold">Deadline:</h3>
          <p className="mt-1">March 1, 2024.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">How to Apply</h2>
          <p className="mt-2">
            Interested and certified candidates who meet the necessities can
            submit their authentic and non-returnable documents including
            education proof and work expertise, and may apply in-person to our
            office located at Addis Ababa, in front of Tilahun Gesesse Square,
            Custom Commission Head Office, Human Resource Management
            Directorate, 4th Floor Office NO. 8.
          </p>
          <p className="mt-2">For further information, call 0116 67 60 25.</p>
        </section>

        <a
          href="#"
          className="mt-6 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          aria-label="Apply for this position"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default page;
