import { OremonData } from "../../types/OremonData";

const watchog: OremonData = {
  "id": "oremon:watchog",
  "name": "oremon.watchog.name",
  "description": "oremon.watchog.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 85,
    "def": 69,
    "atk_spe": 60,
    "def_spe": 69,
    "spd": 77
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
  "catchRate": 255,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.1,
  "weight": 27,
  "baseExperience": 147,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Brown",
  "model": {
    "default": "models/entity/watchog.geo.json"
  },
  "textures": {
    "default": "textures/entity/watchog.png"
  },
  "evolutions": []
};

export default watchog;