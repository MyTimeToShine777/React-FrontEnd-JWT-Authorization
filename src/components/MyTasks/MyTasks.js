import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "./MyTask.css";

const MyTasks = () => {
  let [apiData, setapiData] = useState([]);
  let { authTokens } = useContext(AuthContext);
  useEffect(() => {
    getapiData();
  }, []);

  let getapiData = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    setapiData(data);
  };

  return (
    <div>
      <h1>My Tasks</h1>
      {apiData.map((api) => (
        <ul className="api" key={api.id}>
          <hr />
          <h3>Api from backend</h3>
          <hr />
          <li>Filename: {api.filename}</li>
          <li>Status: {api.status}</li>
          <li>CreatedBy: {api.createdby}</li>
          <li>AssignedTo: {api.assignedto}</li>
        </ul>
      ))}
    </div>
  );
};

export default MyTasks;
