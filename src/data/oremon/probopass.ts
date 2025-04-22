import { OremonData } from "../../types/OremonData";

const probopass: OremonData = {
  "id": "oremon:probopass",
  "name": "oremon.probopass.name",
  "description": "oremon.probopass.description",
  "types": [
    "rock",
    "steel"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 55,
    "def": 145,
    "atk_spe": 75,
    "def_spe": 150,
    "spd": 40
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 2,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 60,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 1.4,
  "weight": 340,
  "baseExperience": 184,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "heads",
  "color": "Gray",
  "evolutions": []
};

export default probopass;