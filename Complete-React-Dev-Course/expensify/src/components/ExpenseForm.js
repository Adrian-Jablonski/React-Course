import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

class ExpenseForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: null
        }
    }

    onFieldChange = (e, field) => {
        const { value } = e.target
        this.setState({
            [field]: value
        })
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({
                amount
            })
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState({
                createdAt
            })
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState({
            calendarFocused: focused
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => {
                return {
                    error: 'Please provide description and amount'
                }
            })
        } else {
            this.setState(() => {
                return {
                    error: null
                }
            })
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
            console.log('submitted');
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error &&
                        <p>{this.state.error}</p>
                    }
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
                        onChange={(e) => this.onAmountChange(e)}
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