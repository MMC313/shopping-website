import '../styles/Cart.css'
import close from '../images/x.svg' 


function Cart(props){
    let toggleCart = props.toggleCart

    function closeCart(){
        let cartContainer = document.getElementById("cart-component")

        
        cartContainer.classList.add("cart-hidden-animation")
        cartContainer.classList.remove("cart-shown")
        cartContainer.classList.add("cart-hidden")
        
        setTimeout(()=>{
            cartContainer.classList.remove("cart-hidden-animation")
            }
            ,475
        )
    }

    return(
        <div id='cart-component' className='cart-hidden'>
            <div className='cart-btn-container'><button className='cartCloseBtn' onClick={closeCart}><img className='cartCloseIcon' src={close} alt="Close" /></button></div>
            <div className='cart-shopping-container'>
                <div className='cart-shopping-title'>Shopping Bag</div>
                <div className='cart-list'>
                    <div>Stuff I want to buy</div>
                    <div>Stuff I want to buy</div>
                    <div>Stuff I want to buy</div>
                    <div>Stuff I want to buy</div>
                    <div>Stuff I want to buy</div>
                    <div>Stuff I want to buy</div>
                    <div>Stuff I want to buy</div>
                    <div>Stuff I want to buy</div>
                    <div>Stuff I want to buy</div>
                    <div>Stuff I want to buy</div>
                  

                </div>
                <button className='cart-checkout-btn'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default Cart;