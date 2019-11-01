let count = 0;
const addOne = () => {
    count += 1;
    renderCounterApp();
}
const minusOne = () => {
    count -= 1;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}


const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const counterTemplate = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    ReactDOM.render(counterTemplate, appRoot);
}

renderCounterApp();