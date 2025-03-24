"use client";
import { useTranslations } from "next-intl";
import React from "react";

function Hero() {
  const t = useTranslations("whyChooseUsHero");
  return (
    <div>
      <div
        className="section-header bottom-padding-0 about-hero"
        style={{
          background: "white",
        }}
      >
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical">
              <div className="header_top-wrapper">
                <div>
                  <div className="margin-bottom margin-xxsmall">
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
              <img
                src="https://placehold.co/600x150"
                loading="lazy"
                alt="Jacob D. Fuchsberg lawyers and paralegals at India City office"
                sizes="(max-width: 1439px) 90vw, 1280px"
                // srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008b35c19003a_Why-Choose-Us-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008b35c19003a_Why-Choose-Us.webp 1460w"
                className="header-image"
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
