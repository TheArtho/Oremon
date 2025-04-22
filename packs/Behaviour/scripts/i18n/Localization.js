import cn from "./cn";
import us from "./us";
import fr from "./fr";
import de from "./de";
import es from "./es";
import it from "./it";
import jp from "./jp";
import kr from "./kr";
const locales = { cn, de, en: us, es, fr, it, jp, kr };
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
        if (!key)
            return "undefined";
        return locales[lang]?.[key] ?? `${key}`;
    }
    static has(key, lang) {
        const l = lang ?? this.currentLang;
        return !!locales[l]?.[key];
    }
}
Localization.currentLang = "en";
