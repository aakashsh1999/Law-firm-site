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
                >
                  <div className="margin-bottom">
                    <div className="margin-bottom margin-large">
                      <img
                        src="https://www.thebluediamondgallery.com/legal/images/investigation.jpg"
                        loading="lazy"
                        width="480"
                        sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, (max-width: 991px) 36vw, (max-width: 1439px) 38vw, 550px"
                        alt={t("investigationTitle")}
                        className="timeline_image"
                        style={{
                          borderRadius: "16px",
                        }}
                      />
                    </div>
                    <div>
                      <div className="timeline_text">{t("step1Question")}</div>
                      <div>{t("step1Description")}</div>
                      <br />
                      <div>{t("step1Description1")}</div>
                      <br />
                      <div>{t("step1Description2")}</div>
                      <br />
                      <div>
                        <ul
                          role="list"
                          style={{
                            listStyleType: "disc",
                          }}
                        >
                          <li>
                            <div> {t("step1point1")}</div>
                          </li>
                          <li>
                            <div> {t("step1point2")}</div>
                          </li>
                          <li>
                            <div> {t("step1point3")}</div>
                          </li>
                        </ul>
                      </div>
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
                <div className="timeline_right">
                  <div className="margin-bottom margin-huge">
                    <div className="margin-bottom margin-large">
                      <img
                        src="https://bsmedia.business-standard.com/_media/bs/img/article/2017-03/18/full/1489789485-514.jpg?im=FeatureCrop,size=(826,465)"
                        loading="lazy"
                        width="480"
                        sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, (max-width: 991px) 36vw, (max-width: 1439px) 38vw, 550px"
                        alt={t("lawsuitTitle")}
                        className="timeline_image"
                        style={{
                          borderRadius: "16px",
                        }}
                      />
                    </div>
                    <div>
                      <div className="timeline_text">{t("step2Title")}</div>
                      <div>
                        <div>{t("step2Description1")}</div>
                        <br />
                        <div> {t("step2Description2")}</div>
                        <br />
                        <div className="font-bold">
                          {t("step2ProcessTitleA")}
                        </div>
                        <div>{t("step2ProcessDescriptionA1")}</div>
                        <br />
                        <div>{t("step2ProcessListTitleA")}</div>
                        <ul role="list">
                          <li>
                            <div>{t("step2ProcessListItemA1")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemA2")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemA3")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemA4")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemA5")}</div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <br />
                        <div className="font-bold">
                          {t("step2ProcessTitleB")}
                        </div>
                        <div>{t("step2ProcessDescriptionB1")}</div>
                        <br />
                        <div>{t("step2ProcessListTitleB1")}</div>
                        <ul role="list">
                          <li>
                            <div>{t("step2ProcessListItemB1_1")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemB1_2")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemB1_3")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemB1_4")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemB1_5")}</div>
                          </li>
                        </ul>
                        <br />
                        <div>{t("step2ProcessDescriptionB2")}</div>
                        <br />
                        <div>{t("step2ProcessListTitleB2")}</div>
                        <ul role="list">
                          <li>
                            <div>{t("step2ProcessListItemB2_1")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemB2_2")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemB2_3")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemB2_4")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemB2_5")}</div>
                          </li>
                        </ul>
                        <br />
                        <div className="font-bold">
                          {t("step2ProcessTitleC")}
                        </div>
                        <div>{t("step2ProcessDescriptionC1")}</div>
                        <br />
                        <div>{t("step2ProcessListTitleC1")}</div>
                        <ul role="list">
                          <li>
                            <div>{t("step2ProcessListItemC1_1")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC1_2")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC1_3")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC1_4")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC1_5")}</div>
                          </li>
                        </ul>
                        <br />
                        <div>{t("step2ProcessListTitleC2")}</div>
                        <ul role="list">
                          <li>
                            <div>{t("step2ProcessListItemC2_1")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC2_2")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC2_3")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC2_4")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC2_5")}</div>
                          </li>
                        </ul>
                        <br />
                        <div>{t("step2ProcessDescriptionC2")}</div>
                        <br />
                        <ul role="list">
                          <li>
                            <div>{t("step2ProcessListItemC3_1")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC3_2")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC3_3")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemC3_4")}</div>
                          </li>
                        </ul>
                        <br />
                        <div className="font-bold">
                          {t("step2ProcessTitleD")}
                        </div>
                        <div>{t("step2ProcessDescriptionD1")}</div>
                        <br />
                        <ul role="list">
                          <li>
                            <div>{t("step2ProcessListItemD1")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemD2")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemD3")}</div>
                          </li>
                          <li>
                            <div>{t("step2ProcessListItemD4")}</div>
                          </li>
                        </ul>
                        <br />
                        <div>{t("step2ProcessDescriptionD2")}</div>
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
                <div className="timeline_right">
                  <div className="margin-bottom margin-huge">
                    <div className="margin-bottom margin-large">
                      <img
                        src="https://media.istockphoto.com/id/155149843/photo/judge-in-traditional-court-robes-using-the-gavel.jpg?s=612x612&w=0&k=20&c=eWgGUugF-ielFbj0uFfH3r3RiSQfZAGofXVzLJZVPzg="
                        loading="lazy"
                        width="480"
                        sizes="(max-width: 479px) 48px, (max-width: 767px) 64px, (max-width: 991px) 36vw, (max-width: 1439px) 38vw, 550px"
                        alt={t("resultsTitle")}
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
                        {t("resulTitle")}
                      </div>
                      <div>{t("resultsDescription1")}</div>
                      <br />
                      <div>{t("resultsDescription2")}</div>
                      <br />
                      <div>{t("resultsDescription3")}</div>
                      <br />
                      <ul role="list">
                        <li>
                          <div>{t("resultsDescription3Point1")}</div>
                        </li>
                        <li>
                          <div>{t("resultsDescription3Point2")}</div>
                        </li>
                        <li>
                          <div>{t("resultsDescription3Point3")}</div>
                        </li>
                        <li>
                          <div>{t("resultsDescription3Point4")}</div>
                        </li>
                        <li>
                          <div>{t("resultsDescription3Point5")}</div>
                        </li>
                      </ul>
                      <br />
                      <div>{t("resultsDescription4")}</div>
                      <br />
                      <div>{t("resultsDescription5")}</div>
                      <br />
                      <div>{t("resultsDescription6")}</div>
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
