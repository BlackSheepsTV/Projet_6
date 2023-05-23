import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/layout.jsx"
import Home from "./pages/home/home.jsx";
import About from "./pages/about/about.jsx"
import Logement from "./pages/logement/logement.jsx"
import NotFound from "./pages/notFound";

const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
            path: "/about",
            element: <About />,
        },

        {
          path: "/logement/:logementName",
          element: <Logement />,
        },

        {
            path: "*",
            element: <NotFound />,
        },
      ],
    },
])

export default router;