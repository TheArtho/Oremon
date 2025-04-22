import { OremonData } from "../../types/OremonData";

const wartortle: OremonData = {
  "id": "oremon:wartortle",
  "name": "oremon.wartortle.name",
  "description": "oremon.wartortle.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 59,
    "atk": 63,
    "def": 80,
    "atk_spe": 65,
    "def_spe": 80,
    "spd": 58
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
    "water1"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 22.5,
  "baseExperience": 142,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:blastoise",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default wartortle;