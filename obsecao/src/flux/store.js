import {createStore, combineReducers} from 'redux'
import reducers from './reducers'

const reducer = combineReducers(reducers)

const store = createStore(reducer, {})

export default store