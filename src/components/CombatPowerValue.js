import React from 'react';
import { connect } from 'react-redux';
import { setCombatPower } from '../actions';

class CombatPowerValue extends React.Component {
    handleChange = (event) => {
        const value = parseInt(event.target.value);
        if (!isNaN(value)) {
            this.props.setCombatPower(value);
        }
    };

    render() {
        return (
            <div className="accordion mt-3" id="accordionCPrange" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button btn-warning" type="button" data-bs-toggle="collapse"
                                data-bs-target="#CPrange" aria-expanded="true" aria-controls="CPrange">
                            <p>CP Range: {this.props.combatPower.combatPower < 10 ? "10" : "10 - " + this.props.combatPower.combatPower}</p>
                        </button>
                    </h2>
                    <div id="CPrange" className="accordion-collapse collapse show" data-bs-parent="#accordionCPrange">
                        <div className="accordion-body">
                            <div>
                                <label>Combat Power Value:</label>
                                <input
                                    type="range"
                                    className="form-range"
                                    min="0"
                                    max="6000"
                                    step="100"
                                    value={this.props.combatPower.combatPower}
                                    onChange={this.handleChange}
                                    id="customRange3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    combatPower: state.combatPower
});

const mapDispatchToProps = {
    setCombatPower
};

export default connect(mapStateToProps, mapDispatchToProps)(CombatPowerValue);
