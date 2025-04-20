import { OremonData } from "../../types/OremonData";

const grimer: OremonData = {
  "id": "oremon:grimer",
  "name": "oremon.grimer.name",
  "description": "oremon.grimer.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 80,
    "atk": 80,
    "def": 50,
    "atk_spe": 40,
    "def_spe": 50,
    "spd": 25
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
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 0.9,
  "weight": 30,
  "baseExperience": 65,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Purple",
  "model": {
    "default": "models/entity/grimer.geo.json"
  },
  "textures": {
    "default": "textures/entity/grimer.png"
  },
  "evolutions": [
    {
      "into": "oremon:muk",
      "method": "level-up",
      "conditions": {
        "minLevel": 38,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default grimer;