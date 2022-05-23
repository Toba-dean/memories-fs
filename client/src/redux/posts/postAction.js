import { PostActionTypes } from "./postTyps"
import * as api from '../../api'


const { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } = PostActionTypes

// since we are working with asychronous data we are using redux thunk!!

export const getPost = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts()

    dispatch({
      type: FETCH_ALL,
      payload: data
    })
  } catch (error) {
    console.log(error.response);
  }
}

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post)

    dispatch({
      type: CREATE,
      payload: data
    })
  } catch (error) {
    console.log(error.response);
  }
}

export const updatePost = (id, post) => async dispatch => {
  try {
    const { data } = await api.updatePost(id, post)

    dispatch({
      type: UPDATE,
      payload: data
    })
  } catch (error) {
    console.log(error.response);
  }
}

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id)

    dispatch({
      type: DELETE,
      payload: id
    })
  } catch (error) {
    console.log(error);
  }
}

export const likePost = id => async dispatch => {
  try {
    const { data } = await api.likePost(id)

    dispatch({
      type: UPDATE,
      payload: data
    })
  } catch (error) {
    console.log(error.response);
  }
}