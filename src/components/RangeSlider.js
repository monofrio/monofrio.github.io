import React from 'react';
import { GlobalState } from './GlobalState'; // Assuming GlobalState.js is the file where you defined your global state

function RangeSlider() {
    const { state, dispatch } = GlobalState(); // Using useGlobalState to access global state

    const handleChange = (event) => {
        dispatch({ type: 'SET_VALUE', value: event.target.value }); // Dispatching an action to update the global state
    };

    return (
        <div className="accordion" id="accordionCPrange">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button btn-warning" type="button" data-bs-toggle="collapse"
                            data-bs-target="#CPrange" aria-expanded="true" aria-controls="CPrange">
                        <p>CP Range: {state.value < 10 ? "10" : "10 - " + state.value}</p>
                    </button>
                </h2>
                <div id="CPrange" className="accordion-collapse collapse show" data-bs-parent="#accordionCPrange">
                    <div className="accordion-body">
                        <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="6000"
                            step="100"
                            value={state.value}
                            onChange={handleChange}
                            id="customRange3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RangeSlider;
