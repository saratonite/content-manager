import React from "react";
import { Post } from "@app-types";
const PostView: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div>
      <h1 className="text-2xl text-indigo-500">{post.title}</h1>
      <div className="text-lg text-gray-600">{post.body}</div>
    </div>
  );
};

export default PostView;
