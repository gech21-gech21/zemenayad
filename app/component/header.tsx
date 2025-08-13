"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow-lg text-black sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/icons & logs/z-log.jpg"
            width={50}
            height={50}
            className="rounded-full h-12 w-12 object-cover"
            alt="Zemenay Ad logo"
          />
          <h1 className="ml-2 text-xl font-bold hidden sm:block gradient-text  ">
            ZEMENAY AD
          </h1>
        </div>

        <button
          onClick={toggleMenu}
          className="sm:hidden p-2 focus:outline-none"
        >
          <Image
            src="/icons & logs/bars.svg"
            width={24}
            height={24}
            alt="Menu"
          />
        </button>

        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row absolute sm:relative top-16 sm:top-0 left-0 sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent shadow-lg sm:shadow-none py-4 sm:py-0 space-y-4 sm:space-y-0 sm:space-x-6`}
        >
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/") ? "text-blue-600 font-medium" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/about") ? "text-blue-600 font-medium" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/contactUs"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/contactUs") ? "text-blue-600 font-medium" : ""
            }`}
          >
            Contact Us
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/contactUs") ? "text-blue-600 font-medium" : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/scolarships"
            onClick={() => setIsMenuOpen(false)}
            className={`px-4 py-2 hover:text-blue-600 ${
              isActive("/scolarships") ? "text-blue-600 font-medium" : ""
            }`}
          >
            scholarship
          </Link>
        </nav>
      </div>
    </header>
  );
}
