import React, {PureComponent } from 'react';
import Counter from './Counter';

class Player extends PureComponent {    // PureComponent will only rerender the player whose score is changed. Otherwise, all players would be rerendered when one players score is changed
    render() {
        console.log(this.props.name + ' rendered');
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
                    {this.props.name}
                </span>
    
                <Counter score={this.props.score}
                    changeScore={this.props.changeScore} // Passing handleScoreChage method to Counter component
                    index={this.props.index}
                />
            </div>
        );
    }
}

export default Player;