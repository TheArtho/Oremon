import { OremonData } from "../../types/OremonData";

const paras: OremonData = {
  "id": "oremon:paras",
  "name": "oremon.paras.name",
  "description": "oremon.paras.description",
  "types": [
    "bug",
    "grass"
  ],
  "baseStats": {
    "hp": 35,
    "atk": 70,
    "def": 55,
    "atk_spe": 45,
    "def_spe": 55,
    "spd": 25
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
  "catchRate": 190,
  "eggGroups": [
    "bug",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 5.4,
  "baseExperience": 57,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Red",
  "evolutions": [
    {
      "into": "oremon:parasect",
      "method": "level-up",
      "conditions": {
        "minLevel": 24,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "scratch",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "psybeam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "counter",
      "method": "egg",
      "level": 0
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "leech-seed",
      "method": "egg",
      "level": 0
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-powder",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "stun-spore",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "agility",
      "method": "egg",
      "level": 0
    },
    {
      "id": "screech",
      "method": "egg",
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
      "id": "leech-life",
      "method": "machine",
      "level": 0
    },
    {
      "id": "spore",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "slash",
      "method": "level_up",
      "level": 27
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
      "id": "flail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sludge-bomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "giga-drain",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "endure",
      "method": "egg",
      "level": 0
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
      "level": 17
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
      "id": "pursuit",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sweet-scent",
      "method": "egg",
      "level": 0
    },
    {
      "id": "metal-claw",
      "method": "egg",
      "level": 0
    },
    {
      "id": "hidden-power",
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
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aromatherapy",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "natural-gift",
      "method": "egg",
      "level": 0
    },
    {
      "id": "x-scissor",
      "method": "level_up",
      "level": 54
    },
    {
      "id": "x-scissor",
      "method": "machine",
      "level": 0
    },
    {
      "id": "energy-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "cross-poison",
      "method": "egg",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bug-bite",
      "method": "egg",
      "level": 0
    },
    {
      "id": "wide-guard",
      "method": "egg",
      "level": 0
    },
    {
      "id": "venoshock",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rage-powder",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rototiller",
      "method": "egg",
      "level": 0
    },
    {
      "id": "fell-stinger",
      "method": "egg",
      "level": 0
    },
    {
      "id": "grassy-terrain",
      "method": "egg",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default paras;
