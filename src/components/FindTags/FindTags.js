import React from 'react';
import { connect } from 'react-redux';
import { updateFindTags, setIncludeCombatPower, setCombatPowerRangeMin, setIncludeAttribute } from '../../actions';
import CombatPowerValue from "./CombatPowerValue";
import AttributeAppraisal from "./AttributeAppraisal";
import CopyButton from "./CopyButton";
import CategoryTags from "./CategoryTags";
import ResetButton from "./ResetButton";

class FindTags extends React.Component {

    constructor(props) {
        super(props);

        this.state = { };
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

    render() {
        const { includeCombatPower, combatPowerMin, includeAttribute  } = this.props;

        return (
            <div>

                <div className={"mb-3 row"}>
                        <div className={"col"}><CopyButton/> </div>
                          <div className={"col"}><ResetButton/></div>
                </div>
                <div className="accordion" id="accordion-find-tags">
                    <CategoryTags />

                    { /** Combat Power */}
                    <div className="accordion-item" key={"combatPower"}>
                        <h2 className="accordion-header ">
                            <button className="accordion-button collapsed alert alert-secondary" type="button"
                                    data-bs-toggle="collapse" data-bs-target={"#collapse-combatPower"}
                                    aria-expanded="false" aria-controls={"#collapse-combatPower"}>
                                Combat Power
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

                                Attribute Appraisal

                            </button>
                        </h2>
                        <div
                            id={"collapse-attributeAppraisal"}
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion-find-tags">
                                <div className="accordion-body">
                                    <AttributeAppraisal />
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
