// index.js
// For React Component index.jsx
// index.ts
// For React Component index.tsx

import React from "react";
import SideBar from "./sidebar";

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <React.Fragment>
      <SideBar />
      {children}
    </React.Fragment>
  );
};

export default Layout;
