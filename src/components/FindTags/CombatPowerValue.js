import React from 'react';
import { connect } from 'react-redux';
import {
    setCombatPowerRangeMin,
    setCombatPowerRangeMax,
    setIncludeCombatPower,
    setFinalCP
} from '../../actions';

class CombatPowerValue extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            disableMaxInput: true,
            disableMinInput: true,

            greaterThan: false,
            lessThan: false,
        };

    }

    componentDidMount() {
        this.hideLessthan();
    }

    handleMinChange = (event) => {
        const minValue = parseInt(event.target.value);
        const { combatPowerMax, setCombatPowerRangeMin } = this.props;
        if (!isNaN(minValue) && minValue <= combatPowerMax) {
            setCombatPowerRangeMin(minValue);
            this.finalString()
            this.hideLessthan()
        }

    };
    handleMaxChange = (event) => {
        const maxValue = parseInt(event.target.value);
        const { combatPowerMin, setCombatPowerRangeMax } = this.props;
        if (!isNaN(maxValue) && maxValue >= combatPowerMin) {
            setCombatPowerRangeMax(maxValue);
            this.finalString()
        }

    };
    handleIncludeCombatPowerChange = () => {
        const { includeCombatPower, setIncludeCombatPower } = this.props;
        setIncludeCombatPower(!includeCombatPower); // Toggle includeCombatPower

        this.hideLessthan()
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

        this.finalString()
    };
    hideLessthan = () => {

        if( this.props.combatPowerMin === 10 ) {
            this.setState(() => ({
                disableMinInput: false
            }))
        } else if ( this.props.combatPowerMin > 10 || this.state.disableMaxInput ) {
            this.setState( () => ({
                disableMinInput: true
            }))
        }
    }
    handleLessThan = () => {
        const { setFinalCP } = this.props
        if(this.props.combatPowerMin === 10){

            console.log("Equal to 10, can not be less than")

        } else {
            this.setState(prevState => ({
                lessThan: !prevState.lessThan,
                greaterThan: false
            }));
        }

        this.finalString()
    };
    handleGreaterThan = () => {
        const { setFinalCP } = this.props;
        this.setState(prevState => ({
            greaterThan: !prevState.greaterThan,
            lessThan: false
        }))
        this.finalString()
    };
    finalString  = () => {
        const { disableMaxInput } = this.state;
        const { combatPowerMin, combatPowerMax, setFinalCP} = this.props;
        const lessThan = this.state.lessThan;
        const greaterThan = this.state.greaterThan;

        const cpMin =  !disableMaxInput ? combatPowerMin : lessThan ? "-" + combatPowerMin : greaterThan ? combatPowerMin + "-" : combatPowerMin;
        const cpMax = disableMaxInput ? "" : "-" + combatPowerMax;
        const finalString = "CP" + cpMin + cpMax;
        setFinalCP( finalString )
        return finalString
    }

    render() {
        const { combatPowerMin, combatPowerMax, includeCombatPower } = this.props;
        const { disableMaxInput, lessThan, greaterThan, disableMinInput } = this.state;

        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">

                        {/** Activate */}
                        <input
                            className="btn-check"
                            id="includeCombatPowerCheckbox"
                            onChange={ this.handleIncludeCombatPowerChange }
                            type="checkbox"
                            name="activateCP"
                            checked={ includeCombatPower }
                        />
                        <label className="btn btn-outline-primary" htmlFor="includeCombatPowerCheckbox">
                            { includeCombatPower ? 'Deactivate' : 'Activate' }
                        </label>
                        &nbsp;

                        { /** Toggle: Enable/Disable Max Range */}
                        <input
                            className="btn-check"
                            id="disableMaxCP"
                            onChange={ this.handleToggleDisableMax }
                            type="checkbox"
                            name="disableMaxCP"
                            checked={ !disableMaxInput }
                            disabled={ !includeCombatPower }
                        />
                        <label className="btn btn-outline-primary" htmlFor="disableMaxCP">
                            {disableMaxInput ? 'Enable Max' : 'Disable Max'}
                        </label>
                        &nbsp;

                        { /** Toggle: Less Range */}
                        <input
                            className="btn-check"
                            id="handleLessThan"
                            name="handleLessThan"
                            onChange={this.handleLessThan }
                            type="checkbox"
                            checked={lessThan}
                            disabled={ !includeCombatPower  || !disableMinInput }
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
                            onChange={this.handleGreaterThan }
                            type="checkbox"
                            checked={greaterThan}
                            disabled={!includeCombatPower  || !disableMaxInput }
                        />
                        <label
                            className="btn btn-outline-primary"
                            htmlFor="handleGreaterThan"
                        >
                            Greater Than
                        </label>

                        <br/>
                        <div className={'d-inline-flex'}>
                        <input
                            type="input"
                            className="form-control mt-4"
                            value={combatPowerMin}
                            onChange={ this.handleMinChange }
                            disabled={!includeCombatPower }
                        />

                        <input
                            type="input"
                            className="form-control mt-4"
                            value={combatPowerMax}
                            onChange={ this.handleMaxChange }
                            disabled={!includeCombatPower || disableMaxInput}
                        />
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">

                    <h2 className="pt-3 pb-3">
                        {this.finalString()}
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
                            onChange={ this.handleMinChange }
                            id="minCombatPowerRange"
                            disabled={ !includeCombatPower }
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
                                    onChange={ this.handleMaxChange }
                                    id="maxCombatPowerRange"
                                    disabled={!includeCombatPower }
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
    finalCPString: state.combatPower.finalCPString
});

const mapDispatchToProps = {
    setCombatPowerRangeMin,
    setCombatPowerRangeMax,
    setIncludeCombatPower,
    setFinalCP
};

export default connect(mapStateToProps, mapDispatchToProps)(CombatPowerValue);