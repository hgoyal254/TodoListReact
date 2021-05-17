import React, { useState } from 'react';

export const AddToDo = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e)=> {
        e.preventDefault();
        if(!title){
            alert("Title cannot be empty");
        }
        else{
            props.addTodo(title, description);
            setTitle("");
            setDescription("");
            document.getElementById("AddTodoDiv").classList.toggle("Hide");
        }
        
    }
    return (
        <div className="container my3" id="AddTodoDiv">
            <br></br>
            <h3>Add a To-Do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} maxLength = "40" placeholder="Title can have upto 50 characters" onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Todo Description</label>
                    <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add ToDo</button>
            </form>
        </div>
    )
}
