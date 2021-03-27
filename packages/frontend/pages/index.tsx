import React from "react";
import useSwr from "swr";
import { useRequest, appendURL } from "@lib/httpClient";
import BaseLayout from "@components/Layout/BaseLayout";

const index = () => {
  const { data, error } = useRequest("/home-page");
  return (
    <BaseLayout>
      {!data && <p>Loading..</p>}
      {data && (
        <div>
          <div className="">
            <img
              className="mt-6 rounded-md shadow h-60 w-full object-cover object-center "
              src={appendURL(data.cover.url)}
            />
          </div>
          <div className="mt-6 text-center">
            <h1 className="text-4xl text-gray-400 font-thin">{data.title}</h1>
            <p className="text-xl text-gray-500">{data.description}</p>
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

export default index;
