import { OremonData } from "../../types/OremonData";

const lotad: OremonData = {
  "id": "oremon:lotad",
  "name": "oremon.lotad.name",
  "description": "oremon.lotad.description",
  "types": [
    "water",
    "grass"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 30,
    "def": 30,
    "atk_spe": 40,
    "def_spe": 50,
    "spd": 30
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
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "water1",
    "plant"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 2.6,
  "baseExperience": 44,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Green",
  "model": {
    "default": "models/entity/lotad.geo.json"
  },
  "textures": {
    "default": "textures/entity/lotad.png"
  },
  "evolutions": [
    {
      "into": "oremon:lombre",
      "method": "level-up",
      "conditions": {
        "minLevel": 14,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default lotad;