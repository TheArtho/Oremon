import { FormData } from "../../types/OremonData";

const xerneasForms: FormData[] = [
  {
    "id": "form:xerneas-neutral",
    "form_identifier": "oremon.form.neutral.name",
    "pokemon_identifier": "oremon:xerneas",
    "isDefault": true,
    "formOrder": 1
  },
  {
    "id": "form:xerneas-active",
    "form_identifier": "oremon.form.active.name",
    "pokemon_identifier": "oremon:xerneas",
    "isDefault": false,
    "isBattleOnly": true,
    "formOrder": 2
  }
];

export default xerneasForms;
