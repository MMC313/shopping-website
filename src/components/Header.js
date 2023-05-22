import '../styles/Header.css'
import hubIcon from '../images/github.png'
import logo from '../images/M.png'
import menu from '../images/menu.svg'
import cart from '../images/shopping-cart.svg'
import { useEffect, useState } from 'react'


function dropDown(){
    const dropContent = document.querySelector(".dropdown-content")
    const dropContentLink = document.querySelectorAll('.dropdown-content-link')
    dropContent.classList.toggle("visible-dropdown-content")
    dropContentLink.forEach( link => link.classList.toggle("visible-dropdown-content-link"))
}


let mobileHeader = (
    <div>
        <div className="header">
            <h1 className='title'>MartianMachines</h1>
            <div className='dropdown-button-container'>
                <button onClick={dropDown} className='dropdown-button'><img src={menu} alt="menu" className='svg' /></button>
            </div>
            <img src={logo} alt="logo" className='logo'/>
            <div className='header-hub'>
                <img src={hubIcon} alt="GitHub Icon" className='hubIcon'/>
                <button className='cart'><img src={cart} alt="shopping cart" className='svg' /></button>
            </div>
        </div>
        <div className='dropdown-content'>
            <a className='dropdown-content-link' href="/">Home</a>
            <a className='dropdown-content-link' href="">Shop Cards</a>
            <a className='dropdown-content-link' href="">Database</a>
            <a className='dropdown-content-link' href="/contact">Contact</a>
        </div>
    </div>
)

let desktopHeader = (
        <div className="header">
            <div className='header-linkHub'>
                <div className='header-linkHub-name'>
                    <img src={logo} alt="logo" className='logo'/>
                    <h1 className='header-linkHub-title'>ARTIAN MACHINES</h1>
                </div>
                <ul className='header-links'>
                    <li><a className='header-link' href="/">HOME</a></li>
                    <li><a className='header-link' href="">SHOP</a></li>
                    <li><a className='header-link' href="">DATABASE</a></li>
                    <li><a className='header-link' href="/contact">CONTACT</a></li>
                </ul>
            </div>
            <div className='header-hub'>
                <img src={hubIcon} alt="GitHub Icon" className='hubIcon'/>
                <button className='cart'><img src={cart} alt="shopping cart" className='svg' /></button>
            </div>
        </div>
)



function Header(){

    const [headerScene, setHeaderScene] = useState(undefined)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(()=>{

        if(windowWidth>767){
            setHeaderScene(desktopHeader)
        }else setHeaderScene(mobileHeader)

        function handleResize(){
            setWindowWidth(window.innerWidth)
            
            if(windowWidth>767){
                setHeaderScene(desktopHeader)
            }else setHeaderScene(mobileHeader)
        }
        window.addEventListener("resize", handleResize)
    })

    return(
        headerScene
    )
}

export default Header;