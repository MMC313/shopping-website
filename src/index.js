import React from "react";
import ReactDOM from "react-dom/client"
import Header from './components/Header'
import FooterNav from './components/FooterNav'
import Footer from './components/Footer'
import RouteSwitch from './RouteSwitch'
import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <Header/>
        <RouteSwitch/>
        <FooterNav/>
        <Footer/>
    </React.StrictMode>
)