import { OremonData } from "../../types/OremonData";

const nidoran_f: OremonData = {
  "id": "oremon:nidoran-f",
  "name": "oremon.nidoran-f.name",
  "description": "oremon.nidoran-f.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 55,
    "atk": 47,
    "def": 52,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 41
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 8,
  "catchRate": 235,
  "eggGroups": [
    "monster",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 7,
  "baseExperience": 55,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Blue",
  "model": {
    "default": "models/entity/nidoran-f.geo.json"
  },
  "textures": {
    "default": "textures/entity/nidoran-f.png"
  },
  "evolutions": [
    {
      "into": "oremon:nidorina",
      "method": "level-up",
      "conditions": {
        "minLevel": 16,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default nidoran_f;