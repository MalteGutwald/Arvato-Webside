import React from 'react'
import "../css/Todo.css"
import {Button} from 'reactstrap'

function Todo( {description, done, onChangeTodo, onRemoveTodo, index}) {
  return (
    done ?
    <div id="todoElement_done">
        <h3 className='description'>
            {description}
        </h3>
        <Button
          onClick={() => onChangeTodo(index)}
        >nicht erledigt</Button>
        <Button
          onClick={() => onRemoveTodo(index)}
       >löschen</Button>
       <div></div>
    </div>
    :
    <div id="todoElement_false">
        <h3 className='description'>
            {description}
        </h3>
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