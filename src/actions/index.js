/** Set Combat Power */
export const SET_COMBAT_POWER = "SET_COMBAT_POWER";
export const setCombatPower = (power) => ({
    type: SET_COMBAT_POWER,
    payload: power
});

export const SET_FINAL_CP = "SET_FINAL_CP";
export const setFinalCP = (finalString) => {
    return {
        type: 'SET_FINAL_CP',
        payload: finalString,
    };
};
export const SET_COMBAT_POWER_MIN = "SET_COMBAT_POWER_MIN";
export const setCombatPowerRangeMin = (value) => ({
    type: SET_COMBAT_POWER_MIN,
    payload: value
});

export const SET_COMBAT_POWER_MAX = "SET_COMBAT_POWER_MAX";
export const setCombatPowerRangeMax = (range) => ({
    type: SET_COMBAT_POWER_MAX,
    payload: range
});

export const SET_INCLUDE_COMBAT_POWER = "SET_INCLUDE_COMBAT_POWER";
export const setIncludeCombatPower = (value) => ({
    type: SET_INCLUDE_COMBAT_POWER,
    payload: value
});

export const TOGGLE_DISABLE_MAX_INPUT = "TOGGLE_DISABLE_MAX_INPUT";
export const toggleDisableMaxInputCombat = (bool) => ({
    type: TOGGLE_DISABLE_MAX_INPUT,
    payload: bool
})

export const TOGGLE_DISABLE_MIN_INPUT = "TOGGLE_DISABLE_MIN_INPUT";
export const toggleDisableMinInputCombat = (bool) => ({
    type: TOGGLE_DISABLE_MIN_INPUT,
    payload: bool
})

export const TOGGLE_LESS_THAN_COMBAT = "TOGGLE_LESS_THAN_COMBAT";
export const toggleLessThanCombat = (bool) => ({
    type: TOGGLE_LESS_THAN_COMBAT,
    payload: bool
})

export const TOGGLE_GREATER_THAN_COMBAT = "TOGGLE_GREATER_THAN_COMBAT";
export const toggleGreaterThanCombat = (bool) => ({
    type: TOGGLE_GREATER_THAN_COMBAT,
    payload: bool
})

export const  DISABLE_LESS_THAN = "DISABLE_LESS_THAN";
export const toggleLessThanInput = (bool) => ({
    type: DISABLE_LESS_THAN,
    payload: bool
})

export const  TOGGLE_HIDE_CP = "TOGGLE_HIDE_CP";
export const toggleHideCP = (bool) => ({
    type: TOGGLE_HIDE_CP,
    payload: bool
})






/** Set Game Tags */
export const UPDATE_GAME_TAGS = "UPDATE_GAME_TAGS";
export const updateGameTags = (tag) => ({
    type: UPDATE_GAME_TAGS,
    payload: tag
});
export const UPDATE_CUSTOM_GAME_TAGS = "UPDATE_CUSTOM_GAME_TAGS";
export const updateCustomGameTag = (tag) => ({
    type: UPDATE_CUSTOM_GAME_TAGS,
    payload: tag
});
export const UPDATE_FIND_TAGS = "UPDATE_FIND_TAGS";
export const updateFindTags = (tag) => ({
    type: UPDATE_FIND_TAGS,
    payload: tag
});


/** Set Attribute */
export const TOGGLE_ATTRIBUTE = "TOGGLE_ATTRIBUTE";
export const toggleAttribute = (attribute) => ({
    type: TOGGLE_ATTRIBUTE,
    payload: attribute,
});
export const SET_INCLUDE_ATTRIBUTE_APPRAISAL = "SET_INCLUDE_ATTRIBUTE_APPRAISAL";
export const setIncludeAttribute = (checked) => ({
    type: SET_INCLUDE_ATTRIBUTE_APPRAISAL,
    payload: checked
})
export const SET_ATTRIBUTE_APPRAISAL = "SET_ATTRIBUTE_APPRAISAL";
export const setAttributeAppraisal = (values) => ({
    type: SET_ATTRIBUTE_APPRAISAL,
    payload: values
})
export const SET_FINAL_APPRAISAL_STRING = "SET_FINAL_APPRAISAL_STRING";
export const setFinalAttributeAppraisal = (values) => ({
    type: SET_FINAL_APPRAISAL_STRING,
    payload: values
})


export const SET_FINAL_STRING = "SET_FINAL_STRING";

export const setFinalString = (finalString) => ({
    type: SET_FINAL_STRING,
    payload: finalString,
});

export const RESET_STATE = "RESET_STATE";

export const resetState = () => ({
    type: RESET_STATE,
});

