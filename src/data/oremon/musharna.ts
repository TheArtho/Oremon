import { OremonData } from "../../types/OremonData";

const musharna: OremonData = {
  "id": "oremon:musharna",
  "name": "oremon.musharna.name",
  "description": "oremon.musharna.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 116,
    "atk": 55,
    "def": 85,
    "atk_spe": 107,
    "def_spe": 95,
    "spd": 29
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
    "ground"
  ],
  "hatchCounter": 10,
  "height": 1.1,
  "weight": 60.5,
  "baseExperience": 170,
  "growthRateId": "fast",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Pink",
  "model": {
    "default": "models/entity/musharna.geo.json"
  },
  "textures": {
    "default": "textures/entity/musharna.png"
  },
  "evolutions": []
};

export default musharna;