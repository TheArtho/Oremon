import { FormData } from "../../types/OremonData";

const scizorForms: FormData[] = [
  {
    "id": "form:scizor",
    "pokemon_identifier": "oremon:scizor",
    "isDefault": true,
    "formOrder": 1
  },
  {
    "id": "form:scizor-mega",
    "form_identifier": "oremon.form.mega.name",
    "pokemon_identifier": "oremon:scizor-mega",
    "isDefault": true,
    "isBattleOnly": true,
    "isMega": true,
    "formOrder": 2
  }
];

export default scizorForms;
