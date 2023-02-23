import { Routes as WrapperRoutes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Admin from "./Pages/Admin"

export default function Routes() {
    return (
        <BrowserRouter>
            <WrapperRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<Admin />} />
            </WrapperRoutes>
        </BrowserRouter>
    )
}