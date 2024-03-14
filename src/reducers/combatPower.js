const initialState = {
    combatPowerMax: 5000,
    combatPowerMin: 10,
    includeCombatPower: false
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
                includeCombatPower: state.payload
            }
        default:
            return state;
    }
};

export default combatPowerReducer;
