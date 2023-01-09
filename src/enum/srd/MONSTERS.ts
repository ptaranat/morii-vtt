import { MonsterData } from "../../interfaces/srd/MonsterData";

export const MONSTERS: MonsterData[] = [
    {
      "name": "Aboleth",
      "meta": "Large aberration, lawful evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "135 (18d10 + 36)",
      "speed": "10 ft., swim 40 ft. ",
      "saving_throws": "CON +6, INT +8, WIS +6",
      "skills": "History +12, Perception +10",
      "senses": "Darkvision 120 ft.,  Passive Perception 20",
      "languages": "Deep Speech, Telepathy 120 ft.",
      "challenge": "10 (5,900 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The aboleth can breathe air and water."
        },
        {
          "name": "Mucous Cloud.",
          "content": "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
        },
        {
          "name": "Probing Telepathy.",
          "content": "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The aboleth makes three tentacle attacks."
        },
        {
          "name": "Tentacle.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 10 ft., one target.",
          "attack_dmg": "12 (2d6 + 5) bludgeoning damage.",
          "content": " If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 10 ft. one target.",
          "attack_dmg": "15 (3d6 + 5) bludgeoning damage."
        },
        {
          "name": "Enslave (3/Day).",
          "content": "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\n\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
        }
      ],
      "legendary_actions": [
        {
          "content": "The aboleth can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The aboleth regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The aboleth makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Swipe.",
          "content": "The aboleth makes one tail attack."
        },
        {
          "name": "Psychic Drain",
          "content": "(Costs 2 Actions). One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/11/1000/1000/636238825975375671.jpeg",
      "id": "7tMWNQoFdCxQmOCcDOmge",
      "ability_scores": {
        "STR": "21",
        "DEX": "9",
        "CON": "15",
        "INT": "18",
        "WIS": "15",
        "CHA": "18"
      }
    },
    {
      "name": "Acolyte",
      "meta": "Medium humanoid, any",
      "armor_class": "10 ",
      "hit_points": "9 (2d8)",
      "speed": "30 ft. ",
      "skills": "Medicine +4, Religion +2",
      "senses": "Passive Perception 12",
      "languages": "Any one language (usually Common)",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Spellcasting.",
          "content": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). The acolyte has following cleric spells prepared:\n\nCantrips (at will): light, sacred flame, thaumaturgy\n\n1st level (3 slots): bless, cure wounds, sanctuary"
        }
      ],
      "actions": [
        {
          "name": "Club.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "2 (1d4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "OtSKYBm_S5Bg_pr70jHR7",
      "ability_scores": {
        "STR": "10",
        "DEX": "10",
        "CON": "10",
        "INT": "10",
        "WIS": "14",
        "CHA": "11"
      }
    },
    {
      "name": "Adult Black Dragon",
      "meta": "Huge dragon, chaotic evil",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "195 (17d12 + 85)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +7, CON +10, WIS +6, CHA +8",
      "skills": "Perception +11, Stealth +7",
      "damage_immunities": "Acid",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 21",
      "languages": "Common, Draconic",
      "challenge": "14 (11,500 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d6 + 6) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 15 ft., one target.",
          "attack_dmg": "15 (2d8 + 6) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Acid Breath (Recharge 5\u20136).",
          "content": "The dragon exhales acid in a 60-\u00adfoot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/13/1000/1000/636238871029832086.jpeg",
      "id": "YmIGmKmNyt3aMmNA6VmsK",
      "ability_scores": {
        "STR": "23",
        "DEX": "14",
        "CON": "21",
        "INT": "14",
        "WIS": "13",
        "CHA": "17"
      }
    },
    {
      "name": "Adult Blue Dragon",
      "meta": "Huge dragon, lawful evil",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "225 (18d12 + 108)",
      "speed": "40 ft., burrow 30 ft., fly 80 ft. ",
      "saving_throws": "DEX +5, CON +11, WIS +7, CHA +9",
      "skills": "Perception +12, Stealth +5",
      "damage_immunities": "Lightning",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 22",
      "languages": "Common, Draconic",
      "challenge": "16 (15,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+12 to hit, reach 10 ft., one target.",
          "attack_dmg": "18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+12 to hit, reach 5 ft., one target.",
          "attack_dmg": "14 (2d6 + 7) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+12 to hit, reach 15 ft., one target.",
          "attack_dmg": "16 (2d8 + 7) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Lightning Breath (Recharge 5\u20136).",
          "content": "The dragon exhales lightning in a 90-\u00adfoot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/16/1000/1000/636238882493439723.jpeg",
      "id": "c5aPA6a4R8AIrHo6xqvAO",
      "ability_scores": {
        "STR": "25",
        "DEX": "10",
        "CON": "23",
        "INT": "16",
        "WIS": "15",
        "CHA": "19"
      }
    },
    {
      "name": "Adult Brass Dragon",
      "meta": "Huge dragon, chaotic good",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "172 (15d12 + 75)",
      "speed": "40 ft., burrow 30 ft., fly 80 ft. ",
      "saving_throws": "DEX +5, CON +10, WIS +6, CHA +8",
      "skills": "History +7, Perception +11, Persuasion +8, Stealth +5",
      "damage_immunities": "Fire",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 21",
      "languages": "Common, Draconic",
      "challenge": "13 (10,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d10 + 6) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d6 + 6) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 15 ft., one target.",
          "attack_dmg": "15 (2d8 + 6) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Fire Breath.",
          "content": "The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Sleep Breath.",
          "content": "The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/18/1000/1000/636238885681129014.jpeg",
      "id": "wSBTussIYYJnw0DoNcIOs",
      "ability_scores": {
        "STR": "23",
        "DEX": "10",
        "CON": "21",
        "INT": "14",
        "WIS": "13",
        "CHA": "17"
      }
    },
    {
      "name": "Adult Bronze Dragon",
      "meta": "Huge dragon, lawful good",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "212 (17d12 + 102)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +5, CON +11, WIS +7, CHA +9",
      "skills": "Insight +7, Perception +12, Stealth +5",
      "damage_immunities": "Lightning",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 22",
      "languages": "Common, Draconic",
      "challenge": "15 (13,000 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+12 to hit, reach 10 ft., one target.",
          "attack_dmg": "18 (2d10 + 7) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+12 to hit, reach 5 ft., one target.",
          "attack_dmg": "14 (2d6 + 7) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+12 to hit, reach 15 ft., one target.",
          "attack_dmg": "16 (2d8 + 7) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Lightning Breath.",
          "content": "The dragon exhales lightning in a 90- foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Repulsion Breath.",
          "content": "The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
        },
        {
          "name": "Change Shape.",
          "content": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/20/1000/1000/636238888310108665.jpeg",
      "id": "QmICPSM-NLaaZQpeQKVU9",
      "ability_scores": {
        "STR": "25",
        "DEX": "10",
        "CON": "23",
        "INT": "16",
        "WIS": "15",
        "CHA": "19"
      }
    },
    {
      "name": "Adult Copper Dragon",
      "meta": "Huge dragon, chaotic good",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "184 (16d12 + 80)",
      "speed": "40 ft., climb 40 ft., fly 80 ft. ",
      "saving_throws": "DEX +6, CON +10, WIS +7, CHA +8",
      "skills": "Deception +8, Perception +12, Stealth +6",
      "damage_immunities": "Acid",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 22",
      "languages": "Common, Draconic",
      "challenge": "14 (11,500 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day)",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d10 + 6) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d6 + 6) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 15 ft., one target.",
          "attack_dmg": "15 (2d8 + 6) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Acid Breath.",
          "content": "The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Slowing Breath.",
          "content": "The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/22/1000/1000/636238956325913912.jpeg",
      "id": "P-EznecnSiJJtBIiZoiIi",
      "ability_scores": {
        "STR": "23",
        "DEX": "12",
        "CON": "21",
        "INT": "18",
        "WIS": "15",
        "CHA": "17"
      }
    },
    {
      "name": "Adult Gold Dragon",
      "meta": "Huge dragon, lawful good",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "256 (19d12 + 133)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +8, CON +13, WIS +8, CHA +13",
      "skills": "Insight +8, Perception +14, Persuasion +13, Stealth +8",
      "damage_immunities": "Fire",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 24",
      "languages": "Common, Draconic",
      "challenge": "17 (18,000 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 10 ft., one target.",
          "attack_dmg": "19 (2d10 + 8) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 5 ft., one target.",
          "attack_dmg": "15 (2d6 + 8) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 15 ft., one target.",
          "attack_dmg": "17 (2d8 + 8) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Fire Breath.",
          "content": "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Weakening Breath.",
          "content": "The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Change Shape.",
          "content": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/24/1000/1000/636238958915127190.jpeg",
      "id": "LhOH6mad_2CwFamrxaBIy",
      "ability_scores": {
        "STR": "27",
        "DEX": "14",
        "CON": "25",
        "INT": "16",
        "WIS": "15",
        "CHA": "24"
      }
    },
    {
      "name": "Adult Green Dragon",
      "meta": "Huge dragon, lawful evil",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "207 (18d12 + 90)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +6, CON +10, WIS +7, CHA +8",
      "skills": "Deception +8, Insight +7, Perception +12, Persuasion +8, Stealth +6",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 22",
      "languages": "Common, Draconic",
      "challenge": "15 (13,000 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d6 + 6) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 15 ft., one target.",
          "attack_dmg": "15 (2d8 + 6) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Poison Breath (Recharge 5\u20136).",
          "content": "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/26/1000/1000/636238962276510242.jpeg",
      "id": "2zG1ji5N9iR6wYa-xKcMq",
      "ability_scores": {
        "STR": "23",
        "DEX": "12",
        "CON": "21",
        "INT": "18",
        "WIS": "15",
        "CHA": "17"
      }
    },
    {
      "name": "Adult Red Dragon",
      "meta": "Huge dragon, chaotic evil",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "256 (19d12 + 133)",
      "speed": "40 ft., climb 40 ft., fly 80 ft. ",
      "saving_throws": "DEX +6, CON +13, WIS +7, CHA +11",
      "skills": "Perception +13, Stealth +6",
      "damage_immunities": "Fire",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 23",
      "languages": "Common, Draconic",
      "challenge": "17 (18,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 10 ft., one target.",
          "attack_dmg": "19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 5 ft., one target.",
          "attack_dmg": "15 (2d6 + 8) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 15 ft., one target.",
          "attack_dmg": "17 (2d8 + 8) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Fire Breath (Recharge 5\u20136).",
          "content": "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/28/1000/1000/636238971817119794.jpeg",
      "id": "3MSC2KGqGbCcCNQOvHVvO",
      "ability_scores": {
        "STR": "27",
        "DEX": "10",
        "CON": "25",
        "INT": "16",
        "WIS": "13",
        "CHA": "21"
      }
    },
    {
      "name": "Adult Silver Dragon",
      "meta": "Huge dragon, lawful good",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "243 (18d12 + 126)",
      "speed": "40 ft., fly 80 ft. ",
      "saving_throws": "DEX +5, CON +12, WIS +6, CHA +10",
      "skills": "Arcana +8, History +8, Perception +11, Stealth +5",
      "damage_immunities": "Cold",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 21",
      "languages": "Common, Draconic",
      "challenge": "16 (15,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+13 to hit, reach 10 ft., one target.",
          "attack_dmg": "19 (2d10 + 8) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+13 to hit, reach 5 ft., one target.",
          "attack_dmg": "15 (2d6 + 8) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+13 to hit, reach 15 ft., one target.",
          "attack_dmg": "17 (2d8 + 8) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Cold Breath.",
          "content": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Paralyzing Breath.",
          "content": "The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Change Shape.",
          "content": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 21 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/123/1000/1000/636252753945133025.jpeg",
      "id": "I4p-63qlzN1BTa2oyLqiI",
      "ability_scores": {
        "STR": "27",
        "DEX": "10",
        "CON": "25",
        "INT": "16",
        "WIS": "13",
        "CHA": "21"
      }
    },
    {
      "name": "Adult White Dragon",
      "meta": "Huge dragon, chaotic evil",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "200 (16d12 + 96)",
      "speed": "40 ft., burrow 30 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +5, CON +11, WIS +6, CHA +6",
      "skills": "Perception +11, Stealth +5",
      "damage_immunities": "Cold",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 21",
      "languages": "Common, Draconic",
      "challenge": "13 (10,000 XP)",
      "traits": [
        {
          "name": "Ice Walk.",
          "content": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d6 + 6) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 15 ft., one target.",
          "attack_dmg": "15 (2d8 + 6) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Cold Breath (Recharge 5\u20136).",
          "content": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/125/1000/1000/636252755468117001.jpeg",
      "id": "KVqOB0orOpWB0FZAIgRGb",
      "ability_scores": {
        "STR": "22",
        "DEX": "10",
        "CON": "22",
        "INT": "8",
        "WIS": "12",
        "CHA": "12"
      }
    },
    {
      "name": "Air Elemental",
      "meta": "Large elemental, neutral",
      "armor_class": "15 ",
      "hit_points": "90 (12d10 + 24)",
      "speed": "0 ft., fly 90 ft. (hover) ",
      "damage_resistances": "Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Poison",
      "condition_immunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Auran",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Air Form.",
          "content": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The elemental makes two slam attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one target.",
          "attack_dmg": "14 (2d8 + 5) bludgeoning damage."
        },
        {
          "name": "Whirlwind (Recharge 4\u20136).",
          "content": "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.\n\nIf the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/127/1000/1000/636252755648556800.jpeg",
      "id": "yF_tuOfaVMZR6L_9aekAy",
      "ability_scores": {
        "STR": "14",
        "DEX": "20",
        "CON": "14",
        "INT": "6",
        "WIS": "10",
        "CHA": "6"
      }
    },
    {
      "name": "Allosaurus",
      "meta": "Large beast, unaligned",
      "armor_class": "13 Natural Armor",
      "hit_points": "51 (6d10 + 18)",
      "speed": "60 ft. ",
      "skills": "Perception +5",
      "senses": "Passive Perception 15",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Pounce.",
          "content": "If the allosaurus moves at least 30 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "15 (2d10 + 4) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d8 + 4) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "vtN6L1RYbymBCrBQgr1yE",
      "ability_scores": {
        "STR": "19",
        "DEX": "13",
        "CON": "17",
        "INT": "2",
        "WIS": "12",
        "CHA": "5"
      }
    },
    {
      "name": "Ancient Black Dragon",
      "meta": "Gargantuan dragon, chaotic evil",
      "armor_class": "22 (Natural Armor)",
      "hit_points": "367 (21d20 + 147)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +9, CON +14, WIS +9, CHA +11",
      "skills": "Perception +16, Stealth +9",
      "damage_immunities": "Acid",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 26",
      "languages": "Common, Draconic",
      "challenge": "21 (33,000 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+15 to hit, reach 15 ft., one target.",
          "attack_dmg": "19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+15 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d6 + 8) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+15 to hit, reach 20 ft., one target.",
          "attack_dmg": "17 (2d8 + 8) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Acid Breath (Recharge 5\u20136).",
          "content": "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/129/315/315/636252755854649337.jpeg",
      "id": "tkTaT_IgWW7A9nRCWtpN5",
      "ability_scores": {
        "STR": "27",
        "DEX": "14",
        "CON": "25",
        "INT": "16",
        "WIS": "15",
        "CHA": "19"
      }
    },
    {
      "name": "Ancient Blue Dragon",
      "meta": "Gargantuan dragon, lawful evil",
      "armor_class": "22 (Natural Armor)",
      "hit_points": "481 (26d20 + 208)",
      "speed": "40 ft., burrow 40 ft., fly 80 ft. ",
      "saving_throws": "DEX +7, CON +15, WIS +10, CHA +12",
      "skills": "Perception +17, Stealth +7",
      "damage_immunities": "Lightning",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 27",
      "languages": "Common, Draconic",
      "challenge": "23 (50,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+16 to hit, reach 15 ft., one target.",
          "attack_dmg": "20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+16 to hit, reach 10 ft., one target.",
          "attack_dmg": "16 (2d6 + 9) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+16 to hit, reach 20 ft., one target.",
          "attack_dmg": "18 (2d8 + 9) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Lightning Breath (Recharge 5\u20136).",
          "content": "The dragon exhales lightning in a 120-\u00ad-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/131/1000/1000/636252756020185006.jpeg",
      "id": "5B8d7NHXlNMboDJVFDkzk",
      "ability_scores": {
        "STR": "29",
        "DEX": "10",
        "CON": "27",
        "INT": "18",
        "WIS": "17",
        "CHA": "21"
      }
    },
    {
      "name": "Ancient Brass Dragon",
      "meta": "Gargantuan dragon, chaotic good",
      "armor_class": "20 (Natural Armor)",
      "hit_points": "297 (17d20 + 119)",
      "speed": "40 ft., burrow 40 ft., fly 80 ft. ",
      "saving_throws": "DEX +6, CON +13, WIS +8, CHA +10",
      "skills": "History +9, Perception +14, Persuasion +10, Stealth +6",
      "damage_immunities": "Fire",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 24",
      "languages": "Common, Draconic",
      "challenge": "20 (25,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 15 ft., one target.",
          "attack_dmg": "19 (2d10 + 8) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d6 + 8) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 20 ft., one target.",
          "attack_dmg": "17 (2d8 + 8) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons:"
        },
        {
          "name": "Fire Breath.",
          "content": "The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Sleep Breath.",
          "content": "The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
        },
        {
          "name": "Change Shape.",
          "content": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/133/1000/1000/636252756157427258.jpeg",
      "id": "hsQb_2D-5KR2Qi_KNx3UV",
      "ability_scores": {
        "STR": "27",
        "DEX": "10",
        "CON": "25",
        "INT": "16",
        "WIS": "15",
        "CHA": "19"
      }
    },
    {
      "name": "Ancient Bronze Dragon",
      "meta": "Gargantuan dragon, lawful good",
      "armor_class": "22 (Natural Armor)",
      "hit_points": "444 (24d20 + 192)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +7, CON +15, WIS +10, CHA +12",
      "skills": "Insight +10, Perception +17, Stealth +7",
      "damage_immunities": "Lightning",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 27",
      "languages": "Common, Draconic",
      "challenge": "22 (41,000 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+16 to hit, reach 15 ft., one target.",
          "attack_dmg": "20 (2d10 + 9) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+16 to hit, reach 10 ft., one target.",
          "attack_dmg": "16 (2d6 + 9) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+16 to hit, reach 20 ft., one target.",
          "attack_dmg": "18 (2d8 + 9) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Lightning Breath.",
          "content": "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Repulsion Breath.",
          "content": "The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
        },
        {
          "name": "Change Shape.",
          "content": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/135/315/315/636252756372367681.jpeg",
      "id": "DVrrdsGxofGxP9SPM4DJD",
      "ability_scores": {
        "STR": "29",
        "DEX": "10",
        "CON": "27",
        "INT": "18",
        "WIS": "17",
        "CHA": "21"
      }
    },
    {
      "name": "Ancient Copper Dragon",
      "meta": "Gargantuan dragon, chaotic good",
      "armor_class": "21 (Natural Armor)",
      "hit_points": "350 (20d20 + 140)",
      "speed": "40 ft., climb 40 ft., fly 80 ft. ",
      "saving_throws": "DEX +8, CON +14, WIS +10, CHA +11",
      "skills": "Deception +11, Perception +17, Stealth +8",
      "damage_immunities": "Acid",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 27",
      "languages": "Common, Draconic",
      "challenge": "21 (33,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+15 to hit, reach 15 ft., one target.",
          "attack_dmg": "19 (2d10 + 8) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+15 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d6 + 8) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+15 to hit, reach 20 ft., one target.",
          "attack_dmg": "17 (2d8 + 8) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Acid Breath.",
          "content": "The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Slowing Breath.",
          "content": "The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
        },
        {
          "name": "Change Shape.",
          "content": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/137/1000/1000/636252756714896878.jpeg",
      "id": "kDkP72VnXKz8EF0Hrxqjw",
      "ability_scores": {
        "STR": "27",
        "DEX": "12",
        "CON": "25",
        "INT": "20",
        "WIS": "17",
        "CHA": "19"
      }
    },
    {
      "name": "Ancient Gold Dragon",
      "meta": "Gargantuan dragon, lawful good",
      "armor_class": "22 (Natural Armor)",
      "hit_points": "546 (28d20 + 252)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +9, CON +16, WIS +10, CHA +16",
      "skills": "Insight +10, Perception +17, Persuasion +16, Stealth +9",
      "damage_immunities": "Fire",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 27",
      "languages": "Common, Draconic",
      "challenge": "24 (62,000 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 15 ft., one target.",
          "attack_dmg": "21 (2d10 + 10) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d6 + 10) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 20 ft., one target.",
          "attack_dmg": "19 (2d8 + 10) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Fire Breath.",
          "content": "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Weakening Breath.",
          "content": "The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Change Shape.",
          "content": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/139/315/315/636252756930565101.jpeg",
      "id": "Sv5xXbNxrp0RRTJ_ciU8E",
      "ability_scores": {
        "STR": "30",
        "DEX": "14",
        "CON": "29",
        "INT": "18",
        "WIS": "17",
        "CHA": "28"
      }
    },
    {
      "name": "Ancient Green Dragon",
      "meta": "Gargantuan dragon, lawful evil",
      "armor_class": "21 (Natural Armor)",
      "hit_points": "385 (22d20 + 154)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +8, CON +14, WIS +10, CHA +11",
      "skills": "Deception +11, Insight +10, Perception +17, Persuasion +11, Stealth +8",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 27",
      "languages": "Common, Draconic",
      "challenge": "22 (41,000 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+15 to hit, reach 15 ft., one target.",
          "attack_dmg": "19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+15 to hit, reach 10 ft., one target.",
          "attack_dmg": "22 (4d6 + 8) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+15 to hit, reach 20 ft., one target.",
          "attack_dmg": "17 (2d8 + 8) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Poison Breath (Recharge 5\u20136).",
          "content": "The dragon exhales poisonous gas in a 90-\u00ad-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/141/1000/1000/636252757319464533.jpeg",
      "id": "yUIFGRt7ZRhjVJWPxu4Td",
      "ability_scores": {
        "STR": "27",
        "DEX": "12",
        "CON": "25",
        "INT": "20",
        "WIS": "17",
        "CHA": "19"
      }
    },
    {
      "name": "Ancient Red Dragon",
      "meta": "Gargantuan dragon, chaotic evil",
      "armor_class": "22 (Natural Armor)",
      "hit_points": "546 (28d20 + 252)",
      "speed": "40 ft., climb 40 ft., fly 80 ft. ",
      "saving_throws": "DEX +7, CON +16, WIS +9, CHA +13",
      "skills": "Perception +16, Stealth +7",
      "damage_immunities": "Fire",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 26",
      "languages": "Common, Draconic",
      "challenge": "24 (62,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 15 ft., one target.",
          "attack_dmg": "21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d6 + 10) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 20 ft., one target.",
          "attack_dmg": "19 (2d8 + 10) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Fire Breath (Recharge 5\u20136).",
          "content": "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/147/1000/1000/636252758629652181.jpeg",
      "id": "cDPYktJ-BeMAbw3DG7H1Y",
      "ability_scores": {
        "STR": "30",
        "DEX": "10",
        "CON": "29",
        "INT": "18",
        "WIS": "15",
        "CHA": "23"
      }
    },
    {
      "name": "Ancient Silver Dragon",
      "meta": "Gargantuan dragon, lawful good",
      "armor_class": "22 (Natural Armor)",
      "hit_points": "487 (25d20 + 225)",
      "speed": "40 ft., fly 80 ft. ",
      "saving_throws": "DEX +7, CON +16, WIS +9, CHA +13",
      "skills": "Arcana +11, History +11, Perception +16, Stealth +7",
      "damage_immunities": "Cold",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 26",
      "languages": "Common, Draconic",
      "challenge": "23 (50,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 15 ft., one target.",
          "attack_dmg": "21 (2d10 + 10) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d6 + 10) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 20 ft., one target.",
          "attack_dmg": "19 (2d8 + 10) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Cold Breath.",
          "content": "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Paralyzing Breath.",
          "content": "The dragon exhales paralyzing gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Change Shape.",
          "content": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\n\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/151/1000/1000/636252758799225927.jpeg",
      "id": "JxakWYJI7mWFGyDP5BLuD",
      "ability_scores": {
        "STR": "30",
        "DEX": "10",
        "CON": "29",
        "INT": "18",
        "WIS": "15",
        "CHA": "23"
      }
    },
    {
      "name": "Ancient White Dragon",
      "meta": "Gargantuan dragon, chaotic evil",
      "armor_class": "20 (Natural Armor)",
      "hit_points": "333 (18d20 + 144)",
      "speed": "40 ft., burrow 40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +6, CON +14, WIS +7, CHA +8",
      "skills": "Perception +13, Stealth +6",
      "damage_immunities": "Cold",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 23",
      "languages": "Common, Draconic",
      "challenge": "20 (25,000 XP)",
      "traits": [
        {
          "name": "Ice Walk.",
          "content": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the dragon fails a saving throw, it can choose to succeed instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 15 ft., one target.",
          "attack_dmg": "19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d6 + 8) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 20 ft., one target.",
          "attack_dmg": "17 (2d8 + 8) bludgeoning damage."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Cold Breath (Recharge 5\u20136).",
          "content": "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (16d8) cold damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Detect.",
          "content": "The dragon makes a Wisdom (Perception) check."
        },
        {
          "name": "Tail Attack.",
          "content": "The dragon makes a tail attack."
        },
        {
          "name": "Wing Attack (Costs 2 Actions).",
          "content": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/153/1000/1000/636252758955886210.jpeg",
      "id": "V3vmdgdVRuZ3O5kKEkV0O",
      "ability_scores": {
        "STR": "26",
        "DEX": "10",
        "CON": "26",
        "INT": "10",
        "WIS": "13",
        "CHA": "14"
      }
    },
    {
      "name": "Androsphinx",
      "meta": "Large monstrosity, lawful neutral",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "199 (19d10 + 95)",
      "speed": "40 ft., fly 60 ft. ",
      "saving_throws": "DEX +6, CON +11, INT +9, WIS +10",
      "skills": "Arcana +9, Perception +10, Religion +15",
      "damage_immunities": "Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "condition_immunities": "Charmed, Frightened",
      "senses": "Truesight 120 ft.,  Passive Perception 20",
      "languages": "Common, Sphinx",
      "challenge": "17 (18,000 XP)",
      "traits": [
        {
          "name": "Inscrutable.",
          "content": "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
        },
        {
          "name": "Magic Weapons.",
          "content": "The sphinx's weapon attacks are magical."
        },
        {
          "name": "Spellcasting.",
          "content": "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 18, +10 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following cleric spells prepared:\n\nCantrips (at will): sacred flame, spare the dying, thaumaturgy\n\n1st level (4 slots): command, detect evil and good, detect magic\n\n2nd level (3 slots): lesser restoration, zone of truth\n\n3rd level (3 slots): dispel magic, tongues\n\n4th level (3 slots): banishment, freedom of movement\n\n5th level (2 slots): flame strike, greater restoration\n\n6th level (1 slot): heroes' feast"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The sphinx makes two claw attacks."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+12 to hit, reach 5 ft., one target.",
          "attack_dmg": "17 (2d10 + 6) slashing damage."
        },
        {
          "name": "Roar (3/Day).",
          "content": "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw."
        },
        {
          "name": "First Roar.",
          "content": "Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Second Roar.",
          "content": "Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Third Roar.",
          "content": "Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone."
        }
      ],
      "legendary_actions": [
        {
          "content": "The sphinx can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The sphinx regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Claw Attack.",
          "content": "The sphinx makes one claw attack."
        },
        {
          "name": "Teleport (Costs 2 Actions).",
          "content": "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        },
        {
          "name": "Cast a Spell (Costs 3 Actions).",
          "content": "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/157/1000/1000/636252759145617281.jpeg",
      "id": "8jjbHkOrYOhacefWK1a7n",
      "ability_scores": {
        "STR": "22",
        "DEX": "10",
        "CON": "20",
        "INT": "16",
        "WIS": "18",
        "CHA": "23"
      }
    },
    {
      "name": "Animated Armor",
      "meta": "Medium construct, unaligned",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "33 (6d8 + 6)",
      "speed": "25 ft. ",
      "damage_immunities": "Poison, Psychic",
      "condition_immunities": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
      "senses": "Blindsight 60 ft.,  Passive Perception 6",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Antimagic Susceptibility.",
          "content": "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
        },
        {
          "name": "False Appearance.",
          "content": "While the armor remains motionless, it is indistinguishable from a normal suit of armor."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The armor makes two melee attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/429/1000/1000/636306156895834255.jpeg",
      "id": "HVrdLdWHZhjmdGKmATga6",
      "ability_scores": {
        "STR": "14",
        "DEX": "11",
        "CON": "13",
        "INT": "1",
        "WIS": "3",
        "CHA": "1"
      }
    },
    {
      "name": "Ankheg",
      "meta": "Large monstrosity, unaligned",
      "armor_class": "14 (Natural Armor), 11 While Prone",
      "hit_points": "39 (6d10 + 6)",
      "speed": "30 ft., burrow 10 ft. ",
      "senses": "Darkvision 60 ft., Tremorsense 60 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage.",
          "content": " If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so."
        },
        {
          "name": "Acid Spray (Recharge 6).",
          "content": "The ankheg spits acid in a line that is 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/161/315/315/636252759871983921.jpeg",
      "id": "vr6mZ9Khjx2h_GpabMzcK",
      "ability_scores": {
        "STR": "17",
        "DEX": "11",
        "CON": "13",
        "INT": "1",
        "WIS": "13",
        "CHA": "6"
      }
    },
    {
      "name": "Ankylosaurus",
      "meta": "Huge beast, unaligned",
      "armor_class": "15 Natural",
      "hit_points": "68 (8d12 + 16)",
      "speed": "30 ft. ",
      "senses": "Passive Perception 11",
      "languages": "--",
      "challenge": "3 (700 XP)",
      "actions": [
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one target.",
          "attack_dmg": "18 (4d6 + 4) bludgeoning damage.",
          "content": " If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "fd7J2L0n-nR_bXR9ncEN8",
      "ability_scores": {
        "STR": "19",
        "DEX": "11",
        "CON": "15",
        "INT": "2",
        "WIS": "12",
        "CHA": "5"
      }
    },
    {
      "name": "Ape",
      "meta": "Medium beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "19 (3d8 + 6)",
      "speed": "30 ft., climb 30 ft. ",
      "skills": "Athletics +5, Perception +3",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The ape makes two fist attacks."
        },
        {
          "name": "Fist.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) bludgeoning damage."
        },
        {
          "name": "Rock.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+5 to hit, range 25/50 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "wCRUdliTh0YhEZd6kIHYi",
      "ability_scores": {
        "STR": "16",
        "DEX": "14",
        "CON": "14",
        "INT": "6",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Archmage",
      "meta": "Medium humanoid, any",
      "armor_class": "12 (15 With Mage Armor)",
      "hit_points": "99 (18d8 + 18)",
      "speed": "30 ft. ",
      "saving_throws": "INT +9, WIS +6",
      "skills": "Arcana +13, History +13",
      "senses": "Passive Perception 12",
      "languages": "Any six languages",
      "challenge": "12 (8,400 XP)",
      "traits": [
        {
          "name": "Magic Resistance.",
          "content": "The archmage has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Spellcasting.",
          "content": "The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage can cast disguise self and invisibility at will and has the following wizard spells prepared:\n\nCantrips (at will): fire bolt, light, mage hand, prestidigitation, shocking grasp\n\n1st level (4 slots): detect magic, identify, mage armor, magic missile\n\n2nd level (3 slots): detect thoughts, mirror image, misty step\n\n3rd level (3 slots): counterspell, fly, lightning bolt\n\n4th level (3 slots): banishment, fire shield, stoneskin\n\n5th level (3 slots): cone of cold, scrying, wall of force\n\n6th level (1 slot): globe of invulnerability\n\n7th level (1 slot): teleport\n\n8th level (1 slot): mind blank\n\n9th level (1 slot): time stop\n\n*The archmage casts mind blank, stoneskin and mage armor spells on itself before combat."
        }
      ],
      "actions": [
        {
          "name": "Dagger.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft. or range 20/60 ft., one target.",
          "attack_dmg": "4 (1d4 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/167/1000/1000/636252760213195530.jpeg",
      "id": "pQpCRwa31LI2ZN8iWCgD1",
      "ability_scores": {
        "STR": "10",
        "DEX": "14",
        "CON": "12",
        "INT": "20",
        "WIS": "15",
        "CHA": "16"
      }
    },
    {
      "name": "Assassin",
      "meta": "Medium humanoid, any",
      "armor_class": "15 (Studded Leather)",
      "hit_points": "78 (12d8 + 24)",
      "speed": "30 ft. ",
      "saving_throws": "DEX +6, INT +4",
      "skills": "Acrobatics +6, Deception +3, Perception +3, Stealth +9",
      "damage_resistances": "Poison",
      "senses": "Passive Perception 13",
      "languages": "Thieves' cant plus any two languages",
      "challenge": "8 (3,900 XP)",
      "traits": [
        {
          "name": "Assassinate.",
          "content": "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit."
        },
        {
          "name": "Evasion.",
          "content": "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
        },
        {
          "name": "Sneak Attack.",
          "content": "Once per turn, the assassin deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The assassin makes two shortsword attacks."
        },
        {
          "name": "Shortsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Light Crossbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+6 to hit, range 80/320 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/910/315/315/636334293020978804.png",
      "id": "zRUBQYVUFoMbbB90qZ3Kp",
      "ability_scores": {
        "STR": "11",
        "DEX": "16",
        "CON": "14",
        "INT": "13",
        "WIS": "11",
        "CHA": "10"
      }
    },
    {
      "name": "Awakened Shrub",
      "meta": "Small plant, unaligned",
      "armor_class": "9 ",
      "hit_points": "10 (3d6)",
      "speed": "20 ft. ",
      "damage_vulnerabilities": "Fire",
      "damage_resistances": "Piercing",
      "senses": "Passive Perception 10",
      "languages": "One language known by its creator",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "False Appearance.",
          "content": "While the shrub remains motionless, it is indistinguishable from a normal shrub."
        }
      ],
      "actions": [
        {
          "name": "Rake.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+1 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 (1d4 \u2212 1) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg",
      "id": "mqP3U-Bk2RBwIcamvo4GT",
      "ability_scores": {
        "STR": "3",
        "DEX": "8",
        "CON": "11",
        "INT": "10",
        "WIS": "10",
        "CHA": "6"
      }
    },
    {
      "name": "Awakened Tree",
      "meta": "Huge plant, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "59 (7d12 + 14)",
      "speed": "20 ft. ",
      "damage_vulnerabilities": "Fire",
      "damage_resistances": "Bludgeoning, Piercing",
      "senses": "Passive Perception 10",
      "languages": "One language known by its creator",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "False Appearance.",
          "content": "While the tree remains motionless, it is indistinguishable from a normal tree."
        }
      ],
      "actions": [
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 10 ft., one target.",
          "attack_dmg": "14 (3d6 + 4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg",
      "id": "kkh2ukJ0pY27_wAXvbue9",
      "ability_scores": {
        "STR": "19",
        "DEX": "6",
        "CON": "15",
        "INT": "10",
        "WIS": "10",
        "CHA": "7"
      }
    },
    {
      "name": "Axe Beak",
      "meta": "Large beast, unaligned",
      "armor_class": "11 ",
      "hit_points": "19 (3d10 + 3)",
      "speed": "50 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "actions": [
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "ctOLfJLlrIUaKnOx4Ob2S",
      "ability_scores": {
        "STR": "14",
        "DEX": "12",
        "CON": "12",
        "INT": "2",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Azer",
      "meta": "Medium elemental, lawful neutral",
      "armor_class": "17 (Natural Armor, Shield)",
      "hit_points": "39 (6d8 + 12)",
      "speed": "30 ft. ",
      "saving_throws": "CON +4",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Passive Perception 11",
      "languages": "Ignan",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Heated Body.",
          "content": "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage."
        },
        {
          "name": "Heated Weapons.",
          "content": "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)."
        },
        {
          "name": "Illumination.",
          "content": "The azer sheds bright light in a 10-\u00adfoot radius and dim light for an additional 10 feet."
        }
      ],
      "actions": [
        {
          "name": "Warhammer.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/171/1000/1000/636252761112348397.jpeg",
      "id": "9sHVPb8wEk1qyuWb1GNpi",
      "ability_scores": {
        "STR": "17",
        "DEX": "12",
        "CON": "15",
        "INT": "12",
        "WIS": "13",
        "CHA": "10"
      }
    },
    {
      "name": "Baboon",
      "meta": "Small beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "3 (1d6)",
      "speed": "30 ft., climb 30 ft. ",
      "senses": "Passive Perception 11",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Pack Tactics.",
          "content": "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+1 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 (1d4 \u2212 1) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "9r3yjaO_fuxraXr6BbUlM",
      "ability_scores": {
        "STR": "8",
        "DEX": "14",
        "CON": "11",
        "INT": "4",
        "WIS": "12",
        "CHA": "6"
      }
    },
    {
      "name": "Badger",
      "meta": "Tiny beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "3 (1d4 + 1)",
      "speed": "20 ft., burrow 5 ft. ",
      "senses": "Darkvision 30 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/528/1000/1000/636376327632236333.jpeg",
      "id": "7phHkt2CwCXcPYwKm0au8",
      "ability_scores": {
        "STR": "4",
        "DEX": "11",
        "CON": "12",
        "INT": "2",
        "WIS": "12",
        "CHA": "5"
      }
    },
    {
      "name": "Balor",
      "meta": "Huge fiend, chaotic evil",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "262 (21d12 + 126)",
      "speed": "40 ft., fly 80 ft. ",
      "saving_throws": "STR +14, CON +12, WIS +9, CHA +12",
      "damage_resistances": "Cold, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Truesight 120 ft.,  Passive Perception 13",
      "languages": "Abyssal, Telepathy 120 ft.",
      "challenge": "19 (22,000 XP)",
      "traits": [
        {
          "name": "Death Throes.",
          "content": "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons."
        },
        {
          "name": "Fire Aura.",
          "content": "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
        },
        {
          "name": "Magic Resistance.",
          "content": "The balor has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Magic Weapons.",
          "content": "The balor's weapon attacks are magical."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The balor makes two attacks: one with its longsword and one with its whip."
        },
        {
          "name": "Longsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 10 ft., one target.",
          "attack_dmg": "21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage.",
          "content": " If the balor scores a critical hit, it rolls damage dice three times, instead of twice."
        },
        {
          "name": "Whip.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 30 ft., one target.",
          "attack_dmg": "15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor."
        },
        {
          "name": "Teleport.",
          "content": "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/175/1000/1000/636252761612038117.jpeg",
      "id": "WJe9icwNRTgdn-1CDQqEn",
      "ability_scores": {
        "STR": "26",
        "DEX": "15",
        "CON": "22",
        "INT": "20",
        "WIS": "16",
        "CHA": "22"
      }
    },
    {
      "name": "Bandit",
      "meta": "Medium humanoid, any",
      "armor_class": "12 (Leather Armor)",
      "hit_points": "11 (2d8 + 2)",
      "speed": "30 ft. ",
      "senses": "Passive Perception 10",
      "languages": "Any one language (usually Common)",
      "challenge": "1/8 (25 XP)",
      "actions": [
        {
          "name": "Scimitar.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) slashing damage."
        },
        {
          "name": "Light Crossbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+3 to hit, range 80 ft./320 ft., one target.",
          "attack_dmg": "5 (1d8 + 1) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "fDQrI-oW5aCTR1g3hDYAC",
      "ability_scores": {
        "STR": "11",
        "DEX": "12",
        "CON": "12",
        "INT": "10",
        "WIS": "10",
        "CHA": "10"
      }
    },
    {
      "name": "Bandit Captain",
      "meta": "Medium humanoid, any",
      "armor_class": "15 (Studded Leather)",
      "hit_points": "65 (10d8 + 20)",
      "speed": "30 ft. ",
      "saving_throws": "STR +4, DEX +5, WIS +2",
      "skills": "Athletics +4, Deception +4",
      "senses": "Passive Perception 10",
      "languages": "Any two languages",
      "challenge": "2 (450 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."
        },
        {
          "name": "Scimitar.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) slashing damage."
        },
        {
          "name": "Dagger.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft. or range 20/60 ft., one target.",
          "attack_dmg": "5 (1d4 + 3) piercing damage."
        }
      ],
      "reactions": [
        {
          "name": "Parry.",
          "content": "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/181/1000/1000/636252761965117015.jpeg",
      "id": "iE73kljOWeUBgGwCji-WS",
      "ability_scores": {
        "STR": "15",
        "DEX": "16",
        "CON": "14",
        "INT": "14",
        "WIS": "11",
        "CHA": "14"
      }
    },
    {
      "name": "Banshee",
      "meta": "Medium undead, chaotic evil",
      "armor_class": "12 ",
      "hit_points": "58 (13d8)",
      "speed": "40 ft. (hover), walking 0 ft.",
      "saving_throws": "WIS +2, CHA +5",
      "damage_resistances": "Acid, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Cold, Necrotic, Poison",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Common, Elvish",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Detect Life.",
          "content": "The banshee can magically sense the presence of creatures up to 5 miles away that aren\u2019t undead or constructs. She knows the general direction they\u2019re in but not their exact locations."
        },
        {
          "name": "Incorporeal Movement.",
          "content": "The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object."
        }
      ],
      "actions": [
        {
          "name": "Corrupting Touch.",
          "type": "Melee Spell Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "12 (3d6 + 2) necrotic damage."
        },
        {
          "name": "Horrifying Visage.",
          "content": "Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A frightened target can repeat the saving throw at the end of each of its turns, with disadvantage if the banshee is within line of sight, ending the effect on itself on a success. If a target\u2019s saving throw is successful or the effect ends for it, the target is immune to the banshee\u2019s Horrifying Visage for the next 24 hours."
        },
        {
          "name": "Wail (1/Day).",
          "content": "The banshee releases a mournful wail, provided that she isn\u2019t in sunlight. This wail has no effect on constructs and undead. All other creatures within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 10 (3d6) psychic damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/446/315/315/636306384206418474.jpeg",
      "id": "h3k0PQfctu2Fnl2Jx3A0X",
      "ability_scores": {
        "STR": "1",
        "DEX": "14",
        "CON": "10",
        "INT": "12",
        "WIS": "11",
        "CHA": "17"
      }
    },
    {
      "name": "Barbed Devil",
      "meta": "Medium fiend, lawful evil",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "110 (13d8 + 52)",
      "speed": "30 ft. ",
      "saving_throws": "STR +6, CON +7, WIS +5, CHA +5",
      "skills": "Deception +5, Insight +5, Perception +8",
      "damage_resistances": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 18",
      "languages": "Infernal, Telepathy 120 ft.",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Barbed Hide.",
          "content": "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it."
        },
        {
          "name": "Devil's Sight.",
          "content": "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          "name": "Magic Resistance.",
          "content": "The devil has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) piercing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) piercing damage."
        },
        {
          "name": "Hurl Flame.",
          "type": "Ranged Spell Attack:",
          "attack_info": "+5 to hit, range 150 ft., one target.",
          "attack_dmg": "10 (3d6) fire damage.",
          "content": " If the target is a flammable object that isn't being worn or carried, it also catches fire."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/486/315/315/636376302569423870.jpeg",
      "id": "9ivSpvJ26YslUYm0CPikg",
      "ability_scores": {
        "STR": "16",
        "DEX": "17",
        "CON": "18",
        "INT": "12",
        "WIS": "14",
        "CHA": "14"
      }
    },
    {
      "name": "Basilisk",
      "meta": "Medium monstrosity, unaligned",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "52 (8d8 + 16)",
      "speed": "20 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 9",
      "languages": "--",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Petrifying Gaze.",
          "content": "If a creature starts its turn within 30 feet of the basilisk and the two of them can see each other, the basilisk can force the creature to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated. On a failed save, the creature magically begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.\n\nA creature that isn't surprised can avert its eyes to avoid the saving throw at the start of its turn. If it does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again.\n\nIf it looks at the basilisk in the meantime, it must immediately make the save. If the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/185/1000/1000/636252762168821795.jpeg",
      "id": "sPiBJ5pmVQvBowXlrvbZ7",
      "ability_scores": {
        "STR": "16",
        "DEX": "8",
        "CON": "15",
        "INT": "2",
        "WIS": "8",
        "CHA": "7"
      }
    },
    {
      "name": "Bat",
      "meta": "Tiny beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "1 (1d4 - 1)",
      "speed": "5 ft., fly 30 ft. ",
      "senses": "Blindsight 60 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Echolocation.",
          "content": "The bat can't use its blindsight while deafened."
        },
        {
          "name": "Keen Hearing.",
          "content": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+0 to hit, reach 5 ft., one creature.",
          "attack_dmg": "1 piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/305/1000/1000/636379812593010967.jpeg",
      "id": "I8_AwNrbUNHRdqrvWkft5",
      "ability_scores": {
        "STR": "2",
        "DEX": "15",
        "CON": "8",
        "INT": "2",
        "WIS": "12",
        "CHA": "4"
      }
    },
    {
      "name": "Bearded Devil",
      "meta": "Medium fiend, lawful evil",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "52 (8d8 + 16)",
      "speed": "30 ft. ",
      "saving_throws": "STR +5, CON +4, WIS +2",
      "damage_resistances": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 10",
      "languages": "Infernal, Telepathy 120 ft.",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Devil's Sight.",
          "content": "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          "name": "Magic Resistance.",
          "content": "The devil has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Steadfast.",
          "content": "The devil can't be frightened while it can see an allied creature within 30 feet of it."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The devil makes two attacks: one with its beard and one with its glaive."
        },
        {
          "name": "Beard.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one creature.",
          "attack_dmg": "6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute.",
          "content": " While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Glaive.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 10 ft., one target.",
          "attack_dmg": "8 (1d10 + 3) slashing damage.",
          "content": " If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/193/1000/1000/636252763397604505.jpeg",
      "id": "gNoNz6RWxV9jucY166VY1",
      "ability_scores": {
        "STR": "16",
        "DEX": "15",
        "CON": "15",
        "INT": "9",
        "WIS": "11",
        "CHA": "11"
      }
    },
    {
      "name": "Behir",
      "meta": "Huge monstrosity, neutral evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "168 (16d12 + 64)",
      "speed": "50 ft., climb 40 ft. ",
      "skills": "Perception +6, Stealth +7",
      "damage_immunities": "Lightning",
      "senses": "Darkvision 90 ft.,  Passive Perception 16",
      "languages": "Draconic",
      "challenge": "11 (7,200 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The behir makes two attacks: one with its bite and one to constrict."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "22 (3d10 + 6) piercing damage."
        },
        {
          "name": "Constrict.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one Large or smaller creature.",
          "attack_dmg": "17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage.",
          "content": " The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends."
        },
        {
          "name": "Lightning Breath (Recharge 5\u20136).",
          "content": "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Swallow.",
          "content": "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.\n\nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 feet of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/195/1000/1000/636252763748680024.jpeg",
      "id": "QWy8bNsTZnyiYlw--5MxO",
      "ability_scores": {
        "STR": "23",
        "DEX": "16",
        "CON": "18",
        "INT": "7",
        "WIS": "14",
        "CHA": "12"
      }
    },
    {
      "name": "Berserker",
      "meta": "Medium humanoid, any",
      "armor_class": "13 (Hide Armor)",
      "hit_points": "67 (9d8 + 27)",
      "speed": "30 ft. ",
      "senses": "Passive Perception 10",
      "languages": "Any one language (usually Common)",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Reckless.",
          "content": "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn."
        }
      ],
      "actions": [
        {
          "name": "Greataxe.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (1d12 + 3) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "r9zJqlz2KCkyYWnR3U6FI",
      "ability_scores": {
        "STR": "16",
        "DEX": "12",
        "CON": "17",
        "INT": "9",
        "WIS": "11",
        "CHA": "9"
      }
    },
    {
      "name": "Black Bear",
      "meta": "Medium beast, unaligned",
      "armor_class": "11 (Natural Armor)",
      "hit_points": "19 (3d8 + 6)",
      "speed": "40 ft., climb 30 ft. ",
      "skills": "Perception +3",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The bear makes two attacks: one with its bite and one with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (2d4 + 2) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "ejy9M0PVBrq0z5ZfqGEfH",
      "ability_scores": {
        "STR": "15",
        "DEX": "10",
        "CON": "14",
        "INT": "2",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Black Dragon Wyrmling",
      "meta": "Medium dragon, chaotic evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "33 (6d8 + 6)",
      "speed": "30 ft., fly 60 ft., swim 30 ft. ",
      "saving_throws": "DEX +4, CON +3, WIS +2, CHA +3",
      "skills": "Perception +4, Stealth +4",
      "damage_immunities": "Acid",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Draconic",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage."
        },
        {
          "name": "Acid Breath (Recharge 5\u20136).",
          "content": "The dragon exhales acid in a 15-\u00adfoot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (5d8) acid damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/496/1000/1000/636376308217017511.jpeg",
      "id": "rPlLRfn2Rhzvq6aEyrNWY",
      "ability_scores": {
        "STR": "15",
        "DEX": "14",
        "CON": "13",
        "INT": "10",
        "WIS": "11",
        "CHA": "13"
      }
    },
    {
      "name": "Black Pudding",
      "meta": "Large ooze, unaligned",
      "armor_class": "7 ",
      "hit_points": "85 (10d10 + 30)",
      "speed": "20 ft., climb 20 ft. ",
      "damage_immunities": "Acid, Cold, Lightning, Slashing",
      "condition_immunities": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone",
      "senses": "Blindsight 60 ft.,  Passive Perception 8",
      "languages": "--",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Amorphous.",
          "content": "The pudding can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          "name": "Corrosive Form.",
          "content": "A creature that touches the pudding or hits it with a melee attack while within 5 feet of it takes 4 (1d8) acid damage. Any nonmagical weapon made of metal or wood that hits the pudding corrodes. After dealing damage, the weapon takes a permanent and cumulative \u22121 penalty to damage rolls. If its penalty drops to \u22125, the weapon is destroyed.\n\nNonmagical ammunition made of metal or wood that hits the pudding is destroyed after dealing damage.\n\nThe pudding can eat through 2-inch-thick, nonmagical wood or metal in 1 round."
        },
        {
          "name": "Spider Climb.",
          "content": "The pudding can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        }
      ],
      "actions": [
        {
          "name": "Pseudopod.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage.",
          "content": " In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative \u22121 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
        }
      ],
      "reactions": [
        {
          "name": "Split.",
          "content": "When a pudding that is Medium or larger is subjected to lightning or slashing damage, it splits into two new puddings if it has at least 10 hit points. Each new pudding has hit points equal to half the original pudding's, rounded down. New puddings are one size smaller than the original pudding."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/201/315/315/636252764027417823.jpeg",
      "id": "hkFT522mYNed-OahbxXps",
      "ability_scores": {
        "STR": "16",
        "DEX": "5",
        "CON": "16",
        "INT": "1",
        "WIS": "6",
        "CHA": "1"
      }
    },
    {
      "name": "Blink Dog",
      "meta": "Medium fey, lawful good",
      "armor_class": "13 ",
      "hit_points": "22 (4d8 + 4)",
      "speed": "40 ft. ",
      "skills": "Perception +3, Stealth +5",
      "senses": "Passive Perception 13",
      "languages": "Understands Sylvan but can't speak it",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Smell.",
          "content": "The dog has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) piercing damage."
        },
        {
          "name": "Teleport (Recharge 4\u20136).",
          "content": "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 feet to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/205/315/315/636252764168652859.jpeg",
      "id": "yMiX1uUdFb8HMr3FnJmk9",
      "ability_scores": {
        "STR": "12",
        "DEX": "17",
        "CON": "12",
        "INT": "10",
        "WIS": "13",
        "CHA": "11"
      }
    },
    {
      "name": "Blood Hawk",
      "meta": "Small beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "7 (2d6)",
      "speed": "10 ft., fly 60 ft. ",
      "skills": "Perception +4",
      "senses": "Passive Perception 14",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Keen Sight.",
          "content": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
        },
        {
          "name": "Pack Tactics.",
          "content": "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d4 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "5FUoK7O8S1Kq2ID-ae-2c",
      "ability_scores": {
        "STR": "6",
        "DEX": "14",
        "CON": "10",
        "INT": "3",
        "WIS": "14",
        "CHA": "5"
      }
    },
    {
      "name": "Blue Dragon Wyrmling",
      "meta": "Medium dragon, lawful evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "52 (8d8 + 16)",
      "speed": "30 ft., burrow 15 ft., fly 60 ft. ",
      "saving_throws": "DEX +2, CON +4, WIS +2, CHA +4",
      "skills": "Perception +4, Stealth +2",
      "damage_immunities": "Lightning",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Draconic",
      "challenge": "3 (700 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage."
        },
        {
          "name": "Lightning Breath (Recharge 5\u20136).",
          "content": "The dragon exhales lightning in a 30-\u00adfoot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/209/1000/1000/636252764637244026.jpeg",
      "id": "tJWnb6fPk8nEXon_8kdIz",
      "ability_scores": {
        "STR": "17",
        "DEX": "10",
        "CON": "15",
        "INT": "12",
        "WIS": "11",
        "CHA": "15"
      }
    },
    {
      "name": "Boar",
      "meta": "Medium beast, unaligned",
      "armor_class": "11 (Natural Armor)",
      "hit_points": "11 (2d8 + 2)",
      "speed": "40 ft. ",
      "senses": "Passive Perception 9",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
        },
        {
          "name": "Relentless (Recharges after a Short or Long Rest).",
          "content": "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
        }
      ],
      "actions": [
        {
          "name": "Tusk.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "0kwP6N2DcPbok-vnp4vTb",
      "ability_scores": {
        "STR": "13",
        "DEX": "11",
        "CON": "12",
        "INT": "2",
        "WIS": "9",
        "CHA": "5"
      }
    },
    {
      "name": "Bone Devil",
      "meta": "Large fiend, lawful evil",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "142 (15d10 + 60)",
      "speed": "40 ft., fly 40 ft. ",
      "saving_throws": "INT +5, WIS +6, CHA +7",
      "skills": "Deception +7, Insight +6",
      "damage_resistances": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 12",
      "languages": "Infernal, Telepathy 120 ft.",
      "challenge": "9 (5,000 XP)",
      "traits": [
        {
          "name": "Devil's Sight.",
          "content": "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          "name": "Magic Resistance.",
          "content": "The devil has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The devil makes three attacks: two with its claws and one with its sting."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 10 ft., one target.",
          "attack_dmg": "8 (1d8 + 4) slashing damage."
        },
        {
          "name": "Sting.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 10 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute.",
          "content": " The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/481/1000/1000/636328225187253200.jpeg",
      "id": "LRcj8dt4ThjkfmlxWDLlK",
      "ability_scores": {
        "STR": "18",
        "DEX": "16",
        "CON": "18",
        "INT": "13",
        "WIS": "14",
        "CHA": "16"
      }
    },
    {
      "name": "Brass Dragon Wyrmling",
      "meta": "Medium dragon, chaotic good",
      "armor_class": "16 (Natural Armor)",
      "hit_points": "16 (3d8 + 3)",
      "speed": "30 ft., burrow 15 ft., fly 60 ft. ",
      "saving_throws": "DEX +2, CON +3, WIS +2, CHA +3",
      "skills": "Perception +4, Stealth +2",
      "damage_immunities": "Fire",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Draconic",
      "challenge": "1 (200 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d10 + 2) piercing damage."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Fire Breath.",
          "content": "The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Sleep Breath.",
          "content": "The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/215/315/315/636252764963208954.jpeg",
      "id": "khEgOe0Nx_pz-9-aWfWeO",
      "ability_scores": {
        "STR": "15",
        "DEX": "10",
        "CON": "13",
        "INT": "10",
        "WIS": "11",
        "CHA": "13"
      }
    },
    {
      "name": "Bronze Dragon Wyrmling",
      "meta": "Medium dragon, lawful good",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "32 (5d8 + 10)",
      "speed": "30 ft., fly 60 ft., swim 30 ft. ",
      "saving_throws": "DEX +2, CON +4, WIS +2, CHA +4",
      "skills": "Perception +4, Stealth +2",
      "damage_immunities": "Lightning",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Draconic",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d10 + 3) piercing damage."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Lightning Breath.",
          "content": "The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Repulsion Breath.",
          "content": "The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/492/315/315/636376306909593829.jpeg",
      "id": "FXpNYLyMdMSTU8MuHreEJ",
      "ability_scores": {
        "STR": "17",
        "DEX": "10",
        "CON": "15",
        "INT": "12",
        "WIS": "11",
        "CHA": "15"
      }
    },
    {
      "name": "Brown Bear",
      "meta": "Large beast, unaligned",
      "armor_class": "11 (Natural Armor)",
      "hit_points": "34 (4d10 + 12)",
      "speed": "40 ft., climb 30 ft. ",
      "skills": "Perception +3",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The bear makes two attacks: one with its bite and one with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d8 + 4) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "Sdx_MNrmwE36d13WMc8ta",
      "ability_scores": {
        "STR": "19",
        "DEX": "10",
        "CON": "16",
        "INT": "2",
        "WIS": "13",
        "CHA": "7"
      }
    },
    {
      "name": "Bugbear",
      "meta": "Medium humanoid, chaotic evil",
      "armor_class": "16 (Hide Armor, Shield)",
      "hit_points": "27 (5d8 + 5)",
      "speed": "30 ft. ",
      "skills": "Stealth +6, Survival +2",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Common, Goblin",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Brute.",
          "content": "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
        },
        {
          "name": "Surprise Attack.",
          "content": "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack."
        }
      ],
      "actions": [
        {
          "name": "Morningstar.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d8 + 2) piercing damage."
        },
        {
          "name": "Javelin.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft. or range 30/120 ft., one target.",
          "attack_dmg": "9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/221/1000/1000/636252765234633232.jpeg",
      "id": "e-ntc4wELEIqkx3YJBZXx",
      "ability_scores": {
        "STR": "15",
        "DEX": "14",
        "CON": "13",
        "INT": "8",
        "WIS": "11",
        "CHA": "9"
      }
    },
    {
      "name": "Bulette",
      "meta": "Large monstrosity, unaligned",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "94 (9d10 + 45)",
      "speed": "40 ft., burrow 40 ft. ",
      "skills": "Perception +6",
      "senses": "Darkvision 60 ft., Tremorsense 60 ft.,  Passive Perception 16",
      "languages": "--",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Standing Leap.",
          "content": "The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "30 (4d12 + 4) piercing damage."
        },
        {
          "name": "Deadly Leap.",
          "content": "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 feet out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/223/315/315/636252765369632881.jpeg",
      "id": "5hJlmlAhQF2Z-a5qCTMTs",
      "ability_scores": {
        "STR": "19",
        "DEX": "11",
        "CON": "21",
        "INT": "2",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Camel",
      "meta": "Large beast, unaligned",
      "armor_class": "9 ",
      "hit_points": "15 (2d10 + 4)",
      "speed": "50 ft. ",
      "senses": "Passive Perception 9",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "2 (1d4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "0Ez6n-De_AbioQRJ-ywa2",
      "ability_scores": {
        "STR": "16",
        "DEX": "8",
        "CON": "14",
        "INT": "2",
        "WIS": "8",
        "CHA": "5"
      }
    },
    {
      "name": "Cat",
      "meta": "Tiny beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "2 (1d4)",
      "speed": "40 ft., climb 30 ft. ",
      "skills": "Perception +3, Stealth +4",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The cat has advantage on Wisdom (Perception) checks that rely on smell."
        }
      ],
      "actions": [
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+0 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "6M8W_RsCdrUMurXk8EPQd",
      "ability_scores": {
        "STR": "3",
        "DEX": "15",
        "CON": "10",
        "INT": "3",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Centaur",
      "meta": "Large monstrosity, neutral good",
      "armor_class": "12 ",
      "hit_points": "45 (6d10 + 12)",
      "speed": "50 ft. ",
      "skills": "Athletics +6, Perception +3, Survival +3",
      "senses": "Passive Perception 13",
      "languages": "Elvish, Sylvan",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the centaur moves at least 30 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow."
        },
        {
          "name": "Pike.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 10 ft., one target.",
          "attack_dmg": "9 (1d10 + 4) piercing damage."
        },
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) bludgeoning damage."
        },
        {
          "name": "Longbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 150/600 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/227/1000/1000/636252765573266420.jpeg",
      "id": "9Pe95g_pr8Wy2435-BHbY",
      "ability_scores": {
        "STR": "18",
        "DEX": "14",
        "CON": "14",
        "INT": "9",
        "WIS": "13",
        "CHA": "11"
      }
    },
    {
      "name": "Chain Devil",
      "meta": "Medium fiend, lawful evil",
      "armor_class": "16 (Natural Armor)",
      "hit_points": "85 (10d8 + 40)",
      "speed": "30 ft. ",
      "saving_throws": "CON +7, WIS +4, CHA +5",
      "damage_resistances": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 11",
      "languages": "Infernal, Telepathy 120 ft.",
      "challenge": "8 (3,900 XP)",
      "traits": [
        {
          "name": "Devil's Sight.",
          "content": "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          "name": "Magic Resistance.",
          "content": "The devil has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The devil makes two attacks with its chains."
        },
        {
          "name": "Chain.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 10 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage.",
          "content": " The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns."
        },
        {
          "name": "Animate Chains (Recharges after a Short or Long Rest).",
          "content": "Up to four chains the devil can see within 60 feet of it magically sprout razor-\u00adedged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.\n\nEach animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies."
        }
      ],
      "reactions": [
        {
          "name": "Unnerving Mask.",
          "content": "When a creature the devil can see starts its turn within 30 feet of the devil, the devil can create the illusion that it looks like one of the creature's departed loved ones or bitter enemies. If the creature can see the devil, it must succeed on a DC 14 Wisdom saving throw or be frightened until the end of its turn."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/235/1000/1000/636252766618069332.jpeg",
      "id": "S-z2Nm5Von9rCQFfTuvIp",
      "ability_scores": {
        "STR": "18",
        "DEX": "15",
        "CON": "18",
        "INT": "11",
        "WIS": "12",
        "CHA": "14"
      }
    },
    {
      "name": "Chimera",
      "meta": "Large monstrosity, chaotic evil",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "114 (12d10 + 48)",
      "speed": "30 ft., fly 60 ft. ",
      "skills": "Perception +8",
      "senses": "Darkvision 60 ft.,  Passive Perception 18",
      "languages": "Understands Draconic but can't speak  it",
      "challenge": "6 (2,300 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) piercing damage."
        },
        {
          "name": "Horns.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (1d12 + 4) bludgeoning damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage."
        },
        {
          "name": "Fire Breath (Recharge 5\u20136).",
          "content": "The dragon head exhales fire in a 15-\u00ad-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/237/1000/1000/636252766770156389.jpeg",
      "id": "J3HZDaT01cmiPkFy9OODd",
      "ability_scores": {
        "STR": "19",
        "DEX": "11",
        "CON": "19",
        "INT": "3",
        "WIS": "14",
        "CHA": "10"
      }
    },
    {
      "name": "Chuul",
      "meta": "Large aberration, chaotic evil",
      "armor_class": "16 (Natural Armor)",
      "hit_points": "93 (11d10 + 33)",
      "speed": "30 ft., swim 30 ft. ",
      "skills": "Perception +4",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Understands Deep Speech but can't speak",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The chuul can breathe air and water."
        },
        {
          "name": "Sense Magic.",
          "content": "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once."
        },
        {
          "name": "Pincer.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 10 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) bludgeoning damage.",
          "content": " The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled."
        },
        {
          "name": "Tentacles.",
          "content": "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/241/1000/1000/636252767122656355.jpeg",
      "id": "sBsXqHoqVdbhTKsRrGB1t",
      "ability_scores": {
        "STR": "19",
        "DEX": "10",
        "CON": "16",
        "INT": "5",
        "WIS": "11",
        "CHA": "5"
      }
    },
    {
      "name": "Clay Golem",
      "meta": "Large construct, unaligned",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "133 (14d10 + 56)",
      "speed": "20 ft. ",
      "damage_immunities": "Acid, Poison, Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 9",
      "languages": "Understands the languages of its creator but can't speak",
      "challenge": "9 (5,000 XP)",
      "traits": [
        {
          "name": "Acid Absorption.",
          "content": "Whenever the golem is subjected to acid damage, it takes no damage and instead regains a number of hit points equal to the acid damage dealt."
        },
        {
          "name": "Berserk.",
          "content": "Whenever the golem starts its turn with 60 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points."
        },
        {
          "name": "Immutable Form.",
          "content": "The golem is immune to any spell or effect that would alter its form."
        },
        {
          "name": "Magic Resistance.",
          "content": "The golem has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Magic Weapons.",
          "content": "The golem's weapon attacks are magical."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The golem makes two slam attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one target.",
          "attack_dmg": "16 (2d10 + 5) bludgeoning damage.",
          "content": " If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic."
        },
        {
          "name": "Haste (Recharge 5\u20136).",
          "content": "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/243/315/315/636252767318152303.jpeg",
      "id": "Zdby8b_RFx8GuT8GqaWa6",
      "ability_scores": {
        "STR": "20",
        "DEX": "9",
        "CON": "18",
        "INT": "3",
        "WIS": "8",
        "CHA": "1"
      }
    },
    {
      "name": "Cloaker",
      "meta": "Large aberration, chaotic neutral",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "78 (12d10 + 12)",
      "speed": "10 ft., fly 40 ft. ",
      "skills": "Stealth +5",
      "senses": "Darkvision 60 ft.,  Passive Perception 11",
      "languages": "Deep Speech, Undercommon",
      "challenge": "8 (3,900 XP)",
      "traits": [
        {
          "name": "Damage Transfer.",
          "content": "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down), and that creature takes the other half."
        },
        {
          "name": "False Appearance.",
          "content": "While the cloaker remains motionless without its underside exposed, it is indistinguishable from a dark leather cloak."
        },
        {
          "name": "Light Sensitivity.",
          "content": "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The cloaker makes two attacks: one with its bite and one with its tail."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one creature.",
          "attack_dmg": "10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it.",
          "content": " If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 10 ft., one creature.",
          "attack_dmg": "7 (1d8 + 3) slashing damage."
        },
        {
          "name": "Moan.",
          "content": "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours."
        },
        {
          "name": "Phantasms (Recharges after a Short or Long Rest).",
          "content": "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.\n\nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.\n\nA duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/245/1000/1000/636252767458838228.jpeg",
      "id": "VWCmSSyCxHnlpeHehnuAF",
      "ability_scores": {
        "STR": "17",
        "DEX": "15",
        "CON": "12",
        "INT": "13",
        "WIS": "12",
        "CHA": "14"
      }
    },
    {
      "name": "Cloud Giant",
      "meta": "Huge giant, neutral",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "200 (16d12 + 96)",
      "speed": "40 ft. ",
      "saving_throws": "CON +10, WIS +7, CHA +7",
      "skills": "Insight +7, Perception +7",
      "senses": "Passive Perception 17",
      "languages": "Common, Giant",
      "challenge": "9 (5,000 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The giant has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The giant's innate spellcasting ability is Charisma. It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, fog cloud, light\n\n3/day each: feather fall, fly, misty step, telekinesis\n\n1/day each: control weather, gaseous form"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The giant makes two morningstar attacks."
        },
        {
          "name": "Morningstar.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+12 to hit, reach 10 ft., one target.",
          "attack_dmg": "21 (3d8 + 8) piercing damage."
        },
        {
          "name": "Rock.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+12 to hit, range 60/240 ft., one target.",
          "attack_dmg": "30 (4d10 + 8) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/249/1000/1000/636252767619414260.jpeg",
      "id": "wMrB75yRql29iBUU0MLRF",
      "ability_scores": {
        "STR": "27",
        "DEX": "10",
        "CON": "22",
        "INT": "12",
        "WIS": "16",
        "CHA": "16"
      }
    },
    {
      "name": "Cockatrice",
      "meta": "Small monstrosity, unaligned",
      "armor_class": "11 ",
      "hit_points": "27 (6d6 + 6)",
      "speed": "20 ft., fly 40 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one creature.",
          "attack_dmg": "3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified.",
          "content": " On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/251/315/315/636252767744669874.jpeg",
      "id": "rCXQGOs0v_GbXwHHtf85f",
      "ability_scores": {
        "STR": "6",
        "DEX": "12",
        "CON": "12",
        "INT": "2",
        "WIS": "13",
        "CHA": "5"
      }
    },
    {
      "name": "Commoner",
      "meta": "Medium humanoid, any",
      "armor_class": "10 ",
      "hit_points": "4 (1d8)",
      "speed": "30 ft. ",
      "senses": "Passive Perception 10",
      "languages": "Any one language (usually Common)",
      "challenge": "0 (10 XP)",
      "actions": [
        {
          "name": "Club.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "2 (1d4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "BlWvi1lTjz4Hv5KXOH1Rk",
      "ability_scores": {
        "STR": "10",
        "DEX": "10",
        "CON": "10",
        "INT": "10",
        "WIS": "10",
        "CHA": "10"
      }
    },
    {
      "name": "Constrictor Snake",
      "meta": "Large beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "13 (2d10 + 2)",
      "speed": "30 ft., swim 30 ft. ",
      "senses": "Blindsight 10 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Constrict.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14).",
          "content": " Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "WLtW0EFYN6o7iCMJGTgEu",
      "ability_scores": {
        "STR": "15",
        "DEX": "14",
        "CON": "12",
        "INT": "1",
        "WIS": "10",
        "CHA": "3"
      }
    },
    {
      "name": "Copper Dragon Wyrmling",
      "meta": "Medium dragon, chaotic good",
      "armor_class": "16 (Natural Armor)",
      "hit_points": "22 (4d8 + 4)",
      "speed": "30 ft., climb 30 ft., fly 60 ft. ",
      "saving_throws": "DEX +3, CON +3, WIS +2, CHA +3",
      "skills": "Perception +4, Stealth +3",
      "damage_immunities": "Acid",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Draconic",
      "challenge": "1 (200 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d10 + 2) piercing damage."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Acid Breath.",
          "content": "The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Slowing Breath.",
          "content": "The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/255/1000/1000/636252768002215182.jpeg",
      "id": "Krz5lI--0dGFZxceP6H3K",
      "ability_scores": {
        "STR": "15",
        "DEX": "12",
        "CON": "13",
        "INT": "14",
        "WIS": "11",
        "CHA": "13"
      }
    },
    {
      "name": "Couatl",
      "meta": "Medium celestial, lawful good",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "97 (13d8 + 39)",
      "speed": "30 ft., fly 90 ft. ",
      "saving_throws": "CON +5, WIS +7, CHA +6",
      "damage_resistances": "Radiant",
      "damage_immunities": "Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "senses": "Truesight 120 ft.,  Passive Perception 15",
      "languages": "All, Telepathy 120 ft.",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Innate Spellcasting.",
          "content": "The couatl's spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:\n\nAt will: detect evil and good, detect magic, detect thoughts\n\n3/day each: bless, create food and water, cure wounds, lesser restoration, protection from poison, sanctuary, shield\n\n1/day each: dream, greater restoration, scrying"
        },
        {
          "name": "Magic Weapons.",
          "content": "The couatl's weapon attacks are magical."
        },
        {
          "name": "Shielded Mind.",
          "content": "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one creature.",
          "attack_dmg": "8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours.",
          "content": " Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake."
        },
        {
          "name": "Constrict.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 10 ft., one Medium or smaller creature.",
          "attack_dmg": "10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15).",
          "content": " Until this grapple ends, the target is restrained, and the couatl can't constrict another target."
        },
        {
          "name": "Change Shape.",
          "content": "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).\n\nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/257/1000/1000/636252768143323827.jpeg",
      "id": "QYnzvzNDV5HuiZYzK7Snd",
      "ability_scores": {
        "STR": "16",
        "DEX": "20",
        "CON": "17",
        "INT": "18",
        "WIS": "20",
        "CHA": "18"
      }
    },
    {
      "name": "Crab",
      "meta": "Tiny beast, unaligned",
      "armor_class": "11 (Natural Armor)",
      "hit_points": "2 (1d4)",
      "speed": "20 ft., swim 20 ft. ",
      "skills": "Stealth +2",
      "senses": "Blindsight 30 ft.,  Passive Perception 9",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The crab can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+0 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "FiOJXTIgm849W8prrPivb",
      "ability_scores": {
        "STR": "2",
        "DEX": "11",
        "CON": "10",
        "INT": "1",
        "WIS": "8",
        "CHA": "2"
      }
    },
    {
      "name": "Crocodile",
      "meta": "Large beast, unaligned",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "19 (3d10 + 3)",
      "speed": "20 ft., swim 30 ft. ",
      "skills": "Stealth +2",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Hold Breath.",
          "content": "The crocodile can hold its breath for 15 minutes."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12).",
          "content": " Until this grapple ends, the target is restrained, and the crocodile can't bite another target."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "Av1UMFGTjy-kulRxIAJyH",
      "ability_scores": {
        "STR": "15",
        "DEX": "10",
        "CON": "13",
        "INT": "2",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Cult Fanatic",
      "meta": "Medium humanoid, any",
      "armor_class": "13 (Leather Armor)",
      "hit_points": "33 (6d8 + 6)",
      "speed": "30 ft. ",
      "skills": "Deception +4, Persuasion +4, Religion +2",
      "senses": "Passive Perception 11",
      "languages": "Any one language (usually Common)",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Dark Devotion.",
          "content": "The fanatic has advantage on saving throws against being charmed or frightened."
        },
        {
          "name": "Spellcasting.",
          "content": "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared:\n\nCantrips (at will): light, sacred flame, thaumaturgy\n\n1st level (4 slots): command, inflict wounds, shield of faith\n\n2nd level (3 slots): hold person, spiritual weapon"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The fanatic makes two melee attacks."
        },
        {
          "name": "Dagger.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft. or range 20/60 ft., one creature.",
          "attack_dmg": "4 (1d4 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/259/1000/1000/636252768307230924.jpeg",
      "id": "k9x4xLTHba5NPJLghxgbz",
      "ability_scores": {
        "STR": "11",
        "DEX": "14",
        "CON": "12",
        "INT": "10",
        "WIS": "13",
        "CHA": "14"
      }
    },
    {
      "name": "Cultist",
      "meta": "Medium humanoid, any",
      "armor_class": "12 (Leather Armor)",
      "hit_points": "9 (2d8)",
      "speed": "30 ft. ",
      "skills": "Deception +2, Religion +2",
      "senses": "Passive Perception 10",
      "languages": "Any one language (usually Common)",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Dark Devotion.",
          "content": "The cultist has advantage on saving throws against being charmed or frightened."
        }
      ],
      "actions": [
        {
          "name": "Scimitar.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one creature.",
          "attack_dmg": "4 (1d6 + 1) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/481/1000/1000/636364323106021375.png",
      "id": "YBLmHiWXyj2vRT65tj7B2",
      "ability_scores": {
        "STR": "11",
        "DEX": "12",
        "CON": "10",
        "INT": "10",
        "WIS": "11",
        "CHA": "10"
      }
    },
    {
      "name": "Cyclops",
      "meta": "Huge giant, chaotic neutral",
      "armor_class": "14 Natural Armor",
      "hit_points": "138 (12d12 + 60)",
      "speed": "30 ft. ",
      "senses": "Passive Perception 8",
      "languages": "Giant",
      "challenge": "6 (2,300 XP)",
      "traits": [
        {
          "name": "Poor Depth Perception.",
          "content": "The cyclops has disadvantage on any attack roll against a target more than 30 feet away."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The cyclops makes two greatclub attacks."
        },
        {
          "name": "Greatclub.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 10 ft., one target.",
          "attack_dmg": "19 (3d8 + 6) bludgeoning damage."
        },
        {
          "name": "Rock.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+9 to hit, range 30/120 ft., one target.",
          "attack_dmg": "28 (4d10 + 6) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/470/1000/1000/636376290137285130.jpeg",
      "id": "glQsf_qQdD8rvE5Cn-YuW",
      "ability_scores": {
        "STR": "22",
        "DEX": "11",
        "CON": "20",
        "INT": "8",
        "WIS": "6",
        "CHA": "10"
      }
    },
    {
      "name": "Darkmantle",
      "meta": "Small monstrosity, unaligned",
      "armor_class": "11 ",
      "hit_points": "22 (5d6 + 5)",
      "speed": "10 ft., fly 30 ft. ",
      "skills": "Stealth +3",
      "senses": "Blindsight 60 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Echolocation.",
          "content": "The darkmantle can't use its blindsight while deafened."
        },
        {
          "name": "False Appearance.",
          "content": "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite."
        }
      ],
      "actions": [
        {
          "name": "Crush.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one creature.",
          "attack_dmg": "6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target.",
          "content": " If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.\n\nWhile attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.\n\nA creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement."
        },
        {
          "name": "Darkness Aura (1/Day).",
          "content": "A 15-\u00ad-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/263/315/315/636252768676699519.jpeg",
      "id": "nO1XFlz3Xv3e3simSivTr",
      "ability_scores": {
        "STR": "16",
        "DEX": "12",
        "CON": "13",
        "INT": "2",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Death Dog",
      "meta": "Medium monstrosity, neutral evil",
      "armor_class": "12 ",
      "hit_points": "39 (6d8 + 12)",
      "speed": "40 ft. ",
      "skills": "Perception +5, Stealth +4",
      "senses": "Darkvision 120 ft.,  Passive Perception 15",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Two-Headed.",
          "content": "The dog has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, or knocked unconscious."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dog makes two bite attacks."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage.",
          "content": " If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/265/1000/1000/636252768823194310.jpeg",
      "id": "0EyhW6WZ-bTXpt9mjD6nC",
      "ability_scores": {
        "STR": "15",
        "DEX": "14",
        "CON": "14",
        "INT": "3",
        "WIS": "13",
        "CHA": "6"
      }
    },
    {
      "name": "Deep Gnome (Svirfneblin)",
      "meta": "Small humanoid, neutral good",
      "armor_class": "15 (Chain Shirt)",
      "hit_points": "16 (3d6 + 6)",
      "speed": "20 ft. ",
      "skills": "Investigation +3, Perception +2, Stealth +4",
      "senses": "Darkvision 120 ft.,  Passive Perception 12",
      "languages": "Gnomish, Terran, Undercommon",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Stone Camouflage.",
          "content": "The gnome has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        },
        {
          "name": "Gnome Cunning.",
          "content": "The gnome has advantage on Intelligence, Wisdom, and Charisma saving throws against magic."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The gnome\u2019s innate spellcasting ability is Intelligence (spell save DC 11). It can innately cast the following spells, requiring no material components:\n\nAt will: nondetection (self only)\n\n1/day each: blindness/deafness, blur, disguise self"
        }
      ],
      "actions": [
        {
          "name": "War Pick.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) piercing damage."
        },
        {
          "name": "Poisoned Dart.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 30/120 ft., one creature.",
          "attack_dmg": "4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute.",
          "content": " The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/112/1000/1000/636323610009818415.jpeg",
      "id": "7lOHECQzWRp_si1AZgOrn",
      "ability_scores": {
        "STR": "15",
        "DEX": "14",
        "CON": "14",
        "INT": "12",
        "WIS": "10",
        "CHA": "9"
      }
    },
    {
      "name": "Deer",
      "meta": "Medium beast, unaligned",
      "armor_class": "13 ",
      "hit_points": "4 (1d8)",
      "speed": "50 ft. ",
      "senses": "Passive Perception 12",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "2 (1d4) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "NGgSpKqeRYXYk3KD_IDf8",
      "ability_scores": {
        "STR": "11",
        "DEX": "16",
        "CON": "11",
        "INT": "2",
        "WIS": "14",
        "CHA": "5"
      }
    },
    {
      "name": "Deva",
      "meta": "Medium celestial, lawful good",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "136 (16d8 + 64)",
      "speed": "30 ft., fly 90 ft. ",
      "saving_throws": "WIS +9, CHA +9",
      "skills": "Insight +9, Perception +9",
      "damage_resistances": "Radiant; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "condition_immunities": "Charmed, Exhaustion, Frightened",
      "senses": "Darkvision 120 ft.,  Passive Perception 19",
      "languages": "All, Telepathy 120 ft.",
      "challenge": "10 (5,900 XP)",
      "traits": [
        {
          "name": "Angelic Weapons.",
          "content": "The deva's weapon attacks are magical. When the deva hits with any weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The deva's spellcasting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components:\n\nAt will: detect evil and good\n\n1/day each: commune, raise dead"
        },
        {
          "name": "Magic Resistance.",
          "content": "The deva has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The deva makes two melee attacks."
        },
        {
          "name": "Mace.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage."
        },
        {
          "name": "Healing Touch (3/Day).",
          "content": "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness."
        },
        {
          "name": "Change Shape.",
          "content": "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).\n\nIn a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/267/1000/1000/636252768980059444.jpeg",
      "id": "Hd3i3lUo87f5OspggfrUl",
      "ability_scores": {
        "STR": "18",
        "DEX": "18",
        "CON": "18",
        "INT": "17",
        "WIS": "20",
        "CHA": "20"
      }
    },
    {
      "name": "Dire Wolf",
      "meta": "Large beast, unaligned",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "37 (5d10 + 10)",
      "speed": "50 ft. ",
      "skills": "Perception +3, Stealth +4",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Smell.",
          "content": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          "name": "Pack Tactics.",
          "content": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) piercing damage.",
          "content": " If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/484/315/315/636376300478361995.jpeg",
      "id": "sfhQ1w-5ID_n5wL-n_F-V",
      "ability_scores": {
        "STR": "17",
        "DEX": "15",
        "CON": "15",
        "INT": "3",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Djinni",
      "meta": "Large elemental, chaotic good",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "161 (14d10 + 84)",
      "speed": "30 ft., fly 90 ft. ",
      "saving_throws": "DEX +6, WIS +7, CHA +9",
      "damage_immunities": "Lightning, Thunder",
      "senses": "Darkvision 120 ft.,  Passive Perception 13",
      "languages": "Auran",
      "challenge": "11 (7,200 XP)",
      "traits": [
        {
          "name": "Elemental Demise.",
          "content": "If the djinni dies, its body disintegrates into a warm breeze, leaving behind only equipment the djinni was wearing or carrying."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The djinni's innate spellcasting ability is Charisma (spell save DC 17, +9 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\n\nAt will: detect evil and good, detect magic, thunderwave\n\n3/day each: create food and water (can create wine instead of water) , tongues, wind walk\n\n1/day each: conjure elemental (air elemental only), creation, gaseous form, invisibility, major image, plane shift"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The djinni makes three scimitar attacks."
        },
        {
          "name": "Scimitar.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 5 ft., one target.",
          "attack_dmg": "12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice)."
        },
        {
          "name": "Create Whirlwind.",
          "content": "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.\n\nA creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/281/315/315/636252770322204007.jpeg",
      "id": "bJDzGdGZfuULQGw6cGHaU",
      "ability_scores": {
        "STR": "21",
        "DEX": "15",
        "CON": "22",
        "INT": "15",
        "WIS": "16",
        "CHA": "20"
      }
    },
    {
      "name": "Doppelganger",
      "meta": "Medium monstrosity, neutral",
      "armor_class": "14 ",
      "hit_points": "52 (8d8 + 16)",
      "speed": "30 ft. ",
      "skills": "Deception +6, Insight +3",
      "condition_immunities": "Charmed",
      "senses": "Darkvision 60 ft.,  Passive Perception 11",
      "languages": "Common",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Shapechanger.",
          "content": "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          "name": "Ambusher.",
          "content": "The doppelganger has advantage on attack rolls against any creature it has surprised."
        },
        {
          "name": "Surprise Attack.",
          "content": "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The doppelganger makes two melee attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d6 + 4) bludgeoning damage."
        },
        {
          "name": "Read Thoughts.",
          "content": "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/289/315/315/636252770983164351.jpeg",
      "id": "jB61M3Hn5BkMgQHfwI_9n",
      "ability_scores": {
        "STR": "11",
        "DEX": "18",
        "CON": "14",
        "INT": "11",
        "WIS": "12",
        "CHA": "14"
      }
    },
    {
      "name": "Draft Horse",
      "meta": "Large beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "19 (3d10 + 3)",
      "speed": "40 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "actions": [
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (2d4 + 4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "omorvAURjZpbgnxL76Rqm",
      "ability_scores": {
        "STR": "18",
        "DEX": "10",
        "CON": "12",
        "INT": "2",
        "WIS": "11",
        "CHA": "7"
      }
    },
    {
      "name": "Dragon Turtle",
      "meta": "Gargantuan dragon, neutral",
      "armor_class": "20 (Natural Armor)",
      "hit_points": "341 (22d20 + 110)",
      "speed": "20 ft., swim 40 ft. ",
      "saving_throws": "DEX +6, CON +11, WIS +7",
      "damage_resistances": "Fire",
      "senses": "Darkvision 120 ft.,  Passive Perception 11",
      "languages": "Aquan, Draconic",
      "challenge": "17 (18,000 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon turtle can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+13 to hit, reach 15 ft., one target.",
          "attack_dmg": "26 (3d12 + 7) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+13 to hit, reach 10 ft., one target.",
          "attack_dmg": "16 (2d8 + 7) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+13 to hit, reach 15 ft., one target.",
          "attack_dmg": "26 (3d12 + 7) bludgeoning damage.",
          "content": " If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone."
        },
        {
          "name": "Steam Breath (Recharge 5\u20136).",
          "content": "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/291/1000/1000/636252771128151641.jpeg",
      "id": "hcoFXSo14wpDz2ShvDOLM",
      "ability_scores": {
        "STR": "25",
        "DEX": "10",
        "CON": "20",
        "INT": "10",
        "WIS": "12",
        "CHA": "12"
      }
    },
    {
      "name": "Dretch",
      "meta": "Small fiend, chaotic evil",
      "armor_class": "11 (Natural Armor)",
      "hit_points": "18 (4d6 + 4)",
      "speed": "20 ft. ",
      "damage_resistances": "Cold, Fire, Lightning",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 9",
      "languages": "Abyssal, Telepathy 60 ft.",
      "challenge": "1/4 (50 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dretch makes two attacks: one with its bite and one with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "3 (1d6) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (2d4) slashing damage."
        },
        {
          "name": "Fetid Cloud (1/Day).",
          "content": "A 10\u00ad-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/293/1000/1000/636252771253285096.jpeg",
      "id": "GFPV2SGPq_DlJX0DU3ljd",
      "ability_scores": {
        "STR": "11",
        "DEX": "11",
        "CON": "12",
        "INT": "5",
        "WIS": "8",
        "CHA": "3"
      }
    },
    {
      "name": "Drider",
      "meta": "Large monstrosity, chaotic evil",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "123 (13d10 + 52)",
      "speed": "30 ft., climb 30 ft. ",
      "skills": "Perception +5, Stealth +9",
      "senses": "Darkvision 120 ft.,  Passive Perception 15",
      "languages": "Elvish, Undercommon",
      "challenge": "6 (2,300 XP)",
      "traits": [
        {
          "name": "Fey Ancestry.",
          "content": "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The drider's innate spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components:\n\nAt will: dancing lights\n\n1/day each: darkness, faerie fire"
        },
        {
          "name": "Spider Climb.",
          "content": "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          "name": "Sunlight Sensitivity.",
          "content": "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        {
          "name": "Web Walker.",
          "content": "The drider ignores movement restrictions caused by webbing."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one creature.",
          "attack_dmg": "2 (1d4) piercing damage plus 9 (2d8) poison damage."
        },
        {
          "name": "Longsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
        },
        {
          "name": "Longbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+6 to hit, range 150/600 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/295/1000/1000/636252771409285458.jpeg",
      "id": "zY4ac_tmKu1vuIay7XHBo",
      "ability_scores": {
        "STR": "16",
        "DEX": "16",
        "CON": "18",
        "INT": "13",
        "WIS": "14",
        "CHA": "12"
      }
    },
    {
      "name": "Drow",
      "meta": "Medium humanoid, neutral evil",
      "armor_class": "15 (Chain Shirt)",
      "hit_points": "13 (3d8)",
      "speed": "30 ft. ",
      "skills": "Perception +2, Stealth +4",
      "senses": "Darkvision 120 ft.,  Passive Perception 12",
      "languages": "Elvish, Undercommon",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Fey Ancestry.",
          "content": "The drow has advantage on saving throws against being charmed, and magic can\u2019t put the drow to sleep."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The drow\u2019s spellcasting ability is Charisma (spell save DC 11). It can innately cast the following spells, requiring no material components:\n\nAt will: dancing lights\n\n1/day each: darkness, faerie fire"
        },
        {
          "name": "Sunlight Sensitivity.",
          "content": "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Shortsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Hand Crossbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 30/120 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour.",
          "content": " If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/501/1000/1000/636376310726273495.jpeg",
      "id": "IyHatbqBSPXyYLvvfgINR",
      "ability_scores": {
        "STR": "10",
        "DEX": "14",
        "CON": "10",
        "INT": "11",
        "WIS": "11",
        "CHA": "12"
      }
    },
    {
      "name": "Druid",
      "meta": "Medium humanoid, any",
      "armor_class": "11 (16 With Barkskin)",
      "hit_points": "27 (5d8 + 5)",
      "speed": "30 ft. ",
      "skills": "Medicine +4, Nature +3, Perception +4",
      "senses": "Passive Perception 14",
      "languages": "Druidic plus any two languages",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Spellcasting.",
          "content": "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following druid spells prepared:\n\nCantrips (at will): druidcraft, produce flame, shillelagh\n\n1st level (4 slots): entangle, longstrider, speak with animals, thunderwave\n\n2nd level (3 slots): animal messenger, barkskin"
        }
      ],
      "actions": [
        {
          "name": "Quarterstaff.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit (+4 to hit with shillelagh), reach 5 ft., one target.",
          "attack_dmg": "3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if wielded with two hands, or 6 (1d8 + 2) bludgeoning damage with shillelagh."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/299/1000/1000/636252771583275655.jpeg",
      "id": "OtTj6SAmLBusgxaEaty7x",
      "ability_scores": {
        "STR": "10",
        "DEX": "12",
        "CON": "13",
        "INT": "12",
        "WIS": "15",
        "CHA": "11"
      }
    },
    {
      "name": "Dryad",
      "meta": "Medium fey, neutral",
      "armor_class": "11 (16 With Barkskin)",
      "hit_points": "22 (5d8)",
      "speed": "30 ft. ",
      "skills": "Perception +4, Stealth +5",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Elvish, Sylvan",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Innate Spellcasting.",
          "content": "The dryad's innate spellcasting ability is Charisma (spell save DC 14). The dryad can innately cast the following spells, requiring no material components:\n\nAt will: druidcraft\n\n3/day each: entangle, goodberry\n\n1/day each: barkskin, pass without trace, shillelagh"
        },
        {
          "name": "Magic Resistance.",
          "content": "The dryad has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Speak with Beasts and Plants.",
          "content": "The dryad can communicate with beasts and plants as if they shared a language."
        },
        {
          "name": "Tree Stride.",
          "content": "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger."
        }
      ],
      "actions": [
        {
          "name": "Club.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit (+6 to hit with shillelagh), reach 5 ft., one target.",
          "attack_dmg": "2 (1d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh."
        },
        {
          "name": "Fey Charm.",
          "content": "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.\n\nEach time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.\n\nThe dryad can have no more than one humanoid and up to three beasts charmed at a time."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/307/1000/1000/636252771953950206.jpeg",
      "id": "66mc6z9_fmbdWoy4_X5hp",
      "ability_scores": {
        "STR": "10",
        "DEX": "12",
        "CON": "11",
        "INT": "14",
        "WIS": "15",
        "CHA": "18"
      }
    },
    {
      "name": "Duergar",
      "meta": "Medium humanoid, lawful evil",
      "armor_class": "16 (Scale Mail, Shield)",
      "hit_points": "26 (4d8 + 8)",
      "speed": "25 ft. ",
      "damage_resistances": "Poison",
      "senses": "Darkvision 120 ft.,  Passive Perception 10",
      "languages": "Dwarvish, Undercommon",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Duergar Resilience.",
          "content": "The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being charmed or paralyzed."
        },
        {
          "name": "Sunlight Sensitivity.",
          "content": "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Enlarge (Recharges after a Short or Long Rest).",
          "content": "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
        },
        {
          "name": "War Pick.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged."
        },
        {
          "name": "Javelin.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft. or range 30/120 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged."
        },
        {
          "name": "Invisibility (Recharges after a Short or Long Rest).",
          "content": "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/309/1000/1000/636252772101183765.jpeg",
      "id": "nPHzFd64cQeJ0P_nsmrz6",
      "ability_scores": {
        "STR": "14",
        "DEX": "11",
        "CON": "14",
        "INT": "11",
        "WIS": "10",
        "CHA": "9"
      }
    },
    {
      "name": "Dust Mephit",
      "meta": "Small elemental, neutral evil",
      "armor_class": "12 ",
      "hit_points": "17 (5d6)",
      "speed": "30 ft., fly 30 ft. ",
      "skills": "Perception +2, Stealth +4",
      "damage_vulnerabilities": "Fire",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 12",
      "languages": "Auran, Terran",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Death Burst.",
          "content": "When the mephit dies, it explodes in a burst of dust. Each creature within 5 feet of it must then succeed on a DC 10 Constitution saving throw or be blinded for 1 minute. A blinded creature can repeat the saving throw on each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "(1/Day). The mephit can innately cast sleep, requiring no material components. Its innate spellcasting ability is Charisma."
        }
      ],
      "actions": [
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "4 (1d4 + 2) slashing damage."
        },
        {
          "name": "Blinding Breath (Recharge 6).",
          "content": "The mephit exhales a 15- foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/313/1000/1000/636252772213922157.jpeg",
      "id": "roOs2Nra9uGv6HrhP-dUe",
      "ability_scores": {
        "STR": "5",
        "DEX": "14",
        "CON": "10",
        "INT": "9",
        "WIS": "11",
        "CHA": "10"
      }
    },
    {
      "name": "Eagle",
      "meta": "Small beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "3 (1d6)",
      "speed": "10 ft., fly 60 ft. ",
      "skills": "Perception +4",
      "senses": "Passive Perception 14",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Keen Sight.",
          "content": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Talons.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d4 + 2) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/515/1000/1000/636376317171111968.jpeg",
      "id": "f_uhveOj236_2rJByGST5",
      "ability_scores": {
        "STR": "6",
        "DEX": "15",
        "CON": "10",
        "INT": "2",
        "WIS": "14",
        "CHA": "7"
      }
    },
    {
      "name": "Earth Elemental",
      "meta": "Large elemental, neutral",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "126 (12d10 + 60)",
      "speed": "30 ft., burrow 30 ft. ",
      "damage_vulnerabilities": "Thunder",
      "damage_resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Poison",
      "condition_immunities": "Exhaustion, Paralyzed, Petrified, Poisoned, Unconscious",
      "senses": "Darkvision 60 ft., Tremorsense 60 ft.,  Passive Perception 10",
      "languages": "Terran",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Earth Glide.",
          "content": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
        },
        {
          "name": "Siege Monster.",
          "content": "The elemental deals double damage to objects and structures."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The elemental makes two slam attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 10 ft., one target.",
          "attack_dmg": "14 (2d8 + 5) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/317/315/315/636252772331779404.jpeg",
      "id": "lDPRCn8s5Y1k-XIJILN-1",
      "ability_scores": {
        "STR": "20",
        "DEX": "8",
        "CON": "20",
        "INT": "5",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Efreeti",
      "meta": "Large elemental, lawful evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "200 (16d10 + 112)",
      "speed": "40 ft., fly 60 ft. ",
      "saving_throws": "INT +7, WIS +6, CHA +7",
      "damage_immunities": "Fire",
      "senses": "Darkvision 120 ft.,  Passive Perception 12",
      "languages": "Ignan",
      "challenge": "11 (7,200 XP)",
      "traits": [
        {
          "name": "Elemental Demise.",
          "content": "If the efreeti dies, its body disintegrates in a flash of fire and puff of smoke, leaving behind only equipment the efreeti was wearing or carrying."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The efreeti's innate spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic\n\n3/day: enlarge/reduce, tongues\n\n1/day each: conjure elemental (fire elemental only), gaseous form, invisibility, major image, plane shift, wall of fire"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The efreeti makes two scimitar attacks or uses its Hurl Flame twice."
        },
        {
          "name": "Scimitar.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage."
        },
        {
          "name": "Hurl Flame.",
          "type": "Ranged Spell Attack:",
          "attack_info": "+7 to hit, range 120 ft., one target.",
          "attack_dmg": "17 (5d6) fire damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/325/1000/1000/636252775714332067.jpeg",
      "id": "JgmaT0-zXaizbojKcq7pz",
      "ability_scores": {
        "STR": "22",
        "DEX": "12",
        "CON": "24",
        "INT": "16",
        "WIS": "15",
        "CHA": "16"
      }
    },
    {
      "name": "Elephant",
      "meta": "Huge beast, unaligned",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "76 (8d12 + 24)",
      "speed": "40 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Trampling Charge.",
          "content": "If the elephant moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Gore.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one target.",
          "attack_dmg": "19 (3d8 + 6) piercing damage."
        },
        {
          "name": "Stomp.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one prone creature.",
          "attack_dmg": "22 (3d10 + 6) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "ZDtqxqTF6iN2PZvKxxCMt",
      "ability_scores": {
        "STR": "22",
        "DEX": "9",
        "CON": "17",
        "INT": "3",
        "WIS": "11",
        "CHA": "6"
      }
    },
    {
      "name": "Elk",
      "meta": "Large beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "13 (2d10 + 2)",
      "speed": "50 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
        }
      ],
      "actions": [
        {
          "name": "Ram.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) bludgeoning damage."
        },
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one prone creature.",
          "attack_dmg": "8 (2d4 + 3) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "DYqmeIWFnibdEIGx1NVH4",
      "ability_scores": {
        "STR": "16",
        "DEX": "10",
        "CON": "12",
        "INT": "2",
        "WIS": "10",
        "CHA": "6"
      }
    },
    {
      "name": "Erinyes",
      "meta": "Medium fiend, lawful evil",
      "armor_class": "18 (Plate)",
      "hit_points": "153 (18d8 + 72)",
      "speed": "30 ft., fly 60 ft. ",
      "saving_throws": "DEX +7, CON +8, WIS +6, CHA +8",
      "damage_resistances": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Truesight 120 ft.,  Passive Perception 12",
      "languages": "Infernal, Telepathy 120 ft.",
      "challenge": "12 (8,400 XP)",
      "traits": [
        {
          "name": "Hellish Weapons.",
          "content": "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)."
        },
        {
          "name": "Magic Resistance.",
          "content": "The erinyes has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The erinyes makes three attacks."
        },
        {
          "name": "Longsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage."
        },
        {
          "name": "Longbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+7 to hit, range 150/600 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned.",
          "content": " The poison lasts until it is removed by the lesser restoration spell or similar magic."
        }
      ],
      "reactions": [
        {
          "name": "Parry.",
          "content": "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/329/1000/1000/636252776041158657.jpeg",
      "id": "QZLcyFgHvh5rqM5APQ8Jk",
      "ability_scores": {
        "STR": "18",
        "DEX": "16",
        "CON": "18",
        "INT": "14",
        "WIS": "14",
        "CHA": "18"
      }
    },
    {
      "name": "Ettercap",
      "meta": "Medium monstrosity, neutral evil",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "44 (8d8 + 8)",
      "speed": "30 ft., climb 30 ft. ",
      "skills": "Perception +3, Stealth +4, Survival +3",
      "senses": "Darkvision 60 ft.,  Passive Perception 13",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Spider Climb.",
          "content": "The ettercap can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          "name": "Web Sense.",
          "content": "While in contact with a web, the ettercap knows the exact location of any other creature in contact with the same web."
        },
        {
          "name": "Web Walker.",
          "content": "The ettercap ignores movement restrictions caused by webbing."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The ettercap makes two attacks: one with its bite and one with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage.",
          "content": " The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (2d4 + 2) slashing damage."
        },
        {
          "name": "Web (Recharge 5\u20136).",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 30/60 ft., one Large or smaller creature.",
          "attack_dmg": "The creature is restrained by webbing.",
          "content": " As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect also ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, vulnerability to fire damage, and immunity to bludgeoning, poison, and psychic damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/339/315/315/636252776771842998.jpeg",
      "id": "IhoY6ZCj37GDVj2s1bM1T",
      "ability_scores": {
        "STR": "14",
        "DEX": "15",
        "CON": "13",
        "INT": "7",
        "WIS": "12",
        "CHA": "8"
      }
    },
    {
      "name": "Ettin",
      "meta": "Large giant, chaotic evil",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "85 (10d10 + 30)",
      "speed": "40 ft. ",
      "skills": "Perception +4",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Giant, Orc",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Two Heads.",
          "content": "The ettin has advantage on Wisdom (Perception) checks and on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious."
        },
        {
          "name": "Wakeful.",
          "content": "When one of the ettin's heads is asleep, its other head is awake."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
        },
        {
          "name": "Battleaxe.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "14 (2d8 + 5) slashing damage."
        },
        {
          "name": "Morningstar.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "14 (2d8 + 5) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/341/1000/1000/636252776953634777.jpeg",
      "id": "VGvBFcnmwe8FHF4MzwUm6",
      "ability_scores": {
        "STR": "21",
        "DEX": "8",
        "CON": "17",
        "INT": "6",
        "WIS": "10",
        "CHA": "8"
      }
    },
    {
      "name": "Fire Elemental",
      "meta": "Large elemental, neutral",
      "armor_class": "13 ",
      "hit_points": "102 (12d10 + 36)",
      "speed": "50 ft. ",
      "damage_resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Ignan",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Fire Form.",
          "content": "The elemental can move through a space as narrow as 1 inch wide without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the creature takes 5 (1d10) fire damage at the start of each of its turns."
        },
        {
          "name": "Illumination.",
          "content": "The elemental sheds bright light in a 30-foot radius and dim light in an additional 30 feet."
        },
        {
          "name": "Water Susceptibility.",
          "content": "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The elemental makes two touch attacks."
        },
        {
          "name": "Touch.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) fire damage.",
          "content": " If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/343/1000/1000/636252777098624896.jpeg",
      "id": "fe5ckL8u84Y-YkEjhsGd5",
      "ability_scores": {
        "STR": "10",
        "DEX": "17",
        "CON": "16",
        "INT": "6",
        "WIS": "10",
        "CHA": "7"
      }
    },
    {
      "name": "Fire Giant",
      "meta": "Huge giant, lawful evil",
      "armor_class": "18 (Plate)",
      "hit_points": "162 (13d12 + 78)",
      "speed": "30 ft. ",
      "saving_throws": "DEX +3, CON +10, CHA +5",
      "skills": "Athletics +11, Perception +6",
      "damage_immunities": "Fire",
      "senses": "Passive Perception 16",
      "languages": "Giant",
      "challenge": "9 (5,000 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The giant makes two greatsword attacks."
        },
        {
          "name": "Greatsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 10 ft., one target.",
          "attack_dmg": "28 (6d6 + 7) slashing damage."
        },
        {
          "name": "Rock.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+11 to hit, range 60/240 ft., one target.",
          "attack_dmg": "29 (4d10 + 7) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/357/1000/1000/636252778143767005.jpeg",
      "id": "e5jAi2N3ZbdVGUO6_0D-3",
      "ability_scores": {
        "STR": "25",
        "DEX": "9",
        "CON": "23",
        "INT": "10",
        "WIS": "14",
        "CHA": "13"
      }
    },
    {
      "name": "Flameskull",
      "meta": "Tiny undead, neutral evil",
      "armor_class": "13 ",
      "hit_points": "40 (9d4 + 18)",
      "speed": "0 ft., fly 40 ft. (hover) ",
      "skills": "Arcana +5, Perception +2",
      "damage_resistances": "Lightning, Necrotic, Piercing",
      "damage_immunities": "Cold, Fire, Poison",
      "condition_immunities": "Charmed, Frightened, Paralyzed, Poisoned, Prone",
      "senses": "Darkvision 60 ft.,  Passive Perception 12",
      "languages": "Common",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Illumination.",
          "content": "The flameskull sheds either dim light in a 15-foot radius, or bright light in a 15-foot radius and dim light for an additional 15 feet. It can switch between the options as an action."
        },
        {
          "name": "Magic Resistance.",
          "content": "The flameskull has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Rejuvenation.",
          "content": "If the flameskull is destroyed, it regains all its hit points in 1 hour unless holy water is sprinkled on its remains or a dispel magic or remove curse spell is cast on them."
        },
        {
          "name": "Spellcasting.",
          "content": "The flameskull is a 5th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 13, +5 to hit with spell attacks). It requires no somatic or material components to cast its spells. The flameskull has the following wizard spells prepared:\n\nCantrip (at will): mage hand\n\n1st level (3 slots): magic missile, shield\n\n2nd level (2 slots): blur, flaming sphere\n\n3rd level (1 slot): fireball"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The flameskull uses Fire Ray twice."
        },
        {
          "name": "Fire Ray.",
          "type": "Ranged Spell Attack:",
          "attack_info": "+5 to hit, range 30 ft., one target.",
          "attack_dmg": "10 (3d6) fire damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/487/315/315/636364325235118776.png",
      "id": "w_SMSogXnC6zUfIOgQg9p",
      "ability_scores": {
        "STR": "1",
        "DEX": "17",
        "CON": "14",
        "INT": "16",
        "WIS": "10",
        "CHA": "11"
      }
    },
    {
      "name": "Flesh Golem",
      "meta": "Medium construct, neutral",
      "armor_class": "9 ",
      "hit_points": "93 (11d8 + 44)",
      "speed": "30 ft. ",
      "damage_immunities": "Lightning, Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Understands the languages of its creator but can't speak",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Berserk.",
          "content": "Whenever the golem starts its turn with 40 hit points or fewer, roll a d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object, with preference for an object smaller than itself. Once the golem goes berserk, it continues to do so until it is destroyed or regains all its hit points.\n\nThe golem's creator, if within 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively. The golem must be able to hear its creator, who must take an action to make a DC 15 Charisma (Persuasion) check. If the check succeeds, the golem ceases being berserk. If it takes damage while still at 40 hit points or fewer, the golem might go berserk again."
        },
        {
          "name": "Aversion of Fire.",
          "content": "If the golem takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
        },
        {
          "name": "Immutable Form.",
          "content": "The golem is immune to any spell or effect that would alter its form."
        },
        {
          "name": "Lightning Absorption.",
          "content": "Whenever the golem is subjected to lightning damage, it takes no damage and instead regains a number of hit points equal to the lightning damage dealt."
        },
        {
          "name": "Magic Resistance.",
          "content": "The golem has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Magic Weapons.",
          "content": "The golem's weapon attacks are magical."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The golem makes two slam attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/359/315/315/636252778311644574.jpeg",
      "id": "xSPehL8jp3vHqNVZMX69_",
      "ability_scores": {
        "STR": "19",
        "DEX": "9",
        "CON": "18",
        "INT": "6",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Flying Snake",
      "meta": "Tiny beast, unaligned",
      "armor_class": "14 ",
      "hit_points": "5 (2d4)",
      "speed": "30 ft., fly 60 ft., swim 30 ft. ",
      "senses": "Blindsight 10 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Flyby.",
          "content": "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 piercing damage plus 7 (3d4) poison damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/517/1000/1000/636376319640572721.jpeg",
      "id": "MTstiz8LLYeiAXbWNyCo1",
      "ability_scores": {
        "STR": "4",
        "DEX": "18",
        "CON": "11",
        "INT": "2",
        "WIS": "12",
        "CHA": "5"
      }
    },
    {
      "name": "Flying Sword",
      "meta": "Small construct, unaligned",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "17 (5d6)",
      "speed": "0 ft., fly 50 ft. (hover) ",
      "saving_throws": "DEX +4",
      "damage_immunities": "Poison, Psychic",
      "condition_immunities": "Blinded, Charmed, Deafened, Frightened, Paralyzed, Petrified, Poisoned",
      "senses": "Blindsight 60 ft.,  Passive Perception 7",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Antimagic Susceptibility.",
          "content": "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
        },
        {
          "name": "False Appearance.",
          "content": "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword."
        }
      ],
      "actions": [
        {
          "name": "Longsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d8 + 1) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/77/599/1000/1000/636473151106171093.png",
      "id": "4OeGOhDd4JF36_UtxXjkK",
      "ability_scores": {
        "STR": "12",
        "DEX": "15",
        "CON": "11",
        "INT": "1",
        "WIS": "5",
        "CHA": "1"
      }
    },
    {
      "name": "Frog",
      "meta": "Tiny beast, unaligned",
      "armor_class": "11 ",
      "hit_points": "1 (1d4 - 1)",
      "speed": "20 ft., swim 20 ft. ",
      "skills": "Perception +1, Stealth +3",
      "senses": "Darkvision 30 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The frog can breathe air and water."
        },
        {
          "name": "Standing Leap.",
          "content": "The frog's long jump is up to 10 feet and its high jump is up to 5 feet, with or without a running start."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/523/315/315/636376321230650501.jpeg",
      "id": "d_BdVHhZSh89zbsHX-2nt",
      "ability_scores": {
        "STR": "1",
        "DEX": "13",
        "CON": "8",
        "INT": "1",
        "WIS": "8",
        "CHA": "3"
      }
    },
    {
      "name": "Frost Giant",
      "meta": "Huge giant, neutral evil",
      "armor_class": "15 (Patchwork Armor)",
      "hit_points": "138 (12d12 + 60)",
      "speed": "40 ft. ",
      "saving_throws": "CON +8, WIS +3, CHA +4",
      "skills": "Athletics +9, Perception +3",
      "damage_immunities": "Cold",
      "senses": "Passive Perception 13",
      "languages": "Giant",
      "challenge": "8 (3,900 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The giant makes two greataxe attacks."
        },
        {
          "name": "Greataxe.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 10 ft., one target.",
          "attack_dmg": "25 (3d12 + 6) slashing damage."
        },
        {
          "name": "Rock.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+9 to hit, range 60/240 ft., one target.",
          "attack_dmg": "28 (4d10 + 6) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/405/1000/1000/636252786158646348.jpeg",
      "id": "BZ-xopYni90Ron12g7QhN",
      "ability_scores": {
        "STR": "23",
        "DEX": "9",
        "CON": "21",
        "INT": "9",
        "WIS": "10",
        "CHA": "12"
      }
    },
    {
      "name": "Gargoyle",
      "meta": "Medium elemental, chaotic evil",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "52 (7d8 + 21)",
      "speed": "30 ft., fly 60 ft. ",
      "damage_resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
      "damage_immunities": "Poison",
      "condition_immunities": "Exhaustion, Petrified, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Terran",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "False Appearance.",
          "content": "While the gargoyle remains motionless, it is indistinguishable from an inanimate statue."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The gargoyle makes two attacks: one with its bite and one with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/407/315/315/636252786295384889.jpeg",
      "id": "LSGY6mDqYCigQR5_K08up",
      "ability_scores": {
        "STR": "15",
        "DEX": "11",
        "CON": "16",
        "INT": "6",
        "WIS": "11",
        "CHA": "7"
      }
    },
    {
      "name": "Gelatinous Cube",
      "meta": "Large ooze, unaligned",
      "armor_class": "6 ",
      "hit_points": "84 (8d10 + 40)",
      "speed": "15 ft. ",
      "condition_immunities": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone",
      "senses": "Blindsight 60 ft.,  Passive Perception 8",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Ooze Cube.",
          "content": "The cube takes up its entire space. Other creatures can enter the space, but a creature that does so is subjected to the cube's Engulf and has disadvantage on the saving throw.\n\nCreatures inside the cube can be seen but have total cover.\n\nA creature within 5 feet of the cube can take an action to pull a creature or object out of the cube. Doing so requires a successful DC 12 Strength check, and the creature making the attempt takes 10 (3d6) acid damage.\n\nThe cube can hold only one Large creature or up to four Medium or smaller creatures inside it at a time."
        },
        {
          "name": "Transparent.",
          "content": "Even when the cube is in plain sight, it takes a successful DC 15 Wisdom (Perception) check to spot a cube that has neither moved nor attacked. A creature that tries to enter the cube's space while unaware of the cube is surprised by the cube."
        }
      ],
      "actions": [
        {
          "name": "Pseudopod.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "10 (3d6) acid damage."
        },
        {
          "name": "Engulf.",
          "content": "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.\n\nOn a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.\n\nOn a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.\n\nAn engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/409/1000/1000/636252786406028958.jpeg",
      "id": "Cj9Vapoe4ZErNF711zG9R",
      "ability_scores": {
        "STR": "14",
        "DEX": "3",
        "CON": "20",
        "INT": "1",
        "WIS": "6",
        "CHA": "1"
      }
    },
    {
      "name": "Ghast",
      "meta": "Medium undead, chaotic evil",
      "armor_class": "13 ",
      "hit_points": "36 (8d8)",
      "speed": "30 ft. ",
      "damage_resistances": "Necrotic",
      "damage_immunities": "Poison",
      "condition_immunities": "Charmed, Exhaustion, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Common",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Stench.",
          "content": "Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours."
        },
        {
          "name": "Turning Defiance.",
          "content": "The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one creature.",
          "attack_dmg": "12 (2d8 + 3) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) slashing damage.",
          "content": " If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/411/315/315/636252786516023032.jpeg",
      "id": "Zlr-r56tUej1aBDlzwRVg",
      "ability_scores": {
        "STR": "16",
        "DEX": "17",
        "CON": "10",
        "INT": "11",
        "WIS": "10",
        "CHA": "8"
      }
    },
    {
      "name": "Ghost",
      "meta": "Medium undead, any",
      "armor_class": "11 ",
      "hit_points": "45 (10d8)",
      "speed": "0 ft., fly 40 ft. (hover) ",
      "damage_resistances": "Acid, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Cold, Necrotic, Poison",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
      "senses": "Darkvision 60 ft.,  Passive Perception 11",
      "languages": "Any languages it knew in life",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Ethereal Sight.",
          "content": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa."
        },
        {
          "name": "Incorporeal Movement.",
          "content": "The ghost can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
        }
      ],
      "actions": [
        {
          "name": "Withering Touch.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "17 (4d6 + 3) necrotic damage."
        },
        {
          "name": "Etherealness.",
          "content": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
        },
        {
          "name": "Horrifying Visage.",
          "content": "Each non-undead creature within 60 feet of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 \u00d7 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring."
        },
        {
          "name": "Possession (Recharge 6).",
          "content": "One humanoid that the ghost can see within 5 feet of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.\n\nThe possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 feet of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/413/1000/1000/636252786639798307.jpeg",
      "id": "hv_IcYdbRsKgf3zRg94cG",
      "ability_scores": {
        "STR": "7",
        "DEX": "13",
        "CON": "10",
        "INT": "10",
        "WIS": "12",
        "CHA": "17"
      }
    },
    {
      "name": "Ghoul",
      "meta": "Medium undead, chaotic evil",
      "armor_class": "12 ",
      "hit_points": "22 (5d8)",
      "speed": "30 ft. ",
      "damage_immunities": "Poison",
      "condition_immunities": "Charmed, Exhaustion, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Common",
      "challenge": "1 (200 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one creature.",
          "attack_dmg": "9 (2d6 + 2) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (2d4 + 2) slashing damage.",
          "content": " If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/483/315/315/636364323937041514.png",
      "id": "U7_0dDm1ZyWUUy5xYMJsc",
      "ability_scores": {
        "STR": "13",
        "DEX": "15",
        "CON": "10",
        "INT": "7",
        "WIS": "10",
        "CHA": "6"
      }
    },
    {
      "name": "Giant Ape",
      "meta": "Huge beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "157 (15d12 + 60)",
      "speed": "40 ft., climb 40 ft. ",
      "skills": "Athletics +9, Perception +4",
      "senses": "Passive Perception 14",
      "languages": "--",
      "challenge": "7 (2,900 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The ape makes two fist attacks."
        },
        {
          "name": "Fist.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 10 ft., one target.",
          "attack_dmg": "22 (3d10 + 6) bludgeoning damage."
        },
        {
          "name": "Rock.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+9 to hit, range 50/100 ft., one target.",
          "attack_dmg": "30 (7d6 + 6) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "Gjj8P-ju0yTHlWePsUIyd",
      "ability_scores": {
        "STR": "23",
        "DEX": "14",
        "CON": "18",
        "INT": "7",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Giant Badger",
      "meta": "Medium beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "13 (2d8 + 4)",
      "speed": "30 ft., burrow 10 ft. ",
      "senses": "Darkvision 30 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The badger has advantage on Wisdom (Perception) checks that rely on smell."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The badger makes two attacks: one with its bite and one with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (2d4 + 1) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/530/1000/1000/636376327839601860.jpeg",
      "id": "FMKV9v12gkxfymLm1iPD_",
      "ability_scores": {
        "STR": "13",
        "DEX": "10",
        "CON": "15",
        "INT": "2",
        "WIS": "12",
        "CHA": "5"
      }
    },
    {
      "name": "Giant Bat",
      "meta": "Large beast, unaligned",
      "armor_class": "13 ",
      "hit_points": "22 (4d10)",
      "speed": "10 ft., fly 60 ft. ",
      "senses": "Blindsight 60 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Echolocation.",
          "content": "The bat can't use its blindsight while deafened."
        },
        {
          "name": "Keen Hearing.",
          "content": "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "4bQ1MC1-JrAE51CSCrFo6",
      "ability_scores": {
        "STR": "15",
        "DEX": "16",
        "CON": "11",
        "INT": "2",
        "WIS": "12",
        "CHA": "6"
      }
    },
    {
      "name": "Giant Boar",
      "meta": "Large beast, unaligned",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "42 (5d10 + 15)",
      "speed": "40 ft. ",
      "senses": "Passive Perception 8",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the boar moves at least 20 feet straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
        },
        {
          "name": "Relentless (Recharges after a Short or Long Rest).",
          "content": "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
        }
      ],
      "actions": [
        {
          "name": "Tusk.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "KiLfrd-rNm8xvkIOJed6y",
      "ability_scores": {
        "STR": "17",
        "DEX": "10",
        "CON": "16",
        "INT": "2",
        "WIS": "7",
        "CHA": "5"
      }
    },
    {
      "name": "Giant Centipede",
      "meta": "Small beast, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "4 (1d6 + 1)",
      "speed": "30 ft., climb 30 ft. ",
      "senses": "Blindsight 30 ft.,  Passive Perception 8",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage.",
          "content": " If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "Tr8zLbxekfZtMGjU3ztDP",
      "ability_scores": {
        "STR": "5",
        "DEX": "14",
        "CON": "12",
        "INT": "1",
        "WIS": "7",
        "CHA": "3"
      }
    },
    {
      "name": "Giant Constrictor Snake",
      "meta": "Huge beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "60 (8d12 + 8)",
      "speed": "30 ft., swim 30 ft. ",
      "skills": "Perception +2",
      "senses": "Blindsight 10 ft.,  Passive Perception 12",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 10 ft., one creature.",
          "attack_dmg": "11 (2d6 + 4) piercing damage."
        },
        {
          "name": "Constrict.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one creature.",
          "attack_dmg": "13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16).",
          "content": " Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "y44C2jcjN1dRypE13c_cu",
      "ability_scores": {
        "STR": "19",
        "DEX": "14",
        "CON": "12",
        "INT": "1",
        "WIS": "10",
        "CHA": "3"
      }
    },
    {
      "name": "Giant Crab",
      "meta": "Medium beast, unaligned",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "13 (3d8)",
      "speed": "30 ft., swim 30 ft. ",
      "skills": "Stealth +4",
      "senses": "Blindsight 30 ft.,  Passive Perception 9",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The crab can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11).",
          "content": " The crab has two claws, each of which can grapple only one target."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "rQY0GhuEXaMmuWb76Hp8C",
      "ability_scores": {
        "STR": "13",
        "DEX": "15",
        "CON": "11",
        "INT": "1",
        "WIS": "9",
        "CHA": "3"
      }
    },
    {
      "name": "Giant Crocodile",
      "meta": "Huge beast, unaligned",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "85 (9d12 + 27)",
      "speed": "30 ft., swim 50 ft. ",
      "skills": "Stealth +5",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Hold Breath.",
          "content": "The crocodile can hold its breath for 30 minutes."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The crocodile makes two attacks: one with its bite and one with its tail."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one target.",
          "attack_dmg": "21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16).",
          "content": " Until this grapple ends, the target is restrained, and the crocodile can't bite another target."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 10 ft., one target not grappled by the crocodile.",
          "attack_dmg": "14 (2d8 + 5) bludgeoning damage.",
          "content": " If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "Dzfwq4TZEbi_pkyuPYdPy",
      "ability_scores": {
        "STR": "21",
        "DEX": "9",
        "CON": "17",
        "INT": "2",
        "WIS": "10",
        "CHA": "7"
      }
    },
    {
      "name": "Giant Eagle",
      "meta": "Large beast, neutral good",
      "armor_class": "13 ",
      "hit_points": "26 (4d10 + 4)",
      "speed": "10 ft., fly 80 ft. ",
      "skills": "Perception +4",
      "senses": "Passive Perception 14",
      "languages": "Giant Eagle  understands Common and Auran but can't speak them",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Keen Sight.",
          "content": "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The eagle makes two attacks: one with its beak and one with its talons."
        },
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) piercing damage."
        },
        {
          "name": "Talons.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/894/315/315/636334286969931904.jpeg",
      "id": "GyYGxp866E1YYwNy2bt3c",
      "ability_scores": {
        "STR": "16",
        "DEX": "17",
        "CON": "13",
        "INT": "8",
        "WIS": "14",
        "CHA": "10"
      }
    },
    {
      "name": "Giant Elk",
      "meta": "Huge beast, unaligned",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "42 (5d12 + 10)",
      "speed": "60 ft. ",
      "skills": "Perception +4",
      "senses": "Passive Perception 14",
      "languages": "Elvish, Giant Elk  and Sylvan but can't speak them",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the elk moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
        }
      ],
      "actions": [
        {
          "name": "Ram.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 10 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) bludgeoning damage."
        },
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one prone creature.",
          "attack_dmg": "22 (4d8 + 4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "AHEVkZIKhiWUGavB-EcVg",
      "ability_scores": {
        "STR": "19",
        "DEX": "16",
        "CON": "14",
        "INT": "7",
        "WIS": "14",
        "CHA": "10"
      }
    },
    {
      "name": "Giant Fire Beetle",
      "meta": "Small beast, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "4 (1d6 + 1)",
      "speed": "30 ft. ",
      "senses": "Blindsight 30 ft.,  Passive Perception 8",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Illumination.",
          "content": "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+1 to hit, reach 5 ft., one target.",
          "attack_dmg": "2 (1d6 \u2212 1) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/896/1000/1000/636334287498492864.jpeg",
      "id": "0Sa-k-5KAo9NN8pNOblLk",
      "ability_scores": {
        "STR": "8",
        "DEX": "10",
        "CON": "12",
        "INT": "1",
        "WIS": "7",
        "CHA": "3"
      }
    },
    {
      "name": "Giant Frog",
      "meta": "Medium beast, unaligned",
      "armor_class": "11 ",
      "hit_points": "18 (4d8)",
      "speed": "30 ft., swim 30 ft. ",
      "skills": "Perception +2, Stealth +3",
      "senses": "Darkvision 30 ft.,  Passive Perception 12",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The frog can breathe air and water."
        },
        {
          "name": "Standing Leap.",
          "content": "The frog's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11).",
          "content": " Until this grapple ends, the target is restrained, and the frog can't bite another target."
        },
        {
          "name": "Swallow.",
          "content": "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/521/1000/1000/636376321052503535.jpeg",
      "id": "tUnK5-_Ra4bhNHQt3TX1b",
      "ability_scores": {
        "STR": "12",
        "DEX": "13",
        "CON": "11",
        "INT": "2",
        "WIS": "10",
        "CHA": "3"
      }
    },
    {
      "name": "Giant Goat",
      "meta": "Large beast, unaligned",
      "armor_class": "11 (Natural Armor)",
      "hit_points": "19 (3d10 + 3)",
      "speed": "40 ft. ",
      "senses": "Passive Perception 11",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
        },
        {
          "name": "Sure-Footed.",
          "content": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
        }
      ],
      "actions": [
        {
          "name": "Ram.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (2d4 + 3) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "ugEYEZxF8sYpy2K8g2AG8",
      "ability_scores": {
        "STR": "17",
        "DEX": "11",
        "CON": "12",
        "INT": "3",
        "WIS": "12",
        "CHA": "6"
      }
    },
    {
      "name": "Giant Hyena",
      "meta": "Large beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "45 (6d10 + 12)",
      "speed": "50 ft. ",
      "skills": "Perception +3",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Rampage.",
          "content": "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "Eq6ESU5s2gYvo_B6oX5am",
      "ability_scores": {
        "STR": "16",
        "DEX": "14",
        "CON": "14",
        "INT": "2",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Giant Lizard",
      "meta": "Large beast, unaligned",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "19 (3d10 + 3)",
      "speed": "30 ft., climb 30 ft. ",
      "senses": "Darkvision 30 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "s-XXsO8rPie_ITmqYoN5A",
      "ability_scores": {
        "STR": "15",
        "DEX": "12",
        "CON": "13",
        "INT": "2",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Giant Octopus",
      "meta": "Large beast, unaligned",
      "armor_class": "11 ",
      "hit_points": "52 (8d10 + 8)",
      "speed": "10 ft., swim 60 ft. ",
      "skills": "Perception +4, Stealth +5",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Hold Breath.",
          "content": "While out of water, the octopus can hold its breath for 1 hour."
        },
        {
          "name": "Underwater Camouflage.",
          "content": "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
        },
        {
          "name": "Water Breathing.",
          "content": "The octopus can breathe only underwater."
        }
      ],
      "actions": [
        {
          "name": "Tentacles.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 15 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) bludgeoning damage.",
          "content": " If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target."
        },
        {
          "name": "Ink Cloud (Recharges after a Short or Long Rest).",
          "content": "A 20- foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/898/315/315/636334288003435302.jpeg",
      "id": "nqU82rAZS-2gVyaz3LQD4",
      "ability_scores": {
        "STR": "17",
        "DEX": "13",
        "CON": "13",
        "INT": "4",
        "WIS": "10",
        "CHA": "4"
      }
    },
    {
      "name": "Giant Owl",
      "meta": "Large beast, neutral",
      "armor_class": "12 ",
      "hit_points": "19 (3d10 + 3)",
      "speed": "5 ft., fly 60 ft. ",
      "skills": "Perception +5, Stealth +4",
      "senses": "Darkvision 120 ft.,  Passive Perception 15",
      "languages": "Elvish, Giant Owl  and Sylvan but can't speak them",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Flyby.",
          "content": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
        },
        {
          "name": "Keen Hearing and Sight.",
          "content": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
        }
      ],
      "actions": [
        {
          "name": "Talons.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (2d6 + 1) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/535/1000/1000/636376331788287090.jpeg",
      "id": "3ji9AszmuVMK5I3QHxA-1",
      "ability_scores": {
        "STR": "13",
        "DEX": "15",
        "CON": "12",
        "INT": "8",
        "WIS": "13",
        "CHA": "10"
      }
    },
    {
      "name": "Giant Poisonous Snake",
      "meta": "Medium beast, unaligned",
      "armor_class": "14 ",
      "hit_points": "11 (2d8 + 2)",
      "speed": "30 ft., swim 30 ft. ",
      "skills": "Perception +2",
      "senses": "Blindsight 10 ft.,  Passive Perception 12",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 10 ft., one target.",
          "attack_dmg": "6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "dRvbMbc_90AIPgGy2OXwq",
      "ability_scores": {
        "STR": "10",
        "DEX": "18",
        "CON": "13",
        "INT": "2",
        "WIS": "10",
        "CHA": "3"
      }
    },
    {
      "name": "Giant Rat",
      "meta": "Small beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "7 (2d6)",
      "speed": "30 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          "name": "Pack Tactics.",
          "content": "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": ": 4 (1d4 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/538/1000/1000/636376332197953299.jpeg",
      "id": "IrN-CntBBNW2QYJOLI9Ck",
      "ability_scores": {
        "STR": "7",
        "DEX": "15",
        "CON": "11",
        "INT": "2",
        "WIS": "10",
        "CHA": "4"
      }
    },
    {
      "name": "Giant Scorpion",
      "meta": "Large beast, unaligned",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "52 (7d10 + 14)",
      "speed": "40 ft. ",
      "senses": "Blindsight 60 ft.,  Passive Perception 9",
      "languages": "--",
      "challenge": "3 (700 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The scorpion makes three attacks: two with its claws and one with its sting."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12).",
          "content": " The scorpion has two claws, each of which can grapple only one target."
        },
        {
          "name": "Sting.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "oCOG3GvJhQMXYYJ_eMXFn",
      "ability_scores": {
        "STR": "15",
        "DEX": "13",
        "CON": "15",
        "INT": "1",
        "WIS": "9",
        "CHA": "3"
      }
    },
    {
      "name": "Giant Sea Horse",
      "meta": "Large beast, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "16 (3d10)",
      "speed": "0 ft., swim 40 ft. ",
      "senses": "Passive Perception 11",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the sea horse moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. It the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
        },
        {
          "name": "Water Breathing.",
          "content": "The sea horse can breathe only underwater."
        }
      ],
      "actions": [
        {
          "name": "Ram.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "YuHU7RWfaULAvGIWpz6re",
      "ability_scores": {
        "STR": "12",
        "DEX": "15",
        "CON": "11",
        "INT": "2",
        "WIS": "12",
        "CHA": "5"
      }
    },
    {
      "name": "Giant Shark",
      "meta": "Huge beast, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "126 (11d12 + 55)",
      "speed": "0 ft., swim 50 ft. ",
      "skills": "Perception +3",
      "senses": "Blindsight 60 ft.,  Passive Perception 13",
      "languages": "--",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Blood Frenzy.",
          "content": "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
          "name": "Water Breathing.",
          "content": "The shark can breathe only underwater."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 5 ft., one target.",
          "attack_dmg": "22 (3d10 + 6) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "G5pF_nvBVPT235nvr7xqi",
      "ability_scores": {
        "STR": "23",
        "DEX": "11",
        "CON": "21",
        "INT": "1",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Giant Spider",
      "meta": "Large beast, unaligned",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "26 (4d10 + 4)",
      "speed": "30 ft., climb 30 ft. ",
      "skills": "Stealth +7",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Spider Climb.",
          "content": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          "name": "Web Sense.",
          "content": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
        },
        {
          "name": "Web Walker.",
          "content": "The spider ignores movement restrictions caused by webbing."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one creature.",
          "attack_dmg": "7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one.",
          "content": " If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
        },
        {
          "name": "Web (Recharge 5\u20136).",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+5 to hit, range 30/60 ft., one creature.",
          "attack_dmg": "The target is restrained by webbing.",
          "content": " As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/323/1000/1000/636252775648743317.jpeg",
      "id": "kZg3ur_HIr781eYUzuqI1",
      "ability_scores": {
        "STR": "14",
        "DEX": "16",
        "CON": "12",
        "INT": "2",
        "WIS": "11",
        "CHA": "4"
      }
    },
    {
      "name": "Giant Toad",
      "meta": "Large beast, unaligned",
      "armor_class": "11 ",
      "hit_points": "39 (6d10 + 6)",
      "speed": "20 ft., swim 40 ft. ",
      "senses": "Darkvision 30 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The toad can breathe air and water."
        },
        {
          "name": "Standing Leap.",
          "content": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13).",
          "content": " Until this grapple ends, the target is restrained, and the toad can't bite another target."
        },
        {
          "name": "Swallow.",
          "content": "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time. If the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "8DTTDVJwxhYPGFL9Ixrt3",
      "ability_scores": {
        "STR": "15",
        "DEX": "13",
        "CON": "13",
        "INT": "2",
        "WIS": "10",
        "CHA": "3"
      }
    },
    {
      "name": "Giant Vulture",
      "meta": "Large beast, neutral",
      "armor_class": "10 ",
      "hit_points": "22 (3d10 + 6)",
      "speed": "10 ft., fly 60 ft. ",
      "skills": "Perception +3",
      "senses": "Passive Perception 13",
      "languages": "Understands Common but can't speak  it",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Keen Sight and Smell.",
          "content": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
        },
        {
          "name": "Pack Tactics.",
          "content": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The vulture makes two attacks: one with its beak and one with its talons."
        },
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (2d4 + 2) piercing damage."
        },
        {
          "name": "Talons.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (2d6 + 2) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "x-h0QD1EcKFuxN0R1X7_S",
      "ability_scores": {
        "STR": "15",
        "DEX": "10",
        "CON": "15",
        "INT": "6",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Giant Wasp",
      "meta": "Medium beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "13 (3d8)",
      "speed": "10 ft., fly 50 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "actions": [
        {
          "name": "Sting.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
          "content": " If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "F0JHBq0U8gR_CuJ_i9ccJ",
      "ability_scores": {
        "STR": "10",
        "DEX": "14",
        "CON": "10",
        "INT": "1",
        "WIS": "10",
        "CHA": "3"
      }
    },
    {
      "name": "Giant Weasel",
      "meta": "Medium beast, unaligned",
      "armor_class": "13 ",
      "hit_points": "9 (2d8)",
      "speed": "40 ft. ",
      "skills": "Perception +3, Stealth +5",
      "senses": "Darkvision 60 ft.,  Passive Perception 13",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Smell.",
          "content": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d4 + 3) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "T0nzCSeOsFcs8sHKdjb3P",
      "ability_scores": {
        "STR": "11",
        "DEX": "16",
        "CON": "10",
        "INT": "4",
        "WIS": "12",
        "CHA": "5"
      }
    },
    {
      "name": "Giant Wolf Spider",
      "meta": "Medium beast, unaligned",
      "armor_class": "13 ",
      "hit_points": "11 (2d8 + 2)",
      "speed": "40 ft., climb 40 ft. ",
      "skills": "Perception +3, Stealth +7",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 13",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Spider Climb.",
          "content": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          "name": "Web Sense.",
          "content": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
        },
        {
          "name": "Web Walker.",
          "content": "The spider ignores movement restrictions caused by webbing."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one creature.",
          "attack_dmg": "4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one.",
          "content": " If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "aYGsGu0e2QadpRxE3N_ms",
      "ability_scores": {
        "STR": "12",
        "DEX": "16",
        "CON": "13",
        "INT": "3",
        "WIS": "12",
        "CHA": "4"
      }
    },
    {
      "name": "Gibbering Mouther",
      "meta": "Medium aberration, neutral",
      "armor_class": "9 ",
      "hit_points": "67 (9d8 + 27)",
      "speed": "10 ft., swim 10 ft. ",
      "condition_immunities": "Prone",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Aberrant Ground.",
          "content": "The ground in a 10-foot radius around the mouther is doughlike difficult terrain. Each creature that starts its turn in that area must succeed on a DC 10 Strength saving throw or have its speed reduced to 0 until the start of its next turn."
        },
        {
          "name": "Gibbering.",
          "content": "The mouther babbles incoherently while it can see any creature and isn't incapacitated. Each creature that starts its turn within 20 feet of the mouther and can hear the gibbering must succeed on a DC 10 Wisdom saving throw. On a failure, the creature can't take reactions until the start of its next turn and rolls a d8 to determine what it does during its turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one creature.",
          "attack_dmg": "17 (5d6) piercing damage.",
          "content": " If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther."
        },
        {
          "name": "Blinding Spittle (Recharge 5\u20136).",
          "content": "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/333/315/315/636252776252001529.jpeg",
      "id": "u4vtw45LltBTyVtO5Ghkt",
      "ability_scores": {
        "STR": "10",
        "DEX": "8",
        "CON": "16",
        "INT": "3",
        "WIS": "10",
        "CHA": "6"
      }
    },
    {
      "name": "Glabrezu",
      "meta": "Large fiend, chaotic evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "157 (15d10 + 75)",
      "speed": "40 ft. ",
      "saving_throws": "STR +9, CON +9, WIS +7, CHA +7",
      "damage_resistances": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Truesight 120 ft.,  Passive Perception 13",
      "languages": "Abyssal, Telepathy 120 ft.",
      "challenge": "9 (5,000 XP)",
      "traits": [
        {
          "name": "Innate Spellcasting.",
          "content": "The glabrezu's spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no material components:\n\nAt will: darkness, detect magic, dispel magic\n\n1/day each: confusion, fly, power word stun"
        },
        {
          "name": "Magic Resistance.",
          "content": "The glabrezu has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell."
        },
        {
          "name": "Pincer.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 10 ft., one target.",
          "attack_dmg": "16 (2d10 + 5) bludgeoning damage.",
          "content": " If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target."
        },
        {
          "name": "Fist.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (2d4 + 2) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/337/315/315/636252776677682465.jpeg",
      "id": "8uxnDssQfL7jBkZE9bpKz",
      "ability_scores": {
        "STR": "20",
        "DEX": "15",
        "CON": "21",
        "INT": "19",
        "WIS": "17",
        "CHA": "16"
      }
    },
    {
      "name": "Gladiator",
      "meta": "Medium humanoid, any",
      "armor_class": "16 (Studded Leather, Shield)",
      "hit_points": "112 (15d8 + 45)",
      "speed": "30 ft. ",
      "saving_throws": "STR +7, DEX +5, CON +6",
      "skills": "Athletics +10, Intimidation +5",
      "senses": "Passive Perception 11",
      "languages": "Any one language (usually Common)",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Brave.",
          "content": "The gladiator has advantage on saving throws against being frightened."
        },
        {
          "name": "Brute.",
          "content": "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The gladiator makes three melee attacks or two ranged attacks."
        },
        {
          "name": "Spear.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft. and range 20/60 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack."
        },
        {
          "name": "Shield Bash.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one creature.",
          "attack_dmg": "9 (2d4 + 4) bludgeoning damage.",
          "content": " If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
        }
      ],
      "reactions": [
        {
          "name": "Parry.",
          "content": "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "Bn2TSwXYrVMX1YGZ-ssNC",
      "ability_scores": {
        "STR": "18",
        "DEX": "15",
        "CON": "16",
        "INT": "10",
        "WIS": "12",
        "CHA": "15"
      }
    },
    {
      "name": "Gnoll",
      "meta": "Medium humanoid, chaotic evil",
      "armor_class": "15 (Hide Armor, Shield)",
      "hit_points": "22 (5d8)",
      "speed": "30 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Gnoll",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Rampage.",
          "content": "When the gnoll reduces a creature to 0 hit points with a melee attack on its turn, the gnoll can take a bonus action to move up to half its speed and make a bite attack."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "4 (1d4 + 2) piercing damage."
        },
        {
          "name": "Spear.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft. or range 20/60 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
        },
        {
          "name": "Longbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+3 to hit, range 150/600 ft., one target.",
          "attack_dmg": "5 (1d8 + 1) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/345/1000/1000/636252777224997611.jpeg",
      "id": "AE3JpomKaCXNsJa1bHCQH",
      "ability_scores": {
        "STR": "14",
        "DEX": "12",
        "CON": "11",
        "INT": "6",
        "WIS": "10",
        "CHA": "7"
      }
    },
    {
      "name": "Goat",
      "meta": "Medium beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "4 (1d8)",
      "speed": "40 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the goat moves at least 20 feet straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone."
        },
        {
          "name": "Sure-Footed.",
          "content": "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
        }
      ],
      "actions": [
        {
          "name": "Ram.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "3 (1d4 + 1) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "hZRXQkhgZHPV87lzg5ZOj",
      "ability_scores": {
        "STR": "12",
        "DEX": "10",
        "CON": "11",
        "INT": "2",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Goblin",
      "meta": "Small humanoid, neutral evil",
      "armor_class": "15 (Leather Armor, Shield)",
      "hit_points": "7 (2d6)",
      "speed": "30 ft. ",
      "skills": "Stealth +6",
      "senses": "Darkvision 60 ft.,  Passive Perception 9",
      "languages": "Common, Goblin",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Nimble Escape.",
          "content": "The goblin can take the Disengage or Hide action as a bonus action on each of its turns."
        }
      ],
      "actions": [
        {
          "name": "Scimitar.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) slashing damage."
        },
        {
          "name": "Shortbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 80/320 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/351/315/315/636252777818652432.jpeg",
      "id": "WyT6tcfWxZd_xVk14Ogcu",
      "ability_scores": {
        "STR": "8",
        "DEX": "14",
        "CON": "10",
        "INT": "10",
        "WIS": "8",
        "CHA": "8"
      }
    },
    {
      "name": "Gold Dragon Wyrmling",
      "meta": "Medium dragon, lawful good",
      "armor_class": "17 Natural Armor",
      "hit_points": "60 (8d8 + 24)",
      "speed": "30 ft., fly 60 ft., swim 30 ft. ",
      "saving_throws": "DEX +4, CON +5, WIS +2, CHA +5",
      "skills": "Perception +4, Stealth +4",
      "damage_immunities": "Fire",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Draconic",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack",
          "attack_info": ": +6 to hit, reach 5 ft., one target.",
          "attack_dmg": ": 9 (1d10 + 4) piercing damage."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136):",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "subtitle": "Fire Breath:",
          "content": "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          "subtitle": "Weakening Breath:",
          "content": "The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/516/315/315/636285466148376212.jpeg",
      "id": "EBza0-PSqQMftb36L9qWW",
      "ability_scores": {
        "STR": "19",
        "DEX": "14",
        "CON": "17",
        "INT": "14",
        "WIS": "11",
        "CHA": "16"
      }
    },
    {
      "name": "Gorgon",
      "meta": "Large monstrosity, unaligned",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "114 (12d10 + 48)",
      "speed": "40 ft. ",
      "skills": "Perception +4",
      "condition_immunities": "Petrified",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "--",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Trampling Charge.",
          "content": "If the gorgon moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 16 Strength saving throw or be knocked prone. If the target is prone, the gorgon can make one attack with its hooves against it as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Gore.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one target.",
          "attack_dmg": "18 (2d12 + 5) piercing damage."
        },
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one target.",
          "attack_dmg": "16 (2d10 + 5) bludgeoning damage."
        },
        {
          "name": "Petrifying Breath (Recharge 5\u20136).",
          "content": "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/355/315/315/636252778125099430.jpeg",
      "id": "t6TqiYCitEbxTci0K7h08",
      "ability_scores": {
        "STR": "20",
        "DEX": "11",
        "CON": "18",
        "INT": "2",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Gray Ooze",
      "meta": "Medium ooze, unaligned",
      "armor_class": "8 ",
      "hit_points": "22 (3d8 + 9)",
      "speed": "10 ft., climb 10 ft. ",
      "skills": "Stealth +2",
      "damage_resistances": "Acid, Cold, Fire",
      "condition_immunities": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone",
      "senses": "Blindsight 60 ft.,  Passive Perception 8",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Amorphous.",
          "content": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          "name": "Corrode Metal.",
          "content": "Any nonmagical weapon made of metal that hits the ooze corrodes. After dealing damage, the weapon takes a permanent and cumulative \u22121 penalty to damage rolls. If its penalty drops to \u22125, the weapon is destroyed. Nonmagical ammunition made of metal that hits the ooze is destroyed after dealing damage.\n\nThe ooze can eat through 2-inch-thick, nonmagical metal in 1 round."
        },
        {
          "name": "False Appearance.",
          "content": "While the ooze remains motionless, it is indistinguishable from an oily pool or wet rock."
        }
      ],
      "actions": [
        {
          "name": "Pseudopod.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative \u22121 penalty to the AC it offers.",
          "content": " The armor is destroyed if the penalty reduces its AC to 10."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/658/ooze.jpg",
      "id": "D5zITJYDiz8TRRxk5YSix",
      "ability_scores": {
        "STR": "12",
        "DEX": "6",
        "CON": "16",
        "INT": "1",
        "WIS": "6",
        "CHA": "2"
      }
    },
    {
      "name": "Green Dragon Wyrmling",
      "meta": "Medium dragon, lawful evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "38 (7d8 + 7)",
      "speed": "30 ft., fly 60 ft., swim 30 ft. ",
      "saving_throws": "DEX +3, CON +3, WIS +2, CHA +3",
      "skills": "Perception +4, Stealth +3",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Draconic",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage."
        },
        {
          "name": "Poison Breath (Recharge 5\u20136).",
          "content": "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/363/315/315/636252778639163748.jpeg",
      "id": "vb0AjYudUP2AjKlw1_w-Y",
      "ability_scores": {
        "STR": "15",
        "DEX": "12",
        "CON": "13",
        "INT": "14",
        "WIS": "11",
        "CHA": "13"
      }
    },
    {
      "name": "Green Hag",
      "meta": "Medium fey, neutral evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "82 (11d8 + 33)",
      "speed": "30 ft. ",
      "skills": "Arcana +3, Deception +4, Perception +4, Stealth +3",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Common, Draconic, Sylvan",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The hag can breathe air and water."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The hag's innate spellcasting ability is Charisma (spell save DC 12). She can innately cast the following spells, requiring no material components:\n\nAt will: dancing lights, minor illusion, vicious mockery"
        },
        {
          "name": "Mimicry.",
          "content": "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations with a successful DC 14 Wisdom (Insight) check."
        }
      ],
      "actions": [
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) slashing damage."
        },
        {
          "name": "Illusory Appearance.",
          "content": "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.\n\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised."
        },
        {
          "name": "Invisible Passage.",
          "content": "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/365/315/315/636252778948574879.jpeg",
      "id": "9vA8X3b015i9UZ0q5-3pI",
      "ability_scores": {
        "STR": "18",
        "DEX": "12",
        "CON": "16",
        "INT": "13",
        "WIS": "14",
        "CHA": "14"
      }
    },
    {
      "name": "Grick",
      "meta": "Medium monstrosity, neutral",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "27 (6d8)",
      "speed": "30 ft., climb 30 ft. ",
      "damage_resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "senses": "Darkvision 60 ft.,  Passive Perception 12",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Stone Camouflage.",
          "content": "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target."
        },
        {
          "name": "Tentacles.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (2d6 + 2) slashing damage."
        },
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/369/1000/1000/636252779341924439.jpeg",
      "id": "LhW5y_5GTLboQfxkNylRL",
      "ability_scores": {
        "STR": "14",
        "DEX": "14",
        "CON": "11",
        "INT": "3",
        "WIS": "14",
        "CHA": "5"
      }
    },
    {
      "name": "Griffon",
      "meta": "Large monstrosity, unaligned",
      "armor_class": "12 ",
      "hit_points": "59 (7d10 + 21)",
      "speed": "30 ft., fly 80 ft. ",
      "skills": "Perception +5",
      "senses": "Darkvision 60 ft.,  Passive Perception 15",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Keen Sight.",
          "content": "The griffon has advantage on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The griffon makes two attacks: one with its beak and one with its claws."
        },
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d8 + 4) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/373/315/315/636252779693862725.jpeg",
      "id": "ZW0MTDcjJi47GooWO4W5u",
      "ability_scores": {
        "STR": "18",
        "DEX": "15",
        "CON": "16",
        "INT": "2",
        "WIS": "13",
        "CHA": "8"
      }
    },
    {
      "name": "Grimlock",
      "meta": "Medium humanoid, neutral evil",
      "armor_class": "11 ",
      "hit_points": "11 (2d8 + 2)",
      "speed": "30 ft. ",
      "skills": "Athletics +5, Perception +3, Stealth +3",
      "condition_immunities": "Blinded",
      "senses": "Blindsight 30 ft.,  Passive Perception 13",
      "languages": "Undercommon",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Blind Senses",
          "content": ". The grimlock can't use its blindsight while deafened and unable to smell."
        },
        {
          "name": "Keen Hearing and Smell.",
          "content": "The grimlock has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          "name": "Stone Camouflage.",
          "content": "The grimlock has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        }
      ],
      "actions": [
        {
          "name": "Spiked Bone Club.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/375/315/315/636252780049813181.jpeg",
      "id": "vi9GT_xaHt5bLwCWitUEA",
      "ability_scores": {
        "STR": "16",
        "DEX": "12",
        "CON": "12",
        "INT": "9",
        "WIS": "8",
        "CHA": "6"
      }
    },
    {
      "name": "Guard",
      "meta": "Medium humanoid, any",
      "armor_class": "16 (Chain Shirt, Shield)",
      "hit_points": "11 (2d8 + 2)",
      "speed": "30 ft. ",
      "skills": "Perception +2",
      "senses": "Passive Perception 12",
      "languages": "Any one language (usually Common)",
      "challenge": "1/8 (25 XP)",
      "actions": [
        {
          "name": "Spear.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft. or range 20/60 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "ydUqfzyR3PXcRna39TwF4",
      "ability_scores": {
        "STR": "13",
        "DEX": "12",
        "CON": "12",
        "INT": "10",
        "WIS": "11",
        "CHA": "10"
      }
    },
    {
      "name": "Guardian Naga",
      "meta": "Large monstrosity, lawful good",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "127 (15d10 + 45)",
      "speed": "40 ft. ",
      "saving_throws": "DEX +8, CON +7, INT +7, WIS +8, CHA +8",
      "damage_immunities": "Poison",
      "condition_immunities": "Charmed, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Celestial, Common",
      "challenge": "10 (5,900 XP)",
      "traits": [
        {
          "name": "Rejuvenation.",
          "content": "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
        },
        {
          "name": "Spellcasting.",
          "content": "The naga is an 11th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 16, +8 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following cleric spells prepared:\n\nCantrips (at will): mending, sacred flame, thaumaturgy\n\n1st level (4 slots): command, cure wounds, shield of faith\n\n2nd level (3 slots): calm emotions, hold person\n\n3rd level (3 slots): bestow curse, clairvoyance\n\n4th level (3 slots): banishment, freedom of movement\n\n5th level (2 slots): flame strike, geas\n\n6th level (1 slot): true seeing"
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 10 ft., one creature.",
          "attack_dmg": "8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Spit Poison.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+8 to hit, range 15/30 ft., one creature.",
          "attack_dmg": "The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/377/315/315/636252780447421771.jpeg",
      "id": "720ykRP6RBwZl76mIdeSf",
      "ability_scores": {
        "STR": "19",
        "DEX": "18",
        "CON": "16",
        "INT": "16",
        "WIS": "19",
        "CHA": "18"
      }
    },
    {
      "name": "Gynosphinx",
      "meta": "Large monstrosity, lawful neutral",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "136 (16d10 + 48)",
      "speed": "40 ft., fly 60 ft. ",
      "skills": "Arcana +12, History +12, Perception +8, Religion +8",
      "damage_resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Psychic",
      "condition_immunities": "Charmed, Frightened",
      "senses": "Truesight 120 ft.,  Passive Perception 18",
      "languages": "Common, Sphinx",
      "challenge": "11 (7,200 XP)",
      "traits": [
        {
          "name": "Inscrutable.",
          "content": "The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
        },
        {
          "name": "Magic Weapons.",
          "content": "The sphinx's weapon attacks are magical."
        },
        {
          "name": "Spellcasting.",
          "content": "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, +8 to hit with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:\n\nCantrips (at will): mage hand, minor illusion, prestidigitation\n\n1st level (4 slots): detect magic, identify, shield\n\n2nd level (3 slots): darkness, locate object, suggestion\n\n3rd level (3 slots): dispel magic, remove curse, tongues\n\n4th level (3 slots): banishment, greater invisibility\n\n5th level (1 slot): legend lore"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The sphinx makes two claw attacks."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) slashing damage."
        }
      ],
      "legendary_actions": [
        {
          "content": "The sphinx can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The sphinx regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Claw Attack.",
          "content": "The sphinx makes one claw attack."
        },
        {
          "name": "Teleport (Costs 2 Actions).",
          "content": "The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        },
        {
          "name": "Cast a Spell (Costs 3 Actions).",
          "content": "The sphinx casts a spell from its list of prepared spells, using a spell slot as normal."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/383/315/315/636252780786457550.jpeg",
      "id": "Gyjjw4BfQk8k0obbwlPlp",
      "ability_scores": {
        "STR": "18",
        "DEX": "15",
        "CON": "16",
        "INT": "18",
        "WIS": "18",
        "CHA": "18"
      }
    },
    {
      "name": "Half-Red Dragon Veteran",
      "meta": "Medium humanoid, any",
      "armor_class": "18 (Plate)",
      "hit_points": "65 (10d8 + 20)",
      "speed": "30 ft. ",
      "skills": "Athletics +5, Perception +2",
      "damage_resistances": "Fire",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 12",
      "languages": "Common, Draconic",
      "challenge": "5 (1,800 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
        },
        {
          "name": "Longsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
        },
        {
          "name": "Shortsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) piercing damage."
        },
        {
          "name": "Heavy Crossbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+3 to hit, range 100/400 ft., one target.",
          "attack_dmg": "6 (1d10 + 1) piercing damage."
        },
        {
          "name": "Fire Breath (Recharge 5\u20136).",
          "content": "The veteran exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/387/315/315/636252781353903793.jpeg",
      "id": "BtRUbEHN5Yrs4Y2DTltlN",
      "ability_scores": {
        "STR": "16",
        "DEX": "13",
        "CON": "14",
        "INT": "10",
        "WIS": "11",
        "CHA": "10"
      }
    },
    {
      "name": "Harpy",
      "meta": "Medium monstrosity, chaotic evil",
      "armor_class": "11 ",
      "hit_points": "38 (7d8 + 7)",
      "speed": "20 ft., fly 40 ft. ",
      "senses": "Passive Perception 10",
      "languages": "Common",
      "challenge": "1 (200 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The harpy makes two attacks: one with its claws and one with its club."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (2d4 + 1) slashing damage."
        },
        {
          "name": "Club.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "3 (1d4 + 1) bludgeoning damage."
        },
        {
          "name": "Luring Song.",
          "content": "The harpy sings a magical melody. Every humanoid and giant within 300 feet of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.\n\nWhile charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 feet away from the harpy, the target must move on its turn toward the harpy by the most direct route, trying to get within 5 feet. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, the target can repeat the saving throw. A charmed target can also repeat the saving throw at the end of each of its turns. If the saving throw is successful, the effect ends on it.\n\nA target that successfully saves is immune to this harpy's song for the next 24 hours."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/391/315/315/636252781955908234.jpeg",
      "id": "0nkoi_wwi3EbXwn4kpGoL",
      "ability_scores": {
        "STR": "12",
        "DEX": "13",
        "CON": "12",
        "INT": "7",
        "WIS": "10",
        "CHA": "13"
      }
    },
    {
      "name": "Hawk",
      "meta": "Tiny beast, unaligned",
      "armor_class": "13 ",
      "hit_points": "1 (1d4 - 1)",
      "speed": "10 ft., fly 60 ft. ",
      "skills": "Perception +4",
      "senses": "Passive Perception 14",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Keen Sight.",
          "content": "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Talons.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/900/1000/1000/636334288270143064.jpeg",
      "id": "_F6-j0KwnN6b3ghpl2Rj-",
      "ability_scores": {
        "STR": "5",
        "DEX": "16",
        "CON": "8",
        "INT": "2",
        "WIS": "14",
        "CHA": "6"
      }
    },
    {
      "name": "Hell Hound",
      "meta": "Medium fiend, lawful evil",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "45 (7d8 + 14)",
      "speed": "50 ft. ",
      "skills": "Perception +5",
      "damage_immunities": "Fire",
      "senses": "Darkvision 60 ft.,  Passive Perception 15",
      "languages": "Understands Infernal but can't speak it",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Smell.",
          "content": "The hound has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          "name": "Pack Tactics.",
          "content": "The hound has advantage on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage."
        },
        {
          "name": "Fire Breath (Recharge 5\u20136).",
          "content": "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/393/315/315/636252782461361426.jpeg",
      "id": "ZU-GGlHiqoWNuet7uowBf",
      "ability_scores": {
        "STR": "17",
        "DEX": "12",
        "CON": "14",
        "INT": "6",
        "WIS": "13",
        "CHA": "6"
      }
    },
    {
      "name": "Hezrou",
      "meta": "Large fiend, chaotic evil",
      "armor_class": "16 (Natural Armor)",
      "hit_points": "136 (13d10 + 65)",
      "speed": "30 ft. ",
      "saving_throws": "STR +7, CON +8, WIS +4",
      "damage_resistances": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 11",
      "languages": "Abyssal, Telepathy 120 ft.",
      "challenge": "8 (3,900 XP)",
      "traits": [
        {
          "name": "Magic Resistance.",
          "content": "The hezrou has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Stench.",
          "content": "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The hezrou makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "15 (2d10 + 4) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/321/315/315/636252775562934524.jpeg",
      "id": "0lDJjQJphsqjTL_W4p3eu",
      "ability_scores": {
        "STR": "19",
        "DEX": "17",
        "CON": "20",
        "INT": "5",
        "WIS": "12",
        "CHA": "13"
      }
    },
    {
      "name": "Hill Giant",
      "meta": "Huge giant, chaotic evil",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "105 (10d12 + 40)",
      "speed": "40 ft. ",
      "skills": "Perception +2",
      "senses": "Passive Perception 12",
      "languages": "Giant",
      "challenge": "5 (1,800 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The giant makes two greatclub attacks."
        },
        {
          "name": "Greatclub.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 10 ft., one target.",
          "attack_dmg": "18 (3d8 + 5) bludgeoning damage."
        },
        {
          "name": "Rock.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+8 to hit, range 60/240 ft., one target.",
          "attack_dmg": "21 (3d10 + 5) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/331/315/315/636252776196140305.jpeg",
      "id": "vId8gy1qfmBpebl63nz0O",
      "ability_scores": {
        "STR": "21",
        "DEX": "8",
        "CON": "19",
        "INT": "5",
        "WIS": "9",
        "CHA": "6"
      }
    },
    {
      "name": "Hippogriff",
      "meta": "Large monstrosity, unaligned",
      "armor_class": "11 ",
      "hit_points": "19 (3d10 + 3)",
      "speed": "40 ft., fly 60 ft. ",
      "skills": "Perception +5",
      "senses": "Passive Perception 15",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Keen Sight.",
          "content": "The hippogriff has advantage on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The hippogriff makes two attacks: one with its beak and one with its claws."
        },
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d10 + 3) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/335/315/315/636252776578605778.jpeg",
      "id": "OglfVegbjSBmxa8-thDiy",
      "ability_scores": {
        "STR": "17",
        "DEX": "13",
        "CON": "13",
        "INT": "2",
        "WIS": "12",
        "CHA": "8"
      }
    },
    {
      "name": "Hobgoblin",
      "meta": "Medium humanoid, lawful evil",
      "armor_class": "18 (Chain Mail, Shield)",
      "hit_points": "11 (2d8 + 2)",
      "speed": "30 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Common, Goblin",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Martial Advantage.",
          "content": "Once per turn, the hobgoblin can deal an extra 7 (2d6) damage to a creature it hits with a weapon attack if that creature is within 5 feet of an ally of the hobgoblin that isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Longsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
        },
        {
          "name": "Longbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+3 to hit, range 150/600 ft., one target.",
          "attack_dmg": "5 (1d8 + 1) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/389/315/315/636252781431932597.jpeg",
      "id": "ImizRixCz3UlaPLe5d7FM",
      "ability_scores": {
        "STR": "13",
        "DEX": "12",
        "CON": "12",
        "INT": "10",
        "WIS": "10",
        "CHA": "9"
      }
    },
    {
      "name": "Homunculus",
      "meta": "Tiny construct, neutral",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "5 (2d4)",
      "speed": "20 ft., fly 40 ft. ",
      "damage_immunities": "Poison",
      "condition_immunities": "Charmed, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Understands the languages of its creator but can't speak",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Telepathic Bond.",
          "content": "While the homunculus is on the same plane of existence as its master, it can magically convey what it senses to its master, and the two can communicate telepathically."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute.",
          "content": " If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/287/315/315/636379803928245506.jpeg",
      "id": "jtmF4zwVbluYFI4dWhUYW",
      "ability_scores": {
        "STR": "4",
        "DEX": "15",
        "CON": "11",
        "INT": "10",
        "WIS": "10",
        "CHA": "7"
      }
    },
    {
      "name": "Horned Devil",
      "meta": "Large fiend, lawful evil",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "148 (17d10 + 55)",
      "speed": "20 ft., fly 60 ft. ",
      "saving_throws": "STR +10, DEX +7, WIS +7, CHA +7",
      "damage_resistances": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 13",
      "languages": "Infernal, Telepathy 120 ft.",
      "challenge": "11 (7,200 XP)",
      "traits": [
        {
          "name": "Devil's Sight.",
          "content": "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          "name": "Magic Resistance.",
          "content": "The devil has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack."
        },
        {
          "name": "Fork.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d8 + 6) piercing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "10 (1d8 + 6) piercing damage.",
          "content": " If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
        },
        {
          "name": "Hurl Flame.",
          "type": "Ranged Spell Attack:",
          "attack_info": "+7 to hit, range 150 ft., one target.",
          "attack_dmg": "14 (4d6) fire damage.",
          "content": " If the target is a flammable object that isn't being worn or carried, it also catches fire."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/347/315/315/636252777255936976.jpeg",
      "id": "tF-Gk94D3SOQJ-R5Q3MKe",
      "ability_scores": {
        "STR": "22",
        "DEX": "17",
        "CON": "21",
        "INT": "12",
        "WIS": "16",
        "CHA": "17"
      }
    },
    {
      "name": "Hunter Shark",
      "meta": "Large beast, unaligned",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "45 (6d10 + 12)",
      "speed": "0 ft., swim 40 ft. ",
      "skills": "Perception +2",
      "senses": "Blindsight 30 ft.,  Passive Perception 12",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Blood Frenzy.",
          "content": "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
          "name": "Water Breathing.",
          "content": "The shark can breathe only underwater."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "0JPniCWFOjeZGsiVudM_D",
      "ability_scores": {
        "STR": "18",
        "DEX": "13",
        "CON": "15",
        "INT": "1",
        "WIS": "10",
        "CHA": "4"
      }
    },
    {
      "name": "Hydra",
      "meta": "Huge monstrosity, unaligned",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "172 (15d12 + 75)",
      "speed": "30 ft., swim 30 ft. ",
      "skills": "Perception +6",
      "senses": "Darkvision 60 ft.,  Passive Perception 16",
      "languages": "--",
      "challenge": "8 (3,900 XP)",
      "traits": [
        {
          "name": "Hold Breath.",
          "content": "The hydra can hold its breath for 1 hour."
        },
        {
          "name": "Multiple Heads.",
          "content": "The hydra has five heads. While it has more than one head, the hydra has advantage on saving throws against being blinded, charmed, deafened, frightened, stunned, and knocked unconscious.\n\nWhenever the hydra takes 25 or more damage in a single turn, one of its heads dies. If all its heads die, the hydra dies.\n\nAt the end of its turn, it grows two heads for each of its heads that died since its last turn, unless it has taken fire damage since its last turn. The hydra regains 10 hit points for each head regrown in this way."
        },
        {
          "name": "Reactive Heads.",
          "content": "For each head the hydra has beyond one, it gets an extra reaction that can be used only for opportunity attacks."
        },
        {
          "name": "Wakeful.",
          "content": "While the hydra sleeps, at least one of its heads is awake."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The hydra makes as many bite attacks as it has heads."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 10 ft., one target.",
          "attack_dmg": "10 (1d10 + 5) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/349/315/315/636252777669218389.jpeg",
      "id": "mYfDFI8UGEyvgo8DbVN28",
      "ability_scores": {
        "STR": "20",
        "DEX": "12",
        "CON": "20",
        "INT": "2",
        "WIS": "10",
        "CHA": "7"
      }
    },
    {
      "name": "Hyena",
      "meta": "Medium beast, unaligned",
      "armor_class": "11 ",
      "hit_points": "5 (1d8 + 1)",
      "speed": "50 ft. ",
      "skills": "Perception +3",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Pack Tactics.",
          "content": "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "3 (1d6) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/902/1000/1000/636334288674955736.jpeg",
      "id": "PsKFQ9XsJI-GKCau2FIsH",
      "ability_scores": {
        "STR": "11",
        "DEX": "13",
        "CON": "12",
        "INT": "2",
        "WIS": "12",
        "CHA": "5"
      }
    },
    {
      "name": "Ice Devil",
      "meta": "Large fiend, lawful evil",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "180 (19d10 + 76)",
      "speed": "40 ft. ",
      "saving_throws": "DEX +7, CON +9, WIS +7, CHA +9",
      "damage_resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Cold, Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Blindsight 60 ft., Darkvision 120 ft.,  Passive Perception 12",
      "languages": "Infernal, Telepathy 120 ft.",
      "challenge": "14 (11,500 XP)",
      "traits": [
        {
          "name": "Devil's Sight.",
          "content": "Magical darkness doesn't impede the devil's darkvision."
        },
        {
          "name": "Magic Resistance.",
          "content": "The devil has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The devil makes three attacks: one with its bite, one with its claws, and one with its tail."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one target.",
          "attack_dmg": "12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage."
        },
        {
          "name": "Wall of Ice (Recharge 6).",
          "content": "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.\n\nWhen the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.\n\nThe wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-\u00adfoot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/353/315/315/636252777966974765.jpeg",
      "id": "dOsnKMcPUzHw7PHbl-RL9",
      "ability_scores": {
        "STR": "21",
        "DEX": "14",
        "CON": "18",
        "INT": "18",
        "WIS": "15",
        "CHA": "18"
      }
    },
    {
      "name": "Ice Mephit",
      "meta": "Small elemental, neutral evil",
      "armor_class": "11 ",
      "hit_points": "21 (6d6)",
      "speed": "30 ft., fly 30 ft. ",
      "skills": "Perception +2, Stealth +3",
      "damage_vulnerabilities": "Bludgeoning, Fire",
      "damage_immunities": "Cold, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 12",
      "languages": "Aquan, Auran",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Death Burst.",
          "content": "When the mephit dies, it explodes in a burst of jagged ice. Each creature within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (1d8) slashing damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "False Appearance.",
          "content": "While the mephit remains motionless, it is indistinguishable from an ordinary shard of ice."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "(1/Day). The mephit can innately cast fog cloud, requiring no material components. Its innate spellcasting ability is Charisma."
        }
      ],
      "actions": [
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one creature.",
          "attack_dmg": "3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage."
        },
        {
          "name": "Frost Breath (Recharge 6).",
          "content": "The mephit exhales a 15- foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/290/315/315/636379804105821214.jpeg",
      "id": "Ji0jXOYgl00KKgZ4njATa",
      "ability_scores": {
        "STR": "7",
        "DEX": "13",
        "CON": "10",
        "INT": "9",
        "WIS": "11",
        "CHA": "12"
      }
    },
    {
      "name": "Imp",
      "meta": "Tiny fiend, lawful evil",
      "armor_class": "13 ",
      "hit_points": "10 (3d4 + 3)",
      "speed": "20 ft., fly 40 ft. ",
      "skills": "Deception +4, Insight +3, Persuasion +4, Stealth +5",
      "damage_resistances": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 11",
      "languages": "Common, Infernal",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Shapechanger.",
          "content": "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          "name": "Devil's Sight.",
          "content": "Magical darkness doesn't impede the imp's darkvision."
        },
        {
          "name": "Magic Resistance.",
          "content": "The imp has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Sting (Bite in Beast Form).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Invisibility.",
          "content": "The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/361/315/315/636252778560366227.jpeg",
      "id": "s2crk24SYB-GV14ejGPNM",
      "ability_scores": {
        "STR": "6",
        "DEX": "17",
        "CON": "13",
        "INT": "11",
        "WIS": "12",
        "CHA": "14"
      }
    },
    {
      "name": "Invisible Stalker",
      "meta": "Medium elemental, neutral",
      "armor_class": "14 ",
      "hit_points": "104 (16d8 + 32)",
      "speed": "50 ft., fly 50 ft. (hover) ",
      "skills": "Perception +8, Stealth +10",
      "damage_resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Poison",
      "condition_immunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
      "senses": "Darkvision 60 ft.,  Passive Perception 18",
      "languages": "Auran  Understands Common but doesn't speak it",
      "challenge": "6 (2,300 XP)",
      "traits": [
        {
          "name": "Invisibility.",
          "content": "The stalker is invisible."
        },
        {
          "name": "Faultless Tracker.",
          "content": "The stalker is given a quarry by its summoner. The stalker knows the direction and distance to its quarry as long as the two of them are on the same plane of existence. The stalker also knows the location of its summoner."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The stalker makes two slam attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/367/315/315/636252779159282339.jpeg",
      "id": "10_sZd9Ga0cq1NVnaq4MW",
      "ability_scores": {
        "STR": "16",
        "DEX": "19",
        "CON": "14",
        "INT": "10",
        "WIS": "15",
        "CHA": "11"
      }
    },
    {
      "name": "Iron Golem",
      "meta": "Large construct, unaligned",
      "armor_class": "20 (Natural Armor)",
      "hit_points": "210 (20d10 + 100)",
      "speed": "30 ft. ",
      "damage_immunities": "Fire, Poison, Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 10",
      "languages": "Understands the languages of its creator but can't speak",
      "challenge": "16 (15,000 XP)",
      "traits": [
        {
          "name": "Fire Absorption.",
          "content": "Whenever the golem is subjected to fire damage, it takes no damage and instead regains a number of hit points equal to the fire damage dealt."
        },
        {
          "name": "Immutable Form.",
          "content": "The golem is immune to any spell or effect that would alter its form."
        },
        {
          "name": "Magic Resistance.",
          "content": "The golem has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Magic Weapons.",
          "content": "The golem's weapon attacks are magical."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The golem makes two melee attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+13 to hit, reach 5 ft., one target.",
          "attack_dmg": "20 (3d8 + 7) bludgeoning damage."
        },
        {
          "name": "Sword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+13 to hit, reach 10 ft., one target.",
          "attack_dmg": "23 (3d10 + 7) slashing damage."
        },
        {
          "name": "Poison Breath (Recharge 6).",
          "content": "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/371/315/315/636252779460570049.jpeg",
      "id": "CTaBck_XQyuymF0GY0OPV",
      "ability_scores": {
        "STR": "24",
        "DEX": "9",
        "CON": "20",
        "INT": "3",
        "WIS": "11",
        "CHA": "1"
      }
    },
    {
      "name": "Jackal",
      "meta": "Small beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "3 (1d6)",
      "speed": "40 ft. ",
      "skills": "Perception +3",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Smell.",
          "content": "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          "name": "Pack Tactics.",
          "content": "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+1 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 (1d4 \u2013 1) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "-eKcKuRQJHXdkSI-Goqw7",
      "ability_scores": {
        "STR": "8",
        "DEX": "15",
        "CON": "11",
        "INT": "3",
        "WIS": "12",
        "CHA": "6"
      }
    },
    {
      "name": "Killer Whale",
      "meta": "Huge beast, unaligned",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "90 (12d12 + 12)",
      "speed": "0 ft., swim 60 ft. ",
      "skills": "Perception +3",
      "senses": "Blindsight 120 ft.,  Passive Perception 13",
      "languages": "--",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Echolocation.",
          "content": "The whale can't use its blindsight while deafened."
        },
        {
          "name": "Hold Breath.",
          "content": "The whale can hold its breath for 30 minutes."
        },
        {
          "name": "Keen Hearing.",
          "content": "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "21 (5d6 + 4) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "NRr2cI2p7-J_ya25wvLda",
      "ability_scores": {
        "STR": "19",
        "DEX": "10",
        "CON": "13",
        "INT": "3",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Knight",
      "meta": "Medium humanoid, any",
      "armor_class": "18 (Plate)",
      "hit_points": "52 (8d8 + 16)",
      "speed": "30 ft. ",
      "saving_throws": "CON +4, WIS +2",
      "senses": "Passive Perception 10",
      "languages": "Any one language (usually Common)",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Brave.",
          "content": "The knight has advantage on saving throws against being frightened."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The knight makes two melee attacks."
        },
        {
          "name": "Greatsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) slashing damage."
        },
        {
          "name": "Heavy Crossbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+2 to hit, range 100/400 ft., one target.",
          "attack_dmg": "5 (1d10) piercing damage."
        },
        {
          "name": "Leadership (Recharges after a Short or Long Rest).",
          "content": "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated."
        }
      ],
      "reactions": [
        {
          "name": "Parry.",
          "content": "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "yAg0Hs-qnrbyx3DCBg8mL",
      "ability_scores": {
        "STR": "16",
        "DEX": "11",
        "CON": "14",
        "INT": "11",
        "WIS": "11",
        "CHA": "15"
      }
    },
    {
      "name": "Kobold",
      "meta": "Small humanoid, lawful evil",
      "armor_class": "12 ",
      "hit_points": "5 (2d6 - 2)",
      "speed": "30 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 8",
      "languages": "Common, Draconic",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Sunlight Sensitivity.",
          "content": "While in sunlight, the kobold has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        },
        {
          "name": "Pack Tactics.",
          "content": "The kobold has advantage on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Dagger.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d4 + 2) piercing damage."
        },
        {
          "name": "Sling.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 30/120 ft., one target.",
          "attack_dmg": "4 (1d4 + 2) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/379/1000/1000/636252780450300625.jpeg",
      "id": "mryv0OHmjdvbMpJ1ZgYg7",
      "ability_scores": {
        "STR": "7",
        "DEX": "15",
        "CON": "9",
        "INT": "8",
        "WIS": "7",
        "CHA": "8"
      }
    },
    {
      "name": "Kraken",
      "meta": "Gargantuan monstrosity, chaotic evil",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "472 (27d20 + 189)",
      "speed": "20 ft., swim 60 ft. ",
      "saving_throws": "STR +17, DEX +7, CON +14, INT +13, WIS +11",
      "damage_immunities": "Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "condition_immunities": "Frightened, Paralyzed",
      "senses": "Truesight 120 ft.,  Passive Perception 14",
      "languages": "Abyssal, Celestial, Infernal, Primordial, Telepathy 120 ft. but can't speak",
      "challenge": "23 (50,000 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The kraken can breathe air and water."
        },
        {
          "name": "Freedom of Movement.",
          "content": "The kraken ignores difficult terrain, and magical effects can't reduce its speed or cause it to be restrained. It can spend 5 feet of movement to escape from nonmagical restraints or being grappled."
        },
        {
          "name": "Siege Monster.",
          "content": "The kraken deals double damage to objects and structures."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 5 ft., one target.",
          "attack_dmg": "23 (3d8 + 10) piercing damage.",
          "content": " If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns.\n\nIf the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
        },
        {
          "name": "Tentacle.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+17 to hit, reach 30 ft., one target.",
          "attack_dmg": "20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18).",
          "content": " Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target."
        },
        {
          "name": "Fling.",
          "content": "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone."
        },
        {
          "name": "Lightning Storm.",
          "content": "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "legendary_actions": [
        {
          "content": "The kraken can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The kraken regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Tentacle Attack or Fling.",
          "content": "The kraken makes one tentacle attack or uses its Fling."
        },
        {
          "name": "Lightning Storm (Costs 2 Actions).",
          "content": "The kraken uses Lightning Storm."
        },
        {
          "name": "Ink Cloud (Costs 3 Actions).",
          "content": "While underwater, the kraken expels an ink cloud in a 60-foot radius. The cloud spreads around corners, and that area is heavily obscured to creatures other than the kraken. Each creature other than the kraken that ends its turn there must succeed on a DC 23 Constitution saving throw, taking 16 (3d10) poison damage on a failed save, or half as much damage on a successful one. A strong current disperses the cloud, which otherwise disappears at the end of the kraken's next turn."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/381/1000/1000/636252780680163799.jpeg",
      "id": "pxzryn65_u47mKbTv3Ggt",
      "ability_scores": {
        "STR": "30",
        "DEX": "11",
        "CON": "25",
        "INT": "22",
        "WIS": "18",
        "CHA": "20"
      }
    },
    {
      "name": "Lamia",
      "meta": "Large monstrosity, chaotic evil",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "97 (13d10 + 26)",
      "speed": "30 ft. ",
      "skills": "Deception +7, Insight +4, Stealth +3",
      "senses": "Darkvision 60 ft.,  Passive Perception 12",
      "languages": "Abyssal, Common",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Innate Spellcasting.",
          "content": "The lamia's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast the following spells, requiring no material components.\n\nAt will: disguise self (any humanoid form), major image\n\n3/day each: charm person, mirror image, scrying, suggestion\n\n1/day: geas"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "14 (2d10 + 3) slashing damage."
        },
        {
          "name": "Dagger.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d4 + 3) piercing damage."
        },
        {
          "name": "Intoxicating Touch.",
          "type": "Melee Spell Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one creature.",
          "attack_dmg": "The target is magically cursed for 1 hour.",
          "content": " Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/385/315/315/636252780906064244.jpeg",
      "id": "7H7alukBAwSIBFxXyZkRR",
      "ability_scores": {
        "STR": "16",
        "DEX": "13",
        "CON": "15",
        "INT": "14",
        "WIS": "15",
        "CHA": "16"
      }
    },
    {
      "name": "Lemure",
      "meta": "Medium fiend, lawful evil",
      "armor_class": "7 ",
      "hit_points": "13 (3d8)",
      "speed": "15 ft. ",
      "damage_resistances": "Cold",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Charmed, Frightened, Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 10",
      "languages": "Understands Infernal but can't speak it",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Devil's Sight.",
          "content": "Magical darkness doesn't impede the lemure's darkvision."
        },
        {
          "name": "Hellish Rejuvenation.",
          "content": "A lemure that dies in the Nine Hells comes back to life with all its hit points in 1d10 days unless it is killed by a good-aligned creature with a bless spell cast on that creature or its remains are sprinkled with holy water."
        }
      ],
      "actions": [
        {
          "name": "Fist.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "2 (1d4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/149/1000/1000/636252758704142054.jpeg",
      "id": "7jMma3qGeqS2L25AiMkka",
      "ability_scores": {
        "STR": "10",
        "DEX": "5",
        "CON": "11",
        "INT": "1",
        "WIS": "11",
        "CHA": "3"
      }
    },
    {
      "name": "Lich",
      "meta": "Medium undead, any evil alignment",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "135 (18d8 + 54)",
      "speed": "30 ft. ",
      "saving_throws": "CON +10, INT +12, WIS +9",
      "skills": "Arcana +18, History +12, Insight +9, Perception +9",
      "damage_resistances": "Cold, Lightning, Necrotic",
      "damage_immunities": "Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
      "senses": "Truesight 120 ft.,  Passive Perception 19",
      "languages": "Common plus up to five other languages",
      "challenge": "21 (33,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the lich fails a saving throw, it can choose to succeed instead."
        },
        {
          "name": "Rejuvenation.",
          "content": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days, regaining all its hit points and becoming active again. The new body appears within 5 feet of the phylactery."
        },
        {
          "name": "Spellcasting.",
          "content": "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 20, +12 to hit with spell attacks). The lich has the following wizard spells prepared:\n\nCantrips (at will): mage hand, prestidigitation, ray of frost\n\n1st level (4 slots): detect magic, magic missile, shield, thunderwave\n\n2nd level (3 slots): acid arrow, detect thoughts, invisibility, mirror image\n\n3rd level (3 slots): animate dead, counterspell, dispel magic, fireball\n\n4th level (3 slots): blight, dimension door\n\n5th level (3 slots): cloudkill, scrying\n\n6th level (1 slot): disintegrate, globe of invulnerability\n\n7th level (1 slot): finger of death, plane shift\n\n8th level (1 slot): dominate monster, power word stun\n\n9th level (1 slot): power word kill"
        },
        {
          "name": "Turn Resistance.",
          "content": "The lich has advantage on saving throws against any effect that turns undead."
        }
      ],
      "actions": [
        {
          "name": "Paralyzing Touch.",
          "type": "Melee Spell Attack:",
          "attack_info": "+12 to hit, reach 5 ft., one creature.",
          "attack_dmg": "10 (3d6) cold damage.",
          "content": " The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "legendary_actions": [
        {
          "content": "The lich can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The lich regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Cantrip.",
          "content": "The lich casts a cantrip."
        },
        {
          "name": "Paralyzing Touch (Costs 2 Actions).",
          "content": "The lich uses its Paralyzing Touch."
        },
        {
          "name": "Frightening Gaze (Costs 2 Actions).",
          "content": "The lich fixes its gaze on one creature it can see within 10 feet of it. The target must succeed on a DC 18 Wisdom saving throw against this magic or become frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to the lich's gaze for the next 24 hours."
        },
        {
          "name": "Disrupt Life (Costs 3 Actions).",
          "content": "Each living creature within 20 feet of the lich must make a DC 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/165/1000/1000/636252760084366499.jpeg",
      "id": "Dc9slSpGwp_uBYymR9WPw",
      "ability_scores": {
        "STR": "11",
        "DEX": "16",
        "CON": "16",
        "INT": "20",
        "WIS": "14",
        "CHA": "16"
      }
    },
    {
      "name": "Lion",
      "meta": "Large beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "26 (4d10 + 4)",
      "speed": "50 ft. ",
      "skills": "Perception +3, Stealth +6",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The lion has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          "name": "Pack Tactics",
          "content": ": The\n\nspan\n\nlion\n\n/span\n\nhas advantage on an attack roll against a creature if at least one of the\n\nspan\n\nlion\n\n/span\n\n\u2019s allies is within 5 feet of the creature and the ally isn\u2019t i\n\nspan\n\nncapacitated\n\n/span\n\n."
        },
        {
          "name": "Pounce.",
          "content": "If the lion moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action."
        },
        {
          "name": "Running Leap.",
          "content": "With a 10-foot running start, the lion can long jump up to 25 feet."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "ipvDCJgqjZDjSHrsw-WJ_",
      "ability_scores": {
        "STR": "17",
        "DEX": "15",
        "CON": "13",
        "INT": "3",
        "WIS": "12",
        "CHA": "8"
      }
    },
    {
      "name": "Lizard",
      "meta": "Tiny beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "2 (1d4)",
      "speed": "20 ft., climb 20 ft. ",
      "senses": "Darkvision 30 ft.,  Passive Perception 9",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+0 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "esB2IqKqVhLTu2xGj8Du1",
      "ability_scores": {
        "STR": "2",
        "DEX": "11",
        "CON": "10",
        "INT": "1",
        "WIS": "8",
        "CHA": "3"
      }
    },
    {
      "name": "Lizardfolk",
      "meta": "Medium humanoid, neutral",
      "armor_class": "15 (Natural Armor, Shield)",
      "hit_points": "22 (4d8 + 4)",
      "speed": "30 ft., swim 30 ft. ",
      "skills": "Perception +3, Stealth +2, Survival +5",
      "senses": "Passive Perception 13",
      "languages": "Draconic",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Hold Breath.",
          "content": "The lizardfolk can hold its breath for 15 minutes."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The lizardfolk makes two melee attacks, each one with a different weapon."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Heavy Club.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) bludgeoning damage."
        },
        {
          "name": "Javelin.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft. or range 30/120 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Spiked Shield.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/233/315/315/636252766314905259.jpeg",
      "id": "EiRijNYndW-dQldw7DkAl",
      "ability_scores": {
        "STR": "15",
        "DEX": "10",
        "CON": "13",
        "INT": "7",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Mage",
      "meta": "Medium humanoid, any",
      "armor_class": "12 (15 With Mage Armor)",
      "hit_points": "40 (9d8)",
      "speed": "30 ft. ",
      "saving_throws": "INT +6, WIS +4",
      "skills": "Arcana +6, History +6",
      "senses": "Passive Perception 11",
      "languages": "Any four languages",
      "challenge": "6 (2,300 XP)",
      "traits": [
        {
          "name": "Spellcasting.",
          "content": "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The mage has the following wizard spells prepared:\n\nCantrips (at will): fire bolt, light, mage hand, prestidigitation\n\n1st level (4 slots): detect magic, mage armor, magic missile, shield\n\n2nd level (3 slots): misty step, suggestion\n\n3rd level (3 slots): counterspell, fireball, fly\n\n4th level (3 slots): greater invisibility, ice storm\n\n5th level (1 slot): cone of cold"
        }
      ],
      "actions": [
        {
          "name": "Dagger.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft. or range 20/60 ft., one target.",
          "attack_dmg": "4 (1d4 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "KjqObUxTxJRovc5UuQ6Qo",
      "ability_scores": {
        "STR": "9",
        "DEX": "14",
        "CON": "11",
        "INT": "17",
        "WIS": "12",
        "CHA": "11"
      }
    },
    {
      "name": "Magma Mephit",
      "meta": "Small elemental, neutral evil",
      "armor_class": "11 ",
      "hit_points": "22 (5d6 + 5)",
      "speed": "30 ft., fly 30 ft. ",
      "skills": "Stealth +3",
      "damage_vulnerabilities": "Cold",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Ignan, Terran",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Death Burst.",
          "content": "When the mephit dies, it explodes in a burst of lava. Each creature within 5 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "False Appearance.",
          "content": "While the mephit remains motionless, it is indistinguishable from an ordinary mound of magma."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "(1/Day). The mephit can innately cast heat metal (spell save DC 10), requiring no material components. Its innate spellcasting ability is Charisma."
        }
      ],
      "actions": [
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one creature.",
          "attack_dmg": "3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage."
        },
        {
          "name": "Fire Breath (Recharge 6).",
          "content": "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/292/315/315/636379804350894228.jpeg",
      "id": "I6KZhdlYj62RPvoVtVhoU",
      "ability_scores": {
        "STR": "8",
        "DEX": "12",
        "CON": "12",
        "INT": "7",
        "WIS": "10",
        "CHA": "10"
      }
    },
    {
      "name": "Magmin",
      "meta": "Small elemental, chaotic neutral",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "9 (2d6 + 2)",
      "speed": "30 ft. ",
      "damage_resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Fire",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Ignan",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Death Burst.",
          "content": "When the magmin dies, it explodes in a burst of fire and magma. Each creature within 10 feet of it must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one. Flammable objects that aren't being worn or carried in that area are ignited."
        },
        {
          "name": "Ignited Illumination.",
          "content": "As a bonus action, the magmin can set itself ablaze or extinguish its flames. While ablaze, the magmin sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
        }
      ],
      "actions": [
        {
          "name": "Touch.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (2d6) fire damage.",
          "content": " If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/183/315/315/636252762034276620.jpeg",
      "id": "aobnTpEzitrBYv0QEm0aB",
      "ability_scores": {
        "STR": "7",
        "DEX": "15",
        "CON": "12",
        "INT": "8",
        "WIS": "11",
        "CHA": "10"
      }
    },
    {
      "name": "Mammoth",
      "meta": "Huge beast, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "126 (11d12 + 55)",
      "speed": "40 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "6 (2,300 XP)",
      "traits": [
        {
          "name": "Trampling Charge.",
          "content": "If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Gore.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "25 (4d8 + 7) piercing damage."
        },
        {
          "name": "Stomp.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one prone creature.",
          "attack_dmg": "29 (4d10 + 7) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "HafBvYCchhPQEDm6j-d5z",
      "ability_scores": {
        "STR": "24",
        "DEX": "9",
        "CON": "21",
        "INT": "3",
        "WIS": "11",
        "CHA": "6"
      }
    },
    {
      "name": "Manticore",
      "meta": "Large monstrosity, lawful evil",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "68 (8d10 + 24)",
      "speed": "30 ft., fly 50 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 11",
      "languages": "Common",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Tail Spike Regrowth.",
          "content": "The manticore has twenty-four tail spikes. Used spikes regrow when the manticore finishes a long rest."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) slashing damage."
        },
        {
          "name": "Tail Spike.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+5 to hit, range 100/200 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/187/315/315/636252762623266809.jpeg",
      "id": "nOgePa6eM-yF1aayJspyy",
      "ability_scores": {
        "STR": "17",
        "DEX": "16",
        "CON": "17",
        "INT": "7",
        "WIS": "12",
        "CHA": "8"
      }
    },
    {
      "name": "Marilith",
      "meta": "Large fiend, chaotic evil",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "189 (18d10 + 90)",
      "speed": "40 ft. ",
      "saving_throws": "STR +9, CON +10, WIS +8, CHA +10",
      "damage_resistances": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Truesight 120 ft.,  Passive Perception 13",
      "languages": "Abyssal, Telepathy 120 ft.",
      "challenge": "16 (15,000 XP)",
      "traits": [
        {
          "name": "Magic Resistance.",
          "content": "The marilith has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Magic Weapons.",
          "content": "The marilith's weapon attacks are magical."
        },
        {
          "name": "Reactive.",
          "content": "The marilith can take one reaction on every turn in a combat."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The marilith makes seven attacks: six with its longswords and one with its tail."
        },
        {
          "name": "Longsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) slashing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 10 ft., one creature.",
          "attack_dmg": "15 (2d10 + 4) bludgeoning damage.",
          "content": " If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets."
        },
        {
          "name": "Teleport.",
          "content": "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        }
      ],
      "reactions": [
        {
          "name": "Parry.",
          "content": "The marilith adds 5 to its AC against one melee attack that would hit it. To do so, the marilith must see the attacker and be wielding a melee weapon."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/189/315/315/636252763036079032.jpeg",
      "id": "1VQRc2Q7iCBD6BVbeqvuj",
      "ability_scores": {
        "STR": "18",
        "DEX": "20",
        "CON": "20",
        "INT": "18",
        "WIS": "16",
        "CHA": "20"
      }
    },
    {
      "name": "Mastiff",
      "meta": "Medium beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "5 (1d8 + 1)",
      "speed": "40 ft. ",
      "skills": "Perception +3",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Smell.",
          "content": "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) piercing damage.",
          "content": " If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/191/1000/1000/636252763295291063.jpeg",
      "id": "AgbgMtPt2CV1R3mOuVQn7",
      "ability_scores": {
        "STR": "13",
        "DEX": "14",
        "CON": "12",
        "INT": "3",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Medusa",
      "meta": "Medium monstrosity, lawful evil",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "127 (17d8 + 51)",
      "speed": "30 ft. ",
      "skills": "Deception +5, Insight +4, Perception +4, Stealth +5",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Common",
      "challenge": "6 (2,300 XP)",
      "traits": [
        {
          "name": "Petrifying Gaze.",
          "content": "When a creature that can see the medusa's eyes starts its turn within 30 feet of the medusa, the medusa can force it to make a DC 14 Constitution saving throw if the medusa isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.\n\nUnless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the medusa until the start of its next turn, when it can avert its eyes again. If the creature looks at the medusa in the meantime, it must immediately make the save.\n\nIf the medusa sees itself reflected on a polished surface within 30 feet of it and in an area of bright light, the medusa is, due to its curse, affected by its own gaze."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The medusa makes either three melee attacks--one with its snake hair and two with its shortsword--or two ranged attacks with its longbow."
        },
        {
          "name": "Snake Hair.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one creature.",
          "attack_dmg": "4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage."
        },
        {
          "name": "Shortsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Longbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+5 to hit, range 150/600 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/580/1000/1000/636376361850900325.jpeg",
      "id": "y7UPuT6iKP-o5hn55pMUS",
      "ability_scores": {
        "STR": "10",
        "DEX": "15",
        "CON": "16",
        "INT": "12",
        "WIS": "13",
        "CHA": "15"
      }
    },
    {
      "name": "Merfolk",
      "meta": "Medium humanoid, neutral",
      "armor_class": "11 ",
      "hit_points": "11 (2d8 + 2)",
      "speed": "10 ft., swim 40 ft. ",
      "skills": "Perception +2",
      "senses": "Passive Perception 12",
      "languages": "Aquan, Common",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The merfolk can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Spear.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft. or range 20/60 ft., one target.",
          "attack_dmg": "3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/197/1000/1000/636252763841141413.jpeg",
      "id": "cy6L1Y35bzcqyhdZhO0yV",
      "ability_scores": {
        "STR": "10",
        "DEX": "13",
        "CON": "12",
        "INT": "11",
        "WIS": "11",
        "CHA": "12"
      }
    },
    {
      "name": "Merrow",
      "meta": "Large monstrosity, chaotic evil",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "45 (6d10 + 12)",
      "speed": "10 ft., swim 40 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Abyssal, Aquan",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The merrow can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The merrow makes two attacks: one with its bite and one with its claws or harpoon."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d8 + 4) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (2d4 + 4) slashing damage."
        },
        {
          "name": "Harpoon.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft. or range 20/60 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) piercing damage.",
          "content": " If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/203/315/315/636252764097970952.jpeg",
      "id": "2_LEYy7BTS3lCalul_zfJ",
      "ability_scores": {
        "STR": "18",
        "DEX": "10",
        "CON": "15",
        "INT": "8",
        "WIS": "10",
        "CHA": "9"
      }
    },
    {
      "name": "Mimic",
      "meta": "Medium monstrosity, neutral",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "58 (9d8 + 18)",
      "speed": "15 ft. ",
      "skills": "Stealth +5",
      "damage_immunities": "Acid",
      "condition_immunities": "Prone",
      "senses": "Darkvision 60 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Shapechanger.",
          "content": "The mimic can use its action to polymorph into an object or back into its true, amorphous form. Its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          "name": "Adhesive (Object Form Only).",
          "content": "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic is also grappled by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
        },
        {
          "name": "False Appearance (Object Form Only).",
          "content": "While the mimic remains motionless, it is indistinguishable from an ordinary object."
        },
        {
          "name": "Grappler.",
          "content": "The mimic has advantage on attack rolls against any creature grappled by it."
        }
      ],
      "actions": [
        {
          "name": "Pseudopod.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) bludgeoning damage.",
          "content": " If the mimic is in object form, the target is subjected to its Adhesive trait."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/211/315/315/636252764731637373.jpeg",
      "id": "nPZX2rF_mGzahBdvO5XX6",
      "ability_scores": {
        "STR": "17",
        "DEX": "12",
        "CON": "15",
        "INT": "5",
        "WIS": "13",
        "CHA": "8"
      }
    },
    {
      "name": "Minotaur",
      "meta": "Large monstrosity, chaotic evil",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "76 (9d10 + 27)",
      "speed": "40 ft. ",
      "skills": "Perception +7",
      "senses": "Darkvision 60 ft.,  Passive Perception 17",
      "languages": "Abyssal",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the minotaur moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone."
        },
        {
          "name": "Labyrinthine Recall.",
          "content": "The minotaur can perfectly recall any path it has traveled."
        },
        {
          "name": "Reckless.",
          "content": "At the start of its turn, the minotaur can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
        }
      ],
      "actions": [
        {
          "name": "Greataxe.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "17 (2d12 + 4) slashing damage."
        },
        {
          "name": "Gore.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/217/1000/1000/636252765009181721.jpeg",
      "id": "fbmI6i-tWfOMhM9wHwbfb",
      "ability_scores": {
        "STR": "18",
        "DEX": "11",
        "CON": "16",
        "INT": "6",
        "WIS": "16",
        "CHA": "9"
      }
    },
    {
      "name": "Minotaur Skeleton",
      "meta": "Large undead, lawful evil",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "67 (9d10 + 18)",
      "speed": "40 ft. ",
      "damage_vulnerabilities": "Bludgeoning",
      "damage_immunities": "Poison",
      "condition_immunities": "Exhaustion, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 9",
      "languages": "Understands Abyssal but can't speak  it",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the skeleton moves at least 10 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be pushed up to 10 feet away and knocked prone."
        }
      ],
      "actions": [
        {
          "name": "Greataxe.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "17 (2d12 + 4) slashing damage."
        },
        {
          "name": "Gore.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/480/1000/1000/636376298435934058.jpeg",
      "id": "7eSYd2fczT0oe8OPKBL9P",
      "ability_scores": {
        "STR": "18",
        "DEX": "11",
        "CON": "15",
        "INT": "6",
        "WIS": "8",
        "CHA": "5"
      }
    },
    {
      "name": "Mule",
      "meta": "Medium beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "11 (2d8 + 2)",
      "speed": "40 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Beast of Burden.",
          "content": "The mule is considered to be a Large animal for the purpose of determining its carrying capacity."
        },
        {
          "name": "Sure-Footed.",
          "content": "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
        }
      ],
      "actions": [
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d4 + 2) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "Q_Y46gpRsjsVyIi2UIJh3",
      "ability_scores": {
        "STR": "14",
        "DEX": "10",
        "CON": "13",
        "INT": "2",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Mummy",
      "meta": "Medium undead, lawful evil",
      "armor_class": "11 (Natural Armor)",
      "hit_points": "58 (9d8 + 18)",
      "speed": "20 ft. ",
      "saving_throws": "WIS +2",
      "damage_vulnerabilities": "Fire",
      "damage_resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Necrotic, Poison",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "The languages it knew in life",
      "challenge": "3 (700 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
        },
        {
          "name": "Rotting Fist.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage.",
          "content": " If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
        },
        {
          "name": "Dreadful Glare.",
          "content": "The mummy targets one creature it can see within 60 feet of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/225/1000/1000/636252765553048566.jpeg",
      "id": "O0eISQwfLG67OIcc3irFc",
      "ability_scores": {
        "STR": "16",
        "DEX": "8",
        "CON": "15",
        "INT": "6",
        "WIS": "10",
        "CHA": "12"
      }
    },
    {
      "name": "Mummy Lord",
      "meta": "Medium undead, lawful evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "97 (13d8 + 39)",
      "speed": "20 ft. ",
      "saving_throws": "CON +8, INT +5, WIS +9, CHA +8",
      "skills": "History +5, Religion +5",
      "damage_vulnerabilities": "Fire",
      "damage_immunities": "Necrotic, Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "The languages it knew in life",
      "challenge": "15 (13,000 XP)",
      "traits": [
        {
          "name": "Magic Resistance.",
          "content": "The mummy lord has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Rejuvenation.",
          "content": "A destroyed mummy lord gains a new body in 24 hours if its heart is intact, regaining all its hit points and becoming active again. The new body appears within 5 feet of the mummy lord's heart."
        },
        {
          "name": "Spellcasting.",
          "content": "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has the following cleric spells prepared:\n\nCantrips (at will): sacred flame, thaumaturgy\n\n1st level (4 slots): command, guiding bolt, shield of faith\n\n2nd level (3 slots): hold person, silence, spiritual weapon\n\n3rd level (3 slots): animate dead, dispel magic\n\n4th level (3 slots): divination, guardian of faith\n\n5th level (2 slots): contagion, insect plague\n\n6th level (1 slot): harm"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
        },
        {
          "name": "Rotting Fist.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 5 ft., one target.",
          "attack_dmg": "14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage.",
          "content": " If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
        },
        {
          "name": "Dreadful Glare.",
          "content": "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
        }
      ],
      "legendary_actions": [
        {
          "content": "The mummy lord can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The mummy lord regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Attack.",
          "content": "The mummy lord makes one attack with its rotting fist or uses its Dreadful Glare."
        },
        {
          "name": "Blinding Dust.",
          "content": "Blinding dust and sand swirls magically around the mummy lord. Each creature within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving throw or be blinded until the end of the creature's next turn."
        },
        {
          "name": "Blasphemous Word (Costs 2 Actions).",
          "content": "The mummy lord utters a blasphemous word. Each non-undead creature within 10 feet of the mummy lord that can hear the magical utterance must succeed on a DC 16 Constitution saving throw or be stunned until the end of the mummy lord's next turn."
        },
        {
          "name": "Channel Negative Energy (Costs 2 Actions).",
          "content": "The mummy lord magically unleashes negative energy. Creatures within 60 feet of the mummy lord, including ones behind barriers and around corners, can't regain hit points until the end of the mummy lord's next turn."
        },
        {
          "name": "Whirlwind of Sand (Costs 2 Actions).",
          "content": "The mummy lord magically transforms into a whirlwind of sand, moves up to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy lord is immune to all damage, and it can't be grappled, petrified, knocked prone, restrained, or stunned. Equipment worn or carried by the mummy lord remain in its possession."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/660/undead.jpg",
      "id": "gu-NDXYOjdWiPS_ler5nJ",
      "ability_scores": {
        "STR": "18",
        "DEX": "10",
        "CON": "17",
        "INT": "11",
        "WIS": "18",
        "CHA": "16"
      }
    },
    {
      "name": "Nalfeshnee",
      "meta": "Large fiend, chaotic evil",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "184 (16d10 + 96)",
      "speed": "20 ft., fly 30 ft. ",
      "saving_throws": "CON +11, INT +9, WIS +6, CHA +7",
      "damage_resistances": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Truesight 120 ft.,  Passive Perception 11",
      "languages": "Abyssal, Telepathy 120 ft.",
      "challenge": "13 (10,000 XP)",
      "traits": [
        {
          "name": "Magic Resistance.",
          "content": "The nalfeshnee has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one target.",
          "attack_dmg": "32 (5d10 + 5) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (3d6 + 5) slashing damage."
        },
        {
          "name": "Horror Nimbus (Recharge 5\u20136).",
          "content": "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours."
        },
        {
          "name": "Teleport.",
          "content": "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/261/1000/1000/636252768396688147.jpeg",
      "id": "Cs7vUiK2QjcgJm-W9Wiyg",
      "ability_scores": {
        "STR": "21",
        "DEX": "10",
        "CON": "22",
        "INT": "19",
        "WIS": "12",
        "CHA": "15"
      }
    },
    {
      "name": "Night Hag",
      "meta": "Medium fiend, neutral evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "112 (15d8 + 45)",
      "speed": "30 ft. ",
      "skills": "Deception +7, Insight +6, Perception +6, Stealth +6",
      "damage_resistances": "Cold, Fire; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "condition_immunities": "Charmed",
      "senses": "Darkvision 120 ft.,  Passive Perception 16",
      "languages": "Abyssal, Common, Infernal, Primordial",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Innate Spellcasting.",
          "content": "The hag's innate spellcasting ability is Charisma (spell save DC 14, +6 to hit with spell attacks). She can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, magic missile\n\n2/day each: plane shift (self only), ray of enfeeblement, sleep"
        },
        {
          "name": "Magic Resistance.",
          "content": "The hag has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Claws.(Hag Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) slashing damage."
        },
        {
          "name": "Change Shape.",
          "content": "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies."
        },
        {
          "name": "Etherealness.",
          "content": "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession."
        },
        {
          "name": "Nightmare Haunting (1/Day).",
          "content": "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/269/1000/1000/636252769277562895.jpeg",
      "id": "8okYIWjeX4TxNv4fBbKr5",
      "ability_scores": {
        "STR": "18",
        "DEX": "15",
        "CON": "16",
        "INT": "16",
        "WIS": "14",
        "CHA": "16"
      }
    },
    {
      "name": "Nightmare",
      "meta": "Large fiend, neutral evil",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "68 (8d10 + 24)",
      "speed": "60 ft., fly 90 ft. ",
      "damage_immunities": "Fire",
      "senses": "Passive Perception 11",
      "languages": "Common  and Infernal but can't speak",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Confer Fire Resistance.",
          "content": "The nightmare can grant resistance to fire damage to anyone riding it."
        },
        {
          "name": "Illumination.",
          "content": "The nightmare sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
        }
      ],
      "actions": [
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage."
        },
        {
          "name": "Ethereal Stride.",
          "content": "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/273/315/315/636252769493472144.jpeg",
      "id": "Tn9jJKyCTPiUhNkEXDWjh",
      "ability_scores": {
        "STR": "18",
        "DEX": "15",
        "CON": "16",
        "INT": "10",
        "WIS": "13",
        "CHA": "15"
      }
    },
    {
      "name": "Noble",
      "meta": "Medium humanoid, any",
      "armor_class": "15 (Breastplate)",
      "hit_points": "9 (2d8)",
      "speed": "30 ft. ",
      "skills": "Deception +5, Insight +4, Persuasion +5",
      "senses": "Passive Perception 12",
      "languages": "Any two languages",
      "challenge": "1/8 (25 XP)",
      "actions": [
        {
          "name": "Rapier.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d8 + 1) piercing damage."
        }
      ],
      "reactions": [
        {
          "name": "Parry.",
          "content": "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/277/1000/1000/636252769861281900.jpeg",
      "id": "9AaQloSCR2NgymivLZ3Li",
      "ability_scores": {
        "STR": "11",
        "DEX": "12",
        "CON": "11",
        "INT": "12",
        "WIS": "14",
        "CHA": "16"
      }
    },
    {
      "name": "Nothic",
      "meta": "Medium aberration, neutral evil",
      "armor_class": "15 Natural",
      "hit_points": "45 (6d8 + 18)",
      "speed": "30 ft. ",
      "skills": "Arcana +3, Insight +4, Perception +2, Stealth +5",
      "senses": "Truesight 120 ft.,  Passive Perception 12",
      "languages": "Undercommon",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Keen Sight.",
          "content": "The nothic has advantage on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The nothic makes two claw attacks."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) slashing damage."
        },
        {
          "name": "Rotting Gaze.",
          "content": "The nothic targets one creature it can see within 30 feet of it. The target must succeed on a DC 12 Constitution saving throw against this magic or take 10 (3d6) necrotic damage."
        },
        {
          "name": "Weird Insight.",
          "content": "The nothic targets one creature it can see within 30 feet of it. The target must contest its Charisma (Deception) check against the nothic\u2019s Wisdom (Insight) check. If the nothic wins, it magically learns one fact or secret about the target. The target automatically wins if it is immune to being charmed."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/475/1000/1000/636364321398842272.png",
      "id": "TBJfU3_IYk_OG9vAUAyTK",
      "ability_scores": {
        "STR": "14",
        "DEX": "16",
        "CON": "16",
        "INT": "13",
        "WIS": "10",
        "CHA": "8"
      }
    },
    {
      "name": "Ochre Jelly",
      "meta": "Large ooze, unaligned",
      "armor_class": "8 ",
      "hit_points": "45 (6d10 + 12)",
      "speed": "10 ft., climb 10 ft. ",
      "damage_resistances": "Acid",
      "damage_immunities": "Lightning, Slashing",
      "condition_immunities": "Blinded, Charmed, Deafened, Exhaustion, Frightened, Prone",
      "senses": "Blindsight 60 ft.,  Passive Perception 8",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Amorphous.",
          "content": "The jelly can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          "name": "Spider Climb.",
          "content": "The jelly can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        }
      ],
      "actions": [
        {
          "name": "Pseudopod.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage."
        }
      ],
      "reactions": [
        {
          "name": "Split.",
          "content": "When a jelly that is Medium or larger is subjected to lightning or slashing damage, it splits into two new jellies if it has at least 10 hit points. Each new jelly has hit points equal to half the original jelly's, rounded down. New jellies are one size smaller than the original jelly."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/279/1000/1000/636252770058723674.jpeg",
      "id": "VOQPiJmSp8mZAaZhr2Grk",
      "ability_scores": {
        "STR": "15",
        "DEX": "6",
        "CON": "14",
        "INT": "2",
        "WIS": "6",
        "CHA": "1"
      }
    },
    {
      "name": "Octopus",
      "meta": "Small beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "3 (1d6)",
      "speed": "5 ft., swim 30 ft. ",
      "skills": "Perception +2, Stealth +4",
      "senses": "Darkvision 30 ft.,  Passive Perception 12",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Hold Breath.",
          "content": "While out of water, the octopus can hold its breath for 30 minutes."
        },
        {
          "name": "Underwater Camouflage.",
          "content": "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
        },
        {
          "name": "Water Breathing.",
          "content": "The octopus can breathe only underwater."
        }
      ],
      "actions": [
        {
          "name": "Tentacles.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 bludgeoning damage, and the target is grappled (escape DC 10).",
          "content": " Until this grapple ends, the octopus can't use its tentacles on another target."
        },
        {
          "name": "Ink Cloud (Recharges after a Short or Long Rest).",
          "content": "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/921/315/315/636334602449110996.jpeg",
      "id": "V-vvIMevyc1RL30ZAntDV",
      "ability_scores": {
        "STR": "4",
        "DEX": "15",
        "CON": "11",
        "INT": "3",
        "WIS": "10",
        "CHA": "4"
      }
    },
    {
      "name": "Ogre",
      "meta": "Large giant, chaotic evil",
      "armor_class": "11 (Hide Armor)",
      "hit_points": "59 (7d10 + 21)",
      "speed": "40 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 8",
      "languages": "Common, Giant",
      "challenge": "2 (450 XP)",
      "actions": [
        {
          "name": "Greatclub.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) bludgeoning damage."
        },
        {
          "name": "Javelin.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft. or range 30/120 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/285/315/315/636252770535203221.jpeg",
      "id": "PcRpwdVQ_Q7172ePvQxZQ",
      "ability_scores": {
        "STR": "19",
        "DEX": "8",
        "CON": "16",
        "INT": "5",
        "WIS": "7",
        "CHA": "7"
      }
    },
    {
      "name": "Ogre Zombie",
      "meta": "Large undead, neutral evil",
      "armor_class": "8 ",
      "hit_points": "85 (9d10 + 36)",
      "speed": "30 ft. ",
      "saving_throws": "WIS +0",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 8",
      "languages": "Understands Common and Giant but can't speak  them",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Undead Fortitude.",
          "content": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
        }
      ],
      "actions": [
        {
          "name": "Morningstar.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/287/315/315/636252770700032248.jpeg",
      "id": "yegSrBCFSbeEebZPPRaTq",
      "ability_scores": {
        "STR": "19",
        "DEX": "6",
        "CON": "18",
        "INT": "3",
        "WIS": "6",
        "CHA": "5"
      }
    },
    {
      "name": "Oni",
      "meta": "Large giant, lawful evil",
      "armor_class": "16 (Chain Mail)",
      "hit_points": "110 (13d10 + 39)",
      "speed": "30 ft., fly 30 ft. ",
      "saving_throws": "DEX +3, CON +6, WIS +4, CHA +5",
      "skills": "Arcana +5, Deception +8, Perception +4",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Common, Giant",
      "challenge": "7 (2,900 XP)",
      "traits": [
        {
          "name": "Innate Spellcasting.",
          "content": "The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no material components:\n\nAt will: darkness, invisibility\n\n1/day each: charm person, cone of cold, gaseous form, sleep"
        },
        {
          "name": "Magic Weapons.",
          "content": "The oni's weapon attacks are magical."
        },
        {
          "name": "Regeneration.",
          "content": "The oni regains 10 hit points at the start of its turn if it has at least 1 hit point."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The oni makes two attacks, either with its claws or its glaive."
        },
        {
          "name": "Claw (Oni Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d8 + 4) slashing damage."
        },
        {
          "name": "Glaive.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form."
        },
        {
          "name": "Change Shape.",
          "content": "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/297/1000/1000/636252771507213738.jpeg",
      "id": "8gUNQXnRISh9oKFmpsUEl",
      "ability_scores": {
        "STR": "19",
        "DEX": "11",
        "CON": "16",
        "INT": "14",
        "WIS": "12",
        "CHA": "15"
      }
    },
    {
      "name": "Orc",
      "meta": "Medium humanoid, chaotic evil",
      "armor_class": "13 (Hide Armor)",
      "hit_points": "15 (2d8 + 6)",
      "speed": "30 ft. ",
      "skills": "Intimidation +2",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Common, Orc",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Aggressive",
          "content": ". As a bonus action, the orc can move up to its speed toward a hostile creature that it can see."
        }
      ],
      "actions": [
        {
          "name": "Greataxe.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (1d12 + 3) slashing damage."
        },
        {
          "name": "Javelin.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft. or range 30/120 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/1000/1000/636252771691385727.jpeg",
      "id": "3L11JMGKK13mg2R2_Grwk",
      "ability_scores": {
        "STR": "16",
        "DEX": "12",
        "CON": "16",
        "INT": "7",
        "WIS": "11",
        "CHA": "10"
      }
    },
    {
      "name": "Otyugh",
      "meta": "Large aberration, neutral",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "114 (12d10 + 48)",
      "speed": "30 ft. ",
      "saving_throws": "CON +7",
      "senses": "Darkvision 120 ft.,  Passive Perception 11",
      "languages": "Otyugh",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Limited Telepathy.",
          "content": "The otyugh can magically transmit simple messages and images to any creature within 120 feet of it that can understand a language. This form of telepathy doesn't allow the receiving creature to telepathically respond."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The otyugh makes three attacks: one with its bite and two with its tentacles."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "12 (2d8 + 3) piercing damage.",
          "content": " If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured."
        },
        {
          "name": "Tentacle.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 10 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage.",
          "content": " If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target."
        },
        {
          "name": "Tentacle Slam.",
          "content": "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/305/315/315/636252771931366466.jpeg",
      "id": "jWb3Yxc1xofSGzflIme0A",
      "ability_scores": {
        "STR": "16",
        "DEX": "11",
        "CON": "19",
        "INT": "6",
        "WIS": "13",
        "CHA": "6"
      }
    },
    {
      "name": "Owl",
      "meta": "Tiny beast, unaligned",
      "armor_class": "11 ",
      "hit_points": "1 (1d4 - 1)",
      "speed": "5 ft., fly 60 ft. ",
      "skills": "Perception +3, Stealth +3",
      "senses": "Darkvision 120 ft.,  Passive Perception 13",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Flyby.",
          "content": "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
        },
        {
          "name": "Keen Hearing and Sight.",
          "content": "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
        }
      ],
      "actions": [
        {
          "name": "Talons.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/533/1000/1000/636376331660233857.jpeg",
      "id": "-SWHI0HsQn7230IYoRHp5",
      "ability_scores": {
        "STR": "3",
        "DEX": "13",
        "CON": "8",
        "INT": "2",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Owlbear",
      "meta": "Large monstrosity, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "59 (7d10 + 21)",
      "speed": "40 ft. ",
      "skills": "Perception +3",
      "senses": "Darkvision 60 ft.,  Passive Perception 13",
      "languages": "--",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Keen Sight and Smell.",
          "content": "The owlbear has advantage on Wisdom (Perception) checks that rely on sight or smell."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The owlbear makes two attacks: one with its beak and one with its claws."
        },
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one creature.",
          "attack_dmg": "10 (1d10 + 5) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "14 (2d8 + 5) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/315/315/315/636252772225295187.jpeg",
      "id": "ZwHpZouzAr-tPMn0vCGqf",
      "ability_scores": {
        "STR": "20",
        "DEX": "12",
        "CON": "17",
        "INT": "3",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Panther",
      "meta": "Medium beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "13 (3d8)",
      "speed": "50 ft., climb 40 ft. ",
      "skills": "Perception +4, Stealth +6",
      "senses": "Passive Perception 14",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The panther has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          "name": "Pounce.",
          "content": "If the panther moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d4 + 2) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "v_C2wiSNcIJ4SAdSN1HOG",
      "ability_scores": {
        "STR": "14",
        "DEX": "15",
        "CON": "10",
        "INT": "3",
        "WIS": "14",
        "CHA": "7"
      }
    },
    {
      "name": "Pegasus",
      "meta": "Large celestial, chaotic good",
      "armor_class": "12 ",
      "hit_points": "59 (7d10 + 21)",
      "speed": "60 ft., fly 90 ft. ",
      "saving_throws": "DEX +4, WIS +4, CHA +3",
      "skills": "Perception +6",
      "senses": "Passive Perception 16",
      "languages": "Celestial, Common, Elvish  and Sylvan but can't speak",
      "challenge": "2 (450 XP)",
      "actions": [
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/303/1000/1000/636379808797059368.png",
      "id": "mJU_EOrGyg0bDVZsBVchc",
      "ability_scores": {
        "STR": "18",
        "DEX": "15",
        "CON": "16",
        "INT": "10",
        "WIS": "15",
        "CHA": "13"
      }
    },
    {
      "name": "Phase Spider",
      "meta": "Large monstrosity, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "32 (5d10 + 5)",
      "speed": "30 ft., climb 30 ft. ",
      "skills": "Stealth +6",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Ethereal Jaunt.",
          "content": "As a bonus action, the spider can magically shift from the Material Plane to the Ethereal Plane, or vice versa."
        },
        {
          "name": "Spider Climb.",
          "content": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          "name": "Web Walker.",
          "content": "The spider ignores movement restrictions caused by webbing."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one.",
          "content": " If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/319/315/315/636252772538300448.jpeg",
      "id": "UqeISiiHJ-vny3YeJhw4k",
      "ability_scores": {
        "STR": "15",
        "DEX": "15",
        "CON": "12",
        "INT": "6",
        "WIS": "10",
        "CHA": "6"
      }
    },
    {
      "name": "Pit Fiend",
      "meta": "Large fiend, lawful evil",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "300 (24d10 + 168)",
      "speed": "30 ft., fly 60 ft. ",
      "saving_throws": "DEX +8, CON +13, WIS +10",
      "damage_resistances": "Cold; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Truesight 120 ft.,  Passive Perception 14",
      "languages": "Infernal, Telepathy 120 ft.",
      "challenge": "20 (25,000 XP)",
      "traits": [
        {
          "name": "Fear Aura.",
          "content": "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature\u2019s saving throw is successful, the creature is immune to the pit fiend\u2019s Fear Aura for the next 24 hours"
        },
        {
          "name": "Magic Resistance.",
          "content": "The pit fiend has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Magic Weapons.",
          "content": "The pit fiend\u2019s weapon attacks are magical."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The pit fiend\u2019s spellcasting ability is Charisma (spell save DC 21). The pit fiend can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, fireball\n\n3/day each: hold monster, wall of fire"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 5 ft., one target.",
          "attack_dmg": "22 (4d6 + 8) piercing damage.",
          "content": " The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d8 + 8) slashing damage."
        },
        {
          "name": "Mace.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 10 ft., one target.",
          "attack_dmg": "24 (3d10 + 8) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/311/315/315/636252772132434763.jpeg",
      "id": "rIJOdTgm6GTdDEx-x1VHd",
      "ability_scores": {
        "STR": "26",
        "DEX": "14",
        "CON": "24",
        "INT": "22",
        "WIS": "18",
        "CHA": "24"
      }
    },
    {
      "name": "Planetar",
      "meta": "Large celestial, lawful good",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "200 (16d10 + 112)",
      "speed": "40 ft., fly 120 ft. ",
      "saving_throws": "CON +12, WIS +11, CHA +12",
      "skills": "Perception +11",
      "damage_resistances": "Radiant; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "condition_immunities": "Charmed, Exhaustion, Frightened",
      "senses": "Truesight 120 ft.,  Passive Perception 21",
      "languages": "All, Telepathy 120 ft.",
      "challenge": "16 (15,000 XP)",
      "traits": [
        {
          "name": "Angelic Weapons.",
          "content": "The planetar's weapon attacks are magical. When the planetar hits with any weapon, the weapon deals an extra 5d8 radiant damage (included in the attack)."
        },
        {
          "name": "Divine Awareness.",
          "content": "The planetar knows if it hears a lie."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The planetar's spellcasting ability is Charisma (spell save DC 20). The planetar can innately cast the following spells, requiring no material components:\n\nAt will: detect evil and good, invisibility (self only)\n\n3/day each: blade barrier, dispel evil and good, flame strike, raise dead\n\n1/day each: commune, control weather, insect plague"
        },
        {
          "name": "Magic Resistance.",
          "content": "The planetar has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The planetar makes two melee attacks."
        },
        {
          "name": "Greatsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+12 to hit, reach 5 ft., one target.",
          "attack_dmg": "21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage."
        },
        {
          "name": "Healing Touch",
          "content": "(4/Day). The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/303/315/315/636252771762002496.jpeg",
      "id": "jE9xpqCukmLzZb-p52PKl",
      "ability_scores": {
        "STR": "24",
        "DEX": "20",
        "CON": "24",
        "INT": "19",
        "WIS": "22",
        "CHA": "25"
      }
    },
    {
      "name": "Plesiosaurus",
      "meta": "Large beast, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "68 (8d10 + 24)",
      "speed": "20 ft., swim 40 ft. ",
      "skills": "Perception +3, Stealth +4",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Hold Breath.",
          "content": "The plesiosaurus can hold its breath for 1 hour."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 10 ft., one target.",
          "attack_dmg": "14 (3d6 + 4) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/488/315/315/636376304583147024.jpeg",
      "id": "oE1kwSYRDFDKjcQBzH18l",
      "ability_scores": {
        "STR": "18",
        "DEX": "15",
        "CON": "16",
        "INT": "2",
        "WIS": "12",
        "CHA": "5"
      }
    },
    {
      "name": "Poisonous Snake",
      "meta": "Tiny beast, unaligned",
      "armor_class": "13 ",
      "hit_points": "2 (1d4)",
      "speed": "30 ft., swim 30 ft. ",
      "senses": "Blindsight 10 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "tmAVshywTFaW5MzAimIZ9",
      "ability_scores": {
        "STR": "2",
        "DEX": "16",
        "CON": "11",
        "INT": "1",
        "WIS": "10",
        "CHA": "3"
      }
    },
    {
      "name": "Polar Bear",
      "meta": "Large beast, unaligned",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "42 (5d10 + 15)",
      "speed": "40 ft., swim 30 ft. ",
      "skills": "Perception +3",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The bear has advantage on Wisdom (Perception) checks that rely on smell."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The bear makes two attacks: one with its bite and one with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (1d8 + 5) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "12 (2d6 + 5) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "HyXFaCSE44XwaEpOucul1",
      "ability_scores": {
        "STR": "20",
        "DEX": "10",
        "CON": "16",
        "INT": "2",
        "WIS": "13",
        "CHA": "7"
      }
    },
    {
      "name": "Pony",
      "meta": "Medium beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "11 (2d8 + 2)",
      "speed": "40 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "actions": [
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (2d4 + 2) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "8gkt72DypQFsuDygwWFO5",
      "ability_scores": {
        "STR": "15",
        "DEX": "10",
        "CON": "13",
        "INT": "2",
        "WIS": "11",
        "CHA": "7"
      }
    },
    {
      "name": "Priest",
      "meta": "Medium humanoid, any",
      "armor_class": "13 (Chain Shirt)",
      "hit_points": "27 (5d8 + 5)",
      "speed": "25 ft. ",
      "skills": "Medicine +7, Persuasion +3, Religion +4",
      "senses": "Passive Perception 13",
      "languages": "Any two languages",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Divine Eminence.",
          "content": "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit. This benefit lasts until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st."
        },
        {
          "name": "Spellcasting.",
          "content": "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). The priest has the following cleric spells prepared:\n\nCantrips (at will): light, sacred flame, thaumaturgy\n\n1st level (4 slots): cure wounds, guiding bolt, sanctuary\n\n2nd level (3 slots): lesser restoration, spiritual weapon\n\n3rd level (2 slots): dispel magic, spirit guardians"
        }
      ],
      "actions": [
        {
          "name": "Mace.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "3 (1d6) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "rv2HjxcPxBU2uxFpJd2u7",
      "ability_scores": {
        "STR": "10",
        "DEX": "10",
        "CON": "12",
        "INT": "13",
        "WIS": "16",
        "CHA": "13"
      }
    },
    {
      "name": "Pseudodragon",
      "meta": "Tiny dragon, neutral good",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "7 (2d4 + 2)",
      "speed": "15 ft., fly 60 ft. ",
      "skills": "Perception +3, Stealth +4",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 13",
      "languages": "Understands Common and Draconic but can't speak them",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Magic Resistance.",
          "content": "The pseudodragon has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Limited Telepathy.",
          "content": "The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d4 + 2) piercing damage."
        },
        {
          "name": "Sting.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour.",
          "content": " If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/283/1000/1000/636252770521719244.jpeg",
      "id": "BZYos5JkpWqo8OoJMyfGE",
      "ability_scores": {
        "STR": "6",
        "DEX": "15",
        "CON": "13",
        "INT": "10",
        "WIS": "12",
        "CHA": "10"
      }
    },
    {
      "name": "Pteranodon",
      "meta": "Medium beast, unaligned",
      "armor_class": "13 Natural Armor",
      "hit_points": "13 (3d8)",
      "speed": "10 ft., fly 60 ft. ",
      "senses": "Passive Perception 11",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Flyby.",
          "content": "The pteranodon doesn\u2019t provoke an opportunity attack when it flies out of an enemy\u2019s reach."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (2d4 + 1) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "YLa1wAiIq_w_kzbRU4STi",
      "ability_scores": {
        "STR": "12",
        "DEX": "15",
        "CON": "10",
        "INT": "2",
        "WIS": "9",
        "CHA": "5"
      }
    },
    {
      "name": "Purple Worm",
      "meta": "Gargantuan monstrosity, unaligned",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "247 (15d20 + 90)",
      "speed": "50 ft., burrow 30 ft. ",
      "saving_throws": "CON +11, WIS +4",
      "senses": "Blindsight 30 ft., Tremorsense 60 ft.,  Passive Perception 9",
      "languages": "--",
      "challenge": "15 (13,000 XP)",
      "traits": [
        {
          "name": "Tunneler.",
          "content": "The worm can burrow through solid rock at half its burrow speed and leaves a 10-foot-diameter tunnel in its wake."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The worm makes two attacks: one with its bite and one with its stinger."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 10 ft., one target.",
          "attack_dmg": "22 (3d8 + 9) piercing damage.",
          "content": " If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns.\n\nIf the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone."
        },
        {
          "name": "Tail Stinger.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 10 ft., one creature.",
          "attack_dmg": "19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/275/315/315/636252769846436684.jpeg",
      "id": "e43CIZCsDvH299oLffHYY",
      "ability_scores": {
        "STR": "28",
        "DEX": "7",
        "CON": "22",
        "INT": "1",
        "WIS": "8",
        "CHA": "4"
      }
    },
    {
      "name": "Quasit",
      "meta": "Tiny fiend, chaotic evil",
      "armor_class": "13 ",
      "hit_points": "7 (3d4)",
      "speed": "40 ft. ",
      "skills": "Stealth +5",
      "damage_resistances": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 10",
      "languages": "Abyssal, Common",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Shapechanger.",
          "content": "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft. fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          "name": "Magic Resistance.",
          "content": "The quasit has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Claws (Bite in Beast Form).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute.",
          "content": " The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "name": "Scare (1/Day).",
          "content": "One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success."
        },
        {
          "name": "Invisibility.",
          "content": "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/271/315/315/636252769318699115.jpeg",
      "id": "ADanxWwrkGJOVRPn-CIMI",
      "ability_scores": {
        "STR": "5",
        "DEX": "17",
        "CON": "10",
        "INT": "7",
        "WIS": "10",
        "CHA": "10"
      }
    },
    {
      "name": "Quipper",
      "meta": "Tiny beast, unaligned",
      "armor_class": "13 ",
      "hit_points": "1 (1d4 - 1)",
      "speed": "0 ft., swim 40 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 8",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Blood Frenzy.",
          "content": "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
          "name": "Water Breathing.",
          "content": "The quipper can breathe only underwater."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/253/1000/1000/636252767919065233.jpeg",
      "id": "w72U2GSI9lyd3JTvdV56r",
      "ability_scores": {
        "STR": "2",
        "DEX": "16",
        "CON": "9",
        "INT": "1",
        "WIS": "7",
        "CHA": "2"
      }
    },
    {
      "name": "Rakshasa",
      "meta": "Medium fiend, lawful evil",
      "armor_class": "16 (Natural Armor)",
      "hit_points": "110 (13d8 + 52)",
      "speed": "40 ft. ",
      "skills": "Deception +10, Insight +8",
      "damage_vulnerabilities": "Piercing from Magic Weapons Wielded by Good Creatures",
      "damage_immunities": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "senses": "Darkvision 60 ft.,  Passive Perception 13",
      "languages": "Common, Infernal",
      "challenge": "13 (10,000 XP)",
      "traits": [
        {
          "name": "Limited Magic Immunity.",
          "content": "The rakshasa can't be affected or detected by spells of 6th level or lower unless it wishes to be. It has advantage on saving throws against all other spells and magical effects."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). The rakshasa can innately cast the following spells, requiring no material components:\n\nAt will: detect thoughts, disguise self, mage hand, minor illusion\n\n3/day each: charm person, detect magic, invisibility, major image, suggestion\n\n1/day each: dominate person, fly, plane shift, true seeing"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The rakshasa makes two claw attacks."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature.",
          "content": " The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/247/315/315/636252767480157951.jpeg",
      "id": "BF4v6W5888CWLqog15ylO",
      "ability_scores": {
        "STR": "14",
        "DEX": "17",
        "CON": "18",
        "INT": "13",
        "WIS": "16",
        "CHA": "20"
      }
    },
    {
      "name": "Rat",
      "meta": "Tiny beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "1 (1d4 - 1)",
      "speed": "20 ft. ",
      "senses": "Darkvision 30 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The rat has advantage on Wisdom (Perception) checks that rely on smell."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+0 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/541/315/315/636376335435407571.jpeg",
      "id": "2aYjaezYof9EqsSrn5eC6",
      "ability_scores": {
        "STR": "2",
        "DEX": "11",
        "CON": "9",
        "INT": "2",
        "WIS": "10",
        "CHA": "4"
      }
    },
    {
      "name": "Raven",
      "meta": "Tiny beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "1 (1d4 - 1)",
      "speed": "10 ft., fly 50 ft. ",
      "skills": "Perception +3",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Mimicry.",
          "content": "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
        }
      ],
      "actions": [
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/553/1000/1000/636376341568391037.jpeg",
      "id": "mEeSFX4iwZdeJWMxPQV2b",
      "ability_scores": {
        "STR": "2",
        "DEX": "14",
        "CON": "8",
        "INT": "2",
        "WIS": "12",
        "CHA": "6"
      }
    },
    {
      "name": "Red Dragon Wyrmling",
      "meta": "Medium dragon, chaotic evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "75 (10d8 + 30)",
      "speed": "30 ft., climb 30 ft., fly 60 ft. ",
      "saving_throws": "DEX +2, CON +5, WIS +2, CHA +4",
      "skills": "Perception +4, Stealth +2",
      "damage_immunities": "Fire",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Draconic",
      "challenge": "4 (1,100 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage."
        },
        {
          "name": "Fire Breath (Recharge 5\u20136).",
          "content": "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/239/315/315/636252766855622680.jpeg",
      "id": "Kgj0hnLSM0WtQvg7_M-Pm",
      "ability_scores": {
        "STR": "19",
        "DEX": "10",
        "CON": "17",
        "INT": "12",
        "WIS": "11",
        "CHA": "15"
      }
    },
    {
      "name": "Reef Shark",
      "meta": "Medium beast, unaligned",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "22 (4d8 + 4)",
      "speed": "0 ft., swim 40 ft. ",
      "skills": "Perception +2",
      "senses": "Blindsight 30 ft.,  Passive Perception 12",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Pack Tactics.",
          "content": "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        {
          "name": "Water Breathing.",
          "content": "The shark can breathe only underwater."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "FXdDGzluQ7JFezCexnkN1",
      "ability_scores": {
        "STR": "14",
        "DEX": "13",
        "CON": "13",
        "INT": "1",
        "WIS": "10",
        "CHA": "4"
      }
    },
    {
      "name": "Remorhaz",
      "meta": "Huge monstrosity, unaligned",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "195 (17d12 + 85)",
      "speed": "30 ft., burrow 20 ft. ",
      "damage_immunities": "Cold, Fire",
      "senses": "Darkvision 60 ft., Tremorsense 60 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "11 (7,200 XP)",
      "traits": [
        {
          "name": "Heated Body.",
          "content": "A creature that touches the remorhaz or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+11 to hit, reach 10 ft., one target.",
          "attack_dmg": "40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage.",
          "content": " If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target."
        },
        {
          "name": "Swallow.",
          "content": "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns.\n\nIf the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/231/315/315/636252766143328421.jpeg",
      "id": "_4J4z98A9UVuWdt51pjDC",
      "ability_scores": {
        "STR": "24",
        "DEX": "13",
        "CON": "21",
        "INT": "4",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Rhinoceros",
      "meta": "Large beast, unaligned",
      "armor_class": "11 (Natural Armor)",
      "hit_points": "45 (6d10 + 12)",
      "speed": "40 ft. ",
      "senses": "Passive Perception 11",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the rhinoceros moves at least 20 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
        }
      ],
      "actions": [
        {
          "name": "Gore.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "14 (2d8 + 5) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "QRF0sgv5D-1lgpNrUn8fw",
      "ability_scores": {
        "STR": "21",
        "DEX": "8",
        "CON": "15",
        "INT": "2",
        "WIS": "12",
        "CHA": "6"
      }
    },
    {
      "name": "Riding Horse",
      "meta": "Large beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "13 (2d10 + 2)",
      "speed": "60 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "actions": [
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (2d4 + 3) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/904/315/315/636334288913250513.jpeg",
      "id": "yBeEi_WKAuZOD6TlZob2Z",
      "ability_scores": {
        "STR": "16",
        "DEX": "10",
        "CON": "12",
        "INT": "2",
        "WIS": "11",
        "CHA": "7"
      }
    },
    {
      "name": "Roc",
      "meta": "Gargantuan monstrosity, unaligned",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "248 (16d20 + 80)",
      "speed": "20 ft., fly 120 ft. ",
      "saving_throws": "DEX +4, CON +9, WIS +4, CHA +3",
      "skills": "Perception +4",
      "senses": "Passive Perception 14",
      "languages": "--",
      "challenge": "11 (7,200 XP)",
      "traits": [
        {
          "name": "Keen Sight.",
          "content": "The roc has advantage on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The roc makes two attacks: one with its beak and one with its talons."
        },
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+13 to hit, reach 10 ft., one target.",
          "attack_dmg": "27 (4d8 + 9) piercing damage."
        },
        {
          "name": "Talons.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+13 to hit, reach 5 ft., one target.",
          "attack_dmg": "23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19).",
          "content": " Until this grapple ends, the target is restrained, and the roc can't use its talons on another target."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/229/315/315/636252765590929622.jpeg",
      "id": "9JDGvqalIU5r54bXBEZhS",
      "ability_scores": {
        "STR": "28",
        "DEX": "10",
        "CON": "20",
        "INT": "3",
        "WIS": "10",
        "CHA": "9"
      }
    },
    {
      "name": "Roper",
      "meta": "Large monstrosity, neutral evil",
      "armor_class": "20 (Natural Armor)",
      "hit_points": "93 (11d10 + 33)",
      "speed": "10 ft., climb 10 ft. ",
      "skills": "Perception +6, Stealth +5",
      "senses": "Darkvision 60 ft.,  Passive Perception 16",
      "languages": "--",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "False Appearance.",
          "content": "While the roper remains motionless, it is indistinguishable from a normal cave formation, such as a stalagmite."
        },
        {
          "name": "Grasping Tendrils.",
          "content": "The roper can have up to six tendrils at a time. Each tendril can be attacked (AC 20; 10 hit points; immunity to poison and psychic damage). Destroying a tendril deals no damage to the roper, which can extrude a replacement tendril on its next turn. A tendril can also be broken if a creature takes an action and succeeds on a DC 15 Strength check against it."
        },
        {
          "name": "Spider Climb.",
          "content": "The roper can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "22 (4d8 + 4) piercing damage."
        },
        {
          "name": "Tendril.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 50 ft., one creature.",
          "attack_dmg": "The target is grappled (escape DC 15).",
          "content": " Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target."
        },
        {
          "name": "Reel.",
          "content": "The roper pulls each creature grappled by it up to 25 feet straight toward it."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/560/1000/1000/636376344528091115.jpeg",
      "id": "3T1CJGIkhz7DFz0QiCWpc",
      "ability_scores": {
        "STR": "18",
        "DEX": "8",
        "CON": "17",
        "INT": "7",
        "WIS": "16",
        "CHA": "6"
      }
    },
    {
      "name": "Rug of Smothering",
      "meta": "Large construct, unaligned",
      "armor_class": "12 ",
      "hit_points": "33 (6d10)",
      "speed": "10 ft. ",
      "damage_immunities": "Poison, Psychic",
      "condition_immunities": "Blinded, Charmed, Deafened, Frightened, Paralyzed, Petrified, Poisoned",
      "senses": "Blindsight 60 ft.,  Passive Perception 6",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Antimagic Susceptibility.",
          "content": "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
        },
        {
          "name": "Damage Transfer.",
          "content": "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half."
        },
        {
          "name": "False Appearance.",
          "content": "While the rug remains motionless, it is indistinguishable from a normal rug."
        }
      ],
      "actions": [
        {
          "name": "Smother.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one Medium or smaller creature.",
          "attack_dmg": "The creature is grappled (escape DC 13).",
          "content": " Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/213/1000/1000/636252764761726261.jpeg",
      "id": "z4gkDHfTw-cIB9rM2yQHq",
      "ability_scores": {
        "STR": "17",
        "DEX": "14",
        "CON": "10",
        "INT": "1",
        "WIS": "3",
        "CHA": "1"
      }
    },
    {
      "name": "Rust Monster",
      "meta": "Medium monstrosity, unaligned",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "27 (5d8 + 5)",
      "speed": "40 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Iron Scent.",
          "content": "The rust monster can pinpoint, by scent, the location of ferrous metal within 30 feet of it."
        },
        {
          "name": "Rust Metal.",
          "content": "Any nonmagical weapon made of metal that hits the rust monster corrodes. After dealing damage, the weapon takes a permanent and cumulative \u22121 penalty to damage rolls. If its penalty drops to \u22125, the weapon is destroyed. Nonmagical ammunition made of metal that hits the rust monster is destroyed after dealing damage."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d8 + 1) piercing damage."
        },
        {
          "name": "Antennae.",
          "content": "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch.\n\nIf the object touched is either metal armor or a metal shield being worn or carried, it takes a permanent and cumulative \u22121 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/207/1000/1000/636252764265020108.jpeg",
      "id": "flKWaYOn0OciYTAZqjwLe",
      "ability_scores": {
        "STR": "13",
        "DEX": "12",
        "CON": "13",
        "INT": "2",
        "WIS": "13",
        "CHA": "6"
      }
    },
    {
      "name": "Saber-Toothed Tiger",
      "meta": "Large beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "52 (7d10 + 14)",
      "speed": "40 ft. ",
      "skills": "Perception +3, Stealth +6",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          "name": "Pounce.",
          "content": "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (1d10 + 5) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "12 (2d6 + 5) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "PUxpWqednYJIvnYIUVpak",
      "ability_scores": {
        "STR": "18",
        "DEX": "14",
        "CON": "15",
        "INT": "3",
        "WIS": "12",
        "CHA": "8"
      }
    },
    {
      "name": "Sahuagin",
      "meta": "Medium humanoid, lawful evil",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "22 (4d8 + 4)",
      "speed": "30 ft., swim 40 ft. ",
      "skills": "Perception +5",
      "senses": "Darkvision 120 ft.,  Passive Perception 15",
      "languages": "Sahuagin",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Blood Frenzy.",
          "content": "The sahuagin has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
          "name": "Limited Amphibiousness.",
          "content": "The sahuagin can breathe air and water, but it needs to be submerged at least once every 4 hours to avoid suffocating."
        },
        {
          "name": "Shark Telepathy.",
          "content": "The sahuagin can magically command any shark within 120 feet of it, using a limited telepathy."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "3 (1d4 + 1) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "3 (1d4 + 1) slashing damage."
        },
        {
          "name": "Spear.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft. or range 20/60 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/177/1000/1000/636252761683746719.jpeg",
      "id": "9viXcDfE0Y1GFDjznduax",
      "ability_scores": {
        "STR": "13",
        "DEX": "11",
        "CON": "12",
        "INT": "12",
        "WIS": "13",
        "CHA": "9"
      }
    },
    {
      "name": "Salamander",
      "meta": "Large elemental, neutral evil",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "90 (12d10 + 24)",
      "speed": "30 ft. ",
      "damage_vulnerabilities": "Cold",
      "damage_resistances": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Fire",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Ignan",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Heated Body.",
          "content": "A creature that touches the salamander or hits it with a melee attack while within 5 feet of it takes 7 (2d6) fire damage."
        },
        {
          "name": "Heated Weapons.",
          "content": "Any metal melee weapon the salamander wields deals an extra 3 (1d6) fire damage on a hit (included in the attack)."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The salamander makes two attacks: one with its spear and one with its tail."
        },
        {
          "name": "Spear.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft. or range 20 ft./60 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14).",
          "content": " Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/173/1000/1000/636252761197608364.jpeg",
      "id": "4PSdUrAxG5IqDVXMb81S3",
      "ability_scores": {
        "STR": "18",
        "DEX": "14",
        "CON": "15",
        "INT": "11",
        "WIS": "10",
        "CHA": "12"
      }
    },
    {
      "name": "Satyr",
      "meta": "Medium fey, chaotic neutral",
      "armor_class": "14 (Leather Armor)",
      "hit_points": "31 (7d8)",
      "speed": "40 ft. ",
      "skills": "Perception +2, Performance +6, Stealth +5",
      "senses": "Passive Perception 12",
      "languages": "Common, Elvish, Sylvan",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Magic Resistance.",
          "content": "The satyr has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Ram.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (2d4 + 1) bludgeoning damage."
        },
        {
          "name": "Shortsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) piercing damage."
        },
        {
          "name": "Shortbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+5 to hit, range 80/320 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/169/1000/1000/636252760706340605.jpeg",
      "id": "A7ma954IJjhqARgIkO12K",
      "ability_scores": {
        "STR": "12",
        "DEX": "16",
        "CON": "11",
        "INT": "12",
        "WIS": "10",
        "CHA": "14"
      }
    },
    {
      "name": "Scorpion",
      "meta": "Tiny beast, unaligned",
      "armor_class": "11 (Natural Armor)",
      "hit_points": "1 (1d4 - 1)",
      "speed": "10 ft. ",
      "senses": "Blindsight 10 ft.,  Passive Perception 9",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "actions": [
        {
          "name": "Sting.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one creature.",
          "attack_dmg": "1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "UIK2oy5H-8C0_aCEKvK68",
      "ability_scores": {
        "STR": "2",
        "DEX": "11",
        "CON": "8",
        "INT": "1",
        "WIS": "8",
        "CHA": "2"
      }
    },
    {
      "name": "Scout",
      "meta": "Medium humanoid, any",
      "armor_class": "13 (Leather Armor)",
      "hit_points": "16 (3d8 + 3)",
      "speed": "30 ft. ",
      "skills": "Nature +4, Perception +5, Stealth +6, Survival +5",
      "senses": "Passive Perception 15",
      "languages": "Any one language (usually Common)",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Sight.",
          "content": "The scout has advantage on Wisdom (Perception) checks that rely on hearing or sight."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The scout makes two melee attacks or two ranged attacks."
        },
        {
          "name": "Shortsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Longbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, ranged 150/600 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/163/1000/1000/636252759915100020.jpeg",
      "id": "nWNhrk8GqGy-jrImDajkT",
      "ability_scores": {
        "STR": "11",
        "DEX": "14",
        "CON": "12",
        "INT": "11",
        "WIS": "13",
        "CHA": "11"
      }
    },
    {
      "name": "Sea Hag",
      "meta": "Medium fey, chaotic evil",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "52 (7d8 + 21)",
      "speed": "30 ft., swim 40 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 11",
      "languages": "Aquan, Common, Giant",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The hag can breathe air and water."
        },
        {
          "name": "Horrific Appearance.",
          "content": "Any humanoid that starts its turn within 30 feet of the hag and can see the hag's true form must make a DC 11 Wisdom saving throw. On a failed save, the creature is frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the hag is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the hag's Horrific Appearance for the next 24 hours.\n\nUnless the target is surprised or the revelation of the hag's true form is sudden, the target can avert its eyes and avoid making the initial saving throw. Until the start of its next turn, a creature that averts its eyes has disadvantage on attack rolls against the hag."
        }
      ],
      "actions": [
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) slashing damage."
        },
        {
          "name": "Death Glare.",
          "content": "The hag targets one frightened creature she can see within 30 feet of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points."
        },
        {
          "name": "Illusory Appearance.",
          "content": "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies.\n\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/159/1000/1000/636252759356069260.jpeg",
      "id": "Nb9qMCPN5dcWOKO8QkyeE",
      "ability_scores": {
        "STR": "16",
        "DEX": "13",
        "CON": "16",
        "INT": "12",
        "WIS": "12",
        "CHA": "13"
      }
    },
    {
      "name": "Sea Horse",
      "meta": "Tiny beast, unaligned",
      "armor_class": "11 ",
      "hit_points": "1 (1d4 - 1)",
      "speed": "0 ft., swim 20 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Water Breathing.",
          "content": "The sea horse can breathe only underwater."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "-OJfmQnpH_i5dFJUnHiPG",
      "ability_scores": {
        "STR": "1",
        "DEX": "12",
        "CON": "8",
        "INT": "1",
        "WIS": "10",
        "CHA": "2"
      }
    },
    {
      "name": "Shadow",
      "meta": "Medium undead, chaotic evil",
      "armor_class": "12 ",
      "hit_points": "16 (3d8 + 3)",
      "speed": "40 ft. ",
      "skills": "Stealth +4",
      "damage_vulnerabilities": "Radiant",
      "damage_resistances": "Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Necrotic, Poison",
      "condition_immunities": "Exhaustion, Frightened, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Amorphous.",
          "content": "The shadow can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          "name": "Shadow Stealth.",
          "content": "While in dim light or darkness, the shadow can take the Hide action as a bonus action."
        },
        {
          "name": "Sunlight Weakness.",
          "content": "While in sunlight, the shadow has disadvantage on attack rolls, ability checks, and saving throws."
        }
      ],
      "actions": [
        {
          "name": "Strength Drain.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4.",
          "content": " The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.\n\nIf a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/155/315/315/636252758977032019.jpeg",
      "id": "-bBDRyoxb2uOheX_5K56x",
      "ability_scores": {
        "STR": "6",
        "DEX": "14",
        "CON": "13",
        "INT": "6",
        "WIS": "10",
        "CHA": "8"
      }
    },
    {
      "name": "Shambling Mound",
      "meta": "Large plant, unaligned",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "136 (16d10 + 48)",
      "speed": "20 ft., swim 20 ft. ",
      "skills": "Stealth +2",
      "damage_resistances": "Cold, Fire",
      "damage_immunities": "Lightning",
      "condition_immunities": "Blinded, Deafened, Exhaustion",
      "senses": "Blindsight 60 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Lightning Absorption.",
          "content": "Whenever the shambling mound is subjected to lightning damage, it takes no damage and regains a number of hit points equal to the lightning damage dealt."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) bludgeoning damage."
        },
        {
          "name": "Engulf.",
          "content": "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/563/315/315/636376346968079714.jpeg",
      "id": "Yb4MRwZ84utC3zikFbf5E",
      "ability_scores": {
        "STR": "18",
        "DEX": "8",
        "CON": "16",
        "INT": "5",
        "WIS": "10",
        "CHA": "5"
      }
    },
    {
      "name": "Shield Guardian",
      "meta": "Large construct, unaligned",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "142 (15d10 + 60)",
      "speed": "30 ft. ",
      "damage_immunities": "Poison",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Understands commands given in any language but can't speak",
      "challenge": "7 (2,900 XP)",
      "traits": [
        {
          "name": "Bound.",
          "content": "The shield guardian is magically bound to an amulet. As long as the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred to the guardian."
        },
        {
          "name": "Regeneration.",
          "content": "The shield guardian regains 10 hit points at the start of its turn if it has at least 1 hit point."
        },
        {
          "name": "Spell Storing.",
          "content": "A spellcaster who wears the shield guardian's amulet can cause the guardian to store one spell of 4th level or lower. To do so, the wearer must cast the spell on the guardian. The spell has no effect but is stored within the guardian. When commanded to do so by the wearer or when a situation arises that was predefined by the spellcaster, the guardian casts the stored spell with any parameters set by the original caster, requiring no components. When the spell is cast or a new spell is stored, any previously stored spell is lost."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The guardian makes two fist attacks."
        },
        {
          "name": "Fist.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) bludgeoning damage."
        }
      ],
      "reactions": [
        {
          "name": "Shield.",
          "content": "When a creature makes an attack against the wearer of the guardian's amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian is within 5 feet of the wearer."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/145/315/315/636252758362792494.jpeg",
      "id": "doICDRPkyf229oqaUbF-Y",
      "ability_scores": {
        "STR": "18",
        "DEX": "8",
        "CON": "18",
        "INT": "7",
        "WIS": "10",
        "CHA": "3"
      }
    },
    {
      "name": "Shrieker",
      "meta": "Medium plant, unaligned",
      "armor_class": "5 ",
      "hit_points": "13 (3d8)",
      "speed": "0 ft. ",
      "condition_immunities": "Blinded, Deafened, Frightened",
      "senses": "Blindsight 30 ft.,  Passive Perception 6",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "False Appearance.",
          "content": "While the shrieker remains motionless, it is indistinguishable from an ordinary fungus."
        }
      ],
      "reactions": [
        {
          "name": "Shriek.",
          "content": "When bright light or a creature is within 30 feet of the shrieker, it emits a shriek audible within 300 feet of it. The shrieker continues to shriek until the disturbance moves out of range and for 1d4 of the shrieker's turns afterward."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/571/1000/1000/636376357634308010.jpeg",
      "id": "MmfvQj7o83Sf91ztqkT2i",
      "ability_scores": {
        "STR": "1",
        "DEX": "1",
        "CON": "10",
        "INT": "1",
        "WIS": "3",
        "CHA": "1"
      }
    },
    {
      "name": "Silver Dragon Wyrmling",
      "meta": "Medium dragon, lawful good",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "45 (6d8 + 18)",
      "speed": "30 ft., fly 60 ft. ",
      "saving_throws": "DEX +2, CON +5, WIS +2, CHA +4",
      "skills": "Perception +4, Stealth +2",
      "damage_immunities": "Cold",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Draconic",
      "challenge": "2 (450 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "9 (1d10 + 4) piercing damage."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Cold Breath.",
          "content": "The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Paralyzing Breath.",
          "content": "The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/143/315/315/636252757538355953.jpeg",
      "id": "nUxq31YBBiwY-VMBG3RJ8",
      "ability_scores": {
        "STR": "19",
        "DEX": "10",
        "CON": "17",
        "INT": "12",
        "WIS": "11",
        "CHA": "15"
      }
    },
    {
      "name": "Skeleton",
      "meta": "Medium undead, lawful evil",
      "armor_class": "13 (Armor Scraps)",
      "hit_points": "13 (2d8 + 4)",
      "speed": "30 ft. ",
      "damage_vulnerabilities": "Bludgeoning",
      "damage_immunities": "Poison",
      "condition_immunities": "Exhaustion, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 9",
      "languages": "Understands all languages it knew in life but can't speak",
      "challenge": "1/4 (50 XP)",
      "actions": [
        {
          "name": "Shortsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Shortbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 80/320 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/472/315/315/636376294573239565.jpeg",
      "id": "Mt3YJqn3lh24eRqBG5UE0",
      "ability_scores": {
        "STR": "10",
        "DEX": "14",
        "CON": "15",
        "INT": "6",
        "WIS": "8",
        "CHA": "5"
      }
    },
    {
      "name": "Solar",
      "meta": "Large celestial, lawful good",
      "armor_class": "21 (Natural Armor)",
      "hit_points": "243 (18d10 + 144)",
      "speed": "50 ft., fly 150 ft. ",
      "saving_throws": "INT +14, WIS +14, CHA +17",
      "skills": "Perception +14",
      "damage_resistances": "Radiant; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Necrotic, Poison",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Poisoned",
      "senses": "Truesight 120 ft.,  Passive Perception 24",
      "languages": "All, Telepathy 120 ft.",
      "challenge": "21 (33,000 XP)",
      "traits": [
        {
          "name": "Angelic Weapons.",
          "content": "The solar's weapon attacks are magical. When the solar hits with any weapon, the weapon deals an extra 6d8 radiant damage (included in the attack)."
        },
        {
          "name": "Divine Awareness.",
          "content": "The solar knows if it hears a lie."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The solar's spellcasting ability is Charisma (spell save DC 25). It can innately cast the following spells, requiring no material components:\n\nAt will: detect evil and good, invisibility (self only)\n\n3/day each: blade barrier, dispel evil and good, resurrection\n\n1/day each: commune, control weather"
        },
        {
          "name": "Magic Resistance.",
          "content": "The solar has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The solar makes two greatsword attacks."
        },
        {
          "name": "Greatsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+15 to hit, reach 5 ft., one target.",
          "attack_dmg": "22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage."
        },
        {
          "name": "Slaying Longbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+13 to hit, range 150/600 ft., one target.",
          "attack_dmg": "15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage.",
          "content": " If the target is a creature that has 100 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die."
        },
        {
          "name": "Flying Sword.",
          "content": "The solar releases its greatsword to hover magically in an unoccupied space within 5 feet of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 feet and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."
        },
        {
          "name": "Healing Touch (4/Day).",
          "content": "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."
        }
      ],
      "legendary_actions": [
        {
          "content": "The solar can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The solar regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Teleport.",
          "content": "The solar magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
        },
        {
          "name": "Searing Burst (Costs 2 Actions).",
          "content": "The solar emits magical, divine energy. Each creature of its choice in a 10-foot radius must make a DC 23 Dexterity saving throw, taking 14 (4d6) fire damage plus 14 (4d6) radiant damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Blinding Gaze (Costs 3 Actions).",
          "content": "The solar targets one creature it can see within 30 feet of it. If the target can see it, the target must succeed on a DC 15 Constitution saving throw or be blinded until magic such as the lesser restoration spell removes the blindness."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/121/315/315/636252748079664097.jpeg",
      "id": "CB55zVIXwZsA9UYoewmeS",
      "ability_scores": {
        "STR": "26",
        "DEX": "22",
        "CON": "26",
        "INT": "25",
        "WIS": "25",
        "CHA": "30"
      }
    },
    {
      "name": "Spectator",
      "meta": "Medium aberration, lawful neutral",
      "armor_class": "14 Natural",
      "hit_points": "39 (6d8 + 12)",
      "speed": "0 ft., fly 30 ft. (hover) ",
      "skills": "Perception +6",
      "condition_immunities": "Prone",
      "senses": "Darkvision 120 ft.,  Passive Perception 16",
      "languages": "Deep Speech, Telepathy 120 ft., Undercommon",
      "challenge": "3 (700 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+1 to hit, reach 5 ft., one target.",
          "attack_dmg": "2 (1d6 \u2212 1) piercing damage."
        },
        {
          "name": "Eye Rays.",
          "content": "The spectator shoots up to two of the following magical eye rays at one or two creatures it can see within 90 feet of it. It can use each ray only once on a turn."
        },
        {
          "subtitle": "Confusion Ray.",
          "content": "The target must succeed on a DC 13 Wisdom saving throw, or it can\u2019t take reactions until the end of its next turn. On its turn, the target can\u2019t move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If the target can\u2019t attack, it does nothing on its turn."
        },
        {
          "subtitle": "Paralyzing Ray.",
          "content": "The target must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        },
        {
          "subtitle": "Fear Ray.",
          "content": "The target must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the spectator is visible to the target, ending the effect on itself on a success."
        },
        {
          "subtitle": "Wounding Ray.",
          "content": "The target must make a DC 13 Constitution saving throw, taking 16 (3d10) necrotic damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Create Food and Water.",
          "content": "The spectator magically creates enough food and water to sustain itself for 24 hours."
        }
      ],
      "reactions": [
        {
          "name": "Spell Reflection.",
          "content": "If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30 feet of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/14/485/315/315/636364324602733616.png",
      "id": "RIMFx3xdNIlb_643jKsdP",
      "ability_scores": {
        "STR": "8",
        "DEX": "14",
        "CON": "14",
        "INT": "13",
        "WIS": "14",
        "CHA": "11"
      }
    },
    {
      "name": "Specter",
      "meta": "Medium undead, chaotic evil",
      "armor_class": "12 ",
      "hit_points": "22 (5d8)",
      "speed": "0 ft., fly 50 ft. (hover) ",
      "damage_resistances": "Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Necrotic, Poison",
      "condition_immunities": "Charmed, Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Understands all languages it knew in life but can't speak",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Incorporeal Movement.",
          "content": "The specter can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
        },
        {
          "name": "Sunlight Sensitivity.",
          "content": "While in sunlight, the specter has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Life Drain.",
          "type": "Melee Spell Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "10 (3d6) necrotic damage.",
          "content": " The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/119/1000/1000/636252747399435720.jpeg",
      "id": "41CcKecxwIPFQSOQ-mGEY",
      "ability_scores": {
        "STR": "1",
        "DEX": "14",
        "CON": "11",
        "INT": "10",
        "WIS": "10",
        "CHA": "11"
      }
    },
    {
      "name": "Spider",
      "meta": "Tiny beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "1 (1d4 - 1)",
      "speed": "20 ft., climb 20 ft. ",
      "skills": "Stealth +4",
      "senses": "Darkvision 30 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Spider Climb.",
          "content": "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          "name": "Web Sense.",
          "content": "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
        },
        {
          "name": "Web Walker.",
          "content": "The spider ignores movement restrictions caused by webbing."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/575/315/315/636376359864842950.jpeg",
      "id": "11_LjS27N9peg-vRe0fD5",
      "ability_scores": {
        "STR": "2",
        "DEX": "14",
        "CON": "8",
        "INT": "1",
        "WIS": "10",
        "CHA": "2"
      }
    },
    {
      "name": "Spirit Naga",
      "meta": "Large monstrosity, chaotic evil",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "75 (10d10 + 20)",
      "speed": "40 ft. ",
      "saving_throws": "DEX +6, CON +5, WIS +5, CHA +6",
      "damage_immunities": "Poison",
      "condition_immunities": "Charmed, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 12",
      "languages": "Abyssal, Common",
      "challenge": "8 (3,900 XP)",
      "traits": [
        {
          "name": "Rejuvenation.",
          "content": "If it dies, the naga returns to life in 1d6 days and regains all its hit points. Only a wish spell can prevent this trait from functioning."
        },
        {
          "name": "Spellcasting.",
          "content": "The naga is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks), and it needs only verbal components to cast its spells. It has the following wizard spells prepared:\n\nCantrips (at will): mage hand, minor illusion, ray of frost\n\n1st level (4 slots): charm person, detect magic, sleep\n\n2nd level (3 slots): detect thoughts, hold person\n\n3rd level (3 slots): lightning bolt, water breathing\n\n4th level (3 slots): blight, dimension door\n\n5th level (2 slots): dominate person"
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one creature.",
          "attack_dmg": "7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/117/315/315/636252746851035686.jpeg",
      "id": "T3zLPosFslP4wIR3SUsFj",
      "ability_scores": {
        "STR": "18",
        "DEX": "17",
        "CON": "14",
        "INT": "16",
        "WIS": "15",
        "CHA": "16"
      }
    },
    {
      "name": "Sprite",
      "meta": "Tiny fey, neutral good",
      "armor_class": "15 (Leather Armor)",
      "hit_points": "2 (1d4)",
      "speed": "10 ft., fly 40 ft. ",
      "skills": "Perception +3, Stealth +8",
      "senses": "Passive Perception 13",
      "languages": "Common, Elvish, Sylvan",
      "challenge": "1/4 (50 XP)",
      "actions": [
        {
          "name": "Longsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 slashing damage."
        },
        {
          "name": "Shortbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+6 to hit, range 40/160 ft., one target.",
          "attack_dmg": "1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute.",
          "content": " If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake."
        },
        {
          "name": "Heart Sight.",
          "content": "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw."
        },
        {
          "name": "Invisibility.",
          "content": "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/115/315/315/636252746444973630.jpeg",
      "id": "p_dXg9niUGW8Y0iQ3vQU6",
      "ability_scores": {
        "STR": "3",
        "DEX": "18",
        "CON": "10",
        "INT": "14",
        "WIS": "13",
        "CHA": "11"
      }
    },
    {
      "name": "Spy",
      "meta": "Medium humanoid, any",
      "armor_class": "12 ",
      "hit_points": "27 (6d8)",
      "speed": "30 ft. ",
      "skills": "Deception +5, Insight +4, Investigation +5, Perception +6, Persuasion +5, Sleight of Hand +4, Stealth +4",
      "senses": "Passive Perception 16",
      "languages": "Any two languages",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Cunning Action.",
          "content": "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action."
        },
        {
          "name": "Sneak Attack (1/Turn).",
          "content": "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The spy makes two melee attacks."
        },
        {
          "name": "Shortsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Hand Crossbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 30/120 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "ZNf1cplEZqz0v9qNJVLQ5",
      "ability_scores": {
        "STR": "10",
        "DEX": "15",
        "CON": "10",
        "INT": "12",
        "WIS": "14",
        "CHA": "16"
      }
    },
    {
      "name": "Steam Mephit",
      "meta": "Small elemental, neutral evil",
      "armor_class": "10 ",
      "hit_points": "21 (6d6)",
      "speed": "30 ft., fly 30 ft. ",
      "damage_immunities": "Fire, Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Aquan, Ignan",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Death Burst.",
          "content": "When the mephit dies, it explodes in a cloud of steam. Each creature within 5 feet of the mephit must succeed on a DC 10 Dexterity saving throw or take 4 (1d8) fire damage."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "(1/Day). The mephit can innately cast blur, requiring no material components. Its innate spellcasting ability is Charisma."
        }
      ],
      "actions": [
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one creature.",
          "attack_dmg": "2 (1d4) slashing damage plus 2 (1d4) fire damage."
        },
        {
          "name": "Steam Breath (Recharge 6).",
          "content": "The mephit exhales a 15- foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/113/315/315/636252745841820724.jpeg",
      "id": "T4ysBPAhN3ZpWOubd7RoJ",
      "ability_scores": {
        "STR": "5",
        "DEX": "11",
        "CON": "10",
        "INT": "11",
        "WIS": "10",
        "CHA": "12"
      }
    },
    {
      "name": "Stirge",
      "meta": "Tiny beast, unaligned",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "2 (1d4)",
      "speed": "10 ft., fly 40 ft. ",
      "senses": "Darkvision 60 ft.,  Passive Perception 9",
      "languages": "--",
      "challenge": "1/8 (25 XP)",
      "actions": [
        {
          "name": "Blood Drain.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one creature.",
          "attack_dmg": "5 (1d4 + 3) piercing damage, and the stirge attaches to the target.",
          "content": " While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\n\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/111/1000/1000/636252745395103202.jpeg",
      "id": "5ydOApZIx0T3WZ3WIxxOh",
      "ability_scores": {
        "STR": "4",
        "DEX": "16",
        "CON": "11",
        "INT": "2",
        "WIS": "8",
        "CHA": "6"
      }
    },
    {
      "name": "Stone Giant",
      "meta": "Huge giant, neutral",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "126 (11d12 + 55)",
      "speed": "40 ft. ",
      "saving_throws": "DEX +5, CON +8, WIS +4",
      "skills": "Athletics +12, Perception +4",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Giant",
      "challenge": "7 (2,900 XP)",
      "traits": [
        {
          "name": "Stone Camouflage.",
          "content": "The giant has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The giant makes two greatclub attacks."
        },
        {
          "name": "Greatclub.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 15 ft., one target.",
          "attack_dmg": "19 (3d8 + 6) bludgeoning damage."
        },
        {
          "name": "Rock.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+9 to hit, range 60/240 ft., one target.",
          "attack_dmg": "28 (4d10 + 6) bludgeoning damage.",
          "content": " If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone."
        }
      ],
      "reactions": [
        {
          "name": "Rock Catching.",
          "content": "If a rock or similar object is hurled at the giant, the giant can, with a successful DC 10 Dexterity saving throw, catch the missile and take no bludgeoning damage from it."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/109/315/315/636252744518731463.jpeg",
      "id": "41uSyhWGrxGbATbUYg36-",
      "ability_scores": {
        "STR": "23",
        "DEX": "15",
        "CON": "20",
        "INT": "10",
        "WIS": "12",
        "CHA": "9"
      }
    },
    {
      "name": "Stone Golem",
      "meta": "Large construct, unaligned",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "178 (17d10 + 85)",
      "speed": "30 ft. ",
      "damage_immunities": "Poison, Psychic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Adamantine",
      "condition_immunities": "Charmed, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 10",
      "languages": "Understands the languages of its creator but can't speak",
      "challenge": "10 (5,900 XP)",
      "traits": [
        {
          "name": "Immutable Form.",
          "content": "The golem is immune to any spell or effect that would alter its form."
        },
        {
          "name": "Magic Resistance.",
          "content": "The golem has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Magic Weapons.",
          "content": "The golem's weapon attacks are magical."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The golem makes two slam attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one target.",
          "attack_dmg": "19 (3d8 + 6) bludgeoning damage."
        },
        {
          "name": "Slow (Recharge 5\u20136).",
          "content": "The golem targets one or more creatures it can see within 10 feet of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/107/315/315/636252743780112834.jpeg",
      "id": "G1mkWo2GDL-yn5cYCwYc4",
      "ability_scores": {
        "STR": "22",
        "DEX": "9",
        "CON": "20",
        "INT": "3",
        "WIS": "11",
        "CHA": "1"
      }
    },
    {
      "name": "Storm Giant",
      "meta": "Huge giant, chaotic good",
      "armor_class": "16 (Scale Mail)",
      "hit_points": "230 (20d12 + 100)",
      "speed": "50 ft., swim 50 ft. ",
      "saving_throws": "STR +14, CON +10, WIS +9, CHA +9",
      "skills": "Arcana +8, Athletics +14, History +8, Perception +9",
      "damage_resistances": "Cold",
      "damage_immunities": "Lightning, Thunder",
      "senses": "Passive Perception 19",
      "languages": "Common, Giant",
      "challenge": "13 (10,000 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The giant can breathe air and water."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The giant's innate spellcasting ability is Charisma (spell save DC 17). It can innately cast the following spells, requiring no material components:\n\nAt will: detect magic, feather fall, levitate, light\n\n3/day each: control weather, water breathing"
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The giant makes two greatsword attacks."
        },
        {
          "name": "Greatsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+14 to hit, reach 10 ft., one target.",
          "attack_dmg": "30 (6d6 + 9) slashing damage."
        },
        {
          "name": "Rock.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+14 to hit, range 60/240 ft., one target.",
          "attack_dmg": "35 (4d12 + 9) bludgeoning damage."
        },
        {
          "name": "Lightning Strike (Recharge 5\u20136).",
          "content": "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/105/315/315/636252743254029469.jpeg",
      "id": "s1nqr2JCgNDyZFK-O3WEM",
      "ability_scores": {
        "STR": "29",
        "DEX": "14",
        "CON": "20",
        "INT": "16",
        "WIS": "18",
        "CHA": "18"
      }
    },
    {
      "name": "Succubus/Incubus",
      "meta": "Medium fiend, neutral evil",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "66 (12d8 + 12)",
      "speed": "30 ft., fly 60 ft. ",
      "skills": "Deception +9, Insight +5, Perception +5, Persuasion +9, Stealth +7",
      "damage_resistances": "Cold, Fire, Lightning, Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "senses": "Darkvision 60 ft.,  Passive Perception 15",
      "languages": "Abyssal, Common, Infernal, Telepathy 60 ft.",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Telepathic Bond.",
          "content": "The fiend ignores the range restriction on its telepathy when communicating with a creature it has charmed. The two don't even need to be on the same plane of existence."
        },
        {
          "name": "Shapechanger.",
          "content": "The fiend can use its action to polymorph into a Small or Medium humanoid, or back into its true form. Without wings, the fiend loses its flying speed. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        }
      ],
      "actions": [
        {
          "name": "Claw (Fiend Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) slashing damage."
        },
        {
          "name": "Charm.",
          "content": "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.\n\nThe fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends."
        },
        {
          "name": "Draining Kiss.",
          "content": "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
        },
        {
          "name": "Etherealness.",
          "content": "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/103/315/315/636252742573312994.jpeg",
      "id": "qbhvJlbZHJDvqVetqFRWa",
      "ability_scores": {
        "STR": "8",
        "DEX": "17",
        "CON": "13",
        "INT": "15",
        "WIS": "12",
        "CHA": "20"
      }
    },
    {
      "name": "Swarm of Bats",
      "meta": "Medium beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "22 (5d8)",
      "speed": "0 ft., fly 30 ft. ",
      "damage_resistances": "Bludgeoning, Piercing, Slashing",
      "condition_immunities": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
      "senses": "Blindsight 60 ft.,  Passive Perception 11",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Echolocation.",
          "content": "The swarm can\u2019t use its blindsight while deafened."
        },
        {
          "name": "Keen Hearing.",
          "content": "The swarm has advantage on Wisdom (Perception) checks that rely on hearing."
        },
        {
          "name": "Swarm.",
          "content": "The swarm can occupy another creature\u2019s space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can\u2019t regain hit points or gain temporary hit points."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 0 ft., one creature in the swarm's space.",
          "attack_dmg": "5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/906/315/315/636334289313689439.jpeg",
      "id": "_hkTznJaJP4QXQNgOlBev",
      "ability_scores": {
        "STR": "5",
        "DEX": "15",
        "CON": "10",
        "INT": "2",
        "WIS": "12",
        "CHA": "4"
      }
    },
    {
      "name": "Swarm of Insects",
      "meta": "Medium beast, unaligned",
      "armor_class": "12 (Natural Armor)",
      "hit_points": "22 (5d8)",
      "speed": "20 ft., climb 20 ft. ",
      "damage_resistances": "Bludgeoning, Piercing, Slashing",
      "condition_immunities": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
      "senses": "Blindsight 10 ft.,  Passive Perception 8",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Swarm.",
          "content": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 0 ft., one target in the swarm's space.",
          "attack_dmg": "10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "8qq9KugHkNpBIZlRAP1KS",
      "ability_scores": {
        "STR": "3",
        "DEX": "13",
        "CON": "10",
        "INT": "1",
        "WIS": "7",
        "CHA": "1"
      }
    },
    {
      "name": "Swarm of Poisonous Snakes",
      "meta": "Medium beast, unaligned",
      "armor_class": "14 ",
      "hit_points": "36 (8d8)",
      "speed": "30 ft., swim 30 ft. ",
      "damage_resistances": "Bludgeoning, Piercing, Slashing",
      "condition_immunities": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
      "senses": "Blindsight 10 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Swarm.",
          "content": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain hit points or gain temporary hit points."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 0 ft., one creature in the swarm's space.",
          "attack_dmg": "7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer.",
          "content": " The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "s_fggejXF9rZbyi-ljmhB",
      "ability_scores": {
        "STR": "8",
        "DEX": "18",
        "CON": "11",
        "INT": "1",
        "WIS": "10",
        "CHA": "3"
      }
    },
    {
      "name": "Swarm of Quippers",
      "meta": "Medium beast, unaligned",
      "armor_class": "13 ",
      "hit_points": "28 (8d8 - 8)",
      "speed": "0 ft., swim 40 ft. ",
      "damage_resistances": "Bludgeoning, Piercing, Slashing",
      "condition_immunities": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
      "senses": "Darkvision 60 ft.,  Passive Perception 8",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Blood Frenzy.",
          "content": "The swarm has advantage on melee attack rolls against any creature that doesn't have all its hit points."
        },
        {
          "name": "Swarm.",
          "content": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny quipper. The swarm can't regain hit points or gain temporary hit points."
        },
        {
          "name": "Water Breathing.",
          "content": "The swarm can breathe only underwater."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 0 ft., one creature in the swarm's space.",
          "attack_dmg": "14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/18/276/315/315/636379781035768521.jpeg",
      "id": "WvIM8Varf7rfimvoK-1z5",
      "ability_scores": {
        "STR": "13",
        "DEX": "16",
        "CON": "9",
        "INT": "1",
        "WIS": "7",
        "CHA": "2"
      }
    },
    {
      "name": "Swarm of Rats",
      "meta": "Medium beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "24 (7d8 - 7)",
      "speed": "30 ft. ",
      "damage_resistances": "Bludgeoning, Piercing, Slashing",
      "condition_immunities": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
      "senses": "Darkvision 30 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The swarm has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          "name": "Swarm.",
          "content": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain hit points or gain temporary hit points."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 0 ft., one target in the swarm's space.",
          "attack_dmg": "7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/908/315/315/636334289541603972.jpeg",
      "id": "FrZjSAFWX9TrEyHv_b00R",
      "ability_scores": {
        "STR": "9",
        "DEX": "11",
        "CON": "9",
        "INT": "2",
        "WIS": "10",
        "CHA": "3"
      }
    },
    {
      "name": "Swarm of Ravens",
      "meta": "Medium beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "24 (7d8 - 7)",
      "speed": "10 ft., fly 50 ft. ",
      "skills": "Perception +5",
      "damage_resistances": "Bludgeoning, Piercing, Slashing",
      "condition_immunities": "Charmed, Frightened, Grappled, Paralyzed, Petrified, Prone, Restrained, Stunned",
      "senses": "Passive Perception 15",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Swarm.",
          "content": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain hit points or gain temporary hit points."
        }
      ],
      "actions": [
        {
          "name": "Beaks.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target in the swarm's space.",
          "attack_dmg": "7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/555/315/315/636376341743427326.jpeg",
      "id": "rYlgjCmI1QXB4jYnujqWh",
      "ability_scores": {
        "STR": "6",
        "DEX": "14",
        "CON": "8",
        "INT": "3",
        "WIS": "12",
        "CHA": "6"
      }
    },
    {
      "name": "Tarrasque",
      "meta": "Gargantuan monstrosity, unaligned",
      "armor_class": "25 (Natural Armor)",
      "hit_points": "676 (33d20 + 330)",
      "speed": "40 ft. ",
      "saving_throws": "INT +5, WIS +9, CHA +9",
      "damage_immunities": "Fire, Poison; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "condition_immunities": "Charmed, Frightened, Paralyzed, Poisoned",
      "senses": "Blindsight 120 ft.,  Passive Perception 10",
      "languages": "--",
      "challenge": "30 (155,000 XP)",
      "traits": [
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the tarrasque fails a saving throw, it can choose to succeed instead."
        },
        {
          "name": "Magic Resistance.",
          "content": "The tarrasque has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Reflective Carapace.",
          "content": "Any time the tarrasque is targeted by a magic missile spell, a line spell, or a spell that requires a ranged attack roll, roll a d6. On a 1 to 5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected, and the effect is reflected back at the caster as though it originated from the tarrasque, turning the caster into the target."
        },
        {
          "name": "Siege Monster.",
          "content": "The tarrasque deals double damage to objects and structures."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+19 to hit, reach 10 ft., one target.",
          "attack_dmg": "36 (4d12 + 10) piercing damage.",
          "content": " If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+19 to hit, reach 15ft., one target.",
          "attack_dmg": "28 (4d8 + 10) slashing damage."
        },
        {
          "name": "Horns.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+19 to hit, reach 10ft., one target.",
          "attack_dmg": "32 (4d10 + 10) piercing damage."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+19 to hit, reach 20ft., one target.",
          "attack_dmg": "24 (4d6 + 10) bludgeoning damage.",
          "content": " If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone."
        },
        {
          "name": "Frightful Presence.",
          "content": "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours."
        },
        {
          "name": "Swallow.",
          "content": "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.\n\nIf the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone."
        }
      ],
      "legendary_actions": [
        {
          "content": "The tarrasque can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The tarrasque regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Attack.",
          "content": "The tarrasque makes one claw attack or tail attack."
        },
        {
          "name": "Move.",
          "content": "The tarrasque moves up to half its speed."
        },
        {
          "name": "Chomp (Costs 2 Actions).",
          "content": "The tarrasque makes one bite attack or uses its Swallow."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/101/1000/1000/636252741877524077.jpeg",
      "id": "bYH1UlazdzvuigSgcjFpK",
      "ability_scores": {
        "STR": "30",
        "DEX": "11",
        "CON": "30",
        "INT": "3",
        "WIS": "11",
        "CHA": "11"
      }
    },
    {
      "name": "Thug",
      "meta": "Medium humanoid, any",
      "armor_class": "11 (Leather Armor)",
      "hit_points": "32 (5d8 + 10)",
      "speed": "30 ft. ",
      "skills": "Intimidation +2",
      "senses": "Passive Perception 10",
      "languages": "Any one language (usually Common)",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Pack Tactics.",
          "content": "The thug has advantage on an attack roll against a creature if at least one of the thug's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The thug makes two melee attacks."
        },
        {
          "name": "Mace.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "5 (1d6 + 2) bludgeoning damage."
        },
        {
          "name": "Heavy Crossbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+2 to hit, range 100/400 ft., one target.",
          "attack_dmg": "5 (1d10) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/99/1000/1000/636252741335519081.jpeg",
      "id": "Wi_j45kLJoZEJGVjTJJFu",
      "ability_scores": {
        "STR": "15",
        "DEX": "11",
        "CON": "14",
        "INT": "10",
        "WIS": "10",
        "CHA": "11"
      }
    },
    {
      "name": "Tiger",
      "meta": "Large beast, unaligned",
      "armor_class": "12 ",
      "hit_points": "37 (5d10 + 10)",
      "speed": "40 ft. ",
      "skills": "Perception +3, Stealth +6",
      "senses": "Darkvision 60 ft.,  Passive Perception 13",
      "languages": "--",
      "challenge": "1 (200 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          "name": "Pounce.",
          "content": "If the tiger moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d10 + 3) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "anA20L-VoCa7xWnVSfRRm",
      "ability_scores": {
        "STR": "17",
        "DEX": "15",
        "CON": "14",
        "INT": "3",
        "WIS": "12",
        "CHA": "8"
      }
    },
    {
      "name": "Treant",
      "meta": "Huge plant, chaotic good",
      "armor_class": "16 (Natural Armor)",
      "hit_points": "138 (12d12 + 60)",
      "speed": "30 ft. ",
      "damage_vulnerabilities": "Fire",
      "damage_resistances": "Bludgeoning, Piercing",
      "senses": "Passive Perception 13",
      "languages": "Common, Druidic, Elvish, Sylvan",
      "challenge": "9 (5,000 XP)",
      "traits": [
        {
          "name": "False Appearance.",
          "content": "While the treant remains motionless, it is indistinguishable from a normal tree."
        },
        {
          "name": "Siege Monster.",
          "content": "The treant deals double damage to objects and structures."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The treant makes two slam attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one target.",
          "attack_dmg": "16 (3d6 + 6) bludgeoning damage."
        },
        {
          "name": "Rock.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+10 to hit, range 60/180 ft., one target.",
          "attack_dmg": "28 (4d10 + 6) bludgeoning damage."
        },
        {
          "name": "Animate Trees (1/Day).",
          "content": "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/97/315/315/636252740537990664.jpeg",
      "id": "XzfTcaVP_JEZ65XI8ix-4",
      "ability_scores": {
        "STR": "23",
        "DEX": "8",
        "CON": "21",
        "INT": "12",
        "WIS": "16",
        "CHA": "12"
      }
    },
    {
      "name": "Tribal Warrior",
      "meta": "Medium humanoid, any",
      "armor_class": "12 (Hide Armor)",
      "hit_points": "11 (2d8 + 2)",
      "speed": "30 ft. ",
      "senses": "Passive Perception 10",
      "languages": "Any one language",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "Pack Tactics.",
          "content": "The warrior has advantage on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Spear.",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft. or range 20/60 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "XXtP2zEz0el7nAHJI75xP",
      "ability_scores": {
        "STR": "13",
        "DEX": "11",
        "CON": "12",
        "INT": "8",
        "WIS": "11",
        "CHA": "8"
      }
    },
    {
      "name": "Triceratops",
      "meta": "Huge beast, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "95 (10d12 + 30)",
      "speed": "50 ft. ",
      "senses": "Passive Perception 10",
      "languages": "--",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Trampling Charge.",
          "content": "If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Gore.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 5 ft., one target.",
          "attack_dmg": "24 (4d8 + 6) piercing damage."
        },
        {
          "name": "Stomp.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 5 ft., one prone creature.",
          "attack_dmg": "22 (3d10 + 6) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "_Kn8TDduV6TKabZ6dM7sL",
      "ability_scores": {
        "STR": "22",
        "DEX": "9",
        "CON": "17",
        "INT": "2",
        "WIS": "11",
        "CHA": "5"
      }
    },
    {
      "name": "Troll",
      "meta": "Large giant, chaotic evil",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "84 (8d10 + 40)",
      "speed": "30 ft. ",
      "skills": "Perception +2",
      "senses": "Darkvision 60 ft.,  Passive Perception 12",
      "languages": "Giant",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Keen Smell.",
          "content": "The troll has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {
          "name": "Regeneration.",
          "content": "The troll regains 10 hit points at the start of its turn. If the troll takes acid or fire damage, this trait doesn't function at the start of the troll's next turn. The troll dies only if it starts its turn with 0 hit points and doesn't regenerate."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The troll makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d6 + 4) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/95/315/315/636252739682234623.jpeg",
      "id": "_5aGi2N1SthV3HSSaRHTM",
      "ability_scores": {
        "STR": "18",
        "DEX": "13",
        "CON": "20",
        "INT": "7",
        "WIS": "9",
        "CHA": "7"
      }
    },
    {
      "name": "Twig Blight",
      "meta": "Small plant, neutral evil",
      "armor_class": "13 Natural Armor",
      "hit_points": "4 (1d6 + 1)",
      "speed": "20 ft. ",
      "skills": "Stealth +3",
      "damage_vulnerabilities": "Fire",
      "condition_immunities": "Blinded, Deafened",
      "senses": "Blindsight 60 ft. (blind beyond this radius),  Passive Perception 9",
      "languages": "Common understands but can\u00e2\u0080\u0099t speak",
      "challenge": "1/8 (25 XP)",
      "traits": [
        {
          "name": "False Appearance.",
          "content": "While the blight remains motionless, it is indistinguishable from a dead shrub."
        }
      ],
      "actions": [
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "3 (1d4 + 1) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/464/1000/1000/636376286997771487.png",
      "id": "enkd0eRMPuOdHNhLE8zV7",
      "ability_scores": {
        "STR": "6",
        "DEX": "13",
        "CON": "12",
        "INT": "4",
        "WIS": "8",
        "CHA": "3"
      }
    },
    {
      "name": "Tyrannosaurus Rex",
      "meta": "Huge beast, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "136 (13d12 + 52)",
      "speed": "50 ft. ",
      "skills": "Perception +4",
      "senses": "Passive Perception 14",
      "languages": "--",
      "challenge": "8 (3,900 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "33 (4d12 + 7) piercing damage.",
          "content": " If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target."
        },
        {
          "name": "Tail.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "20 (3d8 + 7) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/594/1000/1000/636376369004412963.jpeg",
      "id": "IlF0JMVzNAH2ujwAFjepu",
      "ability_scores": {
        "STR": "25",
        "DEX": "10",
        "CON": "19",
        "INT": "2",
        "WIS": "12",
        "CHA": "9"
      }
    },
    {
      "name": "Unicorn",
      "meta": "Large celestial, lawful good",
      "armor_class": "12 ",
      "hit_points": "67 (9d10 + 18)",
      "speed": "50 ft. ",
      "damage_immunities": "Poison",
      "condition_immunities": "Charmed, Paralyzed, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 13",
      "languages": "Celestial, Elvish, Sylvan, Telepathy 60 ft.",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Charge.",
          "content": "If the unicorn moves at least 20 feet straight toward a target and then hits it with a horn attack on the same turn, the target takes an extra 9 (2d8) piercing damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
        },
        {
          "name": "Innate Spellcasting.",
          "content": "The unicorn's innate spellcasting ability is Charisma (spell save DC 14). The unicorn can innately cast the following spells, requiring no components:\n\nAt will: detect evil and good, druidcraft, pass without trace\n\n1/day each: calm emotions, dispel evil and good, entangle"
        },
        {
          "name": "Magic Resistance.",
          "content": "The unicorn has advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Magic Weapons.",
          "content": "The unicorn's weapon attacks are magical."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The unicorn makes two attacks: one with its hooves and one with its horn."
        },
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) bludgeoning damage."
        },
        {
          "name": "Horn.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d8 + 4) piercing damage."
        },
        {
          "name": "Healing Touch (3/Day).",
          "content": "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target."
        },
        {
          "name": "Teleport (1/Day).",
          "content": "The unicorn magically teleports itself and up to three willing creatures it can see within 5 feet of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away."
        }
      ],
      "legendary_actions": [
        {
          "content": "The unicorn can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The unicorn regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Hooves.",
          "content": "The unicorn makes one attack with its hooves."
        },
        {
          "name": "Shimmering Shield (Costs 2 Actions).",
          "content": "The unicorn creates a shimmering, magical field around itself or another creature it can see within 60 feet of it. The target gains a +2 bonus to AC until the end of the unicorn's next turn."
        },
        {
          "name": "Heal Self (Costs 3 Actions).",
          "content": "The unicorn magically regains 11 (2d8 + 2) hit points."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/93/1000/1000/636252739248798123.jpeg",
      "id": "gCd6G1EGanmP4zAC0u97v",
      "ability_scores": {
        "STR": "18",
        "DEX": "14",
        "CON": "15",
        "INT": "11",
        "WIS": "17",
        "CHA": "16"
      }
    },
    {
      "name": "Vampire",
      "meta": "Medium undead, lawful evil",
      "armor_class": "16 (Natural Armor)",
      "hit_points": "144 (17d8 + 68)",
      "speed": "30 ft. ",
      "saving_throws": "DEX +9, WIS +7, CHA +9",
      "skills": "Perception +7, Stealth +9",
      "damage_resistances": "Necrotic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "senses": "Darkvision 120 ft.,  Passive Perception 17",
      "languages": "the languages it knew in life",
      "challenge": "13 (10,000 XP)",
      "traits": [
        {
          "name": "Shapechanger.",
          "content": "If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.\n\nWhile in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.\n\nWhile in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can\u2019t pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight.\n\nWhile it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
        },
        {
          "name": "Legendary Resistance (3/Day).",
          "content": "If the vampire fails a saving throw, it can choose to succeed instead."
        },
        {
          "name": "Misty Escape.",
          "content": "When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling unconscious, provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.\n\nWhile it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then paralyzed until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point."
        },
        {
          "name": "Regeneration.",
          "content": "The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
        },
        {
          "name": "Spider Climb.",
          "content": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          "name": "Vampire Weaknesses.",
          "content": "The vampire has the following flaws:"
        },
        {
          "subtitle": "Forbiddance.",
          "content": "The vampire can't enter a residence without an invitation from one of the occupants."
        },
        {
          "subtitle": "Harmed by Running Water.",
          "content": "The vampire takes 20 acid damage if it ends its turn in running water."
        },
        {
          "subtitle": "Stake to the Heart.",
          "content": "If a piercing weapon made of wood is driven into the vampire's heart while the vampire is incapacitated in its resting place, the vampire is paralyzed until the stake is removed."
        },
        {
          "subtitle": "Sunlight Hypersensitivity.",
          "content": "The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
        }
      ],
      "actions": [
        {
          "name": "Multiattack. (Vampire Form Only).",
          "content": "The vampire makes two attacks, only one of which can be a bite attack."
        },
        {
          "name": "Unarmed Strike (Vampire Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 5 ft., one creature.",
          "attack_dmg": "8 (1d8 + 4) bludgeoning damage.",
          "content": " Instead of dealing damage, the vampire can grapple the target (escape DC 18)."
        },
        {
          "name": "Bite. (Bat or Vampire Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained.",
          "attack_dmg": "7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage.",
          "content": " The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control."
        },
        {
          "name": "Charm.",
          "content": "The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack.\n\nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
        },
        {
          "name": "Children of the Night (1/Day).",
          "content": "The vampire magically calls 2d4 swarms of bats or rats (swarm of bats, swarm of rats), provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves (wolf) instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
        }
      ],
      "legendary_actions": [
        {
          "content": "The vampire can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The vampire regains spent legendary actions at the start of its turn."
        },
        {
          "name": "Move.",
          "content": "The vampire moves up to its speed without provoking opportunity attacks."
        },
        {
          "name": "Unarmed Strike.",
          "content": "The vampire makes one unarmed strike."
        },
        {
          "name": "Bite.",
          "content": "(Costs 2 Actions). The vampire makes one bite attack."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/91/1000/1000/636252738665379794.jpeg",
      "id": "JhAAmkvqwbBI093vN_Rxe",
      "ability_scores": {
        "STR": "18",
        "DEX": "18",
        "CON": "18",
        "INT": "17",
        "WIS": "15",
        "CHA": "18"
      }
    },
    {
      "name": "Vampire Spawn",
      "meta": "Medium undead, neutral evil",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "82 (11d8 + 33)",
      "speed": "30 ft. ",
      "saving_throws": "DEX +6, WIS +3",
      "skills": "Perception +3, Stealth +6",
      "damage_resistances": "Necrotic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "senses": "Darkvision 60 ft.,  Passive Perception 13",
      "languages": "the languages it knew in life",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Regeneration.",
          "content": "The vampire regains 10 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn."
        },
        {
          "name": "Spider Climb.",
          "content": "The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
        },
        {
          "name": "Vampire Weaknesses.",
          "content": "The vampire has the following flaws:"
        },
        {
          "subtitle": "Forbiddance.",
          "content": "The vampire can't enter a residence without an invitation from one of the occupants."
        },
        {
          "subtitle": "Harmed by Running Water.",
          "content": "The vampire takes 20 acid damage when it ends its turn in running water."
        },
        {
          "subtitle": "Stake to the Heart.",
          "content": "The vampire is destroyed if a piercing weapon made of wood is driven into its heart while it is incapacitated in its resting place."
        },
        {
          "subtitle": "Sunlight Hypersensitivity.",
          "content": "The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The vampire makes two attacks, only one of which can be a bite attack."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one creature.",
          "attack_dmg": "8 (2d4 + 3) slashing damage.",
          "content": " Instead of dealing damage, the vampire can grapple the target (escape DC 13)."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained.",
          "attack_dmg": "6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage.",
          "content": " The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/89/1000/1000/636252738148839638.jpeg",
      "id": "CxI2Vy6l5nqxVCusk9tEE",
      "ability_scores": {
        "STR": "16",
        "DEX": "16",
        "CON": "16",
        "INT": "11",
        "WIS": "10",
        "CHA": "12"
      }
    },
    {
      "name": "Veteran",
      "meta": "Medium humanoid, any",
      "armor_class": "17 (Splint)",
      "hit_points": "58 (9d8 + 18)",
      "speed": "30 ft. ",
      "skills": "Athletics +5, Perception +2",
      "senses": "Passive Perception 12",
      "languages": "Any one language (usually Common)",
      "challenge": "3 (700 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
        },
        {
          "name": "Longsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
        },
        {
          "name": "Shortsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) piercing damage."
        },
        {
          "name": "Heavy Crossbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+3 to hit, range 100/400 ft., one target.",
          "attack_dmg": "6 (1d10 + 1) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
      "id": "DwS9lrItrFsPSfpDexmFH",
      "ability_scores": {
        "STR": "16",
        "DEX": "13",
        "CON": "14",
        "INT": "10",
        "WIS": "11",
        "CHA": "10"
      }
    },
    {
      "name": "Violet Fungus",
      "meta": "Medium plant, unaligned",
      "armor_class": "5 ",
      "hit_points": "18 (4d8)",
      "speed": "5 ft. ",
      "condition_immunities": "Blinded, Deafened, Frightened",
      "senses": "Blindsight 30 ft.,  Passive Perception 6",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "False Appearance.",
          "content": "While the violet fungus remains motionless, it is indistinguishable from an ordinary fungus."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The fungus makes 1d4 Rotting Touch attacks."
        },
        {
          "name": "Rotting Touch.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 10 ft., one creature.",
          "attack_dmg": "4 (1d8) necrotic damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/573/315/315/636376357964412799.jpeg",
      "id": "xdsZPhil4rVQUGbbauO_g",
      "ability_scores": {
        "STR": "3",
        "DEX": "1",
        "CON": "10",
        "INT": "1",
        "WIS": "3",
        "CHA": "1"
      }
    },
    {
      "name": "Vrock",
      "meta": "Large fiend, chaotic evil",
      "armor_class": "15 (Natural Armor)",
      "hit_points": "104 (11d10 + 44)",
      "speed": "40 ft., fly 60 ft. ",
      "saving_throws": "DEX +5, WIS +4, CHA +2",
      "damage_resistances": "Cold, Fire, Lightning; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 120 ft.,  Passive Perception 11",
      "languages": "Abyssal, Telepathy 120 ft.",
      "challenge": "6 (2,300 XP)",
      "traits": [
        {
          "name": "Magic Resistance.",
          "content": "The vrock has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The vrock makes two attacks: one with its beak and one with its talons."
        },
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) piercing damage."
        },
        {
          "name": "Talons.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "14 (2d10 + 3) slashing damage."
        },
        {
          "name": "Spores (Recharge 6).",
          "content": "A 15\u00ad-foot\u00ad-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it."
        },
        {
          "name": "Stunning Screech (1/Day).",
          "content": "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/87/315/315/636252737538172594.jpeg",
      "id": "pcJadFLJTNNN9gBc8MUQv",
      "ability_scores": {
        "STR": "17",
        "DEX": "15",
        "CON": "18",
        "INT": "8",
        "WIS": "13",
        "CHA": "8"
      }
    },
    {
      "name": "Vulture",
      "meta": "Medium beast, unaligned",
      "armor_class": "10 ",
      "hit_points": "5 (1d8 + 1)",
      "speed": "10 ft., fly 50 ft. ",
      "skills": "Perception +3",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Keen Sight and Smell.",
          "content": "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
        },
        {
          "name": "Pack Tactics.",
          "content": "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Beak.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+2 to hit, reach 5 ft., one target.",
          "attack_dmg": "2 (1d4) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "z_ChuuR8VWEYPE7xqKhH0",
      "ability_scores": {
        "STR": "7",
        "DEX": "10",
        "CON": "13",
        "INT": "2",
        "WIS": "12",
        "CHA": "4"
      }
    },
    {
      "name": "Warhorse",
      "meta": "Large beast, unaligned",
      "armor_class": "11 ",
      "hit_points": "19 (3d10 + 3)",
      "speed": "60 ft. ",
      "senses": "Passive Perception 11",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Trampling Charge.",
          "content": "If the horse moves at least 20 feet straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "fPmt5_A5vWot7_beZ5Vbb",
      "ability_scores": {
        "STR": "18",
        "DEX": "12",
        "CON": "13",
        "INT": "2",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Warhorse Skeleton",
      "meta": "Large undead, lawful evil",
      "armor_class": "13 (Barding Scraps)",
      "hit_points": "22 (3d10 + 6)",
      "speed": "60 ft. ",
      "damage_vulnerabilities": "Bludgeoning",
      "damage_immunities": "Poison",
      "condition_immunities": "Exhaustion, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 9",
      "languages": "--",
      "challenge": "1/2 (100 XP)",
      "actions": [
        {
          "name": "Hooves.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/660/undead.jpg",
      "id": "1vheYBAc9K8fZ4GkJor9M",
      "ability_scores": {
        "STR": "18",
        "DEX": "12",
        "CON": "15",
        "INT": "2",
        "WIS": "8",
        "CHA": "5"
      }
    },
    {
      "name": "Water Elemental",
      "meta": "Large elemental, neutral",
      "armor_class": "14 (Natural Armor)",
      "hit_points": "114 (12d10 + 48)",
      "speed": "30 ft., swim 90 ft. ",
      "damage_resistances": "Acid; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Poison",
      "condition_immunities": "Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained, Unconscious",
      "senses": "Darkvision 60 ft.,  Passive Perception 10",
      "languages": "Aquan",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Water Form.",
          "content": "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
        },
        {
          "name": "Freeze.",
          "content": "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The elemental makes two slam attacks."
        },
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) bludgeoning damage."
        },
        {
          "name": "Whelm (Recharge 4\u20136).",
          "content": "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.\n\nThe elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/84/315/315/636252736680781387.jpeg",
      "id": "O6yfuWhdczWDgm73kgyAf",
      "ability_scores": {
        "STR": "18",
        "DEX": "14",
        "CON": "18",
        "INT": "5",
        "WIS": "10",
        "CHA": "8"
      }
    },
    {
      "name": "Weasel",
      "meta": "Tiny beast, unaligned",
      "armor_class": "13 ",
      "hit_points": "1 (1d4 - 1)",
      "speed": "30 ft. ",
      "skills": "Perception +3, Stealth +5",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "0 (10 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Smell.",
          "content": "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "1 piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
      "id": "Q1OB4RP77ctoGb1CIASzq",
      "ability_scores": {
        "STR": "3",
        "DEX": "16",
        "CON": "8",
        "INT": "2",
        "WIS": "12",
        "CHA": "3"
      }
    },
    {
      "name": "Werebear",
      "meta": "Medium humanoid, neutral good",
      "armor_class": "10 In Humanoid Form, 11 In Bear And Hybrid Form",
      "hit_points": "135 (18d8 + 54)",
      "speed": "30 ft., 40 ft., climb 30 ft. in bear or hybrid form ",
      "skills": "Perception +7",
      "damage_immunities": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "senses": "Passive Perception 17",
      "languages": "Common (can't speak in bear form)",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Shapechanger.",
          "content": "The werebear can use its action to polymorph into a Large bear-humanoid hybrid or into a Large bear, or back into its true form, which is humanoid. Its statistics, other than its size and AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          "name": "Keen Smell.",
          "content": "The werebear has advantage on Wisdom (Perception) checks that rely on smell."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
        },
        {
          "name": "Bite (Bear or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "15 (2d10 + 4) piercing damage.",
          "content": " If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy."
        },
        {
          "name": "Claw (Bear or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) slashing damage."
        },
        {
          "name": "Greataxe (Humanoid or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (1d12 + 4) slashing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/82/1000/1000/636252736005297867.jpeg",
      "id": "_q_myRbkKKhHbA3KcbMMv",
      "ability_scores": {
        "STR": "19",
        "DEX": "10",
        "CON": "17",
        "INT": "11",
        "WIS": "12",
        "CHA": "12"
      }
    },
    {
      "name": "Wereboar",
      "meta": "Medium humanoid, neutral evil",
      "armor_class": "10 In Humanoid Form, 11 In Boar Or Hybrid Form",
      "hit_points": "78 (12d8 + 24)",
      "speed": "30 ft., 40 ft. in boar form ",
      "skills": "Perception +2",
      "damage_immunities": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "senses": "Passive Perception 12",
      "languages": "Common (can't speak in boar form)",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Shapechanger.",
          "content": "The wereboar can use its action to polymorph into a boar-humanoid hybrid or into a boar, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          "name": "Charge (Boar or Hybrid Form Only).",
          "content": "If the wereboar moves at least 15 feet straight toward a target and then hits it with its tusks on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
        },
        {
          "name": "Relentless (Recharges after a Short or Long Rest).",
          "content": "If the wereboar takes 14 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead."
        }
      ],
      "actions": [
        {
          "name": "Multiattack (Humanoid or Hybrid Form Only).",
          "content": "The wereboar makes two attacks, only one of which can be with its tusks."
        },
        {
          "name": "Maul (Humanoid or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) bludgeoning damage."
        },
        {
          "name": "Tusks (Boar or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) slashing damage.",
          "content": " If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/80/315/315/636252735506840152.jpeg",
      "id": "508Z_KT92llbXb_-aCNOf",
      "ability_scores": {
        "STR": "17",
        "DEX": "10",
        "CON": "15",
        "INT": "10",
        "WIS": "11",
        "CHA": "8"
      }
    },
    {
      "name": "Wererat",
      "meta": "Medium humanoid, lawful evil",
      "armor_class": "12 ",
      "hit_points": "33 (6d8 + 6)",
      "speed": "30 ft. ",
      "skills": "Perception +2, Stealth +4",
      "damage_immunities": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "senses": "Darkvision 60 ft.,  Passive Perception 12",
      "languages": "Common (can't speak in rat form)",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Shapechanger.",
          "content": "The wererat can use its action to polymorph into a rat-humanoid hybrid or into a giant rat, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          "name": "Keen Smell.",
          "content": "The wererat has advantage on Wisdom (Perception) checks that rely on smell."
        }
      ],
      "actions": [
        {
          "name": "Multiattack (Humanoid or Hybrid Form Only).",
          "content": "The wererat makes two attacks, only one of which can be a bite."
        },
        {
          "name": "Bite (Rat or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d4 + 2) piercing damage.",
          "content": " If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy."
        },
        {
          "name": "Shortsword (Humanoid or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        },
        {
          "name": "Hand Crossbow (Humanoid or Hybrid Form Only).",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 30/120 ft., one target.",
          "attack_dmg": "5 (1d6 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/78/1000/1000/636252735121410517.jpeg",
      "id": "Nb-jBh6MZFyET1DYU7z0_",
      "ability_scores": {
        "STR": "10",
        "DEX": "15",
        "CON": "12",
        "INT": "11",
        "WIS": "10",
        "CHA": "8"
      }
    },
    {
      "name": "Weretiger",
      "meta": "Medium humanoid, neutral",
      "armor_class": "12 ",
      "hit_points": "120 (16d8 + 48)",
      "speed": "30 ft., 40 ft. in tiger form ",
      "skills": "Perception +5, Stealth +4",
      "damage_immunities": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "senses": "Darkvision 60 ft.,  Passive Perception 15",
      "languages": "Common (can't speak in tiger form)",
      "challenge": "4 (1,100 XP)",
      "traits": [
        {
          "name": "Shapechanger.",
          "content": "The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          "name": "Keen Hearing and Smell.",
          "content": "The weretiger has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          "name": "Pounce (Tiger or Hybrid Form Only).",
          "content": "If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the weretiger can make one bite attack against it as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Multiattack (Humanoid or Hybrid Form Only).",
          "content": "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
        },
        {
          "name": "Bite (Tiger or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "8 (1d10 + 3) piercing damage.",
          "content": " If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy."
        },
        {
          "name": "Claw (Tiger or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d8 + 3) slashing damage."
        },
        {
          "name": "Scimitar (Humanoid or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) slashing damage."
        },
        {
          "name": "Longbow (Humanoid or Hybrid Form Only).",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 150/600 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/76/1000/1000/636252734783831163.jpeg",
      "id": "gDmwMYW-w8IUYVdOPBl4T",
      "ability_scores": {
        "STR": "17",
        "DEX": "15",
        "CON": "16",
        "INT": "10",
        "WIS": "13",
        "CHA": "11"
      }
    },
    {
      "name": "Werewolf",
      "meta": "Medium humanoid, chaotic evil",
      "armor_class": "11 In Humanoid Form, 12 In Wolf Or Hybrid Form",
      "hit_points": "58 (9d8 + 18)",
      "speed": "30 ft., 40 ft. in wolf form ",
      "skills": "Perception +4, Stealth +3",
      "damage_immunities": "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "senses": "Passive Perception 14",
      "languages": "Common (can't speak in wolf form)",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Shapechanger.",
          "content": "The werewolf can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
        },
        {
          "name": "Keen Hearing and Smell.",
          "content": "The werewolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        }
      ],
      "actions": [
        {
          "name": "Multiattack. (Humanoid or Hybrid Form Only).",
          "content": "The werewolf makes two attacks: one with its bite and one with its claws or spear."
        },
        {
          "name": "Bite (Wolf or Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) piercing damage.",
          "content": " If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy."
        },
        {
          "name": "Claws. (Hybrid Form Only).",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "7 (2d4 + 2) slashing damage."
        },
        {
          "name": "Spear (Humanoid Form Only).",
          "type": "Melee or Ranged Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft. or range 20/60 ft., one creature.",
          "attack_dmg": "5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/74/1000/1000/636252734224239957.jpeg",
      "id": "WgkuRyyb_-XC3oMMh3Lcs",
      "ability_scores": {
        "STR": "15",
        "DEX": "13",
        "CON": "14",
        "INT": "10",
        "WIS": "11",
        "CHA": "10"
      }
    },
    {
      "name": "White Dragon Wyrmling",
      "meta": "Medium dragon, chaotic evil",
      "armor_class": "16 (Natural Armor)",
      "hit_points": "32 (5d8 + 10)",
      "speed": "30 ft., burrow 15 ft., fly 60 ft., swim 30 ft. ",
      "saving_throws": "DEX +2, CON +4, WIS +2, CHA +2",
      "skills": "Perception +4, Stealth +2",
      "damage_immunities": "Cold",
      "senses": "Blindsight 10 ft., Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Draconic",
      "challenge": "2 (450 XP)",
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage."
        },
        {
          "name": "Cold Breath (Recharge 5\u20136).",
          "content": "The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/415/1000/1000/636252789083357808.jpeg",
      "id": "zXD-c2QB9NOptnCBvUbhK",
      "ability_scores": {
        "STR": "14",
        "DEX": "10",
        "CON": "14",
        "INT": "5",
        "WIS": "10",
        "CHA": "11"
      }
    },
    {
      "name": "Wight",
      "meta": "Medium undead, neutral evil",
      "armor_class": "14 (Studded Leather)",
      "hit_points": "45 (6d8 + 18)",
      "speed": "30 ft. ",
      "skills": "Perception +3, Stealth +4",
      "damage_resistances": "Necrotic; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Poison",
      "condition_immunities": "Exhaustion, Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 13",
      "languages": "The languages it knew in life",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Sunlight Sensitivity.",
          "content": "While in sunlight, the wight has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack."
        },
        {
          "name": "Life Drain.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "5 (1d6 + 2) necrotic damage.",
          "content": " The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.\n\nA humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time."
        },
        {
          "name": "Longsword.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
        },
        {
          "name": "Longbow.",
          "type": "Ranged Weapon Attack:",
          "attack_info": "+4 to hit, range 150/600 ft., one target.",
          "attack_dmg": "6 (1d8 + 2) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/56/315/315/636252726349692861.jpeg",
      "id": "KUN2JcVlVVGZC7q1Edxc_",
      "ability_scores": {
        "STR": "15",
        "DEX": "14",
        "CON": "16",
        "INT": "10",
        "WIS": "13",
        "CHA": "15"
      }
    },
    {
      "name": "Will-o'-Wisp",
      "meta": "Tiny undead, chaotic evil",
      "armor_class": "19 ",
      "hit_points": "22 (9d4)",
      "speed": "0 ft., fly 50 ft. (hover) ",
      "damage_resistances": "Acid, Cold, Fire, Necrotic, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks",
      "damage_immunities": "Lightning, Poison",
      "condition_immunities": "Exhaustion, Grappled, Paralyzed, Poisoned, Prone, Restrained, Unconscious",
      "senses": "Darkvision 120 ft.,  Passive Perception 12",
      "languages": "The languages it knew in life",
      "challenge": "2 (450 XP)",
      "traits": [
        {
          "name": "Consume Life.",
          "content": "As a bonus action, the will-o'-wisp can target one creature it can see within 5 feet of it that has 0 hit points and is still alive. The target must succeed on a DC 10 Constitution saving throw against this magic or die. If the target dies, the will-o'-wisp regains 10 (3d6) hit points."
        },
        {
          "name": "Ephemeral.",
          "content": "The will-o'-wisp can't wear or carry anything."
        },
        {
          "name": "Incorporeal Movement.",
          "content": "The will-o'-wisp can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
        },
        {
          "name": "Variable Illumination.",
          "content": "The will-o'-wisp sheds bright light in a 5- to 20-foot radius and dim light for an additional number of feet equal to the chosen radius. The will-o'-wisp can alter the radius as a bonus action."
        }
      ],
      "actions": [
        {
          "name": "Shock.",
          "type": "Melee Spell Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one creature.",
          "attack_dmg": "9 (2d8) lightning damage."
        },
        {
          "name": "Invisibility.",
          "content": "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell)."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/585/315/315/636376363763232290.jpeg",
      "id": "73Zc4W_hf_P_-YmnO8Fdk",
      "ability_scores": {
        "STR": "1",
        "DEX": "28",
        "CON": "10",
        "INT": "13",
        "WIS": "14",
        "CHA": "11"
      }
    },
    {
      "name": "Winter Wolf",
      "meta": "Large monstrosity, neutral evil",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "75 (10d10 + 20)",
      "speed": "50 ft. ",
      "skills": "Perception +5, Stealth +3",
      "damage_immunities": "Cold",
      "senses": "Passive Perception 15",
      "languages": "Common, Giant, Winter Wolf",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Smell.",
          "content": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          "name": "Pack Tactics.",
          "content": "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
        },
        {
          "name": "Snow Camouflage.",
          "content": "The wolf has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) piercing damage.",
          "content": " If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
        },
        {
          "name": "Cold Breath (Recharge 5\u20136).",
          "content": "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/54/315/315/636252725270715296.jpeg",
      "id": "1igvW3slMI6csucNASbVh",
      "ability_scores": {
        "STR": "18",
        "DEX": "13",
        "CON": "14",
        "INT": "7",
        "WIS": "12",
        "CHA": "8"
      }
    },
    {
      "name": "Wolf",
      "meta": "Medium beast, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "11 (2d8 + 2)",
      "speed": "40 ft. ",
      "skills": "Perception +3, Stealth +4",
      "senses": "Passive Perception 13",
      "languages": "--",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Smell.",
          "content": "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        },
        {
          "name": "Pack Tactics.",
          "content": "The wolf has advantage on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally isn't incapacitated."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+4 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (2d4 + 2) piercing damage.",
          "content": " If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/482/1000/1000/636376300223855327.jpeg",
      "id": "MLXGQYi3OD3m7XxqNQ1Ib",
      "ability_scores": {
        "STR": "12",
        "DEX": "15",
        "CON": "12",
        "INT": "3",
        "WIS": "12",
        "CHA": "6"
      }
    },
    {
      "name": "Worg",
      "meta": "Large monstrosity, neutral evil",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "26 (4d10 + 4)",
      "speed": "50 ft. ",
      "skills": "Perception +4",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "Goblin, Worg",
      "challenge": "1/2 (100 XP)",
      "traits": [
        {
          "name": "Keen Hearing and Smell.",
          "content": "The worg has advantage on Wisdom (Perception) checks that rely on hearing or smell."
        }
      ],
      "actions": [
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+5 to hit, reach 5 ft., one target.",
          "attack_dmg": "10 (2d6 + 3) piercing damage.",
          "content": " If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/52/1000/1000/636252724662073178.jpeg",
      "id": "xIuhli8KvWB1-FAAbJk1J",
      "ability_scores": {
        "STR": "16",
        "DEX": "13",
        "CON": "13",
        "INT": "7",
        "WIS": "11",
        "CHA": "8"
      }
    },
    {
      "name": "Wraith",
      "meta": "Medium undead, neutral evil",
      "armor_class": "13 ",
      "hit_points": "67 (9d8 + 27)",
      "speed": "0 ft., fly 60 ft. (hover) ",
      "damage_resistances": "Acid, Cold, Fire, Lightning, Thunder; Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered",
      "damage_immunities": "Necrotic, Poison",
      "condition_immunities": "Charmed, Exhaustion, Grappled, Paralyzed, Petrified, Poisoned, Prone, Restrained",
      "senses": "Darkvision 60 ft.,  Passive Perception 12",
      "languages": "The languages it knew in life",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Incorporeal Movement.",
          "content": "The wraith can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
        },
        {
          "name": "Sunlight Sensitivity.",
          "content": "While in sunlight, the wraith has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
        }
      ],
      "actions": [
        {
          "name": "Life Drain.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one creature.",
          "attack_dmg": "21 (4d8 + 3) necrotic damage.",
          "content": " The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
        },
        {
          "name": "Create Specter.",
          "content": "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/50/1000/1000/636252724191790008.jpeg",
      "id": "vn03DbSjFwl7v6-N_qGym",
      "ability_scores": {
        "STR": "6",
        "DEX": "16",
        "CON": "16",
        "INT": "12",
        "WIS": "14",
        "CHA": "15"
      }
    },
    {
      "name": "Wyvern",
      "meta": "Large dragon, unaligned",
      "armor_class": "13 (Natural Armor)",
      "hit_points": "110 (13d10 + 39)",
      "speed": "20 ft., fly 80 ft. ",
      "skills": "Perception +4",
      "senses": "Darkvision 60 ft.,  Passive Perception 14",
      "languages": "--",
      "challenge": "6 (2,300 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one creature.",
          "attack_dmg": "11 (2d6 + 4) piercing damage."
        },
        {
          "name": "Claws.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d8 + 4) slashing damage."
        },
        {
          "name": "Stinger.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one creature.",
          "attack_dmg": "11 (2d6 + 4) piercing damage.",
          "content": " The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/48/315/315/636252723695596000.jpeg",
      "id": "-RCMVi9LKm4PsmnGEU7WY",
      "ability_scores": {
        "STR": "19",
        "DEX": "10",
        "CON": "16",
        "INT": "5",
        "WIS": "12",
        "CHA": "6"
      }
    },
    {
      "name": "Xorn",
      "meta": "Medium elemental, neutral",
      "armor_class": "19 (Natural Armor)",
      "hit_points": "73 (7d8 + 42)",
      "speed": "20 ft., burrow 20 ft. ",
      "skills": "Perception +6, Stealth +3",
      "damage_resistances": "Piercing and Slashing from Nonmagical Attacks that aren't Adamantine",
      "senses": "Darkvision 60 ft., Tremorsense 60 ft.,  Passive Perception 16",
      "languages": "Terran",
      "challenge": "5 (1,800 XP)",
      "traits": [
        {
          "name": "Earth Glide.",
          "content": "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through."
        },
        {
          "name": "Stone Camouflage.",
          "content": "The xorn has advantage on Dexterity (Stealth) checks made to hide in rocky terrain."
        },
        {
          "name": "Treasure Sense.",
          "content": "The xorn can pinpoint, by scent, the location of precious metals and stones, such as coins and gems, within 60 feet of it."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The xorn makes three claw attacks and one bite attack."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "6 (1d6 + 3) slashing damage."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (3d6 + 3) piercing damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/46/1000/1000/636252723241554579.jpeg",
      "id": "z1L6uxbwA0cFqAq3KGI9d",
      "ability_scores": {
        "STR": "17",
        "DEX": "10",
        "CON": "22",
        "INT": "11",
        "WIS": "10",
        "CHA": "11"
      }
    },
    {
      "name": "Yeti",
      "meta": "Large monstrosity, chaotic evil",
      "armor_class": "12 Natural Armor",
      "hit_points": "51 (6d10 + 18)",
      "speed": "40 ft., climb 40 ft. ",
      "skills": "Perception +3, Stealth +3",
      "damage_immunities": "Cold",
      "senses": "Darkvision 60 ft.,  Passive Perception 13",
      "languages": "Yeti",
      "challenge": "3 (700 XP)",
      "traits": [
        {
          "name": "Fear of Fire.",
          "content": "If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn."
        },
        {},
        {
          "name": "Keen Smell.",
          "content": "The yeti has advantage on Wisdom (Perception) checks that rely on smell."
        },
        {},
        {
          "name": "Snow Camouflage.",
          "content": "The yeti has advantage on Dexterity (Stealth) checks made to hide in snowy terrain."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The yeti can use its Chilling Gaze and makes two claw attacks."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+6 to hit, reach 5 ft., one target.",
          "attack_dmg": "7 (1d6 + 4) slashing damage plus 3 (1d6) cold damage."
        },
        {
          "name": "Chilling Gaze.",
          "content": "The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 13 Constitution saving throw against this magic or take 10 (3d6) cold damage and then be paralyzed for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target\u2019s saving throw is successful, or if the effect ends on it, the target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/8/662/1000/1000/636313413410825930.jpeg",
      "id": "FblGaa7TpQi47QBCVAVCN",
      "ability_scores": {
        "STR": "18",
        "DEX": "13",
        "CON": "16",
        "INT": "8",
        "WIS": "12",
        "CHA": "7"
      }
    },
    {
      "name": "Young Black Dragon",
      "meta": "Large dragon, chaotic evil",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "127 (15d10 + 45)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +5, CON +6, WIS +3, CHA +5",
      "skills": "Perception +6, Stealth +5",
      "damage_immunities": "Acid",
      "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 16",
      "languages": "Common, Draconic",
      "challenge": "7 (2,900 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage."
        },
        {
          "name": "Acid Breath (Recharge 5\u20136).",
          "content": "The dragon exhales acid in a 30\u00ad-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/70/1000/1000/636252732861675698.jpeg",
      "id": "b5h2mvS3nVINQFcjzdvau",
      "ability_scores": {
        "STR": "19",
        "DEX": "14",
        "CON": "17",
        "INT": "12",
        "WIS": "11",
        "CHA": "15"
      }
    },
    {
      "name": "Young Blue Dragon",
      "meta": "Large dragon, lawful evil",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "152 (16d10 + 64)",
      "speed": "40 ft., burrow 20 ft., fly 80 ft. ",
      "saving_throws": "DEX +4, CON +8, WIS +5, CHA +7",
      "skills": "Perception +9, Stealth +4",
      "damage_immunities": "Lightning",
      "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 19",
      "languages": "Common, Draconic",
      "challenge": "9 (5,000 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 10 ft., one target.",
          "attack_dmg": "16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+9 to hit, reach 5 ft., one target.",
          "attack_dmg": "12 (2d6 + 5) slashing damage."
        },
        {
          "name": "Lightning Breath (Recharge 5\u20136).",
          "content": "The dragon exhales lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/68/1000/1000/636252732434296782.jpeg",
      "id": "EI3QAJr53Pua0IqnuqcOk",
      "ability_scores": {
        "STR": "21",
        "DEX": "10",
        "CON": "19",
        "INT": "14",
        "WIS": "13",
        "CHA": "17"
      }
    },
    {
      "name": "Young Brass Dragon",
      "meta": "Large dragon, chaotic good",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "110 (13d10 + 39)",
      "speed": "40 ft., burrow 20 ft., fly 80 ft. ",
      "saving_throws": "DEX +3, CON +6, WIS +3, CHA +5",
      "skills": "Perception +6, Persuasion +5, Stealth +3",
      "damage_immunities": "Fire",
      "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 16",
      "languages": "Common, Draconic",
      "challenge": "6 (2,300 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d10 + 4) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Fire Breath.",
          "content": "The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Sleep Breath.",
          "content": "The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/66/1000/1000/636252731911060874.jpeg",
      "id": "Xy5GZKAiHk1mY6Rxj1C1X",
      "ability_scores": {
        "STR": "19",
        "DEX": "10",
        "CON": "17",
        "INT": "12",
        "WIS": "11",
        "CHA": "15"
      }
    },
    {
      "name": "Young Bronze Dragon",
      "meta": "Large dragon, lawful good",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "142 (15d10 + 60)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +3, CON +7, WIS +4, CHA +6",
      "skills": "Insight +4, Perception +7, Stealth +3",
      "damage_immunities": "Lightning",
      "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 17",
      "languages": "Common, Draconic",
      "challenge": "8 (3,900 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 10 ft., one target.",
          "attack_dmg": "16 (2d10 + 5) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+8 to hit, reach 5 ft., one target.",
          "attack_dmg": "12 (2d6 + 5) slashing damage."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Lightning Breath.",
          "content": "The dragon exhales lightning in a 60- foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Repulsion Breath.",
          "content": "The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/64/315/315/636252731269768088.jpeg",
      "id": "n9_QF-nMngPvpxO_Ikn_o",
      "ability_scores": {
        "STR": "21",
        "DEX": "10",
        "CON": "19",
        "INT": "14",
        "WIS": "13",
        "CHA": "17"
      }
    },
    {
      "name": "Young Copper Dragon",
      "meta": "Large dragon, chaotic good",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "119 (14d10 + 42)",
      "speed": "40 ft., climb 40 ft., fly 80 ft. ",
      "saving_throws": "DEX +4, CON +6, WIS +4, CHA +5",
      "skills": "Deception +5, Perception +7, Stealth +4",
      "damage_immunities": "Acid",
      "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 17",
      "languages": "Common, Draconic",
      "challenge": "7 (2,900 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d10 + 4) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Acid Breath.",
          "content": "The dragon exhales acid in an 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Slowing Breath.",
          "content": "The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/62/1000/1000/636252729761648292.jpeg",
      "id": "gPKU8fbGDMc1zlcXqKmaN",
      "ability_scores": {
        "STR": "19",
        "DEX": "12",
        "CON": "17",
        "INT": "16",
        "WIS": "13",
        "CHA": "15"
      }
    },
    {
      "name": "Young Gold Dragon",
      "meta": "Large dragon, lawful good",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "178 (17d10 + 85)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +6, CON +9, WIS +5, CHA +9",
      "skills": "Insight +5, Perception +9, Persuasion +9, Stealth +6",
      "damage_immunities": "Fire",
      "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 19",
      "languages": "Common, Draconic",
      "challenge": "10 (5,900 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d10 + 6) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d6 + 6) slashing damage."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Fire Breath.",
          "content": "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Weakening Breath.",
          "content": "The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/60/1000/1000/636252729283446963.jpeg",
      "id": "5hUo8FEhvmjrpTcY2ww5U",
      "ability_scores": {
        "STR": "23",
        "DEX": "14",
        "CON": "21",
        "INT": "16",
        "WIS": "13",
        "CHA": "20"
      }
    },
    {
      "name": "Young Green Dragon",
      "meta": "Large dragon, lawful evil",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "136 (16d10 + 48)",
      "speed": "40 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +4, CON +6, WIS +4, CHA +5",
      "skills": "Deception +5, Perception +7, Stealth +4",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 17",
      "languages": "Common, Draconic",
      "challenge": "8 (3,900 XP)",
      "traits": [
        {
          "name": "Amphibious.",
          "content": "The dragon can breathe air and water."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage."
        },
        {
          "name": "Poison Breath (Recharge 5\u20136).",
          "content": "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/58/315/315/636252728834677623.jpeg",
      "id": "r9FMZOGHpQYOR4va97aXp",
      "ability_scores": {
        "STR": "19",
        "DEX": "12",
        "CON": "17",
        "INT": "16",
        "WIS": "13",
        "CHA": "15"
      }
    },
    {
      "name": "Young Red Dragon",
      "meta": "Large dragon, chaotic evil",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "178 (17d10 + 85)",
      "speed": "40 ft., climb 40 ft., fly 80 ft. ",
      "saving_throws": "DEX +4, CON +9, WIS +4, CHA +8",
      "skills": "Perception +8, Stealth +4",
      "damage_immunities": "Fire",
      "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 18",
      "languages": "Common, Draconic",
      "challenge": "10 (5,900 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d6 + 6) slashing damage."
        },
        {
          "name": "Fire Breath (Recharge 5\u20136).",
          "content": "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/399/315/315/636252784386259001.jpeg",
      "id": "FM9XQj5VBR7UQwn1Ixsc8",
      "ability_scores": {
        "STR": "23",
        "DEX": "10",
        "CON": "21",
        "INT": "14",
        "WIS": "11",
        "CHA": "19"
      }
    },
    {
      "name": "Young Silver Dragon",
      "meta": "Large dragon, lawful good",
      "armor_class": "18 (Natural Armor)",
      "hit_points": "168 (16d10 + 80)",
      "speed": "40 ft., fly 80 ft. ",
      "saving_throws": "DEX +4, CON +9, WIS +4, CHA +8",
      "skills": "Arcana +6, History +6, Perception +8, Stealth +4",
      "damage_immunities": "Cold",
      "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 18",
      "languages": "Common, Draconic",
      "challenge": "9 (5,000 XP)",
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 10 ft., one target.",
          "attack_dmg": "17 (2d10 + 6) piercing damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+10 to hit, reach 5 ft., one target.",
          "attack_dmg": "13 (2d6 + 6) slashing damage."
        },
        {
          "name": "Breath Weapons (Recharge 5\u20136).",
          "content": "The dragon uses one of the following breath weapons."
        },
        {
          "name": "Cold Breath.",
          "content": "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Paralyzing Breath.",
          "content": "The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/401/315/315/636252784740667730.jpeg",
      "id": "kOmryWYkCxdUPz27skD1H",
      "ability_scores": {
        "STR": "23",
        "DEX": "10",
        "CON": "21",
        "INT": "14",
        "WIS": "11",
        "CHA": "19"
      }
    },
    {
      "name": "Young White Dragon",
      "meta": "Large dragon, chaotic evil",
      "armor_class": "17 (Natural Armor)",
      "hit_points": "133 (14d10 + 56)",
      "speed": "40 ft., burrow 20 ft., fly 80 ft., swim 40 ft. ",
      "saving_throws": "DEX +3, CON +7, WIS +3, CHA +4",
      "skills": "Perception +6, Stealth +3",
      "damage_immunities": "Cold",
      "senses": "Blindsight 30 ft., Darkvision 120 ft.,  Passive Perception 16",
      "languages": "Common, Draconic",
      "challenge": "6 (2,300 XP)",
      "traits": [
        {
          "name": "Ice Walk.",
          "content": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
        }
      ],
      "actions": [
        {
          "name": "Multiattack.",
          "content": "The dragon makes three attacks: one with its bite and two with its claws."
        },
        {
          "name": "Bite.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 10 ft., one target.",
          "attack_dmg": "15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage."
        },
        {
          "name": "Claw.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+7 to hit, reach 5 ft., one target.",
          "attack_dmg": "11 (2d6 + 4) slashing damage."
        },
        {
          "name": "Cold Breath (Recharge 5\u20136).",
          "content": "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/403/1000/1000/636252785358767533.jpeg",
      "id": "LbJmSkviWqBsD1aD3AeFD",
      "ability_scores": {
        "STR": "18",
        "DEX": "10",
        "CON": "18",
        "INT": "6",
        "WIS": "11",
        "CHA": "12"
      }
    },
    {
      "name": "Zombie",
      "meta": "Medium undead, neutral evil",
      "armor_class": "8 ",
      "hit_points": "22 (3d8 + 9)",
      "speed": "20 ft. ",
      "saving_throws": "WIS +0",
      "damage_immunities": "Poison",
      "condition_immunities": "Poisoned",
      "senses": "Darkvision 60 ft.,  Passive Perception 8",
      "languages": "Understands the languages of its creator but can't speak",
      "challenge": "1/4 (50 XP)",
      "traits": [
        {
          "name": "Undead Fortitude.",
          "content": "If damage reduces the zombie to 0 hit points, it must make a Constitution saving throw with a DC of 5 + the damage taken, unless the damage is radiant or from a critical hit. On a success, the zombie drops to 1 hit point instead."
        }
      ],
      "actions": [
        {
          "name": "Slam.",
          "type": "Melee Weapon Attack:",
          "attack_info": "+3 to hit, reach 5 ft., one target.",
          "attack_dmg": "4 (1d6 + 1) bludgeoning damage."
        }
      ],
      "img_url": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/71/1000/1000/636252733510786769.jpeg",
      "id": "OJwghGZy2u6JZHL3wzGcO",
      "ability_scores": {
        "STR": "13",
        "DEX": "6",
        "CON": "16",
        "INT": "3",
        "WIS": "6",
        "CHA": "5"
      }
    }
]