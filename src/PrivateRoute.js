import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function PrivateRoute(props) {
  const isLogin = useSelector((state) => state.user.isLogin);
  console.log("isLogin:", isLogin);

  return isLogin ? props.children : <Navigate to="/login" />;
}

export default PrivateRoute;
