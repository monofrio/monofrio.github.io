import React from 'react';
import { connect } from 'react-redux';
import { toggleAttribute, setIncludeAttribute } from '../../actions';


class AttributeAppraisal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Fetch initial state or perform any side effects here
    }

    // handleButtonClickAttack = (event) => {
    //     const buttonName = event.target.name;
    //     const { selectedButtons } = this.props;
    //
    //     // Update selected buttons based on the clicked button
    //     let updatedSelection = [];
    //     if (selectedButtons.includes(buttonName)) {
    //         // If the button is already selected, remove it
    //         updatedSelection = selectedButtons.filter((btn) => btn !== buttonName);
    //     } else {
    //         // If the button is not selected, add it
    //         updatedSelection = [...selectedButtons, buttonName];
    //     }
    //
    //     if (updatedSelection.includes('attack1') && !updatedSelection.includes('attack2') && buttonName === 'attack3') {
    //         updatedSelection = updatedSelection.filter(btn => btn !== 'attack3');
    //         updatedSelection = [...updatedSelection, 'attack2'];
    //         updatedSelection = [...updatedSelection, 'attack3'];
    //     }
    //
    //     else if (buttonName === 'attack2' && !updatedSelection.includes('attack2')) {
    //         updatedSelection = updatedSelection.filter(btn => btn !== 'attack3');
    //     }
    //
    //     else if (buttonName === "attack1" && updatedSelection.includes('attack3') ) {
    //         updatedSelection = updatedSelection.filter(btn => btn !== 'attack2');
    //         updatedSelection = [...updatedSelection, 'attack2'];
    //     }
    //
    //     // Update the selected buttons state
    //     this.setState({ selectedButtons: updatedSelection });
    // };
    // handleButtonClickDefence = (event) => {
    //     const buttonName = event.target.name;
    //     const { selectedButtons } = this.props;
    //
    //     // Update selected buttons based on the clicked button
    //     let updatedSelection = [];
    //     if (selectedButtons.includes(buttonName)) {
    //         // If the button is already selected, remove it
    //         updatedSelection = selectedButtons.filter((btn) => btn !== buttonName);
    //     } else {
    //         // If the button is not selected, add it
    //         updatedSelection = [...selectedButtons, buttonName];
    //     }
    //
    //     if (updatedSelection.includes('defence1') && !updatedSelection.includes('defence2') && buttonName === 'defence3') {
    //         updatedSelection = updatedSelection.filter(btn => btn !== 'defence3');
    //         updatedSelection = [...updatedSelection, 'defence2'];
    //         updatedSelection = [...updatedSelection, 'defence3'];
    //     }
    //     else if (buttonName === "defence1" && updatedSelection.includes('defence3')) {
    //         updatedSelection = updatedSelection.filter(btn => btn !== 'defence2');
    //         updatedSelection = [...updatedSelection, 'defence2'];
    //     }
    //
    //     else if (buttonName === 'defence2' && !updatedSelection.includes('defence2')) {
    //         updatedSelection = updatedSelection.filter(btn => btn !== 'defence3');
    //     }
    //
    //     // Update the selected buttons state
    //     this.setState({ selectedButtons: updatedSelection });
    // };
    // handleButtonClickHP = (event) => {
    //     const buttonName = event.target.name;
    //     const { selectedButtons } = this.props;
    //
    //     // Update selected buttons based on the clicked button
    //     let updatedSelection = [];
    //     if (selectedButtons.includes(buttonName)) {
    //         // If the button is already selected, remove it
    //         updatedSelection = selectedButtons.filter((btn) => btn !== buttonName);
    //         this.props.handleButtonClick(selectedButtons)
    //     } else {
    //         // If the button is not selected, add it
    //         updatedSelection = [...selectedButtons, buttonName];
    //         this.props.handleButtonClick(selectedButtons)
    //     }
    //
    //     if (updatedSelection.includes('hp1') && !updatedSelection.includes('hp2') && buttonName === 'hp3') {
    //         updatedSelection = updatedSelection.filter(btn => btn !== 'hp3');
    //         updatedSelection = [...updatedSelection, 'hp2'];
    //         updatedSelection = [...updatedSelection, 'hp3'];
    //         this.props.handleButtonClick(selectedButtons)
    //     }
    //     else if (buttonName === "hp1" && updatedSelection.includes('hp3')) {
    //         updatedSelection = updatedSelection.filter(btn => btn !== 'hp2');
    //         updatedSelection = [...updatedSelection, 'hp2'];
    //         this.props.handleButtonClick(selectedButtons)
    //     }
    //     else if (buttonName === 'hp2' && !updatedSelection.includes('hp2')) {
    //         updatedSelection = updatedSelection.filter(btn => btn !== 'hp3');
    //         this.props.handleButtonClick(selectedButtons)
    //     }
    //
    //     // Update the selected buttons state
    //     this.setState({ selectedButtons: updatedSelection });
    // };

    // handleCheckboxChange = (event) => {
    //     const { name, checked } = event.target;
    //     this.setState({ [`${name}Active`]: checked });
    // };
    handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        this.props.toggleAttribute(name, checked);
        const { hpActive, defenceActive, attackActive } = this.props
        if(name === "hp"){
            setIncludeAttribute(hpActive, checked)
        } else if (name === ' defence') {
            setIncludeAttribute(defenceActive,checked)
        }
        else if ( name === 'attack') {
            setIncludeAttribute(attackActive,checked)
        }

        console.log(name, checked)
    };

    // handleButtonClick = (event) => {
    //     const { name } = event.target;
    //     this.props.toggleAttribute(name);
    // };

    activateAttribute = (event) => {
        const { setIncludeAttribute , includeAttribute} = this.props
        setIncludeAttribute(!includeAttribute)
    }

    render() {
        const { attackActive, defenseActive, hpActive, includeAttribute } = this.props;

        return (
            <div id={'AttributesAppraisal'}>

                <aside>
                    <input
                        id="set-attributes-checkbox"
                        type="checkbox"
                        name="includeAttribute"
                        className="btn-check"
                        autoComplete="off"
                        checked={ includeAttribute }
                        onChange={ this.activateAttribute }
                    />
                    <label
                        className="btn btn-outline-primary"
                        htmlFor="set-attributes-checkbox"
                    > Include </label>


                    <h3>Attributes</h3>

                    <div className={"attributes container-fluid"}>

                        <div>
                            <input
                                id="attack-attributes-checkbox"
                                type="checkbox"
                                name="attack"
                                className="btn-check"
                                autoComplete="off"

                                checked={attackActive}
                                onChange={this.handleCheckboxChange}
                            />
                            <label
                                className="btn btn-outline-primary"
                                htmlFor="attack-attributes-checkbox"> Attack </label>
                        </div>

                        <div>
                            <input
                                id="defense-attributes-checkbox"
                                type="checkbox"
                                name="defense"
                                className="btn-check"
                                autoComplete="off"

                                checked={defenseActive}
                                onChange={this.handleCheckboxChange}
                            />
                            <label
                                className="btn btn-outline-primary"
                                htmlFor="defense-attributes-checkbox"> Defense </label>
                        </div>

                        <div>
                            <input
                                id="hp-attributes-checkbox"
                                type="checkbox"
                                name="hp"
                                className="btn-check"
                                autoComplete="off"

                                checked={hpActive}
                                onChange={this.handleCheckboxChange}
                            />
                            <label
                                className="btn btn-outline-primary"
                                htmlFor="hp-attributes-checkbox"> HP </label>
                        </div>

                    </div>

                </aside>

                <h3>Appraisal</h3>

                {/*{this.props.attackActive && (*/}
                {/*    <div id={"actionBar-attack"} className={"actionBar"}>*/}
                {/*        <h5>Attack</h5>*/}
                {/*        <div className={"bar"}>*/}
                {/*            <button*/}
                {/*                name="attack1"*/}
                {/*                value="Button 1"*/}
                {/*                onClick={this.handleButtonClickAttack}*/}
                {/*                className={this.props.selectedButtons.includes('attack1') ? 'checked' : ''}*/}
                {/*            ></button>*/}
                {/*            <button*/}
                {/*                name="attack2"*/}
                {/*                value="Button 2"*/}
                {/*                onClick={this.handleButtonClickAttack}*/}
                {/*                className={this.props.selectedButtons.includes('attack2') ? 'checked' : ''}*/}
                {/*            ></button>*/}
                {/*            <button*/}
                {/*                name="attack3"*/}
                {/*                value="Button 3"*/}
                {/*                onClick={this.handleButtonClickAttack}*/}
                {/*                className={this.props.selectedButtons.includes('attack3') ? 'checked' : ''}*/}
                {/*            ></button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}

                {/*{this.props.defenseActive && (*/}
                {/*    <div id={"actionBar-defence"} className={"actionBar"}>*/}
                {/*        <h5>Defense</h5>*/}
                {/*        <div className={"bar"}>*/}
                {/*            <button*/}
                {/*                name="defence1"*/}
                {/*                value="defence1"*/}
                {/*                onClick={this.handleButtonClickDefence}*/}
                {/*                className={this.props.selectedButtons.includes('defence1') ? 'checked' : ''}*/}
                {/*            ></button>*/}
                {/*            <button*/}
                {/*                name="defence2"*/}
                {/*                value="defence2"*/}
                {/*                onClick={this.handleButtonClickDefence}*/}
                {/*                className={this.props.selectedButtons.includes('defence2') ? 'checked' : ''}*/}
                {/*            ></button>*/}
                {/*            <button*/}
                {/*                name="defence3"*/}
                {/*                value="defence3"*/}
                {/*                onClick={this.handleButtonClickDefence}*/}
                {/*                className={this.props.selectedButtons.includes('defence3') ? 'checked' : ''}*/}
                {/*            ></button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}

                {/*{this.props.hpActive && (*/}
                {/*    <div id={"actionBar-hp"} className={"actionBar"}>*/}
                {/*        <h5>HP</h5>*/}
                {/*        <div className={"bar"}>*/}
                {/*            <button*/}
                {/*                name="hp1"*/}
                {/*                value="hp1"*/}
                {/*                onClick={this.handleButtonClickHP}*/}
                {/*                className={this.props.selectedButtons.includes('hp1') ? 'checked' : ''}*/}
                {/*            ></button>*/}
                {/*            <button*/}
                {/*                name="hp2"*/}
                {/*                value="hp2"*/}
                {/*                onClick={this.handleButtonClickHP}*/}
                {/*                className={this.props.selectedButtons.includes('hp2') ? 'checked' : ''}*/}
                {/*            ></button>*/}
                {/*            <button*/}
                {/*                name="hp3"*/}
                {/*                value="hp3"*/}
                {/*                onClick={this.handleButtonClickHP}*/}
                {/*                className={this.props.selectedButtons.includes('hp3') ? 'checked' : ''}*/}
                {/*            ></button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*)}*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    attackActive: state.attributeAppraisal.attackActive,
    defenseActive: state.attributeAppraisal.defenseActive,
    hpActive: state.attributeAppraisal.hpActive,
    includeAttribute: state.attributeAppraisal.includeAttribute

});

const mapDispatchToProps = {
    toggleAttribute,
    setIncludeAttribute
};

export default connect(mapStateToProps, mapDispatchToProps)(AttributeAppraisal);
