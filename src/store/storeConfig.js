import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore} from 'redux'
import rootReduce from './redurce/redurcers'


const storeConfig = createStore(
  rootReduce,
  composeWithDevTools()
)

export default storeConfig
