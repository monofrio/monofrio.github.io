import React, { useState } from 'react';
import { connect } from 'react-redux';

const CopyToClipboard = ({ data }) => {
    const [buttonClass, setButtonClass] = useState('btn btn-light');

    const copyToClipboard = () => {
        const gameTagsData = data.gameTags;
        let gameTagOutput = "";

        Object.entries(gameTagsData).forEach(([key, value]) => {
            if (value) {
                gameTagOutput += "!" + key + "&"
            }
        });

        const cpValue = data.combatPower.combatPower;
        const cpValueOutput = "cp10-" + cpValue;

        const customGameTagsData = data.customGameTags;
        let customGameTagsOutput = "";

        Object.entries(customGameTagsData).forEach(([key, value]) => {
            if (value) {
                customGameTagsOutput += "!" + key + "&"
            }
        });

        const finalOutput = gameTagOutput + cpValueOutput + customGameTagsOutput;

        // Create a temporary input element
        const tempInput = document.createElement('input');
        // Set its value to the data from the Redux store
        tempInput.value = finalOutput;
        // Append the input element to the DOM (required for copy)
        document.body.appendChild(tempInput);
        // Select the input element's content
        tempInput.select();
        // Copy the selected content to clipboard
        document.execCommand('copy');
        // Remove the input element from the DOM
        document.body.removeChild(tempInput);

        // Update button class to trigger transition effect
        setButtonClass('btn btn-outline-light');

        // Reset button class after 2 seconds to revert to original style
        setTimeout(() => {
            setButtonClass('btn btn-light');
        }, 2000);
    };

    return (
        <div>
            <button className={buttonClass} onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    data: state
});

export default connect(mapStateToProps)(CopyToClipboard);
