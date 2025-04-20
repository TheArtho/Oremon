import { OremonData } from "../../types/OremonData";

const geodude: OremonData = {
  "id": "oremon:geodude",
  "name": "oremon.geodude.name",
  "description": "oremon.geodude.description",
  "types": [
    "rock",
    "ground"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 80,
    "def": 100,
    "atk_spe": 30,
    "def_spe": 30,
    "spd": 20
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
  "catchRate": 255,
  "eggGroups": [
    "mineral"
  ],
  "hatchCounter": 15,
  "height": 0.4,
  "weight": 20,
  "baseExperience": 60,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Brown",
  "model": {
    "default": "models/entity/geodude.geo.json"
  },
  "textures": {
    "default": "textures/entity/geodude.png"
  },
  "evolutions": [
    {
      "into": "oremon:graveler",
      "method": "level-up",
      "conditions": {
        "minLevel": 25,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default geodude;