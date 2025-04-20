type Lang = "en" | "fr";
type LocaleMap = Record<string, string>;

import en from "./en";
import fr from "./fr";

const locales: Record<Lang, LocaleMap> = { en, fr };

export class Localization {
    private static currentLang: Lang = "en";

    static setLanguage(lang: Lang) {
        if (locales[lang]) {
            this.currentLang = lang;
        }
    }

    static getLanguage(): Lang {
        return this.currentLang;
    }

    static t(key: string, overrideLang?: Lang): string {
        const lang = overrideLang ?? this.currentLang;
        return locales[lang]?.[key] ?? `${key}`;
    }

    static has(key: string, lang?: Lang): boolean {
        const l = lang ?? this.currentLang;
        return !!locales[l]?.[key];
    }
}
