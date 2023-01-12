import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f6f6f6',
            padding: '5px',
            marginBottom: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    toggleCompleted(e) {
        console.log(this.props);
    }

    toggleCompleted = (e) => {
        console.log(this.props);
    }

    render() {
        const {id, title, completed} = this.props.todo;
        console.log('TodoItem:', this.props);

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={completed}
                           onChange={this.props.toggleCompleted.bind(this, id)}/> {' '}
                    {title}
                    <button style={btnStyle} onClick={(e) => this.props.deleteTodo(id)}>Löschen</button>
                </p>
            </div>
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}

TodoItem.defaultProps = {
    todo: {
        id: -1,
        title: 'Default Todo Item',
        completed: true
    }
}

const btnStyle = {
    background: '#faab00',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
