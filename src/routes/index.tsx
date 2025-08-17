import App from "@/App";
import AdminLayout from "@/components/Layout/AdminLayout";
import About from "@/pages/About";
import Analytics from "@/pages/Analytics";
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
  //   {
  //     Component: AdminLayout,
  //     path: "/admin",
  //     children: [
  //       {
  //         path: "analytics",
  //         Component: Analytics,
  //       },
  //     ],
  //   },
]);
