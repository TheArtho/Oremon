import { MinecraftTextColor } from "./enums/MinecraftTextColor";
import { MinecraftTextOption } from "./enums/MinecraftTextOption";

/**
 * Retourne un texte coloré avec les codes Minecraft (ex: §c, §a)
 * @param text Texte brut
 * @param color Couleur Minecraft (enum)
 * @param options Style optionnel : gras, italique, etc.
 * @returns Texte formaté avec codes couleur Minecraft
 */
export function colorText(
    text: string,
    color: MinecraftTextColor,
    options?: {
        bold?: boolean;
        italic?: boolean;
        underline?: boolean;
        strikethrough?: boolean;
        resetAfter?: boolean;
    }
): string {
    let formatted : string = color;

    if (options?.bold) formatted += MinecraftTextOption.Bold;
    if (options?.italic) formatted += MinecraftTextOption.Italic;
    if (options?.underline) formatted += MinecraftTextOption.Underline;
    if (options?.strikethrough) formatted += MinecraftTextOption.Strikethrough;

    formatted += text;

    if (options?.resetAfter !== false) {
        formatted += MinecraftTextOption.Reset;
    }

    return formatted;
}
