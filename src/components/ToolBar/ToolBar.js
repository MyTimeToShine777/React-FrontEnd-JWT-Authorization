import React, { useContext } from "react";
import { TiThMenu } from "react-icons/ti";

import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

import "./ToolBar.css";

const ToolBar = ({ openSidebar }) => {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="tool-bar">
      <div className="burger" onClick={openSidebar}>
        <TiThMenu />
      </div>
      <div className="title">
        <Link to="/Mytasks">
          <img src={require("../ToolBar/logo.png")} alt="" />
        </Link>
      </div>
      <ul>
        <li>{user && <p>Hello! {user.username}</p>}</li>
        <li>
          {user ? (
            <button className="btn" onClick={logoutUser}>
              Logout
            </button>
          ) : (
            <Link to="/loginpage">
              <button className="btn">Login</button>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ToolBar;
