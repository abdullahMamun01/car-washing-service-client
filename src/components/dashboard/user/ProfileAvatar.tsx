import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import imageUrlParser from "@/lib/imageUrlParser";
import { useGetUserQuery } from "@/redux/api/userApi";
import { logout, selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CircleArrowLeft, LayoutDashboard } from "lucide-react";

import { Link } from "react-router-dom";

export default function ProfileAvatar() {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch()
  const {data} = useGetUserQuery(undefined)

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div>
      {user?.role === "user" ? (
        <DropdownMenu>
          <DropdownMenuTrigger className="border-0">
            <Avatar className="border-2 border-slate-300" >
              <AvatarImage  src={imageUrlParser(data?.image as string)} alt="@shadcn" />
              <AvatarFallback className="bg-blue-600 text-white">
                {user?.name.slice(0, 1)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="text-primary bg-white shadow-md w-30 rounded-md px-4 py-2">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex mb-1">
              <>
                <LayoutDashboard className="mr-2 w-5 h-5 text-primary" />
                <Link to="/dashboard/user/profile">Profile</Link>
              </>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button onClick={handleLogout} className="flex">
                <CircleArrowLeft className="mr-2 w-5 h-5 text-red-500" /> Logout
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Avatar className="">
          <AvatarImage  src={user?.image || ''} alt="@shadcn" />
          <AvatarFallback className="bg-blue-600 text-white">
            {user?.name.slice(0, 2)}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
