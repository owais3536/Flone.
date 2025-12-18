import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

import Mens from './pages/Mens';
import Kids from './pages/Kids';
import Womens from './pages/Womens';
import Cart from "./components/Cart";
import HomePage from './pages/HomePage';
import Orders from "./components/Orders";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ItemDetail from "./pages/ItemDetail";
import RootLayout from "./layout/RootLayout";
import Products from "./components/Products";
import DashboardLayout from "./layout/DashboardLayout";

const App = () => {

  return (
    <BrowserRouter>
      <ToastContainer autoClose={1500} />
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-details/:id" element={<ItemDetail />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;
