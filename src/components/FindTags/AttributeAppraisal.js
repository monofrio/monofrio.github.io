import React from 'react';
import { connect } from 'react-redux';
import {toggleAttribute, setIncludeAttribute, setAttributeAppraisal, setFinalAttributeAppraisal} from '../../actions';

class AttributeAppraisal extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Fetch initial state or perform any side effects here
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setOutputString();
    }

    setOutputString () {
        const { selectedButtons, attackActive, defenseActive, hpActive, setFinalAttributeAppraisal } = this.props
        let input = selectedButtons;
        const attack = input.includes('attack')
        const defence = input.includes('defence')
        const hp = input.includes('hp')

        let outputAttack = "";
        let outputDefence = "";
        let outputHp = "";

        if( attackActive && !attack ){

            outputAttack = "attack0"
        }
        if ( defenseActive && !defence){

            outputDefence = "defence0"
        }
        if ( hpActive && !hp){
            outputHp = "hp0"
        }

        const a1 = input.includes("attack1")
        const a2 = input.includes("attack2")
        const a3 = input.includes("attack3")

        const d1 = input.includes("defence1")
        const d2 = input.includes("defence2")
        const d3 = input.includes("defence3")

        const h1 = input.includes("hp1")
        const h2 = input.includes("hp2")
        const h3 = input.includes("hp3")

        if (attackActive){
                if(a1 && !a2 && !a3){
                    outputAttack = "attack1"
                }
                if(!a1 && a2 && !a3){
                    outputAttack = "attack2"
                }
                if(!a1 && !a2 && a3){
                    outputAttack = "attack3"
                }
                if(a1 && a2 && !a3){
                    outputAttack = "attack1-2"
                }
                if(a1 && a2 && a3){
                    outputAttack = "attack1-3"
                }
                if(!a1 && a2 && a3){
                    outputAttack = "attack2-3"
                }
            }

        if (defenseActive){
            if(d1 && !d2 && !d3){
                outputDefence = "defense1"
            }
            if(!d1 && d2 && !d3){
                outputDefence = "defense2"
            }
            if(!d1 && !d2 && d3){
                outputDefence = "defense3"
            }
            if(d1 && d2 && !d3){
                outputDefence = "defense1-2"
            }
            if(d1 && d2 && d3){
                outputDefence = "defense1-3"
            }
            if(!d1 && d2 && d3){
                outputDefence = "defense2-3"
            }
        }

        if(hpActive){
            if(h1 && !h2 && !h3){
                outputHp = "hp1"
            }
            if(!h1 && h2 && !h3){
                outputHp = "hp2"
            }
            if(!h1 && !h2 && h3){
                outputHp = "hp3"
            }
            if(h1 && h2 && !h3){
                outputHp = "hp1-2"
            }
            if(h1 && h2 && h3){
                outputHp = "hp1-3"
            }
            if(!h1 && h2 && h3){
                outputHp = "hp2-3"
            }
        }

        let finalAttack = attackActive ? outputAttack + "&" : "";
        let finalDefence = defenseActive ? outputDefence + "&" : "";
        let finalHP = hpActive ? outputHp + "&" : ""

        let finalString =  finalAttack + finalDefence + finalHP

        setFinalAttributeAppraisal( finalString )

    }

    setAttributeAppraisal(){
        const { selectedButtons } = this.props
    }

    handleAttributeAppraisal = (event) => {
        const buttonName = event.target.name;
        const buttonValue = event.target.value;
        let selectedButtonName = buttonName + buttonValue

        const { selectedButtons, attackAttribute, setAttributeAppraisal } = this.props;
        let updatedSelection = [];

        if (selectedButtons.includes(selectedButtonName ))
        {
            // If the button is already selected, remove it
            updatedSelection = selectedButtons.filter( (btn) => btn !== selectedButtonName );
        }
        else
        {
            // If the button is not selected, add it
            updatedSelection = [...selectedButtons, selectedButtonName];
        }

        if ( updatedSelection.includes(buttonName+'1') && !updatedSelection.includes(buttonName+'2') && selectedButtonName === buttonName+'3' )
        {
            updatedSelection = updatedSelection.filter(btn => btn !== buttonName+buttonValue);
            updatedSelection = [...updatedSelection, buttonName+"2"];
            updatedSelection = [...updatedSelection, buttonName+"3"];
        }
        else if ( selectedButtonName === buttonName+'2' && !updatedSelection.includes(buttonName+'2') )
        {
            updatedSelection = updatedSelection.filter(btn => btn !== buttonName+'3');
        }
        else if ( selectedButtonName === buttonName+"1" && updatedSelection.includes(buttonName+'3') )
        {
            updatedSelection = updatedSelection.filter(btn => btn !== buttonName+'2');
            updatedSelection = [...updatedSelection, buttonName+'2'];
        }
        else
        {}

        setAttributeAppraisal(updatedSelection)
        this.setAttributeAppraisal()
    };

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
        this.setState({ [`${name}Active`]: checked });

    };

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
                        className="btn btn-outline-primary mb-3"
                        htmlFor="set-attributes-checkbox"
                    > Include </label>


                    <h3>Attributes</h3>

                    <div className={"attributes d-inline-flex"}>

                        <div className={"me-2"}>
                            <input
                                id="attack-attributes-checkbox"
                                type="checkbox"
                                name="attack"
                                className="btn-check"
                                autoComplete="off"
                                disabled={!includeAttribute}
                                checked={attackActive}
                                onChange={this.handleCheckboxChange}
                            />
                            <label
                                className="btn btn-outline-primary"
                                htmlFor="attack-attributes-checkbox"> Attack </label>
                        </div>

                        <div className={"me-2"}>
                            <input
                                id="defense-attributes-checkbox"
                                type="checkbox"
                                name="defense"
                                className="btn-check"
                                autoComplete="off"
                                disabled={!includeAttribute}
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
                                disabled={!includeAttribute}
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

                { (this.props.attackActive && this.props.includeAttribute) && (
                    <div id={"actionBar-attack"} className={"actionBar"}>
                        <h5>Attack</h5>
                        <div className={"bar"}>
                            <button
                                name="attack"
                                value="1"
                                onClick={this.handleAttributeAppraisal}
                                className={this.props.selectedButtons.includes('attack1') ? 'checked' : ''}
                            ></button>
                            <button
                                name="attack"
                                value="2"
                                onClick={this.handleAttributeAppraisal}
                                className={this.props.selectedButtons.includes('attack2') ? 'checked' : ''}
                            ></button>
                            <button
                                name="attack"
                                value="3"
                                onClick={this.handleAttributeAppraisal}
                                className={this.props.selectedButtons.includes('attack3') ? 'checked' : ''}
                            ></button>
                        </div>
                    </div>
                )}

                {(this.props.defenseActive  && this.props.includeAttribute) && (
                    <div id={"actionBar-defence"} className={"actionBar"}>
                        <h5>Defense</h5>
                        <div className={"bar"}>
                            <button
                                name="defence"
                                value="1"
                                onClick={this.handleAttributeAppraisal}
                                className={this.props.selectedButtons.includes('defence1') ? 'checked' : ''}
                            ></button>
                            <button
                                name="defence"
                                value="2"
                                onClick={this.handleAttributeAppraisal}
                                className={this.props.selectedButtons.includes('defence2') ? 'checked' : ''}
                            ></button>
                            <button
                                name="defence"
                                value="3"
                                onClick={this.handleAttributeAppraisal}
                                className={this.props.selectedButtons.includes('defence3') ? 'checked' : ''}
                            ></button>
                        </div>
                    </div>
                )}

                {(this.props.hpActive && this.props.includeAttribute) && (
                    <div id={"actionBar-hp"} className={"actionBar"}>
                        <h5>HP</h5>
                        <div className={"bar"}>
                            <button
                                name="hp"
                                value="1"
                                onClick={this.handleAttributeAppraisal}
                                className={this.props.selectedButtons.includes('hp1') ? 'checked' : ''}
                            ></button>
                            <button
                                name="hp"
                                value="2"
                                onClick={this.handleAttributeAppraisal}
                                className={this.props.selectedButtons.includes('hp2') ? 'checked' : ''}
                            ></button>
                            <button
                                name="hp"
                                value="3"
                                onClick={this.handleAttributeAppraisal}
                                className={this.props.selectedButtons.includes('hp3') ? 'checked' : ''}
                            ></button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    attackActive: state.attributeAppraisal.attackActive,
    defenseActive: state.attributeAppraisal.defenseActive,
    hpActive: state.attributeAppraisal.hpActive,

    includeAttribute: state.attributeAppraisal.includeAttribute,

    attackAttribute: state.attributeAppraisal.attackAttribute,
    defenceAttribute: state.attributeAppraisal.defenceAttribute,
    hpAttribute: state.attributeAppraisal.hpAttribute,

    finalAttribute: state.attributeAppraisal.finalAttribute,

    selectedButtons: state.attributeAppraisal.selectedButtons
});

const mapDispatchToProps = {
    toggleAttribute,
    setIncludeAttribute,
    setAttributeAppraisal,
    setFinalAttributeAppraisal
};

export default connect(mapStateToProps, mapDispatchToProps)(AttributeAppraisal);
