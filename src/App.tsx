import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CartPage from "./components/CartPage";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import BookSeeMore from "./components/BookSeeMore";
import React, { useState } from "react";
export const MyContext = React.createContext({});
function App() {
  const [chosenCat, setChosenCat] = useState("All");

  return (
    <MyContext.Provider value={{ chosenCat, setChosenCat }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories/:category" element={<ProductDetails />} />
          <Route path="/BookSeeMore" element={<BookSeeMore />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
