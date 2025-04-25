import { OremonData } from "../../types/OremonData";

const patrat: OremonData = {
  "id": "oremon:patrat",
  "name": "oremon.patrat.name",
  "description": "oremon.patrat.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 45,
    "atk": 55,
    "def": 39,
    "atk_spe": 35,
    "def_spe": 39,
    "spd": 42
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
  "catchRate": 255,
  "eggGroups": [
    "ground"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 11.6,
  "baseExperience": 51,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:watchog",
      "method": "level-up",
      "conditions": {
        "minLevel": 20,
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
      "level": 41
    },
    {
      "id": "sand-attack",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 3
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "thunderbolt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hypnosis",
      "method": "level_up",
      "level": 18
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
      "id": "focus-energy",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "bide",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hyper-fang",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "super-fang",
      "method": "level_up",
      "level": 21
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
      "level": 11
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mean-look",
      "method": "level_up",
      "level": 36
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
      "method": "level_up",
      "level": 38
    },
    {
      "id": "pursuit",
      "method": "egg",
      "level": 0
    },
    {
      "id": "iron-tail",
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
      "id": "crunch",
      "method": "level_up",
      "level": 16
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
      "id": "revenge",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bullet-seed",
      "method": "egg",
      "level": 0
    },
    {
      "id": "assurance",
      "method": "egg",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "nasty-plot",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "after-you",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "work-up",
      "method": "level_up",
      "level": 28
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
    },
    {
      "id": "tearful-look",
      "method": "egg",
      "level": 0
    }
  ]
};

export default patrat;
