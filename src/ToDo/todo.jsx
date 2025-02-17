import { useEffect, useState } from "react"
import "./todo.css";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./toDoList";
import { ToDoDate } from "./toDoDate";
import {getLocalStorageToDOData, setLocalStorageToDOData } from "./ToDoLocalStorage";



export const ToDo = ()=>{
    const[task , setTask] = useState(()=> getLocalStorageToDOData());

    const handleFormSubmit = (inputValue)=>{
        const {id,content,checked} = inputValue;

        if(!content) return;

        // if(task.includes(inputValue)){
        //     return;
        // }

        const ifToDoContentMatched = task.find((curTask)=>curTask.content===content);
        if(ifToDoContentMatched){
            return;
        }
        setTask((prev)=>[...prev,{id,content,checked}]);

    }



    setLocalStorageToDOData(task);

   

    const handleDeleteTodo =(value)=>{
        const updatedTask = task.filter((curTask)=> curTask.content!==value);
        setTask(updatedTask);
;    }

    const handleClearAll =()=>{
        setTask([]);
    }

    const handleCheckedToDO = (content)=>{
        const updatedTask = task.map((curTask)=>{
            if(curTask.content===content) return {...curTask,checked:!curTask.checked};
            else return curTask;
        }
      );
      setTask(updatedTask);
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
                             <ToDoList 
                             key={curTask.id} 
                             data={curTask.content} 
                             checked = {curTask.checked}
                             onhandleDeleteTodo={handleDeleteTodo}
                             onhandleCheckedTodo={handleCheckedToDO}
                             />
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