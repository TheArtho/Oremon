import en from "./en";
import fr from "./fr";
const locales = { en, fr };
export class Localization {
    static setLanguage(lang) {
        if (locales[lang]) {
            this.currentLang = lang;
        }
    }
    static getLanguage() {
        return this.currentLang;
    }
    static t(key, overrideLang) {
        const lang = overrideLang ?? this.currentLang;
        return locales[lang]?.[key] ?? `${key}`;
    }
    static has(key, lang) {
        const l = lang ?? this.currentLang;
        return !!locales[l]?.[key];
    }
}
Localization.currentLang = "en";
