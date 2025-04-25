import { OremonData } from "../../types/OremonData";

const foongus: OremonData = {
  "id": "oremon:foongus",
  "name": "oremon.foongus.name",
  "description": "oremon.foongus.description",
  "types": [
    "grass",
    "poison"
  ],
  "baseStats": {
    "hp": 69,
    "atk": 55,
    "def": 45,
    "atk_spe": 55,
    "def_spe": 55,
    "spd": 15
  },
  "evYield": {
    "hp": 1,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 190,
  "eggGroups": [
    "plant"
  ],
  "hatchCounter": 20,
  "height": 0.2,
  "weight": 1,
  "baseExperience": 59,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "arms",
  "color": "White",
  "evolutions": [
    {
      "into": "oremon:amoonguss",
      "method": "level-up",
      "conditions": {
        "minLevel": 39,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "body-slam",
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
      "level": 15
    },
    {
      "id": "growth",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "growth",
      "method": "egg",
      "level": 0
    },
    {
      "id": "solar-beam",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-powder",
      "method": "egg",
      "level": 0
    },
    {
      "id": "stun-spore",
      "method": "egg",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "level_up",
      "level": 32
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
      "id": "defense-curl",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bide",
      "method": "level_up",
      "level": 12
    },
    {
      "id": "spore",
      "method": "level_up",
      "level": 50
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
      "id": "feint-attack",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "sludge-bomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "giga-drain",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "endure",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rollout",
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
      "level": 24
    },
    {
      "id": "synthesis",
      "method": "level_up",
      "level": 35
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
      "id": "ingrain",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "astonish",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "gastro-acid",
      "method": "egg",
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
      "id": "rage-powder",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "clear-smog",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default foongus;
