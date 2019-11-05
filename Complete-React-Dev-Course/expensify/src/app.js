import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Dashboard component
    </div>
)

const AddExpensePage = () => (
    <div>
        Add Expense component
    </div>
)

const EditExpensePage = () => (
    <div>
        Edit Expense component
    </div>
)

const HelpPage = () => (
    <div>
        Help component
    </div>
)

// Link tag redirects without page refresh
const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go Home</Link>
    </div>
)

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


const routes = (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} exact={true} />
                <Route path="/edit" component={EditExpensePage} exact={true} />
                <Route path="/help" component={HelpPage} exact={true} />
                {/* 404 page */}
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));