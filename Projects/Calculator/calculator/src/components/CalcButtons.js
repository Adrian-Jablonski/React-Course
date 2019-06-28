import React from 'react';
import NewLine from './NewLine'

const CalcButtons = ({buttonText, newRow, className}) => {
    let lineBreak = newRow ? <NewLine></NewLine>  : '';
    
    return (
        <span>
            {lineBreak}
            <button className={className}>{buttonText}</button>
        </span>
    );
}

export default CalcButtons;