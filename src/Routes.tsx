import { Routes as WrapperRoutes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Admin from "./Pages/Admin"
import Products from "./Pages/Products"
import Login from "./Pages/Login"

export default function routes() {
    return (

        <WrapperRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
        </WrapperRoutes>

    )
}
