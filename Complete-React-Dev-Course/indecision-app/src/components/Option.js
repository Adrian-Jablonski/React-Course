import React from 'react';

const Option = ({ option, handleDeleteOption, count }) => {
    return (
        <div className="option">
            <p className="option__text">{count}. {option}</p>
            <button 
                className="button button--link"
                onClick={(e) => handleDeleteOption(option)}>Remove</button>
        </div>

    )

}

export default Option;