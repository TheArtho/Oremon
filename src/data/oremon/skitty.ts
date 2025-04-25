import { OremonData } from "../../types/OremonData";

const skitty: OremonData = {
  "id": "oremon:skitty",
  "name": "oremon.skitty.name",
  "description": "oremon.skitty.description",
  "types": [
    "normal"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 45,
    "def": 45,
    "atk_spe": 35,
    "def_spe": 35,
    "spd": 50
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
  "genderRate": 6,
  "catchRate": 255,
  "eggGroups": [
    "ground",
    "fairy"
  ],
  "hatchCounter": 15,
  "height": 0.6,
  "weight": 11,
  "baseExperience": 52,
  "growthRateId": "fast",
  "generationId": 3,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "quadruped",
  "color": "Pink",
  "evolutions": [
    {
      "into": "oremon:delcatty",
      "method": "use-item",
      "conditions": {
        "item": "item:81",
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "double-slap",
      "method": "level_up",
      "level": 16
    },
    {
      "id": "tackle",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "double-edge",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "tail-whip",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "growl",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "sing",
      "method": "level_up",
      "level": 7
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
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunderbolt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder-wave",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder",
      "method": "machine",
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
      "level": 22
    },
    {
      "id": "foresight",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "charm",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "attract",
      "method": "level_up",
      "level": 10
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
      "id": "heal-bell",
      "method": "level_up",
      "level": 37
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
      "id": "safeguard",
      "method": "machine",
      "level": 0
    },
    {
      "id": "baton-pass",
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
      "id": "shadow-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fake-out",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "fake-out",
      "method": "egg",
      "level": 0
    },
    {
      "id": "uproar",
      "method": "egg",
      "level": 0
    },
    {
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "helping-hand",
      "method": "egg",
      "level": 0
    },
    {
      "id": "wish",
      "method": "egg",
      "level": 0
    },
    {
      "id": "assist",
      "method": "level_up",
      "level": 31
    },
    {
      "id": "fake-tears",
      "method": "egg",
      "level": 0
    },
    {
      "id": "tickle",
      "method": "egg",
      "level": 0
    },
    {
      "id": "cosmic-power",
      "method": "egg",
      "level": 0
    },
    {
      "id": "covet",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "calm-mind",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wake-up-slap",
      "method": "level_up",
      "level": 28
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "copycat",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "last-resort",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sucker-punch",
      "method": "egg",
      "level": 0
    },
    {
      "id": "mud-bomb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "zen-headbutt",
      "method": "egg",
      "level": 0
    },
    {
      "id": "captivate",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "captivate",
      "method": "egg",
      "level": 0
    },
    {
      "id": "grass-knot",
      "method": "machine",
      "level": 0
    },
    {
      "id": "charge-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "simple-beam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "echoed-voice",
      "method": "machine",
      "level": 0
    },
    {
      "id": "work-up",
      "method": "machine",
      "level": 0
    },
    {
      "id": "wild-charge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "disarming-voice",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "play-rough",
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

export default skitty;
