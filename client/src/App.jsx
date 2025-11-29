import { BrowserRouter, Routes, Route } from "react-router";

import Mens from './pages/Mens';
import Kids from './pages/Kids';
import Womens from './pages/Womens';
import Cart from "./components/Cart";
import HomePage from './pages/HomePage';
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ItemDetail from "./pages/ItemDetail";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import RootLayout from "./layout/RootLayout";
import Products from "./components/Products";

const App = () => {
  return (
    <BrowserRouter>
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
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;