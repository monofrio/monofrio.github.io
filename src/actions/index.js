// Action types
export const SET_COMBAT_POWER = "SET_COMBAT_POWER";
export const UPDATE_GAME_TAGS = "UPDATE_GAME_TAGS";
export const UPDATE_CUSTOM_GAME_TAGS = "UPDATE_CUSTOM_GAME_TAGS";
export const UPDATE_FIND_TAGS = "UPDATE_FIND_TAGS";
export const SET_COMBAT_POWER_MIN = "SET_COMBAT_POWER_MIN";
export const SET_COMBAT_POWER_MAX = "SET_COMBAT_POWER_MAX";
export const SET_INCLUDE_COMBAT_POWER = "SET_INCLUDE_COMBAT_POWER";

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

export const setCombatPowerRangeMin = (value) => ({
    type: SET_COMBAT_POWER_MIN,
    payload: value
});
export const setCombatPowerRangeMax = (range) => ({
    type: SET_COMBAT_POWER_MAX,
    payload: range
});

export const setIncludeCombatPower = (checkbox) => ({
    type: SET_INCLUDE_COMBAT_POWER,
    payload: checkbox
});

