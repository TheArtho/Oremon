import { OremonData } from "../../types/OremonData";

const whirlipede: OremonData = {
  "id": "oremon:whirlipede",
  "name": "oremon.whirlipede.name",
  "description": "oremon.whirlipede.description",
  "types": [
    "bug",
    "poison"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 55,
    "def": 99,
    "atk_spe": 40,
    "def_spe": 79,
    "spd": 47
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
  "catchRate": 120,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 15,
  "height": 1.2,
  "weight": 58.5,
  "baseExperience": 126,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "ball",
  "color": "Gray",
  "model": {
    "default": "models/entity/whirlipede.geo.json"
  },
  "textures": {
    "default": "textures/entity/whirlipede.png"
  },
  "evolutions": [
    {
      "into": "oremon:scolipede",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default whirlipede;