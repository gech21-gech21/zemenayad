import React from "react";

const adminstrative = () => {
  return (
    <div className="ml-5 w-full container mx-auto ">
      <h1 className="font-bold text-3xl text-center">
        Administrative/Secretarial
      </h1>
      <p>
        Zemenay ad provide you a well detailed and updated Jobs in Ethiopia to
        your fingertips. Visit our website for detail information. Zemenayad.com
        is best recruitment portal in Ethiopia with job and scholarship listing
        . For employers, Zemenayad serves as a powerful recruitment site to get
        the right candidates for a job. Our services include online job
        advertisement, a detailed database for freshly uploaded graduate CV ,
        recruitment services and cover letter and CV writing training skills.
        For job seekers, zemenayad.com provides an open access to job
        application and great resources for career advancement and job
        placement.
      </p>

      <div className="p-4">
        <label htmlFor="sort" className="block text-lg font-medium mb-2">
          Sort By
        </label>
        <select
          id="sort"
          className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option>Alphabetical</option>
          <option>Title Ascending</option>
          <option>Title Descending</option>
          <option>Publish Date Ascending</option>
          <option>Reviews</option>
          <option>Rating</option>
          <option>Random</option>
        </select>
      </div>
    </div>
  );
};

export default adminstrative;
