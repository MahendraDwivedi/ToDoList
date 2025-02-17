import { MdCheck, MdDeleteForever } from "react-icons/md";

export const  ToDoList = ({data,checked,onhandleDeleteTodo,onhandleCheckedTodo})=>{

    return(
        <li className="todo-item">
            <span className= {checked ?"checkList" : "notCheckedList"}>{data}</span>                        
            <button className="check-btn" onClick={()=>onhandleCheckedTodo(data)}><MdCheck/></button>
            <button className="delete-btn" onClick={()=>onhandleDeleteTodo(data)}><MdDeleteForever/></button>
        </li>
    )
}