import React from 'react';

const Option = ({ option, handleDeleteOption }) => {
    return (
        <div>
            {option}
            <button 
                className="button button--link"
                onClick={(e) => handleDeleteOption(option)}>Remove</button>
        </div>

    )

}

export default Option;