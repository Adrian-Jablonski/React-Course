import React, {Component} from 'react';

class ExpenseForm extends Component {
    state = {
        description: '',
        amount: 0,
        note: ''
    }

    onFieldChange = (e, field) => {
        const {value} = e.target
        this.setState({
            [field]: value
        })
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState({
                amount
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={(e) => this.onFieldChange(e, 'description')}
                    ></input>
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    ></input>
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={(e) => this.onFieldChange(e, 'note')}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;