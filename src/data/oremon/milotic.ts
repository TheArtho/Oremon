import { OremonData } from "../../types/OremonData";

const milotic: OremonData = {
  "id": "oremon:milotic",
  "name": "oremon.milotic.name",
  "description": "oremon.milotic.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 60,
    "def": 79,
    "atk_spe": 100,
    "def_spe": 125,
    "spd": 81
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 2,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 60,
  "eggGroups": [
    "water1",
    "dragon"
  ],
  "hatchCounter": 20,
  "height": 6.2,
  "weight": 162,
  "baseExperience": 189,
  "growthRateId": "slow-then-very-fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Pink",
  "model": {
    "default": "models/entity/milotic.geo.json"
  },
  "textures": {
    "default": "textures/entity/milotic.png"
  },
  "evolutions": []
};

export default milotic;