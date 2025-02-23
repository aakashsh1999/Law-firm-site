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

export default function Home() {
  return (
    <div>
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
