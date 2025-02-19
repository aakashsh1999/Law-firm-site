"use client";
import React, { useState } from "react";
import "./index.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const PracticeAreasSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="practice">
      <div className="section-container section-container_left w-container">
        <div className="practice__content">
          <div className="section-subtitle section-subtitle_absolute">
            <p className="section-subtitle-text section-subtitle-text_white">
              Practice Areas
            </p>
            <h2 className="section-title section-title_white section-title_abs">
              Our Practice Areas
            </h2>
          </div>
          <div className="practice__back"></div>
          <div className="style w-embed">
            <style>
              {`
                @media screen and (min-width: 992px) {
                  a.practice__list-link:hover .practice__list-before {
                    width: 20px;
                    padding-right: 8px;
                  }

                  a.practice__list-link:hover .practice__list-after {
                    width: 0;
                  }

                  a.practice__list-link:hover .practice__list-title {
                    color: #2461E2;
                  }
                }

                div.practice__list-link img {
                  display: none;
                }

                .practice .swiper-slide {
                  width: auto !important;
                }

                @media screen and (min-width: 768px) {
                  .practice__menu {
                    display: grid !important;
                    grid-column-gap: 25px !important;
                    box-sizing: border-box !important;
                    width: auto !important;
                    height: auto !important;
                  }
                }

                @media screen and (max-width: 767px) {
                  .practice__menu {
                    display: flex !important;
                    grid-column-gap: 0 !important;
                  }

                  .practice__menu .swiper-slide {
                    width: auto !important;
                  }
                }

                @media screen and (max-width: 340px) {
                  .practice__menu {
                    padding-top: 200px;
                  }
                }
              `}
            </style>
          </div>
          <div className="block md:hidden">
            {" "}
            {/* <div className="flex items-center"> */}
            <div
              data-current="Tab 1"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="practice__tabs swiper w-tabs swiper-initialized swiper-horizontal swiper-android"
            >
              <div
                className="practice__menu swiper-wrapper w-tab-menu"
                role="tablist"
                id="swiper-wrapper-1e315643f1363a12"
                aria-live="polite"
                style={{
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div className="w-full flex overflow-auto no-scrollbar whitespace-nowrap">
                  {tabs.map((tab, index) => (
                    <a
                      key={index}
                      // data-w-tab={`Tab ${index + 1}`}
                      className={`practice__link swiper-slide w-inline-block w-tab-link local ${
                        activeTab === index
                          ? "w--current swiper-slide-active"
                          : ""
                      }`}
                      id={`w-tabs-0-data-w-tab-${index}`}
                      role="group"
                      aria-controls={`w-tabs-0-data-w-pane-${index}`}
                      style={{ marginRight: "16px" }}
                      onClick={() => setActiveTab(index)}
                    >
                      <div className="practice__link-text">{tab.title}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="practice__tabs-content  w-tab-content px-4">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  // data-w-tab={`Tab ${index + 1}`}
                  className={`practice__tab w-tab-pane ${
                    activeTab === index ? "w--tab-active" : ""
                  }`}
                  // id={`w-tabs-0-data-w-pane-${index}`}
                  role="tabpanel"
                  aria-labelledby={`w-tabs-0-data-w-tab-${index}`}
                >
                  <div className="practice__tab-content">
                    <h3 className="card-title">{tab.title}</h3>
                    <p className="practice__tab-info practice__tab-info_top">
                      {tab.description}
                    </p>
                    {tab.additionalInfo && (
                      <p className="practice__tab-info">{tab.additionalInfo}</p>
                    )}
                    <ul role="list" className="practice__list">
                      {tab.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="practice__list-item">
                          <a
                            href={link.url}
                            className="practice__list-link w-inline-block local"
                          >
                            <h4 className="practice__list-title">
                              {link.title}
                            </h4>
                            <ArrowRightIcon
                              className="w-6 ml-3"
                              color="black"
                              strokeWidth={3}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={tab.viewAllLink}
                      className="new-btn new-btn_transparent new-btn_top w-button local"
                      style={{
                        borderRadius: "16px",
                        border: "3px solid #2461E2",
                      }}
                    >
                      View All {tab.title} Services
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div
              data-current="Tab 1"
              data-easing="ease"
              data-duration-in="300"
              data-duration-out="100"
              className="practice__tabs swiper w-tabs swiper-initialized swiper-horizontal swiper-android"
            >
              <div
                className="practice__menu swiper-wrapper w-tab-menu"
                role="tablist"
                id="swiper-wrapper-1e315643f1363a12"
                aria-live="polite"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                {tabs.map((tab, index) => (
                  <a
                    key={index}
                    // data-w-tab={`Tab ${index + 1}`}
                    className={`practice__link swiper-slide w-inline-block w-tab-link local ${
                      activeTab === index
                        ? "w--current swiper-slide-active"
                        : ""
                    }`}
                    id={`w-tabs-0-data-w-tab-${index}`}
                    role="group"
                    aria-controls={`w-tabs-0-data-w-pane-${index}`}
                    style={{ marginRight: "16px" }}
                    onMouseOver={() => setActiveTab(index)}
                    onMouseLeave={() => setActiveTab(0)}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="practice__link-text">{tab.title}</div>
                  </a>
                ))}
              </div>
            </div>
            <div className="practice__tabs-content  w-tab-content">
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  // data-w-tab={`Tab ${index + 1}`}
                  className={`practice__tab w-tab-pane ${
                    activeTab === index ? "w--tab-active" : ""
                  }`}
                  // id={`w-tabs-0-data-w-pane-${index}`}
                  role="tabpanel"
                  aria-labelledby={`w-tabs-0-data-w-tab-${index}`}
                >
                  <div className="practice__tab-content">
                    <h3 className="card-title">{tab.title}</h3>
                    <p className="practice__tab-info practice__tab-info_top">
                      {tab.description}
                    </p>
                    {tab.additionalInfo && (
                      <p className="practice__tab-info">{tab.additionalInfo}</p>
                    )}
                    <ul role="list" className="practice__list">
                      {tab.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="practice__list-item">
                          <a
                            href={link.url}
                            className="practice__list-link w-inline-block local"
                          >
                            <h4 className="practice__list-title">
                              {link.title}
                            </h4>
                            <ArrowRightIcon
                              className="w-6 ml-3"
                              color="black"
                              strokeWidth={3}
                            />
                          </a>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={tab.viewAllLink}
                      className="new-btn new-btn_transparent new-btn_top w-button local"
                      style={{
                        borderRadius: "16px",
                        border: "3px solid #2461E2",
                      }}
                    >
                      View All {tab.title} Services
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Example data for tabs
const tabs = [
  {
    title: "Medical Malpractice",
    description:
      "Medical misdiagnosis or malpractice causes extensive pain and suffering, often leading to unnecessary procedures. Our New York City personal injury legal firm handles complex malpractice cases, including hospital negligence, birth injuries, and medical misdiagnoses.",
    additionalInfo:
      "Our attorneys know the challenges of malpractice cases and have the resources to handle complex claims.",
    links: [
      {
        title: "Birth Injuries",
        url: "/birth-injuries",
      },
      {
        title: "Medical Misdiagnosis",
        url: "https://www.fuchsberg.com/medical-malpractice/medical-misdiagnosis",
      },
      {
        title: "Hospital Negligence",
        url: "/medical-malpractice/hospital-negligence",
      },
      {
        title: "Medical Errors",
        url: "/medical-malpractice/medical-errors",
      },
    ],
    viewAllLink: "/medical-malpractice",
  },
  {
    title: "Civil Rights Violation",
    description:
      "Civil rights violations can take many forms, from police misconduct to discrimination. Our firm fights for justice and holds responsible parties accountable for violating individuals' civil rights.",
    additionalInfo:
      "Our attorneys are committed to defending your rights and ensuring justice in civil rights violation cases.",
    links: [
      {
        title: "Police Misconduct",
        url: "/civil-rights/police-misconduct",
      },
      {
        title: "Racial Discrimination",
        url: "/civil-rights/racial-discrimination",
      },
      {
        title: "Wrongful Arrest",
        url: "/civil-rights/wrongful-arrest",
      },
    ],
    viewAllLink: "/civil-rights",
  },
  {
    title: "Product Liability Cases",
    description:
      "Product liability cases involve holding manufacturers accountable for dangerous or defective products that cause harm to consumers. Our experienced attorneys fight for fair compensation in these cases.",
    additionalInfo:
      "We handle a wide range of product liability cases, from defective medical devices to dangerous consumer goods.",
    links: [
      {
        title: "Defective Medical Devices",
        url: "/product-liability/defective-medical-devices",
      },
      {
        title: "Dangerous Consumer Products",
        url: "/product-liability/dangerous-consumer-products",
      },
      {
        title: "Automobile Defects",
        url: "/product-liability/automobile-defects",
      },
    ],
    viewAllLink: "/product-liability",
  },
  {
    title: "Accidents",
    description:
      "Accidents can happen at any time and often result in serious injuries. Our firm helps victims of accidents seek justice and compensation for medical bills, lost wages, and pain and suffering.",
    additionalInfo:
      "Whether it's a car accident, slip-and-fall, or workplace accident, we are here to help you navigate your recovery process.",
    links: [
      {
        title: "Car Accidents",
        url: "/accidents/car-accidents",
      },
      {
        title: "Workplace Accidents",
        url: "/accidents/workplace-accidents",
      },
      {
        title: "Slip-and-Fall Accidents",
        url: "/accidents/slip-and-fall",
      },
    ],
    viewAllLink: "/accidents",
  },
  {
    title: "Common Injuries",
    description:
      "Injuries, whether caused by accidents, medical malpractice, or defective products, can leave individuals with long-lasting pain and suffering. Our firm works to ensure you receive the compensation you deserve.",
    additionalInfo:
      "We handle a variety of injury cases, including spinal injuries, traumatic brain injuries, and fractures.",
    links: [
      {
        title: "Spinal Injuries",
        url: "/injuries/spinal-injuries",
      },
      {
        title: "Traumatic Brain Injuries",
        url: "/injuries/traumatic-brain-injuries",
      },
      {
        title: "Fractures",
        url: "/injuries/fractures",
      },
    ],
    viewAllLink: "/common-injuries",
  },
  {
    title: "Other Practice Areas",
    description:
      "Our legal team handles various other practice areas outside of personal injury, ensuring you have the right representation for your specific legal needs.",
    additionalInfo:
      "Contact us to learn more about how we can assist you in other legal matters.",
    links: [
      {
        title: "Family Law",
        url: "/other-practice-areas/family-law",
      },
      {
        title: "Business Law",
        url: "/other-practice-areas/business-law",
      },
      {
        title: "Real Estate Law",
        url: "/other-practice-areas/real-estate-law",
      },
    ],
    viewAllLink: "/other-practice-areas",
  },
  // Add more tabs if necessary...
];

export default PracticeAreasSection;
