import { Routes as WrapperRoutes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Admin from "./Pages/Admin";
import Products from "./Pages/Products/index";
import LoginPage from "./Pages/Login";
import Checkout from "./Pages/Checkout";
import Orders  from "./Pages/Orders";
import Order from "./Pages/Order";
import ProductAdmin from "./Pages/ProductAdmin";
import UserAdmin from "./Pages/UserAdmin";
import CategoryAdmin from "./Pages/CategoryAdmin";
import Product from "./Pages/Product";
import RegisterPage from "./Pages/Register";

export default function routes() {
  return (
    <WrapperRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile/orders' element={<Orders />}/>
      <Route path='/admin' element={<Admin />} />
      <Route path='/admin/users/new' element={<UserAdmin />} />
      <Route path='/admin/users/:id' element={<UserAdmin />} />
      <Route path='/admin/users/:id/orders' element={<Orders />} />
      <Route path='/admin/users/:id/orders/:id' element={<Order />} />
      <Route path='/admin/products/new' element={<ProductAdmin />} />
      <Route path='/admin/products/:id' element={<ProductAdmin />} />
      <Route path='/admin/categories/new' element={<CategoryAdmin />} />
      <Route path='/admin/categories/:id' element={<CategoryAdmin />} />
      <Route path='/admin/orders/new' element={<Order />} />
      <Route path='/admin/orders/:id' element={<Order />} />
      <Route path='/profile/orders' element={<Orders />} />
      <Route path='/profile/orders/:id' element={<Order />} />
      <Route path='/products' element={<Products />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/checkout/:id' element={<Checkout />} />
    </WrapperRoutes>
  );
}
