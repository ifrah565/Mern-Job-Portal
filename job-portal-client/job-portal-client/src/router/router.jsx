import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import About from "../pages/About";
import Creatjob from "../pages/Creatjob";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {   path: "/",    element: <Home/>},
        {
          path: "/post-job",
          element:<Creatjob/>
        }
      ]
    },
  ]);

  export default router;