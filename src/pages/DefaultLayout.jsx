import React from "react";
import Home from "./Home";
import AllProducts from "./AllProducts";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <div>
      {/* <Header />
      <div className="main">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="allProducts" element={<AllProducts />} />
        </Routes>
      </div>
      <Footer /> */}
    </div>
  );
}

export default DefaultLayout;
