import React from 'react';
import { connect } from 'react-redux';
import { updateCustomGameTag } from '../../actions'; // Import the action creator for updating game tags

class CustomGameTagsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTag: '' // State to store the new custom tag
        };
    }

    handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        const tag = id.replace('btn-check-', ''); // Extract tag name from checkbox id
        const updatedTags = {
            ...this.props.customGameTags,
            [tag]: checked
        };
        this.props.updateCustomGameTag(updatedTags); // Dispatch action to update game tags
    };

    handleInputChange = (event) => {
        this.setState({ newTag: event.target.value }); // Update newTag state with input value
    };

    handleAddTagClick = () => {
        const { newTag } = this.state;
        if (newTag.trim() !== '') {
            const updatedTags = {
                ...this.props.customGameTags,
                [newTag]: true // Add new tag to the list with checked state true
            };
            this.props.updateCustomGameTag(updatedTags); // Dispatch action to update game tags
            this.setState({ newTag: '' }); // Clear the input field after adding the tag
        }
    };

    render() {
        return (
            <div className="container">
                <aside className="row align-items-start">
                    {Object.entries(this.props.customGameTags).map(([tag, value]) => (
                        <div className="col-4 p-1" key={tag} >
                            <input
                                type="checkbox"
                                className="btn-check"
                                id={"btn-check-"+tag}
                                autoComplete="off"
                                checked={value}
                                onChange={this.handleCheckboxChange} // Handle checkbox change
                            />
                            <label className="btn btn-outline-primary" htmlFor={"btn-check-"+tag}>{tag}</label>
                        </div>
                    ))}
                </aside>
                {/* Input field for adding new custom tag */}
                <div>
                    <input
                        type="text"
                        placeholder="Enter new tag"
                        value={this.state.newTag}
                        onChange={this.handleInputChange} // Handle input change
                    />
                    <button onClick={this.handleAddTagClick}>Add Tag</button> {/* Button to add new tag */}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    customGameTags: state.customGameTags
});

const mapDispatchToProps = {
    updateCustomGameTag
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomGameTagsList);
