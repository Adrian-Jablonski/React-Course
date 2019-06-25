// function Header() { // React components are required to begin with a capital letter
//     return (
//         <header>
//             <h1>Scoreboard</h1>
//             <span className="stats">Players: 1</span>
//         </header>
//     );
// }

const players = [
    {
        name: "Adrian",
        score: 20
    },
    {
        name: "Player2",
        score: 3
    },
    {
        name: "Player3",
        score: 8
    },
    {
        name: "Player4",
        score: 12
    }
]

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

const Player = (prop) => {
    return (
        <div className="player">
            <span className="player-name">
                {prop.name}
            </span>

            {/* Player component passing score prop to Counter */}
            <Counter score={prop.score}/>
        </div>
    )
}

const Counter = (prop) => {
    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{prop.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    )
}

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header title="Scoreboard" totalPlayers={props.initialPlayers.length}></Header>

            {/* Players list */}
            {props.initialPlayers.map(player => 
                <Player 
                    name={player.name}
                    score={player.score}>
                </Player>
            )}
            {/* <Player name="Adrian" score={20}></Player>
            <Player name="Player2" score={2}></Player>
            <Player name="Player3" score={10}></Player> */}
        </div>
    )
}

ReactDOM.render(
    <App initialPlayers={players} />,   // Passing array of players to app
    document.getElementById('root')
);