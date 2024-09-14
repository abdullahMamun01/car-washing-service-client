import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import RootLayout from "@/layout/RootLayout";
import ServicePage from "@/pages/services/ServicePage";
import App from "./../../App";
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
import ProtectedRoute from "./ProtectedRoute";
import CustomerFeedbackPage from "@/pages/feedback/CustomerFeedbackPage";
import ErrorPage from "@/components/error/ErrorPage";
import PaymentList from "@/components/dashboard/payments/PaymentList";
import AboutPage from "@/pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage /> ,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "services",
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
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "payment/success",
        element: <PaymentSuccessWaitingPage />,
      },
      {
        path: "feedback",
        element: <CustomerFeedbackPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Outlet />,
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
        path: "admin",
        element: (
          <ProtectedRoute role="admin">
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            path: "services/manage-services",
            element: <ServiceManagement />,
          },
          {
            path: "services/manage-slots",
            element: <SlotManagement />,
          },
          {
            path: "manage-user",
            element: <UserManagement />,
          },
          {
            path: "recent-bookings",
            element: <BookingsOverview />,
          },
          {
            path: "payment-list",
            element: <PaymentList/>,
          },
        ],
      },
      {
        path: "user",
        element: (
          <ProtectedRoute role="user">
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            path: "bookings",
            element: <UserBookings />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
  {
    path:"*" ,
    element: <ErrorPage/>
  }
]);

export default router;
