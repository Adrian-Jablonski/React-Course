import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';

const GuestList = props => {
    return (
        <ul>
            {props.guests.map((guest, index) => {
                return (
                    <Guest 
                        key={index}
                        name={guest.name}
                        isConfirmed={guest.isConfirmed}
                        handleConfirmation={() => props.toggleConfirmationAt(index)}    // closure function
                    ></Guest>
                )
            })}
        </ul>
    )
}

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired
}

export default GuestList;
