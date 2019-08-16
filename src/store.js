import { createStore, applyMiddleware } from 'redux'
import ticketReducer from './reducers/ticket-reducer'
import thunk from 'redux-thunk'

const store = createStore(ticketReducer, applyMiddleware(thunk))

window.store = store

export default store
