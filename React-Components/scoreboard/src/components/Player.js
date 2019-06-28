import React, { PureComponent } from 'react';
// import PropTypes from 'prop-type';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent {    // PureComponent will only rerender the player whose score is changed. Otherwise, all players would be rerendered when one players score is changed

    // static propTypes = {
    //     changeScore: PropTypes.func,
    //     removePlayer: PropTypes.func,
    //     name: PropTypes.string,
    //     id: PropTypes.number,
    //     index: PropTypes.number
    // };

    render() {
        const { name, id, score, index, removePlayer, changeScore, maxScore } = this.props;   // Desctructering props
        const highScore = (maxScore === score && score > 0) ? 'is-high-score' : null;

        console.log(this.props.name + ' rendered');
        return (
            <div className="player">
                <span className="player-name">
                    <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                    <Icon highScore={highScore}></Icon>
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