import { OremonData } from "../../types/OremonData";

const skrelp: OremonData = {
  "id": "oremon:skrelp",
  "name": "oremon.skrelp.name",
  "description": "oremon.skrelp.description",
  "types": [
    "poison",
    "water"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 60,
    "def": 60,
    "atk_spe": 60,
    "def_spe": 60,
    "spd": 30
  },
  "evYield": {
    "hp": 0,
    "atk": 0,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 1,
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
  "height": 0.5,
  "weight": 7.3,
  "baseExperience": 64,
  "growthRateId": "medium",
  "generationId": 6,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "blob",
  "color": "Brown",
  "evolutions": [
    {
      "into": "oremon:dragalge",
      "method": "level-up",
      "conditions": {
        "minLevel": 48,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "tail-whip",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "acid",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "water-gun",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "hydro-pump",
      "method": "level_up",
      "level": 42
    },
    {
      "id": "surf",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunderbolt",
      "method": "machine",
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
      "method": "level_up",
      "level": 28
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "smokescreen",
      "method": "level_up",
      "level": 1
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
      "level": 12
    },
    {
      "id": "acid-armor",
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
      "id": "feint-attack",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "sludge-bomb",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "sludge-bomb",
      "method": "machine",
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
      "id": "shadow-ball",
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
      "id": "camouflage",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "poison-tail",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "water-pulse",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "toxic-spikes",
      "method": "egg",
      "level": 0
    },
    {
      "id": "aqua-tail",
      "method": "level_up",
      "level": 35
    },
    {
      "id": "dragon-pulse",
      "method": "level_up",
      "level": 49
    },
    {
      "id": "venoshock",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sludge-wave",
      "method": "machine",
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
      "id": "play-rough",
      "method": "egg",
      "level": 0
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "venom-drench",
      "method": "egg",
      "level": 0
    }
  ]
};

export default skrelp;
