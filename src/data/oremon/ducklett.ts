import { OremonData } from "../../types/OremonData";

const ducklett: OremonData = {
  "id": "oremon:ducklett",
  "name": "oremon.ducklett.name",
  "description": "oremon.ducklett.description",
  "types": [
    "water",
    "flying"
  ],
  "baseStats": {
    "hp": 62,
    "atk": 44,
    "def": 50,
    "atk_spe": 44,
    "def_spe": 50,
    "spd": 55
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
    "water1",
    "flying"
  ],
  "hatchCounter": 20,
  "height": 0.5,
  "weight": 5.5,
  "baseExperience": 61,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "wings",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:swanna",
      "method": "level-up",
      "conditions": {
        "minLevel": 35,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "gust",
      "method": "egg",
      "level": 0
    },
    {
      "id": "wing-attack",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "fly",
      "method": "machine",
      "level": 0
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 1
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
      "id": "bubble-beam",
      "method": "level_up",
      "level": 19
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
      "id": "mirror-move",
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
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "steel-wing",
      "method": "egg",
      "level": 0
    },
    {
      "id": "steel-wing",
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
      "level": 34
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
      "id": "feather-dance",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "mud-sport",
      "method": "egg",
      "level": 0
    },
    {
      "id": "air-cutter",
      "method": "egg",
      "level": 0
    },
    {
      "id": "aerial-ace",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "aerial-ace",
      "method": "machine",
      "level": 0
    },
    {
      "id": "water-sport",
      "method": "level_up",
      "level": 3
    },
    {
      "id": "water-pulse",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "roost",
      "method": "level_up",
      "level": 30
    },
    {
      "id": "roost",
      "method": "machine",
      "level": 0
    },
    {
      "id": "brine",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tailwind",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "lucky-chant",
      "method": "egg",
      "level": 0
    },
    {
      "id": "me-first",
      "method": "egg",
      "level": 0
    },
    {
      "id": "aqua-ring",
      "method": "level_up",
      "level": 24
    },
    {
      "id": "air-slash",
      "method": "level_up",
      "level": 27
    },
    {
      "id": "brave-bird",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "defog",
      "method": "level_up",
      "level": 6
    },
    {
      "id": "aqua-jet",
      "method": "egg",
      "level": 0
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
      "id": "hurricane",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    }
  ]
};

export default ducklett;
