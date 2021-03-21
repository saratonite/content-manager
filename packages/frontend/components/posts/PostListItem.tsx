import React from "react";
import { Post } from "@app-types";
const PostListItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="shadow mt-2 px-3 py-2">
      <h1 className="text-xl text-indigo-500">{post.title}</h1>
      <p className="text-lg text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostListItem;
