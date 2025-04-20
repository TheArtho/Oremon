import { OremonData } from "../../types/OremonData";

const heliolisk: OremonData = {
  "id": "oremon:heliolisk",
  "name": "oremon.heliolisk.name",
  "description": "oremon.heliolisk.description",
  "types": [
    "electric",
    "normal"
  ],
  "baseStats": {
    "hp": 62,
    "atk": 55,
    "def": 52,
    "atk_spe": 109,
    "def_spe": 94,
    "spd": 109
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 75,
  "eggGroups": [
    "monster",
    "dragon"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 21,
  "baseExperience": 168,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Yellow",
  "model": {
    "default": "models/entity/heliolisk.geo.json"
  },
  "textures": {
    "default": "textures/entity/heliolisk.png"
  },
  "evolutions": []
};

export default heliolisk;