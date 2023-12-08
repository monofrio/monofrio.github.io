
const data = [
    {
        "id": "0",
        "name": "12 Candy",
        "title": "12 Candy Evolve Pokemon",
        "pokemon": "Caterpie, Weedle, Pidgey, Wurmple, Whismwur, Pidove",
        "search": "",
        "tag": "12candy",
        "info": "Pokemons that cost only 12 candies to evolve can help in 2X-xp on evolving pokemons and Field Research."
    },
    {
        "id": "1",
        "name": "Purify",
        "title": "1000 Stardust to Purify",
        "pokemon": "weedle, rattata, geodude, ducklett, zubat, foongus",
        "search": "shadow",
        "tag": "purify",
        "info": ""
    },
    {
        "id": "2",
        "name": "Trade: Free Evolve",
        "title": "Free Evolve when traded",
        "pokemon": "haunter, karrablast, machoke, phantump, pumpkaboo, Shelmet, Boldore, Graveler, Gurdurr, Kadabra",
        "search": "!favorite & !shadow & !4* & !lucky & !traded & !free-evol",
        "tag": "free-evol",
        "info": ""
    },
    {
        "id": "3",
        "name": "Free Evolve",
        "title": " Evolve for Free",
        "pokemon": "haunter, karrablast, machoke, phantump, pumpkaboo, Shelmet, Boldore, Graveler, Gurdurr, Kadabra",
        "search": "!favorite & !4* & traded",
        "tag": "evolve",
        "info": ""
    },
    {
        "id": "4",
        "name": "PVP",
        "title": "PVP For Great Leauge",
        "pokemon": "",
        "search": "0-1attack&3-4defense&3-4-hp&cp-1500",
        "tag": "pvp",
        "info": ""
    },
    {
        "id": "5",
        "name": "Safe Transfer",
        "title": "Safe Transfer",
        "pokemon": "",
        "search": "!favorite & !shiny & !3* & !4* & !lucky & !ultra beasts & !12candy & !purify & !free-evol & !evolve & !pvp & !xl & !xxl & &!legendary & !mythical & !shadow & !2x Transfer & !pvp",
        "tag": "",
        "info": ""
    },
    {
        "id": "6",
        "name": "December 2x Transfer",
        "title": "2x Transfer Candy",
        "pokemon": "stufful, bergmite, bronzor, squirtle, scatterbug, charmander, bulbasaur",
        "search": "!favorite & !4* & !3* & !pvp & !xl & !xxl &!shiny",
        "tag": "2x Transfer",
        "info": ""
    },
];

