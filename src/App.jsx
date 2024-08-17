import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import MyProducts from "./components/MyProducts/MyProducts";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/payment";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/myProducts" element={<MyProducts />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
