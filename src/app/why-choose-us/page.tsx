import Map from "@/components/ Map";
import BrandMaqrquee from "@/components/Brands/indext";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Approach from "@/components/WhyChooseUs/Approach";
import HaveACase from "@/components/WhyChooseUs/HaveACase";
import Hero from "@/components/WhyChooseUs/Hero";
import Investigation from "@/components/WhyChooseUs/Investigation";
import UsMatters from "@/components/WhyChooseUs/UsMatters";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "About BPLaw – Leading Legal Advisors for Businesses & Individuals",
  description:
    "Learn about BPLaw’s mission, values, and experienced legal team. With deep expertise across legal fields, we are committed to delivering client-focused legal solutions in India.",
  keywords:
    "about BPLaw, legal experts India, law firm profile, experienced advocates, legal team India, client-first law firm",
};

function Page() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Approach />
      <UsMatters />
      <Investigation />
      <HaveACase />
      <Map />
      <Footer />
    </div>
  );
}

export default Page;
