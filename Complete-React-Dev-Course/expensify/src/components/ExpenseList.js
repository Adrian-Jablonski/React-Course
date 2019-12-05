import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>Expense List</h1>
            {props.filters.text}
            {props.expenses.length}
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList);

// Alternative way of writing HOC

// export default connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);
