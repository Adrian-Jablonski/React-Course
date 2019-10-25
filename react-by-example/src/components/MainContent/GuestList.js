import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props => {
    return (
        <ul>
            <PendingGuest
                name={props.pendingGuest}
            ></PendingGuest>
            {props.guests
                .filter((guest) => !props.isFiltered || guest.isConfirmed)
                .map((guest, index) => {
                    return (
                        <Guest
                            key={index}
                            name={guest.name}
                            isConfirmed={guest.isConfirmed}
                            isEditing={guest.isEditing}
                            handleConfirmation={() => props.toggleConfirmationAt(guest.id)}    // closure function
                            handleEditing={() => props.toggleEditingAt(guest.id)}
                            setName={(text) => props.setNameAt(text, guest.id)}
                            handleRemoveGuest={() => props.removeGuestAt(guest.id)}
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
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default GuestList;
