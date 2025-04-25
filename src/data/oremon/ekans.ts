import { OremonData } from "../../types/OremonData";

const ekans: OremonData = {
  "id": "oremon:ekans",
  "name": "oremon.ekans.name",
  "description": "oremon.ekans.description",
  "types": [
    "poison"
  ],
  "baseStats": {
    "hp": 35,
    "atk": 60,
    "def": 44,
    "atk_spe": 40,
    "def_spe": 54,
    "spd": 55
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
    "ground",
    "dragon"
  ],
  "hatchCounter": 20,
  "height": 2,
  "weight": 6.9,
  "baseExperience": 58,
  "growthRateId": "medium",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "squiggle",
  "color": "Purple",
  "evolutions": [
    {
      "into": "oremon:arbok",
      "method": "level-up",
      "conditions": {
        "minLevel": 22,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "slam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "wrap",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "poison-sting",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "leer",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "bite",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "disable",
      "method": "egg",
      "level": 0
    },
    {
      "id": "acid",
      "method": "level_up",
      "level": 20
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
      "id": "screech",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "haze",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "glare",
      "method": "level_up",
      "level": 12
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
      "id": "thief",
      "method": "machine",
      "level": 0
    },
    {
      "id": "spite",
      "method": "egg",
      "level": 0
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "scary-face",
      "method": "egg",
      "level": 0
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
      "id": "beat-up",
      "method": "egg",
      "level": 0
    },
    {
      "id": "stockpile",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "spit-up",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "swallow",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "torment",
      "method": "machine",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "snatch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "poison-fang",
      "method": "egg",
      "level": 0
    },
    {
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-tail",
      "method": "egg",
      "level": 0
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "gastro-acid",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "sucker-punch",
      "method": "egg",
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
      "id": "switcheroo",
      "method": "egg",
      "level": 0
    },
    {
      "id": "mud-bomb",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "gunk-shot",
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
      "id": "coil",
      "method": "level_up",
      "level": 44
    },
    {
      "id": "acid-spray",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bulldoze",
      "method": "machine",
      "level": 0
    },
    {
      "id": "belch",
      "method": "level_up",
      "level": 38
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "infestation",
      "method": "machine",
      "level": 0
    },
    {
      "id": "brutal-swing",
      "method": "machine",
      "level": 0
    }
  ]
};

export default ekans;
