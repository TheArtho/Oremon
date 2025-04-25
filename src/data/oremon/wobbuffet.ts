import { OremonData } from "../../types/OremonData";

const wobbuffet: OremonData = {
  "id": "oremon:wobbuffet",
  "name": "oremon.wobbuffet.name",
  "description": "oremon.wobbuffet.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 190,
    "atk": 33,
    "def": 58,
    "atk_spe": 33,
    "def_spe": 58,
    "spd": 33
  },
  "evYield": {
    "hp": 2,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "indeterminate"
  ],
  "hatchCounter": 20,
  "height": 1.3,
  "weight": 28.5,
  "baseExperience": 142,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Blue",
  "evolutions": [],
  "moves": [
    {
      "id": "counter",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "destiny-bond",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "safeguard",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "safeguard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mirror-coat",
      "method": "level_up",
      "level": 1
    }
  ]
};

export default wobbuffet;
