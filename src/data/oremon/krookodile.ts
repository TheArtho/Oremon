import { OremonData } from "../../types/OremonData";

const krookodile: OremonData = {
  "id": "oremon:krookodile",
  "name": "oremon.krookodile.name",
  "description": "oremon.krookodile.description",
  "types": [
    "ground",
    "dark"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 117,
    "def": 80,
    "atk_spe": 65,
    "def_spe": 70,
    "spd": 92
  },
  "evYield": {
    "hp": 0,
    "atk": 3,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.5,
  "weight": 96.3,
  "baseExperience": 234,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Red",
  "model": {
    "default": "models/entity/krookodile.geo.json"
  },
  "textures": {
    "default": "textures/entity/krookodile.png"
  },
  "evolutions": []
};

export default krookodile;