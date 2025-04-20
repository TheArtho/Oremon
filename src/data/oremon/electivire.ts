import { OremonData } from "../../types/OremonData";

const electivire: OremonData = {
  "id": "oremon:electivire",
  "name": "oremon.electivire.name",
  "description": "oremon.electivire.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 123,
    "def": 67,
    "atk_spe": 95,
    "def_spe": 85,
    "spd": 95
  },
  "evYield": {
    "hp": 0,
    "atk": 3,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 2,
  "catchRate": 30,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 25,
  "height": 1.8,
  "weight": 138.6,
  "baseExperience": 243,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Yellow",
  "model": {
    "default": "models/entity/electivire.geo.json"
  },
  "textures": {
    "default": "textures/entity/electivire.png"
  },
  "evolutions": []
};

export default electivire;