import React from 'react';
import Player from './Player';
import { Consumer } from './Context/index';

const PlayerList = () => {
  return (
    <Consumer>
      {context => {
        return (
          <React.Fragment>
            {context.players.map((player, index) =>
              <Player
                {...player}
                key={player.id.toString()}
                index={index}
                changeScore={context.actions.changeScore}
              />
            )}
          </React.Fragment>
        )
      }}
    </Consumer>
  );
}

export default PlayerList;