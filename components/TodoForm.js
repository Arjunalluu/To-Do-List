// components/TodoForm.js
'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

export default function TodoForm() {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium'); // Default priority
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    // Dispatch with both text and priority
    dispatch(addTodo({ text, priority }));
    setText('');
    setPriority('Medium');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input 
        type="text" 
        placeholder="Add new task" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}
