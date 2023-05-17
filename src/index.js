import React from "react";
import ReactDOM from "react-dom/client"
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Header/>
        <Home/>
        <Footer/>
    </React.StrictMode>
)