import React from "react";
import Link from "next/link";
import { Post } from "@app-types";
const PostListItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className=" shadow-md mt-3 px-3 py-2">
      <h1 className="text-xl  leading-normal  text-indigo-500">
        <Link href={`/posts/[id]`} as={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </h1>
      <p className="text-md text-gray-700 font-mono">{post.body}</p>
    </div>
  );
};

export default PostListItem;
