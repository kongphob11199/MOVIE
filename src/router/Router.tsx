import { createBrowserRouter } from "react-router-dom";

// pages
import ErrorPage from "../component/pages/ErrorPage";
import Home from "../component/pages/Home";
import PageFirst from "../component/pages/Home/Home_Page/Pages/PageFirst";
import MovieDetail from "../component/pages/Movies/MovieDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PageFirst />,
      },
      {
        path: "/:movie_id",
        element: <MovieDetail />,
      },
    ],
  },

  { path: "*", element: <ErrorPage /> },
]);
