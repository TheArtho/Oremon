import { OremonData } from "../../types/OremonData";

const mienfoo: OremonData = {
  "id": "oremon:mienfoo",
  "name": "oremon.mienfoo.name",
  "description": "oremon.mienfoo.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 85,
    "def": 50,
    "atk_spe": 55,
    "def_spe": 50,
    "spd": 65
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
  "catchRate": 180,
  "eggGroups": [
    "ground",
    "humanshape"
  ],
  "hatchCounter": 25,
  "height": 0.9,
  "weight": 20,
  "baseExperience": 70,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Yellow",
  "model": {
    "default": "models/entity/mienfoo.geo.json"
  },
  "textures": {
    "default": "textures/entity/mienfoo.png"
  },
  "evolutions": [
    {
      "into": "oremon:mienshao",
      "method": "level-up",
      "conditions": {
        "minLevel": 50,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default mienfoo;