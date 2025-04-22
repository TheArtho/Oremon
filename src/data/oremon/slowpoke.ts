import { OremonData } from "../../types/OremonData";

const slowpoke: OremonData = {
  "id": "oremon:slowpoke",
  "name": "oremon.slowpoke.name",
  "description": "oremon.slowpoke.description",
  "types": [
    "water",
    "psychic"
  ],
  "baseStats": {
    "hp": 90,
    "atk": 65,
    "def": 65,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 15
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "monster",
    "water1"
  ],
  "hatchCounter": 20,
  "height": 1.2,
  "weight": 36,
  "baseExperience": 63,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:slowbro",
      "method": "level-up",
      "conditions": {
        "minLevel": 37,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:slowking",
      "method": "trade",
      "conditions": {
        "heldItem": "item:198",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default slowpoke;