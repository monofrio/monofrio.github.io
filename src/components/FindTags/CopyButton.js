import React, { useState } from 'react';

const CopyToClipboardFind = ({ data, buttonStyle }) => {
    const [buttonClass, setButtonClass] = useState('btn btn-light');

    const copyToClipboard = () => {
        // Update button class to trigger transition effect
        setButtonClass('btn btn-outline-light');

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

        // Reset button class after 2 seconds to revert to original style
        setTimeout(() => {
            setButtonClass('btn btn-light');
        }, 2000);
    };

    return (
        <div>
            <button className={`${buttonClass} ${buttonStyle}`} onClick={copyToClipboardFind}>Copy to Clipboard</button>
        </div>
    );
};

export default CopyToClipboard;
