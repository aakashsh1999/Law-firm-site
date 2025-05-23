"use client";
import { ChevronDownIcon } from "lucide-react";
import { solutions } from "../Navbar";
import { useTranslations } from "next-intl";

export default function Form({ classes }: { classes: string }) {
  const t = useTranslations("form");

  return (
    <>
      <div
        className={`${classes} md:mt-10 sm:mx-auto sm:w-full sm:max-w-[380px]`}
      >
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <h1 className="text-black text-2xl font-semibold">{t("title")}</h1>
          <form
            action="https://formsubmit.co/bplaw@yahoo.com"
            method="POST"
            className="space-y-3"
          >
            <div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t("fullName")}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("email")}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="text"
                  maxLength={10}
                  required
                  pattern="[0-9]{10}"
                  placeholder={t("phone")}
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="mt-2">
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="looking-for"
                    name="looking-for"
                    defaultValue=""
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-800 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option disabled value={""}>
                      {t("lookingFor")}
                    </option>
                    {solutions.flatMap((category) =>
                      category.items.map((item) => (
                        <option key={item.title} value={item.title}>
                          {item.title}
                        </option>
                      ))
                    )}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
