
export const deleteTask = (todoTaskDelete)=>{
    return {
        type: "Delete",
        payload: todoTaskDelete
    }
}


export const createTask = (todoTask)=>{
    return {
        type: "Create",
        payload: todoTask
    }
}

export const clearTasks = ()=>{
    return{
        type:'Clear'
    }
}