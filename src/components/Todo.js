import React from 'react'
import "../css/Todo.css"
import {Button} from 'reactstrap'

function Todo( {description, done, onChangeTodo, onRemoveTodo, index}) {
  return (
    done ?
    <div className="todoElement_done">
        <p className='description'>
            {description}
        </p>
        <Button
          onClick={() => onChangeTodo(index)}
        >nicht erledigt</Button>
        <Button
          onClick={() => onRemoveTodo(index)}
       >löschen</Button>
       <div></div>
    </div>
    :
    <div className="todoElement_false">
        <p className='description'>
            {description}
        </p>
        <Button
          onClick={() => onChangeTodo(index)}
      >erledigt</Button>
       <Button
          onClick={() => onRemoveTodo(index)}
       >löschen</Button>
       <div></div>
    </div>
  )
}

export default Todo