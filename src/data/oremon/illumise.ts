import { OremonData } from "../../types/OremonData";

const illumise: OremonData = {
  "id": "oremon:illumise",
  "name": "oremon.illumise.name",
  "description": "oremon.illumise.description",
  "types": [
    "bug"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 47,
    "def": 75,
    "atk_spe": 73,
    "def_spe": 85,
    "spd": 85
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 8,
  "catchRate": 150,
  "eggGroups": [
    "bug",
    "humanshape"
  ],
  "hatchCounter": 15,
  "height": 0.6,
  "weight": 17.7,
  "baseExperience": 151,
  "growthRateId": "fast-then-very-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Purple",
  "model": {
    "default": "models/entity/illumise.geo.json"
  },
  "textures": {
    "default": "textures/entity/illumise.png"
  },
  "evolutions": []
};

export default illumise;