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
            ...state,
            todo: [...state.todo].filter((todo)=>{
              if(action.payload != todo.id){
                return todo
              }
            })
        };
        case 'Clear':
        return{
          ...state,
          todo : []
        }

      default:
        return estadoinicial;
    }
  }
  