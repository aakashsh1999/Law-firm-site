import Map from "@/components/ Map";
import BrandMaqrquee from "@/components/Brands/indext";
import Cases from "@/components/Cases";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import CTASection from "@/sections/CTA";
import Reviews from "@/sections/Reviews";
import Why from "@/sections/Why";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <BrandMaqrquee />
      {/* <Cases /> */}
      <CTASection />

      {/* <Reviews /> */}
      <Why />
      <Map />
      <Footer />
    </div>
  );
}
