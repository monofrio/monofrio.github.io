const initialState = {
    combatPower: 500
};

const combatPowerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMBAT_POWER':
            return {
                ...state,
                combatPower: action.payload
            };
        default:
            return state;
    }
};

export default combatPowerReducer;
