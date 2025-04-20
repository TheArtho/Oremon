import { OremonData } from "../../types/OremonData";

const maractus: OremonData = {
  "id": "oremon:maractus",
  "name": "oremon.maractus.name",
  "description": "oremon.maractus.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 86,
    "def": 67,
    "atk_spe": 106,
    "def_spe": 67,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 2,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 28,
  "baseExperience": 161,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Green",
  "model": {
    "default": "models/entity/maractus.geo.json"
  },
  "textures": {
    "default": "textures/entity/maractus.png"
  },
  "evolutions": []
};

export default maractus;