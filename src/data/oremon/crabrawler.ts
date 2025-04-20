import { OremonData } from "../../types/OremonData";

const crabrawler: OremonData = {
  "id": "oremon:crabrawler",
  "name": "oremon.crabrawler.name",
  "description": "oremon.crabrawler.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 47,
    "atk": 82,
    "def": 57,
    "atk_spe": 42,
    "def_spe": 47,
    "spd": 63
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
  "catchRate": 225,
  "eggGroups": [
    "water3"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 7,
  "baseExperience": 68,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Purple",
  "model": {
    "default": "models/entity/crabrawler.geo.json"
  },
  "textures": {
    "default": "textures/entity/crabrawler.png"
  },
  "evolutions": [
    {
      "into": "oremon:crabominable",
      "method": "level-up",
      "conditions": {
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default crabrawler;