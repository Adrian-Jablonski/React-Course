import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../redux/selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            {props.expenses.map((expense, index) => {
                return (
                    <ExpenseListItem
                        key={index}
                        {...expense}    // Spreads out all properties on expense and passes description, amount, and createdAt
                    ></ExpenseListItem>
                )
            })}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        // expenses: state.expenses,
        // filters: state.filters
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);

// Alternative way of writing HOC

// export default connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);
