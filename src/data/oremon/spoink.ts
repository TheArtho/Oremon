import { OremonData } from "../../types/OremonData";

const spoink: OremonData = {
  "id": "oremon:spoink",
  "name": "oremon.spoink.name",
  "description": "oremon.spoink.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 25,
    "def": 35,
    "atk_spe": 70,
    "def_spe": 80,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 255,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 20,
  "height": 0.7,
  "weight": 30.6,
  "baseExperience": 66,
  "growthRateId": "fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "Black",
  "model": {
    "default": "models/entity/spoink.geo.json"
  },
  "textures": {
    "default": "textures/entity/spoink.png"
  },
  "evolutions": [
    {
      "into": "oremon:grumpig",
      "method": "level-up",
      "conditions": {
        "minLevel": 32,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default spoink;