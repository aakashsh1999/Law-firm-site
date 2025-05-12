import Map from "@/components/ Map";
import Footer from "@/components/Footer";
import Joinees from "@/components/Joinees";
import NavBar from "@/components/Navbar";
import { Metadata } from "next";
import React from "react";
import AllNewsClient from "./client";

export const metadata: Metadata = {
  title: "Meet the BPLaw Team – Experienced Lawyers & Legal Specialists",
  description:
    "Get to know the dedicated team of advocates at BPLaw. Our experts specialize in taxation, corporate law, criminal defense, and more..",
  keywords:
    "BPLaw legal team, Indian lawyers, best advocates India, specialist lawyers, corporate legal experts India",
};

function ContacUs() {
  return (
    <div>
      <NavBar />
      <AllNewsClient />
      <Map />
      <Footer />
    </div>
  );
}

export default ContacUs;
