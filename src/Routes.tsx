import { Routes as WrapperRoutes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import Orders  from "./Pages/Orders";
import Order from "./Pages/Order";
import Product from "./Pages/Product";
import User from "./Pages/User";
import Category from "./Pages/Category";

export default function routes() {
  return (
    <WrapperRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/admin/users/:id' element={<User />} />
      <Route path='/admin/products/:id' element={<Product />} />
      <Route path='/admin/categories/:id' element={<Category />} />
      <Route path='/admin/orders/:id' element={<Order />} />
      <Route path='/profile/orders' element={<Orders />} />
      <Route path='/products' element={<Products />} />
      <Route path='/login' element={<Login />} />
      <Route path='/checkout' element={<Checkout />} />
    </WrapperRoutes>
  );
}
