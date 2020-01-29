import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

const Counter = ({ index, score }) => {
  return (
    <Consumer>
      {({actions}) => {
        return (
          <div className="counter">
            <button className="counter-action decrement" onClick={() => actions.changeScore(index, -1)}> - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => actions.changeScore(index, 1)}> + </button>
          </div>
        )
      }}
    </Consumer>
  );
}

Counter.propTypes = {
  index: PropTypes.number,
  score: PropTypes.number
};

export default Counter;