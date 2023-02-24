import { Routes as WrapperRoutes, Route, BrowserRouter, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Admin from "./Pages/Admin"

export default function routes() {
    return (
            <WrapperRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/admin" element={<Admin />} />
            </WrapperRoutes>
    )
}
