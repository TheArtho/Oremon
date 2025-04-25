import { OremonData } from "../../types/OremonData";

const horsea: OremonData = {
  "id": "oremon:horsea",
  "name": "oremon.horsea.name",
  "description": "oremon.horsea.description",
  "types": [
    "water"
  ],
  "baseStats": {
    "hp": 30,
    "atk": 40,
    "def": 70,
    "atk_spe": 70,
    "def_spe": 25,
    "spd": 60
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 1,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 225,
  "eggGroups": [
    "water1",
    "dragon"
  ],
  "hatchCounter": 20,
  "height": 0.4,
  "weight": 8,
  "baseExperience": 59,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Blue",
  "evolutions": [
    {
      "into": "oremon:seadra",
      "method": "level-up",
      "conditions": {
        "minLevel": 32,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "razor-wind",
      "method": "egg",
      "level": 0
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "disable",
      "method": "egg",
      "level": 0
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "hydro-pump",
      "method": "level_up",
      "level": 52
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
      "level": 21
    },
    {
      "id": "aurora-beam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-rage",
      "method": "egg",
      "level": 0
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "agility",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "smokescreen",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "focus-energy",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "waterfall",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bubble",
      "method": "level_up",
      "level": 1
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
      "id": "octazooka",
      "method": "egg",
      "level": 0
    },
    {
      "id": "outrage",
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
      "id": "dragon-breath",
      "method": "egg",
      "level": 0
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "twister",
      "method": "level_up",
      "level": 17
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
      "id": "signal-beam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "muddy-water",
      "method": "egg",
      "level": 0
    },
    {
      "id": "dragon-dance",
      "method": "level_up",
      "level": 46
    },
    {
      "id": "water-pulse",
      "method": "egg",
      "level": 0
    },
    {
      "id": "brine",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "dragon-pulse",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "flash-cannon",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "clear-smog",
      "method": "egg",
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

export default horsea;
