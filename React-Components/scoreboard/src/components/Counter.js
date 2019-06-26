import React from 'react'; 

const Counter = (props) => {
    let index = props.index;

    return (
        <div className="counter">
            {/* Uses changeScore method that was passed down from app.js through props */}
            <button className="counter-action decrement" onClick={() => props.changeScore(index, -1)}> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment" onClick={() => props.changeScore(index, 1)}> + </button>
        </div>
    );

}

export default Counter;