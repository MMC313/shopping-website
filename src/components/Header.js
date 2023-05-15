import '../styles/Header.css'
import hubIcon from '../images/github.png'
import logo from '../images/M.png'
import menu from '../images/menu.svg'
import cart from '../images/shopping-cart.svg'


function dropDown(){
    const dropContent = document.querySelector(".dropdown-content")
    const dropContentLink = document.querySelectorAll('.dropdown-content-link')
    dropContent.classList.toggle("visible-dropdown-content")
    dropContentLink.forEach( link => link.classList.toggle("visible-dropdown-content-link"))
}

function Header(){
    return(
        <div>
            <div className="header">
                <h1 className='title'>MartianMachines</h1>
                <div className='dropdown-button-container'>
                    <button onClick={dropDown} className='dropdown-button'><img src={menu} alt="menu" /></button>
                </div>
                <img src={logo} alt="logo" className='logo'/>
                <div className='header-hub'>
                    <img src={hubIcon} alt="GitHub Icon" className='hubIcon'/>
                    <button className='cart'><img src={cart} alt="shopping cart" /></button>
                </div>
            </div>
            <div className='dropdown-content'>
                <a className='dropdown-content-link' href="">Home</a>
                <a className='dropdown-content-link' href="">Shop Graphics Cards</a>
                <a className='dropdown-content-link' href="">Contact</a>
            </div>
        </div>
    )
}

export default Header;