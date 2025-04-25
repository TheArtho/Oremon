import { OremonData } from "../../types/OremonData";

const spinarak: OremonData = {
  "id": "oremon:spinarak",
  "name": "oremon.spinarak.name",
  "description": "oremon.spinarak.description",
  "types": [
    "bug",
    "poison"
  ],
  "baseStats": {
    "hp": 40,
    "atk": 60,
    "def": 40,
    "atk_spe": 40,
    "def_spe": 40,
    "spd": 30
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
    "bug"
  ],
  "hatchCounter": 15,
  "height": 0.5,
  "weight": 8.5,
  "baseExperience": 50,
  "growthRateId": "fast",
  "generationId": 2,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Green",
  "evolutions": [
    {
      "into": "oremon:ariados",
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
      "id": "poison-sting",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "twineedle",
      "method": "egg",
      "level": 0
    },
    {
      "id": "pin-missile",
      "method": "level_up",
      "level": 36
    },
    {
      "id": "sonic-boom",
      "method": "egg",
      "level": 0
    },
    {
      "id": "disable",
      "method": "egg",
      "level": 0
    },
    {
      "id": "psybeam",
      "method": "egg",
      "level": 0
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "solar-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "string-shot",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "toxic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "psychic",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "psychic",
      "method": "machine",
      "level": 0
    },
    {
      "id": "agility",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "night-shade",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "constrict",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "leech-life",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fury-swipes",
      "method": "level_up",
      "level": 22
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
      "id": "spider-web",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "scary-face",
      "method": "level_up",
      "level": 12
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
      "id": "megahorn",
      "method": "egg",
      "level": 0
    },
    {
      "id": "baton-pass",
      "method": "egg",
      "level": 0
    },
    {
      "id": "pursuit",
      "method": "egg",
      "level": 0
    },
    {
      "id": "hidden-power",
      "method": "machine",
      "level": 0
    },
    {
      "id": "sunny-day",
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
      "id": "sucker-punch",
      "method": "level_up",
      "level": 26
    },
    {
      "id": "toxic-spikes",
      "method": "egg",
      "level": 0
    },
    {
      "id": "poison-jab",
      "method": "level_up",
      "level": 43
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "night-slash",
      "method": "egg",
      "level": 0
    },
    {
      "id": "x-scissor",
      "method": "machine",
      "level": 0
    },
    {
      "id": "shadow-sneak",
      "method": "level_up",
      "level": 19
    },
    {
      "id": "cross-poison",
      "method": "level_up",
      "level": 47
    },
    {
      "id": "venoshock",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rage-powder",
      "method": "egg",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "electroweb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "sticky-web",
      "method": "level_up",
      "level": 50
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "infestation",
      "method": "level_up",
      "level": 8
    },
    {
      "id": "infestation",
      "method": "machine",
      "level": 0
    },
    {
      "id": "toxic-thread",
      "method": "level_up",
      "level": 54
    },
    {
      "id": "lunge",
      "method": "egg",
      "level": 0
    }
  ]
};

export default spinarak;
