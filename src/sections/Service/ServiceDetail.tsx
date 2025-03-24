// @ts-nocheck
"use client";
import Form from "@/components/Footer/Form";
import { ArrowRightIcon } from "lucide-react";
import serviceDetailData from "./serviceDetails.json";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl"; // Import the hook

function ServiceDetail() {
  const pathname = usePathname();
  const pathKey = pathname?.split("/").pop();
  const t = useTranslations("services"); // Use the 'service' namespace

  // Helper function to safely get translations with fallback
  const getTranslation = (keys: string[], fallback?: string) => {
    let currentKey = pathKey;
    for (const key of keys) {
      currentKey += `.${key}`;
    }
    try {
      const translated = t(currentKey);
      return translated;
    } catch (error) {
      console.warn(
        `Translation key 'service.${currentKey}' not found. Falling back to: ${fallback}`
      );
      return fallback || "";
    }
  };

  return (
    <div>
      <section className="article">
        <div className="section-container w-container">
          <div className="article__table">
            <div className="article__content">
              <div className="article__cases">
                <h2
                  className="section-title"
                  style={{
                    textTransform: "capitalize",
                  }}
                >
                  {getTranslation(["pageTitle"], pathKey?.split("-").join(" "))}
                </h2>
                <p className="article__intro w-dyn-bind-empty"></p>
                <div className="article__cases-wrap w-dyn-list">
                  <div role="list" className="article__cases-list w-dyn-items">
                    {serviceDetailData[pathKey]?.notableCases?.map(
                      (caseItem, index) => (
                        <div
                          key={index}
                          role="listitem"
                          className="article__cases-item w-dyn-item"
                        >
                          <div className="article__cases-link w-inline-block local">
                            <p className="upper-text">
                              {getTranslation([
                                "notableCases",
                                index,
                                "category",
                              ])}
                            </p>
                            <div className="card-title">
                              {getTranslation([
                                "notableCases",
                                index,
                                "amount",
                              ])}
                            </div>
                            <p className="article__cases-text">
                              {getTranslation([
                                "notableCases",
                                index,
                                "description",
                              ])}
                            </p>
                            <a
                              href="/success-stories"
                              className="section-link section-link_40 w-inline-block local"
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "end",
                                }}
                                className="gap-x-2"
                              >
                                <p className="section-link__text">
                                  {t("common.viewAllStories")}
                                </p>
                                <ArrowRightIcon width={24} height={24} />
                              </div>
                            </a>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="article__rich w-richtext">
                {serviceDetailData[pathKey]?.mainContent.map(
                  (section, index) => (
                    <div key={index}>
                      <span
                        id={`toc-${section.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      ></span>
                      <h2>{getTranslation(["mainContent", index, "title"])}</h2>
                      {section.image && (
                        <figure
                          style={{
                            maxWidth: "900px",
                          }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src={"https://placehold.co/600x400"}
                              loading="lazy"
                              alt={getTranslation(
                                ["mainContent", index, "image", "alt"],
                                section.image.alt
                              )}
                            />
                          </div>
                        </figure>
                      )}
                      {section.paragraphs &&
                        section.paragraphs.map((paragraph, pIndex) => (
                          <p key={pIndex}>
                            {getTranslation(
                              ["mainContent", index, "paragraphs", pIndex],
                              paragraph
                            )}
                          </p>
                        ))}
                      {section.areasOfExpertise && (
                        <>
                          <p>
                            <strong>{t("common.areasOfExpertise")}</strong>
                          </p>
                          <ul role="list">
                            {section.areasOfExpertise.map(
                              (expertise, eIndex) => (
                                <li key={eIndex}>
                                  <a
                                    href={getTranslation(
                                      [
                                        "mainContent",
                                        index,
                                        "areasOfExpertise",
                                        eIndex,
                                        "link",
                                      ],
                                      expertise.link
                                    )}
                                    className="local"
                                  >
                                    {getTranslation(
                                      [
                                        "mainContent",
                                        index,
                                        "areasOfExpertise",
                                        eIndex,
                                        "name",
                                      ],
                                      expertise.name
                                    )}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        </>
                      )}
                      {section.quote && (
                        <blockquote>
                          {getTranslation(
                            ["mainContent", index, "quote"],
                            section.quote
                          )}
                        </blockquote>
                      )}
                      {section.services && (
                        <>
                          <p>
                            <strong>{t("common.services")}</strong>
                          </p>
                          <ul role="list">
                            {section.services.map((service, sIndex) => (
                              <li key={sIndex}>
                                {getTranslation(
                                  ["mainContent", index, "services", sIndex],
                                  service
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {section.content && (
                        <p>
                          {getTranslation(
                            ["mainContent", index, "content"],
                            section.content
                          )}
                        </p>
                      )}
                      {section.keyAreas && (
                        <>
                          <p>
                            <strong>{t("common.keyAreas")}</strong>
                          </p>
                          <ul>
                            {section.keyAreas.map((keyArea, kaIndex) => (
                              <li key={kaIndex}>
                                {getTranslation(
                                  ["mainContent", index, "keyAreas", kaIndex],
                                  keyArea
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {section.ipRights && (
                        <>
                          <p>
                            <strong>{t("common.ipRights")}</strong>
                          </p>
                          <ul>
                            {section.ipRights.map((ipRight, ipIndex) => (
                              <li key={ipIndex}>
                                {getTranslation(
                                  ["mainContent", index, "ipRights", ipIndex],
                                  ipRight
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {section.keyConsiderations && (
                        <>
                          <p>
                            <strong>{t("common.keyConsiderations")}</strong>
                          </p>
                          <ul>
                            {section.keyConsiderations.map(
                              (consideration, kcIndex) => (
                                <li key={kcIndex}>
                                  {getTranslation(
                                    [
                                      "mainContent",
                                      index,
                                      "keyConsiderations",
                                      kcIndex,
                                    ],
                                    consideration
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        </>
                      )}
                      {section.keySources && (
                        <>
                          <p>
                            <strong>{t("common.keySources")}</strong>
                          </p>
                          <ul>
                            {section.keySources.map((source, ksIndex) => (
                              <li key={ksIndex}>
                                {getTranslation(
                                  ["mainContent", index, "keySources", ksIndex],
                                  source
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {section.keyAspects && (
                        <>
                          <p>
                            <strong>{t("common.keyAspects")}</strong>
                          </p>
                          <ul>
                            {section.keyAspects.map((aspect, kaIndex) => (
                              <li key={kaIndex}>
                                {getTranslation(
                                  ["mainContent", index, "keyAspects", kaIndex],
                                  aspect
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {section.keyIssues && (
                        <>
                          <p>
                            <strong>{t("common.keyIssues")}</strong>
                          </p>
                          <ul>
                            {section.keyIssues.map((issue, kiIndex) => (
                              <li key={kiIndex}>
                                {getTranslation(
                                  ["mainContent", index, "keyIssues", kiIndex],
                                  issue
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {section.caseExamples && (
                        <>
                          <h3>{t("common.ourExperience")}</h3>
                          <ul role="list">
                            {section.caseExamples.map((example, ceIndex) => (
                              <li key={ceIndex}>
                                <strong>
                                  {getTranslation(
                                    [
                                      "mainContent",
                                      index,
                                      "caseExamples",
                                      ceIndex,
                                      "type",
                                    ],
                                    example.type
                                  )}
                                  :
                                </strong>{" "}
                                {getTranslation(
                                  [
                                    "mainContent",
                                    index,
                                    "caseExamples",
                                    ceIndex,
                                    "description",
                                  ],
                                  example.description
                                )}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )
                )}
              </div>
              <div className="article__cta">
                <h2 className="section-title section-title_white">
                  {getTranslation(["callToAction", "title"])}
                </h2>
                <p className="article__cta-text">
                  {getTranslation(["callToAction", "description"])}
                </p>
                <a
                  href={getTranslation(["callToAction", "buttonLink"])}
                  className="new-btn new-btn_blue w-button local"
                >
                  {getTranslation(["callToAction", "buttonText"])}
                </a>
              </div>
            </div>
            <div className="article__aside">
              <div className="article__aside-form">
                <div
                  id="cr-form-FOR8a92fc4c319343728fa1df06164b9f51"
                  className="form-embed w-embed w-iframe w-script"
                >
                  <Form classes="bg-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceDetail;
