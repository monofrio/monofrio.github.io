import React from 'react';
import { connect } from 'react-redux';
import { setCombatPowerRangeMin, setCombatPowerRangeMax, setIncludeCombatPower } from '../../actions';

class CombatPowerValue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disableMaxInput: true,
            activated: false,
            greaterThan: false,
            lessThan: false,
            greaterThanLessThan: true
        };
    }

    handleMinChange = (event) => {
        const minValue = parseInt(event.target.value);
        const { combatPowerMax, setCombatPowerRangeMin } = this.props;
        if (!isNaN(minValue) && minValue <= combatPowerMax) {
            setCombatPowerRangeMin(minValue);
        }
    };

    handleMaxChange = (event) => {
        const maxValue = parseInt(event.target.value);
        const { combatPowerMin, setCombatPowerRangeMax } = this.props;
        if (!isNaN(maxValue) && maxValue >= combatPowerMin) {
            setCombatPowerRangeMax(maxValue);
        }
    };

    handleIncludeCombatPowerChange = (event) => {
        setIncludeCombatPower(event.target.checked);
        this.setState(prevState => ({
            activated: !prevState.activated
        }));
    };

    handleToggleDisableMax = () => {
        this.setState(prevState => ({
            disableMaxInput: !prevState.disableMaxInput,
            greaterThanLessThan: !prevState.greaterThanLessThan
        }));
        if(this.state.greaterThan || this.state.lessThan){
            this.setState(() => ({
                lessThan: false,
                greaterThan: false
            }));
        }
    };

    handleLessThan = () => {
        if(this.props.combatPowerMin === 10){
            console.log("Equal to 10")
        } else {
            this.setState(prevState => ({
                lessThan: !prevState.lessThan,
                greaterThan: false
            }));
        }
    };

    handleGreaterThan = () => {
        this.setState(prevState => ({
            greaterThan: !prevState.greaterThan,
            lessThan: false
        }))
    };

    render() {
        const { combatPowerMin, combatPowerMax, includeCombatPower } = this.props;
        const { disableMaxInput, activated, lessThan, greaterThan, greaterThanLessThan } = this.state;
        return (
            <div className="container">
                <div className="row align-items-center">

                    <div className="col">

                        {/** Activate */}
                        <input
                            className="btn-check"
                            id="includeCombatPowerCheckbox"
                            onClick={this.handleIncludeCombatPowerChange}
                            type="checkbox"
                            name="activateCP"
                            checked={activated}
                        />
                        <label className="btn btn-outline-primary" htmlFor="includeCombatPowerCheckbox">
                            {activated ? 'Deactivate' : 'Activate'}
                        </label>
                        &nbsp;

                        { /** Toggle Max */}
                        <input
                            className="btn-check"
                            id="disableMaxCP"
                            onClick={this.handleToggleDisableMax}
                            type="checkbox"
                            name="disableMaxCP"
                            checked={!disableMaxInput}
                            disabled={!activated}
                        />
                        <label className="btn btn-outline-primary" htmlFor="disableMaxCP">
                            {disableMaxInput ? 'Enable Max' : 'Disable Max'}
                        </label>
                        &nbsp;

                        { /** Less Than */}
                        <input
                            className="btn-check"
                            id="handleLessThan"
                            name="handleLessThan"
                            onClick={this.handleLessThan}
                            type="checkbox"
                            checked={lessThan}
                            disabled={!activated || !greaterThanLessThan}
                        />
                        <label
                            className="btn btn-outline-primary" htmlFor="handleLessThan"
                        >
                            Less Than
                        </label>
                        &nbsp;

                        { /** Greater Than */}
                        <input
                            className="btn-check"
                            id="handleGreaterThan"
                            name="handleGreaterThan"
                            onClick={this.handleGreaterThan}
                            type="checkbox"
                            checked={greaterThan}
                            disabled={!activated || !greaterThanLessThan}
                        />
                        <label
                            className="btn btn-outline-primary"
                            htmlFor="handleGreaterThan"
                        >
                            Greater Than
                        </label>

                        <br/>
                        <input
                            type="input"
                            className="form-control mt-4"
                            value={combatPowerMin}
                            onChange={this.handleMinChange}
                            disabled={!activated}
                        />
                    </div>
                </div>

                <div className="row align-items-center">
                    <h2 className="pt-3 pb-3">
                        CP{!disableMaxInput ?
                        combatPowerMin :
                        lessThan ? "-" + combatPowerMin :
                                greaterThan ? combatPowerMin + "-" : combatPowerMin }
                        { disableMaxInput ? "" : " - " + combatPowerMax }
                    </h2>
                    <div className="col">
                        <label htmlFor="minCombatPowerRange" className="form-label">
                            Min
                        </label>
                        <input
                            type="range"
                            className="form-range"
                            min="0"
                            max="6000"
                            step="10"
                            value={combatPowerMin}
                            onChange={this.handleMinChange}
                            id="minCombatPowerRange"
                            disabled={!activated}
                        />
                        {!disableMaxInput && (
                            <>
                                <span>Max</span>
                                <input
                                    type="range"
                                    className="form-range"
                                    min="0"
                                    max="6000"
                                    step="10"
                                    value={combatPowerMax}
                                    onChange={this.handleMaxChange}
                                    id="maxCombatPowerRange"
                                    disabled={!activated}
                                />
                            </>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    combatPowerMin: state.combatPower.combatPowerMin,
    combatPowerMax: state.combatPower.combatPowerMax,
    includeCombatPower: state.combatPower.includeCombatPower,
});

const mapDispatchToProps = {
    setCombatPowerRangeMin,
    setCombatPowerRangeMax,
    setIncludeCombatPower,
};

export default connect(mapStateToProps, mapDispatchToProps)(CombatPowerValue);
