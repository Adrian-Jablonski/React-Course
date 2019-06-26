import React, { Component } from 'react'; // Adding {Component} allows class to extend Component instead of React.Component
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  //player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState({
      players: [
        ...this.state.players, // Brings in all existing players from players array and merges to new array
        {
          name: name,
          score: 0,
          id: this.prevPlayerId += 1
        }
      ]
    })
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index = {index}
            changeScore= {this.handleScoreChange}   // Passing handleScoreChage method to Player component
            removePlayer={this.handleRemovePlayer}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}></AddPlayerForm>
      </div>
    );
  }
}

export default App;
