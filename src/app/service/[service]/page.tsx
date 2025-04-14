import React from "react";
import NavBar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import BrandMarquee from "@/components/Brands/index"; // Uncomment if used
import ServiceDetail from "@/sections/Service/ServiceDetail";
import Reviews from "@/sections/Reviews";
import Footer from "@/components/Footer";
import en from "../../../i18n/locales/en.json";

// This function is used to generate metadata for SEO
export async function generateMetadata({ params }) {
  const { service } = params; // Destructure service from params
  const serviceData = en.services?.[service]?.meta;

  if (!serviceData) {
    return {
      title: "Service Not Found",
      description: "Service details not available.",
    };
  }

  return {
    title: serviceData.title,
    description: serviceData.description,
  };
}

function Page() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ServiceDetail />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Page;
