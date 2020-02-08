import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(10);

  const [{ count2, count3 }, setCountObj] = useState({ count2: 20, count3: 50 });

  return (
    <div className="App">
      <div>
        <h2>Count 1</h2>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
        <div>{count}</div>
      </div>

      <div>
        <h2>Count 2 & 3</h2>
        <button
          onClick={() =>
            setCountObj(currentState => ({
              ...currentState,
              count2: currentState.count2 + 1
            }))
          }
        >+</button>
        <div>Count: 2 {count2}</div>
        <button
          onClick={() =>
            setCountObj(currentState => ({
              ...currentState,
              count3: currentState.count3 + 1
            }))
          }
        >+</button>
        <div>Count: 3 {count3}</div>
      </div>
    </div>
  );
}

export default App;