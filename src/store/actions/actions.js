
export const deleteTask = (prop)=>{
    return {
        type: "Delete",
        payload: prop
    }
}


export const createTask = (prop)=>{
    return {
        type: "Create",
        payload: prop
    }
}