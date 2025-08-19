import App from "@/App";
import AdminLayout from "@/components/Layout/AdminLayout";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import About from "@/pages/About";
import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Bookings from "@/pages/User/Bookings";
import Verify from "@/pages/Verify";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        path: "about",
        Component: About,
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/admin",
    children: [
      {
        path: "analytics",
        Component: Analytics,
      },
      {
        path: "add-tour",
        Component: AddTour,
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: "/user",
    children: [
      {
        path: "bookings",
        Component: Bookings,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify",
    Component: Verify,
  },
]);
