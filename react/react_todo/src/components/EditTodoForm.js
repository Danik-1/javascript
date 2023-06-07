import React, { useState } from 'react'

export const EditTodoForm = ({ editTask, todo }) => {
  const [inputValue, setInputValue] = useState(todo.task);

  const handleSubmit = event => {
    event.preventDefault();
    editTask(inputValue, todo.id);
    setInputValue('');
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value={inputValue}
        placeholder='Update task' onChange={
          (event) => setInputValue(event.target.value)
        }/>
      <button type='submit' className='submit-btn'>
        Update
      </button>
    </form>
  )
}
