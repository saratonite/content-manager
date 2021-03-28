import React from "react";
import Link from "next/link";
import { Post } from "@app-types";
import { appendURL } from "@lib/httpClient";
const PostListItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className=" shadow-md mt-3 px-3 py-2 flex">
      <div className="w-40">
        {post.cover ? (
          <img
            className="rounded-md object-cover"
            src={appendURL(post.cover.formats.thumbnail.url)}
          />
        ) : (
          <p>No Photo</p>
        )}
      </div>
      <div className="p-3">
        <h1 className="text-xl  leading-normal  text-indigo-500">
          <Link href={`/posts/[id]`} as={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </h1>
        <p className="text-md text-gray-700 font-mono">{post.description}</p>
      </div>
    </div>
  );
};

export default PostListItem;
