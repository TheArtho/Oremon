import { OremonData } from "../../types/OremonData";

const fennekin: OremonData = {
  "id": "oremon:fennekin",
  "name": "oremon.fennekin.name",
  "description": "oremon.fennekin.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 45,
    "def": 40,
    "atk_spe": 62,
    "def_spe": 60,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 9.4,
  "baseExperience": 61,
  "growthRateId": "medium-slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:braixen",
      "method": "level-up",
      "conditions": {
        "minLevel": 16,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default fennekin;