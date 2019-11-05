import React from 'react';
import { NavLink } from 'react-router-dom';

//NavLink can create a class for the active link with the activeClassName property
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active" exact={true}>Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>
    </header>
)

export default Header;