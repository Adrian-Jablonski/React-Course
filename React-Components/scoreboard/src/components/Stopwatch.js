import React, {Component} from 'react';

class Stopwatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    };

    componentDidMount() {   // Called when the component is inserted or mounted into the DOM
        console.log("The stopwatch mounted!");
        this.intervalID = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {    // Called right before component is removed and destroyed from the DOM
        clearInterval(this.intervalID);
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prevState => ({
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
            }));
        }
    }

    handleStopwatch = () => {
        this.setState( prevState => ({
            isRunning: !prevState.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({previousTime: Date.now()})
        }
    }

    handleReset = () => {
        this.setState(prevState => ({
            elapsedTime: 0
        }))
    }

    render() {
        let seconds = Math.floor(this.state.elapsedTime / 1000);
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time">{ seconds }</span>
                <button onClick={this.handleStopwatch}>
                { this.state.isRunning ? 'Stop' : 'Start' }</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch;