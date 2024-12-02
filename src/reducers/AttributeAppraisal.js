import { SET_INCLUDE_ATTRIBUTE_APPRAISAL, TOGGLE_ATTRIBUTE, SET_ATTRIBUTE_APPRAISAL, SET_FINAL_APPRAISAL_STRING } from '../actions';

const initialState = {
    attackActive: false,
    defenseActive: false,
    hpActive: false,

    includeAttribute: false,

    attackAttribute: null,
    defenseAttribute: null,
    hpAttribute: null,

    selectedButtons: [],

    finalAttribute: ""

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
                includeAttribute: action.payload,
            };
        case SET_ATTRIBUTE_APPRAISAL:
            return {
                ...state,
                selectedButtons: action.payload,

            };
        case SET_FINAL_APPRAISAL_STRING:
            return {
                ...state,
                finalAttribute: action.payload,
            }
        case "RESET_STATE":
            return initialState


        default:
            return state;
    }
};

export default attributeAppraisalReducer;
