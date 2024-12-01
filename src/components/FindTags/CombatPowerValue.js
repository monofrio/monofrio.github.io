import React from 'react';
import { connect } from 'react-redux';
import {
    setCombatPowerRangeMin,
    setCombatPowerRangeMax,
    setIncludeCombatPower,
    setFinalCP,
    toggleDisableMaxInputCombat,
    toggleDisableMinInputCombat,
    toggleLessThanCombat,
    toggleGreaterThanCombat,
    toggleLessThanInput,
    toggleHideCP
} from '../../actions';

class CombatPowerValue extends React.Component
{
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.disableLessThan();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.finalString()
    }

    handleMinChange = (event) => {
        const minValue = parseInt(event.target.value);

        let { combatPowerMax,
            setCombatPowerRangeMin,
            disableMaxInput,
        } = this.props;


        if (!isNaN(minValue) && minValue <= combatPowerMax) {
            setCombatPowerRangeMin(minValue);
            this.finalString()
        }
        if( disableMaxInput ){
            this.disableLessThan()
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

        this.disableLessThan()
        // this.finalString()
    };

    handleToggleDisableMax = () => {
        const {
            disableMaxInput,
            // disableLessThanInput,
            toggleDisableMaxInputCombat,
            // toggleDisableMinInputCombat,
            toggleLessThanCombat,
            toggleGreaterThanCombat,
            greaterThan,
            lessThan
        } = this.props

        toggleDisableMaxInputCombat(!disableMaxInput)
        this.disableLessThan()

        if( greaterThan || lessThan ){
            toggleGreaterThanCombat(false)
            toggleLessThanCombat(false)
        }

        // this.finalString()
    };
    disableLessThan = () => {
        let {
            // disableMaxInput,
            combatPowerMin,
            toggleDisableMinInputCombat,
            // toggleDisableMaxInputCombat,
            // toggleLessThanCombat,
            toggleLessThanInput
        } = this.props

        if( combatPowerMin === 10 ) {
            toggleDisableMinInputCombat( true )

            toggleLessThanInput(false)

            // console.log("Combat Power = 10")
        }
        else if ( combatPowerMin > 10 ) {
            // console.log("Combat Power > 10")
            toggleLessThanInput(true)

        }
        // this.finalString()
    }
    handleLessThan = () => {
        const {
            // setFinalCP,
            combatPowerMin,
            toggleLessThanCombat,
            lessThan,
            toggleGreaterThanCombat,
            toggleDisableMinInputCombat,

        } = this.props

        if(combatPowerMin === 10){
            toggleLessThanCombat(false)
            toggleDisableMinInputCombat(false)

            // console.log("Equal to 10, can not be less than")

        } else {
            toggleLessThanCombat(!lessThan)
            toggleGreaterThanCombat(false)
        }

        // this.finalString()
    };
    handleGreaterThan = () => {
        const {
            // setFinalCP,
            toggleLessThanCombat,
            // lessThan,
            greaterThan,
            toggleGreaterThanCombat,  } = this.props;

        toggleLessThanCombat(false);
        toggleGreaterThanCombat(!greaterThan);

        // this.finalString()
    };

    hideCombatePower = () => {
        const {toggleHideCP, hideCP } = this.props;
        toggleHideCP(!hideCP); // Toggle the hide state
        // this.finalString()
    };
    finalString  = () => {
        const { combatPowerMin, combatPowerMax, setFinalCP, disableMaxInput, hideCP} = this.props;

        const lessThan = this.props.lessThan;
        const greaterThan = this.props.greaterThan;

        const cpMin =  !disableMaxInput
            ? combatPowerMin
            : lessThan
                ? "-" + combatPowerMin
                : greaterThan
                    ? combatPowerMin + "-"
                    : combatPowerMin;
        const cpMax = disableMaxInput ? "" : "-" + combatPowerMax;

        const finalString = `${hideCP?"!":""}CP${cpMin}${cpMax}`;

        setFinalCP( finalString )

        return finalString
    }

    render() {
        const {
            combatPowerMin,
            combatPowerMax,
            includeCombatPower,
            disableMaxInput,
            lessThan,
            greaterThan,
            disableLessThanInput,
            hideCP
        } = this.props;

        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">

                        {/** Activate */}
                        <>
                            <input
                                className="btn-check"
                                id="includeCombatPowerCheckbox"
                                onChange={ this.handleIncludeCombatPowerChange }
                                type="checkbox"
                                name="activateCP"
                                checked={ includeCombatPower }
                            />
                            <label className="btn btn-outline-primary" htmlFor="includeCombatPowerCheckbox">
                                Include
                            </label>
                        </>
                        &nbsp;

                        { /** Toggle: Enable/Disable Max Range */}
                        <>
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
                        </>
                        &nbsp;

                        { /** Toggle: Less Range */}
                        <>
                            <input
                                className="btn-check"
                                id="handleLessThan"
                                name="handleLessThan"
                                onChange={this.handleLessThan }
                                type="checkbox"
                                checked={lessThan}
                                disabled={ !disableLessThanInput }
                            />
                            <label
                                className="btn btn-outline-primary" htmlFor="handleLessThan"
                            >
                                Less Than
                            </label>
                        </>
                        &nbsp;

                        { /** Greater Than */}
                        <>
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
                        </>

                        { /** Hide */}
                        <>
                            <input
                                className="btn-check"
                                id="hideCombatePower"
                                name="hideCombatePower"
                                onChange={this.hideCombatePower}
                                type="checkbox"
                                checked={hideCP}
                                disabled={!includeCombatPower}
                            />
                            <label
                                className="btn btn-outline-danger"
                                htmlFor="hideCombatePower"
                            >
                                Hide
                            </label>
                        </>

                        <br/>
                        <div className={'d-inline-flex'}>
                            <input
                                type="number"
                                className="form-control mt-4"
                                value={combatPowerMin}
                                onChange={this.handleMinChange}
                                disabled={!includeCombatPower}
                            />

                            <input
                            type="number"
                            className="form-control mt-4"
                            value={combatPowerMax}
                            onChange={ this.handleMaxChange }
                            disabled={!includeCombatPower || disableMaxInput}
                        />
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col">
                        <label htmlFor="minCombatPowerRange" className="form-label">
                            Min
                        </label>
                        <input
                            type="range"
                            className="form-range"
                            min="10"
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
                                    min="10"
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
    finalCPString: state.combatPower.finalCPString,

    disableMaxInput: state.combatPower.disableMaxInput,
    disableLessThanInput: state.combatPower.disableLessThanInput,

    greaterThan: state.combatPower.greaterThan,
    lessThan: state.combatPower.lessThan,

    hideCP: state.combatPower.hideCP,
});

const mapDispatchToProps = {
    setCombatPowerRangeMin,
    setCombatPowerRangeMax,
    setIncludeCombatPower,
    setFinalCP,
    toggleDisableMaxInputCombat,
    toggleDisableMinInputCombat,
    toggleLessThanCombat,
    toggleGreaterThanCombat,
    toggleLessThanInput,
    toggleHideCP,
};

export default connect(mapStateToProps, mapDispatchToProps)(CombatPowerValue);