let planets = [
    {
        "climate": "arid",
        "surface_water": "1",
        "name": "Tatooine",
        "diameter": "10465",
        "rotation_period": "23",
        "terrain": "desert",
        "gravity": "1 standard",
        "orbital_period": "304",
        "population": "200000",
        "id": 1
    },
    {
        "climate": "temperate",
        "surface_water": "40",
        "name": "Alderaan",
        "diameter": "12500",
        "rotation_period": "24",
        "terrain": "grasslands, mountains",
        "gravity": "1 standard",
        "orbital_period": "364",
        "population": "2000000000",
        "id": 2
    },
    {
        "climate": "temperate, tropical",
        "surface_water": "8",
        "name": "Yavin IV",
        "diameter": "10200",
        "rotation_period": "24",
        "terrain": "jungle, rainforests",
        "gravity": "1 standard",
        "orbital_period": "4818",
        "population": "1000",
        "id": 3
    },
    {
        "climate": "frozen",
        "surface_water": "100",
        "name": "Hoth",
        "diameter": "7200",
        "rotation_period": "23",
        "terrain": "tundra, ice caves, mountain ranges",
        "gravity": "1.1 standard",
        "orbital_period": "549",
        "population": "unknown",
        "id": 4
    },
    {
        "climate": "murky",
        "surface_water": "8",
        "name": "Dagobah",
        "diameter": "8900",
        "rotation_period": "23",
        "terrain": "swamp, jungles",
        "gravity": "N/A",
        "orbital_period": "341",
        "population": "unknown",
        "id": 5
    },
    {
        "climate": "temperate",
        "surface_water": "0",
        "name": "Bespin",
        "diameter": "118000",
        "rotation_period": "12",
        "terrain": "gas giant",
        "gravity": "1.5 (surface), 1 standard (Cloud City)",
        "orbital_period": "5110",
        "population": "6000000",
        "id": 6
    },
    {
        "climate": "temperate",
        "surface_water": "8",
        "name": "Endor",
        "diameter": "4900",
        "rotation_period": "18",
        "terrain": "forests, mountains, lakes",
        "gravity": "0.85 standard",
        "orbital_period": "402",
        "population": "30000000",
        "id": 7
    },
    {
        "climate": "temperate",
        "surface_water": "12",
        "name": "Naboo",
        "diameter": "12120",
        "rotation_period": "26",
        "terrain": "grassy hills, swamps, forests, mountains",
        "gravity": "1 standard",
        "orbital_period": "312",
        "population": "4500000000",
        "id": 8
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Coruscant",
        "diameter": "12240",
        "rotation_period": "24",
        "terrain": "cityscape, mountains",
        "gravity": "1 standard",
        "orbital_period": "368",
        "population": "1000000000000",
        "id": 9
    },
    {
        "climate": "temperate",
        "surface_water": "100",
        "name": "Kamino",
        "diameter": "19720",
        "rotation_period": "27",
        "terrain": "ocean",
        "gravity": "1 standard",
        "orbital_period": "463",
        "population": "1000000000",
        "id": 10
    },
    {
        "climate": "temperate, arid",
        "surface_water": "5",
        "name": "Geonosis",
        "diameter": "11370",
        "rotation_period": "30",
        "terrain": "rock, desert, mountain, barren",
        "gravity": "0.9 standard",
        "orbital_period": "256",
        "population": "100000000000",
        "id": 11
    },
    {
        "climate": "temperate, arid, windy",
        "surface_water": "0.9",
        "name": "Utapau",
        "diameter": "12900",
        "rotation_period": "27",
        "terrain": "scrublands, savanna, canyons, sinkholes",
        "gravity": "1 standard",
        "orbital_period": "351",
        "population": "95000000",
        "id": 12
    },
    {
        "climate": "hot",
        "surface_water": "0",
        "name": "Mustafar",
        "diameter": "4200",
        "rotation_period": "36",
        "terrain": "volcanoes, lava rivers, mountains, caves",
        "gravity": "1 standard",
        "orbital_period": "412",
        "population": "20000",
        "id": 13
    },
    {
        "climate": "tropical",
        "surface_water": "60",
        "name": "Kashyyyk",
        "diameter": "12765",
        "rotation_period": "26",
        "terrain": "jungle, forests, lakes, rivers",
        "gravity": "1 standard",
        "orbital_period": "381",
        "population": "45000000",
        "id": 14
    },
    {
        "climate": "artificial temperate ",
        "surface_water": "0",
        "name": "Polis Massa",
        "diameter": "0",
        "rotation_period": "24",
        "terrain": "airless asteroid",
        "gravity": "0.56 standard",
        "orbital_period": "590",
        "population": "1000000",
        "id": 15
    },
    {
        "climate": "frigid",
        "surface_water": "unknown",
        "name": "Mygeeto",
        "diameter": "10088",
        "rotation_period": "12",
        "terrain": "glaciers, mountains, ice canyons",
        "gravity": "1 standard",
        "orbital_period": "167",
        "population": "19000000",
        "id": 16
    },
    {
        "climate": "hot, humid",
        "surface_water": "unknown",
        "name": "Felucia",
        "diameter": "9100",
        "rotation_period": "34",
        "terrain": "fungus forests",
        "gravity": "0.75 standard",
        "orbital_period": "231",
        "population": "8500000",
        "id": 17
    },
    {
        "climate": "temperate, moist",
        "surface_water": "unknown",
        "name": "Cato Neimoidia",
        "diameter": "0",
        "rotation_period": "25",
        "terrain": "mountains, fields, forests, rock arches",
        "gravity": "1 standard",
        "orbital_period": "278",
        "population": "10000000",
        "id": 18
    },
    {
        "climate": "hot",
        "surface_water": "unknown",
        "name": "Saleucami",
        "diameter": "14920",
        "rotation_period": "26",
        "terrain": "caves, desert, mountains, volcanoes",
        "gravity": "unknown",
        "orbital_period": "392",
        "population": "1400000000",
        "id": 19
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Stewjon",
        "diameter": "0",
        "rotation_period": "unknown",
        "terrain": "grass",
        "gravity": "1 standard",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 20
    },
    {
        "climate": "polluted",
        "surface_water": "unknown",
        "name": "Eriadu",
        "diameter": "13490",
        "rotation_period": "24",
        "terrain": "cityscape",
        "gravity": "1 standard",
        "orbital_period": "360",
        "population": "22000000000",
        "id": 21
    },
    {
        "climate": "temperate",
        "surface_water": "70",
        "name": "Corellia",
        "diameter": "11000",
        "rotation_period": "25",
        "terrain": "plains, urban, hills, forests",
        "gravity": "1 standard",
        "orbital_period": "329",
        "population": "3000000000",
        "id": 22
    },
    {
        "climate": "hot",
        "surface_water": "60",
        "name": "Rodia",
        "diameter": "7549",
        "rotation_period": "29",
        "terrain": "jungles, oceans, urban, swamps",
        "gravity": "1 standard",
        "orbital_period": "305",
        "population": "1300000000",
        "id": 23
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Nal Hutta",
        "diameter": "12150",
        "rotation_period": "87",
        "terrain": "urban, oceans, swamps, bogs",
        "gravity": "1 standard",
        "orbital_period": "413",
        "population": "7000000000",
        "id": 24
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Dantooine",
        "diameter": "9830",
        "rotation_period": "25",
        "terrain": "oceans, savannas, mountains, grasslands",
        "gravity": "1 standard",
        "orbital_period": "378",
        "population": "1000",
        "id": 25
    },
    {
        "climate": "temperate",
        "surface_water": "98",
        "name": "Bestine IV",
        "diameter": "6400",
        "rotation_period": "26",
        "terrain": "rocky islands, oceans",
        "gravity": "unknown",
        "orbital_period": "680",
        "population": "62000000",
        "id": 26
    },
    {
        "climate": "temperate",
        "surface_water": "10",
        "name": "Ord Mantell",
        "diameter": "14050",
        "rotation_period": "26",
        "terrain": "plains, seas, mesas",
        "gravity": "1 standard",
        "orbital_period": "334",
        "population": "4000000000",
        "id": 27
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "unknown",
        "diameter": "0",
        "rotation_period": "0",
        "terrain": "unknown",
        "gravity": "unknown",
        "orbital_period": "0",
        "population": "unknown",
        "id": 28
    },
    {
        "climate": "arid",
        "surface_water": "unknown",
        "name": "Trandosha",
        "diameter": "0",
        "rotation_period": "25",
        "terrain": "mountains, seas, grasslands, deserts",
        "gravity": "0.62 standard",
        "orbital_period": "371",
        "population": "42000000",
        "id": 29
    },
    {
        "climate": "arid",
        "surface_water": "unknown",
        "name": "Socorro",
        "diameter": "0",
        "rotation_period": "20",
        "terrain": "deserts, mountains",
        "gravity": "1 standard",
        "orbital_period": "326",
        "population": "300000000",
        "id": 30
    },
    {
        "climate": "temperate",
        "surface_water": "100",
        "name": "Mon Cala",
        "diameter": "11030",
        "rotation_period": "21",
        "terrain": "oceans, reefs, islands",
        "gravity": "1",
        "orbital_period": "398",
        "population": "27000000000",
        "id": 31
    },
    {
        "climate": "temperate",
        "surface_water": "40",
        "name": "Chandrila",
        "diameter": "13500",
        "rotation_period": "20",
        "terrain": "plains, forests",
        "gravity": "1",
        "orbital_period": "368",
        "population": "1200000000",
        "id": 32
    },
    {
        "climate": "superheated",
        "surface_water": "5",
        "name": "Sullust",
        "diameter": "12780",
        "rotation_period": "20",
        "terrain": "mountains, volcanoes, rocky deserts",
        "gravity": "1",
        "orbital_period": "263",
        "population": "18500000000",
        "id": 33
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Toydaria",
        "diameter": "7900",
        "rotation_period": "21",
        "terrain": "swamps, lakes",
        "gravity": "1",
        "orbital_period": "184",
        "population": "11000000",
        "id": 34
    },
    {
        "climate": "arid, temperate, tropical",
        "surface_water": "unknown",
        "name": "Malastare",
        "diameter": "18880",
        "rotation_period": "26",
        "terrain": "swamps, deserts, jungles, mountains",
        "gravity": "1.56",
        "orbital_period": "201",
        "population": "2000000000",
        "id": 35
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Dathomir",
        "diameter": "10480",
        "rotation_period": "24",
        "terrain": "forests, deserts, savannas",
        "gravity": "0.9",
        "orbital_period": "491",
        "population": "5200",
        "id": 36
    },
    {
        "climate": "temperate, arid, subartic",
        "surface_water": "5",
        "name": "Ryloth",
        "diameter": "10600",
        "rotation_period": "30",
        "terrain": "mountains, valleys, deserts, tundra",
        "gravity": "1",
        "orbital_period": "305",
        "population": "1500000000",
        "id": 37
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Aleen Minor",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "unknown",
        "gravity": "unknown",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 38
    },
    {
        "climate": "temperate, artic",
        "surface_water": "unknown",
        "name": "Vulpter",
        "diameter": "14900",
        "rotation_period": "22",
        "terrain": "urban, barren",
        "gravity": "1",
        "orbital_period": "391",
        "population": "421000000",
        "id": 39
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Troiken",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "desert, tundra, rainforests, mountains",
        "gravity": "unknown",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 40
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Tund",
        "diameter": "12190",
        "rotation_period": "48",
        "terrain": "barren, ash",
        "gravity": "unknown",
        "orbital_period": "1770",
        "population": "0",
        "id": 41
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Haruun Kal",
        "diameter": "10120",
        "rotation_period": "25",
        "terrain": "toxic cloudsea, plateaus, volcanoes",
        "gravity": "0.98",
        "orbital_period": "383",
        "population": "705300",
        "id": 42
    },
    {
        "climate": "temperate",
        "surface_water": "20",
        "name": "Cerea",
        "diameter": "unknown",
        "rotation_period": "27",
        "terrain": "verdant",
        "gravity": "1",
        "orbital_period": "386",
        "population": "450000000",
        "id": 43
    },
    {
        "climate": "tropical, temperate",
        "surface_water": "80",
        "name": "Glee Anselm",
        "diameter": "15600",
        "rotation_period": "33",
        "terrain": "lakes, islands, swamps, seas",
        "gravity": "1",
        "orbital_period": "206",
        "population": "500000000",
        "id": 44
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Iridonia",
        "diameter": "unknown",
        "rotation_period": "29",
        "terrain": "rocky canyons, acid pools",
        "gravity": "unknown",
        "orbital_period": "413",
        "population": "unknown",
        "id": 45
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Tholoth",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "unknown",
        "gravity": "unknown",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 46
    },
    {
        "climate": "arid, rocky, windy",
        "surface_water": "unknown",
        "name": "Iktotch",
        "diameter": "unknown",
        "rotation_period": "22",
        "terrain": "rocky",
        "gravity": "1",
        "orbital_period": "481",
        "population": "unknown",
        "id": 47
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Quermia",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "unknown",
        "gravity": "unknown",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 48
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Dorin",
        "diameter": "13400",
        "rotation_period": "22",
        "terrain": "unknown",
        "gravity": "1",
        "orbital_period": "409",
        "population": "unknown",
        "id": 49
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Champala",
        "diameter": "unknown",
        "rotation_period": "27",
        "terrain": "oceans, rainforests, plateaus",
        "gravity": "1",
        "orbital_period": "318",
        "population": "3500000000",
        "id": 50
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Mirial",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "deserts",
        "gravity": "unknown",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 51
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Serenno",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "rainforests, rivers, mountains",
        "gravity": "unknown",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 52
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Concord Dawn",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "jungles, forests, deserts",
        "gravity": "unknown",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 53
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Zolan",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "unknown",
        "gravity": "unknown",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 54
    },
    {
        "climate": "frigid",
        "surface_water": "100",
        "name": "Ojom",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "oceans, glaciers",
        "gravity": "unknown",
        "orbital_period": "unknown",
        "population": "500000000",
        "id": 55
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Skako",
        "diameter": "unknown",
        "rotation_period": "27",
        "terrain": "urban, vines",
        "gravity": "1",
        "orbital_period": "384",
        "population": "500000000000",
        "id": 56
    },
    {
        "climate": "temperate",
        "surface_water": "25",
        "name": "Muunilinst",
        "diameter": "13800",
        "rotation_period": "28",
        "terrain": "plains, forests, hills, mountains",
        "gravity": "1",
        "orbital_period": "412",
        "population": "5000000000",
        "id": 57
    },
    {
        "climate": "temperate",
        "surface_water": "unknown",
        "name": "Shili",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "cities, savannahs, seas, plains",
        "gravity": "1",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 58
    },
    {
        "climate": "arid, temperate, tropical",
        "surface_water": "unknown",
        "name": "Kalee",
        "diameter": "13850",
        "rotation_period": "23",
        "terrain": "rainforests, cliffs, canyons, seas",
        "gravity": "1",
        "orbital_period": "378",
        "population": "4000000000",
        "id": 59
    },
    {
        "climate": "unknown",
        "surface_water": "unknown",
        "name": "Umbara",
        "diameter": "unknown",
        "rotation_period": "unknown",
        "terrain": "unknown",
        "gravity": "unknown",
        "orbital_period": "unknown",
        "population": "unknown",
        "id": 60
    }
]

