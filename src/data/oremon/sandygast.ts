import { OremonData } from "../../types/OremonData";

const sandygast: OremonData = {
  "id": "oremon:sandygast",
  "name": "oremon.sandygast.name",
  "description": "oremon.sandygast.description",
  "types": [
    "ghost",
    "ground"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 55,
    "def": 80,
    "atk_spe": 70,
    "def_spe": 45,
    "spd": 15
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 1,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 140,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 70,
  "baseExperience": 64,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Brown",
  "model": {
    "default": "models/entity/sandygast.geo.json"
  },
  "textures": {
    "default": "textures/entity/sandygast.png"
  },
  "evolutions": [
    {
      "into": "oremon:palossand",
      "method": "level-up",
      "conditions": {
        "minLevel": 42,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default sandygast;