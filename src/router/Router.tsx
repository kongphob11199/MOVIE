import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../component/pages/ErrorPage";
import Home from "../component/pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
]);
