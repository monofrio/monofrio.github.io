import React from 'react';
import { connect } from 'react-redux';
import { updateGameTags } from '../actions'; // Import the action creator for updating game tags

class GameTagsList extends React.Component {
    handleCheckboxChange = (event) => {
        const { id, checked } = event.target;
        const tag = id.replace('btn-check-', ''); // Extract tag name from checkbox id
        const updatedTags = {
            ...this.props.gameTags,
            [tag]: checked
        };
        this.props.updateGameTags(updatedTags); // Dispatch action to update game tags
    };

    render() {
        return (
            <div className="container">
                <aside className="row align-items-start">
                    {Object.entries(this.props.gameTags).map(([tag, value]) => (
                        <div className="col-4 p-1" key={tag} >
                            <input
                                type="checkbox"
                                className="btn-check"
                                id={"btn-check-"+tag}
                                autoComplete="off"
                                checked={value}
                                onChange={this.handleCheckboxChange} // Handle checkbox change
                            />
                            <label className="btn btn-outline-primary" htmlFor={"btn-check-"+tag} >  { (tag === 'adventureeffect') ? "adventure effect" : ( tag === "tradeevolve") ? "trade evolve" : tag } </label>
                        </div>
                    ))}
                </aside>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    gameTags: state.gameTags
});

const mapDispatchToProps = {
    updateGameTags // Map dispatch function to props
};

export default connect(mapStateToProps, mapDispatchToProps)(GameTagsList);
