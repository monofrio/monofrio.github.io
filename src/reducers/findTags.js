import { UPDATE_FIND_TAGS } from '../actions';

const initialState = {
        "4*": {
            checked: false,
            name: '4*',
            display_name: "Perfect",
            category: "Star"
        },
        '3*': {
            checked: false,
            name: '3*',
            display_name: "3 Star",
            category: "Star"
        },
        '2*': {
            checked: false,
            name: '2*',
            display_name: "2 Star",
            category: "Star"
        },
        '1*': {
            checked: false,
            name: '1*',
            display_name: "1 Star",
            category: "Star"
        },
        '0*': {
            checked: false,
            name: '0*',
            display_name: "0 Star",
            category: "Star"
        },
        favorite: {
            checked: false,
            name: 'favorite',
            display_name: "Favorite",
            category: "Generic"
        },
        'buddy1-5': {
            checked: false,
            name: 'buddy1-5',
            display_name: "Buddies",
            category: "Generic"
        },
        shiny: {
            checked: false,
            name: 'shiny',
            display_name: "Shiny",
            category: "Shiny"
        },
        lucky: {
            checked: false,
            name: 'lucky',
            display_name: "Lucky",
            category: "Generic"
        },
        'ultra beasts': {
            checked: false,
            name: 'ultra beasts',
            display_name: "Ultra Beast",
            category: "Generic"
        },
        adventureeffect: {
            checked: false,
            name: 'adventureeffect',
            display_name: "Adventure Effect",
            category: "Generic"
        },
        tradeevolve: {
            checked: false,
            name: 'tradeevolve',
            display_name: "Trade Evolve",
            category: "Generic"
        },
        legendary: {
            checked: false,
            name: 'legendary',
            display_name: "Legendary",
            category: "Generic"
        },
        mythical: {
            checked: false,
            name: 'mythical',
            display_name: "Mythical",
            category: "Generic"
        },
        xl: {
            checked: false,
            name: 'xl',
            display_name: "XL",
            category: "Size"
        },
        xxl: {
            checked: false,
            name: 'xxl',
            display_name: "XXL",
            category: "Size"
        },
        xxs: {
            checked: false,
            name: 'xxs',
            display_name: "XXS",
            category: "Size"
        },
        xs: {
            checked: false,
            name: 'xs',
            display_name: "XS",
            category: "Size"
        },
        costume: {
            checked: false,
            name: 'costume',
            display_name: "Costume",
            category: "Generic"
        },
        traded: {
            checked: false,
            name: 'traded',
            display_name: "Traded",
            category: "Generic"
        },
        evolve:{
            checked: false,
            name: 'evolve',
            display_name: "Evolve",
            category: "Generic"
        },
        megaevolve:{
            checked: false,
            name: 'megaevolve',
            display_name: "Mega Evolve",
            category: "Generic"
        },
        purified: {
            checked: false,
            name: 'purified',
            display_name: "Purified",
            category: "Generic"
        },
        shadow: {
            checked: false,
            name: 'shadow',
            display_name: "Shadow",
            category: "Generic"
        },
        hatched: {
            checked: false,
            name: 'hatched',
            display_name: "Hatched",
            category: "Generic"
        },
        year2016: {
            checked: false,
            name: 'year2016',
            display_name: "2016",
            category: "Year"
        },
        year2017: {
            checked: false,
            name: 'year2017',
            display_name: "2017",
            category: "Year"
        },
        year2018: {
            checked: false,
            name: 'year2018',
            display_name: "2018",
            category: "Year"
        },
        year2019: {
            checked: false,
            name: 'year2019',
            display_name: "2019",
            category: "Year"
        },
        year2020: {
            checked: false,
            name: 'year2020',
            display_name: "2020",
            category: "Year"
        },
        year2021: {
            checked: false,
            name: 'year2021',
            display_name: "2021",
            category: "Year"
        },
        year2022: {
            checked: false,
            name: 'year2022',
            display_name: "2022",
            category: "Year"
        },
        year2023: {
            checked: false,
            name: 'year2023',
            display_name: "2023",
            category: "Year"
        },
        year2024: {
            checked: false,
            name: 'year2024',
            display_name: "2024",
            category: "Year"
        },
        kanto: {
            checked: false,
            name: 'kanto',
            display_name: "Kanto",
            category: "Region"
        },
        johto: {
            checked: false,
            name: 'johto',
            display_name: "Johto",
            category: "Region"
        },
        hoenn: {
            checked: false,
            name: 'hoenn',
            display_name: "Hoenn",
            category: "Region"
        },
        sinnoh: {
            checked: false,
            name: 'sinnoh',
            display_name: "Sinnoh",
            category: "Region"
        },
        unova: {
            checked: false,
            name: 'unova',
            display_name: "Unova",
            category: "Region"
        },
        kalos: {
            checked: false,
            name: 'kalos',
            display_name: "Kalos",
            category: "Region"
        },
        alola: {
            checked: false,
            name: 'alola',
            display_name: "Alola",
            category: "Region"
        },
        galar: {
            checked: false,
            name: 'galar',
            display_name: "Galar",
            category: "Region"
        },
        hisui: {
            checked: false,
            name: 'hisui',
            display_name: "Hisui",
            category: "Region"
        },
        paldea: {
            checked: false,
            name: 'paldea',
            display_name: "Paldea",
            category: "Region"
        },
    normal: {
        checked: false,
        name: "normal",
        display_name: "Normal",
        category: "Type"
    },
    fire: {
        checked: false,
        name: "fire",
        display_name: "Fire",
        category: "Type"
    },
    water: {
        checked: false,
        name: "water",
        display_name: "Water",
        category: "Type"
    },
    electric: {
        checked: false,
        name: "electric",
        display_name: "Electric",
        category: "Type"
    },
    grass: {
        checked: false,
        name: "grass",
        display_name: "Grass",
        category: "Type"
    },
    ice: {
        checked: false,
        name: "ice",
        display_name: "Ice",
        category: "Type"
    },
    fighting: {
        checked: false,
        name: "fighting",
        display_name: "Fighting",
        category: "Type"
    },
    poison: {
        checked: false,
        name: "poison",
        display_name: "Poison",
        category: "Type"
    },
    ground: {
        checked: false,
        name: "ground",
        display_name: "Ground",
        category: "Type"
    },
    flying: {
        checked: false,
        name: "flying",
        display_name: "Flying",
        category: "Type"
    },
    psychic: {
        checked: false,
        name: "psychic",
        display_name: "Psychic",
        category: "Type"
    },
    bug: {
        checked: false,
        name: "bug",
        display_name: "Bug",
        category: "Type"
    },
    rock: {
        checked: false,
        name: "rock",
        display_name: "Rock",
        category: "Type"
    },
    ghost: {
        checked: false,
        name: "ghost",
        display_name: "Ghost",
        category: "Type"
    },
    dragon: {
        checked: false,
        name: "dragon",
        display_name: "Dragon",
        category: "Type"
    },
    dark: {
        checked: false,
        name: "dark",
        display_name: "Dark",
        category: "Type"
    },
    steel: {
        checked: false,
        name: "steel",
        display_name: "Steel",
        category: "Type"
    },
    fairy: {
        checked: false,
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
            };
        default:
            return state;
    }
};

export default findTagsReducer;
