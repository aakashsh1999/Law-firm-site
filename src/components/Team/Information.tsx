import React from "react";
import Form from "../Footer/Form";
import Image from "next/image";

function Information() {
  const lawyers = [
    { name: "Adv Mani Sinha", court: "Supreme Court of India" },
    { name: "Adv Pranav Prakash", court: "Supreme Court of India" },
    { name: "Adv Dr Bidhu Ranjan", court: "Patna High Court" },
    { name: "Adv Ashok Sinha", court: "Delhi High Court" },
    { name: "Adv Dhananjay Pandey", court: "Patna High Court" },
    { name: "Adv Sanjay Sinha", court: "Bhagalpur Civil Court" },
    { name: "Adv Sujit", court: "Bhagalpur Civil Court" },
    { name: "Adv Mukesh Thakur", court: "Bhagalpur Civil Court" },
    { name: "Adv Rabindra Narayan Sinha", court: "Munger Civil Court" },
    { name: "Adv Ananmika Sinha", court: "Munger Civil Court" },
    { name: "Adv Payel Bhattacharjee", court: "Kolkata Court" },
    { name: "Adv Sunil Kumar", court: "Ranchi High Court" },
    { name: "Adv Astha Gupta", court: "Delhi High Court" },
    { name: "Adv Pooja Dubey", court: "" }, // No court specified
    { name: "Adv Ranjani Mishra", court: "Jamshedpur Session Court" },
    { name: "Adv Jaya Saraswati Prakash", court: "Banka Civil Court" },
    { name: "Adv Manoranjan Kumar Sinha", court: "Jamui Civil Court" },
    { name: "Adv Awdhesh Kumar Sinha", court: "Bhagalpur Civil Court" },
    { name: "Adv Kashi Nath Mishra", court: "Bhagalpur Civil Court" },
    { name: "Adv Alka Pandey", court: "Bhagalpur Civil Court" },
    { name: "Adv Chandan Karn", court: "Bhagalpur Civil Court" },
    { name: "Adv Amit Kumar Sinha", court: "Bhagalpur Civil Court" },
    { name: "Adv Seema Sinha", court: "Khagaria Civil Court" },
    { name: "Adv Antra Shukla", court: "Lucknow High Court" },
    { name: "Adv Ajit Rukhaiyar", court: "Kathiar Civil Court" },
  ];

  return (
    <div>
      <div id="information" className="section-contact-content">
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical padding-huge">
              <div className="w-layout-grid contact-content_component">
                <div id="w-node-_8d9ddff1-129c-9c2b-dca2-a28b694bc4f1-4497f351">
                  <div className="mx-auto p-4 order-1">
                    <h2 className="text-2xl font-bold mb-4">Our Legal Team</h2>
                    <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-x-3">
                      {lawyers.map((lawyer, index) => (
                        <li
                          key={index}
                          style={{
                            listStyleType: "disc",
                          }}
                        >
                          <div className="mr-4">
                            <span className="font-medium">{lawyer.name}</span>
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
