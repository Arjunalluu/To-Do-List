// components/TodoList.js
'use client';

import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

export default function TodoList({ filter }) {
  const todos = useSelector((state) => state.todos.todos);

  let filteredTodos = todos;
  if (filter === 'active') {
    filteredTodos = todos.filter((todo) => !todo.completed);
  } else if (filter === 'completed') {
    filteredTodos = todos.filter((todo) => todo.completed);
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
