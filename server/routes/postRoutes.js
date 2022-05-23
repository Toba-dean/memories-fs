const express = require('express');
const router = express.Router();

const postCtrl = require('../controller/postCtrl')


const { getAllPost, getPost, createPost, updatePost, deletePost, likePost } = postCtrl

router.route('/posts').get(getAllPost).post(createPost)
router.route('/post/:id').get(getPost).patch(updatePost).delete(deletePost)
router.route('/post/:id/like').patch(likePost)

module.exports = router 