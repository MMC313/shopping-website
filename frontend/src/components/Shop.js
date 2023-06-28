import '../styles/Shop.css'





function Shop(props){

    async function update(event){
        let testData = await props.props
        let shopTitle = document.querySelector(".shop-nav-title-current")
    

        console.log(event.target.id)
        shopTitle.textContent = event.target.innerHTML
        console.log(testData)
        return testData
       
    }


    return(
        <div className='shop-component'>
            <div className='shop-nav'>
                <div className='shop-nav-title'>
                    <div>Shop /</div>
                    <div className='shop-nav-title-current'>All Graphics Cards</div>
                </div>
                <ul className='shop-nav-filter'>
                    <li><button onClick={update} className='shop-nav-filter-btn'>All Graphics Cards</button></li>
                    <li><button onClick={update} id='GeForce 30' className='shop-nav-filter-btn'>NVIDIA RTX 3000 Series</button></li>
                    <li><button onClick={update} id='GeForce 20' className='shop-nav-filter-btn'>NVIDIA RTX 2000 Series</button></li>
                    <li><button onClick={update} className='shop-nav-filter-btn'>AMD RX 7000 Series</button></li>
                    <li><button onClick={update} className='shop-nav-filter-btn'>AMD RX 6000 series</button></li>
                </ul>
            </div>
            <div className='items'>
                
            </div>
        </div>
    )

}

export default Shop;