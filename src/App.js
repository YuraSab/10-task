import React, {useEffect, useState} from 'react';
import {
    incCounter,
    decCounter,
    resetCounter,
    setCounter,
} from "./redux/action-creators";
import {
    setTodo,
    resetTodo,
    // toggleTodo,
} from "./redux/action-creators";
import {useDispatch, useSelector} from "react-redux";
import Todo from "./components/todos/Todo";
// import Todos from "./components/todos/Todos";


function App() {

    const {counter, todos} = useSelector(({counter: {counter}, todos: {todos}}) => ({counter, todos}))

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


    useEffect(() => {
        console.log(counter)
        if (counter > 0 && counter < 100) {
            fetchTodos();
        }
    }, [counter])


    const fetchTodos = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`);
        let json = await response.json();
        dispatch(setTodo(json));
    }

    const resetT = () => dispatch(resetTodo());
    // const toggleT = () => dispatch(toggleTodo());

    return (
        <div>
            <div>
                <h1>Counters:</h1>
                <h1>Counter: {counter}</h1>
                <button onClick={inc} disabled={counter === 100}>Inc counter</button>
                <button onClick={dec} disabled={counter === 0}>Dec counter</button>
                <button onClick={resetC} disabled={counter === 0}>Reset counter</button>
                <input
                    type={"number"}
                    ref={countRef}
                    onInput={onInputRef}
                    value={count}
                />
                <button onClick={setC} disabled={count === ''}>SetCounter</button>
                <hr/>
            </div>

            <div>
                <h1>Todos:</h1>
                <button onClick={fetchTodos}>Set todos</button>
                <button onClick={resetT}>Reset todos</button>
                {/*<button onClick={toggleT}>Toggle todos</button>*/}
                <div>
                    {
                        // todos && <div>
                        //     <h3>
                        //         {/*{todos.id}. {todos.title} - {todos.completed.toString()}*/}
                        //     </h3>
                        // </div>

                        counter > 0  ?
                            (<Todo item={todos}/>)
                            :
                            (<h1>Select todos</h1>)


                        // todos && <Todos todos={todos}/>

                    }
                </div>
            </div>

        </div>
    );
}

export default App;