import { OremonData } from "../../types/OremonData";

const joltik: OremonData = {
  "id": "oremon:joltik",
  "name": "oremon.joltik.name",
  "description": "oremon.joltik.description",
  "types": [
    "bug",
    "electric"
  ],
  "baseStats": {
    "hp": 50,
    "atk": 47,
    "def": 50,
    "atk_spe": 57,
    "def_spe": 50,
    "spd": 65
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
  "catchRate": 190,
  "eggGroups": [
    "bug"
  ],
  "hatchCounter": 20,
  "height": 0.1,
  "weight": 0.6,
  "baseExperience": 64,
  "growthRateId": "medium",
  "generationId": 5,
  "isBaby": false,
  "hasGenderDifferences": false,
  "formSwitchable": false,
  "shape": "armor",
  "color": "Yellow",
  "evolutions": [
    {
      "into": "oremon:galvantula",
      "method": "level-up",
      "conditions": {
        "minLevel": 36,
        "needsOverworldRain": false,
        "turnUpsideDown": false
      }
    }
  ],
  "moves": [
    {
      "id": "poison-sting",
      "method": "egg",
      "level": 0
    },
    {
      "id": "pin-missile",
      "method": "egg",
      "level": 0
    },
    {
      "id": "disable",
      "method": "egg",
      "level": 0
    },
    {
      "id": "absorb",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "string-shot",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "thunderbolt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder-wave",
      "method": "level_up",
      "level": 4
    },
    {
      "id": "thunder-wave",
      "method": "machine",
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
      "level": 37
    },
    {
      "id": "screech",
      "method": "level_up",
      "level": 7
    },
    {
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "light-screen",
      "method": "machine",
      "level": 0
    },
    {
      "id": "leech-life",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rest",
      "method": "machine",
      "level": 0
    },
    {
      "id": "slash",
      "method": "level_up",
      "level": 26
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
      "level": 1
    },
    {
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "feint-attack",
      "method": "egg",
      "level": 0
    },
    {
      "id": "swagger",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fury-cutter",
      "method": "level_up",
      "level": 12
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
      "id": "facade",
      "method": "machine",
      "level": 0
    },
    {
      "id": "camouflage",
      "method": "egg",
      "level": 0
    },
    {
      "id": "signal-beam",
      "method": "level_up",
      "level": 34
    },
    {
      "id": "gastro-acid",
      "method": "level_up",
      "level": 23
    },
    {
      "id": "sucker-punch",
      "method": "level_up",
      "level": 40
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "x-scissor",
      "method": "machine",
      "level": 0
    },
    {
      "id": "bug-buzz",
      "method": "level_up",
      "level": 48
    },
    {
      "id": "energy-ball",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-climb",
      "method": "egg",
      "level": 0
    },
    {
      "id": "discharge",
      "method": "level_up",
      "level": 45
    },
    {
      "id": "cross-poison",
      "method": "egg",
      "level": 0
    },
    {
      "id": "bug-bite",
      "method": "level_up",
      "level": 18
    },
    {
      "id": "charge-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "electro-ball",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "volt-switch",
      "method": "machine",
      "level": 0
    },
    {
      "id": "electroweb",
      "method": "level_up",
      "level": 15
    },
    {
      "id": "wild-charge",
      "method": "machine",
      "level": 0
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
      "id": "lunge",
      "method": "egg",
      "level": 0
    }
  ]
};

export default joltik;
