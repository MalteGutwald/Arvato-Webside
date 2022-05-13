import React from 'react';
import "../css/List.css";
import Todo from "./Todo.js";
import {useState} from "react";
import {Alert, Button, Input } from 'reactstrap';

function List() {
  const [todos, setTodos] = useState(() =>{
    const items = localStorage.getItem("items");
    const parsed = JSON.parse(items);
    return parsed || [];
  });

  const [pageOptions, setPageOptions] = useState(() =>{
    const items = localStorage.getItem("items");
    const parsed = JSON.parse(items);
    const pages = Math.ceil(parsed.length / 5);
    const pagesArray = Array(pages).fill().map((_, pages) => pages+1);
    if (pagesArray.length === 0) {
      return ["1"]
    }
    else{
      return pagesArray;
    }
  });

  const itemsPerPageOptions = ["5","10","15","20"];

  const [textInput, setTextInput] = useState("");
  const [taskNameInput, setTaskNameInput] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState("5");
  const [page, setPage] = useState(1);
 
  const [listElements, setListElements] = useState(() =>{
    const todosCoppy = [...todos]
    var listElements = todosCoppy.slice(0, 5);
    return listElements
  });

  const changeItemsPerPage = (e) => {
    setPage(1);
    setItemsPerPage(e.target.value);
    changePageOptions(e.target.value);
    changeListElements_ItemsPerPage(e.target.value);
  }
  const changeListElements_ItemsPerPage = (e) => {
    const todosCoppy = [...todos]
    //geht immer auf die erste Seite
    const startValue = (0);

    var listElements = todosCoppy.slice(startValue, e);
    setListElements(listElements);
  }

  const changePage = (e) => {
    setPage(e.target.value);
    changeListElements_Page(e.target.value)
  }
  const changeListElements_Page = (e) => {
    const todosCoppy = [...todos]
    const removeItems = ((e-1) * itemsPerPage);
    
    //entfernt die davor
    todosCoppy.splice(0, removeItems);
    //entfernt die danach
    const update = todosCoppy.splice(0, itemsPerPage);
    
    setListElements(update);
  }

  const changeText = (e) => {
    setTextInput(e.target.value);
  }
  const changeTaskName = (e) => {
    setTaskNameInput(e.target.value);
  }

  const changePageOptions = (e) => {
    const todosCoppy = [...todos];
    var pageOptionsLoop = [];
    var pageOptionLoopString = "";

    for(let i=1; (todosCoppy.length / parseFloat(e)) > (i-1); i++){
      pageOptionLoopString = i.toString();
      pageOptionsLoop.push(pageOptionLoopString);
    }
    if(pageOptionsLoop.length === 0){
      setPageOptions(["1"]);  
    } 
    else{
      setPageOptions(pageOptionsLoop);
    } 
  }

  const changeTodos = (index) => {
    const newTodos = [...todos]
    const startValue = ((page-1) * itemsPerPage);
    if (newTodos[index + startValue].done){
      newTodos[index + startValue].done = false;
    }
    else {
      newTodos[index + startValue].done = true;
    }
    setTodos(newTodos);
  }
  const removeTodo = (index) => {
    const newTodos = [...todos]
    const startValue = ((page-1) * itemsPerPage);
      newTodos.splice(index + startValue,1);
      setTodos(newTodos);
      localStorage.setItem("items", JSON.stringify(newTodos));
      
      //changePageOptions
      const todosCoppy = newTodos;
      var pageOptionsLoop = [];
      var pageOptionLoopString = "";

      for(let i=1; (todosCoppy.length / parseFloat(itemsPerPage)) > (i-1); i++){
        pageOptionLoopString = i.toString();
        pageOptionsLoop.push(pageOptionLoopString);
      }
      if(pageOptionsLoop.length === 0){
        setPageOptions(["1"]);  
      } 
      else{
        setPageOptions(pageOptionsLoop);
      }
      // so wäre eine bessere Lösung, klappt aber nicht.
      // changePageOptions(itemsPerPage);

      changeListElements_remove(index);
  }
  const changeListElements_remove = (e) => {
    const todosCoppy = [...todos]
    //entfernt Element
    todosCoppy.splice(e + itemsPerPage * (page-1),1);
    const startValue = ((page-1) * itemsPerPage);

    var listElements = todosCoppy.slice(startValue, itemsPerPage);
    if(listElements.length === 0){
      listElements = todosCoppy.slice((page-2)*itemsPerPage, itemsPerPage);
      setListElements(listElements);
      if(page !==1){
        setPage(page-1);
      }
      changePageOptions(pageOptions.pop)
    }
    else{
      setListElements(listElements);
    }
  }

  const searchTodo = () => {
    const todosCoppy = [...todos];
    const searchTaskList = [];

    if(taskNameInput.length !==0){
      const dropdown1 = document.getElementById("selectItemsPerPage");
      dropdown1.disabled = true;
      const dropdown2 = document.getElementById("selectPage");
      dropdown2.disabled = true;

      for(let i =0; i < todosCoppy.length; i++){
        if (todos[i].description.includes(taskNameInput)) {
          searchTaskList.push(todos[i]);
        }
      }
      setListElements(searchTaskList);
    }
    else{
      const dropdown1 = document.getElementById("selectItemsPerPage");
      dropdown1.disabled = false;
      const dropdown2 = document.getElementById("selectPage");
      dropdown2.disabled = false;

      const todosCoppy = [...todos]
      var listElements = todosCoppy.slice((page-1) * itemsPerPage, itemsPerPage);
      setListElements(listElements);
    } 
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
      }, 2500);
    }
    // bereits vorhanden
    else if(containsTextInput) {
      document.getElementById("error2").style.display = "block";
      setTimeout(() => {  
        document.getElementById("error2").style.display = "none";
      }, 2500);
    }
    else{
      const newTodos = [...todos, {description: textInput, done: false}]
      setTodos(newTodos);
      //warum wird hier todos nicht verändert?
      localStorage.setItem("items", JSON.stringify(newTodos));

      //changePageOptions
      const todosCoppy = newTodos;
      var pageOptionsLoop = [];
      var pageOptionLoopString = "";

      for(let i=1; (todosCoppy.length / parseFloat(itemsPerPage)) > (i-1); i++){
        pageOptionLoopString = i.toString();
        pageOptionsLoop.push(pageOptionLoopString);
      }
      if(pageOptionsLoop.length === 0){
        setPageOptions(["1"]);  
      } 
      else{
        setPageOptions(pageOptionsLoop);
        changeListElements_add(newTodos);
      }
      // so wäre eine bessere Lösung, klappt aber nicht.
      // changePageOptions(itemsPerPage);
    }
    setTextInput("");
  }
  const changeListElements_add = (e) => {
    const startValue = ((page-1) * itemsPerPage);

    var listElements = e.slice(startValue, itemsPerPage);
    setListElements(listElements);
  }

  return (
    <div id="taskList">
      <div id="headList">
        <b>Womit ich mich beschäftigt habe:</b>
      </div>
      <div className='taskList'>
        <p>Todo-List</p>
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
      <p>Elements per Page</p>
      <Input
        id = "selectItemsPerPage"
        type="select"
        onChange={changeItemsPerPage}
      >
        {
          itemsPerPageOptions.map((item, index) => {
            return <option
              key={index}
              value={item}
              >
                {item}
              </option>
          })
        }
      </Input>

      <p>Page {page}</p>

      <Input
        id = "selectPage"
        type="select"
        onChange={changePage}
        value={page}
      >
        {
          pageOptions.map((item, index) => {
            return <option
              key={index}
              value={item}
              >
                {item}
              </option>
          })
        }
      </Input>

      <div className='searchTask'>
        <input
          placeholder="Enter Taskname"
          onChange={changeTaskName}
          value={taskNameInput}
        ></input>
        <Button
            onClick={searchTodo}
          >Search</Button>
      </div>


      {
        listElements.map((item, index) => {
          return <Todo
            description={item.description}
            done={item.done} 
            key={index}
            index={index}
            onChangeTodo={changeTodos}
            onRemoveTodo={removeTodo}
          />
        })
      }   
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