export type Locale = (typeof locales)[number];

export const locales = ["en", "de", "hi"] as const;
export const defaultLocale: Locale = "en";
