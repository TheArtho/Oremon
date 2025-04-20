import { OremonData } from "../../types/OremonData";

const stunfisk: OremonData = {
  "id": "oremon:stunfisk",
  "name": "oremon.stunfisk.name",
  "description": "oremon.stunfisk.description",
  "types": [
    "ground",
    "electric"
  ],
  "baseStats": {
    "hp": 109,
    "atk": 66,
    "def": 84,
    "atk_spe": 81,
    "def_spe": 99,
    "spd": 32
  },
  "evYield": {
    "hp": 2,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 75,
  "eggGroups": [
    "water1",
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 11,
  "baseExperience": 165,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Brown",
  "model": {
    "default": "models/entity/stunfisk.geo.json"
  },
  "textures": {
    "default": "textures/entity/stunfisk.png"
  },
  "evolutions": []
};

export default stunfisk;