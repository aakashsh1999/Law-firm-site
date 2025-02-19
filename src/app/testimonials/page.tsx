"use client";
import Map from "@/components/ Map";
import BrandMaqrquee from "@/components/Brands/indext";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Form from "@/components/Footer/Form";
import NavBar from "@/components/Navbar";
import TestimonialsCarousel from "@/components/TestimonialCarousel";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import telephone from "../../assets/telephone.png";
import location from "../../assets/location.png";

function Testimonials() {
  const pathname = usePathname();
  console.log(pathname, "wreofasfd");

  return (
    <div>
      <NavBar pathname={pathname} />
      <div
        className="section-header bottom-padding-0 bg-white"
        style={{
          background: "none",
        }}
      >
        <div className="page-padding bg-white">
          <div className="container-large">
            <div className="padding-vertical">
              <div className="header_top-wrapper">
                <div>
                  <div className="margin-bottom margin-xxsmall">
                    <h1>Testimonials</h1>
                  </div>
                  <div className="text-size-large text-style-muted">
                    Consultations are free and confidential
                  </div>
                </div>
                <a
                  href="#information"
                  className="page-button tablet-mt-24 w-inline-block local"
                >
                  <div>Contact Information</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="information"
        className="section-contact-content"
        style={{ paddingBottom: "60px" }}
      >
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical">
              <div className="w-layout-grid contact-content_component">
                <div id="w-node-_8d9ddff1-129c-9c2b-dca2-a28b694bc4f1-4497f351">
                  <div className="margin-bottom margin-small">
                    <div className="margin-bottom margin-xxsmall">
                      <h2>Additional Information</h2>
                    </div>
                    <div className="text-size-large text-style-muted">
                      The B P Law Firm has fought and won verdicts and
                      settlements for clients in cases involving civil rights
                      violations such as police brutality, protection of
                      prisoners’ rights against cruel and inhumane treatment,
                      and employment discrimination.
                      <br />
                      <br />
                      In addition, we work for justice on a broader scale
                      through class-action and whistle-blower Qui Tam lawsuits.
                    </div>
                  </div>
                  <div className="margin-bottom margin-large">
                    <div>
                      This perspective arises from not only our many years of
                      dedication and our breadth of casework, but also by
                      working as a multi-faceted team—our attorneys ranging in
                      legal focus and experiences.
                      <br />
                      <br />
                      We dedicate ourselves to each person’s case with
                      creativity and persistence to achieve justice for clients
                      faced with emotional, physical, and mental harm. We
                      believe that your story deserves to be heard, and fought
                      for.
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <div className="heading-small">B P Law Firm</div>
                  </div>
                  <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <Image
                          src={location}
                          alt=""
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          A-13, Ansa Plaza, RBSS Sahay Road, Bhagalpur- 812001
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <Image
                          src={location}
                          alt=""
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          C/o ABDICO LLP, 1st Floor, Anand Tower, Exhibition
                          Road, Patna-800001
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <Image
                          src={location}
                          alt=""
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          C/o B/147,Part 1,Lajpat Nagar,New Delhi
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <Mail className="w-8 h-8 px-1.5 rounded-full text-white bg-[#2461E2]" />
                      </dt>
                      <dd>
                        <a
                          className="text-black hover:text-blue-600 underline"
                          href="mailto:bplaw@yahoo.com"
                        >
                          bplaw@yahoo.com
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <Image
                          src={telephone}
                          alt=""
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          +91-8541814401
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="bg-color-grey sticky tablet-no-sticky">
                  <img
                    src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600861c319004e_Free-Lawyer-Consultation-on-the-Phone-NYC%20(1).webp"
                    loading="lazy"
                    alt=""
                    sizes="(max-width: 1439px) 90vw, 1280px"
                    srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600861c319004e_Free-Lawyer-Consultation-on-the-Phone-NYC%2520(1)-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600861c319004e_Free-Lawyer-Consultation-on-the-Phone-NYC%20(1).webp 1460w"
                    className="header-image rounded-xl"
                  />
                  <div
                    id="cr-form-FOR8a92fc4c319343728fa1df06164b9f51"
                    className="form-embed w-embed w-iframe w-script"
                  >
                    <Form classes="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <TestimonialsCarousel />
      <BrandMaqrquee />
      <Map />
      <Footer />
    </div>
  );
}

export default Testimonials;
