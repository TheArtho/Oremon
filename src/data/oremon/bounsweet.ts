import { OremonData } from "../../types/OremonData";

const bounsweet: OremonData = {
  "id": "oremon:bounsweet",
  "name": "oremon.bounsweet.name",
  "description": "oremon.bounsweet.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 42,
    "atk": 30,
    "def": 38,
    "atk_spe": 30,
    "def_spe": 38,
    "spd": 32
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 8,
  "catchRate": 235,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 3.2,
  "baseExperience": 42,
  "growthRateId": "medium-slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:steenee",
      "method": "level-up",
      "conditions": {
        "minLevel": 18,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default bounsweet;