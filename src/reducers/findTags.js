import { UPDATE_FIND_TAGS } from '../actions';

const initialState = {
        "4*": {
            checked: false,
            name: '4*',
            display_name: "Perfect",
            category: "star"
        },
        '3*': {
            checked: false,
            name: '3*',
            display_name: "3 Star",
            category: "star"
        },
        '2*': {
            checked: false,
            name: '2*',
            display_name: "2 Star",
            category: "star"
        },
        '1*': {
            checked: false,
            name: '1*',
            display_name: "1 Star",
            category: "star"
        },
        '0*': {
            checked: false,
            name: '0*',
            display_name: "0 Star",
            category: "star"
        },
        favorite: {
            checked: false,
            name: 'favorite',
            display_name: "Favorite",
            category: "fav"
        },
        'buddy1-5': {
            checked: false,
            name: 'buddy1-5',
            display_name: "Buddies",
            category: "buddy"
        },
        shiny: {
            checked: false,
            name: 'shiny',
            display_name: "Shiny",
            category: "shiny"
        },
        lucky: {
            checked: false,
            name: 'lucky',
            display_name: "Lucky",
            category: "luck"
        },
        'ultra beasts': {
            checked: false,
            name: 'ultra beasts',
            display_name: "Ultra Beast",
            category: "beast"
        },
        adventureeffect: {
            checked: false,
            name: 'adventureeffect',
            display_name: "Adventure Effect",
            category: "effect"
        },
        tradeevolve: {
            checked: false,
            name: 'tradeevolve',
            display_name: "Trade Evolve",
            category: "trade"
        },
        legendary: {
            checked: false,
            name: 'legendary',
            display_name: "Legendary",
            category: "legend"
        },
        mythical: {
            checked: false,
            name: 'mythical',
            display_name: "Mythical",
            category: "myth"
        },
        xl: {
            checked: false,
            name: 'xl',
            display_name: "XL",
            category: "size"
        },
        xxl: {
            checked: false,
            name: 'xxl',
            display_name: "XXL",
            category: "size"
        },
        xxs: {
            checked: false,
            name: 'xxs',
            display_name: "XXS",
            category: "size"
        },
        xs: {
            checked: false,
            name: 'xs',
            display_name: "XS",
            category: "size"
        },
        costume: {
            checked: false,
            name: 'costume',
            display_name: "Event/Costume",
            category: "event"
        },
        traded: {
            checked: false,
            name: 'traded',
            display_name: "Traded",
            category: "trade"
        },
        purified: {
            checked: false,
            name: 'purified',
            display_name: "Purified",
            category: "pur"
        },
        shadow: {
            checked: false,
            name: 'shadow',
            display_name: "Shadow",
            category: "pur"
        },
        year2016: {
            checked: false,
            name: 'year2016',
            display_name: "2016",
            category: "year"
        },
        year2017: {
            checked: false,
            name: 'year2017',
            display_name: "2017",
            category: "year"
        },
        year2018: {
            checked: false,
            name: 'year2018',
            display_name: "2018",
            category: "year"
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
