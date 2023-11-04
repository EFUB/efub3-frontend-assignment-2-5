import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
