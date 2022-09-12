import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";

import React from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoutes = () => {
  let { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate to="/loginpage" />;
};

export default PrivateRoutes;
