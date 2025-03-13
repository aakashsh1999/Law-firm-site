"use client";

import React from "react";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Form from "./Form";
import telephone from "../../assets/telephone.png";
import location from "../../assets/location.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#0B284C]  mx-auto">
      <div className="relative isolate ">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3  items-center">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32 col-span-2 ">
            <div className="mx-auto ">
              <h2 className="text-pretty text-5xl font-medium tracking-tight text-white sm:text-5xl">
                {t("title")}
              </h2>
              <p className="mt-6 text-sm text-gray-300">{t("subtitle")}</p>
              <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{t("address")}</span>
                    <Image
                      src={location}
                      alt=""
                      className="h-8 w-8 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a className="text-white hover:text-white">
                      {t("locations.bhagalpur")}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{t("address")}</span>
                    <Image
                      src={location}
                      alt=""
                      className="h-8 w-8 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a className="text-white hover:text-white">
                      {t("locations.patna")}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{t("address")}</span>
                    <Image
                      src={location}
                      alt=""
                      className="h-8 w-8 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a className="text-white hover:text-white">
                      {t("locations.delhi")}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{t("telephone")}</span>
                    <Image
                      src={telephone}
                      alt=""
                      className="h-8 w-8 text-gray-400"
                    />
                  </dt>
                  <dd>
                    <a className="text-white hover:text-white">{t("phone")}</a>
                  </dd>
                </div>
              </dl>
              <ul className="text-2xl my-4 font font-medium ml-6 text-white">
                {t.raw("features").map((feature, index) => (
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
          </div>
          <Form classes="" />
        </div>
      </div>
    </footer>
  );
}
