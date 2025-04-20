import { OremonData } from "../../types/OremonData";

const exeggcute: OremonData = {
  "id": "oremon:exeggcute",
  "name": "oremon.exeggcute.name",
  "description": "oremon.exeggcute.description",
  "types": [
    "grass",
    "psychic"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 40,
    "def": 80,
    "atk_spe": 60,
    "def_spe": 45,
    "spd": 40
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
  "catchRate": 90,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 2.5,
  "baseExperience": 65,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "heads",
  "color": "Pink",
  "model": {
    "default": "models/entity/exeggcute.geo.json"
  },
  "textures": {
    "default": "textures/entity/exeggcute.png"
  },
  "evolutions": [
    {
      "into": "oremon:exeggutor",
      "method": "use-item",
      "conditions": {
        "item": "item:85",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default exeggcute;