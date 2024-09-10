import React, { useRef, useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  User,
  FileText,
  Table,
  Settings,
  PieChart,
  Layers,
  Key,
  ChevronDown,
  ArrowLeft,
  BookIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

type MenuItem = {
  name: string;
  icon?: React.ReactNode;
  href: string;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    href: "/dashboard",
    children: [
      { name: "Analytics", href: "/dashboard/analytics" },
      { name: "Overview", href: "/dashboard/overview" },
    ],
  },
  {
    name: "services",
    icon: <LayoutDashboard size={20} />,
    href: "/dashboard/services/manage-services",
    children: [
      { name: "manage-service", href: "/dashboard/services/manage-services" },
      { name: "manage-slots", href: "/dashboard/services/manage-slots" },
    ],
  },
  {
    name: "User",
    icon: <User size={20} />,
    href: "/dashboard/user",
    children: [
      { name: "manage-user", href: "/dashboard/user/manage-user" },
    ],
  },

  { name: "Calendar", icon: <Calendar size={20} />, href: "/calendar" },

  {
    name: "Recent Bookings",
    icon: <BookIcon size={20} />,
    href: "/dashboard/recent-bookings",
  },
  {
    name: "Bookings",
    icon: <BookIcon size={20} />,
    href: "/dashboard/bookings",
  },

  { name: "Profile", icon: <User size={20} />, href: "/dashboard/profile" },

  { name: "Tables", icon: <Table size={20} />, href: "/tables" },
  { name: "Settings", icon: <Settings size={20} />, href: "/settings" },
];



const otherItems: MenuItem[] = [
  { name: "Chart", icon: <PieChart size={20} />, href: "/chart" },
  {
    name: "UI Elements",
    icon: <Layers size={20} />,
    href: "/ui-elements",
    children: [
      { name: "Buttons", href: "/ui-elements/buttons" },
      { name: "Modals", href: "/ui-elements/modals" },
    ],
  },
  {
    name: "Authentication",
    icon: <Key size={20} />,
    href: "/authentication",
    children: [
      { name: "Login", href: "/authentication/login" },
      { name: "Register", href: "/authentication/register" },
    ],
  },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trigger = useRef<any>(null);

  const toggleItem = (name: string) => {
    setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sidebar = useRef<any>(null);

  const renderMenuItem = (item: MenuItem) => (
    <li key={item.name} className="mb-1">
      <button
        onClick={() => toggleItem(item.name)}
        className={`w-full flex items-center justify-between p-2 rounded text-left ${
          openItems[item.name] ? "bg-gray-700" : "hover:bg-gray-700"
        }`}
      >
        <span className="flex items-center">
          {item.icon}
          {item.children ? <span className="ml-3 ">{item.name}</span> : <Link className="ml-3" to={item.href}>{item.name}</Link>}
        </span>
        {item.children && (
          <ChevronDown
            size={16}
            className={`transform transition-transform text-gray-3${
              openItems[item.name] ? "rotate-180" : ""
            }`}
          />
        )}
      </button>
      {item.children && openItems[item.name] && (
        <ul className="mt-1 ml-6 space-y-1 text-slate-400 ">
          {item.children.map((child) => (
            <li key={child.name}>
              <Link
                to={child.href}
                className="block p-2 rounded hover:bg-gray-700"
              >
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <ArrowLeft className="text-white" />
        </button>
      </div>
      <nav className="w-64 bg-gray-800 text-gray-100 min-h-screen p-4 text-white">
        <div className="mb-6">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            MENU
          </h2>
          <ul className="space-y-1">{menuItems.map(renderMenuItem)}</ul>
        </div>
        <div>
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
            OTHERS
          </h2>
          <ul className="space-y-1">{otherItems.map(renderMenuItem)}</ul>
        </div>
      </nav>
    </aside>
  );
}
