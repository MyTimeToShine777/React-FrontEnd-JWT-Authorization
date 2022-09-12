import "./App.css";
import ToolBar from "./components/ToolBar/ToolBar";
import SideBar from "./components/SideBar/SideBar";
import MyTasks from "./components/MyTasks/MyTasks";
import InProgress from "./components/InProgress/InProgress";
import Completed from "./components/Completed/Completed";
import NewProcess from "./components/NewProcess/NewProcess";
import LoginPage from "./components/LoginForm/LoginPage";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import React, { useState } from "react";
import BackDrop from "./components/BackDrop/BackDrop";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  const [sidebar, setsidebar] = useState(false);
  const toggleSidebar = () => {
    setsidebar((prevState) => !prevState);
  };

  return (
    <>
      <AuthProvider>
        <ToolBar openSidebar={toggleSidebar} />
        <BackDrop sidebar={sidebar} closeSidebar={toggleSidebar} />
        <SideBar sidebar={sidebar} closeSidebar={toggleSidebar} />
        <div>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<MyTasks />} exact />
              <Route path="/MyTasks" element={<MyTasks />} />
              <Route path="/InProgress" element={<InProgress />} />
              <Route path="/Completed" element={<Completed />} />
              <Route path="/NewProcess" element={<NewProcess />} />
            </Route>
            <Route path="/loginpage" element={<LoginPage />} />
          </Routes>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
