// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux'
import  campuses from './campuses'
import  students  from './students'



const rootReducer = combineReducers({
  campuses: campuses,
  students: students
})

export default rootReducer
export  * from './campuses'
export * from './students'

