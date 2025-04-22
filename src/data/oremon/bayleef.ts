import { OremonData } from "../../types/OremonData";

const bayleef: OremonData = {
  "id": "oremon:bayleef",
  "name": "oremon.bayleef.name",
  "description": "oremon.bayleef.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 62,
    "def": 80,
    "atk_spe": 63,
    "def_spe": 80,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "monster",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 15.8,
  "baseExperience": 142,
  "growthRateId": "medium-slow",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:meganium",
      "method": "level-up",
      "conditions": {
        "minLevel": 32,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default bayleef;