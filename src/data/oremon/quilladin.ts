import { OremonData } from "../../types/OremonData";

const quilladin: OremonData = {
  "id": "oremon:quilladin",
  "name": "oremon.quilladin.name",
  "description": "oremon.quilladin.description",
  "types": [
    "grass"
  ],
  "baseStats": {
    "hp": 61,
    "atk": 78,
    "def": 95,
    "atk_spe": 56,
    "def_spe": 58,
    "spd": 57
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 2,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 29,
  "baseExperience": 142,
  "growthRateId": "medium-slow",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Green",
  "model": {
    "default": "models/entity/quilladin.geo.json"
  },
  "textures": {
    "default": "textures/entity/quilladin.png"
  },
  "evolutions": [
    {
      "into": "oremon:chesnaught",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default quilladin;