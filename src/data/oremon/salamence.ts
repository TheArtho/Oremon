import { OremonData } from "../../types/OremonData";

const salamence: OremonData = {
  "id": "oremon:salamence",
  "name": "oremon.salamence.name",
  "description": "oremon.salamence.description",
  "types": [
    "dragon",
    "flying"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 135,
    "def": 80,
    "atk_spe": 110,
    "def_spe": 80,
    "spd": 100
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
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 1.5,
  "weight": 102.6,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "quadruped",
  "color": "Blue",
  "model": {
    "default": "models/entity/salamence.geo.json"
  },
  "textures": {
    "default": "textures/entity/salamence.png"
  },
  "evolutions": []
};

export default salamence;