import React from "react";
import ReactMarkdown from "react-markdown";
import { appendURL } from "@lib/httpClient";
import { Post } from "@app-types";
const PostView: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="">
      {post.cover && (
        <div className="p-3 ">
          <img
            className="h-80 w-full object-cover rounded-lg"
            src={appendURL(post.cover.url)}
          />
        </div>
      )}
      <h1 className="text-2xl text-indigo-500">{post.title}</h1>
      <div className="text-lg text-gray-600">
        <ReactMarkdown
          transformImageUri={(url) => appendURL(url)}
          children={post.body}
        ></ReactMarkdown>
      </div>
    </div>
  );
};

export default PostView;
