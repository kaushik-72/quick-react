import Dashboard from "../pages/Dashboard"
import Layout from "../pages/Layout"
import Login from "../pages/Login"
import { createBrowserRouter } from "react-router-dom"
import PrivateRoute from "./PrivateRoute.jsx";


export const myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:(
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
                ),  
                //? this check while on default to diplay the dashboard or the login page
            },
            {
                path:"/login",
                element:<Login/>
            },
        ],
    },
]);