"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const footer = () => {
  return (
    <div className=" text-white justify-center items-center bg-gray-600">
      <div>
        {" "}
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contactUs">Contact us</Link>
        <Link href="/pricing">pricing</Link>
      </div>
      <div>
        <h1>job categories</h1>
        <Link href=""></Link>
      </div>

      <div className="flex gap-4">
        <div className="rounded-full flex h-10 w-10 justify-center items-center hover:bg-blue-600 transition-colors duration-200">
          <Link href="https://t.me/zemenayad">
            <Image
              src="/icons & logs/telegram.jpg"
              width={7}
              height={7}
              className="rounded-full  shadow-blue-50 h-7 w-7 object-cover"
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
            />{" "}
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

      <p className="block">
        © 2018-{new Date().getFullYear()} Zemenay Ad. All rights reserved.
      </p>
    </div>
  );
};

export default footer;
