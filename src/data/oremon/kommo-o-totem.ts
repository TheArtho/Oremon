import { OremonData } from "../../types/OremonData";

const kommo_o_totem: OremonData = {
  "id": "oremon:kommo-o-totem",
  "name": "oremon.kommo-o-totem.name",
  "description": "oremon.kommo-o-totem.description",
  "types": [
    "dragon",
    "fighting"
  ],
  "baseStats": {
    "hp": 75,
    "atk": 110,
    "def": 125,
    "atk_spe": 100,
    "def_spe": 105,
    "spd": 85
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 3,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "eggGroups": [
    "dragon"
  ],
  "height": 2.4,
  "weight": 207.5,
  "baseExperience": 270,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "model": {
    "default": "models/entity/kommo-o-totem.geo.json"
  },
  "textures": {
    "default": "textures/entity/kommo-o-totem.png"
  },
  "evolutions": []
};

export default kommo_o_totem;