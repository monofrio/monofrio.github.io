import { UPDATE_GAME_TAGS } from '../actions';

const initialState = {

    '4*': true,
    '3*': true,
    '2*': true,
    '1*': false,
    '0*': false,
    favorite: true,
    'buddy1-5': true,
    shiny: true,
    lucky: true,
    'ultra beasts': true,
    adventureeffect: true,
    tradeevolve: true,
    legendary: true,
    mythical: true,
    xl: true,
    xxl: true,
    xxs: false,
    xs: false,
    costume: false,
    traded: false,
    purified: false,
    shadow: false,
    evolve: false,
};

const gameTagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_GAME_TAGS:
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

export default gameTagsReducer;
