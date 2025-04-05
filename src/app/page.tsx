"use client";
import Map from "@/components/ Map";
import BrandMaqrquee from "@/components/Brands/indext";
import CasesSection from "@/components/Cases";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import PracticeAreasSection from "@/components/Practices";
import AttorneysSection from "@/sections/Attorney/AttorneySection";
import CTASection from "@/sections/CTA";
import Reviews from "@/sections/Reviews";
import Why from "@/sections/Why";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          BPLaw – Trusted Legal Experts Across India | Full-Service Law Firm
        </title>
        <meta
          name="description"
          content="BPLaw offers comprehensive legal services for individuals, startups, and businesses across India. Expert lawyers in corporate, litigation, taxation, civil, criminal law, and more."
        />
        <meta
          name="keywords"
          content="law firm in India, legal services India, corporate lawyers, litigation support, business law India, civil law, criminal law, best law firm"
        />
      </Head>
      <NavBar />
      <Hero />
      <BrandMaqrquee />
      <PracticeAreasSection />
      <CTASection />
      <AttorneysSection />
      <Why />
      <Reviews />
      <Map />
      <Footer />
    </div>
  );
}
