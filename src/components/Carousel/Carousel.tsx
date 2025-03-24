// @ts-nocheck
"use client";
import React from "react";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./index.css";
import { EmblaOptionsType } from "embla-carousel";
import { useTranslations } from "next-intl"; // Import the translation hook

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const t = useTranslations("emblaCarousel"); // Use the "emblaCarousel" namespace

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container relative">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                  <figure className="mt-10">
                    <figcaption className="mt-10">
                      <img
                        className="mx-auto size-20 rounded-full"
                        src="https://placehold.co/600x600"
                        alt={t("namePlaceholder")} // Basic alt text
                      />
                      <div className="mt-4 flex flex-col items-center font-semibold justify-center space-x-3  text-3xl">
                        <div className="">{t("namePlaceholder")}</div>
                        <div className="">{t("caseDetailsPlaceholder")}</div>
                      </div>
                    </figcaption>
                    <div className="flex mt-4">
                      <div className="text-4xl">"</div>
                      <p className="text-center font-light text-lg text-blue-900">
                        {t("testimonialText")}
                      </p>
                      <div className="text-4xl mt-auto">"</div>
                    </div>
                  </figure>
                </div>
              </section>
            </div>
          ))}
        </div>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </section>
  );
};

export default EmblaCarousel;
