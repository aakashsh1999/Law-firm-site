"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./index.css";
import { useTranslations } from "next-intl";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "@/components/Carousel/CarouselButtons";

export default function Reviews() {
  const t = useTranslations("reviewsSection");
  const s = useTranslations("emblaCarousel");

  const options = {
    align: "center",
    containScroll: "keepSnaps",
    dragFree: false,
    loop: true,
    slidesToScroll: "auto",
    slidesToShow: 1,
    skipSnaps: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="bg-[#2563eb] py-12 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="my-4 text-white font-light text-5xl">
          Our Client's Review
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:gap-x-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <section className="embla">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {s.raw("review").map((x, index) => (
                    <div
                      className="embla__slide flex-shrink-0 w-full md:w-[500px] lg:w-[600px]"
                      key={index}
                    >
                      <section className="relative isolate overflow-hidden px-4 py-8 sm:py-12 rounded-lg shadow-sm">
                        <figure>
                          <div className="flex">
                            <p className="text-left text-white font-light text-lg text-blue-900">
                              {x.review}
                            </p>
                          </div>
                          <div>
                            <img
                              src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447cbb1d1b57df734457a9b_Frame%202%20(1).svg"
                              loading="lazy"
                              alt="Stars"
                              className="hero__stars-icon"
                            />
                            <div className="text-left text-lg font-semibold text-white">
                              {x.name}
                            </div>
                            <div className="text-left text-sm font-semibold text-white">
                              {x.location}
                            </div>
                          </div>
                        </figure>
                      </section>
                    </div>
                  ))}
                </div>
              </div>

              <div className="embla__controls mt-6">
                <div className="embla__buttons flex justify-center space-x-6">
                  <button
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                    className="text-white hover:text-gray-700 disabled:opacity-50"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                    className="text-white hover:text-gray-700 disabled:opacity-50"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://t3.ftcdn.net/jpg/05/76/54/72/360_F_576547272_KvcnWC0wI438UxBZ9x1aI5JKh16VueBh.jpg"
              alt={t("title")}
              className="aspect-[4/3] rounded-2xl bg-gray-50 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
