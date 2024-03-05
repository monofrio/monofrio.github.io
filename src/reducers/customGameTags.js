import { UPDATE_CUSTOM_GAME_TAGS } from '../actions';

const initialState = {
    "evolve": true,
    "12candy": true,
    "transfer": true,
    "purify": true,
    "trade": true,
    "showcase": true,
    "pvp": true
};

const customGameTagsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CUSTOM_GAME_TAGS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};

export default customGameTagsReducer;
