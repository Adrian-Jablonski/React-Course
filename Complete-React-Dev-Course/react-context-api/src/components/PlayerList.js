import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import { Consumer } from './Context/index';

const PlayerList = (props) => {
  return (
    <Consumer>
      {context => {
        return (
          <React.Fragment>
            {context.map((player, index) =>
              <Player
                {...player}
                key={player.id.toString()}
                index={index}
                changeScore={props.changeScore}
                removePlayer={props.removePlayer}
              />
            )}
          </React.Fragment>
        )
      }}
    </Consumer>
  );
}

PlayerList.propTypes = {
  changeScore: PropTypes.func.isRequired,
  removePlayer: PropTypes.func.isRequired,
};

export default PlayerList;