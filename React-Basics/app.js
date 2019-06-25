function Header() { // React components are required to begin with a capital letter
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
}

ReactDOM.render(
    header,
    document.getElementById('root')
);