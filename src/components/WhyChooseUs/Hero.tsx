"use client";
import { useTranslations } from "next-intl";
import React from "react";
import about from "../../assets/about.jpeg";
import Image from "next/image";

function Hero() {
  const t = useTranslations("whyChooseUsHero");
  return (
    <div>
      <div
        className=" bottom-padding-0 about-hero overflow-x-hidden"
        style={{
          background: "white",
          overflowX: "hidden",
        }}
      >
        <div className="page-padding">
          <div className="container-large">
            <div
              className="padding-vertical "
              style={{
                marginTop: "24px !important",
              }}
            >
              <div className="">
                <div>
                  <div className="margin-bottom margin-xxsmall ">
                    <h1>{t("whyChooseUsTitle")}</h1>
                  </div>
                  <div className="text-size-large text-style-muted">
                    {t("heroSubtitle")}
                  </div>
                </div>
                <a
                  href="#approach"
                  // className="page-button tablet-mt-24 w-inline-block local"
                  className="new-btn new-btn_transparent new-btn_top w-button local"
                  style={{
                    borderRadius: "16px",
                    border: "3px solid #2461E2",
                  }}
                >
                  <div>{t("learnAboutUsButton")}</div>
                </a>
              </div>
              <Image
                src={about}
                loading="lazy"
                alt="BP Law lawyers and paralegals at India City office"
                className="header-image mt-6 md:mt-20 max-h-[150px]  md:max-h-[400px]"
                style={{
                  borderRadius: "16px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
