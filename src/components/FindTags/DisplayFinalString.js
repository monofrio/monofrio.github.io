import React from 'react';
import { connect } from 'react-redux';

const DisplayFinalString = ({ finalString }) => {
    return (
        <div>
            <h3>Final String:</h3>
            <p>{finalString}</p>
        </div>
    );
};

const mapStateToProps = (state) => ({
    finalString: state.finalCopy.finalString, // Replace `appReducer` with your actual reducer name
});

export default connect(mapStateToProps)(DisplayFinalString);
