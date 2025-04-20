import { OremonData } from "../../types/OremonData";

const teddiursa: OremonData = {
  "id": "oremon:teddiursa",
  "name": "oremon.teddiursa.name",
  "description": "oremon.teddiursa.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 80,
    "def": 50,
    "atk_spe": 50,
    "def_spe": 50,
    "spd": 40
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
  "catchRate": 120,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 8.8,
  "baseExperience": 66,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Brown",
  "model": {
    "default": "models/entity/teddiursa.geo.json"
  },
  "textures": {
    "default": "textures/entity/teddiursa.png"
  },
  "evolutions": [
    {
      "into": "oremon:ursaring",
      "method": "level-up",
      "conditions": {
        "minLevel": 30,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default teddiursa;