import { useEffect, useState } from "react"
import "./todo.css";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./toDoList";
import { ToDoDate } from "./toDoDate";
export const ToDo = ()=>{
    const[task , setTask] = useState([]);

    const handleFormSubmit = (inputValue)=>{

        if(!inputValue) return;

        if(task.includes(inputValue)){
            return;
        }
        setTask((prev)=>[...prev,inputValue]);

    }

   

    const handleDeleteTodo =(value)=>{
        const updatedTask = task.filter((curTask)=> curTask!==value);
        setTask(updatedTask);
;    }

    const handleClearAll =()=>{
        setTask([]);
    }

    return(
        <section className="todo-container">
            <header>
                <h1>
                    ToDo List
                </h1>
                <ToDoDate/>
            </header>
            
            <ToDoForm onAddToDo={handleFormSubmit}/>
            <section className="myUnOrderedList">
                <ul>
                    {task.map((curTask,index)=>{
                            return (
                             <ToDoList key={index} data={curTask} onhandleDeleteTodo={handleDeleteTodo}/>
                            );
                        })
                    }
                </ul>
            </section>
            <section >
                <button className="clear-all" onClick={handleClearAll}> Clear All</button>
            </section>
        </section>
    )
}