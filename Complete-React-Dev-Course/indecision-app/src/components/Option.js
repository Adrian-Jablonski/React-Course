import React from 'react';

const Option = ({ option, handleDeleteOption }) => {
    return (
        <div>
            {option}
            <button onClick={(e) => handleDeleteOption(option)}>Remove</button>
        </div>

    )

}

export default Option;