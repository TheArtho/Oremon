import { OremonData } from "../../types/OremonData";

const zangoose: OremonData = {
  "id": "oremon:zangoose",
  "name": "oremon.zangoose.name",
  "description": "oremon.zangoose.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 73,
    "atk": 115,
    "def": 60,
    "atk_spe": 60,
    "def_spe": 60,
    "spd": 90
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
  "catchRate": 90,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.3,
  "weight": 40.3,
  "baseExperience": 160,
  "growthRateId": "slow-then-very-fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "White",
  "model": {
    "default": "models/entity/zangoose.geo.json"
  },
  "textures": {
    "default": "textures/entity/zangoose.png"
  },
  "evolutions": []
};

export default zangoose;