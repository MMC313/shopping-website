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


const baseUrl = "https://martianmachines-backend-production.up.railway.app/results"

const options= {
    method: 'GET'
}

async function loadInfo(){
    let res = await fetch(baseUrl,options)
    let data = await res.json()

    return data;
}

loadInfo()

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
                    <Route path="/shop" element={<Shop props={loadInfo()}/>}  />
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