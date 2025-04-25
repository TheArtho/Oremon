import { OremonData } from "../../types/OremonData";

const poliwag: OremonData = {
  "id": "oremon:poliwag",
  "name": "oremon.poliwag.name",
  "description": "oremon.poliwag.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 50,
    "def": 40,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 90
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
  "catchRate": 255,
  "eggGroups": [
    "water1"
  ],
  "hatchCounter": 20,
  "height": 0.6,
  "weight": 12.4,
  "baseExperience": 60,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "legs",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:poliwhirl",
      "method": "level-up",
      "conditions": {
        "minLevel": 25,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "double-slap",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "body-slam",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "mist",
      "method": "egg",
      "level": 0
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "hydro-pump",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "surf",
      "method": "machine",
      "level": 0
    },
    {
      "id": "ice-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "blizzard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bubble-beam",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "bubble-beam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "psychic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hypnosis",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "haze",
      "method": "egg",
      "level": 0
    },
    {
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bubble",
      "method": "level_up",
      "level": 11
    },
    {
      "id": "splash",
      "method": "egg",
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
      "id": "mind-reader",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "belly-drum",
      "method": "level_up",
      "level": 31
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
      "id": "encore",
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
      "method": "level_up",
      "level": 18
    },
    {
      "id": "rain-dance",
      "method": "machine",
      "level": 0
    },
    {
      "id": "hail",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "endeavor",
      "method": "egg",
      "level": 0
    },
    {
      "id": "refresh",
      "method": "egg",
      "level": 0
    },
    {
      "id": "ice-ball",
      "method": "egg",
      "level": 0
    },
    {
      "id": "mud-shot",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "mud-shot",
      "method": "egg",
      "level": 0
    },
    {
      "id": "water-sport",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "water-sport",
      "method": "egg",
      "level": 0
    },
    {
      "id": "water-pulse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "wake-up-slap",
      "method": "level_up",
      "level": 35
    },
    {
      "id": "mud-bomb",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "scald",
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

export default poliwag;
