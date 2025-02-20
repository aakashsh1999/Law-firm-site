import React from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Form from "../Footer/Form";

export default function HaveACase() {
  return (
    <footer className="bg-[#2461E2]  mx-auto">
      <div className="relative isolate ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3  items-center">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32 col-span-2 ">
            <div className="mx-auto ">
              <div className="max-width-xlarge">
                <div className="margin-bottom margin-xsmall">
                  <div
                    className="text-weight-medium text-color-primary"
                    style={{
                      fontSize: "1.5rem",
                      color: "#FFFFFF6B",
                    }}
                  >
                    Attorneys
                  </div>
                </div>
              </div>
              <h2 className="text-pretty text-5xl font-medium tracking-tight text-white sm:text-5xl">
                Do I Have A Case?
              </h2>
              <p
                className="mt-6 text-xl text-white"
                style={{
                  lineHeight: "30.64px",
                  letterSpacing: "-2",
                }}
              >
                To speak with an attorney immediately call (212) <br /> 869-3500
                or fill out the form below and {`we'll`} get back to <br />
                you within 24 hours. Your inquiry is always confidential
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <PhoneIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a className="text-white hover:text-white">
                      A-12, Ansa Plaza, RBSS Sahay Road, Bhagalpur- 812001
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only ">Telephone</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:hello@example.com"
                      className="hover:text-white text-white"
                    >
                      91-8541814401
                    </a>
                  </dd>
                </div>
              </dl>
              <ul className="text-2xl my-4 font font-medium ml-6 text-white list-decimal">
                <li>We are available to you 24/7</li>
                <li>Compassionate in our approach</li>
                <li>Accessible & available</li>
              </ul>
            </div>
          </div>
          <Form classes="" />
        </div>
      </div>
    </footer>
  );
}
