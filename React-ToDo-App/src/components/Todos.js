import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    constructor(props) {
        super(props);
    }


    toggleCompleted = (e) => {
        console.log(this.props);
    }

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} toggleCompleted={this.props.toggleCompleted}
                      deleteTodo={this.props.deleteTodo}/>
        ));
    }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

export default Todos;
