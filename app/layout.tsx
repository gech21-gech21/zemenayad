import type { Metadata } from "next";

import "./globals.css";
import Footer from "./component/footer"
import Header from "./component/header"

export const metadata: Metadata = {
  title: "zemenayad",
  description: "zemenayad web site",
};

export default function RootLayout({
  children,

}: {
  children: React.ReactNode;

}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
