import React from "react";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({
  children = null,
}) => {
  return (
    <div>
      <h1> Content Manager</h1>
      {children}
    </div>
  );
};

export default BaseLayout;
