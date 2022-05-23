const PostMessage = require('../models/PostModel');


const postCtrl = {
  getAllPost: async (req, res) => {
    try {
      const postMessages = await PostMessage.find();

      res.status(200).json(postMessages);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getPost: async (req, res) => {
    const { params: { id } } = req 
    
    try {
      const post = await PostMessage.findById(id);

      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  createPost: async (req, res) => {
    const { body: {
      title, message, creator, 
      selectedFile, tags } } = req 

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
    
    try {
      await newPostMessage.save();

      res.status(201).json(newPostMessage);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  updatePost: async (req, res) => {
    const { 
      body: { title, message, creator, selectedFile, tags }, 
      params: { id }
    } = req

    const updatePost = await PostMessage.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true, runValidators: true }
    )

    res.status(200).json(updatePost)
  },
  deletePost: async (req, res) => {
    const { params: { id } } = req 
    
    try {
      await PostMessage.findByIdAndRemove({ _id: id });

      res.json({ message: "Post deleted successfully." });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  likePost: async (req, res) => {
    const { params: { id } } = req

    const post = await PostMessage.findById(id);

    const updatePostLikes = await PostMessage.findByIdAndUpdate( 
      { _id: id }, 
      { likeCount: post.likeCount + 1 }, 
      { new: true, runValidators: true }
    )

    res.status(200).json(updatePostLikes)
  }
}
module.exports = postCtrl