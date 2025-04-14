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
import adv1 from "../../assets/advt-sunil-kumar.png";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "@/components/Carousel/CarouselButtons";
import "../../components/Carousel/index.css";
console.log(adv1, "asdfdfsaf");
export default function AttorneysSection() {
  const translatedAttorneys = getAttorneysWithTranslations();
  const options = {
    align: "center",
    containScroll: "keepSnaps",
    dragFree: true,
    draggable: true,
    gap: 0,
    loop: false,
    // scrollSnap: true,
    // scrollSnapAlign: "start",
    // scrollSnapDestination: "0% 50%",
    // scrollSnapPointsX: ["0%", "50%"],
    // scrollSnapStop: "always",
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

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
        <section className="embla px-4 md:px-0">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container relative gap-16 px-12">
              {translatedAttorneys.map((attorney: Attorney) => (
                <AttorneyCard key={attorney.id} attorney={attorney} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
