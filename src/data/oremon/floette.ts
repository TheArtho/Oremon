import { OremonData } from "../../types/OremonData";

const floette: OremonData = {
  "id": "oremon:floette",
  "name": "oremon.floette.name",
  "description": "oremon.floette.description",
  "types": [
    "fairy"
  ],
  "baseStats": {
    "hp": 54,
    "atk": 45,
    "def": 47,
    "atk_spe": 75,
    "def_spe": 98,
    "spd": 52
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 2,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 8,
  "catchRate": 120,
  "eggGroups": [
    "fairy"
  ],
  "hatchCounter": 20,
  "height": 0.2,
  "weight": 0.9,
  "baseExperience": 130,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:florges",
      "method": "use-item",
      "conditions": {
        "item": "item:107",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "vine-whip",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "razor-leaf",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "solar-beam",
      "method": "level_up",
      "level": 58
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "petal-dance",
      "method": "level_up",
      "level": 51
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "psychic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "substitute",
      "method": "machine",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "attract",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sleep-talk",
      "method": "machine",
      "level": 0
    },
    {
      "id": "return",
      "method": "machine",
      "level": 0
    },
    {
      "id": "frustration",
      "method": "machine",
      "level": 0
    },
    {
      "id": "safeguard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rain-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sunny-day",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "nature-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wish",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "aromatherapy",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "magical-leaf",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "lucky-chant",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "energy-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "echoed-voice",
      "method": "machine",
      "level": 0
    },
    {
      "id": "petal-blizzard",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "grassy-terrain",
      "method": "level_up",
      "level": 27
    },
    {
      "id": "misty-terrain",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "fairy-wind",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "fairy-wind",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "moonblast",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dazzling-gleam",
      "method": "machine",
      "level": 0
    }
  ]
};

export default floette;
