import React from "react";
import useSWR from "swr";
import BaseLayout from "@components/Layout/BaseLayout";
import { client, fetcher } from "@lib/httpClient";
import PostListItem from "@components/posts/PostListItem";

const PostsPage = () => {
  const { data, error } = useSWR("/posts", fetcher);
  return (
    <BaseLayout>
      {data && (
        <div>
          {data.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </div>
      )}
    </BaseLayout>
  );
};

export default PostsPage;
