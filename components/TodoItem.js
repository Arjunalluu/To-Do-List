// components/TodoItem.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from '../store/todoSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleUpdate = () => {
    if (newText.trim() === '') return;
    dispatch(updateTodo({ id: todo.id, text: newText }));
    setIsEditing(false);
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
          <span 
            onClick={handleToggle} 
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>
          <div className="btn-group">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
}
