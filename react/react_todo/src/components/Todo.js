import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({ todo, togleComplete, deleteTodo, setEditingTrue }) => {
  return (
    <div className="Todo">
      <p className={todo.completed ? "completed" : ""}
        onClick={() => togleComplete(todo.id)}>{todo.task}</p>

      <div>
        <FontAwesomeIcon icon={faPenToSquare}
          onClick={() => setEditingTrue(todo.id)} />
        <FontAwesomeIcon icon={faTrash}
          onClick={() => deleteTodo(todo.id)} />
      </div>
    </div>
  )
}
