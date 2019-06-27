import React from 'react'; 
import PropTypes from 'prop-types';

const Counter = ({index, score, changeScore}) => {  // Extracting values from props object

    return (
        <div className="counter">
            {/* Uses changeScore method that was passed down from app.js through props */}
            <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
        </div>
    );

}

// Used to check proptypes and give better warnings in the console if something is wrong
Counter.protoTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
}

export default Counter;