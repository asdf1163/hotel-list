import { combineReducers } from 'redux'
import { filterOptionsReducer } from './filterOptions/filterOptionsReducer'


export const rootReducer = combineReducers({
    filterOptions: filterOptionsReducer
})