const eventData = [
    {
        "image": {
            "filename": "PGO_Icon_643_Reshiram_SHY.png",
            "alt_text": "",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/TDNuMvC4a8MUUkkfJHxrcvUTRIRzWpwf0kaTjxfm57bqwToa9fwGGC1TPQidHdA5wSxdo50bTcHi5bVG_Hp-YIfhFGNJCKxlUX4n1Afxsm4H0Q",
            "height": 125
        },
        "bodyLines": ["Start: 10:00 a.m.", "End: 10:00 a.m."],
        "endDate": "2023-12-09",
        "name": "Reshiram",
        "raidStarLevel": "5 Star",
        "eventType": "Raids",
        "body": "",
        "startDate": "2023-12-01"
    },
    {
        "image": {
            "filename": "PGO_Icon_644_Zekrom_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/QjQEXm98OZAop6n6AKgJUm5dbEXFOyP97FByb0jXsxlkrfPm5ULdDlPTiznmb7AMW4EJi5FPoYzGRJ3lv37BC-p92pyyntTE-JIAi8yq9UP20w",
            "height": 125
        },
        "bodyLines": ["Start: 10:00 a.m.", "End: 10:00 a.m."],
        "endDate": "2023-12-16",
        "name": "Zekrom",
        "raidStarLevel": "5 Star",
        "eventType": "Raids",
        "body": "",
        "startDate": "2023-12-09"
    },
    {
        "image": {
            "filename": "PGO_Icon_646_Kyurem_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/OPHyfnuLR6NpCk79q_MhdYCWkRrAEgAtBqCUpwNcLPKzbvbQvZQ48UygjPfP-IM2GgrP4YXRDMq8R07r11US8mfTjyvGDzX00_iZ6ABNla4yJt8",
            "height": 125
        },
        "bodyLines": ["Start: 10:00 a.m.", "End: 10:00 a.m."],
        "endDate": "2023-12-23",
        "name": "Kyurem",
        "raidStarLevel": "5 Star",
        "eventType": "Raids",
        "body": "",
        "startDate": "2023-12-16"
    },
    {
        "image": {
            "filename": "PGO_Icon_486_Regigigas_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/TbazzrcsQn2O0yG89_wbpMvdOEP7JoN8Y6N2HWe2NHyJ13lA_7aSt7LPaEgcjk-C1Uz9iYYDg9AvyfcTWbT_c94K9OmBI2NVkcbZL67nBKt-Ew",
            "height": 125
        },
        "bodyLines": ["Start: 10:00 a.m.", "End: 10:00 a.m."],
        "endDate": "2024-01-01",
        "name": "Regigigas",
        "raidStarLevel": "5 Star",
        "eventType": "Raids",
        "body": "",
        "startDate": "2023-12-23"
    },
    {
        "image": {
            "filename": "PGO_Icon_212_Scizor_MEG_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/wXpH9fiLxhpNc_GT_NbzKBLGih08eyulFPZ_t2qz7dBTO2ZNsCZ2O2FnQtxvagTqMfo0x1_yRasTWWuvBGCDj8_wW-fNJ_8Pj9YoNWrd2R3p5A",
            "height": 125
        },
        "bodyLines": ["Start: 10:00 a.m.", "End: 10:00 a.m."],
        "endDate": "2023-12-09",
        "name": "Mega Scizor",
        "raidStarLevel": "Mega",
        "eventType": "Raids",
        "body": "",
        "startDate": "2023-12-01"
    },
    {
        "image": {
            "filename": "PGO_Icon_334_Altaria_MEG_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/0cXwH3HEyShYfhHAPv4mPzAIxoSb5U2tuSibVuEnlfewlBVQbIXkV4s3INpXt7rQH-G6M7D_sDdD2c4V9bkkDzof1HkaLAcpm_Kccv1cHFoL5A",
            "height": 125
        },
        "bodyLines": ["Start: 10:00 a.m.", "End: 10:00 a.m."],
        "endDate": "2023-12-16",
        "name": "Mega Altaria",
        "raidStarLevel": "Mega",
        "eventType": "Raids",
        "body": "",
        "startDate": "2023-12-09"
    },
    {
        "image": {
            "filename": "PGO_Icon_460_Abomasnow_MEG_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/ismvRrEdx6WlJQPzNpIAZZOJoDJfCBtJDg3Kbuw4Rd5FLnlXo_UREV7UEWv_d8QHml_HhDfsAu4qSzhL-vtRmjjkP1WaHj7Og6KLpVKm1Ffc5A",
            "height": 125
        },
        "bodyLines": ["Start: 10:00 a.m.", "End: 10:00 a.m."],
        "endDate": "2023-12-23",
        "name": "Mega Abomasnow",
        "raidStarLevel": "Mega",
        "eventType": "Raids",
        "body": "",
        "startDate": "2023-12-16"
    },
    {
        "image": {
            "filename": "PGO_Icon_362_Glalie_MEG_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/UtutJOQJHpi37y2w53JLDj_GPaWXrcud6XHPr_U3mEuxswBK4dNYJ7I_b40lhZDyDZmaRXfWOb64rXs8_BgKRM82_5ArfSrjxLi3kopoNfHYZTg",
            "height": 125
        },
        "bodyLines": ["Start: 10:00 a.m.", "End: 10:00 a.m."],
        "endDate": "2024-01-01",
        "name": "Mega Glalie",
        "raidStarLevel": "Mega",
        "eventType": "Raids",
        "body": "",
        "startDate": "2023-12-23"
    },
    {
        "endDate": "2023-12-03",
        "name": "Raid Day: Hisuian Samurott",
        "eventType": "Events",
        "body": "2:00 p.m. – 5:00 p.m.",
        "startDate": "2023-12-03"
    },
    {
        "endDate": "2023-12-08",
        "name": "Along the Routes",
        "eventType": "Events",
        "body": "10:00 a.m. – 8:00 p.m.",
        "startDate": "2023-12-05"
    },
    {
        "endDate": "2023-12-09",
        "name": "Catch Mastery: Ice",
        "eventType": "Events",
        "body": "10:00 a.m. – 8:00 p.m.",
        "startDate": "2023-12-09"
    },
    {
        "endDate": "2023-12-15",
        "name": "Adamant Time",
        "eventType": "Events",
        "body": "10:00 a.m. – 8:00 p.m.",
        "startDate": "2023-12-11"
    },
    {
        "endDate": "2023-12-17",
        "name": "December Community Day",
        "eventType": "Events",
        "body": "2:00 p.m. – 5:00 p.m. each day",
        "startDate": "2023-12-16"
    },
    {
        "endDate": "2023-12-25",
        "name": "Winter Holiday Part 1",
        "eventType": "Events",
        "body": "10:00 a.m. – 10:00 a.m.",
        "startDate": "2023-12-18"
    },
    {
        "endDate": "2023-12-24",
        "name": "Winter Wonderland",
        "eventType": "Events",
        "body": "10:00 a.m. – 8:00 p.m.",
        "startDate": "2023-12-23"
    },
    {
        "endDate": "2023-12-23",
        "name": "Raid Day: Wyrdeer",
        "eventType": "Events",
        "body": "2:00 p.m. – 5:00 p.m.",
        "startDate": "2023-12-23"
    },
    {
        "endDate": "2023-12-31",
        "name": "Winter Holiday Part 2",
        "eventType": "Events",
        "body": "10:00 a.m. – 8:00 p.m.",
        "startDate": "2023-12-25"
    },
    {
        "image": {
            "filename": "PGO_Icon_643_Reshiram_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/ja5C9y6RfZczQmnjgxpH1Plbw1s6ozny2O3zyyWRRwfHCk5-ouyWqc2sxZTkJSoFPmUmtDnMe_ko2Mi4BzPxGHHfr-bOCEEsrnA4vf-N3Bc-3BU",
            "height": 125
        },
        "endDate": "2023-12-06",
        "name": "Reshiram",
        "eventType": "Events",
        "body": "6:00 p.m. – 7:00 p.m.",
        "startDate": "2023-12-06"
    },
    {
        "image": {
            "filename": "PGO_Icon_644_Zekrom_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/C7GmOdM2XVApJHO4TXrMJ3HmayxxDLL1hjCuibU53sZbaXBQu2XTulmlhv75b8ZTPy1RFp0j9bHMAy6anTnT440BRhQ3rw2gjlgDTXTM3wSn",
            "height": 125
        },
        "endDate": "2023-12-13",
        "name": "Zekrom",
        "eventType": "Events",
        "body": "6:00 p.m. – 7:00 p.m.",
        "startDate": "2023-12-13"
    },
    {
        "image": {
            "filename": "PGO_Icon_646_Kyurem_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/lVcjEKt4AT9kcBs1kxFbxadcCFhiM-GUX3yT0DZKCFpLFeEhhupX9B9VXKqEGW0Zdb35PlVOhXZKH4qLySvro4T7_hAsypvvv-74etYzlbwE",
            "height": 125
        },
        "endDate": "2023-12-20",
        "name": "Kyurem",
        "eventType": "Events",
        "body": "6:00 p.m. – 7:00 p.m.",
        "startDate": "2023-12-20"
    },
    {
        "image": {
            "filename": "PGO_Icon_486_Regigigas_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/P_t2hvIu0PxUUEgGxV5CP6Ack6BzjT2eUwrZcoGC9TcljD4D0p4ox0_aSy4YIkrgEpyWoiL2KPKtxzdrb10HiWFnJXWQa-i33tXF11Cl9BoZhA",
            "height": 125
        },
        "endDate": "2023-12-27",
        "name": "Regigigas",
        "eventType": "Events",
        "body": "6:00 p.m. – 7:00 p.m.",
        "startDate": "2023-12-27"
    },
    {
        "image": {
            "filename": "PGO_Icon_349_Feebas_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/ap_6l7lvq4cZU1xxt8XTYT4aBulYeY2TYHMeUoiqKZZgJBGOnl0b5PpHibBdxEycNhCLJplb_zz9kjtHjrtPNWfHJjdWf1n-wlrrA_jBsY0",
            "height": 125
        },
        "bodyLines": ["Spotlight Hour", "6:00 p.m. – 7:00 p.m. local time", "2× Catch Candy"],
        "endDate": "2023-12-05",
        "name": "Feebas",
        "eventType": "Events",
        "startDate": "2023-12-05"
    },
    {
        "image": {
            "filename": "PGO_Icon_086_Seel_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/ohnd0970mpg2xkQK6wa35DPjJWHpgQ2Kprajb6Niv8ampY52fNGLDthJmHo2ZLJo25p5fYC22w38PlqlWzp-YoBBhYpUGdC6btgpU7yj6RE3dg",
            "height": 125
        },
        "bodyLines": ["Spotlight Hour", "6:00 p.m. – 7:00 p.m. local time", "2× Transfer Candy"],
        "endDate": "2023-12-12",
        "name": "Seel",
        "eventType": "Events",
        "startDate": "2023-12-12"
    },
    {
        "image": {
            "filename": "PGO_Icon_361_Snorunt_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/vpcE1W99PR_K64DInxL7KxbEZT7Hxt9_4FKLrcLjyo8Q3N2APeblSXnVBEYJf8jyYIJaA3f6K-8veBmQYZEclWPZgmD2MtQ-P1fvsvOLK_B_6g",
            "height": 125
        },
        "bodyLines": ["Spotlight Hour", "6:00 p.m. – 7:00 p.m. local time", "2× Evolution XP"],
        "endDate": "2023-12-19",
        "name": "Snorunt",
        "eventType": "Events",
        "startDate": "2023-12-19"
    },
    {
        "image": {
            "filename": "PGO_Icon_582_Vanillite_SHY.png",
            "width": 125,
            "url": "https://lh3.googleusercontent.com/q3ar3YV4_CLcPZDf9wCt4ZN8x_mVAtfwVtmYXcXWEG6oR_r9jBdD_nt1HZF6C4Z_kvJa881IUOLZ1nBmkqYBqq4WeHN-uRi0pxFeAqWPLzGJkw",
            "height": 125
        },
        "bodyLines": ["Spotlight Hour", "6:00 p.m. – 7:00 p.m. local time", "2× Catch Stardust", "**May appear as a Shiny Pokémon for the first time in Pokémon GO!"],
        "endDate": "2023-12-26",
        "name": "Vanillite**",
        "eventType": "Events",
        "startDate": "2023-12-26"
    }
]
