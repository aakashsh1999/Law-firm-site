"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseItem } from "./types";
import VideoItem from "./VideoItem";
import CaseCard from "./Casecard";

// Import case data
import { cases } from "./data";

export default function CasesSection() {
  useEffect(() => {
    // Implement the video and case list matching logic here
    const videoList = document.querySelectorAll(".cases__video-item");
    const casesList = document.querySelectorAll(".cases__item");

    for (let y = 0; y < videoList.length && y < casesList.length; y++) {
      (videoList[y] as HTMLElement).dataset.index = y.toString();
      (casesList[y] as HTMLElement).dataset.index = y.toString();
    }

    for (let i = 0; i < videoList.length && i < casesList.length; i++) {
      if (
        i.toString() === (videoList[i] as HTMLElement).dataset.index &&
        i.toString() === (casesList[i] as HTMLElement).dataset.index
      ) {
        casesList[i].prepend(videoList[i]);
      }
    }
  }, []);

  return (
    <section className="cases max-w-7xl mx-auto px-4 md:px-0">
      <div className="section-container w-container">
        <div className="section-subtitle section-subtitle_rel">
          <p className="section-subtitle-text text-[#4285F46B] font-medium">
            Cases
          </p>
        </div>
        <div className="cases__title">
          <h2 className="section-title section-title_509">
            Our Notable Verdicts & Settlements
          </h2>
          {/* <Link
            href="/success-stories"
            className="new-btn new-btn_transparent new-btn_desktop"
          >
            View All Success Stories
          </Link> */}
        </div>
        <div className="cases__content">
          <div className="cases__video">
            {cases.map((caseItem, index) => (
              <VideoItem key={index} video={caseItem.video} index={index} />
            ))}
          </div>
          <div className="cases__cards">
            <div className="cases__wrapper">
              <div className="cases__list">
                {cases.map((caseItem, index) => (
                  <CaseCard key={index} caseItem={caseItem} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
