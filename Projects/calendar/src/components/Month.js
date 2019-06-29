import React from 'react';
import Week from './Week';
import TableHeader from './TableHeader';

const Month = () => {

    let weeksArr = [];
    for (var i = 0; i < 5; i++) {
        weeksArr.push(
        <Week
            weekNumb={i}
            key={i}
        ></Week>)
    }

    return (
        <div id="calendar">
            <h2 id="month-name">January 2019</h2>
            <table className="month">
                <thead>
                    <TableHeader></TableHeader>
                </thead>
                <tbody>
                    {weeksArr}
                </tbody>
                
            </table>
        </div>

    )
}


export default Month;