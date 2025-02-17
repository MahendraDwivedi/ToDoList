import { useEffect, useState } from "react"


export const ToDoDate = ()=>{

    const [dateTime , setDateTime] = useState("");

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

    return <h2>{dateTime}</h2>;
}