// components/ClearCompletedButton.js
'use client';

import { useDispatch } from 'react-redux';
import { clearCompleted } from '../store/todoSlice';

export default function ClearCompletedButton() {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCompleted());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
      <button onClick={handleClear}>Clear Completed Tasks</button>
    </div>
  );
}
