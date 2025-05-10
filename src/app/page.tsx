"use client";
import Map from "@/components/ Map";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HomeHero from "@/components/HomeHero";
import NavBar from "@/components/Navbar";
import News from "@/components/News";
import AttorneysSection from "@/sections/Attorney/AttorneySection";
import CTASection from "@/sections/CTA";
import Why from "@/sections/Why";

export default function Home() {
  return (
    <div>
      <NavBar />
      <HomeHero />
      <Hero />
      {/* <News /> */}
      <CTASection />
      <AttorneysSection />
      <Why />
      <Map />
      <Footer />
    </div>
  );
}
