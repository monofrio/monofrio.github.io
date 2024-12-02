import {SET_FINAL_STRING} from "../actions";

const initialState = {
    finalString: "", // Add this to store the final string
};

const finalCopy = (state = initialState, action) => {
    switch (action.type) {
        case SET_FINAL_STRING:
            return {
                ...state,
                finalString: action.payload, // Fix key to `finalString`
            };
        case "RESET_STATE":
            return initialState

        default:
            return state;
    }
};

export default finalCopy;
