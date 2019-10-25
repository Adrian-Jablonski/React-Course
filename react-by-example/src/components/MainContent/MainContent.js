import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import GuestList from './GuestList';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = (props) => {
    return (
        <div className="main">
            <ConfirmedFilter
                toggleFilteredGuests={props.toggleFilteredGuests}
                isFiltered={props.isFiltered}
            ></ConfirmedFilter>
            
            <Counter
                totalInvited={props.totalInvited}
                numberAttending={props.numberAttending}
                numberUnconfirmed={props.numberUnconfirmed}
            ></Counter>

            <GuestList
                guests={props.guests}
                isFiltered={props.isFiltered}
                toggleConfirmationAt={props.toggleConfirmationAt}
                toggleEditingAt={props.toggleEditingAt}
                setNameAt={props.setNameAt}
                removeGuestAt={props.removeGuestAt}
                pendingGuest={props.pendingGuest}
            ></GuestList>
        </div>
    )
}

MainContent.propTypes = {
    totalInvited: PropTypes.number.isRequired,
    numberAttending: PropTypes.number.isRequired,
    numberUnconfirmed: PropTypes.number.isRequired,
    toggleFilteredGuests: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired,
}

export default MainContent;