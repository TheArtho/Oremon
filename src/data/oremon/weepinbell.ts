import { OremonData } from "../../types/OremonData";

const weepinbell: OremonData = {
  "id": "oremon:weepinbell",
  "name": "oremon.weepinbell.name",
  "description": "oremon.weepinbell.description",
  "types": [
    "grass",
    "poison"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 90,
    "def": 50,
    "atk_spe": 85,
    "def_spe": 45,
    "spd": 55
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
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
  "height": 1,
  "weight": 6.4,
  "baseExperience": 137,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:victreebel",
      "method": "use-item",
      "conditions": {
        "item": "item:85",
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
      "id": "slam",
      "method": "level_up",
      "level": 54
    },
    {
      "id": "vine-whip",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "wrap",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "wrap",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "acid",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "razor-leaf",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-powder",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "stun-spore",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "sleep-powder",
      "method": "level_up",
      "level": 13
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
      "id": "reflect",
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
      "id": "thief",
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
      "level": 32
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
      "id": "knock-off",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "wring-out",
      "method": "level_up",
      "level": 58
    },
    {
      "id": "gastro-acid",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "poison-jab",
      "method": "level_up",
      "level": 47
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
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
      "id": "confide",
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

export default weepinbell;
