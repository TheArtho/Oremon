import { OremonData } from "../../types/OremonData";

const pichu: OremonData = {
  "id": "oremon:pichu",
  "name": "oremon.pichu.name",
  "description": "oremon.pichu.description",
  "types": [
    "electric"
  ],
  "baseStats": {
    "hp": 20,
    "atk": 40,
    "def": 15,
    "atk_spe": 35,
    "def_spe": 35,
    "spd": 60
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
    "no-eggs"
  ],
  "hatchCounter": 10,
  "height": 0.3,
  "weight": 2,
  "baseExperience": 41,
  "growthRateId": "medium",
  "generationId": 2,
  "isBaby": true,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:pikachu",
      "method": "level-up",
      "conditions": {
        "minHappiness": 220,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "double-slap",
      "method": "egg",
      "level": 0
    },
    {
      "id": "thunder-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tail-whip",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "thunder-shock",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "thunderbolt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder-wave",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "thunder-wave",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bide",
      "method": "egg",
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
      "id": "flail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "reversal",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sweet-kiss",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "endure",
      "method": "egg",
      "level": 0
    },
    {
      "id": "charm",
      "method": "level_up",
      "level": 1
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
      "id": "present",
      "method": "egg",
      "level": 0
    },
    {
      "id": "frustration",
      "method": "machine",
      "level": 0
    },
    {
      "id": "encore",
      "method": "egg",
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
      "id": "fake-out",
      "method": "egg",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "charge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "wish",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tickle",
      "method": "egg",
      "level": 0
    },
    {
      "id": "volt-tackle",
      "method": "light-ball-egg",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "lucky-chant",
      "method": "egg",
      "level": 0
    },
    {
      "id": "nasty-plot",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "charge-beam",
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
      "id": "bestow",
      "method": "egg",
      "level": 0
    },
    {
      "id": "volt-switch",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wild-charge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "disarming-voice",
      "method": "egg",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "electric-terrain",
      "method": "egg",
      "level": 0
    }
  ]
};

export default pichu;
