import { OremonData } from "../../types/OremonData";

const abra: OremonData = {
  "id": "oremon:abra",
  "name": "oremon.abra.name",
  "description": "oremon.abra.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 25,
    "atk": 20,
    "def": 15,
    "atk_spe": 105,
    "def_spe": 55,
    "spd": 90
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
  "genderRate": 2,
  "catchRate": 200,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 19.5,
  "baseExperience": 62,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:kadabra",
      "method": "level-up",
      "conditions": {
        "minLevel": 16,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default abra;