import type { Attorney } from "./types";
import { useTranslations } from "next-intl"; // Assuming you are using next-intl

export const getAttorneysWithTranslations = (): Attorney[] => {
  const t = useTranslations("attorneys"); // Assuming you have an "attorneys" namespace in your translations

  return [
    {
      id: 1,
      name: t("sunilKumar.name"),
      position: t("sunilKumar.position"),
      image: "/images/attorneys/sunil-kumar.webp",
      description: t("sunilKumar.description"),
      slug: "sunil-kumar",
    },
    {
      id: 2,
      name: t("babluSingh.name"),
      position: t("babluSingh.position"),
      image: "/images/attorneys/bablu-kumar-singh.webp",
      description: t("babluSingh.description"),
      slug: "bablu-kumar-singh",
    },
    {
      id: 3,
      name: t("sjVedant.name"),
      position: t("sjVedant.position"),
      image: "/images/attorneys/sj-vedant.webp",
      description: t("sjVedant.description"),
      slug: "sj-vedant",
    },
    {
      id: 4,

      name: t("ayushman.name"),
      position: t("ayushman.position"),
      image: "/images/attorneys/ayushman.webp",
      description: t("ayushman.description"),
      slug: "ayushman",
    },
    {
      id: 5,
      name: t("antraShukla.name"),
      position: t("antraShukla.position"),
      image: "/images/attorneys/antra-shukla.webp",
      description: t("antraShukla.description"),
      slug: "antra-shukla",
    },
    {
      id: 6,
      name: t("pujaDubey.name"),
      position: t("pujaDubey.position"),
      image: "/images/attorneys/puja-dubey.webp",
      description: t("pujaDubey.description"),
      slug: "puja-dubey",
    }, // Add translations for the rest of the attorneys here...
  ] as Attorney[];
};
