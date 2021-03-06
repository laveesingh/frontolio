import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const configureStore = initialState =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, logger)),
  )

export default configureStore
