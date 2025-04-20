import { OremonData } from "../../types/OremonData";

const drampa: OremonData = {
  "id": "oremon:drampa",
  "name": "oremon.drampa.name",
  "description": "oremon.drampa.description",
  "types": [
    "normal",
    "dragon"
  ],
  "baseStats": {
    "hp": 78,
    "atk": 60,
    "def": 85,
    "atk_spe": 135,
    "def_spe": 91,
    "spd": 36
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
  "catchRate": 70,
  "eggGroups": [
    "monster",
    "dragon"
  ],
  "hatchCounter": 20,
  "height": 3,
  "weight": 185,
  "baseExperience": 170,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "White",
  "model": {
    "default": "models/entity/drampa.geo.json"
  },
  "textures": {
    "default": "textures/entity/drampa.png"
  },
  "evolutions": []
};

export default drampa;