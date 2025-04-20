import { OremonData } from "../../types/OremonData";

const klink: OremonData = {
  "id": "oremon:klink",
  "name": "oremon.klink.name",
  "description": "oremon.klink.description",
  "types": [
    "steel"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 55,
    "def": 70,
    "atk_spe": 45,
    "def_spe": 60,
    "spd": 30
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": -1,
  "catchRate": 130,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 21,
  "baseExperience": 60,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "heads",
  "color": "Gray",
  "model": {
    "default": "models/entity/klink.geo.json"
  },
  "textures": {
    "default": "textures/entity/klink.png"
  },
  "evolutions": [
    {
      "into": "oremon:klang",
      "method": "level-up",
      "conditions": {
        "minLevel": 38,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default klink;