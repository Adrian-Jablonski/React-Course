import React, {Component} from 'react';

class AddPlayerForm extends Component {

    state = {
        value: ''
    };

    handleValueChange = (e) => {
        this.setState({value: e.target.value})  // Reads value in input field
    }

    render() {
        console.log(this.state.value)
        return (
            <form>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter a player's name">
                </input>
                <input 
                    type="submit"
                    value="Add Player">
                </input>
            </form>
        )
    }
}

export default AddPlayerForm


// Creating a Controlled Component
// - Initialize state for the value of the input
// - Listen for changes on the input to detect when value is updated
// - Create an event handler that updates the value state