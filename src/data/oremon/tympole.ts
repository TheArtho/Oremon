import { OremonData } from "../../types/OremonData";

const tympole: OremonData = {
  "id": "oremon:tympole",
  "name": "oremon.tympole.name",
  "description": "oremon.tympole.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 50,
    "def": 40,
    "atk_spe": 50,
    "def_spe": 40,
    "spd": 64
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
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "water1"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 4.5,
  "baseExperience": 59,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:palpitoad",
      "method": "level-up",
      "conditions": {
        "minLevel": 25,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default tympole;