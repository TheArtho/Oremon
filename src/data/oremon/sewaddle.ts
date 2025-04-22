import { OremonData } from "../../types/OremonData";

const sewaddle: OremonData = {
  "id": "oremon:sewaddle",
  "name": "oremon.sewaddle.name",
  "description": "oremon.sewaddle.description",
  "types": [
    "bug",
    "grass"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 53,
    "def": 70,
    "atk_spe": 40,
    "def_spe": 60,
    "spd": 42
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
  "height": 0.3,
  "weight": 2.5,
  "baseExperience": 62,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:swadloon",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default sewaddle;