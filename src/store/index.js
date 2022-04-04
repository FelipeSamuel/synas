import { createStore, compose, applyMiddleware } from 'redux'

import reducers from './ducks'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()))

export default store;