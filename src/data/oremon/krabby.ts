import { OremonData } from "../../types/OremonData";

const krabby: OremonData = {
  "id": "oremon:krabby",
  "name": "oremon.krabby.name",
  "description": "oremon.krabby.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 30,
    "atk": 105,
    "def": 90,
    "atk_spe": 25,
    "def_spe": 25,
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
  "genderRate": 4,
  "catchRate": 225,
  "eggGroups": [
    "water3"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 6.5,
  "baseExperience": 65,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Red",
  "model": {
    "default": "models/entity/krabby.geo.json"
  },
  "textures": {
    "default": "textures/entity/krabby.png"
  },
  "evolutions": [
    {
      "into": "oremon:kingler",
      "method": "level-up",
      "conditions": {
        "minLevel": 28,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default krabby;