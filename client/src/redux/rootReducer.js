import { combineReducers } from 'redux'
import { postReducers } from './posts/postReducer'

export default combineReducers({
  posts: postReducers 
})