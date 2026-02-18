export type Locale = (typeof locales)[number];

export const locales = ["en", "sm"] as const;
export const defaultLocale: Locale = "en";
