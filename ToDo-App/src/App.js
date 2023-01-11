import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import { v4 as uuid } from "uuid";
import "./App.css";
import TodoItem from "./components/TodoItem";

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

		// this.state = {
		// 	todos: []
		// };
	}

	// Lifecycle Methode, die aufgerufen wird, wenn die Komponente in den Browser DOM eingefügt wird
	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
		// 	console.log(res.json());
		// });

		// fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then((res) => {
		// 	return (res.json())
		// }).then((json) => {
		// 	console.log(json);
		// });

		// fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
		//    .then((res) => res.text())
		//    .then((text) => {
		// 	console.log(text);
		//     });

		// fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
		//    .then((res) => res.json())
		//    .then((responseJSON) => this.setState({todos: responseJSON}))
		//    .catch((e) => alert(`Fehler beim Laden der Todos:\n${e}`));
	}

	// toggleCompleted = (e) => {
	// 	console.log(this.state);
	// 	console.log(e.target);
	// 	console.log(e.target.value);
	// };

	// toggleCompleted = (id) => {
	// 	// console.log(this.props);
	// 	console.log(id);
	// 	// this.state.todos[id-1].completed = !this.state.todos[id-1].completed;
	// 	// console.log(this.state.todos[id-1].completed);
	// 	// this.setState(this.state);
	// 	// console.log(this.state);
	// 	this.setState({
	// 		todos: this.state.todos.map((todo) => {
	// 			if (todo.id === id) {
	// 				todo.completed = !todo.completed;
	// 			}
	// 			return todo;
	// 		})
	// 	});
	// }

	// deleteTodo = (id) => {
	// 	console.log(id);
	// 	this.setState( {todos: this.state.todos.filter((todo) =>  todo.id !== id)});
	// }

	// deleteTodo = (id) => {
	// 	fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
	// 		method: 'DELETE'
	// 	})
	// 	.then((res) => this.setState({
	// 		todos: this.state.todos.filter((todo) => todo.id !== id)
	// 	}))
	// 	.catch((e) => alert(`Fehler beim Löschen des Todos mit ID=${id}:\n${e}`));
	// }

	/* addTodo = (title) => {
		// console.log(title);
		// const newTodo = {
		// 	id: 4,
		// 	title: title,
		// 	completed: false
		// }


		const newTodo = {
			id: uuid.v4(),
			title: title,
			completed: false
		}

// 	const newTodos = this.state.todos.concat(newTodo);
//   console.log(newTodos);
//  this.setState({ todos: newTodos});
	// 	// this.setState({ todos: this.state.todos.concat(newTodo)});
	this.setState({ todos: [...this.state.todos, newTodo]});
	console.log(this.state.todos);
	} */

	// addTodo = (title) => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos', {
	// 		method: 'POST',
	// 		body: JSON.stringify({
	// 			title: title,
	// 			completed: false
	// 		}),
	// 		headers: {
	// 			"Content-type": "application/json; charset=UTF-8"
	// 		}
	// 	})
	// 	.then(res => res.json())
	// 	.then(responseJSON => {
	// 		console.log(responseJSON);
	// 		// responseJSON.id = uuid.v4();
	// 		this.setState({ todos: [...this.state.todos, responseJSON]});
	// 	})
	// 	.catch((e) => alert(`Fehler beim Anlegen des Todos mit Titel=${title}:\n${e}`));
	// }

	render() {
		return (
			<div className="App">
				<h1>Todo Listen App</h1>
			</div>
		);
	}

	// render() {
	// 	console.log(this.state);
	// 	return (
	// 		<div className="App">
	// 			<Todos />
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<Todos todos={this.state.todos} />
	// 			{/* <TodoItem /> */}
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo} />
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<AddTodo addTodo={this.addTodo} />
	// 			<Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo} />
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<div className="App">
	// 			<Header />
	// 			<AddTodo addTodo={this.addTodo} />
	// 			<Todos todos={this.state.todos} toggleCompleted={this.toggleCompleted} deleteTodo={this.deleteTodo} />
	// 		</div>
	// 	);
	// }

	// render() {
	// 	return (
	// 		<Router>
	// 			<div className='App'>
	// 				<Header />
	// 				<Route exact path='/' render={() => (
	// 					<React.Fragment>
	// 						<AddTodo addTodo={this.addTodo} />
	// 						<Todos todos={this.state.todos}	toggleCompleted={this.toggleCompleted}
	// 							deleteTodo={this.deleteTodo} />
	// 					</React.Fragment>
	// 				)}/>
	// 				<Route path='/about' component={About} />
	// 			</div>
	// 		</Router>
	// 	);
	// }
}

export default App;
