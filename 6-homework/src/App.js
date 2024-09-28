import './App.css';
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  return (
    <div className="app">
      <TodoAdd/>
      <TodoFilter />
      <TodoList />
    </div>
  );
}

export default App;
