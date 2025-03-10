// app/page.js
'use client';

import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoFilter from '../components/TodoFilter';

export default function Home() {
  const [filter, setFilter] = useState('all'); // Options: 'all', 'active', 'completed'

  return (
    <div>
      <h1>Daily Task ToDo App</h1>
      <TodoForm />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}
