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
import { useTranslations } from "next-intl"; // Import the translation hook

function Testimonials() {
  const pathname = usePathname();
  const t = useTranslations("testimonialsPage"); // Use the "testimonialsPage" namespace

  return (
    <div>
      <NavBar />
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
                    <h1>{t("title")}</h1>
                  </div>
                  <div className="text-size-large text-style-muted">
                    {t("consultationFree")}
                  </div>
                </div>
                <a
                  href="#information"
                  className="new-btn new-btn_transparent new-btn_top w-button local"
                  style={{
                    borderRadius: "16px",
                    border: "3px solid #2461E2",
                  }}
                >
                  <div>{t("contactInformationButton")}</div>
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
                      <h2>{t("additionalInformationTitle")}</h2>
                    </div>
                    <div className="text-size-large text-style-muted">
                      {t("additionalInformationText1")}
                      <br />
                      <br />
                      {t("additionalInformationText2")}
                    </div>
                  </div>
                  <div className="margin-bottom margin-large">
                    <div>
                      {t("dedicationPerspective")}
                      <br />
                      <br />
                      {t("achievingJustice")}
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <div className="heading-small">{t("firmName")}</div>
                  </div>
                  <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <Image
                          src={location}
                          alt={t("address1")} // Added alt text translation
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          {t("address1")}
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <Image
                          src={location}
                          alt={t("address2")} // Added alt text translation
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          {t("address2")}
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <Image
                          src={location}
                          alt={t("address3")} // Added alt text translation
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          {t("address3")}
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
                          {t("email")}
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <Image
                          src={telephone}
                          alt={t("telephone")} // Added alt text translation
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          {t("telephone")}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
                <div className="bg-color-grey sticky tablet-no-sticky">
                  <img
                    src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600861c319004e_Free-Lawyer-Consultation-on-the-Phone-NYC%20(1).webp"
                    loading="lazy"
                    alt={t("consultationFree")} // Added alt text translation
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
