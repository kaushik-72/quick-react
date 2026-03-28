import { Navigate } from "react-router-dom";



const PrivateRoute = ({children}) => {
    let token = sessionStorage.getItem("token");
//   return token? children: <Navigate to={"/login"}/>
     return token ? children : <Navigate to={"/login"} />;
}

export default PrivateRoute;