import React from 'react';
import Day from './Day';

const Week = ({weekNumb}) => {

    let dayArr = [];
    for (var i = 0; i < 7; i++) {
        let dayNumber = (i+1) + (weekNumb * 7)
        dayArr.push(
        <Day
            dayNumb={dayNumber}
            key={dayNumber + "-" + weekNumb}
        ></Day>)
    }

    return (
        <tr>
            {dayArr}
        </tr>
        
    )
}

export default Week;