import React from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Form from "../Footer/Form";
import { useTranslations } from "next-intl";
import telephone from "../../assets/telephone.png";
import location from "../../assets/location.png";
import Image from "next/image";

export default function HaveACase() {
  const t = useTranslations("haveACase");
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
                    {t("attorneysTitle")}
                  </div>
                </div>
              </div>
              <h2 className="text-pretty text-5xl font-medium tracking-tight text-white sm:text-5xl">
                {t("doIHaveACaseQuestion")}
              </h2>
              <p
                className="mt-6 text-xl text-white"
                style={{
                  lineHeight: "30.64px",
                  letterSpacing: "-2",
                }}
              >
                {t("callToActionDescription")}
              </p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{t("addresses1")}</span>
                    <Image
                      src={location}
                      alt=""
                      className="h-8 w-8 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a className="text-white hover:text-white">
                      {t("addresses1")}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{t("addresses1")}</span>
                    <Image
                      src={location}
                      alt=""
                      className="h-8 w-8 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a className="text-white hover:text-white">
                      {t("addresses2")}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{t("addresses1")}</span>
                    <Image
                      src={location}
                      alt=""
                      className="h-8 w-8 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a className="text-white hover:text-white">
                      {t("address3")}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{t("telephoneNumber")}</span>
                    <Image
                      src={telephone}
                      alt=""
                      className="h-8 w-8 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a className="text-white hover:text-white">
                      {t("telephoneNumber")}
                    </a>
                  </dd>
                </div>
              </dl>
              <ul className="text-2xl my-4 font font-medium ml-6 text-white list-decimal">
                {t.raw("contactPoints").map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            </div>
          </div>
          <Form classes="" />
        </div>
      </div>
    </footer>
  );
}
