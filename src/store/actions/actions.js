
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