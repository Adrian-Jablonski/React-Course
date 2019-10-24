import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';

const GuestList = props => {
    return (
        <ul>
            {props.guests
                .filter((guest) => !props.isFiltered || guest.isConfirmed)
                .map((guest, index) => {
                    return (
                        <Guest
                            key={index}
                            name={guest.name}
                            isConfirmed={guest.isConfirmed}
                            isEditing={guest.isEditing}
                            handleConfirmation={() => props.toggleConfirmationAt(index)}    // closure function
                            handleEditing={() => props.toggleEditingAt(index)}
                            setName={(text) => props.setNameAt(text, index)}
                            handleRemoveGuest={() => props.removeGuestAt(index)}
                        ></Guest>
                    )

                })}
        </ul>
    )
}

GuestList.propTypes = {
    guests: PropTypes.array.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired
}

export default GuestList;
