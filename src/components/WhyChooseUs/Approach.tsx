import { useTranslations } from "next-intl";
import React from "react";

function Approach() {
  const t = useTranslations("whyChooseUsApproach");
  return (
    <div className="mt-36 md:mt-0">
      <section id="approach" className="section-us-intro">
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical padding-xhuge">
              <div className="margin-bottom margin-xxlarge">
                <div>
                  <div className="max-width-xlarge">
                    <div className="margin-bottom margin-xsmall">
                      <div
                        className="text-weight-medium text-color-primary"
                        style={{
                          color: "#4285F46B",
                        }}
                      >
                        {t("ourFirmsApproach")}
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <div className="heading-large">
                        {t("individualAttentionTitle")}
                      </div>
                    </div>
                    <div className="text-size-large text-style-muted">
                      {t("individualAttentionDescription")}
                    </div>
                  </div>
                </div>
                <div className="w-layout-grid us-intro_component">
                  <div className="us-intro_content-left">
                    <div className="margin-bottom margin-medium">
                      <div>
                        {t("curiousAboutCaseQuestion")}
                        <br />
                        <br />
                        {t("injuryCausedBy")}
                      </div>
                    </div>
                    <ul role="list">
                      {t.raw("causesOfInjury").map((feature, index) => (
                        <li
                          key={index}
                          style={{
                            listStyleType: "disc",
                          }}
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="us-intro_content-right">
                    <div>
                      {t("contactUsPrompt")}
                      {/* <a href="tel:212-869-3500" className="local">
                        212-869-3500
                      </a>{" "} */}{" "}
                      {t("orBySubmitting")} <br />
                      <br />
                      {t("whatHappensNext")}
                      <br />
                      <br />
                      {t("meetingWithAttorneys")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Approach;
