import { OremonData } from "../../types/OremonData";

const venipede: OremonData = {
  "id": "oremon:venipede",
  "name": "oremon.venipede.name",
  "description": "oremon.venipede.description",
  "types": [
    "bug",
    "poison"
  ],
  "baseStats": {
    "hp": 30,
    "atk": 45,
    "def": 59,
    "atk_spe": 30,
    "def_spe": 39,
    "spd": 57
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
  "catchRate": 255,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.4,
  "weight": 5.3,
  "baseExperience": 52,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:whirlipede",
      "method": "level-up",
      "conditions": {
        "minLevel": 22,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default venipede;