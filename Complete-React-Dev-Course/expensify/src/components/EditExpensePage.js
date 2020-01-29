import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../redux/actions/expenses';

const EditExpensePage = ({ dispatch, history, match, expense }) => {
    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={(expense) => {
                    dispatch(editExpense(match.params.id, expense))
                    history.push('/');
                }}
            />
            <button
                onClick={() => {
                    dispatch(removeExpense({ id: match.params.id }));
                    history.push('/');
                }}
            >Remove</button>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage);