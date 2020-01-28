import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../redux/actions/expenses';

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
    return (
        <div>
            <h3>{description}</h3>
            <p>${amount/100} - {createdAt}</p>
            <button
                onClick={() => {
                    dispatch(removeExpense({id}));
                }}
            >Remove</button>
        </div>
    )
}

export default connect()(ExpenseListItem);