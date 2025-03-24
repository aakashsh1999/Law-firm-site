// @ts-nocheck
"use client";
import React from "react";
import "./hero.css";
import heroData from "../../sections/Service/hero.json";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

function Hero() {
  const pathname = usePathname();
  const pathKey = pathname?.split("/").pop() as string;
  const t = useTranslations(pathKey ? "practiceAreas" : "Hero");

  const getTranslation = (key: string, fallback?: string) => {
    try {
      const translated = pathKey ? t(`${pathKey}.${key}`) : t(key);
      return translated;
    } catch (error) {
      console.warn(
        `Translation key '${pathKey}.${key}' not found. Falling back to: ${fallback}`
      );
      return fallback || "";
    }
  };

  return (
    <div className="section-home-hero max-w-7xl mx-auto">
      <div className="section-container w-container">
        <div className="hero">
          <div className="hero__table md:w-2/3">
            <div className="hero__info ">
              <h1 className="hero__title">
                {getTranslation("title", "")}
                {/* Fallback to a general title */}
              </h1>
              <p className="hero__intro hero__intro_dark">
                {getTranslation("intro", "")}
              </p>
              <div className="section-button">
                <a
                  href="/contact"
                  className="new-btn new-btn_blue button-font w-button local"
                  style={{
                    borderRadius: "16px",
                    paddingTop: "22px",
                    paddingBottom: "22px",
                  }}
                >
                  {pathKey
                    ? getTranslation("cta.text", "")
                    : getTranslation("cta", "")}
                </a>
              </div>
              <div className="hero__links hero__links_desktop">
                <a
                  rel="nofollow noopener noreferrer"
                  href="https://www.martindale.com/organization/the-jacob-d-fuchsberg-law-firm-396211/"
                  target="_blank"
                  className="hero__link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1bae3ce3a5b12d6db1_martindale-logo.webp"
                    loading="lazy"
                    alt="Martindale"
                    className="hero__link-icon"
                  />
                  <div className="hero__stars">
                    <img
                      src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1b72a5dfb9d42130fc_Frame%202.svg"
                      loading="lazy"
                      alt="Stars"
                      className="hero__stars-icon"
                    />
                    <p className="hero__stars-text">5.0</p>
                  </div>
                  <p className="hero__stars-text">{t("martindale")}</p>
                </a>
                <a
                  rel="nofollow noopener noreferrer"
                  href="https://www.google.com/search?q=jacob+d+fuchsberg+law"
                  target="_blank"
                  className="hero__link w-inline-block"
                >
                  <img
                    src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1b45e771cc06aca39a_Group%201%20(4).svg"
                    loading="lazy"
                    alt="Google"
                    className="hero__link-google"
                  />
                  <div className="hero__stars">
                    <img
                      src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cbb1d1b57df734457a9b_Frame%202%20(1).svg"
                      loading="lazy"
                      alt="Stars"
                      className="hero__stars-icon"
                    />
                    <p className="hero__stars-text">4.8</p>
                  </div>
                  <p className="hero__stars-text">{t("google")}</p>
                </a>
              </div>
            </div>
          </div>
          <div className="hero__pictures md:absolute top-40 -right-10 ">
            <div className="hero__pictures-top">
              <img
                src="https://placehold.co/600x400"
                loading="eager"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 61vw, (max-width: 1279px) 400px, 526px"
                // srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/648050192e801cea6a02f6d3_1partners%2C%20edited-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/648050192e801cea6a02f6d3_1partners%2C%20edited.webp 800w"
                alt={""}
                className="picture-item"
                style={{
                  borderRadius: "16px",
                }}
              />
            </div>
            <div className="hero__pictures-block">
              <div className="hero__pictures-item">
                <img
                  src="https://placehold.co/600x400"
                  loading="eager"
                  alt={""}
                  className="picture-item"
                  style={{
                    borderRadius: "16px",
                  }}
                />
              </div>
              <div className="hero__pictures-item">
                <img
                  src="https://placehold.co/600x400"
                  loading="eager"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 35vw, (max-width: 1279px) 188px, 251px"
                  // srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/64805065f32d469e9cceb16b_Attorney%20chatter-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/64805065f32d469e9cceb16b_Attorney%20chatter.webp 800w"
                  alt={"heroimage"}
                  className="picture-item"
                  style={{
                    borderRadius: "16px",
                  }}
                />
              </div>
            </div>
            <div className="hero__links">
              <a
                rel="nofollow noopener noreferrer"
                href="https://www.martindale.com/organization/the-jacob-d-fuchsberg-law-firm-396211/"
                target="_blank"
                className="hero__link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1bae3ce3a5b12d6db1_martindale-logo.webp"
                  loading="lazy"
                  alt="Martindale"
                  className="hero__link-icon"
                />
                <div className="hero__stars">
                  <img
                    src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1b72a5dfb9d42130fc_Frame%202.svg"
                    loading="lazy"
                    alt="Stars"
                    className="hero__stars-icon"
                  />
                  <p
                    className="hero__stars-text"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {/* {t("Hero:stars.five")} */}
                  </p>
                </div>
                <p className="hero__stars-text">{t("martindale")}</p>
              </a>
              <a
                rel="nofollow noopener noreferrer"
                href="https://www.google.com/search?q=jacob+d+fuchsberg+"
                target="_blank"
                className="hero__link w-inline-block"
              >
                <img
                  src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cb1b45e771cc06aca39a_Group%201%20(4).svg"
                  loading="lazy"
                  alt="Google"
                  className="hero__link-google"
                />
                <div className="hero__stars">
                  <img
                    src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cbb1d1b57df734457a9b_Frame%202%20(1).svg"
                    loading="lazy"
                    alt="Stars"
                    className="hero__stars-icon"
                  />
                  <p className="hero__stars-text">
                    {/* {t("Hero:stars.fourPointEight")} */}
                  </p>
                </div>
                <p className="hero__stars-text">{t("google")}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
