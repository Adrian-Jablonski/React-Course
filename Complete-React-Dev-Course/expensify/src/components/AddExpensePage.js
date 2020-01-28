import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../redux/actions/expenses';

const AddExpensePage = ({dispatch, history}) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                dispatch(addExpense(expense));
                history.push('/'); // Switches over to the Home page without a full page refresh
            }}
        />
    </div>
)

export default connect()(AddExpensePage);