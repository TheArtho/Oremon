import { OremonData } from "../../types/OremonData";

const lumineon: OremonData = {
  "id": "oremon:lumineon",
  "name": "oremon.lumineon.name",
  "description": "oremon.lumineon.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 69,
    "atk": 69,
    "def": 76,
    "atk_spe": 69,
    "def_spe": 86,
    "spd": 91
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 75,
  "eggGroups": [
    "water2"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 24,
  "baseExperience": 161,
  "growthRateId": "slow-then-very-fast",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Blue",
  "model": {
    "default": "models/entity/lumineon.geo.json"
  },
  "textures": {
    "default": "textures/entity/lumineon.png"
  },
  "evolutions": []
};

export default lumineon;