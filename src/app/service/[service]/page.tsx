import BrandMaqrquee from "@/components/Brands/indext";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Reviews from "@/sections/Reviews";
import ServiceDetail from "@/sections/Service/ServiceDetail";
import React from "react";

function Page() {
  return (
    <div>
      <NavBar />
      <Hero />
      <BrandMaqrquee />
      <ServiceDetail />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Page;
