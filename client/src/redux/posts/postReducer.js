import { PostActionTypes } from "./postTyps";

const INITIAL_STATE = {
  posts: []
}

export const postReducers = (state = INITIAL_STATE, action) => {
  const { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } = PostActionTypes

  switch(action.type) {
    case CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload
      }
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map(post => (
          (post._id === action.payload._id ? action.payload : post)
        ))
      }
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter(post => (post._id !== action.payload._id))
      }
    case LIKE:
      return {
        ...state,
        posts: state.posts.map(post => (
          (post._id === action.payload._id ? action.payload : post)
        ))
      }
    default:
      return state
  }
}