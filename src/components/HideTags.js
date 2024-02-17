import React from 'react';
import { GlobalState } from './GlobalState'; // Assuming GlobalState.js is the file where you defined your global state

function HideTags() {
    const { state, dispatch } = GlobalState();

    const toggleCheckbox = (key) => {
        dispatch({ type: 'TOGGLE_CHECKBOX', key });
    };
    let hideString =
        Object.entries(state).map(
            ([key, value]) => (

                (value && key !== "value") ? "!" + key + "&" : ""
            )
        ).join("")
    let cpString  =  (state.value < 10)? "" : "cp10-" + state.value

    let finalString = hideString + cpString

    async function copyContent(data) {
        let text = data;

        try {
            await navigator.clipboard.writeText(text);
            console.log('Content copied to clipboard');
            console.log('-- Value: ' + text)
            /* Resolved - text copied to clipboard successfully */
        } catch (err) {
            console.error('Failed to copy: ', err);
            /* Rejected - text failed to copy to the clipboard */
        }
    }


    return (
        <>
            <div>
                <button className={"btn btn-dark"} onClick={ ()=> copyContent(finalString)}>Copy Search To Hide Pokemon</button>
            </div>
            <hr />
            <div className="container">
            <aside className="row align-items-start">
                {Object.keys(state).map((key) => (
                    key !== "value"?
                    <div key={key} className="col-4 p-1">
                        <input
                            type="checkbox"
                            className="btn-check"
                            id={`btn-check-${key}`}
                            autoComplete="off"
                            checked={state[key]}
                            onChange={() => toggleCheckbox(key)}
                        />
                        <label className="btn btn-outline-primary" htmlFor={`btn-check-${key}`}>
                            { key !== "adventureeffect" ? key.charAt(0).toUpperCase() + key.slice(1) : "Adventure effect" }
                        </label>
                    </div>: ""
                )
                )}
            </aside>

        </div>
            </>
    );
}

export default HideTags;
