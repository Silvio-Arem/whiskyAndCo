import { Routes as WrapperRoutes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import { AdminItem } from "./Pages/AdminItem";

export default function routes() {
  return (
    <WrapperRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/admin/users/:id' element={<AdminItem />} />
      <Route path='/admin/products/:id' element={<AdminItem />} />
      <Route path='/admin/categories/:id' element={<AdminItem />} />
      <Route path='/admin/orders/:id' element={<AdminItem />} />
      <Route path='/products' element={<Products />} />
      <Route path='/login' element={<Login />} />
      <Route path='/checkout' element={<Checkout />} />
    </WrapperRoutes>
  );
}
