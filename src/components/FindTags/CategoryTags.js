import React from 'react';
import { connect } from 'react-redux';
import { updateFindTags } from '../../actions';

class CategoryTags extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newCustomTag: '', // State to store the new custom tag
        };
    }

    handleTagStateChange = (tag) => {
        // Get the current state of the tag
        const currentState = this.props.findTags[tag].checked;

        // Cycle through states: inactive -> active -> hide
        const nextState =
            currentState === 'inactive'
                ? 'active'
                : currentState === 'active'
                    ? 'hide'
                    : 'inactive';

        // Update the tag's state in the Redux store
        const updatedTags = {
            ...this.props.findTags,
            [tag]: {
                ...this.props.findTags[tag],
                checked: nextState, // Update the `checked` property with the new state
            },
        };

        this.props.updateFindTags(updatedTags); // Dispatch action to update tags
    };

    handleNewCustomTagChange = (event) => {
        this.setState({ newCustomTag: event.target.value }); // Update newCustomTag state with input value
    };

    handleAddCustomTagClick = () => {
        const { newCustomTag } = this.state;

        if (!newCustomTag.trim()) {
            alert('Tag name cannot be empty.');
            return;
        }

        // Check for duplicate tag
        if (this.props.findTags[newCustomTag]) {
            alert('Tag already exists.');
            return;
        }

        // Create the new custom tag
        const newTag = {
            checked: 'inactive', // Default state is inactive
            name: newCustomTag,
            display_name: newCustomTag,
            category: 'Custom', // Default category for custom tags
        };

        // Update the findTags state
        const updatedTags = {
            ...this.props.findTags,
            [newCustomTag]: newTag,
        };

        this.props.updateFindTags(updatedTags); // Dispatch action to update tags
        this.setState({ newCustomTag: '' }); // Clear the input field
    };

    render() {
        const categories = Object.entries(this.props.findTags).reduce(
            (acc, [tag, { checked, display_name, category }]) => {
                if (!acc[category]) {
                    acc[category] = [];
                }
                acc[category].push({ tag, checked, display_name });
                return acc;
            },
            {}
        );

        return (
            <>
                {Object.entries(categories).map(([category, tags]) => (
                    <div className="accordion-item" key={category}>
                        <h2 className="accordion-header ">
                            <button
                                className="accordion-button collapsed alert alert-secondary"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse-${category}`}
                                aria-expanded="false"
                                aria-controls={`#collapse-${category}`}
                            >
                                {category}
                            </button>
                        </h2>
                        <div
                            id={`collapse-${category}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordion-find-tags"
                        >
                            <div className="accordion-body">
                                <aside className="row align-items-start">
                                    {tags.map(({ tag, checked, display_name }) => (
                                        <div className="col-4 p-1" key={`${tag}-findTags`}>
                                            <button
                                                className={`btn ${
                                                    checked === 'inactive'
                                                        ? 'btn-outline-primary'
                                                        : checked === 'active'
                                                            ? 'btn-primary'
                                                            : 'btn-danger'
                                                }`}
                                                onClick={() => this.handleTagStateChange(tag)}
                                            >
                                                {display_name}
                                            </button>
                                        </div>
                                    ))}
                                </aside>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Custom Tags */}
                <div className="accordion-item" key="customTags">
                    <h2 className="accordion-header ">
                        <button
                            className="accordion-button collapsed alert alert-secondary"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse-customTags"
                            aria-expanded="false"
                            aria-controls="#collapse-customTags"
                        >
                            Add Custom Tags
                        </button>
                    </h2>
                    <div
                        id="collapse-customTags"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordion-find-tags"
                    >
                        <div className="accordion-body">
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
                                    <button
                                        className="btn btn-primary"
                                        onClick={this.handleAddCustomTagClick}
                                    >
                                        Add Custom Tag
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    findTags: state.findTags,
});

const mapDispatchToProps = {
    updateFindTags,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryTags);
