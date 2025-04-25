import { OremonData } from "../../types/OremonData";

const scyther: OremonData = {
  "id": "oremon:scyther",
  "name": "oremon.scyther.name",
  "description": "oremon.scyther.description",
  "types": [
    "bug",
    "flying"
  ],
  "baseStats": {
    "hp": 70,
    "atk": 110,
    "def": 80,
    "atk_spe": 55,
    "def_spe": 80,
    "spd": 105
  },
  "evYield": {
    "hp": 0,
    "atk": 1,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 45,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 25,
  "height": 1.5,
  "weight": 56,
  "baseExperience": 100,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "bug wings",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:scizor",
      "method": "trade",
      "conditions": {
        "heldItem": "item:210",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "razor-wind",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "razor-wind",
      "method": "egg",
      "level": 0
    },
    {
      "id": "swords-dance",
      "method": "level_up",
      "level": 57
    },
    {
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wing-attack",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "hyper-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "counter",
      "method": "egg",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "agility",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "quick-attack",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "double-team",
      "method": "level_up",
      "level": 37
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
      "id": "focus-energy",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "slash",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "substitute",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thief",
      "method": "machine",
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
      "id": "endure",
      "method": "egg",
      "level": 0
    },
    {
      "id": "false-swipe",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "false-swipe",
      "method": "machine",
      "level": 0
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fury-cutter",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "steel-wing",
      "method": "egg",
      "level": 0
    },
    {
      "id": "steel-wing",
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
      "id": "baton-pass",
      "method": "egg",
      "level": 0
    },
    {
      "id": "pursuit",
      "method": "level_up",
      "level": 9
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
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "silver-wind",
      "method": "egg",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "roost",
      "method": "machine",
      "level": 0
    },
    {
      "id": "feint",
      "method": "level_up",
      "level": 61
    },
    {
      "id": "u-turn",
      "method": "machine",
      "level": 0
    },
    {
      "id": "night-slash",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "night-slash",
      "method": "egg",
      "level": 0
    },
    {
      "id": "air-slash",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "x-scissor",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "x-scissor",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bug-buzz",
      "method": "egg",
      "level": 0
    },
    {
      "id": "vacuum-wave",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "giga-impact",
      "method": "machine",
      "level": 0
    },
    {
      "id": "defog",
      "method": "egg",
      "level": 0
    },
    {
      "id": "double-hit",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "quick-guard",
      "method": "egg",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "brutal-swing",
      "method": "machine",
      "level": 0
    }
  ]
};

export default scyther;
