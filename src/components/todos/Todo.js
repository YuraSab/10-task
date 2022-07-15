import React, {Component} from 'react';

class Todo extends Component {
    render() {

        let {item} = this.props;

        return (
            <div>
                {
                    item.id > 0 ? (
                        <h1>{item.id}. {item.title} -
                            {item.completed.toString()}
                        </h1>
                    ):(
                        <h1>Select todos</h1>
                    )
                }

            </div>
        );
    }
}

export default Todo;