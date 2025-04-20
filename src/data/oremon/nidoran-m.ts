import { OremonData } from "../../types/OremonData";

const nidoran_m: OremonData = {
  "id": "oremon:nidoran-m",
  "name": "oremon.nidoran-m.name",
  "description": "oremon.nidoran-m.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 46,
    "atk": 57,
    "def": 40,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 50
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
  "genderRate": 0,
  "catchRate": 235,
  "eggGroups": [
    "monster",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 9,
  "baseExperience": 55,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Purple",
  "model": {
    "default": "models/entity/nidoran-m.geo.json"
  },
  "textures": {
    "default": "textures/entity/nidoran-m.png"
  },
  "evolutions": [
    {
      "into": "oremon:nidorino",
      "method": "level-up",
      "conditions": {
        "minLevel": 16,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default nidoran_m;