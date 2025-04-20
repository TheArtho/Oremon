import { OremonData } from "../../types/OremonData";

const magearna: OremonData = {
  "id": "oremon:magearna",
  "name": "oremon.magearna.name",
  "description": "oremon.magearna.description",
  "types": [
    "steel",
    "fairy"
  ],
  "baseStats": {
    "hp": 80,
    "atk": 95,
    "def": 115,
    "atk_spe": 130,
    "def_spe": 115,
    "spd": 65
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 3,
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
  "height": 1,
  "weight": 80.5,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Gray",
  "model": {
    "default": "models/entity/magearna.geo.json"
  },
  "textures": {
    "default": "textures/entity/magearna.png"
  },
  "evolutions": []
};

export default magearna;