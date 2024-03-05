// Action types
export const SET_COMBAT_POWER = 'SET_COMBAT_POWER';
export const UPDATE_GAME_TAGS = 'UPDATE_GAME_TAGS';
export const UPDATE_CUSTOM_GAME_TAGS = "UPDATE_CUSTOM_GAME_TAGS";
export const UPDATE_FIND_TAGS = "UPDATE_FIND_TAGS";


// Action creators
export const setCombatPower = (power) => ({
    type: SET_COMBAT_POWER,
    payload: power
});

export const updateGameTags = (tag) => ({
    type: UPDATE_GAME_TAGS,
    payload: tag
});

export const updateCustomGameTag = (tag) => ({
    type: UPDATE_CUSTOM_GAME_TAGS,
    payload: tag
});

export const updateFindTags = (tag) => ({
    type: UPDATE_FIND_TAGS,
    payload: tag
});