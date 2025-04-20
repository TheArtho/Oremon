import { OremonData } from "../../types/OremonData";

const combee: OremonData = {
  "id": "oremon:combee",
  "name": "oremon.combee.name",
  "description": "oremon.combee.description",
  "types": [
    "bug",
    "flying"
  ],
  "baseStats": {
    "hp": 30,
    "atk": 30,
    "def": 42,
    "atk_spe": 30,
    "def_spe": 42,
    "spd": 70
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
  "genderRate": 1,
  "catchRate": 120,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.3,
  "weight": 5.5,
  "baseExperience": 49,
  "growthRateId": "medium-slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "heads",
  "color": "Yellow",
  "model": {
    "default": "models/entity/combee.geo.json"
  },
  "textures": {
    "default": "textures/entity/combee.png"
  },
  "evolutions": [
    {
      "into": "oremon:vespiquen",
      "method": "level-up",
      "conditions": {
        "minLevel": 21,
        "gender": "female",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default combee;