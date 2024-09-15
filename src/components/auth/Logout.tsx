import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { CircleArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

interface LogoutButtonProps {
    className?: string;
  }

export default function Logout({className}: LogoutButtonProps) {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Button onClick={handleLogout}className={` md:flex items-center space-x-2 bg-sky-600 max-sm:bg-sky-700 max-sm:text-slate-100 hover:bg-sky-500 text-white mr-2  ${className}`}>
      <CircleArrowLeft className="mr-2 w-5 h-5 text-red-500" /> Logout
    </Button>
  );
}
