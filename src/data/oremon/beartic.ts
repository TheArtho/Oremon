import { OremonData } from "../../types/OremonData";

const beartic: OremonData = {
  "id": "oremon:beartic",
  "name": "oremon.beartic.name",
  "description": "oremon.beartic.description",
  "types": [
    "ice"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 130,
    "def": 80,
    "atk_spe": 70,
    "def_spe": 80,
    "spd": 50
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
  "catchRate": 60,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 2.6,
  "weight": 260,
  "baseExperience": 177,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "White",
  "model": {
    "default": "models/entity/beartic.geo.json"
  },
  "textures": {
    "default": "textures/entity/beartic.png"
  },
  "evolutions": []
};

export default beartic;