import React from "react";
import { useRouter } from "next/router";

import PostView from "@components/posts/PostView";
import { useRequest } from "@lib/httpClient";
import BaseLayout from "@components/Layout/BaseLayout";

const PostPage = () => {
  const { query } = useRouter();

  const { id } = query;
  const { data, loading, error } = useRequest(`/posts?slug=${id}`);

  return (
    <BaseLayout>
      {data && data.length && <PostView post={data[0]} />}
    </BaseLayout>
  );
};

export default PostPage;
