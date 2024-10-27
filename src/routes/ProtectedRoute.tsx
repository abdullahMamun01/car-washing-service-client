import { selectCurrentUser, useToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";

import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
type ProtectRouteProps = {
  role: "user" | "admin";
  children: ReactNode;
};



export default function ProtectedRoute({ children, role }: ProtectRouteProps) {
  const token = useAppSelector(useToken);

  const authUser = useAppSelector(selectCurrentUser)
  if (!token || !authUser) {
    return <Navigate to="/login" replace={true} />;
  }
  const user = verifyToken(token);
  const currentTime = Math.floor(Date.now() / 1000);

  if(token && role !== user.role ){

    return <Navigate to="/dashboard/user/profile" replace={true} />;
  }

  if (role !== user.role || user.exp < currentTime){

   return <Navigate to="/auth/login" replace={true} />;
  }
  
  

  return children;
}
