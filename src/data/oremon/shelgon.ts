import { OremonData } from "../../types/OremonData";

const shelgon: OremonData = {
  "id": "oremon:shelgon",
  "name": "oremon.shelgon.name",
  "description": "oremon.shelgon.description",
  "types": [
    "dragon"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 95,
    "def": 100,
    "atk_spe": 60,
    "def_spe": 50,
    "spd": 50
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
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 1.1,
  "weight": 110.5,
  "baseExperience": 147,
  "growthRateId": "slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "White",
  "model": {
    "default": "models/entity/shelgon.geo.json"
  },
  "textures": {
    "default": "textures/entity/shelgon.png"
  },
  "evolutions": [
    {
      "into": "oremon:salamence",
      "method": "level-up",
      "conditions": {
        "minLevel": 50,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default shelgon;