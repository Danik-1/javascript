import React, { useState } from 'react'

export const TodoForm = ({ addTask }) => {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
    addTask(inputValue);
    setInputValue('');
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value={inputValue}
        placeholder='Task name' onChange={
          (e) => setInputValue(e.target.value)
        }/>
      <button type='submit' className='submit-btn'>
        Add Task
      </button>
    </form>
  )
}
