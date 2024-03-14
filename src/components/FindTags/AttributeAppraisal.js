import React from 'react';
import '../../App.scss';

class AttributeAppraisal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedButtons: [], // Store the names of the selected buttons
            attackActive: true,
            defenseActive: true,
            hpActive: true
        };
    }

    handleButtonClickAttack = (event) => {
        const buttonName = event.target.name;
        const { selectedButtons } = this.state;

        // Update selected buttons based on the clicked button
        let updatedSelection = [];
        if (selectedButtons.includes(buttonName)) {
            // If the button is already selected, remove it
            updatedSelection = selectedButtons.filter((btn) => btn !== buttonName);
        } else {
            // If the button is not selected, add it
            updatedSelection = [...selectedButtons, buttonName];
        }

        if (updatedSelection.includes('attack1') && !updatedSelection.includes('attack2') && buttonName === 'attack3') {
            updatedSelection = updatedSelection.filter(btn => btn !== 'attack3');
            updatedSelection = [...updatedSelection, 'attack2'];
            updatedSelection = [...updatedSelection, 'attack3'];
        } else if (buttonName === 'attack2' && !updatedSelection.includes('attack2')) {
            updatedSelection = updatedSelection.filter(btn => btn !== 'attack3');
        }

        // Update the selected buttons state
        this.setState({ selectedButtons: updatedSelection });
    };
    handleButtonClickDefence = (event) => {
        const buttonName = event.target.name;
        const { selectedButtons } = this.state;

        // Update selected buttons based on the clicked button
        let updatedSelection = [];
        if (selectedButtons.includes(buttonName)) {
            // If the button is already selected, remove it
            updatedSelection = selectedButtons.filter((btn) => btn !== buttonName);
        } else {
            // If the button is not selected, add it
            updatedSelection = [...selectedButtons, buttonName];
        }

        if (updatedSelection.includes('defence1') && !updatedSelection.includes('defence2') && buttonName === 'defence3') {
            updatedSelection = updatedSelection.filter(btn => btn !== 'defence3');
            updatedSelection = [...updatedSelection, 'defence2'];
            updatedSelection = [...updatedSelection, 'defence3'];
        } else if (buttonName === 'defence2' && !updatedSelection.includes('defence2')) {
            updatedSelection = updatedSelection.filter(btn => btn !== 'defence3');
        }

        // Update the selected buttons state
        this.setState({ selectedButtons: updatedSelection });
    };
    handleButtonClickHP = (event) => {
        const buttonName = event.target.name;
        const { selectedButtons } = this.state;

        // Update selected buttons based on the clicked button
        let updatedSelection = [];
        if (selectedButtons.includes(buttonName)) {
            // If the button is already selected, remove it
            updatedSelection = selectedButtons.filter((btn) => btn !== buttonName);
        } else {
            // If the button is not selected, add it
            updatedSelection = [...selectedButtons, buttonName];
        }

        if (updatedSelection.includes('hp1') && !updatedSelection.includes('hp2') && buttonName === 'hp3') {
            updatedSelection = updatedSelection.filter(btn => btn !== 'hp3');
            updatedSelection = [...updatedSelection, 'hp2'];
            updatedSelection = [...updatedSelection, 'hp3'];
        } else if (buttonName === 'hp2' && !updatedSelection.includes('hp2')) {
            updatedSelection = updatedSelection.filter(btn => btn !== 'hp3');
        }

        // Update the selected buttons state
        this.setState({ selectedButtons: updatedSelection });
    };
    handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        this.setState({ [`${name}Active`]: checked });
    };

    render() {
        return (
            <div id={'AttributesAppraisal'}>

                <aside>

                    <h3>Attributes</h3>

                    <div className={"attributes"}>
                        <div>
                            <input
                                id={"attack-attributes-checkbox"}
                                type="checkbox"
                                name="attack"
                                className="btn-check"
                                autocomplete="off"

                                checked={this.state.attackActive}
                                onChange={this.handleCheckboxChange}

                            />
                            <label className="btn btn-outline-primary" for="attack-attributes-checkbox"> Attack </label>
                        </div>
                        <div>
                            <input
                                id={"defense-attributes-checkbox"}
                                type="checkbox"
                                name="defense"
                                className="btn-check"
                                autoComplete="off"

                                checked={this.state.defenseActive}
                                onChange={this.handleCheckboxChange}
                            />
                            <label className="btn btn-outline-primary" for="defense-attributes-checkbox">
                                Defense
                            </label>
                        </div>
                        <div>
                            <input
                                id={"hp-attributes-checkbox"}
                                type="checkbox"
                                name="hp"
                                className="btn-check"
                                autoComplete="off"

                                checked={this.state.hpActive}
                                onChange={this.handleCheckboxChange}
                            />
                            <label className="btn btn-outline-primary" for="hp-attributes-checkbox">
                                HP
                            </label>
                        </div>
                    </div>

                </aside>

                <h3>Appraisal</h3>

                {this.state.attackActive && (
                    <div id={"actionBar-attack"} className={"actionBar"}>
                        <h5>Attack</h5>
                        <div className={"bar"}>
                            <button
                                name="attack1"
                                value="Button 1"
                                onClick={this.handleButtonClickAttack}
                                className={this.state.selectedButtons.includes('attack1') ? 'checked' : ''}
                            ></button>
                            <button
                                name="attack2"
                                value="Button 2"
                                onClick={this.handleButtonClickAttack}
                                className={this.state.selectedButtons.includes('attack2') ? 'checked' : ''}
                            ></button>
                            <button
                                name="attack3"
                                value="Button 3"
                                onClick={this.handleButtonClickAttack}
                                className={this.state.selectedButtons.includes('attack3') ? 'checked' : ''}
                            ></button>
                        </div>
                    </div>
                )}

                {this.state.defenseActive && (
                    <div id={"actionBar-defence"} className={"actionBar"}>
                        <h5>Defense</h5>
                        <div className={"bar"}>
                            <button
                                name="defence1"
                                value="defence1"
                                onClick={this.handleButtonClickDefence}
                                className={this.state.selectedButtons.includes('defence1') ? 'checked' : ''}
                            ></button>
                            <button
                                name="defence2"
                                value="defence2"
                                onClick={this.handleButtonClickDefence}
                                className={this.state.selectedButtons.includes('defence2') ? 'checked' : ''}
                            ></button>
                            <button
                                name="defence3"
                                value="defence3"
                                onClick={this.handleButtonClickDefence}
                                className={this.state.selectedButtons.includes('defence3') ? 'checked' : ''}
                            ></button>
                        </div>
                    </div>
                )}

                {this.state.hpActive && (
                    <div id={"actionBar-hp"} className={"actionBar"}>
                        <h5>HP</h5>
                        <div className={"bar"}>
                            <button
                                name="hp1"
                                value="hp1"
                                onClick={this.handleButtonClickHP}
                                className={this.state.selectedButtons.includes('hp1') ? 'checked' : ''}
                            ></button>
                            <button
                                name="hp2"
                                value="hp2"
                                onClick={this.handleButtonClickHP}
                                className={this.state.selectedButtons.includes('hp2') ? 'checked' : ''}
                            ></button>
                            <button
                                name="hp3"
                                value="hp3"
                                onClick={this.handleButtonClickHP}
                                className={this.state.selectedButtons.includes('hp3') ? 'checked' : ''}
                            ></button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default AttributeAppraisal;
