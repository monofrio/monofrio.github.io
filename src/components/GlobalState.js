import React, { createContext, useContext, useReducer } from 'react';
import data from "../data/data.json"

// Create a context for the global state
const GlobalStateContext = createContext();


// Create a reducer function to manage state transitions
const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_CHECKBOX':
            return {
                ...state,
                [action.key]: !state[action.key]
            };
        case 'SET_VALUE':
            return {
                ...state,
                value: action.value // Update the value property in the state
            };
        default:
            return state;
    }
};

// Create a provider component to wrap your app and provide access to the global state
export const GlobalStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, data.initialState);

    return (
        <GlobalStateContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Create a custom hook to access the global state and dispatch actions
export const GlobalState = () => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};
