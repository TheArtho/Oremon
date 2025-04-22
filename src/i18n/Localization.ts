import cn from "./cn";
import us from "./us";
import fr from "./fr";
import de from "./de";
import es from "./es";
import it from "./it";
import jp from "./jp";
import kr from "./kr";

type Lang = "cn" | "de" | "en" | "es" | "fr" | "it" | "jp" | "kr";
type LocaleMap = Record<string, string>;

const locales: Record<Lang, LocaleMap> = { cn, de, en: us, es, fr, it, jp, kr };

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

    static t(key: string | undefined, overrideLang?: Lang): string {
        const lang = overrideLang ?? this.currentLang;
        if (!key) return "undefined";
        return locales[lang]?.[key] ?? `${key}`;
    }

    static has(key: string, lang?: Lang): boolean {
        const l = lang ?? this.currentLang;
        return !!locales[l]?.[key];
    }
}
