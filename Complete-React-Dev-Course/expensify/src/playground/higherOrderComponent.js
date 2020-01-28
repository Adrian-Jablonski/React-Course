// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({ info }) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is : {info}</p>
        </div>
    )
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {props.isAdmin && <p>This is private info. Please don't share!</p>}
                
                <WrappedComponent {...props}></WrappedComponent>
            </div>
        )
    }
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                {(props.isAuthenticated) 
                ? 
                    (<WrappedComponent {...props}></WrappedComponent>)
                : 
                    (<p>Please Login</p>)}
            </div>
        )
    }
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="Details"></AdminInfo>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Details"></AuthInfo>, document.getElementById('app'));