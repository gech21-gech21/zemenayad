import React from "react";
import Link from "next/link";
const hotel = () => {
  return (
    <div className="mx-5 container">
      <h1 className="text-3xl font-bold text-center ">Hotel & Tourism Jobs</h1>
      <h3>Hotel Jobs in Ethiopia</h3>

      <p>
        Zemenay ad provide you various Hotel Jobs in Ethiopia, waitress job in
        Ethiopia, receptionist jobs in Ethiopia, tourism jobs in Ethiopia. visit
        our website for detail information. Zemenayad.com is best recruitment
        portal in Ethiopia with job and scholarship listing . For employers,
        Zemenayad serves as a powerful recruitment site to get the right
        candidates for a job. Our services include online job advertisement, a
        detailed database for freshly uploaded graduate CV , recruitment
        services and cover letter and CV writing training skills. For job
        seekers, zemenayad.com provides an open access to job application and
        great resources for career advancement and job placement.
      </p>
      <Link href="@/scholarship/page"> scholarship opportunities</Link>
    </div>
  );
};

export default hotel;
