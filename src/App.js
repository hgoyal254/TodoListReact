import './App.css';
import Header from "./MyComponents/Header"
import {Todos} from "./MyComponents/Todos"
import {AddToDo} from "./MyComponents/AddToDo"
import React, { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])

  const addTodo = (title,description) => {
    console.log("I am adding this Todo", title);
    let sno = 0;
    if(todos.length)
      sno = todos[todos.length -1].sno + 1
    const myToDo = {
      sno : sno,
      title : title,
      description : description
    }
    setTodos([...todos,myToDo]);
    
    console.log(myToDo);
    
  }

  return (
    <>
      <Router>
        <Header title="To-Do"/>
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
              <AddToDo addTodo={addTodo}/>
              <Todos todos_list = {todos} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
          {/* <Route exact path="/addToDo">
            <AddToDo addTodo={addTodo}/>
          </Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
