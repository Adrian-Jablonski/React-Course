import React, {PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {    // PureComponent will only rerender the player whose score is changed. Otherwise, all players would be rerendered when one players score is changed
    render() {
        const { name, id, score, index, removePlayer, changeScore } = this.props;   // Desctructering props
        console.log(this.props.name + ' rendered');
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    {name}
                </span>
    
                <Counter score={score}
                    changeScore={changeScore} // Passing handleScoreChage method to Counter component
                    index={index}
                />
            </div>
        );
    }
}

export default Player;