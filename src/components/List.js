import React from 'react';
import "../css/List.css";
import Todo from "./Todo.js";
import {useState} from "react";
import {Alert, Button} from 'reactstrap';


function List() {
  const [todos, setTodos] = useState(() =>{
    const items = localStorage.getItem("items");
    const parsed = JSON.parse(items);
    return parsed || [];
  });
  const [textInput, setTextInput] = useState("");

  const changeText = (e) => {
    setTextInput(e.target.value);
  }

  const changeTodos = (index) => {
    const newTodos = [...todos]
    if (newTodos[index].done){
      newTodos[index].done = false;
    }
    else {
      newTodos[index].done = true;
    }
    setTodos(newTodos);
  }
  const removeTodo = (index) => {
    const newTodos = [...todos]
      newTodos.splice(index,1);
      setTodos(newTodos);
      localStorage.setItem("items", JSON.stringify(newTodos));
  }

  const addTodo = () => {
    var containsTextInput = false;
    for(var i=0; i < todos.length; i++){
      if (todos[i].description === textInput){
        containsTextInput = true;
      }
    }

    if(textInput === ""){
      document.getElementById("error1").style.display = "block";
      setTimeout(() => {  
        document.getElementById("error1").style.display = "none";
      }, 5000);
    }
    else if(containsTextInput) {
      document.getElementById("error2").style.display = "block";
      setTimeout(() => {  
        document.getElementById("error2").style.display = "none";
      }, 5000);
    }
    else{
      const newTodos = [...todos, {description: textInput, done: false}]
      setTodos(newTodos);
      localStorage.setItem("items", JSON.stringify(newTodos));
    }

    setTextInput("");
  }

  return (
    <div id="taskList">
      <div id="headList">
        <b>Womit ich mich beschäftigt habe:</b>
      </div>
      <Alert
        id="error1"
        color="danger"
      >
        <p>Name can't be empty.</p>  
      </Alert>
      <Alert
        id="error2"
        color="danger"
      >
        <p>You already have a Task with that name.</p>  
      </Alert>
      {
        todos.map((item, index) =>{
          return <Todo
            description={item.description}
            done={item.done} 
            key={index}
            index={index}
            onChangeTodo={changeTodos}
            onRemoveTodo={removeTodo}
          />
      })}   
       <div id="inputs">
        <input
          placeholder="Task Name"
          onChange={changeText}
          value={textInput}
        ></input>
        <Button
          onClick={addTodo}
        >Add Task</Button>
        <div></div>
      </div>
    </div>
  )
}

export default List