// components/TodoItem.js
'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, setTodoStatus } from '../store/todoSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleUpdate = () => {
    if (newText.trim() === '') return;
    dispatch(updateTodo({ id: todo.id, text: newText }));
    setIsEditing(false);
  };

  // Handlers to set the task status explicitly
  const markActive = () => {
    dispatch(setTodoStatus({ id: todo.id, completed: false }));
  };

  const markCompleted = () => {
    dispatch(setTodoStatus({ id: todo.id, completed: true }));
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={newText} 
            onChange={(e) => setNewText(e.target.value)} 
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <div className="status-checkboxes">
            <label>
              <input
                type="checkbox"
                checked={!todo.completed}
                onChange={markActive}
              />{' '}
              Active
            </label>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={markCompleted}
              />{' '}
              Completed
            </label>
          </div>
          <div className="btn-group">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}
