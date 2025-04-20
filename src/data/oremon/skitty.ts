import { OremonData } from "../../types/OremonData";

const skitty: OremonData = {
  "id": "oremon:skitty",
  "name": "oremon.skitty.name",
  "description": "oremon.skitty.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 45,
    "def": 45,
    "atk_spe": 35,
    "def_spe": 35,
    "spd": 50
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 1
  },
  "abilities": {},
  "genderRate": 6,
  "catchRate": 255,
  "eggGroups": [
    "ground",
    "fairy"
  ],
  "hatchCounter": 15,
  "height": 0.6,
  "weight": 11,
  "baseExperience": 52,
  "growthRateId": "fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Pink",
  "model": {
    "default": "models/entity/skitty.geo.json"
  },
  "textures": {
    "default": "textures/entity/skitty.png"
  },
  "evolutions": [
    {
      "into": "oremon:delcatty",
      "method": "use-item",
      "conditions": {
        "item": "item:81",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default skitty;