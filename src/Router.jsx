import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MyCart from "./MyCart";
import Navbar from "./Navbar";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
