import Map from "@/components/ Map";
import BrandMaqrquee from "@/components/Brands/indext";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Hero from "@/components/Team/Hero";
import Information from "@/components/Team/Information";
import Head from "next/head";
import React from "react";

function ContacUs() {
  return (
    <div>
      <Head>
        <title>
          Meet the BPLaw Team – Experienced Lawyers & Legal Specialists
        </title>
        <meta
          name="description"
          content="Get to know the dedicated team of advocates at BPLaw. Our experts specialize in taxation, corporate law, criminal defense, and more."
        />
        <meta
          name="keywords"
          content="BPLaw legal team, Indian lawyers, best advocates India, specialist lawyers, corporate legal experts India"
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
