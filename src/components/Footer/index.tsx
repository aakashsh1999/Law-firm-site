"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Form from "./Form";
import telephone from "../../assets/telephone.png";
import location from "../../assets/location.png";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#0B284C] mx-auto">
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3 items-center">
          <div className="relative col-span-2 px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
            <div className="mx-auto">
              <h2 className="text-pretty text-5xl font-medium tracking-tight text-white sm:text-5xl">
                {t("title")}
              </h2>
              <p className="mt-6 text-sm text-gray-300">{t("subtitle")}</p>
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
              <ul className="my-4 ml-6 text-2xl font-medium text-white">
                {t.raw("features").map((feature, index) => (
                  <li key={index} style={{ listStyleType: "disc" }}>
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
