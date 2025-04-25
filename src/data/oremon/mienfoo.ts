import { OremonData } from "../../types/OremonData";

const mienfoo: OremonData = {
  "id": "oremon:mienfoo",
  "name": "oremon.mienfoo.name",
  "description": "oremon.mienfoo.description",
  "types": [
    "fighting"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 85,
    "def": 50,
    "atk_spe": 55,
    "def_spe": 50,
    "spd": 65
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
    "humanshape"
  ],
  "hatchCounter": 25,
  "height": 0.9,
  "weight": 20,
  "baseExperience": 70,
  "growthRateId": "medium-slow",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:mienshao",
      "method": "level-up",
      "conditions": {
        "minLevel": 50,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "pound",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "double-slap",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "swords-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "jump-kick",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "low-kick",
      "method": "egg",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "meditate",
      "method": "level_up",
      "level": 5
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
      "id": "swift",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "high-jump-kick",
      "method": "level_up",
      "level": 50
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
      "id": "reversal",
      "method": "level_up",
      "level": 57
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "detect",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "endure",
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
      "id": "baton-pass",
      "method": "egg",
      "level": 0
    },
    {
      "id": "vital-throw",
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
      "id": "fake-out",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "smelling-salts",
      "method": "egg",
      "level": 0
    },
    {
      "id": "taunt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "knock-off",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulk-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bounce",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "calm-mind",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "feint",
      "method": "egg",
      "level": 0
    },
    {
      "id": "u-turn",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "u-turn",
      "method": "machine",
      "level": 0
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
      "id": "me-first",
      "method": "egg",
      "level": 0
    },
    {
      "id": "force-palm",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "aura-sphere",
      "method": "level_up",
      "level": 61
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "drain-punch",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "focus-blast",
      "method": "machine",
      "level": 0
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
      "id": "low-sweep",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "quick-guard",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "ally-switch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "acrobatics",
      "method": "machine",
      "level": 0
    },
    {
      "id": "work-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default mienfoo;
