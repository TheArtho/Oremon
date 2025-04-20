import { OremonData } from "../../types/OremonData";

const sigilyph: OremonData = {
  "id": "oremon:sigilyph",
  "name": "oremon.sigilyph.name",
  "description": "oremon.sigilyph.description",
  "types": [
    "psychic",
    "flying"
  ],
  "baseStats": {
    "hp": 72,
    "atk": 58,
    "def": 80,
    "atk_spe": 103,
    "def_spe": 80,
    "spd": 97
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 2,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "flying"
  ],
  "hatchCounter": 20,
  "height": 1.4,
  "weight": 14,
  "baseExperience": 172,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Black",
  "model": {
    "default": "models/entity/sigilyph.geo.json"
  },
  "textures": {
    "default": "textures/entity/sigilyph.png"
  },
  "evolutions": []
};

export default sigilyph;