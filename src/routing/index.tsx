import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { urlPaths } from "./urlPaths";
import Admin from "../component/admin/Admin";
import Manager from "../component/manager/Manager";
import User from "../component/user/User";
import Login from "../component/login/Login";

export const PrivateRoute = () => {
    const {admin, manager, user} = urlPaths;
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path={admin} element={<Admin />} />
                <Route path={manager} element={<Manager />} />
                <Route path={user} element={<User />} /> 
            </Routes>
        </Router>
    )
}

export default PrivateRoute;