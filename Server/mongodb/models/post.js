import mongoose from "mongoose";

const Post = new mongoose.Schema({
  name: { type: String, require: true },
  prompt: { type: String, require: true },
  photo: { type: String, require: true },
});

const PostShema = mongoose.model("Post", Post);

export default PostShema;
