
import Map from "@/components/ Map";
import BrandMaqrquee from "@/components/Brands/indext";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Approach from "@/components/WhyChooseUs/Approach";
import HaveACase from "@/components/WhyChooseUs/HaveACase";
import Hero from "@/components/WhyChooseUs/Hero";
import Investigation from "@/components/WhyChooseUs/Investigation";
import UsMatters from "@/components/WhyChooseUs/UsMatters";
import React from "react";

function Page() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Approach />
      <UsMatters />
      <Investigation />
      <HaveACase />
      <BrandMaqrquee />
      <Map />
      <Footer />
    </div>
  );
}

export default Page;
