// @ts-nocheck
"use client";
import React from "react";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./index.css";
import { EmblaOptionsType } from "embla-carousel";
type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

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
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <div className="mt-4 flex flex-col items-center font-semibold justify-center space-x-3  text-3xl">
                        <div className="">NAME</div>
                        <div className="">Case Details</div>
                      </div>
                    </figcaption>
                    <div className="flex mt-4">
                      <div className="text-4xl">"</div>
                      <p className="text-center font-light text-lg text-blue-900">
                        Executive profiles – A company is only as strong as its
                        executive leadership. This is a good <br /> place to
                        show off who’s occupying the corner offices. Write a
                        nice bio about each executive <br /> that includes what
                        they do, how long they’ve been at it, and what got them
                        to where they
                        <br /> are.
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
