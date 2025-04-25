import { OremonData } from "../../types/OremonData";

const rhydon: OremonData = {
  "id": "oremon:rhydon",
  "name": "oremon.rhydon.name",
  "description": "oremon.rhydon.description",
  "types": [
    "ground",
    "rock"
  ],
  "baseStats": {
    "hp": 105,
    "atk": 130,
    "def": 120,
    "atk_spe": 45,
    "def_spe": 45,
    "spd": 40
  },
  "evYield": {
    "hp": 0,
    "atk": 2,
    "def": 0,
    "atk_spe": 0,
    "def_spe": 0,
    "spd": 0
  },
  "abilities": {},
  "genderRate": 4,
  "catchRate": 60,
  "eggGroups": [
    "monster",
    "ground"
  ],
  "hatchCounter": 20,
  "height": 1.9,
  "weight": 120,
  "baseExperience": 170,
  "growthRateId": "slow",
  "generationId": 1,
  "isBaby": false,
  "hasGenderDifferences": true,
  "formSwitchable": false,
  "shape": "upright",
  "color": "Gray",
  "evolutions": [
    {
      "into": "oremon:rhyperior",
      "method": "trade",
      "conditions": {
        "heldItem": "item:298",
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
      "id": "stomp",
      "method": "level_up",
      "level": 17
    },
    {
      "id": "horn-attack",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "fury-attack",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "fury-attack",
      "method": "level_up",
      "level": 5
    },
    {
      "id": "horn-drill",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "horn-drill",
      "method": "level_up",
      "level": 62
    },
    {
      "id": "take-down",
      "method": "level_up",
      "level": 37
    },
    {
      "id": "tail-whip",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "roar",
      "method": "machine",
      "level": 0
    },
    {
      "id": "flamethrower",
      "method": "machine",
      "level": 0
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
      "id": "hyper-beam",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunderbolt",
      "method": "machine",
      "level": 0
    },
    {
      "id": "thunder",
      "method": "machine",
      "level": 0
    },
    {
      "id": "earthquake",
      "method": "level_up",
      "level": 48
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
      "id": "double-team",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fire-blast",
      "method": "machine",
      "level": 0
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
      "id": "protect",
      "method": "machine",
      "level": 0
    },
    {
      "id": "scary-face",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "scary-face",
      "method": "level_up",
      "level": 9
    },
    {
      "id": "sandstorm",
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
      "method": "level_up",
      "level": 55
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
      "id": "rock-tomb",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-blast",
      "method": "level_up",
      "level": 29
    },
    {
      "id": "hammer-arm",
      "method": "level_up",
      "level": 0
    },
    {
      "id": "hammer-arm",
      "method": "level_up",
      "level": 1
    },
    {
      "id": "payback",
      "method": "machine",
      "level": 0
    },
    {
      "id": "fling",
      "method": "machine",
      "level": 0
    },
    {
      "id": "rock-polish",
      "method": "machine",
      "level": 0
    },
    {
      "id": "poison-jab",
      "method": "machine",
      "level": 0
    },
    {
      "id": "focus-blast",
      "method": "machine",
      "level": 0
    },
    {
      "id": "giga-impact",
      "method": "machine",
      "level": 0
    },
    {
      "id": "shadow-claw",
      "method": "machine",
      "level": 0
    },
    {
      "id": "stone-edge",
      "method": "level_up",
      "level": 41
    },
    {
      "id": "stone-edge",
      "method": "machine",
      "level": 0
    },
    {
      "id": "smack-down",
      "method": "level_up",
      "level": 13
    },
    {
      "id": "smack-down",
      "method": "machine",
      "level": 0
    },
    {
      "id": "round",
      "method": "machine",
      "level": 0
    },
    {
      "id": "chip-away",
      "method": "level_up",
      "level": 25
    },
    {
      "id": "bulldoze",
      "method": "level_up",
      "level": 21
    },
    {
      "id": "bulldoze",
      "method": "machine",
      "level": 0
    },
    {
      "id": "dragon-tail",
      "method": "machine",
      "level": 0
    },
    {
      "id": "drill-run",
      "method": "level_up",
      "level": 33
    },
    {
      "id": "confide",
      "method": "machine",
      "level": 0
    },
    {
      "id": "smart-strike",
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

export default rhydon;
