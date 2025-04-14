import TestimonialsComponent from "@/components/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials – What Clients Say About BPLaw",
  description:
    "Read real client reviews and testimonials about their experience working with BPLaw. Trusted legal advisors across India.",
  keywords:
    "BPLaw reviews, client testimonials India, lawyer feedback, legal service experience, law firm trust India",
};

function Testimonials() {
  return (
    <div>
      <TestimonialsComponent />
    </div>
  );
}

export default Testimonials;
