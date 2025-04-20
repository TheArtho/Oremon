import { OremonData } from "../../types/OremonData";

const jolteon: OremonData = {
  "id": "oremon:jolteon",
  "name": "oremon.jolteon.name",
  "description": "oremon.jolteon.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 65,
    "def": 60,
    "atk_spe": 110,
    "def_spe": 95,
    "spd": 130
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 35,
  "height": 0.8,
  "weight": 24.5,
  "baseExperience": 184,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Yellow",
  "model": {
    "default": "models/entity/jolteon.geo.json"
  },
  "textures": {
    "default": "textures/entity/jolteon.png"
  },
  "evolutions": []
};

export default jolteon;