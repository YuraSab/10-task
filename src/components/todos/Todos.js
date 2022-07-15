import React, {Component} from 'react';
import Todo from "./Todo";

class Todos extends Component {
    render() {

        let {todos} = this.props;

        return (
            <div>
                {
                    todos.map(value => {
                        return(
                            <Todo
                                item = {value}
                                key = {value.id}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Todos;