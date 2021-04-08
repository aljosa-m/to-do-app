import logo from './logo.svg';
import './App.css';
import { getToDos } from './actions/todoActions.js';
import Button from './components/Button.js';
import ToDoItem from './components/ToDoItem.js';

function App() {
  state = {
    todos: []
  }
  componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => {
          const todos = response.data;
          this.setState({ todos });
        })
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello

        </p>

        <ul>
          { this.state.todos.map(todo => <ToDoItem userId={todo.userId} id={todo.id} title={todo.title} status={todo.status} />)}
        </ul>

        <Button buttonAction={getToDos} buttonLabel={'GET'}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
