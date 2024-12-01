const initialState = {
    combatPowerMax: 5000,
    combatPowerMin: 10,
    includeCombatPower: false,
    hideCP: false,
    finalCPString: "CP10",

    disableMaxInput: true,
    disableMinInput: true,

    greaterThan: false,
    lessThan: false,

    disableLessThanInput: false,
};

const combatPowerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMBAT_POWER_MIN':
            return {
                ...state,
                combatPowerMin: action.payload
            };
        case 'SET_COMBAT_POWER_MAX':
            return {
                ...state,
                combatPowerMax: action.payload
            };
        case "SET_INCLUDE_COMBAT_POWER":
            return {
                ...state,
                includeCombatPower: action.payload
            }
        case "SET_FINAL_CP":
            return {
                ...state,
                finalCPString: action.payload
            }
        case "TOGGLE_DISABLE_MAX_INPUT":
            return {
                ...state,
                disableMaxInput: action.payload
            }
        case "TOGGLE_DISABLE_MIN_INPUT":
            return {
                ...state,
                disableMinInput: action.payload
            }
        case "TOGGLE_LESS_THAN_COMBAT":
            return {
                ...state,
                lessThan: action.payload
            }
        case "TOGGLE_GREATER_THAN_COMBAT":
            return {
                ...state,
                greaterThan: action.payload
            }
        case "DISABLE_LESS_THAN":
            return {
                ...state,
                disableLessThanInput: action.payload
            }
        case "TOGGLE_HIDE_CP":
            return {
                ...state,
                hideCP: action.payload
            }
        default:
            return state;
    }
};

export default combatPowerReducer;
