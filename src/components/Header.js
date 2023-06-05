import '../styles/Header.css'
import hubIcon from '../images/github.png'
import logo from '../images/M.png'
import menu from '../images/menu.svg'
import cartIcon from '../images/shopping-cart.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function dropDown(){
    const dropContent = document.querySelector(".dropdown-content")
    const dropContentLink = document.querySelectorAll('.dropdown-content-link')
    dropContent.classList.toggle("visible-dropdown-content")
    dropContentLink.forEach( link => link.classList.toggle("visible-dropdown-content-link"))
}

function Header(props){

    const [isMobile, setIsMobile] = useState("")
    
    let toggleCart = props.toggleCart

    useEffect(()=>{
        if(window.innerWidth>=768){
            setIsMobile(false)
        }else setIsMobile(true)

        window.addEventListener("resize", handleResize)
        
    },[window.innerWidth])

    function handleResize(){
        if(window.innerWidth>=768){
            setIsMobile(false)
        }else setIsMobile(true)
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
                    <button onClick={toggleCart} className='cart'><img src={cartIcon} alt="shopping cart" className='svg' /></button>
                </div>
            </div>
            <div className='dropdown-content'>
                <Link className='dropdown-content-link' to='/'>Home</Link>
                <Link className='dropdown-content-link' to='/'>Shop</Link>
                <Link className='dropdown-content-link' to='/'>Database</Link>
                <Link className='dropdown-content-link' to='/contact'>Contact</Link>
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
                <div className='header-links'>
                    <Link className='header-link' to='/'>HOME</Link>
                    <Link className='header-link' to='/'>SHOP</Link>
                    <Link className='header-link' to='/'>DATABASE</Link>
                    <Link className='header-link' to='/contact'>CONTACT</Link>
                </div>
            </div>
            <div className='header-hub'>
                <img src={hubIcon} alt="GitHub Icon" className='hubIcon'/>
                <button onClick={toggleCart} className='cart'><img src={cartIcon} alt="shopping cart" className='svg' /></button>
            </div>
        </div>
    )
    

    return(
       <div className='header-component'>
           {isMobile ? mobileHeader : desktopHeader}
       </div>
    )
         
}

export default Header;