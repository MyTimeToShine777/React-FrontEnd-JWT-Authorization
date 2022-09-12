import React from "react";
import "./BackDrop.css";

const BackDrop = ({ sidebar, closeSidebar }) => {
  return (
    <div
      className={sidebar ? "backdrop backdrop_open" : "backdrop"}
      onClick={closeSidebar}
    ></div>
  );
};

export default BackDrop;
