import { OremonData } from "../../types/OremonData";

const pachirisu: OremonData = {
  "id": "oremon:pachirisu",
  "name": "oremon.pachirisu.name",
  "description": "oremon.pachirisu.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 45,
    "def": 70,
    "atk_spe": 45,
    "def_spe": 90,
    "spd": 95
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 200,
  "eggGroups": [
    "ground",
    "fairy"
  ],
  "hatchCounter": 10,
  "height": 0.4,
  "weight": 3.9,
  "baseExperience": 142,
  "growthRateId": "medium",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "White",
  "model": {
    "default": "models/entity/pachirisu.geo.json"
  },
  "textures": {
    "default": "textures/entity/pachirisu.png"
  },
  "evolutions": []
};

export default pachirisu;