import React from 'react';
import PropTypes from 'prop-types';

import GuestInputForm from './GuestInputForm';

const Header = (props) => {
    return (
        <header>
            <h1>RSVP</h1>
            <p>A Treehouse App</p>
            <GuestInputForm
                newGuestSubmitHandler={props.newGuestSubmitHandler}
                handleNameInput={props.handleNameInput}
                pendingGuest={props.pendingGuest}
            ></GuestInputForm>
        </header>
    )
}

Header.propTypes = {
    newGuestSubmitHandler: PropTypes.func.isRequired,
    handleNameInput: PropTypes.func.isRequired,
    pendingGuest: PropTypes.func.isRequired
}

export default Header;