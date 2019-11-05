import React, {Component} from 'react';

export default class AddOption extends Component {

    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value;  
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return {
        //         error
        //     }
        // })

        this.setState(() => ({ error }))

        
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>This option already exists</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" required></input>
                    <button className="button">Add Option</button>
                </form>
            </div>

        )
    }
}