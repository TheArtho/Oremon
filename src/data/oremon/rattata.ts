import { OremonData } from "../../types/OremonData";

const rattata: OremonData = {
  "id": "oremon:rattata",
  "name": "oremon.rattata.name",
  "description": "oremon.rattata.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 30,
    "atk": 56,
    "def": 35,
    "atk_spe": 25,
    "def_spe": 35,
    "spd": 72
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
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 15,
  "height": 0.3,
  "weight": 3.5,
  "baseExperience": 51,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Purple",
  "model": {
    "default": "models/entity/rattata.geo.json"
  },
  "textures": {
    "default": "textures/entity/rattata.png"
  },
  "evolutions": [
    {
      "into": "oremon:raticate",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default rattata;