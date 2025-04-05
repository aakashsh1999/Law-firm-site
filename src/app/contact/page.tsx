import Map from "@/components/ Map";
import BrandMaqrquee from "@/components/Brands/indext";
import Hero from "@/components/Contact/Hero";
import Information from "@/components/Contact/Information";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

function ContacUs() {
  return (
    <div>
      <Head>
        <title>Contact BPLaw – Talk to Our Legal Experts Today</title>
        <meta
          name="description"
          content="Need legal help? Contact BPLaw for a free initial consultation. Call us or submit your query online — our team is ready to assist you."
        />
        <meta
          name="keywords"
          content="contact law firm India, free legal consultation, BPLaw contact, speak to lawyer India, legal advice India"
        />
      </Head>

      <NavBar />
      <Hero />
      <Information />
      <BrandMaqrquee />
      <Map />
      <Footer />
    </div>
  );
}

export default ContacUs;
