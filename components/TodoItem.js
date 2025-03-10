// components/TodoItem.js
'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo, setTodoStatus } from '../store/todoSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newPriority, setNewPriority] = useState(todo.priority);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleUpdate = () => {
    if (newText.trim() === '') return;
    dispatch(updateTodo({ id: todo.id, text: newText, priority: newPriority }));
    setIsEditing(false);
  };

  // Handlers to explicitly set the task status
  const markActive = () => {
    dispatch(setTodoStatus({ id: todo.id, completed: false }));
  };

  const markCompleted = () => {
    dispatch(setTodoStatus({ id: todo.id, completed: true }));
  };

  // Determine the color based on priority
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return '#e74c3c'; // Red for High priority
      case 'Medium':
        return '#f39c12'; // Orange for Medium priority
      case 'Low':
        return '#27ae60'; // Green for Low priority
      default:
        return '#333'; // Default color
    }
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
          <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ 
                color: getPriorityColor(todo.priority),
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}>
            {todo.text} <em>({todo.priority})</em>
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
