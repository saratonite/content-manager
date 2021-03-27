import React from "react";
import { NavLink } from "@components/Links/NavLink";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({
  children = null,
}) => {
  return (
    <div className=" max-w-3xl w-full mx-auto bg-white flex flex-col h-full">
      <div className="bg-indigo-500 text-white px-2 py-3 flex  items-center">
        <h1 className="text-2xl font-thin"> Content Manager</h1>
        <nav className="flex ml-auto">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/posts">Posts</NavLink>
        </nav>
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default BaseLayout;
