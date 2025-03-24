import { useTranslations } from "next-intl";
import React from "react";

function Investigation() {
  const t = useTranslations("investigation");
  return (
    <div>
      <div className="section-timeline">
        <div className="page-padding">
          <div className="container-large">
            <div className="timeline_component">
              <div className="timeline_progress">
                <div className="timeline_progress-bar"></div>
              </div>
              <div
                data-w-id="27e95e9d-e786-34ec-fd26-79caaccb9b7f"
                className="timeline_item"
              >
                <div
                  id="w-node-_27e95e9d-e786-34ec-fd26-79caaccb9b80-4497f3d5"
                  className="timeline_left"
                >
                  <div className="timeline_date-text">
                    {t("investigationTitle")}
                  </div>
                </div>
                <div
                  id="w-node-_27e95e9d-e786-34ec-fd26-79caaccb9b83-4497f3d5"
                  className="timeline_centre"
                >
                  <div
                    className="timeline_circle"
                    style={{
                      willChange: "background",
                      backgroundColor: "rgb(166, 191, 243)",
                    }}
                  ></div>
                </div>
                <div
                  id="w-node-_27e95e9d-e786-34ec-fd26-79caaccb9b85-4497f3d5"
                  className="timeline_right"
                  //   style={{ willChange: "opacity", opacity: 0.69595 }}
                >
                  <div className="margin-bottom">
                    <div className="margin-bottom margin-large">
                      <img
                        src="https://placehold.co/600x400"
                        loading="lazy"
                        width="480"
                        sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, (max-width: 991px) 36vw, (max-width: 1439px) 38vw, 550px"
                        alt={t("investigationTitle")}
                        // srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600848981900a1_JacobFuchsbergLaw-9922%2520(1)-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600848981900a1_JacobFuchsbergLaw-9922%2520(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600848981900a1_JacobFuchsbergLaw-9922%2520(1)-p-1600.webp 1600w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600848981900a1_JacobFuchsbergLaw-9922%20(1).webp 1640w"
                        className="timeline_image"
                        style={{
                          borderRadius: "16px",
                        }}
                      />
                    </div>
                    <div>
                      <div className="timeline_text">{t("step1Question")}</div>
                      <div>{t("step1Description")}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-w-id="27e95e9d-e786-34ec-fd26-79caaccb9b8b"
                className="timeline_item"
              >
                <div
                  id="w-node-_27e95e9d-e786-34ec-fd26-79caaccb9b8c-4497f3d5"
                  className="timeline_left"
                  //   style={{ willChange: "opacity", opacity: 0.25 }}
                >
                  <div className="timeline_date-text">{t("lawsuitTitle")}</div>
                </div>
                <div
                  id="w-node-_27e95e9d-e786-34ec-fd26-79caaccb9b8f-4497f3d5"
                  className="timeline_centre"
                >
                  <div
                    className="timeline_circle"
                    style={{
                      willChange: "background",
                      backgroundColor: "rgb(36, 97, 226)",
                    }}
                  ></div>
                </div>
                <div
                  className="timeline_right"
                  //   style={{ willChange: "opacity", opacity: 0.25 }}
                >
                  <div className="margin-bottom margin-huge">
                    <div className="margin-bottom margin-large">
                      <img
                        src="https://placehold.co/600x400"
                        loading="lazy"
                        width="480"
                        sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, (max-width: 991px) 36vw, (max-width: 1439px) 38vw, 550px"
                        alt={t("lawsuitTitle")}
                        // srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008a5351900a2_Fuchs2019_033%2520(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008a5351900a2_Fuchs2019_033%20(1).webp 1504w"
                        className="timeline_image"
                        style={{
                          borderRadius: "16px",
                        }}
                      />
                    </div>
                    <div>
                      <div className="timeline_text">{t("step2Question")}</div>
                      <div>
                        {t("step2Description1")}
                        <br />
                        <br />
                        {t("step2Description2")}
                        <br />
                        <br />
                        {t("step2Description3")}
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-huge">
                    <div className="margin-bottom margin-large">
                      <img
                        src="https://placehold.co/600x400"
                        loading="lazy"
                        width="480"
                        sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, (max-width: 991px) 36vw, (max-width: 1439px) 38vw, 550px"
                        alt={t("lawsuitTitle")}
                        // srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600888521900a3_Fuchs2019_040%2520(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b1600888521900a3_Fuchs2019_040%20(1).webp 1504w"
                        className="timeline_image"
                        style={{
                          borderRadius: "16px",
                        }}
                      />
                    </div>
                    <div>
                      <div className="timeline_text">
                        {t("step2SummaryTitle")}
                      </div>
                      <div className="margin-bottom margin-small">
                        <div>{t("step2SummaryPoint1")}</div>
                      </div>
                      <ul role="list">
                        <li>
                          <div>
                            {t("step2SummarySubPoint1")}
                            <br />
                          </div>
                        </li>
                        <li>
                          <div>{t("step2SummarySubPoint2")}</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="margin-bottom">
                    <div>
                      <div>
                        {t("step2SummaryPoint2")}
                        <br />
                        <br />
                        {t("step2SummaryPoint3")}
                        <br />
                        <br />
                        {t("step2SummaryPoint4")}
                        <br />
                        <br />
                        {t("step2SummaryPoint5")}
                        <br />
                        <br />
                        {t("step2SummaryPoint6")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-w-id="27e95e9d-e786-34ec-fd26-79caaccb9b9e"
                className="timeline_item"
              >
                <div
                  id="w-node-_27e95e9d-e786-34ec-fd26-79caaccb9b9f-4497f3d5"
                  className="timeline_left"
                  //   style={{ willChange: "opacity", opacity: 0.25 }}
                >
                  <div className="timeline_date-text">{t("resultsTitle")}</div>
                </div>
                <div
                  id="w-node-_27e95e9d-e786-34ec-fd26-79caaccb9ba2-4497f3d5"
                  className="timeline_centre"
                >
                  <div
                    className="timeline_circle"
                    style={{
                      willChange: "background",
                      backgroundColor: "rgb(36, 97, 226)",
                    }}
                  ></div>
                </div>
                <div
                  className="timeline_right"
                  //   style={{ willChange: "opacity", opacity: 0.25 }}
                >
                  <div className="margin-bottom margin-huge">
                    <div className="margin-bottom margin-large">
                      <img
                        src="https://placehold.co/600x400"
                        loading="lazy"
                        width="480"
                        sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, (max-width: 991px) 36vw, (max-width: 1439px) 38vw, 550px"
                        alt={t("resultsTitle")}
                        // srcSet="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008cc781900a0_JacobFuchsbergLaw-9832a%2520(1)-p-500.webp 500w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008cc781900a0_JacobFuchsbergLaw-9832a%2520(1)-p-1080.webp 1080w, https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/63a4a6b4b16008cc781900a0_JacobFuchsbergLaw-9832a%20(1).webp 1571w"
                        className="timeline_image"
                        style={{
                          borderRadius: "16px",
                        }}
                      />
                    </div>
                    <div>
                      <div
                        className="timeline_text"
                        style={{
                          lineHeight: "34px",
                        }}
                      >
                        {t("resultsDescription1")}
                      </div>
                      <div>{t("resultsDescription2")}</div>
                    </div>
                  </div>
                  <div className="timeline_quote-wrapper">
                    <img
                      src="https://placehold.co/600x400"
                      loading="lazy"
                      alt={t("quoteAuthor").split(",")[0]}
                      className="timeline_quote-image"
                      style={{
                        borderRadius: "16px",
                      }}
                    />
                    <div className="timeline_quote-text-wrapper">
                      <p>{t("quote")}</p>
                      <p className="text-size-regular text-weight-medium text-color-primary">
                        {t("quoteAuthor")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlay-fade-bottom"></div>
              <div className="overlay-fade-top"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investigation;
