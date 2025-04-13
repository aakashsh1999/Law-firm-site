"use client";
import "./index.css";
import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type { Attorney } from "./types";
import AttorneyCard from "./AttornyCard";
// Import attorneys data
import { useTranslations } from "next-intl";
import { getAttorneysWithTranslations } from "./data";
import adv1 from "../../assets/advSunil Background Removed(1).png";

console.log(adv1, "asdfdfsaf");
export default function AttorneysSection() {
  const swiperRef = useRef<Swiper | null>(null);
  const translatedAttorneys = getAttorneysWithTranslations();

  useEffect(() => {
    if (!swiperRef.current) {
      swiperRef.current = new Swiper(".attornyes-swiper", {
        modules: [Navigation],
        slidesPerView: "auto",
        spaceBetween: 24,
        navigation: {
          nextEl: ".attornyes-btn-next",
          prevEl: ".attornyes-btn-prev",
        },
      });
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);
  const t = useTranslations("attorneysSection");

  return (
    <section className="attorneys">
      <div className="section-container section-container_full w-container">
        <div className="attorneys__back"></div>
        <div className="attorneys__content flex items-center justify-between">
          <div>
            <div className="attorneys__content-overlay"></div>
            <div className="section-subtitle section-subtitle_rel">
              <p className="section-subtitle-text">{t("attorneysSubtitle")}</p>
            </div>
            <div className="attorneys__block">
              <h2 className="section-title section-title_522">
                {t("teamTitle")}{" "}
              </h2>
            </div>
            <div className="block md:hidden">
              <Image
                src={adv1}
                alt="BP Law"
                width={644}
                height={400}
                className=""
              />
            </div>

            <p className="upper-text upper-text_bottom">
              {t("managingPartnerLabel")}
            </p>
            <h3 className="card-title">{t("alanFuchsbergName")}</h3>
            <p className="attorneys__info">{t("alanFuchsbergDescription")}</p>
          </div>
          <Image
            src={adv1}
            alt="BP Law"
            width={500}
            height={800}
            className="hidden md:block transform scale-x-[-1]"
          />
        </div>
        <div className="px-12">
          <div className="attorneys__wrap">
            <div
              id="swiper-attorny"
              className="attorneys__wrapper swiper attornyes-swiper"
            >
              <div className="attorneys__list swiper-wrapper">
                {translatedAttorneys.map((attorney: Attorney) => (
                  <AttorneyCard key={attorney.id} attorney={attorney} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
