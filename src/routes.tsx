import { createBrowserRouter } from "react-router-dom";
import Roots from "./pages/Roots";
import HomPage from "./pages/HomPage";
import GameDetails from "./pages/GameDetails";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <HomPage />,
      },
      {
        path: "games/:slug",
        element: <GameDetails />,
      },
    ],
  },
]);

export default router;
