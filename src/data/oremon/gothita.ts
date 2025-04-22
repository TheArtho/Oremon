import { OremonData } from "../../types/OremonData";

const gothita: OremonData = {
  "id": "oremon:gothita",
  "name": "oremon.gothita.name",
  "description": "oremon.gothita.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 30,
    "def": 50,
    "atk_spe": 55,
    "def_spe": 65,
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
  "genderRate": 6,
  "catchRate": 200,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 5.8,
  "baseExperience": 58,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:gothorita",
      "method": "level-up",
      "conditions": {
        "minLevel": 32,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default gothita;