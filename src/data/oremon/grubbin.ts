import { OremonData } from "../../types/OremonData";

const grubbin: OremonData = {
  "id": "oremon:grubbin",
  "name": "oremon.grubbin.name",
  "description": "oremon.grubbin.description",
  "types": [
    "bug"
  ],
  "baseStats": {
    "hp": 47,
    "atk": 62,
    "def": 45,
    "atk_spe": 55,
    "def_spe": 45,
    "spd": 46
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
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
  "weight": 4.4,
  "baseExperience": 60,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:charjabug",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default grubbin;