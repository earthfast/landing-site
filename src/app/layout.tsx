import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cx from "classnames";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Earth Fast",
  description: "Decentralize your frontend, securely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
