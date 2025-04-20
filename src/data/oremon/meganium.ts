import { OremonData } from "../../types/OremonData";

const meganium: OremonData = {
  "id": "oremon:meganium",
  "name": "oremon.meganium.name",
  "description": "oremon.meganium.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 80,
    "atk": 82,
    "def": 100,
    "atk_spe": 83,
    "def_spe": 100,
    "spd": 80
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 2,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 1.8,
  "weight": 100.5,
  "baseExperience": 236,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Green",
  "model": {
    "default": "models/entity/meganium.geo.json"
  },
  "textures": {
    "default": "textures/entity/meganium.png"
  },
  "evolutions": []
};

export default meganium;