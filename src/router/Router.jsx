import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/pages/signup";
import Login from "../components/pages/Login";
import Dashboard from "../components/pages/Dashboard";
import ProtectedRoute from "../components/pages/ProtectedRoute";
import Productos from "../components/pages/Productos";
import ProductoView from "../components/pages/ProductoView";
import ProductForm from "../components/pages/ProductForm";
import UpDate from "../components/pages/UpDate";


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
        path:"productos",  
        element:<Productos/>,
        errorElement:<>Not Found</>
    },

    {
        path:"productos/:id",  
        element:<ProductoView/>,
        errorElement:<>Not Found</>
    },

    {
        path:"productos/create",  
        element:<ProductForm/>,
        errorElement:<>Not Found</>
    },

    {
        path:"productos/update/:id",  
        element:<UpDate/>,
        errorElement:<>Not Found</>
    },
    
]);

export default router;