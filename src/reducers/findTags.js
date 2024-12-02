import { UPDATE_FIND_TAGS } from '../actions';

const initialState = {
        "4*": {
            checked: 'inactive',
            name: '4*',
            display_name: "Perfect",
            category: "Star"
        },
        '3*': {
            checked: "inactive",
            name: '3*',
            display_name: "3 Star",
            category: "Star"
        },
        '2*': {
            checked: "inactive",
            name: '2*',
            display_name: "2 Star",
            category: "Star"
        },
        '1*': {
            checked: "inactive",
            name: '1*',
            display_name: "1 Star",
            category: "Star"
        },
        '0*': {
            checked: "inactive",
            name: '0*',
            display_name: "0 Star",
            category: "Star"
        },
        favorite: {
            checked: "inactive",
            name: 'favorite',
            display_name: "Favorite",
            category: "Generic"
        },
        'buddy1-5': {
            checked: "inactive",
            name: 'buddy1-5',
            display_name: "Buddies",
            category: "Generic"
        },
        shiny: {
            checked: "inactive",
            name: 'shiny',
            display_name: "Shiny",
            category: "Shiny"
        },
        lucky: {
            checked: "inactive",
            name: 'lucky',
            display_name: "Lucky",
            category: "Generic"
        },
        'ultra beasts': {
            checked: "inactive",
            name: 'ultra beasts',
            display_name: "Ultra Beast",
            category: "Generic"
        },
        adventureeffect: {
            checked: "inactive",
            name: 'adventureeffect',
            display_name: "Adventure Effect",
            category: "Generic"
        },
        tradeevolve: {
            checked: "inactive",
            name: 'tradeevolve',
            display_name: "Trade Evolve",
            category: "Generic"
        },
        legendary: {
            checked: "inactive",
            name: 'legendary',
            display_name: "Legendary",
            category: "Generic"
        },
        mythical: {
            checked: "inactive",
            name: 'mythical',
            display_name: "Mythical",
            category: "Generic"
        },
        dynamax: {
            checked: "inactive",
            name: "dynamax",
            display_name: "Dynamax",
            category: "Generic"
        },
        gigantamax: {
            checked: 'inactive',
            name: 'gigantamax',
            display_name: "Gigantamax",
            category: "Generic"
        },

        specialbackground : {
            checked: "inactive",
            name: "specialbackground",
            display_name: "Special Background",
            category: "Generic"
        },
        locationbackground : {
            checked: "inactive",
            name: "locationbackground",
            display_name: "Location Background",
            category: "Generic"
        },
        xl: {
            checked: "inactive",
            name: 'xl',
            display_name: "XL",
            category: "Size"
        },
        xxl: {
            checked: "inactive",
            name: 'xxl',
            display_name: "XXL",
            category: "Size"
        },
        xxs: {
            checked: "inactive",
            name: 'xxs',
            display_name: "XXS",
            category: "Size"
        },
        xs: {
            checked: "inactive",
            name: 'xs',
            display_name: "XS",
            category: "Size"
        },
        costume: {
            checked: "inactive",
            name: 'costume',
            display_name: "Costume",
            category: "Generic"
        },
        traded: {
            checked: "inactive",
            name: 'traded',
            display_name: "Traded",
            category: "Generic"
        },
        evolve:{
            checked: "inactive",
            name: 'evolve',
            display_name: "Evolve",
            category: "Generic"
        },
        megaevolve:{
            checked: "inactive",
            name: 'megaevolve',
            display_name: "Mega Evolve",
            category: "Generic"
        },
        purified: {
            checked: "inactive",
            name: 'purified',
            display_name: "Purified",
            category: "Generic"
        },
        shadow: {
            checked: "inactive",
            name: 'shadow',
            display_name: "Shadow",
            category: "Generic"
        },
        hatched: {
            checked: "inactive",
            name: 'hatched',
            display_name: "Hatched",
            category: "Generic"
        },
        year2016: {
            checked: "inactive",
            name: 'year2016',
            display_name: "2016",
            category: "Year"
        },
        year2017: {
            checked: "inactive",
            name: 'year2017',
            display_name: "2017",
            category: "Year"
        },
        year2018: {
            checked: "inactive",
            name: 'year2018',
            display_name: "2018",
            category: "Year"
        },
        year2019: {
            checked: "inactive",
            name: 'year2019',
            display_name: "2019",
            category: "Year"
        },
        year2020: {
            checked: "inactive",
            name: 'year2020',
            display_name: "2020",
            category: "Year"
        },
        year2021: {
            checked: "inactive",
            name: 'year2021',
            display_name: "2021",
            category: "Year"
        },
        year2022: {
            checked: "inactive",
            name: 'year2022',
            display_name: "2022",
            category: "Year"
        },
        year2023: {
            checked: "inactive",
            name: 'year2023',
            display_name: "2023",
            category: "Year"
        },
        year2024: {
            checked: "inactive",
            name: 'year2024',
            display_name: "2024",
            category: "Year"
        },
        kanto: {
            checked: "inactive",
            name: 'kanto',
            display_name: "Kanto",
            category: "Region"
        },
        johto: {
            checked: "inactive",
            name: 'johto',
            display_name: "Johto",
            category: "Region"
        },
        hoenn: {
            checked: "inactive",
            name: 'hoenn',
            display_name: "Hoenn",
            category: "Region"
        },
        sinnoh: {
            checked: "inactive",
            name: 'sinnoh',
            display_name: "Sinnoh",
            category: "Region"
        },
        unova: {
            checked: "inactive",
            name: 'unova',
            display_name: "Unova",
            category: "Region"
        },
        kalos: {
            checked: "inactive",
            name: 'kalos',
            display_name: "Kalos",
            category: "Region"
        },
        alola: {
            checked: "inactive",
            name: 'alola',
            display_name: "Alola",
            category: "Region"
        },
        galar: {
            checked: "inactive",
            name: 'galar',
            display_name: "Galar",
            category: "Region"
        },
        hisui: {
            checked: "inactive",
            name: 'hisui',
            display_name: "Hisui",
            category: "Region"
        },
        paldea: {
            checked: "inactive",
            name: 'paldea',
            display_name: "Paldea",
            category: "Region"
        },
    normal: {
        checked: "inactive",
        name: "normal",
        display_name: "Normal",
        category: "Type"
    },
    fire: {
        checked: "inactive",
        name: "fire",
        display_name: "Fire",
        category: "Type"
    },
    water: {
        checked: "inactive",
        name: "water",
        display_name: "Water",
        category: "Type"
    },
    electric: {
        checked: "inactive",
        name: "electric",
        display_name: "Electric",
        category: "Type"
    },
    grass: {
        checked: "inactive",
        name: "grass",
        display_name: "Grass",
        category: "Type"
    },
    ice: {
        checked: "inactive",
        name: "ice",
        display_name: "Ice",
        category: "Type"
    },
    fighting: {
        checked: "inactive",
        name: "fighting",
        display_name: "Fighting",
        category: "Type"
    },
    poison: {
        checked: "inactive",
        name: "poison",
        display_name: "Poison",
        category: "Type"
    },
    ground: {
        checked: "inactive",
        name: "ground",
        display_name: "Ground",
        category: "Type"
    },
    flying: {
        checked: "inactive",
        name: "flying",
        display_name: "Flying",
        category: "Type"
    },
    psychic: {
        checked: "inactive",
        name: "psychic",
        display_name: "Psychic",
        category: "Type"
    },
    bug: {
        checked: "inactive",
        name: "bug",
        display_name: "Bug",
        category: "Type"
    },
    rock: {
        checked: "inactive",
        name: "rock",
        display_name: "Rock",
        category: "Type"
    },
    ghost: {
        checked: "inactive",
        name: "ghost",
        display_name: "Ghost",
        category: "Type"
    },
    dragon: {
        checked: "inactive",
        name: "dragon",
        display_name: "Dragon",
        category: "Type"
    },
    dark: {
        checked: "inactive",
        name: "dark",
        display_name: "Dark",
        category: "Type"
    },
    steel: {
        checked: "inactive",
        name: "steel",
        display_name: "Steel",
        category: "Type"
    },
    fairy: {
        checked: "inactive",
        name: "fairy",
        display_name: "Fairy",
        category: "Type"
    }

};

const findTagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FIND_TAGS:
            return {
                ...state,
                ...action.payload
            }
        case "RESET_STATE":
            return initialState

        default:
            return state;
    }
};

export default findTagsReducer;
