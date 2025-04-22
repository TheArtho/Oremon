import { OremonData } from "../../types/OremonData";

const charjabug: OremonData = {
  "id": "oremon:charjabug",
  "name": "oremon.charjabug.name",
  "description": "oremon.charjabug.description",
  "types": [
    "bug",
    "electric"
  ],
  "baseStats": {
    "hp": 57,
    "atk": 82,
    "def": 95,
    "atk_spe": 55,
    "def_spe": 75,
    "spd": 36
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 10.5,
  "baseExperience": 140,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:vikavolt",
      "method": "level-up",
      "conditions": {
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default charjabug;