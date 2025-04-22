import { OremonData } from "../../types/OremonData";

const aron: OremonData = {
  "id": "oremon:aron",
  "name": "oremon.aron.name",
  "description": "oremon.aron.description",
  "types": [
    "steel",
    "rock"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 70,
    "def": 100,
    "atk_spe": 40,
    "def_spe": 40,
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
  "genderRate": 4,
  "catchRate": 180,
  "eggGroups": [
    "monster"
  ],
  "hatchCounter": 35,
  "height": 0.4,
  "weight": 60,
  "baseExperience": 66,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:lairon",
      "method": "level-up",
      "conditions": {
        "minLevel": 32,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default aron;