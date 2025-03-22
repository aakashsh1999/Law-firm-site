import React from "react";
import Form from "../Footer/Form";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Information() {
  const t = useTranslations("teamInformation");

  // Get the translated lawyers array
  const lawyers = t.raw("lawyers") as Array<{ name: string; court: string }>;

  return (
    <div>
      <div id="information" className="section-contact-content">
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical padding-huge">
              <div className="w-layout-grid contact-content_component">
                <div id="w-node-_8d9ddff1-129c-9c2b-dca2-a28b694bc4f1-4497f351">
                  <div className="mx-auto p-4 order-1">
                    <h2 className="text-2xl font-bold mb-4">
                      {t("ourLegalTeamTitle")}
                    </h2>
                    <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-3">
                      {lawyers.map((lawyer, index) => (
                        <li
                          key={index}
                          style={{
                            listStyleType: "disc",
                          }}
                        >
                          <div className="mr-4">
                            <span className="font-medium">
                              {t("lawyerPrefix")} {lawyer.name}
                            </span>
                          </div>
                          <div>
                            {" "}
                            <span className="text-gray-600">
                              {lawyer.court ? `(${lawyer.court})` : ""}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="sticky tablet-no-sticky">
                  <div
                    id="cr-form-FOR8a92fc4c319343728fa1df06164b9f51"
                    className="form-embed w-embed w-iframe w-script"
                    style={{
                      padding: "8px",
                    }}
                  >
                    <Form classes="mt-0 rounded-xl " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
