import React from "react";
import useSwr from "swr";
import { fetcher, appendURL } from "@lib/httpClient";
import BaseLayout from "@components/Layout/BaseLayout";

const index = () => {
  const { data, error } = useSwr("/home-page", fetcher);
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
          <div className="mt-6">
            <h1 className="text-4xl">{data.title}</h1>
            <p className="text-xl">{data.description}</p>
          </div>
        </div>
      )}
    </BaseLayout>
  );
};

export default index;
