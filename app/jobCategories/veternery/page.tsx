import React from "react";
import Link from "next/link";
const veterinary = () => {
  return (
    <div className="ml-5 mx-5">
      <h1 className="text-3xl font-bold text-center"></h1>

      <h3> Veterinary job vacancy in ethiopia 2019</h3>
      <p>
        Zemenay ad offers you a fresh and up to dated Job vacancies in Ethiopia.
        Visit our website for detail information.{" "}
        <Link className="text-blue-400" href="https://zemenayad.com">
          zemenayad.com
        </Link>{" "}
        is best recruitment portal in Ethiopia with job and scholarship listing
        . For employers, Zemenayad serves as a powerful recruitment site to get
        the right candidates for a job. Our services include online job
        advertisement, a detailed database for freshly uploaded graduate CV ,
        recruitment services and cover letter and CV writing training skills.
        For job seekers, zemenayad.com provides an open access to job
        application and great resources for career advancement and job
        placement.
      </p>
      <p>Whoops. Looks like there are no entries available here.</p>
    </div>
  );
};

export default veterinary;
