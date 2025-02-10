import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(5);

    function increment() {
        setCounter(counter+1);
    }

    function decrement() {
        setCounter(counter-1);
    }
    function reset() {
        setCounter(0);
    }

    return (
        <div className="App">
            <h1>Counter {counter}</h1>
            <button onClick={increment}> Increment </button>
            <button onClick={decrement}> Decrement </button>
            <button onClick={reset}> Reset </button>
        </div>
    );
};

export default Counter;