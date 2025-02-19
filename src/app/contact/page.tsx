import Map from "@/components/ Map";
import BrandMaqrquee from "@/components/Brands/indext";
import Hero from "@/components/Contact/Hero";
import Information from "@/components/Contact/Information";
import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import React from "react";

function ContacUs() {
  return (
    <div>
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
