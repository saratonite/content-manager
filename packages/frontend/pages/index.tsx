import React, { useState, useEffect, useCallback } from "react";
import BaseLayout from "../components/Layout/BaseLayout";
import { client } from "../lib/httpClient";

const index = () => {
  const [state, setState] = useState({
    data: [],
  });
  const fetchPosts = useCallback(() => {
    client
      .get(`/posts`)
      .then((res) => {
        setState({ data: res.data });
      })
      .catch((error) => {
        console.log(`Error `, error);
      });
  }, []);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <BaseLayout>
      <div>
        {state.data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </BaseLayout>
  );
};

export default index;
