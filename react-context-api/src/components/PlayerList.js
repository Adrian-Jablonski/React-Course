import React from 'react';
import Player from './Player';
import { Consumer } from './Context/index';

const PlayerList = () => {
  return (
    <Consumer>
      {({players}) => {
        return (
          <React.Fragment>
            {players.map((player, index) =>
              <Player
                {...player}
                key={player.id.toString()}
                index={index}
              />
            )}
          </React.Fragment>
        )
      }}
    </Consumer>
  );
}

export default PlayerList;