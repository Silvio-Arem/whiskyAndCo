import { Routes as WrapperRoutes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Admin from "../Pages/Admin";
import Products from "../Pages/Products/index";
import LoginPage from "../Pages/Login";
import Checkout from "../Pages/Checkout";
import Orders  from "../Pages/Orders";
import Order from "../Pages/Order";
import ProductAdmin from "../Pages/ProductAdmin";
import UserAdmin from "../Pages/UserAdmin";
import CategoryAdmin from "../Pages/CategoryAdmin";
import Product from "../Pages/Product";
import RegisterPage from "../Pages/Register";
import { AuthProvider } from "../Context/AuthContext";
import BrandAdmin from "../Pages/BrandAdmin";
import { AuthRoute } from "./AuthRoute";

export default function routes() {
  return (
    <WrapperRoutes>
      <Route path='/' element={ <Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/product' element={<Products />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/profile' element={<AuthRoute Admin={<Profile />} Client={<Profile />} />}/>
      <Route path='/profile/orders' element={<AuthRoute Admin={<Orders />} Client={<Orders />} />} />
      <Route path='/profile/orders/:id' element={<AuthRoute Admin={<Order />} Client={<Order />} />} />
      <Route path='/checkout/:id' element={<AuthRoute Admin={<Checkout />} Client={<Checkout />} />} />
      <Route path='/admin' element={<AuthRoute Admin={<Admin/>} Client={<Home />} />} />
      <Route path='/admin/users/new' element={<AuthRoute Admin={<UserAdmin/>} Client={<Home />} />} />
      <Route path='/admin/users/:id' element={<AuthRoute Admin={<UserAdmin/>} Client={<Home />} />} />
      <Route path='/admin/users/:id/orders' element={<AuthRoute Admin={<Orders/>} Client={<Home />} />} />
      <Route path='/admin/users/:id/orders/:id' element={<AuthRoute Admin={<Order />} Client={<Home />} />} />
      <Route path='/admin/products/new' element={<AuthRoute Admin={<ProductAdmin />} Client={<Home />} />} />
      <Route path='/admin/products/:id' element={<AuthRoute Admin={<ProductAdmin />} Client={<Home />} />} />
      <Route path='/admin/brands/new' element={<AuthRoute Admin={<BrandAdmin />} Client={<Home />} />} />
      <Route path='/admin/brands/:id' element={<AuthRoute Admin={<BrandAdmin />} Client={<Home />} />} />
      <Route path='/admin/categories/new' element={<AuthRoute Admin={<CategoryAdmin />} Client={<Home />} />} />
      <Route path='/admin/categories/:id' element={<AuthRoute Admin={<CategoryAdmin />} Client={<Home />} />} />
      <Route path='/admin/orders/new' element={<AuthRoute Admin={<Order />} Client={<Home />} />} />
      <Route path='/admin/orders/:id' element={<AuthRoute Admin={<Order />} Client={<Home />} />} />
    </WrapperRoutes>
  );
}
