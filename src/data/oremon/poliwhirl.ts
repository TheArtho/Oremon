import { OremonData } from "../../types/OremonData";

const poliwhirl: OremonData = {
  "id": "oremon:poliwhirl",
  "name": "oremon.poliwhirl.name",
  "description": "oremon.poliwhirl.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 65,
    "atk": 65,
    "def": 65,
    "atk_spe": 50,
    "def_spe": 50,
    "spd": 90
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 2
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 120,
  "eggGroups": [
    "water1"
  ],
  "hatchCounter": 20,
  "height": 1,
  "weight": 20,
  "baseExperience": 135,
  "growthRateId": "medium-slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "humanoid",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:poliwrath",
      "method": "use-item",
      "conditions": {
        "item": "item:84",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    },
    {
      "into": "oremon:politoed",
      "method": "trade",
      "conditions": {
        "heldItem": "item:198",
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
      "id": "water-gun",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "hydro-pump",
      "method": "level_up",
      "level": 48
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
      "level": 27
    },
    {
      "id": "earthquake",
      "method": "machine",
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
      "level": 1
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
      "id": "belly-drum",
      "method": "level_up",
      "level": 37
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
      "id": "brick-break",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-shot",
      "method": "level_up",
      "level": 32
    },
    {
      "id": "water-sport",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "wake-up-slap",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "mud-bomb",
      "method": "level_up",
      "level": 53
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
      "id": "bulldoze",
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

export default poliwhirl;
