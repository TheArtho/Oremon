import { OremonData } from "../../types/OremonData";

const omanyte: OremonData = {
  "id": "oremon:omanyte",
  "name": "oremon.omanyte.name",
  "description": "oremon.omanyte.description",
  "types": [
    "rock",
    "water"
  ],
  "baseStats": {
    "hp": 35,
    "atk": 40,
    "def": 100,
    "atk_spe": 90,
    "def_spe": 55,
    "spd": 35
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "water1",
    "water3"
  ],
  "hatchCounter": 30,
  "height": 0.4,
  "weight": 7.5,
  "baseExperience": 71,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "tentacles",
  "color": "Blue",
  "model": {
    "default": "models/entity/omanyte.geo.json"
  },
  "textures": {
    "default": "textures/entity/omanyte.png"
  },
  "evolutions": [
    {
      "into": "oremon:omastar",
      "method": "level-up",
      "conditions": {
        "minLevel": 40,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default omanyte;