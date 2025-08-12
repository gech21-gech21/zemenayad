"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <div className="text-white justify-center items-center bg-gray-600 p-4">
 
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contactUs">Contact us</Link>
        <Link href="/pricing">pricing</Link>
      </div>

   
      <div className="mb-8">
        <h1 className="text-xl text-center  font-bold mb-4">job categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
          <Link href="/jobCategories/adminstrative">adminstrative</Link>
          <Link href="/jobCategories/accountingFinance">
            Accounting & Finance
          </Link>
          <Link href="/jobCategories/administrative">Administrative</Link>
          <Link href="/jobCategories/agliculture">Agriculture</Link>
          <Link href="/jobCategories/airlinesVacancy">Airlines Vacancy</Link>
          <Link href="/jobCategories/architecture">Architecture</Link>
          <Link href="/jobCategories/banking">Banking</Link>
          <Link href="/jobCategories/communication-mediajob">
            Communication & Media
          </Link>
          <Link href="/jobCategories/deriver">Deriver</Link>
          <Link href="/jobCategories/economics">Economics</Link>
          <Link href="/jobCategories/educational">Educational</Link>
          <Link href="/jobCategories/engineeringJob">Engineering</Link>
          <Link href="/jobCategories/freshGraduates">Fresh Graduates</Link>
          <Link href="/jobCategories/generals">Generals</Link>
          <Link href="/jobCategories/hotel-tourism">Hotel & Tourism</Link>
          <Link href="/jobCategories/humanResource">Human Resource</Link>
          <Link href="/jobCategories/ict-computer-science">
            ICT & Computer Science
          </Link>
          <Link href="/jobCategories/law">Law</Link>
          <Link href="/jobCategories/managmentbussinesAdministrative">
            Management & Business Administrative
          </Link>
          <Link href="/jobCategories/medical-health">Medical & Health</Link>
          <Link href="/jobCategories/ngo">NGO</Link>
          <Link href="/jobCategories/non-clericalOffice">
            Non-Clerical Office
          </Link>
          <Link href="/jobCategories/nursing">Nursing</Link>
          <Link href="/jobCategories/political">Political</Link>
          <Link href="/jobCategories/sales-marketing">Sales & Marketing</Link>
          <Link href="/jobCategories/social-development">
            Social & Development
          </Link>
          <Link href="/jobCategories/sociology">Sociology</Link>
          <Link href="/jobCategories/textilegarment">Textile & Garment</Link>
          <Link href="/jobCategories/veterinary">Veterinary</Link>
        </div>
      </div>

     
      <div className="flex gap-4 justify-center items-center mb-4">
        <div className="rounded-full flex h-10 w-10 justify-center items-center hover:bg-blue-600 transition-colors duration-200">
          <Link href="https://t.me/zemenayad">
            <Image
              src="/icons & logs/telegram.jpg"
              width={7}
              height={7}
              className="rounded-full shadow-blue-50 h-7 w-7 object-cover"
              alt="Telegram logo"
            />
          </Link>
        </div>

        <div className="rounded-full flex h-10 w-10 justify-center items-center hover:bg-blue-600 transition-colors duration-200">
          <Link href="https://web.facebook.com/Zemenayjobs">
            <Image
              src="/icons & logs/fb.jpg"
              width={7}
              height={7}
              className="rounded-full h-7 w-7 object-cover"
              alt="Facebook logo"
            />
          </Link>
        </div>

        <div className="rounded-full flex h-10 w-10 justify-center items-center hover:bg-blue-600 transition-colors duration-200">
          <Link href="https://www.youtube.com/@ZemenayAd">
            <Image
              src="/icons & logs/youtube.jpg"
              width={10}
              height={10}
              className="rounded-full h-7 w-7 object-cover"
              alt="youtube logo"
            />
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <p className="block text-center">
        © 2018-{new Date().getFullYear()} Zemenay Ad. All rights reserved.
      </p>
    </div>
  );
};

export default footer;
