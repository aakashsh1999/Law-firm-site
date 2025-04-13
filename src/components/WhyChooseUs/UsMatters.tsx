"use client";
import { useTranslations } from "next-intl";
import React from "react";

function usMatters() {
  const t = useTranslations("usMatters"); // Adjust namespace if you renamed it

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
                      {t("notSureIfCaseTitle")}
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
                  {/* 1. Land or Property Disputes */}
                  <div className="matter_content">
                    <div>
                      <strong>
                        {/* Using the key you provided */}
                        {t(
                          "examplesSection.exampleData.matter_content_land_property_title"
                        )}
                      </strong>
                      <br />
                      {/* Using the key you provided */}
                      {t(
                        "examplesSection.exampleData.matter_content_land_property_description"
                      )}
                    </div>
                  </div>

                  {/* 2. Marriage, Divorce & Family Matters */}
                  <div
                    className="matter_content"
                    style={{ background: "#2461E2", color: "white" }}
                  >
                    <div>
                      <strong>
                        {/* Using the key you provided */}
                        {t(
                          "examplesSection.exampleData.matter_content_marriage_family_title"
                        )}
                      </strong>
                      <br />
                      {/* Using the key you provided */}
                      {t(
                        "examplesSection.exampleData.matter_content_marriage_family_description"
                      )}
                    </div>
                  </div>

                  {/* 3. Employment & Labour Issues */}
                  <div className="matter_content">
                    <div>
                      <strong>
                        {/* Using the key you provided */}
                        {t(
                          "examplesSection.exampleData.matter_content_employment_labour_title"
                        )}
                      </strong>
                      <br />
                      {/* Using the key you provided */}
                      {t(
                        "examplesSection.exampleData.matter_content_employment_labour_description"
                      )}
                    </div>
                  </div>

                  {/* 4. Accidents, Injuries & Compensation Claims */}
                  <div
                    className="matter_content"
                    style={{ background: "#2461E2", color: "white" }}
                  >
                    <div>
                      <strong>
                        {/* Using the key you provided */}
                        {t(
                          "examplesSection.exampleData.matter_content_accidents_compensation_title"
                        )}
                      </strong>
                      <br />
                      {/* Using the key you provided */}
                      {t(
                        "examplesSection.exampleData.matter_content_accidents_compensation_description"
                      )}
                    </div>
                  </div>

                  {/* 5. Police Misuse, Illegal Detention, or Wrongful FIR */}
                  <div className="matter_content">
                    <div>
                      <strong>
                        {/* Using the key you provided */}
                        {t(
                          "examplesSection.exampleData.matter_content_police_misuse_title"
                        )}
                      </strong>
                      <br />
                      {/* Using the key you provided */}
                      {t(
                        "examplesSection.exampleData.matter_content_police_misuse_description"
                      )}
                    </div>
                  </div>

                  {/* 6. Consumer Complaints & Builder Delays */}
                  <div
                    className="matter_content"
                    style={{ background: "#2461E2", color: "white" }}
                  >
                    <div>
                      <strong>
                        {/* Using the key you provided */}
                        {t(
                          "examplesSection.exampleData.matter_content_consumer_builder_title"
                        )}
                      </strong>
                      <br />
                      {/* Using the key you provided */}
                      {t(
                        "examplesSection.exampleData.matter_content_consumer_builder_description"
                      )}
                    </div>
                  </div>

                  {/* 7. Cheque Bounce, Loan Defaults & Financial Fraud */}
                  <div className="matter_content last-item">
                    <div>
                      <strong>
                        {/* Using the key you provided */}
                        {t(
                          "examplesSection.exampleData.matter_content_cheque_loan_fraud_title"
                        )}
                      </strong>
                      <br />
                      {/* Using the key you provided */}
                      {t(
                        "examplesSection.exampleData.matter_content_cheque_loan_fraud_description"
                      )}
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

export default usMatters;
