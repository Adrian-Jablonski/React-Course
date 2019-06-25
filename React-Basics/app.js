// function Header() { // React components are required to begin with a capital letter
//     return (
//         <header>
//             <h1>Scoreboard</h1>
//             <span className="stats">Players: 1</span>
//         </header>
//     );
// }

// Arrow function Component version using implicit return without curly braces and return
const Header = (props) => {
    console.log(props);
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    )
}

const Player = (props) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={ () => props.removePlayer(props.id)}>x</button>
                {props.name}
            </span>

            {/* Player component passing score prop to Counter */}
            <Counter score={props.score}/>
        </div>
    )
}

// // Stateless Functional component - Best to use functions when the component is receiving props
// const Counter = (props) => {
//     return (
//         <div className="counter">
//             <button className="counter-action decrement"> - </button>
//             <span className="counter-score">{props.score}</span>
//             <button className="counter-action increment"> + </button>
//         </div>
//     )
// }


// Class Component. Used when you want to use states
class Counter extends React.Component {

    // // Option 1. Setting up state using constructor and super
    // constructor() {
    //     super()
    //     this.state = {
    //         score: 0
    //     };
    // }

    // Option 2. Setting up state without constructor and super
    state = {   // Local Component State not shared outside of the component
        score: 0
    }

    incrementScore() {
        // this is only usable inside the method if 'this' was binded to the onclick event
        this.setState( prevState =>  {
            return {
                score: prevState.score + 1
            }
        });    // Tells react when state changes so that react can rerender component
    }

    decrementScore() {
        this.setState( prevState => {   //Using prevState callback to make sure state updated correctly
            return {
                score: prevState.score - 1
            }
        }); 
    }

    render() {
        return (
            <div className="counter">

                {/* Binding method 1 with bind(this) */}
                <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
                <span className="counter-score">{this.state.score}</span>

                {/* Binding method 2 with arrow functions*/}
                <button className="counter-action increment" onClick={() => this.incrementScore()}> + </button>
                
                


            </div>
        )
    }
}

const players = [
    {
        name: "Adrian",
        id: 1
    },
    {
        name: "Player2",
        id: 2
    },
    {
        name: "Player3",
        id: 3
    },
    {
        name: "Player4",
        id: 4
    }
]

class App extends React.Component {

    state = {   // Application state available to all components
        players: players
    };

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(p => p.id !== id) // Filters out player whose id is not equal to the id passed in
            }
        })
    }

    render() {
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={this.state.players.length}></Header>
    
                {/* Players list */}
                {this.state.players.map(player => 
                    <Player 
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}     // Key must be a unique value like a primary key in a database. Key is required to be a string
                        removePlayer = {this.handleRemovePlayer}
                        >
                    </Player>
                )}
                {/* <Player name="Adrian" score={20}></Player>
                <Player name="Player2" score={2}></Player>
                <Player name="Player3" score={10}></Player> */}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,   // Passing array of players to app
    document.getElementById('root')
);