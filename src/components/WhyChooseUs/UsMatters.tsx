import { useTranslations } from "next-intl";
import React from "react";

function UsMatters() {
  const t = useTranslations("usMatters");
  // const examplesData = [
  //   t("examplesSection.example1.description"),
  //   t("example2.description"),
  //   t("example3.description"),
  //   t("example4.description"),
  //   t("example5.description"),
  //   t("example6.description"),
  //   t("example7.description"),
  // ];

  return (
    <div>
      <section className="section-us-matters">
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical padding-xhuge">
              <div className="us-matters_component">
                <div
                  id="w-node-c82ca9ba-a19f-586d-a6ec-081bc82ddd3b-4497f3d5"
                  className="us-matters_left"
                >
                  <div className="margin-bottom margin-small">
                    <div className="heading-large" style={{ color: "white" }}>
                      {t("notSureIfCaseTitle")}{" "}
                    </div>
                  </div>
                  <div
                    className="text-size-large text-style-muted"
                    style={{
                      color: "white",
                    }}
                  >
                    {t("detailedExamplesIntro")}
                  </div>
                </div>
                <div>
                  <div className="matter_content">
                    <div>
                      <strong>
                        {t(
                          "examplesSection.exampleData.matter_content_cancer_diagnosis"
                        )}
                      </strong>
                      ,
                      {t(
                        "examplesSection.exampleData.matter_content_cancer_complaints"
                      )}{" "}
                      <br />
                      <br />
                      {t(
                        "examplesSection.exampleData.matter_content_cancer_screening"
                      )}
                    </div>
                  </div>
                  <div
                    className="matter_content"
                    style={{
                      background: "#2461E2",
                      color: "white",
                    }}
                  >
                    <div>
                      <strong>
                        {t(
                          "examplesSection.exampleData.matter_content_emergency_room_title"
                        )}
                      </strong>{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_emergency_room_discharge"
                      )}
                      .{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_emergency_room_second_opinion"
                      )}
                    </div>
                  </div>
                  <div className="matter_content">
                    <div>
                      <strong>
                        {t(
                          "examplesSection.exampleData.matter_content_labor_monitoring"
                        )}
                      </strong>{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_labor_complaints"
                      )}
                      . <br />
                      <br />
                      {t(
                        "examplesSection.exampleData.matter_content_labor_injury"
                      )}{" "}
                      <br />
                      <br />
                      {t(
                        "examplesSection.exampleData.matter_content_labor_explanation"
                      )}
                    </div>
                  </div>
                  <div
                    className="matter_content"
                    style={{
                      background: "#2461E2",
                      color: "white",
                    }}
                  >
                    <div>
                      <strong>
                        {t(
                          "examplesSection.exampleData.matter_content_incarceration_title"
                        )}
                      </strong>{" "}
                      <strong>
                        {t(
                          "examplesSection.exampleData.matter_content_incarceration_assault"
                        )}
                      </strong>{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_incarceration_comments"
                      )}{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_incarceration_grievances"
                      )}
                      .{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_incarceration_civil_claim"
                      )}
                    </div>
                  </div>
                  <div className="matter_content">
                    <div>
                      <strong>
                        {t(
                          "examplesSection.exampleData.matter_content_car_accident_title"
                        )}
                      </strong>{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_car_accident_police_report"
                      )}
                      ,{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_car_accident_mother_belief"
                      )}
                      .{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_car_accident_child_injury"
                      )}{" "}
                      <br />
                      <br />‍
                      <em>
                        {t(
                          "examplesSection.exampleData.matter_content_car_accident_investigation"
                        )}
                      </em>
                    </div>
                  </div>
                  <div
                    className="matter_content"
                    style={{
                      background: "#2461E2",
                      color: "white",
                    }}
                  >
                    <div>
                      <strong>
                        {t(
                          "examplesSection.exampleData.matter_content_construction_title"
                        )}
                      </strong>{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_construction_openings"
                      )}{" "}
                      <br />
                      <br />
                      {t(
                        "examplesSection.exampleData.matter_content_construction_boss_remark"
                      )}
                      .{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_construction_coworker_fall"
                      )}{" "}
                      {t(
                        "examplesSection.exampleData.matter_content_construction_permanent_disability"
                      )}
                      .
                    </div>
                  </div>
                  <div className="matter_content last-item">
                    <div>
                      {t(
                        "examplesSection.exampleData.matter_content_hostile_workplace_title"
                      )}
                      <strong>
                        {t(
                          "examplesSection.exampleData.matter_content_hostile_workplace_description"
                        )}
                      </strong>
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

export default UsMatters;
