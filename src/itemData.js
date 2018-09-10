const itemData = {
type: "item",
version: "6.24.1",
basic: {
name: "",
rune: {
isrune: false,
tier: 1,
type: "red"
},
gold: {
base: 0,
total: 0,
sell: 0,
purchasable: false
},
group: "",
description: "",
colloq: ";",
plaintext: "",
consumed: false,
stacks: 1,
depth: 1,
consumeOnFull: false,
from: [ ],
into: [ ],
specialRecipe: 0,
inStore: true,
hideFromAll: false,
requiredChampion: "",
stats: {
FlatHPPoolMod: 0,
rFlatHPModPerLevel: 0,
FlatMPPoolMod: 0,
rFlatMPModPerLevel: 0,
PercentHPPoolMod: 0,
PercentMPPoolMod: 0,
FlatHPRegenMod: 0,
rFlatHPRegenModPerLevel: 0,
PercentHPRegenMod: 0,
FlatMPRegenMod: 0,
rFlatMPRegenModPerLevel: 0,
PercentMPRegenMod: 0,
FlatArmorMod: 0,
rFlatArmorModPerLevel: 0,
PercentArmorMod: 0,
rFlatArmorPenetrationMod: 0,
rFlatArmorPenetrationModPerLevel: 0,
rPercentArmorPenetrationMod: 0,
rPercentArmorPenetrationModPerLevel: 0,
FlatPhysicalDamageMod: 0,
rFlatPhysicalDamageModPerLevel: 0,
PercentPhysicalDamageMod: 0,
FlatMagicDamageMod: 0,
rFlatMagicDamageModPerLevel: 0,
PercentMagicDamageMod: 0,
FlatMovementSpeedMod: 0,
rFlatMovementSpeedModPerLevel: 0,
PercentMovementSpeedMod: 0,
rPercentMovementSpeedModPerLevel: 0,
FlatAttackSpeedMod: 0,
PercentAttackSpeedMod: 0,
rPercentAttackSpeedModPerLevel: 0,
rFlatDodgeMod: 0,
rFlatDodgeModPerLevel: 0,
PercentDodgeMod: 0,
FlatCritChanceMod: 0,
rFlatCritChanceModPerLevel: 0,
PercentCritChanceMod: 0,
FlatCritDamageMod: 0,
rFlatCritDamageModPerLevel: 0,
PercentCritDamageMod: 0,
FlatBlockMod: 0,
PercentBlockMod: 0,
FlatSpellBlockMod: 0,
rFlatSpellBlockModPerLevel: 0,
PercentSpellBlockMod: 0,
FlatEXPBonus: 0,
PercentEXPBonus: 0,
rPercentCooldownMod: 0,
rPercentCooldownModPerLevel: 0,
rFlatTimeDeadMod: 0,
rFlatTimeDeadModPerLevel: 0,
rPercentTimeDeadMod: 0,
rPercentTimeDeadModPerLevel: 0,
rFlatGoldPer10Mod: 0,
rFlatMagicPenetrationMod: 0,
rFlatMagicPenetrationModPerLevel: 0,
rPercentMagicPenetrationMod: 0,
rPercentMagicPenetrationModPerLevel: 0,
FlatEnergyRegenMod: 0,
rFlatEnergyRegenModPerLevel: 0,
FlatEnergyPoolMod: 0,
rFlatEnergyModPerLevel: 0,
PercentLifeStealMod: 0,
PercentSpellVampMod: 0
},
tags: [ ],
maps: {
1: true,
8: true,
10: true,
12: true
}
},
data: {
1001: {
name: "Boots of Speed",
description: "<groupLimit>Limited to 1.</groupLimit><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed",
colloq: ";",
plaintext: "Slightly increases Movement Speed",
into: [
"3006",
"3047",
"3020",
"3158",
"3111",
"3117",
"3009"
],
image: {
full: "1001.png",
sprite: "item0.png",
group: "item",
x: 0,
y: 0,
w: 48,
h: 48
},
gold: {
base: 300,
purchasable: true,
total: 300,
sell: 210
},
tags: [
"Boots"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMovementSpeedMod: 25
}
},
1004: {
name: "Faerie Charm",
description: "<stats><mana>+25% Base Mana Regen </mana></stats>",
colloq: ";",
plaintext: "Slightly increases Mana Regen",
into: [
"3028",
"3070",
"3073",
"3098",
"3096",
"3114"
],
image: {
full: "1004.png",
sprite: "item0.png",
group: "item",
x: 48,
y: 0,
w: 48,
h: 48
},
gold: {
base: 125,
purchasable: true,
total: 125,
sell: 88
},
tags: [
"ManaRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { }
},
1006: {
name: "Rejuvenation Bead",
description: "<stats>+50% Base Health Regen </stats>",
colloq: ";",
plaintext: "Slightly increases Health Regen",
into: [
"3077",
"2053",
"3097",
"3801"
],
image: {
full: "1006.png",
sprite: "item0.png",
group: "item",
x: 96,
y: 0,
w: 48,
h: 48
},
gold: {
base: 150,
purchasable: true,
total: 150,
sell: 105
},
tags: [
"HealthRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { }
},
1011: {
name: "Giant's Belt",
description: "<stats>+380 Health</stats>",
colloq: ";",
plaintext: "Greatly increases Health",
from: [
"1028"
],
into: [
"3083",
"3143",
"3116",
"3084",
"3022",
"3742"
],
image: {
full: "1011.png",
sprite: "item0.png",
group: "item",
x: 144,
y: 0,
w: 48,
h: 48
},
gold: {
base: 600,
purchasable: true,
total: 1000,
sell: 700
},
tags: [
"Health"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 380
},
depth: 2
},
1018: {
name: "Cloak of Agility",
description: "<stats>+20% Critical Strike Chance</stats>",
colloq: ";",
plaintext: "Increases critical strike chance",
into: [
"3031",
"3185",
"3508"
],
image: {
full: "1018.png",
sprite: "item0.png",
group: "item",
x: 192,
y: 0,
w: 48,
h: 48
},
gold: {
base: 800,
purchasable: true,
total: 800,
sell: 560
},
tags: [
"CriticalStrike"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatCritChanceMod: 0.2
}
},
1026: {
name: "Blasting Wand",
description: "<stats>+40 Ability Power</stats>",
colloq: ";",
plaintext: "Moderately increases Ability Power",
into: [
"3089",
"3135",
"3124",
"3029",
"3027",
"3100",
"3116",
"3151"
],
image: {
full: "1026.png",
sprite: "item0.png",
group: "item",
x: 240,
y: 0,
w: 48,
h: 48
},
gold: {
base: 850,
purchasable: true,
total: 850,
sell: 595
},
tags: [
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 40
}
},
1027: {
name: "Sapphire Crystal",
description: "<stats><mana>+250 Mana</mana></stats>",
colloq: ";blue",
plaintext: "Increases Mana",
into: [
"3057",
"3070",
"3010",
"3024",
"3073",
"3802"
],
image: {
full: "1027.png",
sprite: "item0.png",
group: "item",
x: 288,
y: 0,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 350,
sell: 245
},
tags: [
"Mana"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 250
}
},
1028: {
name: "Ruby Crystal",
description: "<stats>+150 Health</stats>",
colloq: ";red",
plaintext: "Increases Health",
into: [
"1011",
"3751",
"2049",
"2045",
"3010",
"3052",
"3044",
"3067",
"3211",
"3801",
"3116",
"3136",
"3748"
],
image: {
full: "1028.png",
sprite: "item0.png",
group: "item",
x: 336,
y: 0,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 400,
sell: 280
},
tags: [
"Health"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 150
}
},
1029: {
name: "Cloth Armor",
description: "<stats>+15 Armor</stats>",
colloq: ";",
plaintext: "Slightly increases Armor",
into: [
"3047",
"1031",
"3191",
"3024",
"3082",
"3075",
"2053",
"3105",
"3109"
],
image: {
full: "1029.png",
sprite: "item0.png",
group: "item",
x: 384,
y: 0,
w: 48,
h: 48
},
gold: {
base: 300,
purchasable: true,
total: 300,
sell: 210
},
tags: [
"Armor"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 15
}
},
1031: {
name: "Chain Vest",
description: "<stats>+40 Armor</stats>",
colloq: ";",
plaintext: "Greatly increases Armor",
from: [
"1029"
],
into: [
"3075",
"3068",
"3026",
"2053",
"3742"
],
image: {
full: "1031.png",
sprite: "item0.png",
group: "item",
x: 432,
y: 0,
w: 48,
h: 48
},
gold: {
base: 500,
purchasable: true,
total: 800,
sell: 560
},
tags: [
"Armor"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 40
},
depth: 2
},
1033: {
name: "Null-Magic Mantle",
description: "<stats>+25 Magic Resist</stats>",
colloq: ";",
plaintext: "Slightly increases Magic Resist",
into: [
"3111",
"3211",
"1057",
"3028",
"3140",
"3155",
"3105",
"3190",
"3814"
],
image: {
full: "1033.png",
sprite: "item0.png",
group: "item",
x: 0,
y: 48,
w: 48,
h: 48
},
gold: {
base: 450,
purchasable: true,
total: 450,
sell: 315
},
tags: [
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatSpellBlockMod: 25
}
},
1036: {
name: "Long Sword",
description: "<stats>+10 Attack Damage</stats>",
colloq: ";",
plaintext: "Slightly increases Attack Damage",
into: [
"1053",
"3133",
"3052",
"3123",
"3034",
"3044",
"3053",
"3072",
"3077",
"3122",
"3134",
"3144",
"3155",
"3252"
],
image: {
full: "1036.png",
sprite: "item0.png",
group: "item",
x: 48,
y: 48,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 350,
sell: 245
},
tags: [
"Damage",
"Lane"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 10
}
},
1037: {
name: "Pickaxe",
description: "<stats>+25 Attack Damage</stats>",
colloq: ";",
plaintext: "Moderately increases Attack Damage",
into: [
"3004",
"3008",
"3031",
"3035",
"3074",
"3124",
"3139",
"3181",
"3812",
"3814"
],
image: {
full: "1037.png",
sprite: "item0.png",
group: "item",
x: 96,
y: 48,
w: 48,
h: 48
},
gold: {
base: 875,
purchasable: true,
total: 875,
sell: 613
},
tags: [
"Damage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 25
}
},
1038: {
name: "B. F. Sword",
description: "<stats>+40 Attack Damage</stats>",
colloq: ";bf",
plaintext: "Greatly increases Attack Damage",
into: [
"3031",
"3072",
"3147",
"3508"
],
image: {
full: "1038.png",
sprite: "item0.png",
group: "item",
x: 144,
y: 48,
w: 48,
h: 48
},
gold: {
base: 1300,
purchasable: true,
total: 1300,
sell: 910
},
tags: [
"Damage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 40
}
},
1039: {
name: "Hunter's Talisman",
description: "<stats><mana>+150% Base Mana Regen while in Jungle </mana></stats><br><br><unique>UNIQUE Passive - Tooth:</unique> Damaging a monster with a spell or attack steals 25 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
colloq: ";jungle;Jungle",
plaintext: "Provides damage against Monsters and Mana Regen in the Jungle",
into: [
"3706",
"3711",
"3715"
],
image: {
full: "1039.png",
sprite: "item0.png",
group: "item",
x: 192,
y: 48,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 350,
sell: 245
},
tags: [
"Jungle",
"LifeSteal",
"ManaRegen",
"OnHit"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "25",
Effect2Amount: "0",
Effect3Amount: "0",
Effect4Amount: "5",
Effect5Amount: "0",
Effect6Amount: "1.5",
Effect7Amount: "15"
}
},
1041: {
name: "Hunter's Machete",
description: "<stats>+10% Life Steal vs. Monsters</stats><br><br><unique>UNIQUE Passive - Nail:</unique> Basic attacks deal 25 bonus damage on hit vs. Monsters. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
colloq: ";jungle;Jungle",
plaintext: "Provides damage and life steal versus Monsters",
into: [
"3706",
"3711",
"3715"
],
image: {
full: "1041.png",
sprite: "item0.png",
group: "item",
x: 240,
y: 48,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 350,
sell: 245
},
tags: [
"Jungle",
"LifeSteal",
"OnHit"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "12",
Effect2Amount: "25",
Effect3Amount: "0.1",
Effect4Amount: "2",
Effect5Amount: "0",
Effect6Amount: "0.1",
Effect7Amount: "15"
}
},
1042: {
name: "Dagger",
description: "<stats>+12% Attack Speed</stats>",
colloq: ";",
plaintext: "Slightly increases Attack Speed",
into: [
"1043",
"2015",
"3006",
"3046",
"3086",
"3101",
"3091"
],
image: {
full: "1042.png",
sprite: "item0.png",
group: "item",
x: 288,
y: 48,
w: 48,
h: 48
},
gold: {
base: 300,
purchasable: true,
total: 300,
sell: 210
},
tags: [
"AttackSpeed"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentAttackSpeedMod: 0.12
}
},
1043: {
name: "Recurve Bow",
description: "<stats>+25% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal an additional 15 physical damage on hit.",
colloq: ";",
plaintext: "Greatly increases Attack Speed",
from: [
"1042",
"1042"
],
into: [
"3091",
"3153",
"3085",
"3718",
"3722",
"1416",
"1418",
"1419",
"3124",
"3675"
],
image: {
full: "1043.png",
sprite: "item0.png",
group: "item",
x: 336,
y: 48,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 1000,
sell: 700
},
tags: [
"AttackSpeed",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentAttackSpeedMod: 0.25
},
effect: {
Effect1Amount: "15"
},
depth: 2
},
1051: {
name: "Brawler's Gloves",
description: "<stats>+10% Critical Strike Chance</stats>",
colloq: ";",
plaintext: "Slightly increases Critical Strike Chance",
into: [
"3086",
"3122"
],
image: {
full: "1051.png",
sprite: "item0.png",
group: "item",
x: 384,
y: 48,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 400,
sell: 280
},
tags: [
"CriticalStrike"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatCritChanceMod: 0.1
}
},
1052: {
name: "Amplifying Tome",
description: "<stats>+20 Ability Power</stats>",
colloq: ";amptome",
plaintext: "Slightly increases Ability Power",
into: [
"3108",
"3191",
"3136",
"3135",
"3145",
"3113",
"3090",
"3116",
"1402",
"1410",
"1414",
"3001",
"3050",
"3089",
"3165",
"3802",
"3673"
],
image: {
full: "1052.png",
sprite: "item0.png",
group: "item",
x: 432,
y: 48,
w: 48,
h: 48
},
gold: {
base: 435,
purchasable: true,
total: 435,
sell: 305
},
tags: [
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 20
}
},
1053: {
name: "Vampiric Scepter",
description: "<stats>+15 Attack Damage<br>+10% Life Steal</stats>",
colloq: ";",
plaintext: "Basic attacks restore Health",
from: [
"1036"
],
into: [
"3072",
"3074",
"3139",
"3144",
"3181",
"3812"
],
image: {
full: "1053.png",
sprite: "item0.png",
group: "item",
x: 0,
y: 96,
w: 48,
h: 48
},
gold: {
base: 550,
purchasable: true,
total: 900,
sell: 630
},
tags: [
"Damage",
"LifeSteal"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 15,
PercentLifeStealMod: 0.1
},
depth: 2
},
1054: {
name: "Doran's Shield",
description: "<stats>+80 Health</stats><br><br><passive>Passive: </passive>Restores 6 Health every 5 seconds.<br><unique>UNIQUE Passive:</unique> Blocks 8 damage from single target attacks and spells from champions.",
colloq: ";dshield",
plaintext: "Good defensive starting item",
into: [ ],
image: {
full: "1054.png",
sprite: "item0.png",
group: "item",
x: 48,
y: 96,
w: 48,
h: 48
},
gold: {
base: 450,
purchasable: true,
total: 450,
sell: 180
},
tags: [
"Health",
"HealthRegen",
"Lane"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 80,
FlatHPRegenMod: 1.2
},
effect: {
Effect1Amount: "8"
}
},
1055: {
name: "Doran's Blade",
description: "<stats>+8 Attack Damage<br>+80 Health<br>+3% Life Steal</stats>",
colloq: ";dblade",
plaintext: "Good starting item for attackers",
into: [ ],
image: {
full: "1055.png",
sprite: "item0.png",
group: "item",
x: 96,
y: 96,
w: 48,
h: 48
},
gold: {
base: 450,
purchasable: true,
total: 450,
sell: 180
},
tags: [
"Damage",
"Health",
"Lane",
"LifeSteal"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 80,
FlatPhysicalDamageMod: 8,
PercentLifeStealMod: 0.03
},
effect: {
Effect1Amount: "10"
}
},
1056: {
name: "Doran's Ring",
description: "<stats>+60 Health<br>+15 Ability Power<br><mana>+50% Base Mana Regen </mana></stats><br><br><mana><passive>Passive:</passive> Restores 4 Mana upon killing a unit.</mana>",
colloq: ";dring",
plaintext: "Good starting item for casters",
into: [ ],
image: {
full: "1056.png",
sprite: "item0.png",
group: "item",
x: 144,
y: 96,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 400,
sell: 160
},
tags: [
"Health",
"Lane",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 60,
FlatMagicDamageMod: 15
},
effect: {
Effect1Amount: "4"
}
},
1057: {
name: "Negatron Cloak",
description: "<stats>+40 Magic Resist</stats>",
colloq: ";",
plaintext: "Moderately increases Magic Resist",
from: [
"1033"
],
into: [
"3001",
"3026",
"3091",
"3102",
"3170",
"3512"
],
image: {
full: "1057.png",
sprite: "item0.png",
group: "item",
x: 192,
y: 96,
w: 48,
h: 48
},
gold: {
base: 270,
purchasable: true,
total: 720,
sell: 504
},
tags: [
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatSpellBlockMod: 40
},
depth: 2
},
1058: {
name: "Needlessly Large Rod",
description: "<stats>+60 Ability Power</stats>",
colloq: ";nlr",
plaintext: "Greatly increases Ability Power",
into: [
"3089",
"3003",
"3007",
"3090",
"3285"
],
image: {
full: "1058.png",
sprite: "item0.png",
group: "item",
x: 240,
y: 96,
w: 48,
h: 48
},
gold: {
base: 1250,
purchasable: true,
total: 1250,
sell: 875
},
tags: [
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 60
}
},
1082: {
name: "The Dark Seal",
description: "<stats>+15 Ability Power<br>+25% Increased Healing from Potions<br><mana>+100 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +3 Ability Power per Glory. <br><unique>UNIQUE Passive - Do or Die:</unique> Grants 2 Glory for a champion kill or 1 Glory for an assist, up to 10 Glory total. Lose 4 Glory on death.",
colloq: ";Noxian",
plaintext: "Provides Ability Power and Mana. Increases in power as you kill enemies.",
into: [
"3041"
],
image: {
full: "1082.png",
sprite: "item0.png",
group: "item",
x: 288,
y: 96,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 350,
sell: 245
},
tags: [
"HealthRegen",
"Lane",
"Mana",
"SpellDamage"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatMPPoolMod: 100,
FlatMagicDamageMod: 15
},
effect: {
Effect1Amount: "0.25",
Effect2Amount: "2",
Effect3Amount: "1",
Effect4Amount: "10",
Effect5Amount: "3",
Effect6Amount: "4"
}
},
1083: {
name: "Cull",
description: "<stats>+7 Attack Damage<br>+3 Life on Hit</stats><br><br><unique>UNIQUE Passive:</unique> Killing a lane minion grants 1 additional Gold. Killing 100 lane minions grants an additional 350 bonus gold immediately and disables this passive.",
colloq: ";dblade",
plaintext: "Provides damage and Life Steal on hit - Killing minions grant bonus Gold",
into: [ ],
image: {
full: "1083.png",
sprite: "item0.png",
group: "item",
x: 336,
y: 96,
w: 48,
h: 48
},
gold: {
base: 450,
purchasable: true,
total: 450,
sell: 180
},
tags: [
"Damage",
"Lane",
"LifeSteal"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 7
},
effect: {
Effect1Amount: "3",
Effect2Amount: "1",
Effect3Amount: "100",
Effect4Amount: "350"
}
},
1400: {
name: "Enchantment: Warrior",
description: "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
colloq: ";",
plaintext: "Grants Attack Damage and Cooldown Reduction",
from: [
"3133",
"3706"
],
hideFromAll: true,
into: [ ],
image: {
full: "1400.png",
sprite: "item0.png",
group: "item",
x: 384,
y: 96,
w: 48,
h: 48
},
gold: {
base: 525,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: {
FlatPhysicalDamageMod: 60
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "-0.2",
Effect7Amount: "2",
Effect8Amount: "3"
},
depth: 3
},
1401: {
name: "Enchantment: Cinderhulk",
description: "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. ",
colloq: ";",
plaintext: "Grants Health and Immolate Aura",
from: [
"3751",
"3706"
],
hideFromAll: true,
into: [ ],
image: {
full: "1401.png",
sprite: "item0.png",
group: "item",
x: 432,
y: 96,
w: 48,
h: 48
},
gold: {
base: 525,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 400
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "-0.2",
Effect7Amount: "2",
Effect8Amount: "3"
},
depth: 3
},
1402: {
name: "Enchantment: Runic Echoes",
description: "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
colloq: ";",
plaintext: "Grants Ability Power and periodically empowers your Spells",
from: [
"3113",
"1052",
"3706"
],
hideFromAll: true,
into: [ ],
image: {
full: "1402.png",
sprite: "item0.png",
group: "item",
x: 0,
y: 144,
w: 48,
h: 48
},
gold: {
base: 340,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: {
FlatMagicDamageMod: 60,
PercentMovementSpeedMod: 0.07
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "-0.2",
Effect7Amount: "2",
Effect8Amount: "3"
},
depth: 3
},
1408: {
name: "Enchantment: Warrior",
description: "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
colloq: ";",
plaintext: "Grants Attack Damage and Cooldown Reduction",
from: [
"3133",
"3711"
],
hideFromAll: true,
into: [ ],
image: {
full: "1408.png",
sprite: "item0.png",
group: "item",
x: 192,
y: 144,
w: 48,
h: 48
},
gold: {
base: 525,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatPhysicalDamageMod: 60
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "3",
Effect7Amount: "20",
Effect8Amount: "30"
},
depth: 3
},
1409: {
name: "Enchantment: Cinderhulk",
description: "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. ",
colloq: ";",
plaintext: "Grants Health and Immolate Aura",
from: [
"3751",
"3711"
],
hideFromAll: true,
into: [ ],
image: {
full: "1409.png",
sprite: "item0.png",
group: "item",
x: 240,
y: 144,
w: 48,
h: 48
},
gold: {
base: 525,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 400
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "3",
Effect7Amount: "20",
Effect8Amount: "30"
},
depth: 3
},
1410: {
name: "Enchantment: Runic Echoes",
description: "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
colloq: ";",
plaintext: "Grants Ability Power and periodically empowers your Spells",
from: [
"3113",
"1052",
"3711"
],
hideFromAll: true,
into: [ ],
image: {
full: "1410.png",
sprite: "item0.png",
group: "item",
x: 288,
y: 144,
w: 48,
h: 48
},
gold: {
base: 340,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatMagicDamageMod: 60,
PercentMovementSpeedMod: 0.07
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "3",
Effect7Amount: "20",
Effect8Amount: "30"
},
depth: 3
},
1412: {
name: "Enchantment: Warrior",
description: "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
colloq: ";",
plaintext: "Grants Attack Damage and Cooldown Reduction",
from: [
"3133",
"3715"
],
hideFromAll: true,
into: [ ],
image: {
full: "1412.png",
sprite: "item0.png",
group: "item",
x: 336,
y: 144,
w: 48,
h: 48
},
gold: {
base: 525,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: {
FlatPhysicalDamageMod: 60
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "3",
Effect7Amount: "20",
Effect8Amount: "18"
},
depth: 3
},
1413: {
name: "Enchantment: Cinderhulk",
description: "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. ",
colloq: ";",
plaintext: "Grants Health and Immolate Aura",
from: [
"3751",
"3715"
],
hideFromAll: true,
into: [ ],
image: {
full: "1413.png",
sprite: "item0.png",
group: "item",
x: 384,
y: 144,
w: 48,
h: 48
},
gold: {
base: 525,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 400
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "3",
Effect7Amount: "20",
Effect8Amount: "18"
},
depth: 3
},
1414: {
name: "Enchantment: Runic Echoes",
description: "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
colloq: ";",
plaintext: "Grants Ability Power and periodically empowers your Spells",
from: [
"3113",
"1052",
"3715"
],
hideFromAll: true,
into: [ ],
image: {
full: "1414.png",
sprite: "item0.png",
group: "item",
x: 432,
y: 144,
w: 48,
h: 48
},
gold: {
base: 340,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: {
FlatMagicDamageMod: 60,
PercentMovementSpeedMod: 0.07
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "3",
Effect7Amount: "20",
Effect8Amount: "18"
},
depth: 3
},
1416: {
name: "Enchantment: Bloodrazor",
description: "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
colloq: ";",
plaintext: "Increases Attack Speed and deals damage based on the target's Health",
from: [
"1043",
"3706"
],
hideFromAll: true,
into: [ ],
image: {
full: "1416.png",
sprite: "item0.png",
group: "item",
x: 0,
y: 192,
w: 48,
h: 48
},
gold: {
base: 625,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: {
PercentAttackSpeedMod: 0.5
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "-0.2",
Effect7Amount: "2",
Effect8Amount: "3"
},
depth: 3
},
1418: {
name: "Enchantment: Bloodrazor",
description: "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
colloq: ";",
plaintext: "Increases Attack Speed and deals damage based on the target's Health",
from: [
"1043",
"3711"
],
hideFromAll: true,
into: [ ],
image: {
full: "1418.png",
sprite: "item0.png",
group: "item",
x: 96,
y: 192,
w: 48,
h: 48
},
gold: {
base: 625,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
PercentAttackSpeedMod: 0.5
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "3",
Effect7Amount: "20",
Effect8Amount: "30"
},
depth: 3
},
1419: {
name: "Enchantment: Bloodrazor",
description: "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
colloq: ";",
plaintext: "Increases Attack Speed and deals damage based on the target's Health",
from: [
"1043",
"3715"
],
hideFromAll: true,
into: [ ],
image: {
full: "1419.png",
sprite: "item0.png",
group: "item",
x: 144,
y: 192,
w: 48,
h: 48
},
gold: {
base: 625,
purchasable: true,
total: 2625,
sell: 1837
},
tags: [ ],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: {
PercentAttackSpeedMod: 0.5
},
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "3",
Effect7Amount: "20",
Effect8Amount: "18"
},
depth: 3
},
2003: {
name: "Health Potion",
description: "<groupLimit>Limited to 5 at one time. Limited to 1 type of Healing Potion.</groupLimit><br><br><consumable>Click to Consume:</consumable> Restores 150 Health over 15 seconds.",
colloq: ";",
plaintext: "Consume to restore Health over time",
consumed: true,
stacks: 5,
into: [ ],
image: {
full: "2003.png",
sprite: "item0.png",
group: "item",
x: 192,
y: 192,
w: 48,
h: 48
},
gold: {
base: 50,
purchasable: true,
total: 50,
sell: 20
},
tags: [
"Consumable",
"Jungle",
"Lane"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "150",
Effect2Amount: "15"
}
},
2009: {
name: "Total Biscuit of Rejuvenation",
description: "<consumable>Click to Consume:</consumable> Restores 80 Health and 50 Mana over 10 seconds.",
colloq: ";",
plaintext: "",
consumed: true,
inStore: false,
into: [ ],
image: {
full: "2009.png",
sprite: "item0.png",
group: "item",
x: 240,
y: 192,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { }
},
2010: {
name: "Total Biscuit of Rejuvenation",
description: "<consumable>Click to Consume:</consumable> Restores 15 Health and 15 Mana immediately and then 150 Health over 15 seconds.",
colloq: ";",
plaintext: "",
consumed: true,
stacks: 5,
inStore: false,
into: [ ],
image: {
full: "2010.png",
sprite: "item0.png",
group: "item",
x: 288,
y: 192,
w: 48,
h: 48
},
gold: {
base: 50,
purchasable: false,
total: 50,
sell: 20
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "15",
Effect2Amount: "15",
Effect3Amount: "150",
Effect4Amount: "15"
}
},
2015: {
name: "Kircheis Shard",
description: "<stats>+15% Attack Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Energized Strike:</unique> Your Energized attacks deal 40 bonus magic damage on hit.",
colloq: ";",
plaintext: "Attack speed and a chargable magic hit",
from: [
"1042"
],
into: [
"3087",
"3094"
],
image: {
full: "2015.png",
sprite: "item0.png",
group: "item",
x: 336,
y: 192,
w: 48,
h: 48
},
gold: {
base: 450,
purchasable: true,
total: 750,
sell: 525
},
tags: [
"AttackSpeed",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentAttackSpeedMod: 0.15
},
effect: {
Effect1Amount: "40"
},
depth: 2
},
2031: {
name: "Refillable Potion",
description: "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health over 12 seconds. Holds up to 2 charges and refills upon visiting the shop.",
colloq: ";",
plaintext: "Restores Health over time. Refills at shop.",
into: [
"2032",
"2033"
],
image: {
full: "2031.png",
sprite: "item0.png",
group: "item",
x: 384,
y: 192,
w: 48,
h: 48
},
gold: {
base: 150,
purchasable: true,
total: 150,
sell: 60
},
tags: [
"Active",
"Consumable",
"HealthRegen",
"Jungle",
"Lane"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "125",
Effect2Amount: "0",
Effect3Amount: "12",
Effect4Amount: "2"
}
},
2032: {
name: "Hunter's Potion",
description: "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 60 Health and 35 Mana over 8 seconds. Holds up to 5 charges and refills upon visiting the shop.<br><br>Killing a Large Monster grants 1 charge.<br><br><rules>(Killing a Large Monster at full charges will automatically consume the newest charge.)</rules>",
colloq: ";",
plaintext: "Restores Health and Mana over time - Refills at shop and has increased capacity",
from: [
"2031"
],
into: [ ],
image: {
full: "2032.png",
sprite: "item0.png",
group: "item",
x: 432,
y: 192,
w: 48,
h: 48
},
gold: {
base: 250,
purchasable: true,
total: 400,
sell: 160
},
tags: [
"Active",
"Consumable",
"HealthRegen",
"Jungle",
"ManaRegen"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "60",
Effect2Amount: "35",
Effect3Amount: "8",
Effect4Amount: "5"
},
depth: 2
},
2033: {
name: "Corrupting Potion",
description: "<groupLimit>Limited to 1 type of Healing Potion.</groupLimit><br><br><active>UNIQUE Active:</active> Consumes a charge to restore 125 Health and 75 Mana over 12 seconds and grants <font color='#FF8811'><u>Touch of Corruption</u></font> during that time. Holds up to 3 charges that refills upon visiting the shop.<br><br><font color='#FF8811'><u>Touch of Corruption:</u></font> Damaging spells and attacks burn enemy champions for <levelScale>15 - 30</levelScale> magic damage over 3 seconds. (Half Damage for Area of Effect or Damage over Time spells. Damage increases with champion level.)<br><br><rules>(Corrupting Potion can be used even at full Health and Mana.)</rules>",
colloq: ";",
plaintext: "Restores Health and Mana over time and boosts combat power - Refills at Shop",
from: [
"2031"
],
into: [ ],
image: {
full: "2033.png",
sprite: "item0.png",
group: "item",
x: 0,
y: 240,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 500,
sell: 200
},
tags: [
"Active",
"Consumable",
"HealthRegen",
"Lane",
"ManaRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "125",
Effect2Amount: "75",
Effect3Amount: "12",
Effect4Amount: "3",
Effect5Amount: "10",
Effect6Amount: "0.1",
Effect7Amount: "15",
Effect8Amount: "3"
},
depth: 2
},
2045: {
name: "Ruby Sightstone",
description: "<stats>+500 Health</stats><br><br><unique>UNIQUE Passive:</unique> Item Active cooldowns are reduced by 20%.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges and refills when visiting the shop.<br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
colloq: ";",
plaintext: "Greatly increases Health and provides Stealth Wards over time",
from: [
"2049",
"1028"
],
into: [ ],
image: {
full: "2045.png",
sprite: "item0.png",
group: "item",
x: 96,
y: 240,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 1600,
sell: 640
},
tags: [
"Active",
"Health",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 500
},
effect: {
Effect1Amount: "-0.2",
Effect2Amount: "4",
Effect3Amount: "150"
},
depth: 3
},
2047: {
name: "Oracle's Extract",
description: "<consumable>Click to Consume:</consumable> Grants detection of nearby invisible or unseen enemy units for 5 minutes.",
colloq: ";",
plaintext: "Allows champion to see invisible or unseen enemy units",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "2047.png",
sprite: "item0.png",
group: "item",
x: 144,
y: 240,
w: 48,
h: 48
},
gold: {
base: 300,
purchasable: true,
total: 300,
sell: 120
},
tags: [
"Consumable",
"Stealth",
"Vision"
],
maps: {
1: false,
8: true,
10: false,
11: false,
12: true,
14: false
},
stats: { }
},
2049: {
name: "Sightstone",
description: "<stats>+150 Health</stats><br><br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 3 charges which refill upon visiting the shop. <br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
colloq: ";",
plaintext: "Increases Health and provides Stealth Wards over time",
from: [
"1028"
],
into: [
"2045",
"2301",
"2302",
"2303"
],
image: {
full: "2049.png",
sprite: "item0.png",
group: "item",
x: 192,
y: 240,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 800,
sell: 320
},
tags: [
"Active",
"Health",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 150
},
effect: {
Effect1Amount: "3",
Effect2Amount: "150"
},
depth: 2
},
2050: {
name: "Explorer's Ward",
description: "<consumable>Click to Consume:</consumable> Places an invisible ward that reveals the surrounding area for 60 seconds.",
colloq: ";",
plaintext: "",
inStore: false,
into: [ ],
image: {
full: "2050.png",
sprite: "item0.png",
group: "item",
x: 240,
y: 240,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [
"Consumable"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { }
},
2051: {
name: "Guardian's Horn",
description: "<stats>+150 Health</stats><br><br><passive>Passive: </passive>Restores 20 Health every 5 seconds.<br><unique>UNIQUE Passive:</unique> Blocks 12 damage from attacks and spells from champions (25% effectiveness vs. damage over time abilities).<br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
colloq: "Golden Arm of Kobe;Golden Bicep of Kobe;Horn; Horn of the ManWolf; ManWolf",
plaintext: "Good starting item for tanks",
into: [ ],
image: {
full: "2051.png",
sprite: "item0.png",
group: "item",
x: 288,
y: 240,
w: 48,
h: 48
},
gold: {
base: 950,
purchasable: true,
total: 950,
sell: 380
},
tags: [
"Health",
"HealthRegen",
"Lane"
],
maps: {
1: false,
8: false,
10: false,
11: false,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 150,
FlatHPRegenMod: 4
},
effect: {
Effect1Amount: "12",
Effect2Amount: "0.25"
}
},
2052: {
name: "Poro-Snax",
description: "This savory blend of free-range, grass-fed Avarosan game hens and organic, non-ZMO Freljordian herbs contains the essential nutrients necessary to keep your Poro purring with pleasure.<br><br><i>All proceeds will be donated towards fighting Noxian animal cruelty.</i>",
colloq: ";",
plaintext: "",
consumed: true,
stacks: 2,
inStore: false,
into: [ ],
image: {
full: "2052.png",
sprite: "item0.png",
group: "item",
x: 336,
y: 240,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { }
},
2053: {
name: "Raptor Cloak",
description: "<stats>+40 Armor<br>+125% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.",
colloq: ";",
plaintext: "Enhances Movement Speed near turrets",
from: [
"1006",
"1031"
],
into: [
"3056",
"3069",
"3512"
],
image: {
full: "2053.png",
sprite: "item0.png",
group: "item",
x: 384,
y: 240,
w: 48,
h: 48
},
gold: {
base: 250,
purchasable: true,
total: 1200,
sell: 840
},
tags: [
"Armor",
"HealthRegen",
"NonbootsMovement"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 40
},
effect: {
Effect1Amount: "20",
Effect2Amount: "2"
},
depth: 3
},
2054: {
name: "Diet Poro-Snax",
description: "All the flavor of regular Poro-Snax, without the calories! Keeps your Poro happy AND healthy.<br><br><consumable>Click to Consume:</consumable> Gives your Poros a delicious healthy treat.",
colloq: ";",
plaintext: "",
consumed: true,
inStore: false,
into: [ ],
image: {
full: "2054.png",
sprite: "item0.png",
group: "item",
x: 432,
y: 240,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { }
},
2055: {
name: "Control Ward",
description: "<groupLimit>Can only carry 3 Control Wards in inventory.</groupLimit><br><br><consumable>Click to Consume:</consumable> Places a ward that reveals the surrounding area. This device will disable and reveal nearby wards and hidden traps. Control Wards do not disable other Control Wards. Camouflaged units will also be revealed. <br><br>Limit 1 <font color='#BBFFFF'>Control Ward</font> on the map per player.",
colloq: "orange;",
plaintext: "Used to disable wards and invisible traps in an area.",
consumed: true,
stacks: 3,
into: [ ],
image: {
full: "2055.png",
sprite: "item2.png",
group: "item",
x: 144,
y: 192,
w: 48,
h: 48
},
gold: {
base: 75,
purchasable: true,
total: 75,
sell: 30
},
tags: [
"Consumable",
"Lane",
"Stealth",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "1",
Effect2Amount: "3"
}
},
2138: {
name: "Elixir of Iron",
description: "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +300 Health, 25% Tenacity, increased champion size, and <font color='#FF8811'><u>Path of Iron</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Path of Iron:</u></font> Moving leaves a path behind that boosts allied champion's Movement Speed by 15%.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>",
colloq: ";white",
plaintext: "Temporarily increases defenses. Leaves a trail for allies to follow.",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "2138.png",
sprite: "item0.png",
group: "item",
x: 0,
y: 288,
w: 48,
h: 48
},
gold: {
base: 500,
purchasable: true,
total: 500,
sell: 200
},
tags: [
"Consumable",
"Health",
"NonbootsMovement",
"Tenacity"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "300",
Effect2Amount: "0.25",
Effect3Amount: "3",
Effect4Amount: "0.15",
Effect5Amount: "0.15",
Effect6Amount: "0",
Effect7Amount: "0",
Effect8Amount: "9"
}
},
2139: {
name: "Elixir of Sorcery",
description: "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +50 Ability Power, 15 bonus Mana Regen per 5 seconds and <font color='#FF8811'><u>Sorcery</u></font> for 3 minutes. <br><br><font color='#FF8811'><u>Sorcery:</u></font> Damaging a champion or turret deals 25 bonus True Damage. This effect has a 5 second cooldown versus champions but no cooldown versus turrets.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules><br>",
colloq: ";blue",
plaintext: "Temporarily grants Ability Power and Bonus Damage to champions and turrets.",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "2139.png",
sprite: "item0.png",
group: "item",
x: 48,
y: 288,
w: 48,
h: 48
},
gold: {
base: 500,
purchasable: true,
total: 500,
sell: 200
},
tags: [
"Consumable",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "50",
Effect2Amount: "50",
Effect3Amount: "25",
Effect4Amount: "3",
Effect5Amount: "5",
Effect6Amount: "3",
Effect7Amount: "0",
Effect8Amount: "9"
}
},
2140: {
name: "Elixir of Wrath",
description: "<stats><levelLimit>Level 9 required to purchase.</levelLimit></stats><br><br><consumable>Click to Consume:</consumable> Grants +30 Attack Damage and <font color='#FF8811'><u>Bloodlust</u></font> for 3 minutes.<br><br><font color='#FF8811'><u>Bloodlust:</u></font> Dealing physical damage to champions heals for 15% of the damage dealt.<br><br><rules>(Only one Elixir effect may be active at a time.)</rules>",
colloq: ";red",
plaintext: "Temporarily grants Attack Damage and heals you when dealing physical damage to champions.",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "2140.png",
sprite: "item0.png",
group: "item",
x: 96,
y: 288,
w: 48,
h: 48
},
gold: {
base: 500,
purchasable: true,
total: 500,
sell: 200
},
tags: [
"Consumable",
"Damage",
"LifeSteal",
"SpellVamp"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "30",
Effect2Amount: "30",
Effect3Amount: "0.15",
Effect4Amount: "3",
Effect5Amount: "0",
Effect6Amount: "0",
Effect7Amount: "0",
Effect8Amount: "9"
}
},
2301: {
name: "Eye of the Watchers",
description: "<stats>+200 Health<br><mana>+100% Base Mana Regen </mana><br>+25 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Spells and basic attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop. <br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
colloq: ";",
plaintext: "Provides Ability Power and Stealth Wards over time",
from: [
"2049",
"3098"
],
into: [ ],
image: {
full: "2301.png",
sprite: "item0.png",
group: "item",
x: 144,
y: 288,
w: 48,
h: 48
},
gold: {
base: 550,
purchasable: true,
total: 2200,
sell: 880
},
tags: [
"Active",
"CooldownReduction",
"GoldPer",
"Health",
"ManaRegen",
"SpellDamage",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 200,
FlatMagicDamageMod: 25
},
effect: {
Effect1Amount: "2",
Effect2Amount: "15",
Effect3Amount: "15",
Effect4Amount: "4",
Effect5Amount: "30",
Effect6Amount: "12",
Effect7Amount: "150",
Effect8Amount: "3"
},
depth: 3
},
2302: {
name: "Eye of the Oasis",
description: "<stats>+200 Health<br>+100% Base Health Regen <br><mana>+100% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Being near a minion's death without dealing the killing blow grants 6 Gold and 10 Health.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
colloq: ";",
plaintext: "Provides Regeneration and Stealth Wards over time",
from: [
"2049",
"3096"
],
into: [ ],
image: {
full: "2302.png",
sprite: "item0.png",
group: "item",
x: 192,
y: 288,
w: 48,
h: 48
},
gold: {
base: 250,
purchasable: true,
total: 1900,
sell: 760
},
tags: [
"Active",
"CooldownReduction",
"GoldPer",
"Health",
"HealthRegen",
"ManaRegen",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 200
},
effect: {
Effect1Amount: "0",
Effect2Amount: "6",
Effect3Amount: "10",
Effect4Amount: "4",
Effect5Amount: "0",
Effect6Amount: "0",
Effect7Amount: "150"
},
depth: 3
},
2303: {
name: "Eye of the Equinox",
description: "<stats>+500 Health<br>+200% Base Health Regen <br>+2 Gold per 10 seconds</stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 4 charges.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 4 charges which refill upon visiting the shop.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
colloq: ";",
plaintext: "Provides Health and Stealth Wards over time",
from: [
"2049",
"3097"
],
into: [ ],
image: {
full: "2303.png",
sprite: "item0.png",
group: "item",
x: 240,
y: 288,
w: 48,
h: 48
},
gold: {
base: 550,
purchasable: true,
total: 2200,
sell: 880
},
tags: [
"Active",
"GoldPer",
"Health",
"HealthRegen",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 500
},
effect: {
Effect1Amount: "320",
Effect2Amount: "50",
Effect3Amount: "30",
Effect4Amount: "4",
Effect5Amount: "0",
Effect6Amount: "0",
Effect7Amount: "150",
Effect8Amount: "0"
},
depth: 3
},
3001: {
name: "Abyssal Scepter",
description: "<stats>+60 Ability Power<br>+60 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><aura>UNIQUE Aura:</aura> Nearby enemy champions take 10% more magic damage.",
colloq: ";",
plaintext: "Nearby enemies take more magic damage",
from: [
"3108",
"1057",
"1052"
],
into: [ ],
image: {
full: "3001.png",
sprite: "item0.png",
group: "item",
x: 288,
y: 288,
w: 48,
h: 48
},
gold: {
base: 695,
purchasable: true,
total: 2750,
sell: 1925
},
tags: [
"Aura",
"CooldownReduction",
"MagicPenetration",
"SpellBlock",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 60,
FlatSpellBlockMod: 60
},
effect: {
Effect1Amount: "-10",
Effect2Amount: "-25",
Effect3Amount: "0.1"
},
depth: 3
},
3003: {
name: "Archangel's Staff",
description: "<stats>+80 Ability Power<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +8 maximum Mana (max +750 Mana) for each spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana>",
colloq: ";aa",
plaintext: "Increases Ability Power based on maximum Mana",
from: [
"3070",
"1058"
],
into: [
"3040"
],
image: {
full: "3003.png",
sprite: "item0.png",
group: "item",
x: 336,
y: 288,
w: 48,
h: 48
},
gold: {
base: 1100,
purchasable: true,
total: 3100,
sell: 2170
},
tags: [
"Mana",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 250,
FlatMagicDamageMod: 80
},
effect: {
Effect1Amount: "0.03",
Effect2Amount: "8",
Effect3Amount: "750",
Effect4Amount: "2",
Effect5Amount: "8",
Effect6Amount: "0",
Effect7Amount: "0.25"
},
depth: 3
},
3004: {
name: "Manamune",
description: "<stats>+25 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +4 maximum Mana (max +750 Mana) for each basic attack, spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana>",
colloq: ";",
plaintext: "Increases Attack Damage based on maximum Mana",
from: [
"3070",
"1037"
],
into: [
"3042"
],
image: {
full: "3004.png",
sprite: "item0.png",
group: "item",
x: 384,
y: 288,
w: 48,
h: 48
},
gold: {
base: 775,
purchasable: true,
total: 2400,
sell: 1680
},
tags: [
"Damage",
"Mana",
"ManaRegen",
"OnHit"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 250,
FlatPhysicalDamageMod: 25
},
effect: {
Effect1Amount: "0.02",
Effect2Amount: "4",
Effect3Amount: "750",
Effect4Amount: "2",
Effect5Amount: "8",
Effect6Amount: "1",
Effect7Amount: "0.15"
},
depth: 3
},
3006: {
name: "Berserker's Greaves",
description: "<stats> +35% Attack Speed</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
colloq: ";",
plaintext: "Enhances Movement Speed and Attack Speed",
from: [
"1001",
"1042"
],
into: [
"1303",
"1302"
],
image: {
full: "3006.png",
sprite: "item0.png",
group: "item",
x: 432,
y: 288,
w: 48,
h: 48
},
gold: {
base: 500,
purchasable: true,
total: 1100,
sell: 770
},
tags: [
"AttackSpeed",
"Boots"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMovementSpeedMod: 45,
PercentAttackSpeedMod: 0.35
},
depth: 2
},
3007: {
name: "Archangel's Staff (Quick Charge)",
description: "<stats>+80 Ability Power<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent. <br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +12 maximum Mana (max +750 Mana) for each spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Seraph's Embrace at +750 Mana.</mana>",
colloq: ";aa",
plaintext: "Increases Ability Power based on maximum Mana",
from: [
"3073",
"1058"
],
into: [
"3048"
],
image: {
full: "3007.png",
sprite: "item0.png",
group: "item",
x: 0,
y: 336,
w: 48,
h: 48
},
gold: {
base: 1100,
purchasable: true,
total: 3100,
sell: 2170
},
tags: [
"Mana",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatMPPoolMod: 250,
FlatMagicDamageMod: 80
},
effect: {
Effect1Amount: "0.03",
Effect2Amount: "12",
Effect3Amount: "750",
Effect4Amount: "2",
Effect5Amount: "8",
Effect6Amount: "0",
Effect7Amount: "0.25"
},
depth: 3
},
3008: {
name: "Manamune (Quick Charge)",
description: "<stats>+25 Attack Damage<br><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants +6 maximum Mana (max +750 Mana) for each basic attack, spell cast or Mana expenditure (occurs up to 2 times every 8 seconds).<br><br>Transforms into Muramana at +750 Mana.</mana>",
colloq: ";",
plaintext: "Increases Attack Damage based on maximum Mana",
from: [
"3073",
"1037"
],
into: [
"3043"
],
image: {
full: "3008.png",
sprite: "item0.png",
group: "item",
x: 48,
y: 336,
w: 48,
h: 48
},
gold: {
base: 775,
purchasable: true,
total: 2400,
sell: 1680
},
tags: [
"Damage",
"Mana",
"ManaRegen",
"OnHit"
],
maps: {
1: false,
8: true,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatMPPoolMod: 250,
FlatPhysicalDamageMod: 25
},
effect: {
Effect1Amount: "0.02",
Effect2Amount: "6",
Effect3Amount: "750",
Effect4Amount: "2",
Effect5Amount: "8",
Effect6Amount: "1",
Effect7Amount: "0.15"
},
depth: 3
},
3009: {
name: "Boots of Swiftness",
description: "<unique>UNIQUE Passive - Enhanced Movement:</unique> +55 Movement Speed<br><unique>UNIQUE Passive - Slow Resist:</unique> Movement slowing effects are reduced by 25%.",
colloq: ";",
plaintext: "Enhances Movement Speed and reduces the effect of slows",
from: [
"1001"
],
into: [
"1308",
"1307"
],
image: {
full: "3009.png",
sprite: "item0.png",
group: "item",
x: 96,
y: 336,
w: 48,
h: 48
},
gold: {
base: 600,
purchasable: true,
total: 900,
sell: 630
},
tags: [
"Boots"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMovementSpeedMod: 55
},
effect: {
Effect1Amount: "0.25"
},
depth: 2
},
3010: {
name: "Catalyst of Aeons",
description: "<stats>+225 Health<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. <br><br>Spending Mana restores 20% of the cost as Health, up to 15 per spell cast. <br><br><rules>(Toggled Spells heal for a maximum of 15 per second.)</rules>",
colloq: ";",
plaintext: "Spend Mana to recover Health",
from: [
"1028",
"1027"
],
into: [
"3027",
"3029",
"3030",
"3800"
],
image: {
full: "3010.png",
sprite: "item0.png",
group: "item",
x: 144,
y: 336,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 1100,
sell: 770
},
tags: [
"Health",
"HealthRegen",
"Mana",
"ManaRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 225,
FlatMPPoolMod: 300
},
effect: {
Effect1Amount: "150",
Effect2Amount: "200",
Effect3Amount: "8",
Effect4Amount: "15",
Effect5Amount: "0.2",
Effect6Amount: "0.15"
},
depth: 2
},
3020: {
name: "Sorcerer's Shoes",
description: "<stats>+15 <a href='FlatMagicPen'>Magic Penetration</a></stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
colloq: ";",
plaintext: "Enhances Movement Speed and magic damage",
from: [
"1001"
],
into: [
"1313",
"1312"
],
image: {
full: "3020.png",
sprite: "item0.png",
group: "item",
x: 192,
y: 336,
w: 48,
h: 48
},
gold: {
base: 800,
purchasable: true,
total: 1100,
sell: 770
},
tags: [
"Boots",
"MagicPenetration"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMovementSpeedMod: 45
},
effect: {
Effect1Amount: "15"
},
depth: 2
},
3022: {
name: "Frozen Mallet",
description: "<stats>+700 Health<br>+30 Attack Damage</stats><br><br><unique>UNIQUE Passive - Icy:</unique> Basic attacks slow the target's Movement Speed for 1.5 seconds on hit (40% slow for melee attacks, 30% slow for ranged attacks).",
colloq: ";fm",
plaintext: "Basic attacks slow enemies",
from: [
"3052",
"1011"
],
into: [ ],
image: {
full: "3022.png",
sprite: "item0.png",
group: "item",
x: 240,
y: 336,
w: 48,
h: 48
},
gold: {
base: 900,
purchasable: true,
total: 3100,
sell: 2170
},
tags: [
"Damage",
"Health",
"OnHit",
"Slow"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 700,
FlatPhysicalDamageMod: 30
},
effect: {
Effect1Amount: "1.5",
Effect2Amount: "0.4",
Effect3Amount: "0.3"
},
depth: 3
},
3024: {
name: "Glacial Shroud",
description: "<stats>+25 Armor<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
colloq: ";",
plaintext: "Increases Armor and Cooldown Reduction",
from: [
"1027",
"1029"
],
into: [
"3110",
"3025",
"3050",
"3060",
"3187"
],
image: {
full: "3024.png",
sprite: "item0.png",
group: "item",
x: 288,
y: 336,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 1000,
sell: 700
},
tags: [
"Armor",
"CooldownReduction",
"Mana"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 250,
FlatArmorMod: 25
},
effect: {
Effect1Amount: "-0.1"
},
depth: 2
},
3025: {
name: "Iceborn Gauntlet",
description: "<stats>+65 Armor<br>+20% Cooldown Reduction<br><mana>+500 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).<br><br>Size of zone increases with bonus armor.",
colloq: ";frozen fist",
plaintext: "Basic attacks create a slow field after spell cast",
from: [
"3057",
"3024"
],
into: [ ],
image: {
full: "3025.png",
sprite: "item0.png",
group: "item",
x: 336,
y: 336,
w: 48,
h: 48
},
gold: {
base: 650,
purchasable: true,
total: 2700,
sell: 1890
},
tags: [
"Armor",
"CooldownReduction",
"Mana",
"Slow"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 500,
FlatArmorMod: 65
},
effect: {
Effect1Amount: "-0.2",
Effect2Amount: "1",
Effect3Amount: "2",
Effect4Amount: "-0.3",
Effect5Amount: "1.5"
},
depth: 3
},
3026: {
name: "Guardian Angel",
description: "<stats>+60 Armor<br>+45 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Upon taking lethal damage, restores the greater of 700 Health or 30% of maximum Health and 30% of maximum Mana after 4 seconds of stasis (300 second cooldown).",
colloq: ";ga",
plaintext: "Periodically revives champion upon death",
from: [
"1057",
"1031"
],
into: [ ],
image: {
full: "3026.png",
sprite: "item0.png",
group: "item",
x: 384,
y: 336,
w: 48,
h: 48
},
gold: {
base: 880,
purchasable: true,
total: 2400,
sell: 960
},
tags: [
"Armor",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: false,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 60,
FlatSpellBlockMod: 45
},
effect: {
Effect1Amount: "0.3",
Effect2Amount: "4",
Effect3Amount: "300",
Effect4Amount: "700"
},
depth: 3
},
3027: {
name: "Rod of Ages",
description: "<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per minute (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
colloq: ";roa",
plaintext: "Greatly increases Health, Mana, and Ability Power",
from: [
"3010",
"1026"
],
into: [ ],
image: {
full: "3027.png",
sprite: "item0.png",
group: "item",
x: 432,
y: 336,
w: 48,
h: 48
},
gold: {
base: 750,
purchasable: true,
total: 2700,
sell: 1890
},
tags: [
"Health",
"HealthRegen",
"Mana",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 300,
FlatMPPoolMod: 300,
FlatMagicDamageMod: 60
},
effect: {
Effect1Amount: "20",
Effect2Amount: "10",
Effect3Amount: "4",
Effect4Amount: "1",
Effect5Amount: "10",
Effect6Amount: "150",
Effect7Amount: "200",
Effect8Amount: "8"
},
depth: 3
},
3028: {
name: "Chalice of Harmony",
description: "<stats>+25 Magic Resist<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.</unique>",
colloq: ";",
plaintext: "Increases Mana and Health Regeneration",
from: [
"1004",
"1033",
"1004"
],
into: [
"3174",
"3222"
],
image: {
full: "3028.png",
sprite: "item0.png",
group: "item",
x: 0,
y: 384,
w: 48,
h: 48
},
gold: {
base: 100,
purchasable: true,
total: 800,
sell: 560
},
tags: [
"HealthRegen",
"ManaRegen",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatSpellBlockMod: 25
},
effect: {
Effect1Amount: "2",
Effect2Amount: "5",
Effect3Amount: "600",
Effect4Amount: "180",
Effect5Amount: "8",
Effect6Amount: "1",
Effect7Amount: "1"
},
depth: 2
},
3029: {
name: "Rod of Ages (Quick Charge)",
description: "<stats>+300 Health<br><mana>+300 Mana</mana><br>+60 Ability Power</stats><br><br><passive>Passive:</passive> Grants +20 Health, +10 Mana, and +4 Ability Power per stack (max +200 Health, +100 Mana, and +40 Ability Power). Grants 1 stack per 40 seconds (max 10 stacks).<br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.",
colloq: ";roa",
plaintext: "Greatly increases Health, Mana, and Ability Power",
from: [
"3010",
"1026"
],
into: [ ],
image: {
full: "3029.png",
sprite: "item0.png",
group: "item",
x: 48,
y: 384,
w: 48,
h: 48
},
gold: {
base: 750,
purchasable: true,
total: 2700,
sell: 1890
},
tags: [
"Health",
"HealthRegen",
"Mana",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 300,
FlatMPPoolMod: 300,
FlatMagicDamageMod: 60
},
effect: {
Effect1Amount: "20",
Effect2Amount: "10",
Effect3Amount: "4",
Effect4Amount: "1",
Effect5Amount: "10",
Effect6Amount: "150",
Effect7Amount: "200",
Effect8Amount: "8"
},
depth: 3
},
3030: {
name: "Hextech GLP-800",
description: "<stats>+300 Health<br><mana>+400 Mana</mana><br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast.<br><unique>UNIQUE Active - Frost Bolt:</unique> Fires a spray of icy bolts that explode, dealing <levelScale>100 - 200</levelScale> (+35% of your Ability Power) magic damage to all enemies hit. (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Enemies hit are slowed by 65% decaying over 0.5 seconds.<br><br><rules>(Frost Bolt has a cast time, in contrast to most actives.)</rules> ",
colloq: "frost cannon;",
plaintext: "Activate to fire icy bolts to slow enemies",
from: [
"3010",
"3145"
],
into: [ ],
image: {
full: "3030.png",
sprite: "item0.png",
group: "item",
x: 96,
y: 384,
w: 48,
h: 48
},
gold: {
base: 850,
purchasable: true,
total: 3000,
sell: 2100
},
tags: [
"Active",
"Health",
"HealthRegen",
"Mana",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 300,
FlatMPPoolMod: 400,
FlatMagicDamageMod: 80
},
effect: {
Effect1Amount: "0",
Effect2Amount: "0",
Effect3Amount: "0",
Effect4Amount: "0.5",
Effect5Amount: "0.65",
Effect6Amount: "100",
Effect7Amount: "200",
Effect8Amount: "0.35"
},
depth: 3
},
3031: {
name: "Infinity Edge",
description: "<stats>+70 Attack Damage<br>+20% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical strike bonus damage is increased by 50%.",
colloq: ";ie",
plaintext: "Massively enhances critical strikes",
from: [
"1038",
"1037",
"1018"
],
into: [ ],
image: {
full: "3031.png",
sprite: "item0.png",
group: "item",
x: 144,
y: 384,
w: 48,
h: 48
},
gold: {
base: 625,
purchasable: true,
total: 3600,
sell: 2520
},
tags: [
"CriticalStrike",
"Damage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 70,
FlatCritChanceMod: 0.2
},
effect: {
Effect1Amount: "0.5"
},
depth: 2
},
3033: {
name: "Mortal Reminder",
description: "<stats>+50 Attack Damage</stats><br><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 5 seconds.<br><unique>UNIQUE Passive - Last Whisper:</unique> +45% <a href='BonusArmorPen'>Bonus Armor Penetration</a>.",
colloq: ";lw;grievous",
plaintext: "Overcomes enemies with high Health recovery and Armor",
from: [
"3035",
"3123"
],
into: [ ],
image: {
full: "3033.png",
sprite: "item0.png",
group: "item",
x: 192,
y: 384,
w: 48,
h: 48
},
gold: {
base: 600,
purchasable: true,
total: 2700,
sell: 1890
},
tags: [
"ArmorPenetration",
"Damage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 50
},
effect: {
Effect1Amount: "5",
Effect2Amount: "0.45"
},
depth: 3
},
3034: {
name: "Giant Slayer",
description: "<stats>+10 Attack Damage</stats><br><br><unique>UNIQUE Passive - Giant Slayer:</unique> Grants up to +10% physical damage against enemy champions with greater maximum Health than you (+1% damage per 50 Health difference, maxing at 500 Health difference).<br><br><rules>(Unique Passives with the same name don't stack.)</rules>",
colloq: ";gs",
plaintext: "Overcomes enemies with high Health",
from: [
"1036"
],
into: [
"3036"
],
image: {
full: "3034.png",
sprite: "item0.png",
group: "item",
x: 240,
y: 384,
w: 48,
h: 48
},
gold: {
base: 650,
purchasable: true,
total: 1000,
sell: 700
},
tags: [
"Damage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 10
},
effect: {
Effect1Amount: "0.1",
Effect2Amount: "50",
Effect3Amount: "0.01",
Effect4Amount: "500"
},
depth: 2
},
3035: {
name: "Last Whisper",
description: "<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive - Last Whisper:</unique> +30% <a href='BonusArmorPen'>Bonus Armor Penetration</a>",
colloq: ";lw",
plaintext: "Overcomes enemies with high Armor",
from: [
"1037"
],
into: [
"3033",
"3036"
],
image: {
full: "3035.png",
sprite: "item0.png",
group: "item",
x: 288,
y: 384,
w: 48,
h: 48
},
gold: {
base: 425,
purchasable: true,
total: 1300,
sell: 910
},
tags: [
"ArmorPenetration",
"Damage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 25
},
effect: {
Effect1Amount: "0.3",
Effect2Amount: "0.45"
},
depth: 2
},
3036: {
name: "Lord Dominik's Regards",
description: "<stats>+50 Attack Damage</stats><br><br><unique>UNIQUE Passive - Giant Slayer:</unique> Grants up to +15% physical damage against enemy champions with greater maximum Health than you (+1.5% damage per 50 Health difference, maxing at 500 Health difference).<br><unique>UNIQUE Passive - Last Whisper:</unique> +45% <a href='BonusArmorPen'>Bonus Armor Penetration</a>",
colloq: ";lw",
plaintext: "Overcomes enemies with high health and armor",
from: [
"3035",
"3034"
],
into: [ ],
image: {
full: "3036.png",
sprite: "item0.png",
group: "item",
x: 336,
y: 384,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 2700,
sell: 1890
},
tags: [
"ArmorPenetration",
"Damage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 50
},
effect: {
Effect1Amount: "0.45",
Effect2Amount: "0.15",
Effect3Amount: "0",
Effect4Amount: "50",
Effect5Amount: "0.015",
Effect6Amount: "500"
},
depth: 3
},
3040: {
name: "Seraph's Embrace",
description: "<stats>+80 Ability Power<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).",
colloq: ";",
plaintext: "",
from: [
"3003"
],
specialRecipe: 3003,
inStore: false,
into: [ ],
image: {
full: "3040.png",
sprite: "item0.png",
group: "item",
x: 384,
y: 384,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 2170
},
tags: [
"Active"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 1000,
FlatMagicDamageMod: 80
},
effect: {
Effect1Amount: "0.03",
Effect2Amount: "0.2",
Effect3Amount: "3",
Effect4Amount: "150",
Effect5Amount: "120",
Effect6Amount: "0",
Effect7Amount: "0.25"
},
depth: 4
},
3041: {
name: "Mejai's Soulstealer",
description: "<stats>+20 Ability Power<br><mana>+200 Mana</mana></stats><br><br><unique>UNIQUE Passive - Dread:</unique> Grants +5 Ability Power per Glory. Grants 10% Movement Speed if you have at least 15 Glory.<br><unique>UNIQUE Passive - Do or Die:</unique> Grants 4 Glory for a champion kill or 2 Glory for an assist, up to 25 Glory total. Lose 10 stacks of Glory upon dying.",
colloq: ";",
plaintext: "Grants Ability Power for kills and assists",
from: [
"1082"
],
into: [ ],
image: {
full: "3041.png",
sprite: "item0.png",
group: "item",
x: 432,
y: 384,
w: 48,
h: 48
},
gold: {
base: 1050,
purchasable: true,
total: 1400,
sell: 980
},
tags: [
"Mana",
"SpellDamage"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatMPPoolMod: 200,
FlatMagicDamageMod: 20
},
effect: {
Effect1Amount: "5",
Effect2Amount: "4",
Effect3Amount: "2",
Effect4Amount: "25",
Effect5Amount: "0.5",
Effect6Amount: "0.1",
Effect7Amount: "10",
Effect8Amount: "15"
},
depth: 2
},
3042: {
name: "Muramana",
description: "<stats>+25 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana>",
colloq: ";",
plaintext: "",
from: [
"3004"
],
specialRecipe: 3004,
inStore: false,
into: [ ],
image: {
full: "3042.png",
sprite: "item0.png",
group: "item",
x: 0,
y: 432,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 1680
},
tags: [
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 1000,
FlatPhysicalDamageMod: 25
},
effect: {
Effect1Amount: "0.15"
},
depth: 4
},
3043: {
name: "Muramana",
description: "<stats>+25 Attack Damage<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants bonus Attack Damage equal to 2% of maximum Mana. Refunds 15% of Mana spent.</mana><br><mana><unique>UNIQUE Passive - Shock:</unique> Single target spells and attacks (on hit) on <font color='#FFFFFF'>Champions</font> consume 3% of current Mana to deal bonus physical damage equal to twice the amount of Mana consumed.<br><br>This effect only activates while you have greater than 20% maximum Mana.</mana>",
colloq: ";",
plaintext: "",
from: [
"3008"
],
specialRecipe: 3008,
inStore: false,
into: [ ],
image: {
full: "3043.png",
sprite: "item0.png",
group: "item",
x: 48,
y: 432,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 1680
},
tags: [
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 1000,
FlatPhysicalDamageMod: 25
},
effect: {
Effect1Amount: "0.15"
},
depth: 4
},
3044: {
name: "Phage",
description: "<stats>+200 Health<br>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.",
colloq: ";",
plaintext: "Attacks and kills give a small burst of speed",
from: [
"1028",
"1036"
],
into: [
"3078",
"3071"
],
image: {
full: "3044.png",
sprite: "item0.png",
group: "item",
x: 96,
y: 432,
w: 48,
h: 48
},
gold: {
base: 500,
purchasable: true,
total: 1250,
sell: 875
},
tags: [
"Damage",
"Health",
"NonbootsMovement",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 200,
FlatPhysicalDamageMod: 15
},
effect: {
Effect1Amount: "20",
Effect2Amount: "2",
Effect3Amount: "60"
},
depth: 2
},
3046: {
name: "Phantom Dancer",
description: "<stats>+45% Attack Speed<br>+30% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Spectral Waltz:</unique> While within 550 units of an enemy champion you can see, +7% Movement Speed and you can move through units.<br><unique>UNIQUE Passive - Lament:</unique> The last champion hit deals 12% less damage to you (ends after 10 seconds of not hitting).",
colloq: ";pd",
plaintext: "Move faster near enemies and reduce incoming damage",
from: [
"1042",
"3086",
"1042"
],
into: [ ],
image: {
full: "3046.png",
sprite: "item0.png",
group: "item",
x: 144,
y: 432,
w: 48,
h: 48
},
gold: {
base: 650,
purchasable: true,
total: 2550,
sell: 1785
},
tags: [
"AttackSpeed",
"CriticalStrike",
"NonbootsMovement"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentMovementSpeedMod: 0.05,
PercentAttackSpeedMod: 0.45,
FlatCritChanceMod: 0.3
},
effect: {
Effect1Amount: "0.12",
Effect2Amount: "10",
Effect3Amount: "550",
Effect4Amount: "0.07"
},
depth: 3
},
3047: {
name: "Ninja Tabi",
description: "<stats>+30 Armor</stats><br><br><unique>UNIQUE Passive:</unique> Blocks 12% of the damage from basic attacks.<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed",
colloq: ";",
plaintext: "Enhances Movement Speed and reduces incoming basic attack damage",
from: [
"1001",
"1029"
],
into: [
"1318",
"1317"
],
image: {
full: "3047.png",
sprite: "item0.png",
group: "item",
x: 192,
y: 432,
w: 48,
h: 48
},
gold: {
base: 500,
purchasable: true,
total: 1100,
sell: 770
},
tags: [
"Armor",
"Boots"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 30,
FlatMovementSpeedMod: 45
},
effect: {
Effect1Amount: "0.12"
},
depth: 2
},
3048: {
name: "Seraph's Embrace",
description: "<stats>+80 Ability Power<br><mana>+1000 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Grants Ability Power equal to 3% of maximum Mana. Refunds 25% of Mana spent.</mana><br><active>UNIQUE Active - Mana Shield:</active> Consumes 20% of current Mana to grant a shield for 3 seconds that absorbs damage equal to 150 plus the amount of Mana consumed (120 second cooldown).",
colloq: ";",
plaintext: "",
from: [
"3007"
],
specialRecipe: 3007,
inStore: false,
into: [ ],
image: {
full: "3048.png",
sprite: "item0.png",
group: "item",
x: 240,
y: 432,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 2170
},
tags: [
"Active"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 1000,
FlatMagicDamageMod: 80
},
effect: {
Effect1Amount: "0.03",
Effect2Amount: "0.2",
Effect3Amount: "3",
Effect4Amount: "150",
Effect5Amount: "120",
Effect6Amount: "0",
Effect7Amount: "0.25"
},
depth: 4
},
3050: {
name: "Zeke's Harbinger",
description: "<stats><mana>+250 Mana</mana><br>+30 Armor<br>+50 Ability Power<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Conduit:</active> Bind to target ally (60 second cooldown).<br><unique>UNIQUE Passive:</unique> When within 1000 units of each other, you and your ally generate Charges. Attacking or casting spells generates extra Charges. At 100 Charges, causing damage consumes them, increasing your and your ally's Ability Power by 20% and Critical Strike Chance by 50% for 8 seconds. ",
colloq: ";haroldandkumar",
plaintext: "Grants an ally bursts of Critical Strike Chance and Ability Power",
from: [
"1052",
"3024",
"1052"
],
into: [ ],
image: {
full: "3050.png",
sprite: "item0.png",
group: "item",
x: 288,
y: 432,
w: 48,
h: 48
},
gold: {
base: 380,
purchasable: true,
total: 2250,
sell: 1575
},
tags: [
"Active",
"Armor",
"Aura",
"CooldownReduction",
"Mana",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 250,
FlatArmorMod: 30,
FlatMagicDamageMod: 50
},
effect: {
Effect1Amount: "-0.1",
Effect2Amount: "1",
Effect3Amount: "0.5",
Effect4Amount: "0.2",
Effect5Amount: "1000",
Effect6Amount: "100",
Effect7Amount: "8",
Effect8Amount: "10"
},
depth: 3
},
3052: {
name: "Jaurim's Fist",
description: "<stats>+15 Attack Damage<br>+150 Health</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 5 maximum Health. This bonus stacks up to 30 times.",
colloq: ";enforcer",
plaintext: "Attack Damage and stacking Health on Unit Kill",
from: [
"1036",
"1028"
],
into: [
"3022",
"3053",
"3104",
"3748"
],
image: {
full: "3052.png",
sprite: "item0.png",
group: "item",
x: 336,
y: 432,
w: 48,
h: 48
},
gold: {
base: 450,
purchasable: true,
total: 1200,
sell: 840
},
tags: [
"Damage",
"Health"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 150,
FlatPhysicalDamageMod: 15
},
effect: {
Effect1Amount: "30",
Effect2Amount: "5",
Effect3Amount: "2",
Effect4Amount: "150"
},
depth: 2
},
3053: {
name: "Sterak's Gage",
description: "<stats>+400 Health<br>+25% Base Attack Damage </stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking at least 400 to 1800 damage (based on level) within 5 seconds, gain a rapidly decaying Shield for 30% of your maximum Health for 8 seconds (60 second cooldown).<br><br><unlockedPassive>Sterak's Fury:</unlockedPassive> When <i>Lifeline</i> triggers, grow in size and strength, gaining +25% additional Base Attack Damage.",
colloq: ";juggernaut;primal",
plaintext: "Shields against large bursts of damage",
from: [
"3052",
"1036"
],
into: [ ],
image: {
full: "3053.png",
sprite: "item0.png",
group: "item",
x: 384,
y: 432,
w: 48,
h: 48
},
gold: {
base: 1050,
purchasable: true,
total: 2600,
sell: 1820
},
tags: [
"Damage",
"Health"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 400
},
effect: {
Effect1Amount: "400",
Effect2Amount: "0.25",
Effect3Amount: "5",
Effect4Amount: "0.3",
Effect5Amount: "0",
Effect6Amount: "8",
Effect7Amount: "60",
Effect8Amount: "3"
},
depth: 3
},
3056: {
name: "Ohmwrecker",
description: "<stats>+300 Health<br>+50 Armor<br>+150% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active:</active> Prevents nearby enemy turrets from attacking for 3 seconds (120 second cooldown). This effect cannot be used against the same turret more than once every 8 seconds.<br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets (including fallen turrets) and Void Gates.",
colloq: ";",
plaintext: "Temporarily disables enemy turrets",
from: [
"2053",
"3067"
],
into: [ ],
image: {
full: "3056.png",
sprite: "item0.png",
group: "item",
x: 432,
y: 432,
w: 48,
h: 48
},
gold: {
base: 650,
purchasable: true,
total: 2650,
sell: 1855
},
tags: [
"Active",
"Armor",
"CooldownReduction",
"Health",
"HealthRegen",
"NonbootsMovement"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 300,
FlatArmorMod: 50
},
effect: {
Effect1Amount: "3",
Effect2Amount: "120",
Effect3Amount: "8",
Effect4Amount: "0.2",
Effect5Amount: "1"
},
depth: 4
},
3057: {
name: "Sheen",
description: "<stats><mana>+250 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% base Attack Damage on hit (1.5 second cooldown).",
colloq: ";",
plaintext: "Grants a bonus to next attack after spell cast",
from: [
"1027"
],
into: [
"3078",
"3100",
"3025"
],
image: {
full: "3057.png",
sprite: "item1.png",
group: "item",
x: 0,
y: 0,
w: 48,
h: 48
},
gold: {
base: 700,
purchasable: true,
total: 1050,
sell: 735
},
tags: [
"CooldownReduction",
"Mana"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 250
},
effect: {
Effect1Amount: "1.5",
Effect2Amount: "1"
},
depth: 2
},
3060: {
name: "Banner of Command",
description: "<stats>+60 Armor<br>+30 Magic Resist<br><mana>+400 Mana</mana><br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Promote:</active> Greatly increases the power of a lane minion and grants it immunity to magic damage (120 second cooldown).",
colloq: ";flag",
plaintext: "Promotes a siege minion to a more powerful unit",
from: [
"3105",
"3024"
],
into: [ ],
image: {
full: "3060.png",
sprite: "item1.png",
group: "item",
x: 48,
y: 0,
w: 48,
h: 48
},
gold: {
base: 100,
purchasable: true,
total: 2200,
sell: 1540
},
tags: [
"Active",
"Armor",
"CooldownReduction",
"Mana",
"SpellBlock"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 400,
FlatArmorMod: 60,
FlatSpellBlockMod: 30
},
effect: {
Effect1Amount: "0.5",
Effect2Amount: "15",
Effect3Amount: "0.75"
},
depth: 3
},
3065: {
name: "Spirit Visage",
description: "<stats>+500 Health<br>+55 Magic Resist<br>+200% Base Health Regen <br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Increases all healing received by 25%.",
colloq: ";sv",
plaintext: "Increases Health and healing effects",
from: [
"3211",
"3067"
],
into: [ ],
image: {
full: "3065.png",
sprite: "item1.png",
group: "item",
x: 96,
y: 0,
w: 48,
h: 48
},
gold: {
base: 800,
purchasable: true,
total: 2800,
sell: 1960
},
tags: [
"CooldownReduction",
"Health",
"HealthRegen",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 500,
FlatSpellBlockMod: 55
},
effect: {
Effect1Amount: "-0.1",
Effect2Amount: "0.25",
Effect3Amount: "0.5",
Effect4Amount: "0.015"
},
depth: 3
},
3067: {
name: "Kindlegem",
description: "<stats>+200 Health </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
colloq: ";",
plaintext: "Increases Health and Cooldown Reduction",
from: [
"1028"
],
into: [
"3187",
"3401",
"3065",
"3056",
"3083",
"3152"
],
image: {
full: "3067.png",
sprite: "item1.png",
group: "item",
x: 144,
y: 0,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 800,
sell: 560
},
tags: [
"CooldownReduction",
"Health"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 200
},
effect: {
Effect1Amount: "-0.1"
},
depth: 2
},
3068: {
name: "Sunfire Cape",
description: "<stats>+500 Health<br>+50 Armor </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 25 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.",
colloq: ";",
plaintext: "Constantly deals damage to nearby enemies",
from: [
"1031",
"3751"
],
into: [ ],
image: {
full: "3068.png",
sprite: "item1.png",
group: "item",
x: 192,
y: 0,
w: 48,
h: 48
},
gold: {
base: 1000,
purchasable: true,
total: 2900,
sell: 2030
},
tags: [
"Armor",
"Health"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 500,
FlatArmorMod: 50
},
effect: {
Effect1Amount: "25",
Effect2Amount: "1",
Effect3Amount: "0.5"
},
depth: 3
},
3069: {
name: "Talisman of Ascension",
description: "<stats>+45 Armor<br>+150% Base Health Regen <br><mana>+75% Base Mana Regen <br></mana>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.<br><unique>UNIQUE Passive - Favor:</unique> Being near a minion's death without dealing the killing blow grants 6 Gold and 10 Health.<br><active>UNIQUE Active:</active> Grants nearby allies +40% Movement Speed for 3 seconds (60 second cooldown).<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules><font color='#447777'>''Praise the sun.'' - Historian Shurelya, 22 September, 25 CLE</font></rules>",
colloq: ";shurelya;reverie",
plaintext: "Increases Health / Mana Regeneration and Cooldown Reduction. Activate to speed up nearby allies.",
from: [
"3096",
"2053"
],
into: [ ],
image: {
full: "3069.png",
sprite: "item1.png",
group: "item",
x: 240,
y: 0,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 2400,
sell: 960
},
tags: [
"Active",
"Armor",
"CooldownReduction",
"GoldPer",
"HealthRegen",
"ManaRegen",
"NonbootsMovement"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 45
},
effect: {
Effect1Amount: "-0.1",
Effect2Amount: "2",
Effect3Amount: "6",
Effect4Amount: "10",
Effect5Amount: "0.4",
Effect6Amount: "3",
Effect7Amount: "60",
Effect8Amount: "20"
},
depth: 4
},
3070: {
name: "Tear of the Goddess",
description: "<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 4 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds).<br><br>Caps at +750 Mana.</mana>",
colloq: ";",
plaintext: "Increases maximum Mana as Mana is spent",
from: [
"1027",
"1004"
],
into: [
"3003",
"3004"
],
image: {
full: "3070.png",
sprite: "item1.png",
group: "item",
x: 288,
y: 0,
w: 48,
h: 48
},
gold: {
base: 275,
purchasable: true,
total: 750,
sell: 525
},
tags: [
"Mana",
"ManaRegen"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 250
},
effect: {
Effect1Amount: "4",
Effect2Amount: "8",
Effect3Amount: "1",
Effect4Amount: "8",
Effect5Amount: "750",
Effect6Amount: "2",
Effect7Amount: "0.15"
},
depth: 2
},
3071: {
name: "The Black Cleaver",
description: "<stats>+300 Health<br>+50 Attack Damage<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage to an enemy champion Cleaves them, reducing their Armor by 5% for 6 seconds (stacks up to 6 times, up to 30%).<br><unique>UNIQUE Passive - Rage:</unique> Dealing physical damage grants 20 movement speed for 2 seconds. Assists on Cleaved enemy champions or kills on any unit grant 60 movement speed for 2 seconds instead. This Movement Speed is halved for ranged champions.",
colloq: ";bc",
plaintext: "Dealing physical damage to enemy champions reduces their Armor",
from: [
"3044",
"3133"
],
into: [ ],
image: {
full: "3071.png",
sprite: "item1.png",
group: "item",
x: 336,
y: 0,
w: 48,
h: 48
},
gold: {
base: 750,
purchasable: true,
total: 3100,
sell: 2170
},
tags: [
"ArmorPenetration",
"CooldownReduction",
"Damage",
"Health",
"NonbootsMovement",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 300,
FlatPhysicalDamageMod: 50
},
effect: {
Effect1Amount: "-0.2",
Effect2Amount: "0.05",
Effect3Amount: "6",
Effect4Amount: "6",
Effect5Amount: "0.3",
Effect6Amount: "20",
Effect7Amount: "2",
Effect8Amount: "60"
},
depth: 3
},
3072: {
name: "The Bloodthirster",
description: "<stats>+75 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +20% Life Steal<br><unique>UNIQUE Passive:</unique> Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.<br><br>This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.",
colloq: ";bt",
plaintext: "Grants Attack Damage, Life Steal and Life Steal now overheals",
from: [
"1038",
"1036",
"1053"
],
into: [ ],
image: {
full: "3072.png",
sprite: "item1.png",
group: "item",
x: 384,
y: 0,
w: 48,
h: 48
},
gold: {
base: 1150,
purchasable: true,
total: 3700,
sell: 2590
},
tags: [
"Damage",
"LifeSteal"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 75
},
effect: {
Effect1Amount: "50",
Effect2Amount: "350",
Effect3Amount: "25",
Effect4Amount: "0.2"
},
depth: 3
},
3073: {
name: "Tear of the Goddess (Quick Charge)",
description: "<stats><mana>+250 Mana</mana></stats><br><br><mana><unique>UNIQUE Passive - Awe:</unique> Refunds 15% of Mana spent.<br><unique>UNIQUE Passive - Mana Charge:</unique> Grants 6 maximum Mana on spell cast or Mana expenditure (up to 2 times per 8 seconds).<br><br>Caps at +750 Mana.</mana>",
colloq: ";",
plaintext: "Increases maximum Mana as Mana is spent",
from: [
"1027",
"1004"
],
into: [
"3007",
"3008"
],
image: {
full: "3073.png",
sprite: "item1.png",
group: "item",
x: 432,
y: 0,
w: 48,
h: 48
},
gold: {
base: 275,
purchasable: true,
total: 750,
sell: 525
},
tags: [
"Mana",
"ManaRegen"
],
maps: {
1: false,
8: true,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatMPPoolMod: 250
},
effect: {
Effect1Amount: "6",
Effect2Amount: "8",
Effect3Amount: "1",
Effect4Amount: "8",
Effect5Amount: "750",
Effect6Amount: "2",
Effect7Amount: "0.15"
},
depth: 2
},
3074: {
name: "Ravenous Hydra",
description: "<stats>+75 Attack Damage<br>+100% Base Health Regen <br>+12% Life Steal</stats><br><br><passive>Passive:</passive> 50% of total Life Steal applies to damage dealt by this item.<br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (closest enemies take the most damage) (10 second cooldown).",
colloq: ";",
plaintext: "Melee attacks hit nearby enemies, dealing damage and restoring Health",
from: [
"3077",
"1053",
"1037"
],
into: [ ],
image: {
full: "3074.png",
sprite: "item1.png",
group: "item",
x: 0,
y: 48,
w: 48,
h: 48
},
gold: {
base: 525,
purchasable: true,
total: 3500,
sell: 2450
},
tags: [
"Active",
"Damage",
"HealthRegen",
"LifeSteal",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 75,
PercentLifeStealMod: 0.12
},
effect: {
Effect1Amount: "0.2",
Effect2Amount: "0.6",
Effect3Amount: "0.6",
Effect4Amount: "1",
Effect5Amount: "10"
},
depth: 3
},
3075: {
name: "Thornmail",
description: "<stats>+100 Armor </stats><br><br><unique>UNIQUE Passive:</unique> Upon being hit by a basic attack, reflects magic damage back to the attacker equal to 25% of your bonus Armor plus 15% of the incoming damage.<br><br><rules>(Bonus Armor is Armor from items, buffs, runes and masteries.)</rules><br><rules>(Reflect damage is calculated based on damage taken before being reduced by Armor.)</rules>",
colloq: ";",
plaintext: "Returns damage taken from basic attacks as magic damage",
from: [
"1029",
"1031"
],
into: [ ],
image: {
full: "3075.png",
sprite: "item1.png",
group: "item",
x: 48,
y: 48,
w: 48,
h: 48
},
gold: {
base: 1250,
purchasable: true,
total: 2350,
sell: 1645
},
tags: [
"Armor"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 100
},
effect: {
Effect1Amount: "0.15",
Effect2Amount: "0.25"
},
depth: 3
},
3077: {
name: "Tiamat",
description: "<stats>+20 Attack Damage<br>+50% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 20% to 60% of total Attack Damage as bonus physical damage to enemies near the target on hit (enemies closest to the target take the most damage).<br><active>UNIQUE Active - Crescent:</active> Deals 60% to 100% of total Attack Damage as physical damage to nearby enemy units (enemies closest to the target take the most damage) (10 second cooldown).",
colloq: ";",
plaintext: "Melee attacks hit nearby enemies",
from: [
"1036",
"1006",
"1036"
],
into: [
"3074",
"3748"
],
image: {
full: "3077.png",
sprite: "item1.png",
group: "item",
x: 96,
y: 48,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 1200,
sell: 840
},
tags: [
"Active",
"Damage",
"HealthRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 20
},
effect: {
Effect1Amount: "0.2",
Effect2Amount: "0.6",
Effect3Amount: "0.6",
Effect4Amount: "1",
Effect5Amount: "10"
},
depth: 2
},
3078: {
name: "Trinity Force",
description: "<stats>+250 Health<br><mana>+250 Mana</mana><br>+25 Attack Damage<br>+40% Attack Speed<br>+20% Cooldown Reduction<br>+5% Movement Speed</stats><br><br><unique>UNIQUE Passive - Rage:</unique> Basic attacks grant 20 Movement Speed for 2 seconds. Kills grant 60 Movement Speed instead. This Movement Speed bonus is halved for ranged champions.<br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 200% of base Attack Damage on hit (1.5 second cooldown).",
colloq: ";triforce;tons of damage",
plaintext: "Tons of Damage",
from: [
"3101",
"3057",
"3044"
],
into: [ ],
image: {
full: "3078.png",
sprite: "item1.png",
group: "item",
x: 144,
y: 48,
w: 48,
h: 48
},
gold: {
base: 333,
purchasable: true,
total: 3733,
sell: 2613
},
tags: [
"AttackSpeed",
"CooldownReduction",
"Damage",
"Health",
"Mana",
"NonbootsMovement",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 250,
FlatMPPoolMod: 250,
FlatPhysicalDamageMod: 25,
PercentMovementSpeedMod: 0.05,
PercentAttackSpeedMod: 0.4
},
effect: {
Effect1Amount: "20",
Effect2Amount: "60",
Effect3Amount: "2",
Effect4Amount: "2",
Effect5Amount: "1.5"
},
depth: 3
},
3082: {
name: "Warden's Mail",
description: "<stats>+40 Armor</stats><br><br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% for 1 seconds.",
colloq: ";",
plaintext: "Slows Attack Speed of enemy champions when receiving basic attacks",
from: [
"1029",
"1029"
],
into: [
"3110",
"3143"
],
image: {
full: "3082.png",
sprite: "item1.png",
group: "item",
x: 192,
y: 48,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 1000,
sell: 700
},
tags: [
"Armor",
"Slow"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 40
},
effect: {
Effect1Amount: "-0.15",
Effect2Amount: "1"
},
depth: 2
},
3083: {
name: "Warmog's Armor",
description: "<stats>+800 Health<br>+200% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Grants <unlockedPassive>Warmog's Heart</unlockedPassive> if you have at least 3000 maximum Health.<br><br><unlockedPassive>Warmog's Heart:</unlockedPassive> Restores 15% of maximum Health every 5 seconds if damage hasn't been taken within 8 seconds. ",
colloq: ";",
plaintext: "Grants massive Health and Health Regen",
from: [
"1011",
"3067",
"3801"
],
into: [ ],
image: {
full: "3083.png",
sprite: "item1.png",
group: "item",
x: 240,
y: 48,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 2850,
sell: 1995
},
tags: [
"CooldownReduction",
"Health",
"HealthRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 800
},
effect: {
Effect1Amount: "0.015",
Effect2Amount: "5",
Effect3Amount: "0.15",
Effect4Amount: "3000",
Effect5Amount: "8",
Effect6Amount: "-0.1"
},
depth: 3
},
3084: {
name: "Overlord's Bloodmail",
description: "<stats>+800 Health<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive:</unique> Upon champion kill or assist, restores 300 Health over 5 seconds.",
colloq: ";",
plaintext: "Restores Health on kill or assist",
from: [
"1011",
"3801"
],
into: [ ],
image: {
full: "3084.png",
sprite: "item1.png",
group: "item",
x: 288,
y: 48,
w: 48,
h: 48
},
gold: {
base: 900,
purchasable: true,
total: 2550,
sell: 1785
},
tags: [
"Health",
"HealthRegen"
],
maps: {
1: false,
8: false,
10: false,
11: false,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 800
},
effect: {
Effect1Amount: "300",
Effect2Amount: "5"
},
depth: 3
},
3085: {
name: "Runaan's Hurricane",
description: "<stats>+40% Attack Speed<br>+30% Critical Strike Chance<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Wind's Fury:</unique> When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (25% of Attack Damage) physical damage. Bolts can critically strike and apply on hit effects.<br><unique>UNIQUE Passive:</unique> Basic attacks deal an additional 15 physical damage on hit.",
colloq: ";",
plaintext: "Ranged attacks fire two bolts at nearby enemies",
from: [
"1043",
"3086"
],
into: [ ],
image: {
full: "3085.png",
sprite: "item1.png",
group: "item",
x: 336,
y: 48,
w: 48,
h: 48
},
gold: {
base: 300,
purchasable: true,
total: 2600,
sell: 1820
},
tags: [
"AttackSpeed",
"CriticalStrike",
"NonbootsMovement",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentMovementSpeedMod: 0.07,
PercentAttackSpeedMod: 0.4,
FlatCritChanceMod: 0.3
},
effect: {
Effect1Amount: "0",
Effect2Amount: "25",
Effect3Amount: "2",
Effect4Amount: "15",
Effect5Amount: "25",
Effect6Amount: "1"
},
depth: 3
},
3086: {
name: "Zeal",
description: "<stats>+15% Attack Speed<br>+20% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed",
colloq: ";",
plaintext: "Slight bonuses to Critical Strike Chance, Movement Speed and Attack Speed",
from: [
"1051",
"1042"
],
into: [
"3046",
"3085",
"3087",
"3094"
],
image: {
full: "3086.png",
sprite: "item1.png",
group: "item",
x: 384,
y: 48,
w: 48,
h: 48
},
gold: {
base: 600,
purchasable: true,
total: 1300,
sell: 910
},
tags: [
"AttackSpeed",
"CriticalStrike",
"NonbootsMovement"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentAttackSpeedMod: 0.15,
FlatCritChanceMod: 0.2
},
effect: {
Effect1Amount: "0.05"
},
depth: 2
},
3087: {
name: "Statikk Shiv",
description: "<stats>+35% Attack Speed<br>+30% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Shiv Lightning:</unique> Your Energized attacks deal 50~120 bonus magic damage (based on level) to up to 5 targets on hit (deals +120% bonus damage to minions and can critically strike).",
colloq: ";",
plaintext: "Movement builds charges that release chain lightning on basic attack",
from: [
"3086",
"2015"
],
into: [ ],
image: {
full: "3087.png",
sprite: "item1.png",
group: "item",
x: 432,
y: 48,
w: 48,
h: 48
},
gold: {
base: 550,
purchasable: true,
total: 2600,
sell: 1820
},
tags: [
"AttackSpeed",
"CriticalStrike",
"NonbootsMovement",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentMovementSpeedMod: 0.05,
PercentAttackSpeedMod: 0.35,
FlatCritChanceMod: 0.3
},
effect: {
Effect1Amount: "100",
Effect2Amount: "80",
Effect3Amount: "5",
Effect4Amount: "750",
Effect5Amount: "50",
Effect6Amount: "120",
Effect7Amount: "5",
Effect8Amount: "1.2"
},
depth: 3
},
3089: {
name: "Rabadon's Deathcap",
description: "<stats>+120 Ability Power </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 35%.",
colloq: ";dc;banksys;hat",
plaintext: "Massively increases Ability Power",
from: [
"1026",
"1058",
"1052"
],
into: [ ],
image: {
full: "3089.png",
sprite: "item1.png",
group: "item",
x: 0,
y: 96,
w: 48,
h: 48
},
gold: {
base: 1265,
purchasable: true,
total: 3800,
sell: 2660
},
tags: [
"SpellDamage"
],
maps: {
1: false,
8: true,
10: false,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 120
},
effect: {
Effect1Amount: "35"
},
depth: 2
},
3090: {
name: "Wooglet's Witchcap",
description: "<stats>+100 Ability Power<br>+45 Armor </stats><br><br><unique>UNIQUE Passive:</unique> Increases Ability Power by 25%<br><active>UNIQUE Active:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).",
colloq: ";hat",
plaintext: "Massively increases Ability Power and can be activated to enter stasis",
from: [
"3191",
"1058"
],
into: [ ],
image: {
full: "3090.png",
sprite: "item1.png",
group: "item",
x: 48,
y: 96,
w: 48,
h: 48
},
gold: {
base: 1050,
purchasable: true,
total: 3500,
sell: 2450
},
tags: [
"Active",
"Armor",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: false,
12: false,
14: false
},
stats: {
FlatArmorMod: 45,
FlatMagicDamageMod: 100
},
effect: {
Effect1Amount: "25",
Effect2Amount: "2.5",
Effect3Amount: "120"
},
depth: 3
},
3091: {
name: "Wit's End",
description: "<stats>+40% Attack Speed<br>+40 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 40 bonus magic damage on hit.<br><unique>UNIQUE Passive:</unique> Basic attacks steal 5 Magic Resist from the target on hit (stacks up to 5 times.)",
colloq: ";",
plaintext: "Deals bonus magic damage on basic attacks",
from: [
"1043",
"1057",
"1042"
],
into: [ ],
image: {
full: "3091.png",
sprite: "item1.png",
group: "item",
x: 96,
y: 96,
w: 48,
h: 48
},
gold: {
base: 480,
purchasable: true,
total: 2500,
sell: 1750
},
tags: [
"AttackSpeed",
"OnHit",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentAttackSpeedMod: 0.4,
FlatSpellBlockMod: 40
},
effect: {
Effect1Amount: "40",
Effect2Amount: "5",
Effect3Amount: "5"
},
depth: 3
},
3092: {
name: "Frost Queen's Claim",
description: "<stats>+50 Ability Power<br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds<br><mana>+75% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Spells and basic attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds.<br><active>UNIQUE Active:</active> Summon 2 icy ghosts for 6 seconds that seek out nearby enemy champions. Ghosts reveal enemies on contact and reduce their Movement Speed by 40% for between 2 and 5 seconds based on how far the ghosts have traveled (90 second cooldown).<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
colloq: "spooky ghosts;",
plaintext: "Sends out seeking wraiths that track hidden enemies and slow them",
from: [
"3098",
"3108"
],
into: [ ],
image: {
full: "3092.png",
sprite: "item1.png",
group: "item",
x: 144,
y: 96,
w: 48,
h: 48
},
gold: {
base: 450,
purchasable: true,
total: 2200,
sell: 880
},
tags: [
"Active",
"CooldownReduction",
"GoldPer",
"ManaRegen",
"Slow",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 50
},
effect: {
Effect1Amount: "15",
Effect2Amount: "15",
Effect3Amount: "12",
Effect4Amount: "3",
Effect5Amount: "30",
Effect6Amount: "2",
Effect7Amount: "1",
Effect8Amount: "2"
},
depth: 3
},
3094: {
name: "Rapid Firecannon",
description: "<stats>+30% Attack Speed<br>+30% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Firecannon:</unique> Your Energized attacks gain 35% bonus Range (+150 range maximum) and deal 50~160 bonus magic damage (based on level) on hit.<br><br>Energized attacks function on structures.",
colloq: ";canon;rapidfire;rfc",
plaintext: "Movement builds charges that release a sieging fire attack on release",
from: [
"3086",
"2015"
],
into: [ ],
image: {
full: "3094.png",
sprite: "item1.png",
group: "item",
x: 192,
y: 96,
w: 48,
h: 48
},
gold: {
base: 550,
purchasable: true,
total: 2600,
sell: 1820
},
tags: [
"AttackSpeed",
"CriticalStrike",
"NonbootsMovement",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentMovementSpeedMod: 0.05,
PercentAttackSpeedMod: 0.3,
FlatCritChanceMod: 0.3
},
effect: {
Effect1Amount: "0.35",
Effect2Amount: "150",
Effect3Amount: "50",
Effect4Amount: "160",
Effect5Amount: "5"
},
depth: 3
},
3096: {
name: "Nomad's Medallion",
description: "<stats>+25% Base Health Regen <br><mana>+75% Base Mana Regen </mana><br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Being near a minion's death without dealing the killing blow grants 6 Gold and 10 Health.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><rules><font color='#447777'>''The medallion shines with the glory of a thousand voices when exposed to the sun.'' - Historian Shurelya, 22 June, 24 CLE</font></rules>",
colloq: ";",
plaintext: "Grants gold when nearby enemy minions die, Health Regen and Mana Regen",
from: [
"1004",
"3301"
],
into: [
"2302",
"3069"
],
image: {
full: "3096.png",
sprite: "item1.png",
group: "item",
x: 240,
y: 96,
w: 48,
h: 48
},
gold: {
base: 375,
purchasable: true,
total: 850,
sell: 340
},
tags: [
"Active",
"CooldownReduction",
"GoldPer",
"HealthRegen",
"ManaRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "0",
Effect2Amount: "6",
Effect3Amount: "10",
Effect4Amount: "10"
},
depth: 2
},
3097: {
name: "Targon's Brace",
description: "<stats>+175 Health<br>+50% Base Health Regen <br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 200 (+10 per level) Health. Killing a minion heals the owner and the nearest allied champion for 40 Health and grants them kill Gold.<br><br>These effects require a nearby ally. Recharges every 30 seconds. Max 3 charges.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
colloq: ";",
plaintext: "Periodically kill enemy minions to heal and grant gold to a nearby ally",
from: [
"3302",
"1006"
],
into: [
"2303",
"3401"
],
image: {
full: "3097.png",
sprite: "item1.png",
group: "item",
x: 288,
y: 96,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 850,
sell: 340
},
tags: [
"Aura",
"GoldPer",
"Health",
"HealthRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 175
},
effect: {
Effect1Amount: "200",
Effect2Amount: "40",
Effect3Amount: "30",
Effect4Amount: "3",
Effect5Amount: "2",
Effect6Amount: "10"
},
depth: 2
},
3098: {
name: "Frostfang",
description: "<stats>+15 Ability Power<br>+2 Gold per 10 seconds<br><mana>+75% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Spells and basic attacks against champions or buildings deal 15 additional damage and grant 15 Gold. This can occur up to 3 times every 30 seconds. Killing a minion disables this passive for 12 seconds.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
colloq: ";",
plaintext: "Grants gold when you damage an enemy with a Spell or Attack",
from: [
"3303",
"1004"
],
into: [
"2301",
"3092"
],
image: {
full: "3098.png",
sprite: "item1.png",
group: "item",
x: 336,
y: 96,
w: 48,
h: 48
},
gold: {
base: 375,
purchasable: true,
total: 850,
sell: 340
},
tags: [
"Active",
"GoldPer",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 15
},
effect: {
Effect1Amount: "15",
Effect2Amount: "15",
Effect3Amount: "12",
Effect4Amount: "3",
Effect5Amount: "30",
Effect6Amount: "2"
},
depth: 2
},
3100: {
name: "Lich Bane",
description: "<stats>+80 Ability Power<br>+7% Movement Speed<br>+10% Cooldown Reduction<br><mana>+250 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals 75% Base Attack Damage (+50% of Ability Power) bonus magic damage on hit (1.5 second cooldown).",
colloq: ";",
plaintext: "Grants a bonus to next attack after spell cast",
from: [
"3057",
"3113",
"1026"
],
into: [ ],
image: {
full: "3100.png",
sprite: "item1.png",
group: "item",
x: 384,
y: 96,
w: 48,
h: 48
},
gold: {
base: 450,
purchasable: true,
total: 3200,
sell: 2240
},
tags: [
"CooldownReduction",
"Mana",
"NonbootsMovement",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 250,
FlatMagicDamageMod: 80,
PercentMovementSpeedMod: 0.07
},
effect: {
Effect1Amount: "0.75",
Effect2Amount: "0.5",
Effect3Amount: "1.5"
},
depth: 3
},
3101: {
name: "Stinger",
description: "<stats>+35% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
colloq: ";",
plaintext: "Increased Attack Speed and Cooldown Reduction",
from: [
"1042",
"1042"
],
into: [
"3115",
"3137",
"3078"
],
image: {
full: "3101.png",
sprite: "item1.png",
group: "item",
x: 432,
y: 96,
w: 48,
h: 48
},
gold: {
base: 500,
purchasable: true,
total: 1100,
sell: 770
},
tags: [
"AttackSpeed",
"CooldownReduction"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentAttackSpeedMod: 0.35
},
effect: {
Effect1Amount: "10"
},
depth: 2
},
3102: {
name: "Banshee's Veil",
description: "<stats>+300 Health<br>+70 Magic Resist<br>+100% Base Health Regeneration </stats><br><br><unique>UNIQUE Passive:</unique> Grants a spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.",
colloq: ";bv",
plaintext: "Periodically blocks enemy abilities",
from: [
"3211",
"1057"
],
into: [ ],
image: {
full: "3102.png",
sprite: "item1.png",
group: "item",
x: 0,
y: 144,
w: 48,
h: 48
},
gold: {
base: 530,
purchasable: true,
total: 2450,
sell: 1715
},
tags: [
"Health",
"HealthRegen",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 300,
FlatSpellBlockMod: 70
},
effect: {
Effect1Amount: "40",
Effect2Amount: "45",
Effect3Amount: "10"
},
depth: 3
},
3104: {
name: "Lord Van Damm's Pillager",
description: "<stats>+300 Health<br>+50 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Ashes to Ashes:</unique> Controlling the nearest Altar sets you aflame, dealing 25 (+1 per champion level) magic damage per second to nearby enemies (Deals 50% bonus damage to minions and monsters). Controlling the furthest Altar causes your basic attacks to burn targets for up to 114 true damage (based on champion level) over 3 seconds.",
colloq: "lvd;",
plaintext: "Reduces Armor of nearby enemies",
from: [
"3133",
"3052"
],
into: [ ],
image: {
full: "3104.png",
sprite: "item1.png",
group: "item",
x: 48,
y: 144,
w: 48,
h: 48
},
gold: {
base: 700,
purchasable: true,
total: 3000,
sell: 2100
},
tags: [
"ArmorPenetration",
"Aura",
"CooldownReduction",
"Damage",
"Health",
"OnHit"
],
maps: {
1: false,
8: false,
10: true,
11: false,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 300,
FlatPhysicalDamageMod: 50
},
effect: {
Effect1Amount: "25",
Effect2Amount: "1",
Effect3Amount: "0.5"
},
depth: 3
},
3105: {
name: "Aegis of the Legion",
description: "<stats>+30 Armor<br>+30 Magic Resist</stats>",
colloq: ";",
plaintext: "Grants Armor and Magic Resistance",
from: [
"1033",
"1029"
],
into: [
"3190",
"3060"
],
image: {
full: "3105.png",
sprite: "item1.png",
group: "item",
x: 96,
y: 144,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 1100,
sell: 770
},
tags: [
"Armor",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 30,
FlatSpellBlockMod: 30
},
depth: 2
},
3107: {
name: "Redemption",
description: "<stats>+400 Health<br>+75% Base Health Regen <br>+75% Base Mana Regen <br>+10% Cooldown Reduction</stats><br><br><passive>UNIQUE Passive:</passive> +10% Heal and Shield Power<br><active>UNIQUE Active:</active> Target an area within 5500 range. After 2.5 seconds, call down a beam of light to heal allies for 130 (+20 per level of target) Health, burn enemy champions for 10% of their maximum Health as <font color='#FFFFFF'>true</font> damage and deal 250 <font color='#FFFFFF'>true</font> damage to enemy minions (120 second cooldown).<br><br>Can be used while dead.<br><br><rules>(Half effect if the target has been affected by another Redemption recently.)</rules>",
colloq: ";",
plaintext: "Further improves defenses for nearby allies",
from: [
"3114",
"3801"
],
into: [ ],
image: {
full: "3107.png",
sprite: "item2.png",
group: "item",
x: 192,
y: 192,
w: 48,
h: 48
},
gold: {
base: 650,
purchasable: true,
total: 2100,
sell: 1470
},
tags: [
"CooldownReduction",
"Health",
"HealthRegen",
"ManaRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 400
},
effect: {
Effect1Amount: "0.1",
Effect2Amount: "130",
Effect3Amount: "20",
Effect4Amount: "0.1",
Effect5Amount: "250",
Effect6Amount: "120",
Effect7Amount: "550",
Effect8Amount: "5500"
},
depth: 3
},
3108: {
name: "Fiendish Codex",
description: "<stats>+30 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
colloq: ";",
plaintext: "Increases Ability Power and Cooldown Reduction",
from: [
"1052"
],
into: [
"3174",
"3092",
"3115",
"3165",
"3001",
"3157"
],
image: {
full: "3108.png",
sprite: "item1.png",
group: "item",
x: 144,
y: 144,
w: 48,
h: 48
},
gold: {
base: 465,
purchasable: true,
total: 900,
sell: 630
},
tags: [
"CooldownReduction",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 30
},
effect: {
Effect1Amount: "-0.1"
},
depth: 2
},
3109: {
name: "Knight's Vow",
description: "<stats>+400 Health<br>+100% Base Health Regen <br>+20 Armor</stats><br><br><active>UNIQUE Active:</active> Designate an allied champion as your <a href='KnightsVowPartner'>Partner</a> (90 second cooldown).<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, gain +40 additional Armor and +15% Movement Speed towards them.<br><passive>UNIQUE Passive:</passive> If your <a href='KnightsVowPartner'>Partner</a> is nearby, heal for 12% of the damage your <a href='KnightsVowPartner'>Partner</a> deals to champions and redirect 12% of the damage your <a href='KnightsVowPartner'>Partner</a> takes from champions to you as <font color='#FFFFFF'>true</font> damage (healing and damage redirection are reduced by 50% if you are ranged).<br><br><rules>(Champions can only be linked by one Knight's Vow at a time.)</rules>",
colloq: ";",
plaintext: "Partner with an ally to protect each other",
from: [
"3801",
"1029",
"3801"
],
into: [ ],
image: {
full: "3109.png",
sprite: "item2.png",
group: "item",
x: 240,
y: 192,
w: 48,
h: 48
},
gold: {
base: 800,
purchasable: true,
total: 2400,
sell: 1680
},
tags: [
"Armor",
"Aura",
"Health",
"HealthRegen",
"NonbootsMovement"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 400,
FlatArmorMod: 20
},
effect: {
Effect1Amount: "40",
Effect2Amount: "0.15",
Effect3Amount: "0.12",
Effect4Amount: "0.12",
Effect5Amount: "90",
Effect6Amount: "0.5",
Effect7Amount: "900"
},
depth: 3
},
3110: {
name: "Frozen Heart",
description: "<stats>+90 Armor<br>+20% Cooldown Reduction<br><mana>+400 Mana</mana></stats><br><br><aura>UNIQUE Aura:</aura> Reduces the Attack Speed of nearby enemies by 15%.",
colloq: ";fh",
plaintext: "Massively increases Armor and slows enemy basic attacks",
from: [
"3082",
"3024"
],
into: [ ],
image: {
full: "3110.png",
sprite: "item1.png",
group: "item",
x: 192,
y: 144,
w: 48,
h: 48
},
gold: {
base: 700,
purchasable: true,
total: 2700,
sell: 1890
},
tags: [
"Armor",
"Aura",
"CooldownReduction",
"Mana"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 400,
FlatArmorMod: 90
},
effect: {
Effect1Amount: "-0.2",
Effect2Amount: "-0.15"
},
depth: 3
},
3111: {
name: "Mercury's Treads",
description: "<stats>+25 Magic Resist</stats><br><br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 30%.",
colloq: ";",
plaintext: "Increases Movement Speed and reduces duration of disabling effects",
from: [
"1001",
"1033"
],
into: [
"1323",
"1322"
],
image: {
full: "3111.png",
sprite: "item1.png",
group: "item",
x: 240,
y: 144,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 1100,
sell: 770
},
tags: [
"Boots",
"SpellBlock",
"Tenacity"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMovementSpeedMod: 45,
FlatSpellBlockMod: 25
},
depth: 2
},
3112: {
name: "Guardian's Orb",
description: "<stats>+150 Health<br>+30 Ability Power<br><mana>+10 Mana regen per 5 seconds</mana></stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
colloq: ";",
plaintext: "Good starting item for mages",
into: [ ],
image: {
full: "3112.png",
sprite: "item1.png",
group: "item",
x: 288,
y: 144,
w: 48,
h: 48
},
gold: {
base: 950,
purchasable: true,
total: 950,
sell: 380
},
tags: [
"Health",
"Lane",
"Mana",
"SpellDamage"
],
maps: {
1: false,
8: false,
10: false,
11: false,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 150,
FlatMPRegenMod: 2,
FlatMagicDamageMod: 30
}
},
3113: {
name: "Aether Wisp",
description: "<stats>+30 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +5% Movement Speed",
colloq: ";",
plaintext: "Increases Ability Power and Movement Speed",
from: [
"1052"
],
into: [
"3290",
"1402",
"1410",
"1414",
"3100",
"3285",
"3504",
"3673"
],
image: {
full: "3113.png",
sprite: "item1.png",
group: "item",
x: 336,
y: 144,
w: 48,
h: 48
},
gold: {
base: 415,
purchasable: true,
total: 850,
sell: 595
},
tags: [
"NonbootsMovement",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 30
},
effect: {
Effect1Amount: "0.05"
},
depth: 2
},
3114: {
name: "Forbidden Idol",
description: "<stats><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> +8% Heal and Shield Power",
colloq: ";",
plaintext: "Increases Mana Regeneration and Cooldown Reduction",
from: [
"1004",
"1004"
],
into: [
"3107",
"3222",
"3504"
],
image: {
full: "3114.png",
sprite: "item1.png",
group: "item",
x: 384,
y: 144,
w: 48,
h: 48
},
gold: {
base: 550,
purchasable: true,
total: 800,
sell: 560
},
tags: [
"CooldownReduction",
"ManaRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "-0.1",
Effect2Amount: "0.08"
},
depth: 2
},
3115: {
name: "Nashor's Tooth",
description: "<stats>+50% Attack Speed<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Basic attacks deal 15 (+15% of Ability Power) bonus magic damage on hit.<br>",
colloq: ";",
plaintext: "Increases Attack Speed, Ability Power, and Cooldown Reduction",
from: [
"3101",
"3108"
],
into: [ ],
image: {
full: "3115.png",
sprite: "item1.png",
group: "item",
x: 432,
y: 144,
w: 48,
h: 48
},
gold: {
base: 1000,
purchasable: true,
total: 3000,
sell: 2100
},
tags: [
"AttackSpeed",
"CooldownReduction",
"OnHit",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 80,
PercentAttackSpeedMod: 0.5
},
depth: 3
},
3116: {
name: "Rylai's Crystal Scepter",
description: "<stats>+300 Health<br>+75 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Damaging spells and abilities reduce enemy movement speed by 20% for 1 second.",
colloq: ";",
plaintext: "Abilities slow enemies",
from: [
"1026",
"1052",
"1028"
],
into: [ ],
image: {
full: "3116.png",
sprite: "item1.png",
group: "item",
x: 0,
y: 192,
w: 48,
h: 48
},
gold: {
base: 915,
purchasable: true,
total: 2600,
sell: 1820
},
tags: [
"Health",
"Slow",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 300,
FlatMagicDamageMod: 75
},
effect: {
Effect1Amount: "-0.2",
Effect2Amount: "-0.2",
Effect3Amount: "-0.2",
Effect4Amount: "1",
Effect5Amount: "1",
Effect6Amount: "1"
},
depth: 2
},
3117: {
name: "Boots of Mobility",
description: "<unique>UNIQUE Passive - Enhanced Movement:</unique> +25 Movement Speed. Increases to +115 Movement Speed when out of combat for 5 seconds.",
colloq: ";",
plaintext: "Greatly enhances Movement Speed when out of combat",
from: [
"1001"
],
into: [
"1328",
"1327"
],
image: {
full: "3117.png",
sprite: "item1.png",
group: "item",
x: 48,
y: 192,
w: 48,
h: 48
},
gold: {
base: 600,
purchasable: true,
total: 900,
sell: 630
},
tags: [
"Boots"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMovementSpeedMod: 115
},
effect: {
Effect1Amount: "0",
Effect2Amount: "0",
Effect3Amount: "0",
Effect4Amount: "0",
Effect5Amount: "0",
Effect6Amount: "0",
Effect7Amount: "0",
Effect8Amount: "25"
},
depth: 2
},
3122: {
name: "Wicked Hatchet",
description: "<stats>+20 Attack Damage<br>+10% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical Strikes cause your target to bleed for an additional 60% of your bonus Attack Damage as magic damage over 3 seconds.",
colloq: ";ie",
plaintext: "Critical Strikes cause your target to bleed",
from: [
"1051",
"1036"
],
into: [
"3104",
"3185"
],
image: {
full: "3122.png",
sprite: "item1.png",
group: "item",
x: 96,
y: 192,
w: 48,
h: 48
},
gold: {
base: 450,
purchasable: true,
total: 1200,
sell: 840
},
tags: [
"CriticalStrike",
"Damage",
"OnHit"
],
maps: {
1: false,
8: true,
10: false,
11: false,
12: false,
14: false
},
stats: {
FlatPhysicalDamageMod: 20,
FlatCritChanceMod: 0.1
},
effect: {
Effect1Amount: "0.6",
Effect2Amount: "3"
},
depth: 2
},
3123: {
name: "Executioner's Calling",
description: "<stats>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 3 seconds.",
colloq: ";grievous",
plaintext: "Overcomes enemies with high health gain",
from: [
"1036"
],
into: [
"3033"
],
image: {
full: "3123.png",
sprite: "item1.png",
group: "item",
x: 144,
y: 192,
w: 48,
h: 48
},
gold: {
base: 450,
purchasable: true,
total: 800,
sell: 560
},
tags: [
"Damage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 15
},
effect: {
Effect1Amount: "3"
},
depth: 2
},
3124: {
name: "Guinsoo's Rageblade",
description: "<stats>+35 Attack Damage<br>+50 Ability Power<br>+25% Attack Speed</stats><br><br><passive>Passive: </passive>Basic attacks deal an additional 15 magic damage on hit.<br><unique>UNIQUE Passive:</unique> Basic attacks grant +8% Attack Speed, +3 Attack Damage, and +4 Ability Power for 5 seconds (stacks up to 6 times). While you have 6 stacks, gain <unlockedPassive>Guinsoo's Rage</unlockedPassive>.<br><br><unlockedPassive>Guinsoo's Rage:</unlockedPassive> Every other basic attack will trigger on hit effects an additional time.",
colloq: ";",
plaintext: "Increases Ability Power and Attack Damage",
from: [
"1026",
"1043",
"1037"
],
into: [ ],
image: {
full: "3124.png",
sprite: "item1.png",
group: "item",
x: 192,
y: 192,
w: 48,
h: 48
},
gold: {
base: 875,
purchasable: true,
total: 3600,
sell: 2520
},
tags: [
"AttackSpeed",
"Damage",
"OnHit",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 35,
FlatMagicDamageMod: 50,
PercentAttackSpeedMod: 0.25
},
effect: {
Effect1Amount: "0.08",
Effect2Amount: "4",
Effect3Amount: "3",
Effect4Amount: "5",
Effect5Amount: "6",
Effect6Amount: "0",
Effect7Amount: "0",
Effect8Amount: "15"
},
depth: 3
},
3133: {
name: "Caulfield's Warhammer",
description: "<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction",
colloq: ";",
plaintext: "Attack Damage and Cooldown Reduction",
stacks: 0,
from: [
"1036",
"1036"
],
into: [
"3142",
"1400",
"1408",
"1412",
"3071",
"3104",
"3156",
"3508",
"3671",
"3812"
],
image: {
full: "3133.png",
sprite: "item1.png",
group: "item",
x: 240,
y: 192,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 1100,
sell: 770
},
tags: [
"CooldownReduction",
"Damage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 25
},
effect: {
Effect1Amount: "-0.1"
},
depth: 2
},
3134: {
name: "Serrated Dirk",
description: "<stats>+25 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +10 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat.",
colloq: ";lethality",
plaintext: "Increases Attack Damage and Lethality",
stacks: 0,
from: [
"1036",
"1036"
],
into: [
"3142",
"3147",
"3814"
],
image: {
full: "3134.png",
sprite: "item1.png",
group: "item",
x: 288,
y: 192,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 1100,
sell: 770
},
tags: [
"ArmorPenetration",
"Damage",
"NonbootsMovement"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 25
},
effect: {
Effect1Amount: "0",
Effect2Amount: "10",
Effect3Amount: "20"
},
depth: 2
},
3135: {
name: "Void Staff",
description: "<stats>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> +35% <a href='TotalMagicPen'>Magic Penetration</a>.",
colloq: ";",
plaintext: "Increases magic damage",
from: [
"1026",
"1052"
],
into: [ ],
image: {
full: "3135.png",
sprite: "item1.png",
group: "item",
x: 336,
y: 192,
w: 48,
h: 48
},
gold: {
base: 1365,
purchasable: true,
total: 2650,
sell: 1855
},
tags: [
"MagicPenetration",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 80
},
effect: {
Effect1Amount: "0.35"
},
depth: 2
},
3136: {
name: "Haunting Guise",
description: "<stats>+25 Ability Power<br>+200 Health</stats><br><br><unique>UNIQUE Passive - Eyes of Pain:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a>",
colloq: ";mask",
plaintext: "Increases magic damage",
stacks: 0,
from: [
"1028",
"1052"
],
into: [
"3151"
],
image: {
full: "3136.png",
sprite: "item1.png",
group: "item",
x: 384,
y: 192,
w: 48,
h: 48
},
gold: {
base: 665,
purchasable: true,
total: 1500,
sell: 1050
},
tags: [
"Health",
"MagicPenetration",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 200,
FlatMagicDamageMod: 25
},
effect: {
Effect1Amount: "15"
},
depth: 2
},
3137: {
name: "Dervish Blade",
description: "<stats>+50% Attack Speed<br>+45 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all debuffs, and if the champion is melee, also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
colloq: ";",
plaintext: "Activate to remove all debuffs and grant massive Movement Speed",
from: [
"3140",
"3101"
],
into: [ ],
image: {
full: "3137.png",
sprite: "item1.png",
group: "item",
x: 432,
y: 192,
w: 48,
h: 48
},
gold: {
base: 300,
purchasable: true,
total: 2700,
sell: 1890
},
tags: [
"Active",
"AttackSpeed",
"CooldownReduction",
"NonbootsMovement",
"SpellBlock"
],
maps: {
1: false,
8: false,
10: false,
11: false,
12: false,
14: false
},
stats: {
PercentAttackSpeedMod: 0.5,
FlatSpellBlockMod: 45
},
effect: {
Effect1Amount: "0.5",
Effect2Amount: "1",
Effect3Amount: "90"
},
depth: 3
},
3139: {
name: "Mercurial Scimitar",
description: "<stats>+65 Attack Damage<br>+35 Magic Resist<br>+10% Life Steal</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs and also grants +50% bonus Movement Speed for 1 second (90 second cooldown).",
colloq: ";",
plaintext: "Activate to remove all crowd control debuffs and grant massive Movement Speed",
from: [
"3140",
"1037",
"1053"
],
into: [ ],
image: {
full: "3139.png",
sprite: "item1.png",
group: "item",
x: 0,
y: 240,
w: 48,
h: 48
},
gold: {
base: 525,
purchasable: true,
total: 3600,
sell: 2520
},
tags: [
"Active",
"Damage",
"LifeSteal",
"NonbootsMovement",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 65,
FlatSpellBlockMod: 35,
PercentLifeStealMod: 0.1
},
effect: {
Effect1Amount: "0.5",
Effect2Amount: "1",
Effect3Amount: "90"
},
depth: 3
},
3140: {
name: "Quicksilver Sash",
description: "<stats>+30 Magic Resist</stats><br><br><active>UNIQUE Active - Quicksilver:</active> Removes all crowd control debuffs (90 second cooldown).",
colloq: ";qss",
plaintext: "Activate to remove all crowd control debuffs",
from: [
"1033"
],
into: [
"3139",
"3137"
],
image: {
full: "3140.png",
sprite: "item1.png",
group: "item",
x: 48,
y: 240,
w: 48,
h: 48
},
gold: {
base: 850,
purchasable: true,
total: 1300,
sell: 910
},
tags: [
"Active",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatSpellBlockMod: 30
},
effect: {
Effect1Amount: "90"
},
depth: 2
},
3142: {
name: "Youmuu's Ghostblade",
description: "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> +20 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat<br><active>UNIQUE Active:</active> Grants +20% Movement Speed for 6 seconds (45 second cooldown).",
colloq: ";lethality",
plaintext: "Activate to greatly increase Movement Speed",
from: [
"3133",
"3134"
],
into: [ ],
image: {
full: "3142.png",
sprite: "item1.png",
group: "item",
x: 96,
y: 240,
w: 48,
h: 48
},
gold: {
base: 700,
purchasable: true,
total: 2900,
sell: 2030
},
tags: [
"Active",
"ArmorPenetration",
"CooldownReduction",
"Damage",
"NonbootsMovement"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 60
},
effect: {
Effect1Amount: "45",
Effect2Amount: "20",
Effect3Amount: "0.2",
Effect4Amount: "0",
Effect5Amount: "6",
Effect6Amount: "20"
},
depth: 3
},
3143: {
name: "Randuin's Omen",
description: "<stats>+500 Health<br>+60 Armor<br>-10% Damage taken from Critical Strikes</stats><br><br><unique>UNIQUE Passive - Cold Steel:</unique> When hit by basic attacks, reduces the attacker's Attack Speed by 15% (1 second duration).<br><active>UNIQUE Active:</active> Slows the Movement Speed of nearby enemy units by 35% for 4 seconds (60 second cooldown).",
colloq: ";",
plaintext: "Greatly increases defenses, activate to slow nearby enemies",
from: [
"3082",
"1011"
],
into: [ ],
image: {
full: "3143.png",
sprite: "item1.png",
group: "item",
x: 144,
y: 240,
w: 48,
h: 48
},
gold: {
base: 900,
purchasable: true,
total: 2900,
sell: 2030
},
tags: [
"Active",
"Armor",
"Health",
"Slow"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 500,
FlatArmorMod: 60
},
effect: {
Effect1Amount: "4",
Effect2Amount: "0.1",
Effect3Amount: "-0.35",
Effect4Amount: "1"
},
depth: 3
},
3144: {
name: "Bilgewater Cutlass",
description: "<stats>+25 Attack Damage<br>+10% Life Steal</stats><br><br><active>UNIQUE Active:</active> Deals 100 magic damage and slows the target champion's Movement Speed by 25% for 2 seconds (90 second cooldown).",
colloq: ";",
plaintext: "Activate to deal magic damage and slow target champion",
from: [
"1053",
"1036"
],
into: [
"3146",
"3153"
],
image: {
full: "3144.png",
sprite: "item1.png",
group: "item",
x: 192,
y: 240,
w: 48,
h: 48
},
gold: {
base: 250,
purchasable: true,
total: 1500,
sell: 1050
},
tags: [
"Active",
"Damage",
"LifeSteal",
"Slow"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 25,
PercentLifeStealMod: 0.1
},
effect: {
Effect1Amount: "-0.25",
Effect2Amount: "2",
Effect3Amount: "90",
Effect4Amount: "100"
},
depth: 3
},
3145: {
name: "Hextech Revolver",
description: "<stats>+40 Ability Power</stats><br><br><unique>UNIQUE Passive - Magic Bolt:</unique> Damaging an enemy champion with a basic attack shocks them for <levelScale>50 - 125</levelScale> bonus magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Magic Bolt's cooldown is reduced by Active Item cooldown reduction.<br><br><rules>(Damage scales based on level. Hextech effects can trigger other item spell effects.)</rules>",
colloq: ";",
plaintext: "Increases Ability Power. Deal bonus magic damage on attack periodically.",
from: [
"1052",
"1052"
],
into: [
"3146",
"3152",
"3030"
],
image: {
full: "3145.png",
sprite: "item1.png",
group: "item",
x: 240,
y: 240,
w: 48,
h: 48
},
gold: {
base: 180,
purchasable: true,
total: 1050,
sell: 735
},
tags: [
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 40
},
effect: {
Effect1Amount: "0",
Effect2Amount: "50",
Effect3Amount: "0",
Effect4Amount: "125",
Effect5Amount: "40"
},
depth: 2
},
3146: {
name: "Hextech Gunblade",
description: "<stats>+40 Attack Damage<br>+80 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Heal for 15% of damage dealt. This is 33% as effective for Area of Effect damage.<br><active>UNIQUE Active - Lightning Bolt:</active> Deals 250 (+30% of Ability Power) magic damage and slows the target champion's Movement Speed by 40% for 2 seconds (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).",
colloq: ";",
plaintext: "Increases Attack Damage and Ability Power, activate to slow a target",
from: [
"3144",
"3145"
],
into: [ ],
image: {
full: "3146.png",
sprite: "item1.png",
group: "item",
x: 288,
y: 240,
w: 48,
h: 48
},
gold: {
base: 850,
purchasable: true,
total: 3400,
sell: 2380
},
tags: [
"Active",
"Damage",
"LifeSteal",
"Slow",
"SpellDamage",
"SpellVamp"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 40,
FlatMagicDamageMod: 80
},
effect: {
Effect1Amount: "0.15",
Effect2Amount: "40",
Effect3Amount: "250"
},
depth: 4
},
3147: {
name: "Duskblade of Draktharr",
description: "<stats>+65 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +15 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat.<br><unique>UNIQUE Passive - Nightstalker:</unique> After being unseen for at least 1 second, your next Basic Attack against an enemy champion will deal 50 (+200% Lethality) true damage on-hit (lasts for 4 seconds after being seen by an enemy champion).<br><unique>UNIQUE Passive - Blackout:</unique> When spotted by an enemy ward, causes a blackout for 8 seconds, disabling all nearby enemy wards and traps (90 second cooldown).",
colloq: ";lethality",
plaintext: "Deals additional true damage on-hit and provides true sight periodically",
from: [
"3134",
"1038"
],
into: [ ],
image: {
full: "3147.png",
sprite: "item1.png",
group: "item",
x: 336,
y: 240,
w: 48,
h: 48
},
gold: {
base: 850,
purchasable: true,
total: 3250,
sell: 2275
},
tags: [
"ArmorPenetration",
"Damage",
"NonbootsMovement",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 65
},
effect: {
Effect1Amount: "15",
Effect2Amount: "20",
Effect3Amount: "0",
Effect4Amount: "90",
Effect5Amount: "50",
Effect6Amount: "2"
},
depth: 3
},
3151: {
name: "Liandry's Torment",
description: "<stats>+80 Ability Power<br>+300 Health</stats><br><br><unique>UNIQUE Passive - Eyes of Pain:</unique> +15 <a href='FlatMagicPen'>Magic Penetration</a><br><unique>UNIQUE Passive:</unique> Spells burn enemies for 3 seconds, dealing bonus magic damage equal to 2% of their current Health per second. Burn damage is doubled against <a href='MovementImpaired'>movement-impaired</a> units.",
colloq: ";mask",
plaintext: "Spell damage burns enemies for a portion of their Health",
stacks: 0,
from: [
"3136",
"1026"
],
into: [ ],
image: {
full: "3151.png",
sprite: "item1.png",
group: "item",
x: 384,
y: 240,
w: 48,
h: 48
},
gold: {
base: 750,
purchasable: true,
total: 3100,
sell: 2170
},
tags: [
"Health",
"MagicPenetration",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 300,
FlatMagicDamageMod: 80
},
effect: {
Effect1Amount: "15",
Effect2Amount: "0.02",
Effect3Amount: "3",
Effect4Amount: "100",
Effect5Amount: "2"
},
depth: 3
},
3152: {
name: "Hextech Protobelt-01",
description: "<stats>+300 Health<br>+60 Ability Power<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Active - Fire Bolt:</unique> Dash forward and unleash a nova of fire bolts that deal <levelScale>75 - 150</levelScale> (+25% of your Ability Power) as magic damage (40 second cooldown, shared with other <font color='#9999FF'><a href='itembolt'>Hextech</a></font> items).<br><br>Champions and Monsters hit by multiple fire bolts take 10% damage per additional bolt.<br><br><rules>(This dash cannot pass through terrain.)</rules>",
colloq: "rocket belt;",
plaintext: "Activate to dash forward and unleash a fiery explosion",
from: [
"3145",
"3067"
],
into: [ ],
image: {
full: "3152.png",
sprite: "item1.png",
group: "item",
x: 432,
y: 240,
w: 48,
h: 48
},
gold: {
base: 650,
purchasable: true,
total: 2500,
sell: 1750
},
tags: [
"Active",
"CooldownReduction",
"Health",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 300,
FlatMagicDamageMod: 60
},
effect: {
Effect1Amount: "0.12",
Effect2Amount: "0.04",
Effect3Amount: "40",
Effect4Amount: "75",
Effect5Amount: "150",
Effect6Amount: "0.1",
Effect7Amount: "0.25",
Effect8Amount: "40"
},
depth: 3
},
3153: {
name: "Blade of the Ruined King",
description: "<stats>+25 Attack Damage<br>+40% Attack Speed<br>+10% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 8% of the target's current Health in bonus physical damage (max 60 vs. monsters and minions) on hit. Life Steal applies to this damage.<br><active>UNIQUE Active:</active> Deals 10% of target champion's maximum Health (min. 100) as physical damage, heals for the same amount, and steals 25% of the target's Movement Speed for 3 seconds (90 second cooldown).",
colloq: ";brk;bork;bork;bork;botrk",
plaintext: "Deals damage based on target's Health, can steal Health and Movement Speed",
from: [
"3144",
"1043"
],
into: [ ],
image: {
full: "3153.png",
sprite: "item1.png",
group: "item",
x: 0,
y: 288,
w: 48,
h: 48
},
gold: {
base: 900,
purchasable: true,
total: 3400,
sell: 2380
},
tags: [
"Active",
"AttackSpeed",
"Damage",
"LifeSteal",
"NonbootsMovement",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 25,
PercentAttackSpeedMod: 0.4,
PercentLifeStealMod: 0.1
},
effect: {
Effect1Amount: "0.08"
},
depth: 4
},
3155: {
name: "Hexdrinker",
description: "<stats>+20 Attack Damage<br>+35 Magic Resist</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs 110 to 280 (based on level) magic damage for 5 seconds (90 second cooldown).",
colloq: ";",
plaintext: "Increases Attack Damage and Magic Resist",
stacks: 0,
from: [
"1036",
"1033"
],
into: [
"3156"
],
image: {
full: "3155.png",
sprite: "item1.png",
group: "item",
x: 96,
y: 288,
w: 48,
h: 48
},
gold: {
base: 500,
purchasable: true,
total: 1300,
sell: 910
},
tags: [
"Damage",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 20,
FlatSpellBlockMod: 35
},
effect: {
Effect1Amount: "0.3",
Effect2Amount: "110",
Effect3Amount: "5",
Effect4Amount: "90",
Effect5Amount: "280",
Effect6Amount: "100",
Effect7Amount: "10"
},
depth: 2
},
3156: {
name: "Maw of Malmortius",
description: "<stats>+50 Attack Damage<br>+45 Magic Resist<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Lifeline:</unique> Upon taking magic damage that would reduce Health below 30%, grants a shield that absorbs magic damage equal to 300 + 1 per bonus Magic Resistance for 5 seconds (90 second cooldown).<br><unlockedPassive>Lifegrip:</unlockedPassive> When <i>Lifeline</i> triggers, gain +20 Attack Damage, +10% Spell Vamp and +10% Life Steal until out of combat.",
colloq: ";",
plaintext: "Grants bonus Attack Damage when Health is low",
stacks: 0,
from: [
"3155",
"3133"
],
into: [ ],
image: {
full: "3156.png",
sprite: "item1.png",
group: "item",
x: 144,
y: 288,
w: 48,
h: 48
},
gold: {
base: 850,
purchasable: true,
total: 3250,
sell: 2275
},
tags: [
"CooldownReduction",
"Damage",
"LifeSteal",
"SpellBlock",
"SpellVamp"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 50,
FlatSpellBlockMod: 45
},
effect: {
Effect1Amount: "1",
Effect2Amount: "35",
Effect3Amount: "0.3",
Effect4Amount: "300",
Effect5Amount: "5",
Effect6Amount: "90",
Effect7Amount: "20",
Effect8Amount: "0"
},
depth: 3
},
3157: {
name: "Zhonya's Hourglass",
description: "<stats>+70 Ability Power<br>+45 Armor<br>+10% Cooldown Reduction</stats><br><br><active>UNIQUE Active - Stasis:</active> Champion becomes invulnerable and untargetable for 2.5 seconds, but is unable to move, attack, cast spells, or use items during this time (120 second cooldown).",
colloq: ";zhg;zonyas",
plaintext: "Activate to become invincible but unable to take actions",
from: [
"3191",
"3108"
],
into: [ ],
image: {
full: "3157.png",
sprite: "item1.png",
group: "item",
x: 192,
y: 288,
w: 48,
h: 48
},
gold: {
base: 800,
purchasable: true,
total: 2900,
sell: 2030
},
tags: [
"Active",
"Armor",
"CooldownReduction",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: false,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 45,
FlatMagicDamageMod: 70
},
effect: {
Effect1Amount: "0",
Effect2Amount: "2.5",
Effect3Amount: "120"
},
depth: 3
},
3158: {
name: "Ionian Boots of Lucidity",
description: "<unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive - Enhanced Movement:</unique> +45 Movement Speed<br><unique>UNIQUE Passive:</unique> Reduces Summoner Spell cooldowns by 10%<br><br><br><rules><font color='#FDD017'>''This item is dedicated in honor of Ionia's victory over Noxus in the Rematch for the Southern Provinces on 10 December, 20 CLE.''</font></rules>",
colloq: ";",
plaintext: "Increases Movement Speed and Cooldown Reduction",
from: [
"1001"
],
into: [
"1333",
"1332"
],
image: {
full: "3158.png",
sprite: "item1.png",
group: "item",
x: 240,
y: 288,
w: 48,
h: 48
},
gold: {
base: 600,
purchasable: true,
total: 900,
sell: 630
},
tags: [
"Boots",
"CooldownReduction"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMovementSpeedMod: 45
},
effect: {
Effect1Amount: "-0.1",
Effect2Amount: "0.1"
},
depth: 2
},
3165: {
name: "Morellonomicon",
description: "<stats>+100 Ability Power<br><mana>+400 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> +20% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Dealing magic damage to champions below 35% Health inflicts <a href='GrievousWounds'>Grievous Wounds</a> for 8 seconds.<br><unique>UNIQUE Passive:</unique> Kills and Assists restore 20% of your maximum Mana.",
colloq: ";nmst;grievous",
plaintext: "Greatly increases Ability Power and Cooldown Reduction",
from: [
"3108",
"1052",
"3802"
],
into: [ ],
image: {
full: "3165.png",
sprite: "item1.png",
group: "item",
x: 288,
y: 288,
w: 48,
h: 48
},
gold: {
base: 665,
purchasable: true,
total: 2900,
sell: 2030
},
tags: [
"CooldownReduction",
"Mana",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 400,
FlatMagicDamageMod: 100
},
effect: {
Effect1Amount: "20",
Effect2Amount: "35",
Effect3Amount: "8",
Effect4Amount: "0.2"
},
depth: 3
},
3170: {
name: "Moonflair Spellblade",
description: "<stats>+50 Ability Power<br>+50 Armor<br>+50 Magic Resist</stats><br><br><unique>UNIQUE Passive - Tenacity:</unique> Reduces the duration of stuns, slows, taunts, fears, silences, blinds, polymorphs, and immobilizes by 35%.",
colloq: ";",
plaintext: "Improves defense and reduces duration of disabling effects",
from: [
"3191",
"1057"
],
into: [ ],
image: {
full: "3170.png",
sprite: "item1.png",
group: "item",
x: 336,
y: 288,
w: 48,
h: 48
},
gold: {
base: 580,
purchasable: true,
total: 2500,
sell: 1750
},
tags: [
"Armor",
"SpellBlock",
"SpellDamage",
"Tenacity"
],
maps: {
1: false,
8: true,
10: true,
11: false,
12: false,
14: false
},
stats: {
FlatArmorMod: 50,
FlatMagicDamageMod: 50,
FlatSpellBlockMod: 50
},
depth: 3
},
3174: {
name: "Athene's Unholy Grail",
description: "<stats>+40 Ability Power<br>+25 Magic Resist<br>+20% Cooldown Reduction<br><mana>+75% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> Gain 20% of the <a href='premitigation'><font color='#6666FF'><u>premitigation</u></font></a> damage dealt to champions as Blood Charges, up to <levelScale>100 - 250</levelScale> max. Healing or shielding another ally consumes charges to heal them, up to the original effect amount.<br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.<br><br><rules>(Maximum amount of Blood Charges stored is based on level. Healing amplification is applied to the total heal value.)</rules>",
colloq: ";",
plaintext: "Deal damage to empower your heals and shields",
from: [
"3108",
"3028"
],
into: [ ],
image: {
full: "3174.png",
sprite: "item1.png",
group: "item",
x: 384,
y: 288,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 2100,
sell: 1470
},
tags: [
"CooldownReduction",
"HealthRegen",
"ManaRegen",
"SpellBlock",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 40,
FlatSpellBlockMod: 25
},
effect: {
Effect1Amount: "20",
Effect2Amount: "30",
Effect3Amount: "2",
Effect4Amount: "5",
Effect5Amount: "100",
Effect6Amount: "0.2",
Effect7Amount: "100",
Effect8Amount: "250"
},
depth: 3
},
3181: {
name: "Sanguine Blade",
description: "<stats>+45 Attack Damage<br>+10% Life Steal</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks grant +6 Attack Damage and +1% Life Steal for 8 seconds on hit (effect stacks up to 5 times).",
colloq: ";",
plaintext: "Greatly increases Attack Damage and Life Steal",
from: [
"1037",
"1053"
],
into: [ ],
image: {
full: "3181.png",
sprite: "item1.png",
group: "item",
x: 0,
y: 336,
w: 48,
h: 48
},
gold: {
base: 625,
purchasable: true,
total: 2400,
sell: 1680
},
tags: [
"Damage",
"LifeSteal"
],
maps: {
1: false,
8: false,
10: false,
11: false,
12: false,
14: false
},
stats: {
FlatPhysicalDamageMod: 45,
PercentLifeStealMod: 0.1
},
effect: {
Effect1Amount: "6",
Effect2Amount: "0.01",
Effect3Amount: "8",
Effect4Amount: "5"
},
depth: 3
},
3184: {
name: "Guardian's Hammer",
description: "<stats>+150 Health<br>+15 Attack Damage<br>+10% Life Steal</stats><br><br><groupLimit>Limited to 1 Guardian's Item.</groupLimit>",
colloq: ";dblade",
plaintext: "Good starting item for attackers",
into: [ ],
image: {
full: "3184.png",
sprite: "item1.png",
group: "item",
x: 48,
y: 336,
w: 48,
h: 48
},
gold: {
base: 950,
purchasable: true,
total: 950,
sell: 380
},
tags: [
"Damage",
"Health",
"Lane",
"LifeSteal"
],
maps: {
1: false,
8: false,
10: false,
11: false,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 150,
FlatPhysicalDamageMod: 15,
PercentLifeStealMod: 0.1
}
},
3185: {
name: "The Lightbringer",
description: "<stats>+30 Attack Damage<br>+30% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> Critical Strikes cause enemies to bleed for an additional 90% of bonus Attack Damage as magic damage over 3 seconds and reveal them for the duration.<br><unique>UNIQUE Passive - Trap Detection:</unique> Nearby stealthed enemy traps are revealed.<br><active>UNIQUE Active - Hunter's Sight:</active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).",
colloq: ";lb",
plaintext: "Critical Strikes cause your target to bleed and be revealed",
from: [
"3122",
"1018"
],
into: [ ],
image: {
full: "3185.png",
sprite: "item1.png",
group: "item",
x: 96,
y: 336,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 2350,
sell: 1645
},
tags: [
"Active",
"CriticalStrike",
"Damage",
"OnHit",
"Stealth",
"Vision"
],
maps: {
1: false,
8: true,
10: false,
11: false,
12: false,
14: false
},
stats: {
FlatPhysicalDamageMod: 30,
FlatCritChanceMod: 0.3
},
effect: {
Effect1Amount: "0.9",
Effect2Amount: "3",
Effect3Amount: "0",
Effect4Amount: "5",
Effect5Amount: "3",
Effect6Amount: "60"
},
depth: 3
},
3187: {
name: "Arcane Sweeper",
description: "<stats>+225 Health<br>+250 Mana<br>+25 Armor<br>+20% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Trap Detection:</unique> Nearby stealthed enemy traps are revealed.<br><active>UNIQUE Active - Hunter's Sight:</active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing enemy champions that enter for 3 seconds (60 second cooldown).",
colloq: ";",
plaintext: "Activate to reveal a nearby area of the map",
from: [
"3024",
"3067"
],
into: [ ],
image: {
full: "3187.png",
sprite: "item1.png",
group: "item",
x: 144,
y: 336,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 2150,
sell: 1505
},
tags: [
"Active",
"Armor",
"CooldownReduction",
"Health",
"Mana",
"Stealth",
"Vision"
],
maps: {
1: false,
8: true,
10: false,
11: false,
12: false,
14: false
},
stats: {
FlatHPPoolMod: 225,
FlatMPPoolMod: 250,
FlatArmorMod: 25
},
effect: {
Effect1Amount: "-0.2",
Effect2Amount: "0",
Effect3Amount: "0",
Effect4Amount: "5",
Effect5Amount: "3",
Effect6Amount: "60"
},
depth: 3
},
3190: {
name: "Locket of the Iron Solari",
description: "<stats>+30 Armor<br>+60 Magic Resist</stats><br><br><active>UNIQUE Active:</active> Grants a decaying shield to nearby allies for 2.5 seconds that absorbs up to 35 (+35 per level) damage (90 second cooldown).<br><br><rules>(Half effect if the target has been affected by another Locket of the Iron Solari recently.)</rules>",
colloq: ";",
plaintext: "Activate to shield nearby allies from damage",
from: [
"3105",
"1033"
],
into: [ ],
image: {
full: "3190.png",
sprite: "item1.png",
group: "item",
x: 192,
y: 336,
w: 48,
h: 48
},
gold: {
base: 650,
purchasable: true,
total: 2200,
sell: 1540
},
tags: [
"Active",
"Armor",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 30,
FlatSpellBlockMod: 60
},
effect: {
Effect1Amount: "0",
Effect2Amount: "0.75",
Effect3Amount: "2.5",
Effect4Amount: "35",
Effect5Amount: "35",
Effect6Amount: "90"
},
depth: 3
},
3191: {
name: "Seeker's Armguard",
description: "<stats>+30 Armor<br>+20 Ability Power</stats><br><br><unique>UNIQUE Passive:</unique> Killing a unit grants 0.5 bonus Armor and Ability Power. This bonus stacks up to 30 times.",
colloq: ";",
plaintext: "Increases Armor and Ability Power",
from: [
"1029",
"1052",
"1029"
],
into: [
"3090",
"3157",
"3170"
],
image: {
full: "3191.png",
sprite: "item1.png",
group: "item",
x: 240,
y: 336,
w: 48,
h: 48
},
gold: {
base: 165,
purchasable: true,
total: 1200,
sell: 840
},
tags: [
"Armor",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatArmorMod: 30,
FlatMagicDamageMod: 20
},
effect: {
Effect1Amount: "0.5",
Effect2Amount: "30"
},
depth: 2
},
3196: {
name: "The Hex Core mk-1",
description: "<stats>+3 Ability Power per level<br>+15 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.",
colloq: ";viktor",
plaintext: "Allows Viktor to improve an ability of his choice",
from: [
"3200"
],
into: [
"3197"
],
requiredChampion: "Viktor",
image: {
full: "3196.png",
sprite: "item1.png",
group: "item",
x: 288,
y: 336,
w: 48,
h: 48
},
gold: {
base: 1250,
purchasable: true,
total: 1250,
sell: 875
},
tags: [
"Mana",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "3",
Effect2Amount: "15"
},
depth: 2
},
3197: {
name: "The Hex Core mk-2",
description: "<stats>+6 Ability Power per level<br>+20 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> Viktor can upgrade one of his basic spells.",
colloq: ";viktor",
plaintext: "Allows Viktor to improve an ability of his choice",
from: [
"3196"
],
into: [
"3198"
],
requiredChampion: "Viktor",
image: {
full: "3197.png",
sprite: "item1.png",
group: "item",
x: 336,
y: 336,
w: 48,
h: 48
},
gold: {
base: 1000,
purchasable: true,
total: 2250,
sell: 1575
},
tags: [
"Mana",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "6",
Effect2Amount: "20"
},
depth: 3
},
3198: {
name: "Perfect Hex Core",
description: "<stats>+10 Ability Power per level<br>+25 Mana per level</stats><br><br><unique>UNIQUE Passive - Glorious Evolution:</unique> Viktor has reached the pinnacle of his power, upgrading Chaos Storm in addition to his basic spells.",
colloq: ";viktor",
plaintext: "Allows Viktor to improve an ability of his choice",
from: [
"3197"
],
requiredChampion: "Viktor",
into: [ ],
image: {
full: "3198.png",
sprite: "item1.png",
group: "item",
x: 384,
y: 336,
w: 48,
h: 48
},
gold: {
base: 750,
purchasable: true,
total: 3000,
sell: 2100
},
tags: [
"Mana",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "10",
Effect2Amount: "25"
},
depth: 4
},
3200: {
name: "Prototype Hex Core",
description: "<stats>+1 Ability Power per level<br>+10 Mana per level</stats><br><br><unique>UNIQUE Passive - Progress:</unique> This item can be upgraded three times to enhance Viktor's basic abilities.",
colloq: ";viktor",
plaintext: "Increases Ability Power and can be upgraded to improve Viktor's abilities",
into: [
"3196"
],
specialRecipe: 1,
inStore: false,
requiredChampion: "Viktor",
image: {
full: "3200.png",
sprite: "item1.png",
group: "item",
x: 432,
y: 336,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "1",
Effect2Amount: "10"
}
},
3211: {
name: "Spectre's Cowl",
description: "<stats>+250 Health<br>+30 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> Grants 150% Base Health Regen for up to 10 seconds after taking damage from an enemy champion.",
colloq: ";hat",
plaintext: "Improves defense and grants regeneration upon being damaged",
from: [
"1028",
"1033"
],
into: [
"3065",
"3102"
],
image: {
full: "3211.png",
sprite: "item1.png",
group: "item",
x: 0,
y: 384,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 1200,
sell: 840
},
tags: [
"Health",
"HealthRegen",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 250,
FlatSpellBlockMod: 30
},
effect: {
Effect1Amount: "1.5",
Effect2Amount: "10"
},
depth: 2
},
3222: {
name: "Mikael's Crucible",
description: "<stats>+35 Magic Resist<br>+10% Cooldown Reduction<br><mana>+100% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +20% Heal and Shield Power<br><unique>UNIQUE Passive - Harmony:</unique> Grants bonus % Base Health Regen equal to your bonus % Base Mana Regen.<br><active>UNIQUE Active:</active> Cleanses all stuns, roots, taunts, fears, silences, and slows on an allied champion and grants them slow immunity for 2 seconds (120 second cooldown).<br><br>Successfully cleansing an effect this way grants the ally 40% movement speed for 2 seconds.",
colloq: ";",
plaintext: "Activate to heal and remove all disabling effects from an allied champion",
from: [
"3028",
"3114"
],
into: [ ],
image: {
full: "3222.png",
sprite: "item1.png",
group: "item",
x: 48,
y: 384,
w: 48,
h: 48
},
gold: {
base: 500,
purchasable: true,
total: 2100,
sell: 1470
},
tags: [
"Active",
"CooldownReduction",
"HealthRegen",
"ManaRegen",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatSpellBlockMod: 35
},
effect: {
Effect1Amount: "2",
Effect2Amount: "5",
Effect3Amount: "0.5",
Effect4Amount: "0.25",
Effect5Amount: "600",
Effect6Amount: "8",
Effect7Amount: "90",
Effect8Amount: "1"
},
depth: 3
},
3252: {
name: "Poacher's Dirk",
description: "<stats>+15 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat<br><unique>UNIQUE Passive:</unique> After poaching 3 large monsters from the enemy jungle (60 second cooldown), transforms into a Serrated Dirk.",
colloq: ";serrated dirk;lethality",
plaintext: "Transforms into a Serrated Dirk after poaching in the enemy jungle.",
stacks: 0,
from: [
"1036"
],
into: [ ],
image: {
full: "3252.png",
sprite: "item2.png",
group: "item",
x: 288,
y: 192,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 750,
sell: 525
},
tags: [
"ArmorPenetration",
"Damage",
"NonbootsMovement"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: {
FlatPhysicalDamageMod: 15
},
effect: {
Effect1Amount: "100",
Effect2Amount: "15",
Effect3Amount: "20"
},
depth: 2
},
3285: {
name: "Luden's Echo",
description: "<stats>+100 Ability Power<br>+10% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 100 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.",
colloq: ";",
plaintext: "Movement and casting builds charges that release chain lightning on next spell hit",
from: [
"1058",
"3113"
],
into: [ ],
image: {
full: "3285.png",
sprite: "item1.png",
group: "item",
x: 96,
y: 384,
w: 48,
h: 48
},
gold: {
base: 1100,
purchasable: true,
total: 3200,
sell: 2240
},
tags: [
"NonbootsMovement",
"OnHit",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 100,
PercentMovementSpeedMod: 0.1
},
effect: {
Effect1Amount: "100",
Effect2Amount: "100",
Effect3Amount: "4",
Effect4Amount: "0.1",
Effect5Amount: "35",
Effect6Amount: "10"
},
depth: 3
},
3301: {
name: "Ancient Coin",
description: "<stats><mana>+25% Base Mana Regen </mana><br>+5% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive - Favor:</unique> Being near a minion's death without dealing the killing blow grants 4 Gold and 5 Health.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit><br><br><i><font color='#447777'>''Gold dust rises from the desert and clings to the coin.'' - Historian Shurelya, 11 November, 23 CLE</font></i>",
colloq: ";",
plaintext: "Grants gold when nearby minions die that you didn't kill",
into: [
"3096"
],
image: {
full: "3301.png",
sprite: "item1.png",
group: "item",
x: 144,
y: 384,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 350,
sell: 140
},
tags: [
"CooldownReduction",
"GoldPer",
"Lane",
"ManaRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "4",
Effect2Amount: "5"
}
},
3302: {
name: "Relic Shield",
description: "<stats>+75 Health<br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 195 (+5 per level) Health. Killing a minion heals the owner and the nearest allied champion for 15 Health and grants them kill Gold.<br><br>These effects require a nearby ally. Recharges every 40 seconds. Max 2 charges. <br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
colloq: ";",
plaintext: "Kill minions periodically to heal and grant gold to a nearby ally",
into: [
"3097"
],
image: {
full: "3302.png",
sprite: "item1.png",
group: "item",
x: 192,
y: 384,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 350,
sell: 140
},
tags: [
"Aura",
"GoldPer",
"Health",
"Lane"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 75
},
effect: {
Effect1Amount: "195",
Effect2Amount: "15",
Effect3Amount: "2",
Effect4Amount: "5"
}
},
3303: {
name: "Spellthief's Edge",
description: "<stats>+5 Ability Power<br>+2 Gold per 10 seconds<br><mana>+25% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive - Tribute:</unique> Spells and basic attacks against champions or buildings deal 10 additional damage and grant 8 Gold. This can occur up to 3 times every 30 seconds. Killing a minion disables this passive for 12 seconds.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
colloq: ";",
plaintext: "Grants gold when you attack enemies",
into: [
"3098"
],
image: {
full: "3303.png",
sprite: "item1.png",
group: "item",
x: 240,
y: 384,
w: 48,
h: 48
},
gold: {
base: 350,
purchasable: true,
total: 350,
sell: 140
},
tags: [
"GoldPer",
"Lane",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 5
},
effect: {
Effect1Amount: "10",
Effect2Amount: "8",
Effect3Amount: "12",
Effect4Amount: "3",
Effect5Amount: "30",
Effect6Amount: "2"
}
},
3340: {
name: "Warding Totem (Trinket)",
description: "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consume a charge to place an invisible <font color='#BBFFFF'>Stealth Ward</font> which reveals the surrounding area for <levelScale>60 - 120</levelScale> seconds. <br><br>Stores one charge every <levelScale>180 - 90</levelScale> seconds, up to 2 maximum charges.<br><br>Ward duration and recharge time gradually improve with level.<br><br><rules>(Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player. Switching to a <font color='#BBFFFF'>Lens</font> type trinket will disable <font color='#BBFFFF'>Trinket</font> use for 120 seconds.)</rules>",
colloq: "yellow;",
plaintext: "Periodically place a Stealth Ward",
into: [ ],
image: {
full: "3340.png",
sprite: "item1.png",
group: "item",
x: 288,
y: 384,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [
"Active",
"Jungle",
"Lane",
"Trinket",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "60",
Effect2Amount: "180",
Effect3Amount: "120",
Effect4Amount: "90",
Effect5Amount: "2",
Effect6Amount: "9",
Effect7Amount: "30",
Effect8Amount: "120"
}
},
3341: {
name: "Sweeping Lens (Trinket)",
description: "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Scans an area for 6 seconds, warning against hidden hostile units and revealing / disabling invisible traps and wards (90 to 60 second cooldown).<br><br>Cast range and sweep radius gradually improve with level.<br><br><rules>(Switching to a <font color='#BBFFFF'>Totem</font>-type trinket will disable <font color='#BBFFFF'>Trinket</font> use for 120 seconds.)</rules>",
colloq: "red;",
plaintext: "Detects and disables nearby invisible wards and traps",
into: [ ],
image: {
full: "3341.png",
sprite: "item1.png",
group: "item",
x: 336,
y: 384,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [
"Active",
"Jungle",
"Trinket",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "6",
Effect2Amount: "90",
Effect3Amount: "400",
Effect4Amount: "60",
Effect5Amount: "1500",
Effect6Amount: "9",
Effect7Amount: "30",
Effect8Amount: "120"
}
},
3345: {
name: "Soul Anchor (Trinket)",
description: "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consumes a charge to instantly revive at your Summoner Platform and grants 125% Movement Speed that decays over 12 seconds.<br><br><rules>Additional charges are gained at levels 9 and 14.</rules><br><br><font color='#BBFFFF'>(Max: 2 charges)</font></rules><br><br>",
colloq: "",
plaintext: "Consumes charge to revive champion.",
inStore: false,
into: [ ],
image: {
full: "3345.png",
sprite: "item1.png",
group: "item",
x: 384,
y: 384,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [
"Active",
"Trinket",
"Vision"
],
maps: {
1: false,
8: true,
10: false,
11: false,
12: false,
14: false
},
stats: { }
},
3348: {
name: "Arcane Sweeper",
description: "<active>UNIQUE Active - Hunter's Sight:</active> A stealth-detecting mist grants vision in the target area for 5 seconds, revealing traps and enemy champions that enter for 3 seconds (90 second cooldown).",
colloq: ";",
plaintext: "Activate to reveal a nearby area of the map",
inStore: false,
into: [ ],
image: {
full: "3348.png",
sprite: "item1.png",
group: "item",
x: 432,
y: 384,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [
"Active",
"Stealth",
"Trinket",
"Vision"
],
maps: {
1: false,
8: true,
10: true,
11: false,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "0",
Effect2Amount: "0",
Effect3Amount: "0",
Effect4Amount: "5",
Effect5Amount: "3",
Effect6Amount: "90"
}
},
3361: {
name: "Greater Stealth Totem (Trinket)",
description: "<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Consume a charge to place an invisible ward that reveals the surrounding area for 180 seconds. Stores a charge every 60 seconds, up to 2 total. Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>",
colloq: "yellow;",
plaintext: "Periodically place a Stealth Ward",
inStore: false,
into: [ ],
image: {
full: "3361.png",
sprite: "item1.png",
group: "item",
x: 0,
y: 432,
w: 48,
h: 48
},
gold: {
base: 250,
purchasable: false,
total: 250,
sell: 175
},
tags: [
"Active",
"Trinket",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "180",
Effect2Amount: "60",
Effect3Amount: "0",
Effect4Amount: "0",
Effect5Amount: "0",
Effect6Amount: "9",
Effect7Amount: "30",
Effect8Amount: "120"
}
},
3362: {
name: "Greater Vision Totem (Trinket)",
description: "<groupLimit>Limited to 1 Trinket.</groupLimit><levelLimit> *Level 9+ required to upgrade.</levelLimit><stats></stats><br><br><unique>UNIQUE Active:</unique> Places a visible ward that reveals the surrounding area and invisible units in the area until killed (120 second cooldown). Limit 1 <font color='#BBFFFF'>Vision Ward</font> on the map per player.<br><br><rules>(Trinkets cannot be used in the first 30 seconds of a game. Selling a Trinket will disable Trinket use for 120 seconds).</rules>",
colloq: "yellow;",
plaintext: "Periodically place a Vision Ward",
inStore: false,
into: [ ],
image: {
full: "3362.png",
sprite: "item1.png",
group: "item",
x: 48,
y: 432,
w: 48,
h: 48
},
gold: {
base: 250,
purchasable: false,
total: 250,
sell: 175
},
tags: [
"Active",
"Trinket",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "120",
Effect2Amount: "0",
Effect3Amount: "0",
Effect4Amount: "0",
Effect5Amount: "0",
Effect6Amount: "9",
Effect7Amount: "30",
Effect8Amount: "120"
}
},
3363: {
name: "Farsight Alteration",
description: "<levelLimit>* Level 9+ required to upgrade.</levelLimit><br><br>Alters the <font color='#FFFFFF'>Warding Totem</font> Trinket:<br><br><stats><font color='#00FF00'>+</font> Massively increased cast range (+650%)<br><font color='#00FF00'>+</font> Infinite duration and does not count towards ward limit<br><font color='#FF0000'>-</font> <font color='#FF6600'>10% increased cooldown</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Ward is visible, fragile, untargetable by allies</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>45% reduced ward vision radius</font><br><font color='#FF0000'>-</font> <font color='#FF6600'>Cannot store charges</font></stats>",
colloq: "blue; totem;",
plaintext: "Grants increased range and reveals the targetted area",
into: [ ],
image: {
full: "3363.png",
sprite: "item1.png",
group: "item",
x: 96,
y: 432,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [
"Active",
"Trinket",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "4000",
Effect2Amount: "2",
Effect3Amount: "5",
Effect4Amount: "198",
Effect5Amount: "60",
Effect6Amount: "9",
Effect7Amount: "30",
Effect8Amount: "120"
}
},
3364: {
name: "Oracle Alteration",
description: "<levelLimit>* Level 9+ required to upgrade.</levelLimit><stats></stats><br><br>Alters the <font color='#FFFFFF'>Sweeping Lens</font> Trinket:<br><br><stats><font color='#00FF00'>+</font> Increased detection radius<br><font color='#00FF00'>+</font> Sweeping effect follows you for 10 seconds<br><font color='#FF0000'>-</font> <font color='#FF6600'>Cast range reduced to zero</font></stats>",
colloq: "red; lens;",
plaintext: "Disables nearby invisible wards and traps for a duration",
into: [ ],
image: {
full: "3364.png",
sprite: "item1.png",
group: "item",
x: 144,
y: 432,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [
"Active",
"Trinket",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "6",
Effect2Amount: "10",
Effect3Amount: "90",
Effect4Amount: "60",
Effect5Amount: "0",
Effect6Amount: "9",
Effect7Amount: "30",
Effect8Amount: "120"
}
},
3401: {
name: "Face of the Mountain",
description: "<stats>+450 Health<br>+100% Base Health Regen <br>+10% Cooldown Reduction<br>+2 Gold per 10 seconds </stats><br><br><unique>UNIQUE Passive - Spoils of War:</unique> Melee basic attacks execute minions below 320 (+20 per level) Health. Killing a minion heals the owner and the nearest allied champion for 50 Health and grants them kill Gold. These effects require a nearby ally. Recharges every 30 seconds. Max 4 charges.<br><unique>UNIQUE Active:</unique> Grant a shield to you and an ally equal to 10% of your maximum Health for 4 seconds. After 4 seconds, the shields explode to slow nearby enemies by 40% for 2 seconds (60 second cooldown). Automatically targets the most wounded ally if cast upon self.<br><br><groupLimit>Limited to 1 Gold Income Item.</groupLimit>",
colloq: ";",
plaintext: "Shield an ally from damage based on your Health",
from: [
"3097",
"3067"
],
into: [ ],
image: {
full: "3401.png",
sprite: "item1.png",
group: "item",
x: 192,
y: 432,
w: 48,
h: 48
},
gold: {
base: 550,
purchasable: true,
total: 2200,
sell: 880
},
tags: [
"Active",
"CooldownReduction",
"GoldPer",
"Health",
"HealthRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 450
},
effect: {
Effect1Amount: "320",
Effect2Amount: "50",
Effect3Amount: "0.1",
Effect4Amount: "4",
Effect5Amount: "-0.4",
Effect6Amount: "2",
Effect7Amount: "60",
Effect8Amount: "120"
},
depth: 3
},
3460: {
name: "Golden Transcendence",
description: "<unique>Active:</unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''</font></i>",
colloq: ";",
plaintext: "",
inStore: false,
into: [ ],
image: {
full: "3460.png",
sprite: "item1.png",
group: "item",
x: 432,
y: 432,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [
"Active",
"Trinket"
],
maps: {
1: false,
8: true,
10: false,
11: false,
12: false,
14: false
},
stats: { }
},
3461: {
name: "Golden Transcendence (Disabled)",
description: "<unique>Active:</unique> Use this trinket to teleport to one of the battle platforms. Can only be used from the summoning platform.<br><br><i><font color='#FDD017'>''It is at this magical precipice where a champion is dismantled, reforged, and empowered.''</font></i>",
colloq: ";",
plaintext: "",
inStore: false,
into: [ ],
image: {
full: "3461.png",
sprite: "item2.png",
group: "item",
x: 0,
y: 0,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [
"Active",
"Trinket"
],
maps: {
1: false,
8: true,
10: false,
11: false,
12: false,
14: false
},
stats: { }
},
3462: {
name: "Seer Stone (Trinket)",
description: "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Reveals a small area within <font color='#FFFFF'>2500</font> range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)",
colloq: "blue;",
plaintext: "Briefly reveals a nearby targeted area",
inStore: false,
into: [ ],
image: {
full: "3462.png",
sprite: "item2.png",
group: "item",
x: 48,
y: 0,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [
"Active",
"Trinket",
"Vision"
],
maps: {
1: false,
8: true,
10: false,
11: false,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "2500",
Effect2Amount: "60",
Effect3Amount: "3",
Effect4Amount: "5",
Effect5Amount: "550"
}
},
3504: {
name: "Ardent Censer",
description: "<stats>+60 Ability Power<br>+10% Cooldown Reduction<br><mana>+50% Base Mana Regen </mana></stats><br><br><unique>UNIQUE Passive:</unique> +10% Heal and Shield Power<br><unique>UNIQUE Passive:</unique> +8% Movement Speed<br><unique>UNIQUE Passive:</unique> Your heals and shields on another allied champion grant them 20% Attack Speed and their attacks drain 20 health on-hit for 6 seconds.<br><br><rules>(This does not include regeneration effects or effects on yourself.)</rules>",
colloq: "",
plaintext: "Shield and heal effects on other units grant them Attack Speed and their attacks drain life",
from: [
"3114",
"3113"
],
into: [ ],
image: {
full: "3504.png",
sprite: "item2.png",
group: "item",
x: 96,
y: 0,
w: 48,
h: 48
},
gold: {
base: 650,
purchasable: true,
total: 2300,
sell: 1610
},
tags: [
"CooldownReduction",
"ManaRegen",
"NonbootsMovement",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 60
},
effect: {
Effect1Amount: "0.08",
Effect2Amount: "0.2",
Effect3Amount: "6",
Effect4Amount: "20",
Effect5Amount: "0.1"
},
depth: 3
},
3508: {
name: "Essence Reaver",
description: "<stats>+70 Attack Damage<br>+20% Critical Strike Chance</stats><br><br><unique>UNIQUE Passive:</unique> +10% Cooldown Reduction<br><unique>UNIQUE Passive:</unique> Gain increasingly more Cooldown Reduction from Critical Strike Chance provided by other sources (maximum +20% additional Cooldown Reduction at 30% Critical Strike Chance).<br><unique>UNIQUE Passive:</unique> Critical strikes restore 3% of your maximum Mana pool.",
colloq: ";",
plaintext: "Critical Strike provides Cooldown Reduction and Mana",
from: [
"1038",
"3133",
"1018"
],
into: [ ],
image: {
full: "3508.png",
sprite: "item2.png",
group: "item",
x: 144,
y: 0,
w: 48,
h: 48
},
gold: {
base: 400,
purchasable: true,
total: 3600,
sell: 2520
},
tags: [
"CooldownReduction",
"CriticalStrike",
"Damage",
"ManaRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 70,
FlatCritChanceMod: 0.2
},
effect: {
Effect1Amount: "0.1",
Effect2Amount: "0.03",
Effect3Amount: "0.2",
Effect4Amount: "0.3",
Effect5Amount: "0.016667",
Effect6Amount: "0.166667"
},
depth: 3
},
3512: {
name: "Zz'Rot Portal",
description: "<stats>+55 Armor<br>+55 Magic Resist<br>+125% Base Health Regen <br></stats><br><unique>UNIQUE Passive - Point Runner:</unique> Builds up to +20% Movement Speed over 2 seconds while near turrets, fallen turrets and Void Gates.<br><active>UNIQUE Active:</active> Spawns a <a href='VoidGate'>Void Gate</a> for 150 seconds (150 second cooldown).<br><br>Every 4 seconds the gate makes a <a href='Voidspawn'>Voidspawn</a>. The first and every fourth Voidspawn gains 15% of maximum Health as damage.",
colloq: ";Void Gate",
plaintext: "Makes a Voidspawn generating Void Gate to push a lane with.",
from: [
"2053",
"1057"
],
into: [ ],
image: {
full: "3512.png",
sprite: "item2.png",
group: "item",
x: 192,
y: 0,
w: 48,
h: 48
},
gold: {
base: 780,
purchasable: true,
total: 2700,
sell: 1890
},
tags: [
"Active",
"Armor",
"HealthRegen",
"NonbootsMovement",
"SpellBlock"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatArmorMod: 55,
FlatSpellBlockMod: 55
},
effect: {
Effect1Amount: "20",
Effect2Amount: "4",
Effect3Amount: "50",
Effect4Amount: "20",
Effect5Amount: "150",
Effect6Amount: "150",
Effect7Amount: "0.5",
Effect8Amount: "0.15"
},
depth: 4
},
3599: {
name: "The Black Spear",
description: "<stats></stats><br><active>Active:</active> Offer to bind with an ally for the remainder of the game, becoming Oathsworn Allies. Oathsworn empowers you both while near one another.",
colloq: ";spear",
plaintext: "Kalista's spear that binds an Oathsworn Ally.",
requiredChampion: "Kalista",
into: [ ],
image: {
full: "3599.png",
sprite: "item2.png",
group: "item",
x: 240,
y: 0,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [
"Active"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { }
},
3630: {
name: "Siege Teleport",
description: "<unique>Active:</unique> Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.",
colloq: "",
plaintext: "",
inStore: false,
into: [ ],
image: {
full: "3630.png",
sprite: "item2.png",
group: "item",
x: 336,
y: 96,
w: 48,
h: 48
},
gold: {
base: 10,
purchasable: false,
total: 10,
sell: 7
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: false,
12: false,
14: false
},
stats: { }
},
3631: {
name: "Siege Ballista",
description: "<br><font color='#FF9900'>Deploys a ballista that shoots the closest turret.</font><br><br>Places a long range ballista if within 2200 range of an enemy turret. After an 5 second delay, it will begin firing at the nearest enemy turret, dealing heavy damage. If the targeted turret expires, the ballista will as well.",
colloq: "",
plaintext: "Place a long range anti-turret ballista",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "3631.png",
sprite: "item2.png",
group: "item",
x: 384,
y: 96,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "5",
Effect2Amount: "5",
Effect3Amount: "20",
Effect4Amount: "3",
Effect5Amount: "0",
Effect6Amount: "2200",
Effect7Amount: "10",
Effect8Amount: "0"
}
},
3632: {
name: "",
description: "",
colloq: ";",
plaintext: "",
inStore: false,
into: [ ],
image: {
full: "3632.png",
sprite: "item2.png",
group: "item",
x: 432,
y: 96,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "15",
Effect2Amount: "1",
Effect3Amount: "310",
Effect4Amount: "5000",
Effect5Amount: "20",
Effect6Amount: "0",
Effect7Amount: "3",
Effect8Amount: "45"
}
},
3633: {
name: "Siege Teleport",
description: "<unique>Active:</unique> Use this trinket to teleport to one of your team's port pads. Can only be used from the summoning platform.",
colloq: "",
plaintext: "",
inStore: false,
into: [ ],
image: {
full: "3633.png",
sprite: "item2.png",
group: "item",
x: 0,
y: 144,
w: 48,
h: 48
},
gold: {
base: 10,
purchasable: false,
total: 10,
sell: 7
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: false,
12: false,
14: false
},
stats: { }
},
3634: {
name: "Tower: Beam of Ruination",
description: "<br><font color='#FF9900'>Attach, then recast to fire a damaging beam from a turret to your cursor.</font><br><br><font color='#FF9900'>First Cast:</font> Attach a Slayer Beam to the target turret that can be fired 3 times.<br></br><font color='#FF9900'>Next Three Casts:</font> Fires the attached beam towards your cursor, dealing 30/level + 30% of the hit target's maximum health (20% damage to minions) in magic damage to all targets in a line.<br></br><br></br>Beam will last 15 seconds, or until it has been fired 3 times.",
colloq: "",
plaintext: "Attaches a three shot beam to a turret which can then be aimed and fired",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "3634.png",
sprite: "item2.png",
group: "item",
x: 48,
y: 144,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "3",
Effect2Amount: "1.5",
Effect3Amount: "3000",
Effect4Amount: "0",
Effect5Amount: "30",
Effect6Amount: "0.2",
Effect7Amount: "15",
Effect8Amount: "0.3"
}
},
3635: {
name: "Port Pad",
description: "<br><font color='#FF9900'>Deploy an additional teleport target.</font><br><br>Places a Port Pad at target location. After a 4 second delay, it activates, allowing you or your allies to teleport to it from base.",
colloq: "",
plaintext: "Creates another point for your team to Teleport to",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "3635.png",
sprite: "item2.png",
group: "item",
x: 96,
y: 144,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "4",
Effect2Amount: "1000",
Effect3Amount: "3",
Effect4Amount: "10"
}
},
3636: {
name: "Tower: Storm Bulwark",
description: "<br><font color='#FF9900'>Makes a turret go invulnerable, then rain fire.</font><br><br>Makes the target turret invulnerable for 6 seconds. Two seconds before expiry, it unleashes a missile volley, dealing 650 true damage over the remaining time to all nearby enemies.<br><br>Cannot be used on the same turret more than once in 15 seconds",
colloq: "",
plaintext: "Make a turret go invulnerable while charging a powerful barrage",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "3636.png",
sprite: "item2.png",
group: "item",
x: 144,
y: 144,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: {
FlatCritChanceMod: 3
},
effect: {
Effect1Amount: "6",
Effect2Amount: "15",
Effect3Amount: "650",
Effect4Amount: "825",
Effect5Amount: "1.2"
}
},
3637: {
name: "Nexus Siege: Siege Weapon Slot",
description: "In Nexus Siege, Summoner Spells are replaced with Siege Weapon Slots. Spend Crystal Shards to buy single-use Siege Weapons from the item shop, then use your Summoner Spell keys to activate them!",
colloq: "",
plaintext: "",
inStore: false,
into: [ ],
image: {
full: "3637.png",
sprite: "item2.png",
group: "item",
x: 192,
y: 144,
w: 48,
h: 48
},
gold: {
base: 10,
purchasable: false,
total: 10,
sell: 7
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: false,
12: false,
14: false
},
stats: { }
},
3640: {
name: "Flash Zone",
description: "<br><font color='#FF9900'>Allows team to cast Flash repeatedly in a limited zone.</font><br><br>Creates a magic zone for your team for 5 seconds. While in this zone, you and your allies have your summoner spells replaced by an instant cast blink that moves you to any location in the zone (1 second cooldown)",
colloq: "",
plaintext: "Allows you and allies to repeatedly flash while in a zone",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "3640.png",
sprite: "item2.png",
group: "item",
x: 240,
y: 144,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "1",
Effect2Amount: "5"
}
},
3641: {
name: "Vanguard Banner",
description: "<br><font color='#FF9900'>Place a banner that buffs minions.</font><br><br>Place a Vanguard Banner at target location. After an 2 second delay, any nearby minions will be granted a buff, increasing their damage by 50%, and granting them 50 Armor and 100 Magic Resistance while within range.",
colloq: "",
plaintext: "Strengthens nearby minions",
consumed: true,
into: [ ],
image: {
full: "3641.png",
sprite: "item2.png",
group: "item",
x: 288,
y: 144,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "0",
Effect2Amount: "0.5",
Effect3Amount: "50",
Effect4Amount: "100",
Effect5Amount: "5",
Effect6Amount: "0.3",
Effect7Amount: "2",
Effect8Amount: "10"
}
},
3642: {
name: "Siege Refund",
description: "Refunds all purchased Siege Weapons for their full price.",
colloq: ";",
plaintext: "Refunds all current Siege Weapons",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "3642.png",
sprite: "item2.png",
group: "item",
x: 336,
y: 144,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "1"
}
},
3643: {
name: "Entropy Field",
description: "<br><font color='#FF9900'>Stun minions and slow champions in an area.</font><br><br>Places an Entropy Field at target location for 5 seconds. Enemy minions and Siege Ballistas trapped in the field are unable to move or attack while in the field. Enemy champions in the field have their Movement Speed reduced by 25%.",
colloq: "",
plaintext: "Places a field that stuns enemy minions and slows champions",
consumed: true,
consumeOnFull: true,
into: [ ],
image: {
full: "3643.png",
sprite: "item2.png",
group: "item",
x: 384,
y: 144,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "5",
Effect2Amount: "600",
Effect3Amount: "25"
}
},
3645: {
name: "Seer Stone (Trinket)",
description: "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Reveals a small area within <font color='#FFFFF'>1400</font> range for 3 seconds. Enemy champions will be revealed for 5 seconds (60 second cooldown)",
colloq: "blue;",
plaintext: "Briefly reveals a nearby targeted area",
inStore: false,
into: [ ],
image: {
full: "3645.png",
sprite: "item2.png",
group: "item",
x: 432,
y: 144,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [
"Active",
"Trinket",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "1400",
Effect2Amount: "60",
Effect3Amount: "3",
Effect4Amount: "5",
Effect5Amount: "550"
}
},
3647: {
name: "Shield Totem",
description: "<br><font color='#FF9900'>Place a totem that shields nearby deployables.</font><br><br>Places a Shield Totem at target location. After a 2 second delay, the totem will activate, granting a 2 (+1 per additional Shield Totem) strength shield to all nearby deployables.",
colloq: "",
plaintext: "Grants bonus health to nearby Siege Weapons",
consumed: true,
into: [ ],
image: {
full: "3647.png",
sprite: "item2.png",
group: "item",
x: 0,
y: 192,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "2",
Effect2Amount: "3",
Effect3Amount: "2",
Effect4Amount: "1",
Effect5Amount: "1000",
Effect6Amount: "0.25",
Effect7Amount: "10",
Effect8Amount: "1"
}
},
3648: {
name: "Siege Teleport (Inactive)",
description: "",
colloq: "",
plaintext: "",
inStore: false,
into: [ ],
image: {
full: "3648.png",
sprite: "item2.png",
group: "item",
x: 48,
y: 192,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { }
},
3649: {
name: "Siege Sight Warder",
description: "<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Places a <font color='#FFFFFF'>Stealth Ward</font> that lasts <font color='#FFFFFF'>30</font> seconds (30 second cooldown).",
colloq: "",
plaintext: "",
inStore: false,
into: [ ],
image: {
full: "3649.png",
sprite: "item2.png",
group: "item",
x: 96,
y: 192,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: false,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "30"
}
},
3671: {
name: "Enchantment: Warrior",
description: "<stats>+60 Attack Damage<br>+10% Cooldown Reduction</stats>",
colloq: ";",
plaintext: "",
from: [
"3133"
],
hideFromAll: true,
into: [ ],
image: {
full: "3671.png",
sprite: "item2.png",
group: "item",
x: 288,
y: 0,
w: 48,
h: 48
},
gold: {
base: 525,
purchasable: true,
total: 1625,
sell: 1138
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 60
},
depth: 3
},
3672: {
name: "Enchantment: Cinderhulk",
description: "<stats>+400 Health<br>+15% Bonus Health</stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 7 (+2 per champion level) magic damage a second to nearby enemies while in combat. Deals 100% bonus damage to monsters. ",
colloq: ";",
plaintext: "",
from: [
"3751"
],
hideFromAll: true,
into: [ ],
image: {
full: "3672.png",
sprite: "item2.png",
group: "item",
x: 336,
y: 0,
w: 48,
h: 48
},
gold: {
base: 525,
purchasable: true,
total: 1625,
sell: 1138
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 400
},
depth: 3
},
3673: {
name: "Enchantment: Runic Echoes",
description: "<stats>+60 Ability Power<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Echo:</unique> Gain charges upon moving or casting. At 100 charges, the next damaging spell hit expends all charges to deal 60 (+10% of Ability Power) bonus magic damage to up to 4 targets on hit.<br><br>This effect deals 250% damage to Large Monsters. Hitting a Large Monster with this effect will restore 18% of your missing Mana.",
colloq: ";",
plaintext: "",
from: [
"3113",
"1052"
],
hideFromAll: true,
into: [ ],
image: {
full: "3673.png",
sprite: "item2.png",
group: "item",
x: 384,
y: 0,
w: 48,
h: 48
},
gold: {
base: 340,
purchasable: true,
total: 1625,
sell: 1138
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMagicDamageMod: 60,
PercentMovementSpeedMod: 0.07
},
depth: 3
},
3675: {
name: "Enchantment: Bloodrazor",
description: "<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.",
colloq: ";",
plaintext: "",
from: [
"1043"
],
hideFromAll: true,
into: [ ],
image: {
full: "3675.png",
sprite: "item2.png",
group: "item",
x: 432,
y: 0,
w: 48,
h: 48
},
gold: {
base: 625,
purchasable: true,
total: 1625,
sell: 1138
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
PercentAttackSpeedMod: 0.5
},
depth: 3
},
3680: {
name: "Frosted Snax",
description: "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King lobs many projectiles at far-away enemies, each dealing <levelScale>213-775</levelScale> magic damage to targets in the center of the impact, scaling down to <levelScale>85-310</levelScale> on the edge. (120s cooldown)",
colloq: ";",
plaintext: "King: Fires a barrage of icy artillery",
into: [ ],
image: {
full: "3680.png",
sprite: "item2.png",
group: "item",
x: 384,
y: 192,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [
"Lane",
"Trinket"
],
maps: {
1: false,
8: false,
10: false,
11: false,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "5",
Effect2Amount: "120",
Effect3Amount: "40",
Effect4Amount: "15",
Effect5Amount: "250",
Effect6Amount: "213",
Effect7Amount: "775",
Effect8Amount: "85"
}
},
3681: {
name: "Super Spicy Snax",
description: "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King breathes fire for 4 seconds, dealing <levelScale>705-1479</levelScale> true damage over the duration to enemies caught in the cone. Deals up to 560 true damage to Turrets. (120s cooldown)",
colloq: ";",
plaintext: "King: Shoots flames that burn units and Turrets",
into: [ ],
image: {
full: "3681.png",
sprite: "item2.png",
group: "item",
x: 432,
y: 192,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [
"Lane",
"Trinket"
],
maps: {
1: false,
8: false,
10: false,
11: false,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "4",
Effect2Amount: "120",
Effect3Amount: "700",
Effect4Amount: "2.35",
Effect5Amount: "560",
Effect6Amount: "705",
Effect7Amount: "1479"
}
},
3682: {
name: "Espresso Snax",
description: "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King leaps into the air and crashes down twice, knocking enemies away and dealing <levelScale>40-190</levelScale> physical damage. He also gains a decaying shield for <font color='#FF3300'>20% of his maximum health</font>, lasting 4 seconds. (30s cooldown)",
colloq: ";",
plaintext: "King: Knocks back and grants a large shield",
into: [ ],
image: {
full: "3682.png",
sprite: "item2.png",
group: "item",
x: 0,
y: 240,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [
"Lane",
"Trinket"
],
maps: {
1: false,
8: false,
10: false,
11: false,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "1.8",
Effect2Amount: "30",
Effect3Amount: "10",
Effect4Amount: "10",
Effect5Amount: "20",
Effect6Amount: "4",
Effect7Amount: "600",
Effect8Amount: "40"
}
},
3683: {
name: "Rainbow Snax Party Pack!",
description: "<active>Active - <a href='FeedTheKing'>Feed The King</a>:</active> The King tosses many Snax behind the enemy, attracting Poros which dash back towards him. Enemy champions hit will be knocked forwards and dealt <levelScale>230-680</levelScale> physical damage. (120s cooldown)",
colloq: ";",
plaintext: "King: Poros knock enemies towards him",
into: [ ],
image: {
full: "3683.png",
sprite: "item2.png",
group: "item",
x: 48,
y: 240,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [
"Lane",
"Trinket"
],
maps: {
1: false,
8: false,
10: false,
11: false,
12: true,
14: false
},
stats: { },
effect: {
Effect1Amount: "6",
Effect2Amount: "120",
Effect3Amount: "140",
Effect4Amount: "30",
Effect5Amount: "1",
Effect6Amount: "1500",
Effect7Amount: "1650",
Effect8Amount: "1000"
}
},
3706: {
name: "Stalker's Blade",
description: "<groupLimit>Limited to 1 Jungle item</groupLimit><br><br><stats>+10% Life Steal vs. Monsters<br><mana>+180% Base Mana Regen while in Jungle</mana></stats><br><br><unique>UNIQUE Passive - Chilling Smite:</unique> Smite can be cast on enemy champions, dealing reduced true damage and stealing 20% Movement Speed for 2 seconds. <br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
colloq: ";jungle;Jungle;jangle",
plaintext: "Lets your Smite slow Champions",
from: [
"1039",
"1041"
],
into: [
"1400",
"1401",
"1402",
"1416"
],
image: {
full: "3706.png",
sprite: "item2.png",
group: "item",
x: 0,
y: 48,
w: 48,
h: 48
},
gold: {
base: 300,
purchasable: true,
total: 1000,
sell: 700
},
tags: [
"Jungle",
"LifeSteal",
"ManaRegen",
"NonbootsMovement",
"OnHit",
"Slow"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "-0.2",
Effect7Amount: "2",
Effect8Amount: "3"
},
depth: 2
},
3711: {
name: "Tracker's Knife",
description: "<groupLimit>Limited to 1 Jungle item</groupLimit><br><br><stats>+10% Life Steal vs. Monsters<br><mana>+180% Base Mana Regen while in Jungle</mana></stats><br><br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.<br><active>UNIQUE Active - Warding:</active> Consumes a charge to place a <font color='#BBFFFF'>Stealth Ward</font> that reveals the surrounding area for 150 seconds. Holds up to 2 charges which refill upon visiting the shop. <br><br><rules>(A player may only have 3 <font color='#BBFFFF'>Stealth Wards</font> on the map at one time. Unique Passives with the same name don't stack.)</rules>",
colloq: ";jungle;Jungle",
plaintext: "Provides Stealth Wards over time",
from: [
"1039",
"1041"
],
into: [
"1408",
"1409",
"1410",
"1418"
],
image: {
full: "3711.png",
sprite: "item2.png",
group: "item",
x: 48,
y: 48,
w: 48,
h: 48
},
gold: {
base: 300,
purchasable: true,
total: 1000,
sell: 700
},
tags: [
"Active",
"Jungle",
"LifeSteal",
"ManaRegen",
"OnHit",
"Vision"
],
maps: {
1: false,
8: false,
10: false,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "3",
Effect7Amount: "20",
Effect8Amount: "30"
},
depth: 2
},
3715: {
name: "Skirmisher's Sabre",
description: "<groupLimit>Limited to 1 Jungle item</groupLimit><br><br><stats>+10% Life Steal vs. Monsters<br><mana>+180% Base Mana Regen while in Jungle</mana></stats><br><br><passive>Passive - Challenging Smite:</passive> Smite can be cast on enemy champions, marking them for 4 seconds. While marked, basic attacks deal bonus true damage over 3 seconds, you have vision of them, and their damage to you is reduced by 20%.<br><unique>UNIQUE Passive - Tooth / Nail:</unique> Basic attacks deal 25 bonus damage vs. monsters. Damaging a monster with a spell or attack steals 30 Health over 5 seconds. Killing monsters grants <font color='#99BBBB'><a href='SpecialJungleExperience'>special bonus experience</a></font>.",
colloq: ";jungle;Jungle",
plaintext: "Lets your Smite mark Champions, giving you combat power against them.",
from: [
"1039",
"1041"
],
into: [
"1412",
"1413",
"1414",
"1419"
],
image: {
full: "3715.png",
sprite: "item2.png",
group: "item",
x: 96,
y: 48,
w: 48,
h: 48
},
gold: {
base: 300,
purchasable: true,
total: 1000,
sell: 700
},
tags: [
"Jungle",
"LifeSteal",
"ManaRegen",
"OnHit"
],
maps: {
1: false,
8: false,
10: true,
11: true,
12: false,
14: false
},
stats: { },
effect: {
Effect1Amount: "30",
Effect2Amount: "25",
Effect3Amount: "1.8",
Effect4Amount: "5",
Effect5Amount: "30",
Effect6Amount: "3",
Effect7Amount: "20",
Effect8Amount: "18"
},
depth: 2
},
3742: {
name: "Dead Man's Plate",
description: "<stats>+500 Health<br>+50 Armor</stats><br><br><unique>UNIQUE Passive - Dreadnought:</unique> While moving, build stacks of Momentum, increasing movement speed by up to 60 at 100 stacks. Momentum quickly decays while under the effects of a stun, taunt, fear, polymorph, or immobilize effect, and slowly decays while slowed.<br><unique>UNIQUE Passive - Crushing Blow:</unique> Basic attacks discharge all Momentum, dealing 1 physical damage per 2 stacks. If 100 stacks are discharged, damage is doubled and the target is slowed by 50% decaying over 1 second (melee only).<br><br><flavorText>''There's only one way you'll get this armor from me...'' - forgotten namesake</flavorText>",
colloq: ";juggernaut;dreadnought",
plaintext: "Build momentum as you move around then smash into enemies.",
from: [
"1031",
"1011"
],
into: [ ],
image: {
full: "3742.png",
sprite: "item2.png",
group: "item",
x: 144,
y: 48,
w: 48,
h: 48
},
gold: {
base: 1100,
purchasable: true,
total: 2900,
sell: 2030
},
tags: [
"Armor",
"Bilgewater",
"Health",
"NonbootsMovement",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 500,
FlatArmorMod: 50
},
effect: {
Effect1Amount: "60",
Effect2Amount: "100",
Effect3Amount: "2",
Effect4Amount: "-0.5",
Effect5Amount: "1"
},
depth: 3
},
3748: {
name: "Titanic Hydra",
description: "<stats>+450 Health<br>+35 Attack Damage<br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Cleave:</unique> Basic attacks deal 5 + 1% of your maximum health as bonus physical damage to your target and 40 + 2.5% of your maximum health as physical damage to other enemies in a cone on hit.<br><active>UNIQUE Active - Crescent:</active> Cleave damage to all targets is increased to 40 + 10% of your maximum health as bonus physical damage in a larger cone for your next basic attack (20 second cooldown).<br><br><rules>(Unique Passives with the same name don't stack.)</rules>",
colloq: ";juggernaut",
plaintext: "Deals area of effect damage based on owner's health",
from: [
"3077",
"1028",
"3052"
],
into: [ ],
image: {
full: "3748.png",
sprite: "item2.png",
group: "item",
x: 192,
y: 48,
w: 48,
h: 48
},
gold: {
base: 700,
purchasable: true,
total: 3500,
sell: 2450
},
tags: [
"Active",
"Damage",
"Health",
"HealthRegen",
"OnHit"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 450,
FlatPhysicalDamageMod: 35
},
effect: {
Effect1Amount: "0.025",
Effect2Amount: "40",
Effect3Amount: "0",
Effect4Amount: "0",
Effect5Amount: "0.1",
Effect6Amount: "0",
Effect7Amount: "20",
Effect8Amount: "40"
},
depth: 3
},
3751: {
name: "Bami's Cinder",
description: "<stats>+280 Health </stats><br><br><unique>UNIQUE Passive - Immolate:</unique> Deals 5 (+1 per champion level) magic damage per second to nearby enemies. Deals 50% bonus damage to minions and monsters.",
colloq: "jungle;Jungle;jangle",
plaintext: "Grants Health and Immolate Aura",
from: [
"1028"
],
into: [
"3068",
"3717",
"3725",
"1401",
"1409",
"1413",
"3672"
],
image: {
full: "3751.png",
sprite: "item2.png",
group: "item",
x: 240,
y: 48,
w: 48,
h: 48
},
gold: {
base: 700,
purchasable: true,
total: 1100,
sell: 770
},
tags: [
"Health"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 280
},
effect: {
Effect1Amount: "5",
Effect2Amount: "1",
Effect3Amount: "50"
},
depth: 2
},
3800: {
name: "Righteous Glory",
description: "<stats>+500 Health<br><mana>+300 Mana</mana><br>+100% Base Health Regen </stats><br><br><unique>UNIQUE Passive - Eternity:</unique> 15% of damage taken from champions is gained as Mana. Spending Mana restores 20% of the cost as Health, up to 25 per spell cast. <br><unique>UNIQUE Active:</unique> Grants +75% Movement Speed when moving towards enemies or enemy turrets for 4 seconds. After 3 seconds, a shockwave is emitted, slowing nearby enemy champion Movement Speed by 75% for 2 second(s) (90 second cooldown).<br><br>This effect may be reactivated early to instantly release the shockwave.",
colloq: ";",
plaintext: "Grants Health, Mana. Activate to speed towards enemies and slow them.",
from: [
"3010",
"3801"
],
into: [ ],
image: {
full: "3800.png",
sprite: "item2.png",
group: "item",
x: 288,
y: 48,
w: 48,
h: 48
},
gold: {
base: 750,
purchasable: true,
total: 2500,
sell: 1750
},
tags: [
"Active",
"Health",
"HealthRegen",
"Mana",
"ManaRegen",
"NonbootsMovement",
"Slow"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 500,
FlatMPPoolMod: 300
},
effect: {
Effect1Amount: "0.75",
Effect2Amount: "4",
Effect3Amount: "-0.75",
Effect4Amount: "2",
Effect5Amount: "90",
Effect6Amount: "0.2",
Effect7Amount: "25",
Effect8Amount: "0.15"
},
depth: 3
},
3801: {
name: "Crystalline Bracer",
description: "<stats>+200 Health<br>+50% Base Health Regen </stats>",
colloq: ";",
plaintext: "Grants Health and Health Regen",
from: [
"1028",
"1006"
],
into: [
"3083",
"3084",
"3107",
"3109",
"3800"
],
image: {
full: "3801.png",
sprite: "item2.png",
group: "item",
x: 336,
y: 48,
w: 48,
h: 48
},
gold: {
base: 100,
purchasable: true,
total: 650,
sell: 455
},
tags: [
"Health",
"HealthRegen"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatHPPoolMod: 200
},
depth: 2
},
3802: {
name: "Lost Chapter",
description: "<stats>+25 Ability Power<br><mana>+300 Mana</mana></stats><br><br><unique>UNIQUE Passive:</unique> Upon levelling up, restores 20% of your maximum Mana over 3 seconds.",
colloq: ";",
plaintext: "Restores Mana upon levelling up.",
from: [
"1052",
"1027"
],
into: [
"3165"
],
image: {
full: "3802.png",
sprite: "item2.png",
group: "item",
x: 384,
y: 48,
w: 48,
h: 48
},
gold: {
base: 115,
purchasable: true,
total: 900,
sell: 630
},
tags: [
"Mana",
"ManaRegen",
"SpellDamage"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatMPPoolMod: 300,
FlatMagicDamageMod: 25
},
effect: {
Effect1Amount: "25",
Effect2Amount: "-0.1",
Effect3Amount: "15",
Effect4Amount: "10",
Effect5Amount: "20",
Effect6Amount: "5",
Effect7Amount: "0.2",
Effect8Amount: "3"
},
depth: 2
},
3812: {
name: "Death's Dance",
description: "<stats>+75 Attack Damage<br>+10% Cooldown Reduction</stats><br><br><unique>UNIQUE Passive:</unique> Dealing physical damage heals for 15% of the damage dealt. This is 33% as effective for Area of Effect damage.<br><unique>UNIQUE Passive:</unique> 15% of damage taken is dealt as a Bleed effect over 3 seconds instead.",
colloq: ";Bloodbag",
plaintext: "Trades incoming damage now for incoming damage later",
stacks: 0,
from: [
"1053",
"1037",
"3133"
],
into: [ ],
image: {
full: "3812.png",
sprite: "item2.png",
group: "item",
x: 432,
y: 48,
w: 48,
h: 48
},
gold: {
base: 625,
purchasable: true,
total: 3500,
sell: 2450
},
tags: [
"CooldownReduction",
"Damage",
"LifeSteal"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 75
},
effect: {
Effect1Amount: "0.15",
Effect2Amount: "0.15",
Effect3Amount: "3"
},
depth: 3
},
3814: {
name: "Edge of Night",
description: "<stats>+60 Attack Damage<br>+35 Magic Resist</stats><br><br><unique>UNIQUE Passive:</unique> +15 <a href='Lethality'>Lethality</a><br><unique>UNIQUE Passive:</unique> +20 Movement Speed out of Combat<br><unique>UNIQUE Active - Night's Veil:</unique> Channel for 1.5 second to grant a spell shield that blocks the next enemy ability. Lasts for 10 seconds (45 second cooldown).<br><br><rules>(Can move while channeling, but taking damage breaks the channel.)</rules>",
colloq: ";lethality",
plaintext: "Blocks an incoming enemy spell.",
stacks: 0,
from: [
"1037",
"3134",
"1033"
],
into: [ ],
image: {
full: "3814.png",
sprite: "item2.png",
group: "item",
x: 336,
y: 192,
w: 48,
h: 48
},
gold: {
base: 675,
purchasable: true,
total: 3100,
sell: 2170
},
tags: [
"ArmorPenetration",
"Damage",
"NonbootsMovement",
"SpellBlock"
],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: {
FlatPhysicalDamageMod: 60,
FlatSpellBlockMod: 35
},
effect: {
Effect1Amount: "15",
Effect2Amount: "0",
Effect3Amount: "20",
Effect4Amount: "45",
Effect5Amount: "5"
},
depth: 3
},
3901: {
name: "Fire at Will",
description: "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage fires at an increasing rate over time (additional 6 waves over the duration).",
colloq: "",
plaintext: "Cannon Barrage gains extra waves",
consumed: true,
consumeOnFull: true,
requiredChampion: "Gangplank",
into: [ ],
image: {
full: "3901.png",
sprite: "item2.png",
group: "item",
x: 0,
y: 96,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { }
},
3902: {
name: "Death's Daughter",
description: "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Cannon Barrage additionally fires a mega-cannonball at center of the Barrage, dealing 300% true damage and slowing them by 60% for 1.5 seconds. ",
colloq: "",
plaintext: "Cannon Barrage fires a mega-cannonball",
consumed: true,
consumeOnFull: true,
requiredChampion: "Gangplank",
into: [ ],
image: {
full: "3902.png",
sprite: "item2.png",
group: "item",
x: 48,
y: 96,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { }
},
3903: {
name: "Raise Morale",
description: "Requires 500 Silver Serpents.<br><br><unique>UNIQUE Passive:</unique> Allies in the Cannon Barrage gain 30% Movement Speed for 2 seconds.",
colloq: "",
plaintext: "Cannon Barrage hastes allies",
consumed: true,
consumeOnFull: true,
requiredChampion: "Gangplank",
into: [ ],
image: {
full: "3903.png",
sprite: "item2.png",
group: "item",
x: 96,
y: 96,
w: 48,
h: 48
},
gold: {
base: 0,
purchasable: true,
total: 0,
sell: 0
},
tags: [ ],
maps: {
1: false,
8: true,
10: true,
11: true,
12: true,
14: false
},
stats: { }
}
},
groups: [
{
id: "AllLegendaries",
MaxGroupOwnable: "6"
},
{
id: "BootsAlacrity",
MaxGroupOwnable: "1"
},
{
id: "BootsCaptain",
MaxGroupOwnable: "1"
},
{
id: "BootsDistortion",
MaxGroupOwnable: "1"
},
{
id: "BootsFuror",
MaxGroupOwnable: "1"
},
{
id: "BootsHomeguard",
MaxGroupOwnable: "1"
},
{
id: "BootsNormal",
MaxGroupOwnable: "1"
},
{
id: "BootsTeleport",
MaxGroupOwnable: "1"
},
{
id: "BootsUpgrades",
MaxGroupOwnable: "6"
},
{
id: "BWMerc11",
MaxGroupOwnable: "1"
},
{
id: "BWMerc12",
MaxGroupOwnable: "1"
},
{
id: "BWMerc13",
MaxGroupOwnable: "1"
},
{
id: "BWMerc14",
MaxGroupOwnable: "1"
},
{
id: "BWMercDefense1",
MaxGroupOwnable: "0"
},
{
id: "BWMercDefense2",
MaxGroupOwnable: "0"
},
{
id: "BWMercDefense3",
MaxGroupOwnable: "0"
},
{
id: "BWMercOffense1",
MaxGroupOwnable: "0"
},
{
id: "BWMercOffense2",
MaxGroupOwnable: "0"
},
{
id: "BWMercOffense3",
MaxGroupOwnable: "0"
},
{
id: "BWMercUpgrade1",
MaxGroupOwnable: "0"
},
{
id: "BWMercUpgrade2",
MaxGroupOwnable: "0"
},
{
id: "BWMercUpgrade3",
MaxGroupOwnable: "0"
},
{
id: "DoransItems",
MaxGroupOwnable: "-1"
},
{
id: "FlaskGroup",
MaxGroupOwnable: "1"
},
{
id: "Flasks",
MaxGroupOwnable: null
},
{
id: "GangplankRUpgrade01",
MaxGroupOwnable: "1"
},
{
id: "GangplankRUpgrade02",
MaxGroupOwnable: "1"
},
{
id: "GangplankRUpgrade03",
MaxGroupOwnable: "1"
},
{
id: "GoldBase",
MaxGroupOwnable: "1"
},
{
id: "GreenWards",
MaxGroupOwnable: "3"
},
{
id: "GuardianItems",
MaxGroupOwnable: "1"
},
{
id: "HealthPotion",
MaxGroupOwnable: "5"
},
{
id: "Impact",
MaxGroupOwnable: "2"
},
{
id: "JungleItems",
MaxGroupOwnable: "1"
},
{
id: "ManaPotion",
MaxGroupOwnable: "5"
},
{
id: "MorelloBooks",
MaxGroupOwnable: "1"
},
{
id: "PinkWards",
MaxGroupOwnable: "2"
},
{
id: "PoroSnax",
MaxGroupOwnable: "2"
},
{
id: "RelicBase",
MaxGroupOwnable: "1"
},
{
id: "SiegeEmergencyShieldGroup",
MaxGroupOwnable: "-1"
},
{
id: "SiegeFlashZoneGroup",
MaxGroupOwnable: "-1"
},
{
id: "SiegeLaserAffixGroup",
MaxGroupOwnable: "-1"
},
{
id: "SiegeMissileBarrageGroup",
MaxGroupOwnable: "-1"
},
{
id: "SiegePortableBarracksGroup",
MaxGroupOwnable: "-1"
},
{
id: "SiegeRefundGroup",
MaxGroupOwnable: "-1"
},
{
id: "SiegeShieldGeneratorGroup",
MaxGroupOwnable: "-1"
},
{
id: "SiegeSniperCannonGroup",
MaxGroupOwnable: "-1"
},
{
id: "SiegeTeleportPadGroup",
MaxGroupOwnable: "-1"
},
{
id: "SiegeTimefieldGroup",
MaxGroupOwnable: "-1"
},
{
id: "TheBlackSpear",
MaxGroupOwnable: "1"
},
{
id: "_ItemGroupDefaults.txt",
MaxGroupOwnable: "-1"
}
],
tree: [
{
header: "START",
tags: [
"_SORTINDEX",
"LANE",
"JUNGLE"
]
},
{
header: "TOOLS",
tags: [
"_SORTINDEX",
"CONSUMABLE",
"GOLDPER",
"VISION"
]
},
{
header: "DEFENSE",
tags: [
"_SORTINDEX",
"HEALTH",
"ARMOR",
"SPELLBLOCK",
"HEALTHREGEN"
]
},
{
header: "ATTACK",
tags: [
"_SORTINDEX",
"DAMAGE",
"CRITICALSTRIKE",
"ATTACKSPEED",
"LIFESTEAL"
]
},
{
header: "MAGIC",
tags: [
"_SORTINDEX",
"SPELLDAMAGE",
"COOLDOWNREDUCTION",
"MANA",
"MANAREGEN"
]
},
{
header: "MOVEMENT",
tags: [
"_SORTINDEX",
"BOOTS",
"NONBOOTSMOVEMENT"
]
},
{
header: "UNCATEGORIZED",
tags: [
"ACTIVE",
"ARMORPENETRATION",
"AURA",
"MAGICPENETRATION",
"ONHIT",
"SLOW",
"STEALTH",
"TRINKET",
"SPELLVAMP",
"TENACITY"
]
}
]
}

export default itemData;
