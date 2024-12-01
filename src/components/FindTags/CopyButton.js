import React from 'react';
import { connect } from 'react-redux';

class CopyButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            finalString: '', // Stores the generated output string
        };
    }

    componentDidMount() {
        this.updateFinalString(); // Generate the output string on mount
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.findTags !== this.props.findTags ||
            prevProps.finalCPString !== this.props.finalCPString ||
            prevProps.includeCombatPower !== this.props.includeCombatPower ||
            prevProps.hide !== this.props.hide ||
            prevProps.finalAttribute !== this.props.finalAttribute ||
            prevProps.includeAttribute !== this.props.includeAttribute
        ) {
            this.updateFinalString();
        }
    }

    updateFinalString = () => {
        const { findTags, includeCombatPower, finalCPString, hide, finalAttribute, includeAttribute } = this.props;

        // Group tags by category
        const groupedTags = Object.entries(findTags).reduce((acc, [tag, { checked, category }]) => {
            if (checked !== 'inactive') {
                if (!acc[category]) acc[category] = [];
                acc[category].push({ tag, checked });
            }
            return acc;
        }, {});

        // Construct the output string
        const categoryStrings = Object.entries(groupedTags).map(([category, tags]) => {
            const activeTags = tags.filter(({ checked }) => checked === 'active').map(({ tag }) => tag);
            const hiddenTags = tags.filter(({ checked }) => checked === 'hide').map(({ tag }) => `!${tag}`);

            let categoryOutput = '';
            if (activeTags.length > 0) {
                categoryOutput += activeTags.join(', ');
            }
            if (hiddenTags.length > 0) {
                categoryOutput += categoryOutput ? ` & ${hiddenTags.join(' & ')}` : hiddenTags.join(' & ');
            }
            return categoryOutput;
        });


        // Add combat power to the output
        if (includeCombatPower) {
            const combatPowerString = hide ? `!${finalCPString}` : finalCPString;
            categoryStrings.push(combatPowerString);
        }
        if( includeAttribute ){
            categoryStrings.push(finalAttribute)
        }

        // Combine all categories into a single string
        const finalString = categoryStrings.join(' & ');

        this.setState({ finalString });
    };

    handleCopyButtonClick = () => {
        const { finalString } = this.state;

        navigator.clipboard.writeText(finalString)
            .then(() => {
                console.log('Final string copied to clipboard:', finalString);
            })
            .catch((error) => {
                console.error('Error copying to clipboard:', error);
            });
    };

    render() {
        const { finalString } = this.state;

        return (
            <div>
                <p>{finalString}</p>
                <button className="btn btn-outline-light" onClick={this.handleCopyButtonClick}>
                    Copy Selected Tags
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    findTags: state.findTags,
    includeCombatPower: state.combatPower.includeCombatPower,
    finalCPString: state.combatPower.finalCPString,
    hide: state.combatPower.hide, // Retrieve the hide state
    finalAttribute: state.attributeAppraisal.finalAttribute,
    includeAttribute: state.attributeAppraisal.includeAttribute, // Ensure includeAttribute is mapped

});

export default connect(mapStateToProps)(CopyButton);