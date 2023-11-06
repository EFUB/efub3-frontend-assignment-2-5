import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/layout/layout";
import MainPage from "../page/main/mainPage";
import DetailPage from "../page/detail/detailPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
