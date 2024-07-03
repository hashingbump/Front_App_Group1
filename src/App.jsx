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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/" element={<Hompage />} />
        <Route path="/restaurant" element={<RestaurantList />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkoutpage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
