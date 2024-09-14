
import Logout from "@/components/auth/Logout";
import ProfileAvatar from "@/components/dashboard/user/ProfileAvatar";
import { Button } from "@/components/ui/button";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { CarFront, LayoutDashboard, LogIn, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(selectCurrentUser);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-[100]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <CarFront />
          <span className="self-center text-2xl text-sky-600 font-semibold whitespace-nowrap dark:text-white uppercase">
            CareSpa
          </span>
        </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {user?.role === "admin" && (
            <>
              <NavLink to="/dashboard/admin/services/manage-services">
                <Button className="hidden md:flex items-center space-x-2 bg-blue-600 hover:bg-sky-500 text-white mr-2">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Button>
              </NavLink>
              <Logout />
            </>
          )}

          {user?.role === "user" && <ProfileAvatar />}
          {!user && (
            <>
              <NavLink to="/auth/login">
                <Button className="flex gap-3 text-white font-bold bg bg-sky-600">
                  Login <LogIn />
                </Button>
              </NavLink>
            </>
          )}

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded={isOpen ? "true" : "false"}
            onClick={handleToggle}
          >
            <span className="sr-only">Open main menu</span>
            <Menu />
          </button>
        </div>
        <div
          className={`md:hidden ${isOpen ? 'block bg-slate-50' : 'hidden'} fixed top-16 left-0 w-full dark:bg-gray-800 border border-gray-100 dark:border-gray-700`}
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 font-medium border-t border-gray-100 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 font-bold px-3 text-white bg-sky-500 rounded dark:bg-sky-600"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 font-bold px-3 text-white bg-sky-500 rounded dark:bg-sky-600"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 font-bold px-3 text-white bg-sky-500 rounded dark:bg-sky-600"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 font-bold px-3 text-white bg-sky-500 rounded dark:bg-sky-600"
                    : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 font-bold px-3 md:p-0 text-white bg-sky-500 rounded md:bg-transparent md:text-sky-600 md:dark:text-sky-500"
                    : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:dark:hover:text-sky-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 font-bold px-3 md:p-0 text-white bg-sky-500 rounded md:bg-transparent md:text-sky-600 md:dark:text-sky-500"
                    : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:dark:hover:text-sky-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 font-bold px-3 md:p-0 text-white bg-sky-500 rounded md:bg-transparent md:text-sky-600 md:dark:text-sky-500"
                    : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:dark:hover:text-sky-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 font-bold px-3 md:p-0 text-white bg-sky-500 rounded md:bg-transparent md:text-sky-600 md:dark:text-sky-500"
                    : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:dark:hover:text-sky-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
