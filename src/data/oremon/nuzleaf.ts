import { OremonData } from "../../types/OremonData";

const nuzleaf: OremonData = {
  "id": "oremon:nuzleaf",
  "name": "oremon.nuzleaf.name",
  "description": "oremon.nuzleaf.description",
  "types": [
    "grass",
    "dark"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 70,
    "def": 40,
    "atk_spe": 60,
    "def_spe": 40,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "ground",
    "plant"
  ],
  "hatchCounter": 15,
  "height": 1,
  "weight": 28,
  "baseExperience": 119,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Brown",
  "model": {
    "default": "models/entity/nuzleaf.geo.json"
  },
  "textures": {
    "default": "textures/entity/nuzleaf.png"
  },
  "evolutions": [
    {
      "into": "oremon:shiftry",
      "method": "use-item",
      "conditions": {
        "item": "item:85",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default nuzleaf;