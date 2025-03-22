"use client";
import React, { useState } from "react";
import "./index.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";

const PracticeAreasSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations("practiceAreaSection");

  // Example data for tabs
  const tabs = [
    {
      title: t("medicalMalpractice.title"),
      translationKey: "medicalMalpractice",
      description: t("medicalMalpractice.description"),
      additionalInfo: t("medicalMalpractice.additionalInfo"),
      links: [
        {
          title: t("medicalMalpractice.services.birthInjuries"),
          url: "/birth-injuries",
          translationKey: "medicalMalpractice.services.birthInjuries",
        },
        {
          title: t("medicalMalpractice.services.medicalMisdiagnosis"),
          url: "https://www.fuchsberg.com/medical-malpractice/medical-misdiagnosis",
          translationKey: "medicalMalpractice.services.medicalMisdiagnosis",
        },
        {
          title: t("medicalMalpractice.services.hospitalNegligence"),
          url: "/medical-malpractice/hospital-negligence",
          translationKey: "medicalMalpractice.services.hospitalNegligence",
        },
        {
          title: t("medicalMalpractice.services.medicalErrors"),
          url: "/medical-malpractice/medical-errors",
          translationKey: "medicalMalpractice.services.medicalErrors",
        },
      ],
      viewAllLink: "/medical-malpractice",
      viewAllTranslationKey: "medicalMalpractice",
    },
    {
      title: t("civilRightsViolation.title"),
      translationKey: "civilRightsViolation",
      description: t("civilRightsViolation.description"),
      additionalInfo: t("civilRightsViolation.additionalInfo"),
      links: [
        {
          title: t("civilRightsViolation.services.policeMisconduct"),
          url: "/civil-rights/police-misconduct",
          translationKey: "civilRightsViolation.services.policeMisconduct",
        },
        {
          title: t("civilRightsViolation.services.racialDiscrimination"),
          url: "/civil-rights/racial-discrimination",
          translationKey: "civilRightsViolation.services.racialDiscrimination",
        },
        {
          title: t("civilRightsViolation.services.wrongfulArrest"),
          url: "/civil-rights/wrongful-arrest",
          translationKey: "civilRightsViolation.services.wrongfulArrest",
        },
      ],
      viewAllLink: "/civil-rights",
      viewAllTranslationKey: "civilRightsViolation",
    },
    {
      title: t("productLiabilityCases.title"),
      translationKey: "productLiabilityCases",
      description: t("productLiabilityCases.description"),
      additionalInfo: t("productLiabilityCases.additionalInfo"),
      links: [
        {
          title: t("productLiabilityCases.services.defectiveMedicalDevices"),
          url: "/product-liability/defective-medical-devices",
          translationKey:
            "productLiabilityCases.services.defectiveMedicalDevices",
        },
        {
          title: t("productLiabilityCases.services.dangerousConsumerProducts"),
          url: "/product-liability/dangerous-consumer-products",
          translationKey:
            "productLiabilityCases.services.dangerousConsumerProducts",
        },
        {
          title: t("productLiabilityCases.services.automobileDefects"),
          url: "/product-liability/automobile-defects",
          translationKey: "productLiabilityCases.services.automobileDefects",
        },
      ],
      viewAllLink: "/product-liability",
      viewAllTranslationKey: "productLiabilityCases",
    },
    {
      title: t("accidents.title"),
      translationKey: "accidents",
      description: t("accidents.description"),
      additionalInfo: t("accidents.additionalInfo"),
      links: [
        {
          title: t("accidents.services.carAccidents"),
          url: "/accidents/car-accidents",
          translationKey: "accidents.services.carAccidents",
        },
        {
          title: t("accidents.services.workplaceAccidents"),
          url: "/accidents/workplace-accidents",
          translationKey: "accidents.services.workplaceAccidents",
        },
        {
          title: t("accidents.services.slipAndFallAccidents"),
          url: "/accidents/slip-and-fall",
          translationKey: "accidents.services.slipAndFallAccidents",
        },
      ],
      viewAllLink: "/accidents",
      viewAllTranslationKey: "accidents",
    },
    {
      title: t("commonInjuries.title"),
      translationKey: "commonInjuries",
      description: t("commonInjuries.description"),
      additionalInfo: t("commonInjuries.additionalInfo"),
      links: [
        {
          title: t("commonInjuries.services.spinalInjuries"),
          url: "/injuries/spinal-injuries",
          translationKey: "commonInjuries.services.spinalInjuries",
        },
        {
          title: t("commonInjuries.services.traumaticBrainInjuries"),
          url: "/injuries/traumatic-brain-injuries",
          translationKey: "commonInjuries.services.traumaticBrainInjuries",
        },
        {
          title: t("commonInjuries.services.fractures"),
          url: "/injuries/fractures",
          translationKey: "commonInjuries.services.fractures",
        },
      ],
      viewAllLink: "/common-injuries",
      viewAllTranslationKey: "commonInjuries",
    },
    {
      title: t("otherPracticeAreas.title"),
      translationKey: "otherPracticeAreas",
      description: t("otherPracticeAreas.description"),
      additionalInfo: t("otherPracticeAreas.additionalInfo"),
      links: [
        {
          title: t("otherPracticeAreas.services.familyLaw"),
          url: "/other-practice-areas/family-law",
          translationKey: "otherPracticeAreas.services.familyLaw",
        },
        {
          title: t("otherPracticeAreas.services.businessLaw"),
          url: "/other-practice-areas/business-law",
          translationKey: "otherPracticeAreas.services.businessLaw",
        },
        {
          title: t("otherPracticeAreas.services.realEstateLaw"),
          url: "/other-practice-areas/real-estate-law",
          translationKey: "otherPracticeAreas.services.realEstateLaw",
        },
      ],
      viewAllLink: "/other-practice-areas",
      viewAllTranslationKey: "otherPracticeAreas",
    },
    // Add more tabs if necessary...
  ];

  return (
    <section className="practice">
      <div className="section-container section-container_left w-container">
        <div className="practice__content">
          <div className="section-subtitle section-subtitle_absolute">
            <p className="section-subtitle-text section-subtitle-text_white">
              {t("practiceAreasTitle")}
            </p>
            <h2 className="section-title section-title_white section-title_abs">
              {t("ourPracticeAreas")}
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
                      {t("viewAllServices", {
                        practiceArea: t(
                          `${tabs[activeTab].translationKey}.title`
                        ),
                      })}
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

export default PracticeAreasSection;
