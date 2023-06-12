import '../styles/Shop.css'


function changeTitle(event){
    let shopTitle = document.querySelector(".shop-nav-title-current")

    shopTitle.textContent = event.target.innerHTML

    console.log(event.target.innerHTML)
   
}

function Shop(){


    return(
        <div className='shop-component'>
            <div className='shop-nav'>
                <div className='shop-nav-title'>
                    <div>Shop /</div>
                    <div className='shop-nav-title-current'>All Graphics Cards</div>
                </div>
                <ul className='shop-nav-filter'>
                    <li><button onClick={changeTitle} className='shop-nav-filter-btn'>All Graphics Cards</button></li>
                    <li><button onClick={changeTitle} className='shop-nav-filter-btn'>NVIDIA RTX 3000 Series</button></li>
                    <li><button onClick={changeTitle} className='shop-nav-filter-btn'>NVIDIA RTX 2000 Series</button></li>
                    <li><button onClick={changeTitle} className='shop-nav-filter-btn'>AMD RX 7000 Series</button></li>
                    <li><button onClick={changeTitle} className='shop-nav-filter-btn'>AMD RX 6000 series</button></li>
                </ul>
            </div>
            <div className='shop-items'>
                <div className='shop-item'>
                    <img className='shop-item-image' src="lol" alt="" />
                    <div className='shop-item-desc'></div>
                    <div className='shop-item-price'></div>
                    <button className='shop-item-buy-btn'></button>
                </div>
            </div>
        </div>
    )

}

export default Shop;