import React, {Component} from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends Component {
    state = {
        description: '',
        amount: 0,
        note: '',
        createdAt: moment(),
        calendarFocused: false
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

    onDateChange = (createdAt) => {
        this.setState({
            createdAt
        })
    }

    onFocusChange = ({focused}) => {
        this.setState({
            calendarFocused: focused
        })
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
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        id="calendar"
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    ></SingleDatePicker>
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