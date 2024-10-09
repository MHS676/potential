import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
        {
            path: "/",
            element: <Home/>,
            loader: () => fetch('/categories.json'),
        },
        
    ]
  },
]);

export default router