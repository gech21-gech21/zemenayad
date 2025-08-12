"use client ";
import Image from "next/image";
export default function Search() {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-3xl font-bold"> Search job</h1>
        <div className="bg-gray-400 rounded-4xl w-50">
          <input type="text" />

          <Image
            className=""
            src="/icons & logs/z-log.jpg"
            width={30}
            height={20}
            alt="searching log"
          ></Image>
        </div>
        <div></div>
      </div>
    </div>
  );
}
