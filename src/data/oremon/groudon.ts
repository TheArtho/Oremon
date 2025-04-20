import { OremonData } from "../../types/OremonData";

const groudon: OremonData = {
  "id": "oremon:groudon",
  "name": "oremon.groudon.name",
  "description": "oremon.groudon.description",
  "types": [
    "ground"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 150,
    "def": 140,
    "atk_spe": 100,
    "def_spe": 90,
    "spd": 90
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
  "genderRate": -1,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 3.5,
  "weight": 950,
  "baseExperience": 302,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "upright",
  "color": "Red",
  "model": {
    "default": "models/entity/groudon.geo.json"
  },
  "textures": {
    "default": "textures/entity/groudon.png"
  },
  "evolutions": []
};

export default groudon;