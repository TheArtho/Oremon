import { OremonData } from "../../types/OremonData";

const anorith: OremonData = {
  "id": "oremon:anorith",
  "name": "oremon.anorith.name",
  "description": "oremon.anorith.description",
  "types": [
    "rock",
    "bug"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 95,
    "def": 50,
    "atk_spe": 40,
    "def_spe": 50,
    "spd": 75
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
  "genderRate": 1,
  "catchRate": 45,
  "eggGroups": [
    "water3"
  ],
  "hatchCounter": 30,
  "height": 0.7,
  "weight": 12.5,
  "baseExperience": 71,
  "growthRateId": "slow-then-very-fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Gray",
  "model": {
    "default": "models/entity/anorith.geo.json"
  },
  "textures": {
    "default": "textures/entity/anorith.png"
  },
  "evolutions": [
    {
      "into": "oremon:armaldo",
      "method": "level-up",
      "conditions": {
        "minLevel": 40,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default anorith;