import type { Metadata } from "next";
import clsx from "clsx";
import Link from "next/link";
import { headers } from "next/headers";

import "./globals.css";

const pathRe = /https?:\/\/[^\/]+\/([^\/]+)/;

export const metadata: Metadata = {
  title: "H Helgason",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";

  const projectsPath = fullUrl.match(pathRe)?.[1] || "";
  const isProjectPath = projectsPath === "projects";
  return (
    <html lang="en">
      <body className={clsx("bg-gradient-bg h-full")}>
        <div className="absolute bg-transparent w-full top-20 left-4 z-10 flex justify-center">
          <div className="rounded bg-off-white flex justify-center items-center p-[1px]">
            <Link
              className={clsx(
                "bg-green-highlight font-gilroy-medium text-dark-blue py-3.5 px-5 rounded border border-dark-blue text-base",
                { "bg-off-white": isProjectPath }, {"bg-green-highlight": !isProjectPath}
              )}
              href="/"
            >
              Home
            </Link>
          </div>
          <div className="rounded bg-off-white flex mx-8 justify-center items-center p-[1px]">
            <Link
              className={clsx(
                "font-gilroy-medium text-dark-blue py-3.5 px-5 rounded border border-dark-blue text-base",
                { "bg-off-white": isProjectPath }, {"bg-purple-highlight": !isProjectPath}
              )}
              href="/projects"
            >
              Projects
            </Link>
          </div>
          <div className="rounded bg-off-white flex justify-center items-center p-[1px]">
            <Link
              className={clsx(
                "font-gilroy-medium text-dark-blue py-3.5 px-5 rounded border border-dark-blue text-base",
                { "bg-off-white": isProjectPath }, {"bg-blue-highlight": !isProjectPath}
              )}
              href="/about"
            >
              About
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
