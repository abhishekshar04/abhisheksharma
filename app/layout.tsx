import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abhishek Sharma - Portfolio",
  description: "Abhishek Sharma's Portfolio",
};
const InterFont = Inter({
  subsets: ['latin'],
  weight: ['200','300','400','500','600','700','800','900'],
  variable: '--font-inter',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${InterFont.variable} bg-[#F8FAFC] w-full px-4 flex flex-col items-center justify-center mx-auto my-12`}
      >
        <div className="w-full flex flex-col gap-16 max-w-[600px]">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
