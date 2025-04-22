import { OremonData } from "../../types/OremonData";

const seel: OremonData = {
  "id": "oremon:seel",
  "name": "oremon.seel.name",
  "description": "oremon.seel.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 45,
    "def": 55,
    "atk_spe": 45,
    "def_spe": 70,
    "spd": 45
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "water1",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.1,
  "weight": 90,
  "baseExperience": 65,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "fish",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:dewgong",
      "method": "level-up",
      "conditions": {
        "minLevel": 34,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default seel;