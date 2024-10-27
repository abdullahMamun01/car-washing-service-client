import React from "react";
import {
  LayoutDashboard,
  Calendar,
  User,
  Settings,
  BookIcon,
  WalletCards,
} from "lucide-react";



type MenuItem = {
  name: string;
  role?: "admin" | "user" | "public";
  icon?: React.ReactNode;
  href: string;
  children?: MenuItem[];
};


export const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      href: "/dashboard",
      role: "public",
      children: [
        { name: "Analytics", href: "/dashboard/analytics" },
        { name: "Overview", href: "/dashboard/overview" },
      ],
    },
    {
      name: "services",
      role: "admin",
      icon: <LayoutDashboard size={20} />,
      href: "/dashboard/services/manage-services",
      children: [
        {
          name: "manage-service",
          href: "/dashboard/admin/services/manage-services",
        },
        { name: "manage-slots", href: "/dashboard/admin/services/manage-slots" },
      ],
    },
    {
      name: "User",
      role: "admin",
      icon: <User size={20} />,
      href: "/dashboard/user",
      children: [{ name: "manage-user", href: "/dashboard/admin/manage-user" }],
    },
  
    { name: "Calendar", icon: <Calendar size={20} />, href: "/calendar" },
  
    {
      name: "Recent Bookings",
      icon: <BookIcon size={20} />,
      role: "admin",
      href: "/dashboard/admin/recent-bookings",
    },
    {
      name: "Payment List",
      icon: <WalletCards size={20} />,
      role: "admin",
      href: "/dashboard/admin/payment-list",
    },
  
    {
      name: "Profile",
      role: "user",
      icon: <User size={20} />,
      href: "/dashboard/user/profile",
    },
    {
      name: "Bookings",
      icon: <BookIcon size={20} />,
      role: "user",
      href: "/dashboard/user/bookings",
    },
  
    { name: "Settings", icon: <Settings size={20} />, href: "/settings" },
  ];