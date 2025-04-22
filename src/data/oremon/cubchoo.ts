import { OremonData } from "../../types/OremonData";

const cubchoo: OremonData = {
  "id": "oremon:cubchoo",
  "name": "oremon.cubchoo.name",
  "description": "oremon.cubchoo.description",
  "types": [
    "ice"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 70,
    "def": 40,
    "atk_spe": 60,
    "def_spe": 40,
    "spd": 40
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
  "catchRate": 120,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 8.5,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:beartic",
      "method": "level-up",
      "conditions": {
        "minLevel": 37,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default cubchoo;