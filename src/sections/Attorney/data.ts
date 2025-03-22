import type { Attorney } from "./types";
import { useTranslations } from "next-intl"; // Assuming you are using next-intl

export const getAttorneysWithTranslations = (): Attorney[] => {
  const t = useTranslations("attorneys"); // Assuming you have an "attorneys" namespace in your translations

  return [
    {
      id: 1,
      name: t("eliFuchsberg.name"),
      position: t("eliFuchsberg.position"),
      image:
        "https://cdn.prod.website-files.com/63a4a6b4b160085eef18fffe/65afb735d2b69e7d29405adf_c_Eli.webp",
      description: t("eliFuchsberg.description"),
      slug: "eli-fuchsberg",
    },
    {
      id: 2,
      name: t("bradleyZimmerman1.name"),
      position: t("bradleyZimmerman1.position"),
      image:
        "https://cdn.prod.website-files.com/63a4a6b4b160085eef18fffe/65afb62b155e9a0502907181_Bradley%20Zimmerman.webp",
      description: t("bradleyZimmerman1.description"),
      slug: "bradley-s-zimmerman",
    },
    {
      id: 7,
      name: t("bradleyZimmerman2.name"),
      position: t("bradleyZimmerman2.position"),
      image:
        "https://cdn.prod.website-files.com/63a4a6b4b160085eef18fffe/65afb62b155e9a0502907181_Bradley%20Zimmerman.webp",
      description: t("bradleyZimmerman2.description"),
      slug: "bradley-s-zimmerman",
    },
    {
      id: 3,
      name: t("bradleyZimmerman3.name"),
      position: t("bradleyZimmerman3.position"),
      image:
        "https://cdn.prod.website-files.com/63a4a6b4b160085eef18fffe/65afb62b155e9a0502907181_Bradley%20Zimmerman.webp",
      description: t("bradleyZimmerman3.description"),
      slug: "bradley-s-zimmerman",
    },
    {
      id: 4,
      name: t("bradleyZimmerman4.name"),
      position: t("bradleyZimmerman4.position"),
      image:
        "https://cdn.prod.website-files.com/63a4a6b4b160085eef18fffe/65afb62b155e9a0502907181_Bradley%20Zimmerman.webp",
      description: t("bradleyZimmerman4.description"),
      slug: "bradley-s-zimmerman",
    },
    {
      id: 6,
      name: t("bradleyZimmerman5.name"),
      position: t("bradleyZimmerman5.position"),
      image:
        "https://cdn.prod.website-files.com/63a4a6b4b160085eef18fffe/65afb62b155e9a0502907181_Bradley%20Zimmerman.webp",
      description: t("bradleyZimmerman5.description"),
      slug: "bradley-s-zimmerman",
    },
    // Add translations for the rest of the attorneys here...
  ] as Attorney[];
};
