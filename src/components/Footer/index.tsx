import React from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Form from "./Form";

export default function Footer() {
  return (
    <footer className="bg-[#0B284C]  mx-auto">
      <div className="relative isolate ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3  items-center">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32 col-span-2 ">
            <div className="mx-auto ">
              <h2 className="text-pretty text-5xl font-medium tracking-tight text-white sm:text-5xl">
                Do You Need to File a
                <br /> Personal Injury Lawsuit in <br />
                New York?{" "}
              </h2>
              <p className="mt-6 text-sm text-gray-300">
                To speak with an attorney immediately call (212) 869-3500 or
                fill out
                <br />
                the form below and we'll get back to you within 24 hours. Your
                inquiry is <br /> always confidential.
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
                    <a className="hover:text-white">
                      A-12, Ansa Plaza, RBSS Sahay Road, Bhagalpur- 812001
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href="mailto:hello@example.com"
                      className="hover:text-white"
                    >
                      91-8541814401
                    </a>
                  </dd>
                </div>
              </dl>
              <ul className="text-2xl my-4 font font-medium list-disc ml-6">
                <li>We are available to you 24/7</li>
                <li>Compassionate in our approach</li>
                <li>Accessible & available</li>
              </ul>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </footer>
  );
}
