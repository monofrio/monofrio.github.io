import React from 'react';
import { connect } from 'react-redux';
import { updateFindTags } from '../../actions';

class FindTags extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newCustomTag: '' // State to store the new custom tag
        };
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
        const finalString = Object.entries(groupedTags)
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

    handleAddCustomTagClick = () => {
        const { newCustomTag } = this.state;
        if (newCustomTag.trim() !== '') {
            const updatedTags = {
                ...this.props.findTags,
                [newCustomTag]: {
                    checked: false,
                    name: newCustomTag,
                    display_name: newCustomTag,
                    category: 'Custom' // Assign category as 'Custom' for custom tags
                }
            };
            this.props.updateFindTags(updatedTags); // Dispatch action to update game tags
            this.setState({ newCustomTag: '' }); // Clear the input field after adding the custom tag
        }
    };


    render() {
        // Group types by category
        const categories = Object.entries(this.props.findTags).reduce((acc, [tag, { checked, display_name, category }]) => {
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push({ tag, checked, display_name });
            return acc;
        }, {});

        return (
            <div className="container">
                <div id={"mainAlert"} className="alert alert-warning p-0 mt-0" role="alert">Under Testing</div>
                <div className={"mb-3"}>
                    <button className={'btn btn-outline-light'} onClick={this.handleCopyButtonClick}>Copy Selected
                        Tags
                    </button>
                </div>
                <div className="accordion" id="accordion-find-tags">
                    {/* Render each category separately */}
                    {Object.entries(categories).map(([category, tags]) => (
                        <div className="accordion-item" key={category}>
                            <h2 className="accordion-header ">
                                <button className="accordion-button collapsed alert alert-secondary" type="button"
                                        data-bs-toggle="collapse" data-bs-target={"#collapse-" + category}
                                        aria-expanded="false" aria-controls={"#collapse-" + category}>
                                    {category}
                                </button>
                            </h2>
                            <div id={"collapse-" + category} className="accordion-collapse collapse"
                                 data-bs-parent="#accordion-find-tags">
                                <div className="accordion-body">
                                    <aside className="row align-items-start">
                                        {tags.map(({tag, checked, display_name}) => (
                                            <div className="col-4 p-1" key={tag + "-findTags"}>
                                                <input
                                                    type="checkbox"
                                                    className="btn-check"
                                                    id={"findTags-btn-check-" + tag}
                                                    autoComplete="off"
                                                    checked={checked}
                                                    onChange={this.handleCheckboxChange}
                                                />
                                                <label className="btn btn-outline-primary"
                                                       htmlFor={"findTags-btn-check-" + tag}>  {display_name} </label>
                                            </div>
                                        ))}
                                    </aside>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-3">
                    <div className="col-8">
                        <input
                            type="text"
                            placeholder="Enter new custom tag"
                            value={this.state.newCustomTag}
                            onChange={this.handleNewCustomTagChange} // Handle input change
                        />
                    </div>
                    <div className="col-4">
                        <button className="btn btn-primary" onClick={this.handleAddCustomTagClick}>Add Custom Tag
                        </button>
                    </div>
                </div>
                <div className="alert alert-info mt-5 p-0">
                    <small><strong>Coming Soon</strong>: Combat Power, IV's for attack, defence and health</small>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    findTags: state.findTags
});

const mapDispatchToProps = {
    updateFindTags // Map dispatch function to props
};

export default connect(mapStateToProps, mapDispatchToProps)(FindTags);
