import Post from "../models/post.model.js";
import Image from "../models/image.model.js";

export const post = async (req, res) => {
  try {
    const { title, description, state, city, pincode, contact, images } =
      req.body;
    let imagesArray = [];
    for (let i of images) {
      const newImage = new Image({
        base64: i,
      });
      if (newImage) {
        await newImage.save();
        imagesArray.push(newImage._id);
      }
    }
    const newPost = new Post({
      postedBy: req.user._id,
      title: title,
      description,
      state,
      city,
      pincode,
      contact,
      images: imagesArray,
    });
    if (newPost) {
      newPost.save();
      res.status(200).json({ message: "Posted Successfully" });
    }
  } catch (error) {
    console.log("error in Post controller", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};

export const getPosts = async (req, res) => {
  try {
    let posts = await Post.find().populate("images");
    if (!posts) {
      return res.status(200).json([]);
    }
    res.status(200).json({ posts });
  } catch (error) {
    console.log("error in getPosts controller", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
