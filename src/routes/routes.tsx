import DefaultLayout from "@/layout/DefaultLayout";

import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./../../App";
import RootLayout from "@/layout/RootLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegistrationPage from "@/pages/auth/RegistrationPage";
import ServicePage from "@/pages/services/ServicePage";

import ServiceDetailsPage from "@/pages/services/ServiceDetailsPage";
import BookingPage from "@/pages/booking/BookingPage";
import PaymentSuccessWaitingPage from "@/pages/PaymentSuccessPage";

import { ServiceManagement } from "@/components/dashboard/services/ServiceManagement";

import { BookingsOverview } from "@/components/dashboard/bookings/BookingsOverview";
import UserManagement from "@/pages/dashboard/users/UserManagement";
import SlotManagement from "@/components/dashboard/slot/SlotManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/services",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <ServicePage />,
          },
          {
            path: ":serviceId",
            element: <ServiceDetailsPage />,
          },
        ],
      },
      {
        path: "booking",
        element: <BookingPage />,
      },
      {
        path: "payment/success",
        element: <PaymentSuccessWaitingPage />,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",

        element: <LoginPage />,
      },
      {
        path: "register",

        element: <RegistrationPage />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DefaultLayout />,
    children: [
      {
        path: "services/manage-services",
        element: <ServiceManagement />,
      },
      {
        path: "services/manage-slots",
        element: <SlotManagement />,
      },
      {
        path: "user/manage-user",
        element: <UserManagement />,
      },
      {
        path: "bookings/recent",
        element: <BookingsOverview />,
      },

      
    ],
  },
]);

export default router;
