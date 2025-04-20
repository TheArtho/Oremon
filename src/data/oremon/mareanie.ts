import { OremonData } from "../../types/OremonData";

const mareanie: OremonData = {
  "id": "oremon:mareanie",
  "name": "oremon.mareanie.name",
  "description": "oremon.mareanie.description",
  "types": [
    "poison",
    "water"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 53,
    "def": 62,
    "atk_spe": 43,
    "def_spe": 52,
    "spd": 45
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
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "water1"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 8,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 7,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Blue",
  "model": {
    "default": "models/entity/mareanie.geo.json"
  },
  "textures": {
    "default": "textures/entity/mareanie.png"
  },
  "evolutions": [
    {
      "into": "oremon:toxapex",
      "method": "level-up",
      "conditions": {
        "minLevel": 38,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default mareanie;