import { OremonData } from "../../types/OremonData";

const gloom: OremonData = {
  "id": "oremon:gloom",
  "name": "oremon.gloom.name",
  "description": "oremon.gloom.description",
  "types": [
    "grass",
    "poison"
  ],
  "baseStats": {
    "hp": 60,
    "atk": 65,
    "def": 70,
    "atk_spe": 85,
    "def_spe": 75,
    "spd": 40
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
  "catchRate": 120,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.8,
  "weight": 8.6,
  "baseExperience": 138,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:vileplume",
      "method": "use-item",
      "conditions": {
        "item": "item:85",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:bellossom",
      "method": "use-item",
      "conditions": {
        "item": "item:80",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "acid",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "acid",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mega-drain",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-powder",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "stun-spore",
      "method": "level_up",
      "level": 14
    },
    {
      "id": "sleep-powder",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "petal-dance",
      "method": "level_up",
      "level": 59
    },
    {
      "id": "toxic",
      "method": "level_up",
      "level": 39
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
      "id": "sludge-bomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "giga-drain",
      "method": "level_up",
      "level": 34
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
      "id": "sweet-scent",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "sweet-scent",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "moonlight",
      "method": "level_up",
      "level": 29
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
      "id": "natural-gift",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "lucky-chant",
      "method": "level_up",
      "level": 24
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
      "id": "venoshock",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "petal-blizzard",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "grassy-terrain",
      "method": "level_up",
      "level": 54
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
    },
    {
      "id": "infestation",
      "method": "machine",
      "level": 0
    }
  ]
};

export default gloom;
