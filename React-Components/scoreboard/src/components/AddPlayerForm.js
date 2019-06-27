import React, {Component} from 'react';

class AddPlayerForm extends Component {

    // // Replaced state with playerInput react ref
    // state = {
    //     value: ''
    // };

    // Linked to input field
    playerInput = React.createRef();

    // handleValueChange = (e) => {
    //     this.setState({value: e.target.value})  // Reads value in input field
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        //this.props.addPlayer(this.state.value);
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
        // this.setState({value: ''})
    }

    render() {
        // console.log(this.state.value)
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    ref = {this.playerInput}
                    // value={this.state.value}
                    // onChange={this.handleValueChange}
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