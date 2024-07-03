import React, {useState} from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter App</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};
export default Counter;