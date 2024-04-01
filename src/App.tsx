// App.tsx
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { TProduct } from "./interfaces/Product";
import Home from "./pages/Home";
import Dashboard from "./pages/admin/Dashboard";
import ProductAdd from "./pages/admin/ProductAdd";
import instance from "./api";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [products, setProducts] = useState<TProduct[]>([]);
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await instance.get(`/products`);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);
  return (
    <>
      <div className="app">
        <Header />
        <main className="container" id="main">
          <Routes>
            {/* Client */}
            <Route path="/">
              <Route index element={<Home products={products} />} />
              <Route path="/shop/:id" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            {/* Admin */}
            <Route path="/admin">
              <Route index element={<Dashboard products={products} />} />
              <Route path="/admin/add" element={<ProductAdd />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
