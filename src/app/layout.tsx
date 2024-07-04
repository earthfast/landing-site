import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cx from "classnames";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Earth Fast - Decentralize your frontend, securely.",
  description: "EarthFast is an infrastructure protocol that shifts the responsibility of updating, deploying and hosting your frontend to a community of voters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={cx(
          inter.className,
          "bg-background-light dark:bg-background-dark text-title-light dark:text-title-dark"
        )}
      >
        {children}
      </body>
    </html>
  );
}
