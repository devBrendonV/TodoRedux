import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { createStore,applyMiddleware} from 'redux'
import rootReduce from './redurce/redurcers'

const middleware = [thunk]

const storeConfig = createStore(
  rootReduce,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default storeConfig
