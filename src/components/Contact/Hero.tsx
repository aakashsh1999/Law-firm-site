import { useTranslations } from "next-intl";
import React from "react";

function Hero() {
  const t = useTranslations("contact");
  return (
    <div className="contact-wrapper overflow-hidden bg-white">
      <div className=" bottom-padding-0 contact-hero bg-white">
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical">
              <div
                className="header_top-wrapper"
                style={{
                  marginTop: "24px !important",
                }}
              >
                <div>
                  <div className="margin-bottom margin-xxsmall">
                    <h1>{t("title")}</h1>
                  </div>
                  <div className="text-size-large text-style-muted">
                    {t("subtitle")}
                  </div>
                </div>
                <a
                  href="#information"
                  className="new-btn new-btn_transparent new-btn_top w-button local"
                  style={{
                    borderRadius: "16px",
                    border: "3px solid #2461E2",
                  }}
                >
                  <div>{t("learnMore")}</div>
                </a>
              </div>
              <img
                src="https://t3.ftcdn.net/jpg/05/30/96/04/360_F_530960431_c8fPd3HansYvrSJ4fJxZqp9OhjQmYoll.jpg"
                loading="lazy"
                alt=""
                sizes="(max-width: 1439px) 90vw, 1280px"
                // srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600861c319004e_Free-Lawyer-Consultation-on-the-Phone-NYC%2520(1)-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600861c319004e_Free-Lawyer-Consultation-on-the-Phone-NYC%20(1).webp 1460w"
                className="header-image"
                style={{
                  borderRadius: "16px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="header_bottom-spacer"></div>
    </div>
  );
}

export default Hero;
