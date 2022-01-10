const estadoinicial = []
  export default function Task(state = estadoinicial, action) {
    switch (action.type) {
      case "Create":
        return {
          ...state,
          state: state.push(action.payload)
        };
        case "Delete":
        return{
            ...state,
            state: state.slice(action.payload-1,action.payload)
        };
      default:
        return estadoinicial;
    }
  }
  