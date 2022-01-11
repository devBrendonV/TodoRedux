const estadoinicial ={
    todo:[]
}
  export default function Task(state = estadoinicial, action) {
    switch (action.type) {
      case "Create":
        return {
            ...state,
          todo: [...state.todo,action.payload]
        };
        case "Delete":
        return{
            ...state.todo,
            todo: [...state.todo].filter((a,indice)=>{
              if(action.payload != indice){
                return a
              }
            })
        };
      default:
        return estadoinicial;
    }
  }
  