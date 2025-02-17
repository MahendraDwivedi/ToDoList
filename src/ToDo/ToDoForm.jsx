import { useState } from "react"

export const ToDoForm = ({onAddToDo})=>{

    const[inputValue , setInputValue] = useState("");
    const handleInputChange = (value)=>{
        setInputValue(value);
    };

    const handleFormSubmit = (event)=>{
        event.preventDefault();
        onAddToDo(inputValue);
        setInputValue("");

    }
    return(
        <section className="form">
                <form onSubmit={handleFormSubmit} className="form-child">
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue} onChange={(event)=>handleInputChange(event.target.value)}/>
                    </div>
                    <div>
                        <button type="submit" className="todo-btn"> Add Task</button>
                    </div>
                </form>
            </section>
    )
}