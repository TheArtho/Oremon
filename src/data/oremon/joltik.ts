import { OremonData } from "../../types/OremonData";

const joltik: OremonData = {
  "id": "oremon:joltik",
  "name": "oremon.joltik.name",
  "description": "oremon.joltik.description",
  "types": [
    "bug",
    "electric"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 47,
    "def": 50,
    "atk_spe": 57,
    "def_spe": 50,
    "spd": 65
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
  "catchRate": 190,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 20,
  "height": 0.1,
  "weight": 0.6,
  "baseExperience": 64,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Yellow",
  "model": {
    "default": "models/entity/joltik.geo.json"
  },
  "textures": {
    "default": "textures/entity/joltik.png"
  },
  "evolutions": [
    {
      "into": "oremon:galvantula",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ]
};

export default joltik;