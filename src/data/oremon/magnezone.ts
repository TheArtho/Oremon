import { OremonData } from "../../types/OremonData";

const magnezone: OremonData = {
  "id": "oremon:magnezone",
  "name": "oremon.magnezone.name",
  "description": "oremon.magnezone.description",
  "types": [
    "electric",
    "steel"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 70,
    "def": 115,
    "atk_spe": 130,
    "def_spe": 90,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 3,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 30,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 180,
  "baseExperience": 241,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Gray",
  "evolutions": []
};

export default magnezone;