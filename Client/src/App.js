import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import {Home} from "./Pages/Home";
import {About} from "./Pages/About";
import {Cart} from "./Pages/Cart";
import {Login} from "./Pages/Login";
import {Register} from "./Pages/Register";
import {Products} from "./Pages/Products";
import { Footer } from "./Components/Footer";
import { ContactUs } from "./Pages/ContactUs";
import { Profile } from "./Pages/Profile";
import { AdminPanel } from "./Pages/AdminPanel";
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactUs" element={<ContactUs/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/adminpanel" element={<AdminPanel/>}/>
      
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

