import Post from "../models/Post.js";
import User from "../models/User.js";
import logger from "../logger.js";
/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();

    const post = await Post.find();
    logger.info("New post uploaded")
    res.status(201).json(post);
  } catch (err) {
    logger.error("Events Error: Post Creation Error");
    res.status(409).json({ message: err.message });
  }
};

/* READ */
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    logger.error("Events Error: Post Fetch Error");
    res.status(404).json({ message: err.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    logger.info("Post fetch operation");
    res.status(200).json(post);
  } catch (err) {
    logger.error(`Events Error: Post Fetch Error of User ${req.params}`);
    res.status(404).json({ message: err.message });
  }
};

/* UPDATE */
export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );
    logger.info("Like/Dislike operation");
    res.status(200).json(updatedPost);
  } catch (err) {
    logger.error(`Events Error: Post Like / Unlike Error of User`+e.message);
    res.status(404).json({ message: err.message });
  }
};
