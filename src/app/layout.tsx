import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import TawkToIntegration from "@/components/TawkToIntegration";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import Payment from "./payment";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BPLaw – Trusted Legal Experts Across India | Full-Service Law Firm",
  description:
    "BPLaw offers comprehensive legal services for individuals, startups, and businesses across India. Expert lawyers in corporate, litigation, taxation, civil, criminal law, and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <link rel="icon" type="image/png" href={"./favicon.png"} sizes="32x32" />
      <link rel="icon" type="image/png" href={"./favicon.png"} sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
      <link rel="shortcut icon" href="./favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="./site.webmanifest" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <TawkToIntegration />
        <NextIntlClientProvider messages={messages}>
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={true}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </NextIntlClientProvider>
        <Payment />
      </body>
    </html>
  );
}
