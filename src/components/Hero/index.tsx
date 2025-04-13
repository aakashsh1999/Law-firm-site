// @ts-nocheck
"use client";
import React from "react";
import "./hero.css";
import heroData from "../../sections/Service/hero.json";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import heroImage from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import Image from "next/image";
import hero3 from "../../assets/horo3.jpg";

function Hero() {
  const pathname = usePathname();
  const pathKey = pathname?.split("/").pop() as string;
  const t = useTranslations(pathKey ? "services" : "Hero");
  const s = useTranslations(pathKey ? "practiceAreas" : "Hero");

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

  const getTranslationS = (key: string, fallback?: string) => {
    try {
      const translated = pathKey ? s(`${pathKey}.${key}`) : s(key);
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
                {pathKey === ""
                  ? getTranslation("title", "")
                  : getTranslation("service_title", "")}
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
                    ? getTranslationS("cta.text", "")
                    : getTranslationS("cta", "")}
                </a>
              </div>
              <div className="hero__links hero__links_desktop">
                <a
                  rel="nofollow noopener noreferrer"
                  className="hero__link w-inline-block cursor-pointer"
                >
                  <img
                    src="https://assets.vakilsearch.com/live-images/home-page-assets/trustpilot.svg"
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
                    <p className="hero__stars-text">4.9</p>
                  </div>
                  <p className="hero__stars-text">{s("martindale", "")}</p>
                </a>
                <a
                  rel="nofollow noopener noreferrer"
                  className="hero__link w-inline-block cursor-pointer"
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
                  <p className="hero__stars-text">{s("google")}</p>
                </a>
              </div>
            </div>
          </div>
          <div className="hero__pictures md:absolute top-40 -right-10 ">
            <div className="hero__pictures-top">
              <Image
                src={heroImage}
                loading="eager"
                alt={""}
                className="picture-item"
                style={{
                  borderRadius: "16px",
                }}
              />
            </div>
            <div className="hero__pictures-block">
              <div className="hero__pictures-item">
                <Image
                  src={hero2}
                  alt={""}
                  className="picture-item"
                  style={{
                    borderRadius: "16px",
                  }}
                />
              </div>
              <div className="hero__pictures-item">
                <Image
                  src={hero3}
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
                  ></p>
                </div>
                <p className="hero__stars-text">
                  {getTranslation("martindale", "")}
                </p>
              </a>
              <a
                rel="nofollow noopener noreferrer"
                href="https://www.google.com/search?q=jacob+d+fuchsberg+"
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
                <p className="hero__stars-text">
                  {getTranslation("google", "")}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
