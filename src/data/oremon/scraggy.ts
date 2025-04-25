import { OremonData } from "../../types/OremonData";

const scraggy: OremonData = {
  "id": "oremon:scraggy",
  "name": "oremon.scraggy.name",
  "description": "oremon.scraggy.description",
  "types": [
    "dark",
    "fighting"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 75,
    "def": 70,
    "atk_spe": 35,
    "def_spe": 70,
    "spd": 48
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
  "catchRate": 180,
  "eggGroups": [
    "ground",
    "dragon"
  ],
  "hatchCounter": 15,
  "height": 0.6,
  "weight": 11.8,
  "baseExperience": 70,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:scrafty",
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
      "id": "fire-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "ice-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "thunder-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sand-attack",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "headbutt",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "low-kick",
      "method": "level_up",
      "level": 16
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
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "amnesia",
      "method": "egg",
      "level": 0
    },
    {
      "id": "high-jump-kick",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-slide",
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
      "id": "scary-face",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "feint-attack",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "feint-attack",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sludge-bomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "detect",
      "method": "egg",
      "level": 0
    },
    {
      "id": "swagger",
      "method": "level_up",
      "level": 12
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
      "id": "crunch",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "fake-out",
      "method": "egg",
      "level": 0
    },
    {
      "id": "torment",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "level_up",
      "level": 42
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "focus-punch",
      "method": "level_up",
      "level": 48
    },
    {
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "brick-break",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulk-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-dance",
      "method": "egg",
      "level": 0
    },
    {
      "id": "payback",
      "method": "level_up",
      "level": 20
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dark-pulse",
      "method": "machine",
      "level": 0
    },
    {
      "id": "drain-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "focus-blast",
      "method": "machine",
      "level": 0
    },
    {
      "id": "zen-headbutt",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-climb",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "stone-edge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "head-smash",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "smack-down",
      "method": "machine",
      "level": 0
    },
    {
      "id": "low-sweep",
      "method": "machine",
      "level": 0
    },
    {
      "id": "acid-spray",
      "method": "egg",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "chip-away",
      "method": "level_up",
      "level": 27
    },
    {
      "id": "quick-guard",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-tail",
      "method": "machine",
      "level": 0
    },
    {
      "id": "work-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "snarl",
      "method": "machine",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "power-up-punch",
      "method": "egg",
      "level": 0
    }
  ]
};

export default scraggy;
