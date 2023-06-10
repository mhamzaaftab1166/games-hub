import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/layout";
import HomePage from "./pages/HomePage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "games/:id", element: <GameDetailPage></GameDetailPage> },
    ],
  },
]);
export default route;
