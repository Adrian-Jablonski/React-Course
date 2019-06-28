import React from 'react';
import NewLine from './NewLine'

const CalcButtons = (props) => {
    const {buttonText, newRow, className, onButtonClick} = props
    let lineBreak = newRow ? <NewLine></NewLine>  : '';
    
    return (
        <span>
            {lineBreak}
            <button className={className} onClick={() => onButtonClick(props)}>{buttonText}</button>
        </span>
    );
}

export default CalcButtons;