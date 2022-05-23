import axios from 'axios';

// const url = 'http://localhost:5000/api/v1';

export const fetchPosts = () => axios.get(`/posts`);
export const createPost = newPost => axios.post(`/posts`, newPost);
export const likePost = id => axios.patch(`post/${id}/like`);
export const updatePost = (id, updatedPost) => axios.patch(`/post/${id}`, updatedPost);
export const deletePost = id => axios.delete(`/post/${id}`);