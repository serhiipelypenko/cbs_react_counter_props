import React, {useState} from "react";
import Counter from "./Components/Counter";
function App() {

    const [value, setValue] = useState('Text in input');

    return (
        <div className="App">
            <Counter />
            <p>{value}</p>
            <input type='text'
             onChange={event => setValue(event.target.value)}/>
        </div>
    );
}

export default App;