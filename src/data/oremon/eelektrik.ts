import { OremonData } from "../../types/OremonData";

const eelektrik: OremonData = {
  "id": "oremon:eelektrik",
  "name": "oremon.eelektrik.name",
  "description": "oremon.eelektrik.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 85,
    "def": 70,
    "atk_spe": 75,
    "def_spe": 70,
    "spd": 40
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 60,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 22,
  "baseExperience": 142,
  "growthRateId": "slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "fish",
  "color": "Blue",
  "model": {
    "default": "models/entity/eelektrik.geo.json"
  },
  "textures": {
    "default": "textures/entity/eelektrik.png"
  },
  "evolutions": [
    {
      "into": "oremon:eelektross",
      "method": "use-item",
      "conditions": {
        "item": "item:83",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default eelektrik;