import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    let TodoStyle = {
        minHeight : "70vh"
    }
    return (
        <div className="container my-3" style={TodoStyle}>
            <h1 className="text-center my-3">To-Do List</h1>
            <hr/>
            <div className="row">
                {props.todos_list.length===0 ? "No Todos To Display" : 
                props.todos_list.map((todo) => {
                    return( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> )
                } ) } 
            </div>
                       
        </div>
    )
}
