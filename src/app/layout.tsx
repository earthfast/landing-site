import type { Metadata } from "next";
import Script from 'next/script'
import { Inter } from "next/font/google";
import cx from "classnames";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EarthFast - Decentralize your frontend, securely.",
  description:
    "EarthFast is an infrastructure protocol that shifts the responsibility of updating, deploying and hosting your frontend to a community of voters.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icon.ico",
        href: "/icon.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/icon-dark.ico",
        href: "/icon-dark.ico",
      },
    ],
  },
};

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-BSQCMSBHLG`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BSQCMSBHLG');
        `}
      </Script>
    </>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <GoogleAnalytics />
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
