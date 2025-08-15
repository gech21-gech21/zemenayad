"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
const page = () => {
  return (
    <div>
      <Head>
        <title>Hubert H. Humphrey Fellowship Program</title>
        <meta
          name="description"
          content="Information about the Hubert H. Humphrey Fellowship Program"
        />
      </Head>

      <h1 className="flex justify-center mt-5 mb-7">
        Scholarship from America for Ethiopian students
      </h1>
      <Image
        className="ml-6 justify-center flex items-center"
        src="/image/americasholarship.jpg"
        alt="image of the american student "
        height={150}
        width={1000}
      ></Image>
      <Link href="mabiwongel@yahoo.com ">
        Published by mabiwongel@yahoo.com On Nov 7
      </Link>
      <Image
        className="ml-6 justify-center flex items-center"
        src="/image/americasholarship.jpg"
        alt="image of the american student "
        height={50}
        width={100}
      ></Image>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
          <div className="space-y-6">
            <div className="bg-blue-800 text-white p-4 rounded-lg">
              <div className="text-2xl font-bold">
                Hubert H. Humphrey Fellowship Program
              </div>
              <div className="text-sm">
                10 months of professional enrichment in the United States
              </div>
            </div>

            <div className="text-gray-700 space-y-4">
              <div>
                The Hubert H. Humphrey Fellowship Program provides 10 months of
                professional enrichment and non-degree graduate-level study in
                the United States for accomplished mid-level professionals from
                designated countries.
              </div>

              <div>
                Fellows are nominated by U.S. Embassies or Fulbright Commissions
                based on their potential for leadership and a demonstrated
                commitment to public service. The fellows are placed in groups
                by professional field at selected U.S. universities offering
                specially designed programs of study and training.
              </div>

              <div>
                The deadline for applicants varies by country. For more
                information, please visit the{" "}
                <a
                  href="https://www.iie.org/programs/humphrey-fellowship-program"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Institute of International Education (IIE) Humphrey Fellowship
                  Program website
                </a>
                .
              </div>

              <div className="font-semibold">Eligibility Criteria:</div>
              <div className="pl-4 space-y-2">
                <div>
                  • An undergraduate (first university or Bachelor's) degree
                </div>
                <div>
                  • A minimum of five years of full-time, professional
                  experience
                </div>
                <div>• Limited or no prior experience in the United States</div>
                <div>• Demonstrated leadership qualities</div>
                <div>• A record of public service in the community</div>
                <div>• English language ability</div>
              </div>

              <div>
                Prospective applicants should contact the U.S. Embassy or
                Fulbright Commission in their home country for complete
                application details.
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="font-semibold">
                    Institute of International Education (IIE)
                  </div>
                  <div className="text-sm mt-2 space-y-1">
                    <div>Department of Scholar and Professional Programs</div>
                    <div>Hubert H. Humphrey Fellowship Program</div>
                    <div>1400 K Street, NW, Suite 700</div>
                    <div>Washington, DC 20005</div>
                    <div>
                      Phone:{" "}
                      <a
                        href="tel:+12026868664"
                        className="text-blue-600 hover:underline"
                      >
                        (202) 686-8664
                      </a>
                    </div>
                    <div>Fax: (202) 326-7841</div>
                    <div>
                      Email:{" "}
                      <a
                        href="mailto:hhh@iie.org"
                        className="text-blue-600 hover:underline"
                      >
                        hhh@iie.org
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="font-semibold">
                    Ethiopian Application Address
                  </div>
                  <div className="text-sm mt-2 space-y-1">
                    <div>Public Affairs Section</div>
                    <div>U.S. Embassy</div>
                    <div>Entoto Street, P.O. Box 1014</div>
                    <div>Addis Ababa, Ethiopia</div>
                    <div>Tel: 251-11-517-40-07</div>
                    <div>Fax: 251-11-124-24-54</div>
                    <div>
                      Email:{" "}
                      <a
                        href="mailto:pasaddis@state.gov"
                        className="text-blue-600 hover:underline"
                      >
                        pasaddis@state.gov
                      </a>
                    </div>
                    <div>
                      Website:{" "}
                      <a
                        href="https://et.usembassy.gov/call-for-applications-for-hubert-h-humphrey-fellowship-program/?_ga=2.124411338.1535812135.1538054381-716073609.1535556864"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        US Embassy Ethiopia
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
