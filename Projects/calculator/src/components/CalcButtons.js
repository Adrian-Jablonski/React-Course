import React from 'react';
import NewLine from './NewLine'

const CalcButtons = ({buttonText, newRow, className, onButtonClick}) => {
    let lineBreak = newRow ? <NewLine></NewLine>  : '';
    
    return (
        <span>
            {lineBreak}
            <button className={className} onClick={() => onButtonClick(buttonText)}>{buttonText}</button>
        </span>
    );
}

export default CalcButtons;