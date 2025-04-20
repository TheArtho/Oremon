import { OremonData } from "../../types/OremonData";

const walrein: OremonData = {
  "id": "oremon:walrein",
  "name": "oremon.walrein.name",
  "description": "oremon.walrein.description",
  "types": [
    "ice",
    "water"
  ],
  "baseStats": {
    "hp": 110,
    "atk": 80,
    "def": 90,
    "atk_spe": 95,
    "def_spe": 90,
    "spd": 65
  },
  "evYield": {
    "hp": 3,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "water1",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.4,
  "weight": 150.6,
  "baseExperience": 239,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "model": {
    "default": "models/entity/walrein.geo.json"
  },
  "textures": {
    "default": "textures/entity/walrein.png"
  },
  "evolutions": []
};

export default walrein;