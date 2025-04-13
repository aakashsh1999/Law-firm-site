// @ts-nocheck
"use client";

import Form from "@/components/Footer/Form";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

function ServiceDetail() {
  const pathname = usePathname();
  const pathKey = pathname?.split("/").pop(); // e.g. "corporate-law"
  const t = useTranslations("services");

  const getTranslation = (key, fallback = "") => {
    try {
      const fullKey = `${pathKey}.${key}`;
      if (
        key === "applicable_laws" ||
        key === "scope_of_services" ||
        key === "faqs" ||
        key === "process.steps"
      ) {
        return t.raw(fullKey);
      }
      return t(fullKey);
    } catch (e) {
      console.warn(`Missing translation for key: ${key}`);
      return fallback;
    }
  };

  return (
    <div className="mt-16">
      <section className="article">
        <div className="section-container w-container">
          <div className="article__table">
            <div className="article__content">
              <div className="article__cases">
                <h2
                  className="section-title"
                  style={{ textTransform: "capitalize" }}
                >
                  {getTranslation("service_title", "")}
                </h2>
                <p className="article__intro">{getTranslation("intro")}</p>
              </div>

              <div className="article__rich w-richtext">
                <div>
                  <h2>{getTranslation("service_title")}</h2>
                  <p>{getTranslation("intro")}</p>

                  <h3>Applicable Laws</h3>
                  <ul role="list">
                    {getTranslation("applicable_laws").map((law, index) => (
                      <li key={index}>{law}</li>
                    ))}
                  </ul>

                  <h3>Scope of Services</h3>
                  <ul role="list">
                    {getTranslation("scope_of_services").map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3>Why Choose Us</h3>
                  <p>{getTranslation("why_choose_us")}</p>

                  <h3>{getTranslation("process.title")}</h3>
                  <ul role="list">
                    {getTranslation("process.steps").map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>

                  <h3>FAQs</h3>
                  <ol role="list">
                    {getTranslation("faqs").map((faq, index) => (
                      <li key={index}>
                        <p>
                          <strong>{faq.question}</strong>
                        </p>
                        <p>{faq.answer}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="article__cta">
                <h2 className="section-title section-title_white">
                  {t("common.callToAction.title")}
                </h2>
                <p className="article__cta-text">
                  {t("common.callToAction.description")}
                </p>
                <a
                  href={t("common.callToAction.buttonLink")}
                  className="new-btn new-btn_blue w-button local"
                >
                  {t("common.callToAction.buttonText")}
                </a>
              </div>
            </div>

            <div className="article__aside">
              <div className="article__aside-form">
                <div className="form-embed w-embed w-iframe w-script">
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
