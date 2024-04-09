import { ENGLISH_TERMS } from "./englishDictionary";
import { TURKISH_TERMS } from "./turkishDictionary";
import { PORTUGUESE_TERMS } from "./portugueseDictionary";
import { FRENCH_TERMS } from "./frenchDictionary";
import { TranslationKeys } from "./types";
import { ITALIAN_TERMS } from "./italianDictionary";

export type LanguageCode = "en" | "fr" | "it" | "pt" | "tk";

export type TranslationResource = Record<TranslationKeys, string>;

export const resources: Record<
  LanguageCode,
  { translation: TranslationResource }
> = {
  en: { translation: ENGLISH_TERMS },
  fr: { translation: FRENCH_TERMS },
  it: { translation: ITALIAN_TERMS },
  pt: { translation: PORTUGUESE_TERMS },
  tk: { translation: TURKISH_TERMS },
};
