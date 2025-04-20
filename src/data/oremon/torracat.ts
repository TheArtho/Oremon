import { OremonData } from "../../types/OremonData";

const torracat: OremonData = {
  "id": "oremon:torracat",
  "name": "oremon.torracat.name",
  "description": "oremon.torracat.description",
  "types": [
    "fire"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 85,
    "def": 50,
    "atk_spe": 80,
    "def_spe": 50,
    "spd": 90
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 15,
  "height": 0.7,
  "weight": 25,
  "baseExperience": 147,
  "growthRateId": "medium-slow",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Red",
  "model": {
    "default": "models/entity/torracat.geo.json"
  },
  "textures": {
    "default": "textures/entity/torracat.png"
  },
  "evolutions": [
    {
      "into": "oremon:incineroar",
      "method": "level-up",
      "conditions": {
        "minLevel": 34,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default torracat;