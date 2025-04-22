import { OremonData } from "../../types/OremonData";

const morelull: OremonData = {
  "id": "oremon:morelull",
  "name": "oremon.morelull.name",
  "description": "oremon.morelull.description",
  "types": [
    "grass",
    "fairy"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 35,
    "def": 55,
    "atk_spe": 65,
    "def_spe": 75,
    "spd": 15
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
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.2,
  "weight": 1.5,
  "baseExperience": 57,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:shiinotic",
      "method": "level-up",
      "conditions": {
        "minLevel": 24,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default morelull;