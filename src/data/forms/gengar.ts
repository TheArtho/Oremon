import { FormData } from "../../types/OremonData";

const gengarForms: FormData[] = [
  {
    "id": "form:gengar",
    "pokemon_identifier": "oremon:gengar",
    "isDefault": true,
    "formOrder": 1
  },
  {
    "id": "form:gengar-mega",
    "form_identifier": "oremon.form.mega.name",
    "pokemon_identifier": "oremon:gengar-mega",
    "isDefault": true,
    "isBattleOnly": true,
    "isMega": true,
    "formOrder": 2
  }
];

export default gengarForms;
