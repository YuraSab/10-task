import React, {useState} from 'react';
import {
    incCounter,
    decCounter,
    resetCounter,
    setCounter,
} from "./redux/action-creators";
import {
    setTodo,
    resetTodo,
    toggleTodo,
} from "./redux/action-creators";
import {useDispatch, useSelector} from "react-redux";


function App() {

    const {counter, todos} = useSelector(( {counter: {counter}, todos: {todos}} ) => ({counter, todos}))

    const dispatch = useDispatch();

    const [count, setCount] = useState('');

    const countRef = React.createRef();

    const onInputRef = () => {
        console.log(count)
        setCount(countRef.current.value);
    }

    const inc = () => dispatch(incCounter());
    const dec = () => dispatch(decCounter());
    const resetC = () => dispatch(resetCounter());
    const setC = () => dispatch(setCounter(count));



    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={inc}>Inc counter</button>
            <button onClick={dec}>Dec counter</button>
            <button onClick={resetC}>Reset counter</button>
            <input
                type={"number"}
                ref={countRef}
                onInput={onInputRef}
                value={count}
            />
            <button onClick={setC}>SetCounter</button>

        </div>
    );
}

export default App;