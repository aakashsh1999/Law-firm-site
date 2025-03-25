"use client";

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
import { attorneys } from "./data";

export default function Attorney() {
  const swiperRef = useRef<Swiper | null>(null);

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

  return (
    <section className="attorneys">
      <div className="section-container section-container_full w-container">
        <div className="attorneys__back">
          <Image
            src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/64491d0f15ea8a293199bf04_Mask%20group%20(2).webp"
            alt="BP Law"
            width={1440}
            height={800}
            className="picture-item picture-item_attorney"
          />
          <div className="attorneys__overlay"></div>
        </div>
        <div className="attorneys__content">
          <div className="attorneys__content-overlay"></div>
          <div className="section-subtitle section-subtitle_rel">
            <p className="section-subtitle-text">attorneys</p>
          </div>
          <div className="attorneys__block">
            <h2 className="section-title section-title_522">
              BP Law Law Firm Team
            </h2>
          </div>
          <div className="attorneys__mobile-photo">
            <Image
              src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/64492cfc0c7aed036a402e98_main.webp"
              alt="BP Law"
              width={644}
              height={400}
              className="picture-item picture-item_attorneys"
            />
          </div>
          <p className="upper-text upper-text_bottom">Managing Partner</p>
          <h3 className="card-title">Alan Fuchsberg</h3>
          <p className="attorneys__info">
            Alan Fuchsberg is a skilled India personal injury lawyer who is part
            of a family of esteemed judges and attorneys and a son of the
            founding partner of the legal firm. Alan is a nationally recognized
            lawyer who collaborates on the {`firm's`} mass tort and class-action
            lawsuits and advocates for individual plaintiffs.
          </p>
          <Link
            href="/attorneys/alan-l-fuchsberg"
            className="section-link w-inline-block local"
          >
            <Image
              src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447de0caf01e102efd6c3b7_material-symbols_arrow-back%20(1).svg"
              alt="Arrow icon"
              width={24}
              height={24}
              className="practice__list-before"
            />
            <p className="section-link__text">About Alan Fuchsberg</p>
            <Image
              src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447de0caf01e102efd6c3b7_material-symbols_arrow-back%20(1).svg"
              alt="Arrow icon"
              width={24}
              height={24}
              className="practice__list-after"
            />
          </Link>
        </div>
        <div className="attorneys__table">
          <div className="attorneys__wrap">
            <div className="attorneys__buttons">
              <button className="attornyes__btn attornyes-btn-prev">
                <div className="attorneys__icon">
                  {/* SVG icon for prev button */}
                </div>
              </button>
              <button className="attornyes__btn attornyes-btn-next">
                <div className="attorneys__icon">
                  {/* SVG icon for next button */}
                </div>
              </button>
            </div>
            <div
              id="swiper-attorny"
              className="attorneys__wrapper swiper attornyes-swiper"
            >
              <div className="attorneys__list swiper-wrapper">
                {attorneys.map((attorney: Attorney) => (
                  <AttorneyCard key={attorney.id} attorney={attorney} />
                ))}
              </div>
            </div>
          </div>
          <div className="attorneys__cta">
            <p className="attorneys__cta-text">
              {`"We are Champions of Individual Rights, True Advocates"`}
            </p>
            <Link
              href="/attorneys"
              className="new-btn new-btn_white-transparent w-button local"
            >
              See All Attorneys
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
