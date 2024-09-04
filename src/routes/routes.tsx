import DefaultLayout from "@/layout/DefaultLayout";

import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "./../../App";
import RootLayout from "@/layout/RootLayout";
import LoginPage from "@/pages/auth/LoginPage";
import RegistrationPage from "@/pages/auth/RegistrationPage";
import ServicePage from "@/pages/services/ServicePage";
import ServiceManagement from "@/pages/dashboard/services/ServiceManagement";
import ServiceDetailsPage from "@/pages/services/ServiceDetailsPage";
import BookingPage from "@/pages/booking/BookingPage";
import SingleService from "@/components/services/test/SingleService";
import PaymentSuccessWaitingPage from "@/pages/PaymentSuccessPage";

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
        path: "services",

        element: <ServiceManagement />,
      },
    ],
  },
]);

export default router;
