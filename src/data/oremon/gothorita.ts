import { OremonData } from "../../types/OremonData";

const gothorita: OremonData = {
  "id": "oremon:gothorita",
  "name": "oremon.gothorita.name",
  "description": "oremon.gothorita.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 45,
    "def": 70,
    "atk_spe": 75,
    "def_spe": 85,
    "spd": 55
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 2,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 6,
  "catchRate": 100,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 18,
  "baseExperience": 137,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:gothitelle",
      "method": "level-up",
      "conditions": {
        "minLevel": 41,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default gothorita;