import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="container">
          <div className="sidebar">Side</div>
          <div className="notes-container">Notes</div>
        </div>
      </div>
      <style jsx>
        {`
          .main {
            display: grid;
            place-content: center;
            min-height: 100vh;
            background: #f2f2f3;
          }
          .container {
            background: #ffffff;
            width: 768px;
            min-height: 500px;
            border-radius: 6px;
            padding: 10px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 10px;
          }
          .sidebar {
          }
          .notes-container {
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Home;
