import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getLoginInfo } from "./utils/LoginInfo";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const userInfo = getLoginInfo();

  if (!userInfo) {
    // If the user is not authenticated, redirect to the login page and preserve the current location
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
