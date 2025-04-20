import { OremonData } from "../../types/OremonData";

const dragonair: OremonData = {
  "id": "oremon:dragonair",
  "name": "oremon.dragonair.name",
  "description": "oremon.dragonair.description",
  "types": [
    "dragon"
  ],
  "baseStats": {
    "hp": 61,
    "atk": 84,
    "def": 65,
    "atk_spe": 70,
    "def_spe": 70,
    "spd": 70
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
  "catchRate": 45,
  "eggGroups": [
    "water1",
    "dragon"
  ],
  "hatchCounter": 40,
  "height": 4,
  "weight": 16.5,
  "baseExperience": 147,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Blue",
  "model": {
    "default": "models/entity/dragonair.geo.json"
  },
  "textures": {
    "default": "textures/entity/dragonair.png"
  },
  "evolutions": [
    {
      "into": "oremon:dragonite",
      "method": "level-up",
      "conditions": {
        "minLevel": 55,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default dragonair;