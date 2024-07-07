import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Hompage from "./pages/Hompage";
import RestaurantList from "./pages/RestaurantList";
import Order from "./pages/Order";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import RestaurantDetail from "./pages/RestaurantDetail";
import Checkoutpage from "./pages/Checkoutpage";
import Layout from "./layouts/Layout";
import NotFoundpage from "./pages/NotFoundpage";
import Forbiddenpage from "./pages/Forbiddenpage";
import Adminpage from "./pages/Adminpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hompage />} />
          <Route path="login" element={<Loginpage />} />
          <Route path="register" element={<Registerpage />} />
          <Route path="restaurant" element={<RestaurantList />} />
          <Route path="restaurant/:id" element={<RestaurantDetail />} />
          <Route path="order" element={<Order />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="checkout" element={<Checkoutpage />} />
          <Route path="forbidden" element={<Forbiddenpage />} />
          <Route path="*" element={<NotFoundpage />} />
        </Route>
        <Route path="/dashboard" element={<Adminpage />} />

        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
