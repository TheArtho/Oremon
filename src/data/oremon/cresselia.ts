import { OremonData } from "../../types/OremonData";

const cresselia: OremonData = {
  "id": "oremon:cresselia",
  "name": "oremon.cresselia.name",
  "description": "oremon.cresselia.description",
  "types": [
    "psychic"
  ],
  "baseStats": {
    "hp": 120,
    "atk": 70,
    "def": 120,
    "atk_spe": 75,
    "def_spe": 130,
    "spd": 85
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 3,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 8,
  "catchRate": 3,
  "eggGroups": [
    "no-eggs"
  ],
  "hatchCounter": 120,
  "height": 1.5,
  "weight": 85.6,
  "baseExperience": 270,
  "growthRateId": "slow",
  "generationId": 4,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Yellow",
  "model": {
    "default": "models/entity/cresselia.geo.json"
  },
  "textures": {
    "default": "textures/entity/cresselia.png"
  },
  "evolutions": []
};

export default cresselia;