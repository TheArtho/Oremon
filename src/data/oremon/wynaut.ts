import { OremonData } from "../../types/OremonData";

const wynaut: OremonData = {
  "id": "oremon:wynaut",
  "name": "oremon.wynaut.name",
  "description": "oremon.wynaut.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 95,
    "atk": 23,
    "def": 48,
    "atk_spe": 23,
    "def_spe": 48,
    "spd": 23
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
  "catchRate": 125,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 14,
  "baseExperience": 52,
  "growthRateId": "medium",
  "generationId": 3,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:wobbuffet",
      "method": "level-up",
      "conditions": {
        "minLevel": 15,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "counter",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "splash",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "destiny-bond",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "charm",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "safeguard",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "safeguard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "encore",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mirror-coat",
      "method": "level_up",
      "level": 15
    }
  ]
};

export default wynaut;
