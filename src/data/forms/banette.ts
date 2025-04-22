import { FormData } from "../../types/OremonData";

const banetteForms: FormData[] = [
  {
    "id": "form:banette",
    "pokemon_identifier": "oremon:banette",
    "isDefault": true,
    "formOrder": 1
  },
  {
    "id": "form:banette-mega",
    "form_identifier": "oremon.form.mega.name",
    "pokemon_identifier": "oremon:banette-mega",
    "isDefault": true,
    "isBattleOnly": true,
    "isMega": true,
    "formOrder": 2
  }
];

export default banetteForms;
