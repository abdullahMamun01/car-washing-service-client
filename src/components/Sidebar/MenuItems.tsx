import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Users,
  Car,
  Calendar,
  ClipboardList,
  Settings,
  DollarSign,
} from "lucide-react";

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  href: string;
  children?: MenuItem[];
};

export const menuItems: MenuItem[] = [
  {
    name: "Dashboard",
    icon: <LayoutDashboard size={20} />,
    href: "/dashboard",
  },
  { name: "Customers", icon: <Users size={20} />, href: "/customers" },
  {
    name: "Services",
    icon: <Car size={20} />,
    href: "/services",
    children: [
      {
        name: "Service List",
        icon: <ClipboardList size={20} />,
        href: "/services/list",
      },
      {
        name: "Add Service",
        icon: <ChevronRight size={20} />,
        href: "/services/add",
      },
    ],
  },
  { name: "Appointments", icon: <Calendar size={20} />, href: "/appointments" },
  { name: "Reports", icon: <DollarSign size={20} />, href: "/reports" },
  { name: "Settings", icon: <Settings size={20} />, href: "/settings" },
];
