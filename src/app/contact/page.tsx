import Map from "@/components/ Map";
import BrandMaqrquee from "@/components/Brands/indext";
import Hero from "@/components/Contact/Hero";
import Information from "@/components/Contact/Information";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
  title: "Contact BPLaw – Talk to Our Legal Experts Today",
  description:
    "Need legal help? Contact BPLaw for a free initial consultation. Call us or submit your query online — our team is ready to assist you.",
  keywords:
    "contact law firm India, free legal consultation, BPLaw contact, speak to lawyer India, legal advice India",
};

function ContacUs() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Information />
      {/* <BrandMaqrquee /> */}
      <Map />
      <Footer />
    </div>
  );
}

export default ContacUs;
