import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-bg h-full">
        <div className="absolute bg-transparent w-full top-20 left-4 text-black z-10 flex justify-center">
          <div className="rounded bg-off-white flex justify-center items-center p-[1px]">
            <Link
              className="bg-green-highlight text-dark-blue py-3.5 px-5 rounded border border-dark-blue text-sm"
              href="/projects"
            >
              Projects
            </Link>
          </div>
          <div className="rounded bg-off-white flex mx-8 justify-center items-center p-[1px]">
            <Link
              className="bg-purple-highlight text-dark-blue py-3.5 px-5 rounded border border-dark-blue text-sm"
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="rounded bg-off-white flex justify-center items-center p-[1px]">
            <a
              href="mailto:helgihel@gmail.com"
              className="bg-blue-highlight text-dark-blue py-3.5 px-5 rounded border border-dark-blue text-sm"
            >
              Contact
            </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
