import { OremonData } from "../../types/OremonData";

const roselia: OremonData = {
  "id": "oremon:roselia",
  "name": "oremon.roselia.name",
  "description": "oremon.roselia.description",
  "types": [
    "grass",
    "poison"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 60,
    "def": 45,
    "atk_spe": 100,
    "def_spe": 80,
    "spd": 65
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
  "catchRate": 150,
  "eggGroups": [
    "fairy",
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.3,
  "weight": 2,
  "baseExperience": 140,
  "growthRateId": "medium-slow",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:roserade",
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
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-sting",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "pin-missile",
      "method": "egg",
      "level": 0
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "mega-drain",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "leech-seed",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "razor-leaf",
      "method": "egg",
      "level": 0
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "stun-spore",
      "method": "level_up",
      "level": 10
    },
    {
      "id": "sleep-powder",
      "method": "egg",
      "level": 0
    },
    {
      "id": "petal-dance",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "toxic",
      "method": "level_up",
      "level": 40
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
      "id": "mind-reader",
      "method": "egg",
      "level": 0
    },
    {
      "id": "cotton-spore",
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
      "id": "spikes",
      "method": "egg",
      "level": 0
    },
    {
      "id": "giga-drain",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "giga-drain",
      "method": "egg",
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
      "level": 31
    },
    {
      "id": "synthesis",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "synthesis",
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
      "id": "sunny-day",
      "method": "machine",
      "level": 0
    },
    {
      "id": "psych-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "shadow-ball",
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
      "id": "ingrain",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "aromatherapy",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "grass-whistle",
      "method": "level_up",
      "level": 22
    },
    {
      "id": "grass-whistle",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bullet-seed",
      "method": "egg",
      "level": 0
    },
    {
      "id": "magical-leaf",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "natural-gift",
      "method": "egg",
      "level": 0
    },
    {
      "id": "toxic-spikes",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "seed-bomb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "energy-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "leaf-storm",
      "method": "egg",
      "level": 0
    },
    {
      "id": "power-whip",
      "method": "egg",
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
      "level": 37
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

export default roselia;
