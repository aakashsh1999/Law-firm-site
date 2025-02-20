// @ts-nocheck
"use client";
import Form from "@/components/Footer/Form";
import { ArrowRightIcon } from "lucide-react";
import serviceDetailData from "./serviceDetails.json";
import { usePathname } from "next/navigation";

function ServiceDetail() {
  const pathname = usePathname();
  const pathKey = pathname?.split("/").pop();
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
                  {pathKey.split("-").join(" ")}
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
                            <p className="upper-text">{caseItem.category}</p>
                            <div className="card-title">{caseItem.amount}</div>
                            <p className="article__cases-text">
                              {caseItem.description}
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
                                  View All Success Stories
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
                      <h2>{section.title}</h2>
                      {section.image && (
                        <figure
                          style={{
                            maxWidth: "900px",
                          }}
                          className="w-richtext-align-fullwidth w-richtext-figure-type-image"
                        >
                          <div>
                            <img
                              src={section.image.src || "/placeholder.svg"}
                              loading="lazy"
                              alt={section.image.alt}
                            />
                          </div>
                        </figure>
                      )}
                      {section.paragraphs &&
                        section.paragraphs.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                      {section.locations && (
                        <ul role="list">
                          {section.locations.map((location, lIndex) => (
                            <li key={lIndex}>
                              <a href={location.link} className="local">
                                {location.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.quote && (
                        <blockquote>{section.quote}</blockquote>
                      )}
                      {section.services && (
                        <>
                          <p>
                            <strong>
                              While you focus on getting well, we handle every
                              aspect of your personal injury claim, including:
                            </strong>
                          </p>
                          <ul role="list">
                            {section.services.map((service, sIndex) => (
                              <li key={sIndex}>{service}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      {section.hotspots && (
                        <>
                          <p>
                            <strong>
                              Some of the NYC hot spots for crashes include:
                            </strong>
                          </p>
                          <ul role="list">
                            {section.hotspots.map((hotspot, hIndex) => (
                              <li key={hIndex}>{hotspot}</li>
                            ))}
                          </ul>
                        </>
                      )}
                      {section.accidentTypes && (
                        <ul role="list">
                          {section.accidentTypes.map((accidentType, aIndex) => (
                            <li key={aIndex}>
                              <strong>{accidentType.type}:</strong>{" "}
                              {accidentType.description}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )
                )}
              </div>
              <div className="article__cta">
                <h2 className="section-title section-title_white">
                  {serviceDetailData[pathKey]?.callToAction.title}
                </h2>
                <p className="article__cta-text">
                  {serviceDetailData[pathKey]?.callToAction.description}
                </p>
                <a
                  href={serviceDetailData[pathKey]?.callToAction.buttonLink}
                  className="new-btn new-btn_blue w-button local"
                >
                  {serviceDetailData[pathKey]?.callToAction.buttonText}
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
