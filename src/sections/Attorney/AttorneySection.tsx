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
        <div className="attorneys__back">
          <img
            src="https://placehold.co/600x200"
            alt="Jacob D. Fuchsberg"
            width={1440}
            height={800}
            className="picture-item picture-item_attorney"
          />
          <div className="attorneys__overlay"></div>
        </div>
        <div className="attorneys__content">
          <div className="attorneys__content-overlay"></div>
          <div className="section-subtitle section-subtitle_rel">
            <p className="section-subtitle-text">{t("attorneysSubtitle")}</p>
          </div>
          <div className="attorneys__block">
            <h2 className="section-title section-title_522">
              {t("teamTitle")}{" "}
            </h2>
          </div>
          <div className="attorneys__mobile-photo">
            <Image
              src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/64492cfc0c7aed036a402e98_main.webp"
              alt="Jacob D. Fuchsberg"
              width={644}
              height={400}
              className="picture-item picture-item_attorneys"
            />
          </div>
          <p className="upper-text upper-text_bottom">
            {t("managingPartnerLabel")}
          </p>
          <h3 className="card-title">{t("alanFuchsbergName")}</h3>
          <p className="attorneys__info">{t("alanFuchsbergDescription")}</p>
          <Link
            href="/attorneys/alan-l-fuchsberg"
            className="section-link w-inline-block items-center local"
          >
            <p className="section-link__text">{t("aboutAlanFuchsbergLink")}</p>
            <Image
              src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447de0caf01e102efd6c3b7_material-symbols_arrow-back%20(1).svg"
              alt="Arrow icon"
              width={30}
              height={30}
              className="practice__list-after"
            />
          </Link>
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
