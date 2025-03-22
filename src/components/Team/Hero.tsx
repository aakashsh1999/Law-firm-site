import React from "react";
import advSunilImg from "../../assets/advSunil Background Removed(1).png";
import advVedent from "../../assets/advVedant Background Removed.png";
import advBablu from "../../assets/advBablu Background Removed.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

function Hero() {
  const people = [
    {
      name: "Adv. Sunil Kumar",
      role: "(Patna High Court)",
      imageUrl: advSunilImg, // No template literals needed
    },
    {
      name: "Adv. S. J. Vedant",
      role: "Managing Partner",
      imageUrl: advVedent,
    },
    {
      name: "Adv Bablu Kumar Singh",
      role: "Designated Partner",
      imageUrl: advBablu,
    },
    // More people...
  ];
  const t = useTranslations("teamHero");
  const person = t.raw("people") as Array<{ name: string; court: string }>;

  return (
    <div className="contact-wrapper">
      <div
        className="section-header bottom-padding-0 contact-hero"
        style={{
          background: "white",
        }}
      >
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical">
              <div className="header_top-wrapper">
                <div>
                  <div className="margin-bottom margin-xxsmall">
                    <h1>{t("ourTeamTitle")}</h1>
                  </div>
                  <div className="text-size-large text-style-muted">
                    {t("teamSubtitle")}
                  </div>
                </div>
                <a
                  href="#information"
                  className="new-btn new-btn_transparent new-btn_top w-button local"
                  style={{
                    borderRadius: "16px",
                    border: "3px solid #2461E2",
                  }}
                >
                  <div>{t("learnAboutUsButton")}</div>
                </a>
              </div>
              <ul
                role="list"
                style={{
                  listStyle: "none",
                  paddingLeft: "0px",
                }}
                className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2  lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-3"
              >
                {person.map((person, index) => (
                  <li
                    key={person.name}
                    style={{
                      listStyleType: "none",
                    }}
                  >
                    <Image
                      alt="imagAlt"
                      src={people[index].imageUrl}
                      width={250}
                      height={250}
                      className="aspect-[14/13] w-full rounded-2xl object-cover shadow-lg "
                    />
                    <h3 className="mt-6 text-lg/6 font-semibold tracking-tight text-black">
                      {t("lawyerPrefix")} {person.name}
                    </h3>
                    <p className="text-base/7 text-gray-500">
                      {people[index].role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block header_bottom-spacer"></div>
    </div>
  );
}

export default Hero;
