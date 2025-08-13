import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <div className=" container mx-auto  ">
        <h1 className="text-2xl font-bold text-center "> Pricing </h1>
        <p className="mx-6">
          Pricing Zemenayad.com offers a competitive pricing strategy for
          employers. our website is one of fastest growing recruitment site in
          Ethiopia and our site has a still stand on search engines and social
          media. our pricing is reasonable for companies and we offer various
          packages for companies ranging from small scale to large ones. in
          order to help you compare our packages, we have listed our pricing
          options below. once you find a package that fits your overall plan,
          click “SUBMIT JOBS” button and it will redirect you to{" "}
          <Link href="/job-submition" className="text-blue-400">
            job submission page
          </Link>
          .
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-4 mt-9 mx-4">
        {/* First card */}
        <div className="bg-white rounded-lg shadow-lg w-full md:w-[calc(50%-0.5rem)] lg:w-auto lg:flex-1">
          <div className="bg-blue-500 text-white text-center p-4 rounded-t-lg">
            FREE TRIAL
          </div>
          <div className="text-center bg-blue-600 text-5xl text-white py-4">
            0.0
            <br />
            <span className="text-xl">Birr</span>
          </div>
          <div className="text-center text-lg py-4 font-medium">
            Single job submission
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-4 text-gray-500">--------------</div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-5 text-gray-500">--------------</div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-10 text-gray-500">--------------</div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-10 text-gray-500">
            <Link
              href="/jobSubmition"
              className="text-white shadow-2xl bg-blue-500 rounded-xl mx-auto text-center px-9 hover:bg-blue-600 py-3"
            >
              submit job
            </Link>
          </div>
        </div>

        {/* Second card */}
        <div className="bg-white rounded-lg shadow-lg w-full md:w-[calc(50%-0.5rem)] lg:w-auto lg:flex-1">
          <div className="bg-green-500 text-white text-center p-4 rounded-t-lg">
            STANDARD
          </div>
          <div className="text-center bg-green-600 text-5xl text-white py-4">
            2,800
            <br />
            <span className="text-xl">Birr</span>
          </div>
          <div className="text-center text-lg py-4 font-medium">
            10 job submission
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-4 text-gray-500">
            3 months membership
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-5 text-gray-500">
            1 featured job on homepage
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-10 text-gray-500">
            1Free submission{" "}
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-10 text-gray-500">
            <Link
              href="/jobSubmition"
              className="text-white shadow-2xl bg-green-500 rounded-xl mx-auto text-center px-9 hover:bg-green-600 py-3"
            >
              submit job
            </Link>
          </div>
        </div>

        {/* Third card */}
        <div className="bg-white rounded-lg shadow-lg w-full md:w-[calc(50%-0.5rem)] lg:w-auto lg:flex-1">
          <div className="bg-orange-400 text-white text-center p-4 rounded-t-lg">
            GOLDEN
          </div>
          <div className="text-center bg-orange-500 text-5xl text-white py-4">
            9,800
            <br />
            <span className="text-xl">Birr</span>
          </div>
          <div className="text-center text-lg py-4 font-medium">
            50 job submission
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-4 text-gray-500">
            1 year membership
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-5 text-gray-500">
            1 featured job on homepage every month
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-10 text-gray-500">
            1Free submission{" "}
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-10 text-gray-500">
            <Link
              href="/jobSubmition"
              className="text-white shadow-2xl bg-orange-400 rounded-xl mx-auto text-center px-9 hover:bg-orange-500 py-3"
            >
              submit job
            </Link>
          </div>
        </div>

        {/* Fourth card */}
        <div className="bg-white rounded-lg shadow-lg w-full md:w-[calc(50%-0.5rem)] lg:w-auto lg:flex-1">
          <div className="bg-red-400 text-white text-center p-4 rounded-t-lg">
            PREMIUM
          </div>
          <div className="text-center bg-red-600 text-5xl text-white py-4">
            14,800
            <br />
            <span className="text-xl">Birr</span>
          </div>
          <div className="text-center text-lg py-4 font-medium">
            unlimited job submission
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-4 text-gray-500">
            one year membership
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-5 text-gray-500">
            2 featured job on homepage every month{" "}
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-10 text-gray-500">
            1 free submission
          </div>
          <hr className="border-gray-300 border-t-1" />
          <div className="text-center py-10 text-gray-500">
            <Link
              href="/jobSubmition"
              className="text-white shadow-2xl bg-red-400 rounded-xl mx-auto text-center px-9 hover:bg-red-600 py-3"
            >
              submit job
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
