import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

const NotFoundPage = () => (
    <div>
        404!
    </div>
)


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} exact={true} />
            <Route path="/edit" component={EditExpensePage} exact={true} />
            <Route path="/help" component={HelpPage} exact={true} />
            {/* 404 page */}
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));