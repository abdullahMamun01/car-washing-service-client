
import RootLayout from "@/layout/RootLayout";
import ServicePage from "@/pages/services/ServicePage";
import App from "./../../App";
import { Outlet } from "react-router-dom";
import ServiceDetailsPage from "@/pages/services/ServiceDetailsPage";
import BookingPage from "@/pages/booking/BookingPage";
import PaymentSuccessWaitingPage from "@/pages/PaymentSuccessPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegistrationPage from "@/pages/auth/RegistrationPage";
import DefaultLayout from "@/layout/DefaultLayout";
import { ServiceManagement } from "@/components/dashboard/services/ServiceManagement";
import SlotManagement from "@/components/dashboard/slot/SlotManagement";
import UserManagement from "@/pages/dashboard/users/UserManagement";
import { BookingsOverview } from "@/components/dashboard/bookings/BookingsOverview";
import UserBookings from "@/components/dashboard/user/UserBooking";
import Profile from "@/components/dashboard/user/Profile";

interface Route {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
  role?: "admin" | "user" | "public";
  children?: Route[];
}

const routes: Route[] = [
  {
    path: "/",
    component: RootLayout,
    children: [
      {
        path: "/",
        component: App,
        exact: true,
        role: "public",
      },
      {
        path: "/services",
        component: () => <Outlet />,
        role: "public",
        children: [
          {
            path: "/",
            component: ServicePage,
            exact: true,
          },
          {
            path: ":serviceId",
            component: ServiceDetailsPage,
          },
        ],
      },
      {
        path: "/booking",
        component: BookingPage,
        role: "user", // Assuming only logged-in users should access booking
      },
      {
        path: "/payment/success",
        component: PaymentSuccessWaitingPage,
        role: "user", // Assuming only logged-in users should access payment success page
      },
    ],
  },
  {
    path: "/auth",
    component: () => <Outlet />, // Assuming you use `Outlet` for nested routes
    role: "public",
    children: [
      {
        path: "login",
        component: LoginPage,
        exact: true,
      },
      {
        path: "register",
        component: RegistrationPage,
      },
    ],
  },
  {
    path: "/dashboard",
    component: DefaultLayout,
    role: "admin", // Assuming dashboard is for admins
    children: [
      {
        path: "services/manage-services",
        component: ServiceManagement,
      },
      {
        path: "services/manage-slots",
        component: SlotManagement,
      },
      {
        path: "user/manage-user",
        component: UserManagement,
      },
      {
        path: "recent-bookings",
        component: BookingsOverview,
      },
      {
        path: "bookings",
        component: UserBookings,
      },
      {
        path: "profile",
        component: Profile,
      },
    ],
  },
];

export default routes;
