import { OremonData } from "../../types/OremonData";

const flabebe: OremonData = {
  "id": "oremon:flabebe",
  "name": "oremon.flabebe.name",
  "description": "oremon.flabebe.description",
  "types": [
    "fairy"
  ],
  "baseStats": {
    "hp": 44,
    "atk": 38,
    "def": 39,
    "atk_spe": 61,
    "def_spe": 79,
    "spd": 42
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
  "genderRate": 8,
  "catchRate": 225,
  "eggGroups": [
    "fairy"
  ],
  "hatchCounter": 20,
  "height": 0.1,
  "weight": 0.1,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "White",
  "model": {
    "default": "models/entity/flabebe.geo.json"
  },
  "textures": {
    "default": "textures/entity/flabebe.png"
  },
  "evolutions": [
    {
      "into": "oremon:floette",
      "method": "level-up",
      "conditions": {
        "minLevel": 19,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default flabebe;