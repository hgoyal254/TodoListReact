import React from 'react'

export const TodoItem = ({todo,onDelete}) => { 
    let buttonID = todo.sno + "DoneButton";
    const toggleClass = (sno,buttonID) => {
        document.getElementById(sno).classList.toggle("Done");

        let button = document.getElementById(buttonID);
        if(button.textContent === "Done"){
            button.textContent = "Undo";
            button.classList.remove("btn-warning");
            button.classList.add("btn-success");
        }
        else{
            button.textContent = "Done";
            button.classList.remove("btn-success");
            button.classList.add("btn-warning");
        }
    }
    return (
        <div className="col-12 col-md-6">
            <div className="todoItem my-3 py-3 px-3">
                <div id={todo.sno} className="text-center">
                    <h4>{todo.title}</h4>
                    <p>{todo.description}</p>
                </div>
                
                <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button>
                <button className="btn btn-sm btn-warning" id={buttonID} style={{float : "right"}} onClick={() => {toggleClass(todo.sno,buttonID)}}>Done</button> 
            </div>
            <hr/>
        </div>
    )
}

