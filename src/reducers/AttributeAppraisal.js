import {SET_INCLUDE_ATTRIBUTE_APPRAISAL, TOGGLE_ATTRIBUTE} from '../actions';

const initialState = {
    attackActive: false,
    defenseActive: false,
    hpActive: false,
    includeAttribute: false,
};

const attributeAppraisalReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_ATTRIBUTE:
            return {
                ...state,
                [`${action.payload}Active`]: !state[`${action.payload}Active`],
            };
        case SET_INCLUDE_ATTRIBUTE_APPRAISAL:
            return {
                ...state,
                includeAttribute: action.payload
            };
        default:
            return state;
    }
};

export default attributeAppraisalReducer;
