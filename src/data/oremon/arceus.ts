import { OremonData } from "../../types/OremonData";

const arceus: OremonData = {
  "id": "oremon:arceus",
  "name": "oremon.arceus.name",
  "description": "oremon.arceus.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 120,
    "atk": 120,
    "def": 120,
    "atk_spe": 120,
    "def_spe": 120,
    "spd": 120
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
  "height": 3.2,
  "weight": 320,
  "baseExperience": 324,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": true,
  "shape": "quadruped",
  "color": "White",
  "model": {
    "default": "models/entity/arceus.geo.json"
  },
  "textures": {
    "default": "textures/entity/arceus.png"
  },
  "evolutions": []
};

export default arceus;