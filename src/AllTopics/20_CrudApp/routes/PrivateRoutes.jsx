//? used to protect a component

import { Navigate } from "react-router-dom"
import Dashboard from "../pages/Dashboard";



const PrivateRoutes = (children) => {

    let token =  sessionStorage.getItem("token")

  return token? children : <Navigate to={"/login"}/>;

//?   the conditional operator returns the Dashboard when true/login else the login
}

export default PrivateRoutes