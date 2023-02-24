import { Routes as WrapperRoutes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Admin from "./Pages/Admin"
import Products from "./Pages/Products"

export default function Routes() {
    return (

        <WrapperRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/products" element={<Products />} />
        </WrapperRoutes>

    )
}