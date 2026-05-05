import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout.jsx";
import Main from "./pages/Main/Main.jsx";
import Analytics from "./pages/Analytics/Analytics.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Products from "./pages/Products/Products.jsx";
import Settings from "./pages/Settings/Settings.jsx";
import Auth from "./pages/Auth/Auth.jsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/auth/:action",
        element: <Auth />,
      },
    ],
  },
]);
