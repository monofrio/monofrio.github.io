import React from 'react';
import { connect } from 'react-redux';
import { updateFindTags, setIncludeCombatPower, setCombatPowerRangeMin, setIncludeAttribute } from '../../actions';
import CombatPowerValue from "./CombatPowerValue";
import AttributeAppraisal from "./AttributeAppraisal";

class FindTags extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newCustomTag: '' // State to store the new custom tag
        };
    }

    componentDidMount() {
        // Fetch initial state or perform any side effects here
    }

    handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        const tag = id.replace('findTags-btn-check-', ''); // Extract tag name from checkbox id
        const updatedTags = {
            ...this.props.findTags,
            [tag]: {
                ...this.props.findTags[tag],
                checked: checked
            }
        };
        this.props.updateFindTags(updatedTags); // Dispatch action to update game tags
    };

    handleCopyButtonClick = () => {
        const selectedTags = Object.entries(this.props.findTags)
            .filter(([tag, { checked }]) => checked)
            .map(([tag, { name, category }]) => ({ name, category }));

        // Group selected tags by category
        const groupedTags = selectedTags.reduce((acc, tag) => {
            if (!acc[tag.category]) {
                acc[tag.category] = [];
            }
            acc[tag.category].push(tag.name);
            return acc;
        }, {});

        // Create the final string by combining categories with commas and then joining with '&'
        let finalString = Object.entries(groupedTags)
            .map(([category, tags]) => tags.join(', '))
            .join(' & ');

        // Copy the final string to the clipboard
        navigator.clipboard.writeText(finalString)
            .then(() => {
                console.log('Final string copied to clipboard:', finalString);
            })
            .catch((error) => {
                console.error('Error copying to clipboard:', error);
            });
    };

    handleNewCustomTagChange = (event) => {
        this.setState({ newCustomTag: event.target.value }); // Update newCustomTag state with input value
    };

    render() {
        const { includeCombatPower, combatPowerMin, includeAttribute  } = this.props;
        // Group types by category
        const categories = Object.entries(this.props.findTags).reduce((acc, [tag, { checked, display_name, category }]) => {
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push({ tag, checked, display_name });
            return acc;
        }, {});

        return (
            <div className="container-TEST">
                <div id={"mainAlert"} className="alert alert-warning p-0 mt-0" role="alert">Under Testing</div>
                <div className={"mb-3"}>
                    <button className={'btn btn-outline-light'} onClick={ this.handleCopyButtonClick }>Copy Selected
                        Tags
                    </button>
                </div>
                <div className="accordion" id="accordion-find-tags">

                    {/** Render each category separately */}
                    {/*{Object.entries(categories).map(([category, tags]) => (*/}
                    {/*    <div className="accordion-item" key={category}>*/}
                    {/*        <h2 className="accordion-header ">*/}
                    {/*            <button className="accordion-button collapsed alert alert-secondary" type="button"*/}
                    {/*                    data-bs-toggle="collapse" data-bs-target={"#collapse-" + category}*/}
                    {/*                    aria-expanded="false" aria-controls={"#collapse-" + category}>*/}
                    {/*                {category}*/}
                    {/*            </button>*/}
                    {/*        </h2>*/}
                    {/*        <div id={"collapse-" + category} className="accordion-collapse collapse"*/}
                    {/*             data-bs-parent="#accordion-find-tags">*/}
                    {/*            <div className="accordion-body">*/}
                    {/*                <aside className="row align-items-start">*/}
                    {/*                    {tags.map(({tag, checked, display_name}) => (*/}
                    {/*                        <div className="col-4 p-1" key={tag + "-findTags"}>*/}
                    {/*                            <input*/}
                    {/*                                type="checkbox"*/}
                    {/*                                className="btn-check"*/}
                    {/*                                id={"findTags-btn-check-" + tag}*/}
                    {/*                                autoComplete="off"*/}
                    {/*                                checked={checked}*/}
                    {/*                                onChange={this.handleCheckboxChange}*/}
                    {/*                            />*/}
                    {/*                            <label className="btn btn-outline-primary"*/}
                    {/*                                   htmlFor={"findTags-btn-check-" + tag}>  {display_name} </label>*/}
                    {/*                        </div>*/}
                    {/*                    ))}*/}
                    {/*                </aside>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*))}*/}

                    { /** Custom Tags */}
                    {/*<div className="accordion-item" key={"customTags"}>*/}
                    {/*    <h2 className="accordion-header ">*/}
                    {/*        <button className="accordion-button collapsed alert alert-secondary" type="button"*/}
                    {/*                data-bs-toggle="collapse" data-bs-target={"#collapse-customTags"}*/}
                    {/*                aria-expanded="false" aria-controls={"#collapse-customTags"}>*/}
                    {/*            Add Custom Tags*/}
                    {/*        </button>*/}
                    {/*    </h2>*/}
                    {/*    <div id={"collapse-customTags"} className="accordion-collapse collapse"*/}
                    {/*         data-bs-parent="#accordion-find-tags">*/}
                    {/*        <div className="accordion-body">*/}
                    {/*            <div className="row mt-3">*/}
                    {/*                <div className="col-8">*/}
                    {/*                    <input*/}
                    {/*                        type="text"*/}
                    {/*                        placeholder="Enter new custom tag"*/}
                    {/*                        value={this.state.newCustomTag}*/}
                    {/*                        onChange={this.handleNewCustomTagChange} // Handle input change*/}
                    {/*                    />*/}
                    {/*                </div>*/}
                    {/*                <div className="col-4">*/}
                    {/*                    <button className="btn btn-primary" onClick={this.handleAddCustomTagClick}>*/}
                    {/*                        Add Custom Tag*/}
                    {/*                    </button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    { /** Combat Power */}
                    <div className="accordion-item" key={"combatPower"}>
                        <h2 className="accordion-header ">
                            <button className="accordion-button collapsed alert alert-secondary" type="button"
                                    data-bs-toggle="collapse" data-bs-target={"#collapse-combatPower"}
                                    aria-expanded="false" aria-controls={"#collapse-combatPower"}>
                                Combat Power - { includeCombatPower ? "yes" : "no" }
                            </button>
                        </h2>
                        <div id={"collapse-combatPower"} className="accordion-collapse collapse"
                             data-bs-parent="#accordion-find-tags">
                            <div className="accordion-body">
                                <CombatPowerValue />
                            </div>
                        </div>
                    </div>

                    { /** Attribute Appraisal */}
                    <div className="accordion-item" key={"attributeAppraisal"}>
                        <h2 className="accordion-header ">
                            <button
                                className="accordion-button collapsed alert alert-secondary"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={"#collapse-attributeAppraisal"}
                                aria-expanded="false"
                                aria-controls={"#collapse-attributeAppraisal"}>

                                Attribute Appraisal - { includeAttribute ? "true" : "false" }

                            </button>
                        </h2>
                        <div
                            id={"collapse-attributeAppraisal"}
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion-find-tags">
                                <div className="accordion-body">
                                    {/*<AttributeAppraisal />*/}
                                </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    findTags: state.findTags,
    setFinalString: state.setFinalString,
    includeCombatPower: state.combatPower.includeCombatPower,
    combatPowerMin: state.combatPower.combatPowerMin,
    attackActive: state.attackActive,
    includeAttribute: state.attributeAppraisal.includeAttribute

});

const mapDispatchToProps = {
    updateFindTags,
    setIncludeCombatPower,
    setCombatPowerRangeMin,
    setIncludeAttribute
};

export default connect(mapStateToProps, mapDispatchToProps)(FindTags);
