import { OremonData } from "../../types/OremonData";

const meditite: OremonData = {
  "id": "oremon:meditite",
  "name": "oremon.meditite.name",
  "description": "oremon.meditite.description",
  "types": [
    "fighting",
    "psychic"
  ],
  "baseStats": {
    "hp": 30,
    "atk": 40,
    "def": 55,
    "atk_spe": 40,
    "def_spe": 55,
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
  "catchRate": 180,
  "eggGroups": [
    "humanshape"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 11.2,
  "baseExperience": 56,
  "growthRateId": "medium",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:medicham",
      "method": "level-up",
      "conditions": {
        "minLevel": 37,
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
      "id": "counter",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "confusion",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "psychic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "meditate",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "recover",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "reflect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bide",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "high-jump-kick",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "dream-eater",
      "method": "machine",
      "level": 0
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
      "id": "mind-reader",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "reversal",
      "method": "level_up",
      "level": 39
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "foresight",
      "method": "egg",
      "level": 0
    },
    {
      "id": "detect",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "endure",
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
      "id": "dynamic-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "baton-pass",
      "method": "egg",
      "level": 0
    },
    {
      "id": "hidden-power",
      "method": "level_up",
      "level": 20
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
      "method": "level_up",
      "level": 31
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
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "secret-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulk-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "calm-mind",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "feint",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "acupressure",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "power-trick",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "power-swap",
      "method": "egg",
      "level": 0
    },
    {
      "id": "guard-swap",
      "method": "egg",
      "level": 0
    },
    {
      "id": "force-palm",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "poison-jab",
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
      "id": "bullet-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "psycho-cut",
      "method": "egg",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "psyshock",
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
      "method": "egg",
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

export default meditite;
