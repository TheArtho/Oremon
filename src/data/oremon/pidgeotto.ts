import { OremonData } from "../../types/OremonData";

const pidgeotto: OremonData = {
  "id": "oremon:pidgeotto",
  "name": "oremon.pidgeotto.name",
  "description": "oremon.pidgeotto.description",
  "types": [
    "normal",
    "flying"
  ],
  "baseStats": {
    "hp": 63,
    "atk": 60,
    "def": 55,
    "atk_spe": 50,
    "def_spe": 50,
    "spd": 71
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 15,
  "height": 1.1,
  "weight": 30,
  "baseExperience": 122,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Brown",
  "model": {
    "default": "models/entity/pidgeotto.geo.json"
  },
  "textures": {
    "default": "textures/entity/pidgeotto.png"
  },
  "evolutions": [
    {
      "into": "oremon:pidgeot",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default pidgeotto;