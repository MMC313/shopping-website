import '../styles/Home.css'
import naraka from '../images/naraka-overlayed.jpg'

function Home(){
    return(
        <div className="content">
            <img className='content-overlay' src={naraka} alt="naraka" />
            <div className='content-description'>
                <h2>
                    PLUG-N-PLAY
                </h2>
                <h3>
                    WITH MARTIAN MACHINES
                </h3>
                <h4>
                    Limited Time Promotions for Peformance that is Out of this World
                </h4>
                <button>SHOP CARDS</button>
            </div>
            <div className='footer'>
                <div className='social'></div>
                <div>© 2023 Martian Machines Corporation</div>
                <div>All Rights Reserved.</div>
            </div>
        </div>
    )
}

export default Home;