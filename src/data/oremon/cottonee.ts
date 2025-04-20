import { OremonData } from "../../types/OremonData";

const cottonee: OremonData = {
  "id": "oremon:cottonee",
  "name": "oremon.cottonee.name",
  "description": "oremon.cottonee.description",
  "types": [
    "grass",
    "fairy"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 27,
    "def": 60,
    "atk_spe": 37,
    "def_spe": 50,
    "spd": 66
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
  "catchRate": 190,
  "eggGroups": [
    "fairy",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 0.6,
  "baseExperience": 56,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Green",
  "model": {
    "default": "models/entity/cottonee.geo.json"
  },
  "textures": {
    "default": "textures/entity/cottonee.png"
  },
  "evolutions": [
    {
      "into": "oremon:whimsicott",
      "method": "use-item",
      "conditions": {
        "item": "item:80",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default cottonee;