import { OremonData } from "../../types/OremonData";

const barbaracle: OremonData = {
  "id": "oremon:barbaracle",
  "name": "oremon.barbaracle.name",
  "description": "oremon.barbaracle.description",
  "types": [
    "rock",
    "water"
  ],
  "baseStats": {
    "hp": 72,
    "atk": 105,
    "def": 115,
    "atk_spe": 54,
    "def_spe": 86,
    "spd": 68
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "water3"
  ],
  "hatchCounter": 20,
  "height": 1.3,
  "weight": 96,
  "baseExperience": 175,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "heads",
  "color": "Brown",
  "model": {
    "default": "models/entity/barbaracle.geo.json"
  },
  "textures": {
    "default": "textures/entity/barbaracle.png"
  },
  "evolutions": []
};

export default barbaracle;