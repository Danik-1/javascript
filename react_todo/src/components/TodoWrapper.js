import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import { v4 as uuidv4 } from 'uuid'
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    setTasks([...tasks,
      { id: uuidv4(), task: task, completed: false, isEditing: false }]
    );
  }

  const togleComplete = id => {
    setTasks(tasks.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  const setEditingTrue = id => {
    setTasks(tasks.map(todo =>
      todo.id === id ? {...todo, isEditing: true} : todo
    ));
  }
  
  const editTask = (newValue, id) => {
    setTasks(tasks.map(todo =>
      todo.id === id ? { ...todo, task: newValue, isEditing: false } : todo
    ));
}

  const deleteTodo = id => {
    setTasks(tasks.filter(todo => todo.id !== id));
  }

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTask={addTask} />
      {tasks.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTask={editTask} todo={todo} key={index} />
        ) : (
          <Todo todo={todo}
                togleComplete={togleComplete}
                deleteTodo={deleteTodo}
                setEditingTrue={setEditingTrue}
                key={index} />
        )
      )}
    </div>
  )
}