let characters = [
{
"name": "Luke Skywalker",
"gender": "male",
"skin_color": "fair",
"hair_color": "blond",
"height": "172",
"eye_color": "blue",
"homeworld": 1,
},
{

"name": "C-3PO",
"gender": "n/a",
"skin_color": "gold",
"hair_color": "n/a",
"height": "167",
"eye_color": "yellow",
"homeworld": 1,
},
{

"name": "R2-D2",
"gender": "n/a",
"skin_color": "white, blue",
"hair_color": "n/a",
"height": "96",
"eye_color": "red",
"homeworld": 8,
},
{

"name": "Darth Vader",
"gender": "male",
"skin_color": "white",
"hair_color": "none",
"height": "202",
"eye_color": "yellow",
"homeworld": 1,
},
{

"name": "Leia Organa",
"gender": "female",
"skin_color": "light",
"hair_color": "brown",
"height": "150",
"eye_color": "brown",
"homeworld": 2,
},
{

"name": "Owen Lars",
"gender": "male",
"skin_color": "light",
"hair_color": "brown, grey",
"height": "178",
"eye_color": "blue",
"homeworld": 1,
},
{

"name": "Beru Whitesun lars",
"gender": "female",
"skin_color": "light",
"hair_color": "brown",
"height": "165",
"eye_color": "blue",
"homeworld": 1,
},
{

"name": "R5-D4",
"gender": "n/a",
"skin_color": "white, red",
"hair_color": "n/a",
"height": "97",
"eye_color": "red",
"homeworld": 1,
},
{

"name": "Biggs Darklighter",
"gender": "male",
"skin_color": "light",
"hair_color": "black",
"height": "183",
"eye_color": "brown",
"homeworld": 1,
},
{

"name": "Obi-Wan Kenobi",
"gender": "male",
"skin_color": "fair",
"hair_color": "auburn, white",
"height": "182",
"eye_color": "blue-gray",
"homeworld": 20,
},
{

"name": "Anakin Skywalker",
"gender": "male",
"skin_color": "fair",
"hair_color": "blond",
"height": "188",
"eye_color": "blue",
"homeworld": 1,
},
{

"name": "Wilhuff Tarkin",
"gender": "male",
"skin_color": "fair",
"hair_color": "auburn, grey",
"height": "180",
"eye_color": "blue",
"homeworld": 21,
},
{

"name": "Chewbacca",
"gender": "male",
"skin_color": "unknown",
"hair_color": "brown",
"height": "228",
"eye_color": "blue",
"homeworld": 14,
},
{

"name": "Han Solo",
"gender": "male",
"skin_color": "fair",
"hair_color": "brown",
"height": "180",
"eye_color": "brown",
"homeworld": 22,
},
{

"name": "Greedo",
"gender": "male",
"skin_color": "green",
"hair_color": "n/a",
"height": "173",
"eye_color": "black",
"homeworld": 23,
},
{

"name": "Jabba Desilijic Tiure",
"gender": "hermaphrodite",
"skin_color": "green-tan, brown",
"hair_color": "n/a",
"height": "175",
"eye_color": "orange",
"homeworld": 24,
},
{

"name": "Wedge Antilles",
"gender": "male",
"skin_color": "fair",
"hair_color": "brown",
"height": "170",
"eye_color": "hazel",
"homeworld": 22,
},
{

"name": "Jek Tono Porkins",
"gender": "male",
"skin_color": "fair",
"hair_color": "brown",
"height": "180",
"eye_color": "blue",
"homeworld": 26,
},
{

"name": "Yoda",
"gender": "male",
"skin_color": "green",
"hair_color": "white",
"height": "66",
"eye_color": "brown",
"homeworld": 28,
},
{

"name": "Palpatine",
"gender": "male",
"skin_color": "pale",
"hair_color": "grey",
"height": "170",
"eye_color": "yellow",
"homeworld": 8,
},
{

"name": "Boba Fett",
"gender": "male",
"skin_color": "fair",
"hair_color": "black",
"height": "183",
"eye_color": "brown",
"homeworld": 10,
},
{

"name": "IG-88",
"gender": "none",
"skin_color": "metal",
"hair_color": "none",
"height": "200",
"eye_color": "red",
"homeworld": 28,
},
{

"name": "Bossk",
"gender": "male",
"skin_color": "green",
"hair_color": "none",
"height": "190",
"eye_color": "red",
"homeworld": 29,
},
{

"name": "Lando Calrissian",
"gender": "male",
"skin_color": "dark",
"hair_color": "black",
"height": "177",
"eye_color": "brown",
"homeworld": 30,
},
{

"name": "Lobot",
"gender": "male",
"skin_color": "light",
"hair_color": "none",
"height": "175",
"eye_color": "blue",
"homeworld": 6,
},
{

"name": "Ackbar",
"gender": "male",
"skin_color": "brown mottle",
"hair_color": "none",
"height": "180",
"eye_color": "orange",
"homeworld": 31,
},
{

"name": "Mon Mothma",
"gender": "female",
"skin_color": "fair",
"hair_color": "auburn",
"height": "150",
"eye_color": "blue",
"homeworld": 32,
},
{

"name": "Arvel Crynyd",
"gender": "male",
"skin_color": "fair",
"hair_color": "brown",
"height": "unknown",
"eye_color": "brown",
"homeworld": 28,
},
{

"name": "Wicket Systri Warrick",
"gender": "male",
"skin_color": "brown",
"hair_color": "brown",
"height": "88",
"eye_color": "brown",
"homeworld": 7,
},
{

"name": "Nien Nunb",
"gender": "male",
"skin_color": "grey",
"hair_color": "none",
"height": "160",
"eye_color": "black",
"homeworld": 33,
},
{

"name": "Qui-Gon Jinn",
"gender": "male",
"skin_color": "fair",
"hair_color": "brown",
"height": "193",
"eye_color": "blue",
"homeworld": 28,
},
{

"name": "Nute Gunray",
"gender": "male",
"skin_color": "mottled green",
"hair_color": "none",
"height": "191",
"eye_color": "red",
"homeworld": 18,
},
{

"name": "Finis Valorum",
"gender": "male",
"skin_color": "fair",
"hair_color": "blond",
"height": "170",
"eye_color": "blue",
"homeworld": 9,
},
{

"name": "Padm\u00e9 Amidala",
"gender": "female",
"skin_color": "light",
"hair_color": "brown",
"height": "185",
"eye_color": "brown",
"homeworld": 8,
},
{

"name": "Jar Jar Binks",
"gender": "male",
"skin_color": "orange",
"hair_color": "none",
"height": "196",
"eye_color": "orange",
"homeworld": 8,
},
{

"name": "Roos Tarpals",
"gender": "male",
"skin_color": "grey",
"hair_color": "none",
"height": "224",
"eye_color": "orange",
"homeworld": 8,
},
{

"name": "Rugor Nass",
"gender": "male",
"skin_color": "green",
"hair_color": "none",
"height": "206",
"eye_color": "orange",
"homeworld": 8,
},
{

"name": "Ric Oli\u00e9",
"gender": "male",
"skin_color": "fair",
"hair_color": "brown",
"height": "183",
"eye_color": "blue",
"homeworld": 8,
},
{

"name": "Watto",
"gender": "male",
"skin_color": "blue, grey",
"hair_color": "black",
"height": "137",
"eye_color": "yellow",
"homeworld": 34,
},
{

"name": "Sebulba",
"gender": "male",
"skin_color": "grey, red",
"hair_color": "none",
"height": "112",
"eye_color": "orange",
"homeworld": 35,
},
{

"name": "Quarsh Panaka",
"gender": "male",
"skin_color": "dark",
"hair_color": "black",
"height": "183",
"eye_color": "brown",
"homeworld": 8,
},
{

"name": "Shmi Skywalker",
"gender": "female",
"skin_color": "fair",
"hair_color": "black",
"height": "163",
"eye_color": "brown",
"homeworld": 1,
},
{

"name": "Darth Maul",
"gender": "male",
"skin_color": "red",
"hair_color": "none",
"height": "175",
"eye_color": "yellow",
"homeworld": 36,
},
{

"name": "Bib Fortuna",
"gender": "male",
"skin_color": "pale",
"hair_color": "none",
"height": "180",
"eye_color": "pink",
"homeworld": 37,
},
{

"name": "Ayla Secura",
"gender": "female",
"skin_color": "blue",
"hair_color": "none",
"height": "178",
"eye_color": "hazel",
"homeworld": 37,
},
{

"name": "Ratts Tyerel",
"gender": "male",
"skin_color": "grey, blue",
"hair_color": "none",
"height": "79",
"eye_color": "unknown",
"homeworld": 38,
},
{

"name": "Dud Bolt",
"gender": "male",
"skin_color": "blue, grey",
"hair_color": "none",
"height": "94",
"eye_color": "yellow",
"homeworld": 39,
},
{

"name": "Gasgano",
"gender": "male",
"skin_color": "white, blue",
"hair_color": "none",
"height": "122",
"eye_color": "black",
"homeworld": 40,
},
{

"name": "Ben Quadinaros",
"gender": "male",
"skin_color": "grey, green, yellow",
"hair_color": "none",
"height": "163",
"eye_color": "orange",
"homeworld": 41,
},
{

"name": "Mace Windu",
"gender": "male",
"skin_color": "dark",
"hair_color": "none",
"height": "188",
"eye_color": "brown",
"homeworld": 42,
},
{

"name": "Ki-Adi-Mundi",
"gender": "male",
"skin_color": "pale",
"hair_color": "white",
"height": "198",
"eye_color": "yellow",
"homeworld": 43,
},
{

"name": "Kit Fisto",
"gender": "male",
"skin_color": "green",
"hair_color": "none",
"height": "196",
"eye_color": "black",
"homeworld": 44,
},
{

"name": "Eeth Koth",
"gender": "male",
"skin_color": "brown",
"hair_color": "black",
"height": "171",
"eye_color": "brown",
"homeworld": 45,
},
{

"name": "Adi Gallia",
"gender": "female",
"skin_color": "dark",
"hair_color": "none",
"height": "184",
"eye_color": "blue",
"homeworld": 9,
},
{

"name": "Saesee Tiin",
"gender": "male",
"skin_color": "pale",
"hair_color": "none",
"height": "188",
"eye_color": "orange",
"homeworld": 47,
},
{

"name": "Yarael Poof",
"gender": "male",
"skin_color": "white",
"hair_color": "none",
"height": "264",
"eye_color": "yellow",
"homeworld": 48,
},
{

"name": "Plo Koon",
"gender": "male",
"skin_color": "orange",
"hair_color": "none",
"height": "188",
"eye_color": "black",
"homeworld": 49,
},
{

"name": "Mas Amedda",
"gender": "male",
"skin_color": "blue",
"hair_color": "none",
"height": "196",
"eye_color": "blue",
"homeworld": 50,
},
{

"name": "Gregar Typho",
"gender": "male",
"skin_color": "dark",
"hair_color": "black",
"height": "185",
"eye_color": "brown",
"homeworld": 8,
},
{

"name": "Cord\u00e9",
"gender": "female",
"skin_color": "light",
"hair_color": "brown",
"height": "157",
"eye_color": "brown",
"homeworld": 8,
},
{

"name": "Cliegg Lars",
"gender": "male",
"skin_color": "fair",
"hair_color": "brown",
"height": "183",
"eye_color": "blue",
"homeworld": 1,
},
{

"name": "Poggle the Lesser",
"gender": "male",
"skin_color": "green",
"hair_color": "none",
"height": "183",
"eye_color": "yellow",
"homeworld": 11,
},
{

"name": "Luminara Unduli",
"gender": "female",
"skin_color": "yellow",
"hair_color": "black",
"height": "170",
"eye_color": "blue",
"homeworld": 51,
},
{

"name": "Barriss Offee",
"gender": "female",
"skin_color": "yellow",
"hair_color": "black",
"height": "166",
"eye_color": "blue",
"homeworld": 51,
},
{

"name": "Dorm\u00e9",
"gender": "female",
"skin_color": "light",
"hair_color": "brown",
"height": "165",
"eye_color": "brown",
"homeworld": 8,
},
{

"name": "Dooku",
"gender": "male",
"skin_color": "fair",
"hair_color": "white",
"height": "193",
"eye_color": "brown",
"homeworld": 52,
},
{

"name": "Bail Prestor Organa",
"gender": "male",
"skin_color": "tan",
"hair_color": "black",
"height": "191",
"eye_color": "brown",
"homeworld": 2,
},
{

"name": "Jango Fett",
"gender": "male",
"skin_color": "tan",
"hair_color": "black",
"height": "183",
"eye_color": "brown",
"homeworld": 53,
},
{

"name": "Zam Wesell",
"gender": "female",
"skin_color": "fair, green, yellow",
"hair_color": "blonde",
"height": "168",
"eye_color": "yellow",
"homeworld": 54,
},
{

"name": "Dexter Jettster",
"gender": "male",
"skin_color": "brown",
"hair_color": "none",
"height": "198",
"eye_color": "yellow",
"homeworld": 55,
},
{

"name": "Lama Su",
"gender": "male",
"skin_color": "grey",
"hair_color": "none",
"height": "229",
"eye_color": "black",
"homeworld": 10,
},
{

"name": "Taun We",
"gender": "female",
"skin_color": "grey",
"hair_color": "none",
"height": "213",
"eye_color": "black",
"homeworld": 10,
},
{

"name": "Jocasta Nu",
"gender": "female",
"skin_color": "fair",
"hair_color": "white",
"height": "167",
"eye_color": "blue",
"homeworld": 9,
},
{

"name": "R4-P17",
"gender": "female",
"skin_color": "silver, red",
"hair_color": "none",
"height": "96",
"eye_color": "red, blue",
"homeworld": 28,
},
{

"name": "Wat Tambor",
"gender": "male",
"skin_color": "green, grey",
"hair_color": "none",
"height": "193",
"eye_color": "unknown",
"homeworld": 56,
},
{

"name": "San Hill",
"gender": "male",
"skin_color": "grey",
"hair_color": "none",
"height": "191",
"eye_color": "gold",
"homeworld": 57,
},
{

"name": "Shaak Ti",
"gender": "female",
"skin_color": "red, blue, white",
"hair_color": "none",
"height": "178",
"eye_color": "black",
"homeworld": 58,
},
{

"name": "Grievous",
"gender": "male",
"skin_color": "brown, white",
"hair_color": "none",
"height": "216",
"eye_color": "green, yellow",
"homeworld": 59,
},
{

"name": "Tarfful",
"gender": "male",
"skin_color": "brown",
"hair_color": "brown",
"height": "234",
"eye_color": "blue",
"homeworld": 14,
},
{

"name": "Raymus Antilles",
"gender": "male",
"skin_color": "light",
"hair_color": "brown",
"height": "188",
"eye_color": "brown",
"homeworld": 2,
},
{

"name": "Sly Moore",
"gender": "female",
"skin_color": "pale",
"hair_color": "none",
"height": "178",
"eye_color": "white",
"homeworld": 60,
},
{

"name": "Tion Medon",
"gender": "male",
"skin_color": "grey",
"hair_color": "none",
"height": "206",
"eye_color": "black",
"homeworld": 12,
}]

module.exports = planets