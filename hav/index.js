// pages/index.js
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function Home() {
  return (
    <div className="container">
      <h1>Daily Task ToDo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
