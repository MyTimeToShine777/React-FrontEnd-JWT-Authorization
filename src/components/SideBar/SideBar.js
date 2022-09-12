import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { MdIncompleteCircle } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";

const SideBar = ({ sidebar, closeSidebar }) => {
  return (
    <>
      <nav
        className={sidebar ? "sidebar sidebar_open" : "sidebar"}
        onClick={closeSidebar}
      >
        <li>DashBoard</li>
        <li>
          <Link to="/Mytasks">
            <FaTasks />
            My Tasks
          </Link>
        </li>
        <li>
          <Link to="/InProgress">
            <GiProgression />
            In Progress
          </Link>
        </li>
        <li>
          <Link to="/Completed">
            <MdIncompleteCircle />
            Completed
          </Link>
        </li>
        <li>
          <Link to="/NewProcess">
            <VscServerProcess />
            New Process
          </Link>
        </li>
      </nav>
    </>
  );
};

export default SideBar;
