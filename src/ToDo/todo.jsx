import { useEffect, useState } from "react"
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./todo.css";
export const ToDo = ()=>{
    const[inputValue , setInputValue] = useState("");
    const[task , setTask] = useState([]);
    const [dateTime , setDateTime] = useState("");

    const handleInputChange = (value)=>{
        setInputValue(value);
    }

    const handleFormSubmit = (event)=>{
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)){
            setInputValue("");
            return;
        }
        setTask((prev)=>[...prev,inputValue]);
        setInputValue("");

    }

    //date time
    useEffect(()=>{
        const interval = setInterval(()=>{
            const now = new Date();
            const date = now.toLocaleDateString();
            const time =now.toLocaleTimeString();
            setDateTime(`${date} - ${time}`)
         },1000);

         return ()=> clearInterval(interval);
    },[]);

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
                <h2>{dateTime}</h2>
            </header>
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
            <section className="myUnOrderedList">
                <ul>
                    {task.map((curTask,index)=>{
                            return (
                            <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                
                                <button className="check-btn"><MdCheck/></button>
                                <button className="delete-btn" onClick={()=>handleDeleteTodo(curTask)}><MdDeleteForever/></button>
                            </li>
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