import { OremonData } from "../../types/OremonData";

const crawdaunt: OremonData = {
  "id": "oremon:crawdaunt",
  "name": "oremon.crawdaunt.name",
  "description": "oremon.crawdaunt.description",
  "types": [
    "water",
    "dark"
  ],
  "baseStats": {
    "hp": 63,
    "atk": 120,
    "def": 85,
    "atk_spe": 90,
    "def_spe": 55,
    "spd": 55
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 155,
  "eggGroups": [
    "water1",
    "water3"
  ],
  "hatchCounter": 15,
  "height": 1.1,
  "weight": 32.8,
  "baseExperience": 164,
  "growthRateId": "fast-then-very-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Red",
  "model": {
    "default": "models/entity/crawdaunt.geo.json"
  },
  "textures": {
    "default": "textures/entity/crawdaunt.png"
  },
  "evolutions": []
};

export default crawdaunt;