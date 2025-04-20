import { OremonData } from "../../types/OremonData";

const gorebyss: OremonData = {
  "id": "oremon:gorebyss",
  "name": "oremon.gorebyss.name",
  "description": "oremon.gorebyss.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 84,
    "def": 105,
    "atk_spe": 114,
    "def_spe": 75,
    "spd": 52
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
  "catchRate": 60,
  "eggGroups": [
    "water1"
  ],
  "hatchCounter": 20,
  "height": 1.8,
  "weight": 22.6,
  "baseExperience": 170,
  "growthRateId": "slow-then-very-fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Pink",
  "model": {
    "default": "models/entity/gorebyss.geo.json"
  },
  "textures": {
    "default": "textures/entity/gorebyss.png"
  },
  "evolutions": []
};

export default gorebyss;