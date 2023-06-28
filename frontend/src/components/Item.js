import '../styles/Item.css'



function Item(props){

    return(
        <div className='item'>
            <img className='item-image' src="lol" alt="" />
            <div className='item-desc'></div>
            <div className='item-price'></div>
            <button className='item-buy-btn'></button>
        </div>
    )
}

export default Item;