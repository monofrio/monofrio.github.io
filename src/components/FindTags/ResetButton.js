import React from 'react';
import { connect } from 'react-redux';
import { resetState } from "../../actions";

const ResetButton = ({ resetState }) => {
    const handleReset = () => {
        resetState(); // Dispatch the reset action
    };

    return (
        <div>
            <button className="btn btn-danger" onClick={handleReset}>
                Reset All
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    resetState,
};

export default connect(null, mapDispatchToProps)(ResetButton);
