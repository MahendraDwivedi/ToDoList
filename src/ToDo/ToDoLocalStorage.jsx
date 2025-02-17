const todoKey = "reactToDo"

export const getLocalStorageToDOData = ()=>{
    const rawToDos = localStorage.getItem(todoKey);
    if(!rawToDos) return [];
    return JSON.parse(rawToDos);
};

export const setLocalStorageToDOData = (task)=>{
    return   localStorage.setItem(todoKey,JSON.stringify(task));

};
