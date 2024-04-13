import { ENGLISH_TERMS } from "./englishDictionary";
import { TURKISH_TERMS } from "./turkishDictionary";
import { PORTUGUESE_TERMS } from "./portugueseDictionary";
import { FRENCH_TERMS } from "./frenchDictionary";
import { TranslationKeys } from "./types";
import { VIETNAMESE_TERMS } from "./vietnameseDictionary";

export type LanguageCode = "en" | "fr" | "pt" | "tk" | "vi";

export type TranslationResource = Record<TranslationKeys, string>;

export const resources: Record<
  LanguageCode,
  { translation: TranslationResource }
> = {
  en: {
    translation: ENGLISH_TERMS,
  },
  fr: {
    translation: FRENCH_TERMS,
  },
  pt: {
    translation: PORTUGUESE_TERMS,
  },
  tk: {
    translation: TURKISH_TERMS,
  },
  vi: {
    translation: VIETNAMESE_TERMS,
  },
};
