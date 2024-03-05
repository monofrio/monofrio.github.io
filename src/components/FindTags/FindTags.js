import React from 'react';
import { connect } from 'react-redux';
import { updateFindTags } from '../../actions';

class FindTags extends React.Component {
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



    render() {
        return (
            <div className="container">
                <div id={"mainAlert"} className="alert alert-warning p-0 mt-0" role="alert">Under Testing</div>
                <div className={"mb-3"}>
                    <button className={'btn btn-light'} onClick={this.handleCopyButtonClick}>Copy Selected Tags</button>
                </div>
                <aside className="row align-items-start">
                    {Object.entries(this.props.findTags).map(([tag, { checked,display_name }]) => (
                        <div className="col-4 p-1" key={tag + "-findTags"} >
                            <input
                                type="checkbox"
                                className="btn-check"
                                id={"findTags-btn-check-" + tag}
                                autoComplete="off"
                                checked={checked}
                                onChange={this.handleCheckboxChange}
                            />
                            <label className="btn btn-outline-primary" htmlFor={ "findTags-btn-check-" + tag } >  { display_name } </label>
                        </div>
                    ))}
                </aside>
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
