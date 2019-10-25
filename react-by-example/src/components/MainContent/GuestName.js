import React from 'react';
import PropTypes from 'prop-types';

const GuestName = props => {
    if (props.isEditing) {
        return (
            <input 
                type="text" 
                value={props.children} // props.children passes the value saved between the component opening and closing tags
                onChange={props.handleNameEdits}
                /> 
        )
    }

    return (
        <span>{props.children}</span>
    )

}

GuestName.propTypes = {
    isEditing: PropTypes.bool.isRequired,
    handleNameEdits: PropTypes.func.isRequired
}

export default GuestName;
