
import {combineReducers} from 'redux'
import reduceTask from './reduceTask'
const redurce = combineReducers({
    task: reduceTask
 });

  export default redurce