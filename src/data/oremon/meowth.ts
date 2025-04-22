import { OremonData } from "../../types/OremonData";

const meowth: OremonData = {
  "id": "oremon:meowth",
  "name": "oremon.meowth.name",
  "description": "oremon.meowth.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 45,
    "def": 35,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 90
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
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 4.2,
  "baseExperience": 58,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:persian",
      "method": "level-up",
      "conditions": {
        "minLevel": 28,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default meowth;