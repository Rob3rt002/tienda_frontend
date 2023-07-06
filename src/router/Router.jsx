import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Products from "../components/pages/Products";
import Signup from "../components/pages/signup";
import Login from "../components/pages/Login";
import Dashboard from "../components/pages/Dashboard";
import ProtectedRoute from "../components/pages/ProtectedRoute";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
        errorElement:<>Not Found</>
    },

    {
        path:"/signup",
        element:<Signup/>,
        errorElement:<>Not Found</>
    },

    {
        path:"/",
        element:<ProtectedRoute />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard/>
            }
        ]
        
    },

    {
        path:"products",  
        element:<Products/>,
        errorElement:<>Not Found</>
    }
]);

export default router;