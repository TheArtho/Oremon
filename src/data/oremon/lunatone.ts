import { OremonData } from "../../types/OremonData";

const lunatone: OremonData = {
  "id": "oremon:lunatone",
  "name": "oremon.lunatone.name",
  "description": "oremon.lunatone.description",
  "types": [
    "rock",
    "psychic"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 55,
    "def": 65,
    "atk_spe": 95,
    "def_spe": 85,
    "spd": 70
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
  "genderRate": -1,
  "catchRate": 45,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 25,
  "height": 1,
  "weight": 168,
  "baseExperience": 161,
  "growthRateId": "fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Yellow",
  "model": {
    "default": "models/entity/lunatone.geo.json"
  },
  "textures": {
    "default": "textures/entity/lunatone.png"
  },
  "evolutions": []
};

export default lunatone;