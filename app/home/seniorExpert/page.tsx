"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="flex ">
      <Image
        src="/image/gumuruk.jpg"
        width={50}
        height={30}
        alt="gumurok image "
      ></Image>
       <Link href="/senor">
        Senior Expert in Employee Performance Evaluation
      </Link> {" "}
      <p> Senior Expert in Employee Performance Evaluation</p>
    </div>
  );
};

export default page;
