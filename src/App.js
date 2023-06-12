import React from "react";
import Cart from './components/Cart'
import FooterNav from './components/FooterNav'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Shop from './components/Shop'
import Contact from './components/Contact'
import Header from './components/Header'
import { useState } from "react";




function App(){


    function toggleCart(){
        const cartComponent = document.getElementById("cart-component")
        cartComponent.classList.toggle("cart-hidden")
        cartComponent.classList.add("cart-shown")
    }

    return(
        <div>
            <BrowserRouter>
                <Header toggleCart={toggleCart}/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop/>} />
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>
            <FooterNav/>
            <Footer/>
            <Cart toggleCart={toggleCart}/>
        </div>
    )
}

export default App;