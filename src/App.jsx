import "./App.css";
import DefaultLayout from "./pages/DefaultLayout";
import DB from "./data.json";
import { useProductStore } from "./zustand/store";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import AllProducts from "./pages/AllProducts";
import DetailProduct from "./pages/DetailProduct";

function App() {
  const getProduct = useProductStore((state) => state.getProducts);
  getProduct(DB);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products/:category" element={<AllProducts />} />
        <Route path="/detailProduct" element={<DetailProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
