import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import {v4 as uuid} from "uuid";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    title: "Müll leeren",
                    completed: false
                },
                {
                    id: 2,
                    title: "Dinner mit Freunden",
                    completed: true
                },
                {
                    id: 3,
                    title: "Meeting",
                    completed: false
                }
            ]
        };

        this.state = {
            todos: []
        };
    }

    // Lifecycle Methode, die aufgerufen wird, wenn die Komponente in den Browser DOM eingefügt wird
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((res) => res.json())
            .then((responseJSON) => this.setState({todos: responseJSON}))
            .catch((e) => alert(`Fehler beim Laden der Todos:\n${e}`));
    }

    toggleCompleted = (id) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    }

    deleteTodo = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })
            .then((res) => this.setState({
                todos: this.state.todos.filter((todo) => todo.id !== id)
            }))
        //.catch((e) => alert(`Fehler beim Löschen des Todos mit ID=${id}:\n${e}`));
    }


    addTodo = (title) => {
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                completed: false
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(responseJSON => {
                console.log("Res: ", responseJSON);
                responseJSON.id = uuid;
                this.setState({todos: [...this.state.todos, responseJSON]});
                console.log(responseJSON.id)
            })
            .catch((e) => alert(`Fehler beim Anlegen des Todos mit Titel=${title}:\n${e}`));
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <Header/>
                    <Route exact path='/' render={() => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted}
                                   deleteTodo={this.deleteTodo}/>
                        </React.Fragment>
                    )}/>
                    <Route path='/about' component={About}/>
                </div>
            </Router>
        );
    }
}

export default App;
