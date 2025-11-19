import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './pages/HomePage';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Kids from './pages/Kids';
import ItemDetail from "./pages/ItemDetail";
import Cart from "./components/Cart";
import SignUp_SignIn from "./layout/SignUp_SignIn";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product-details/:id" element={<ItemDetail />} />

        <Route element={<SignUp_SignIn />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App