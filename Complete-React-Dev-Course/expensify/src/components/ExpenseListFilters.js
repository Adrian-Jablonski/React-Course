import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../redux/actions/filters';


class ExpenseListFilters extends Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => {
            return {
                calendarFocused
            }
        })
    }

    render() {
        const {props} = this;
        return (
            <div>
                <input type="text"
                    value={props.filters.text}
                    onChange={(e) => {
                        props.dispatch(setTextFilter(e.target.value))
                    }}
                />
                <select
                    value={props.filters.sortBy}
                    onChange={(e) => {
                        const {value} = e.target;
                        if (value === 'date') {
                            props.dispatch(sortByDate());
                        }
                        else if (value === 'amount') {
                            props.dispatch(sortByAmount());
                        }
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={props.filters.startDate}
                    startDateId="startDate"
                    endDate={props.filters.endDate}
                    endDateId={"endDate"}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);