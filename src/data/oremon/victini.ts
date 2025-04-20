import { OremonData } from "../../types/OremonData";

const victini: OremonData = {
  "id": "oremon:victini",
  "name": "oremon.victini.name",
  "description": "oremon.victini.description",
  "types": [
    "psychic",
    "fire"
  ],
  "baseStats": {
    "hp": 100,
    "atk": 100,
    "def": 100,
    "atk_spe": 100,
    "def_spe": 100,
    "spd": 100
  },
  "evYield": {
    "hp": 3,
    "atk": 0,
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
  "height": 0.4,
  "weight": 4,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Yellow",
  "model": {
    "default": "models/entity/victini.geo.json"
  },
  "textures": {
    "default": "textures/entity/victini.png"
  },
  "evolutions": []
};

export default victini;