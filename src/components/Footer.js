import '../styles/Footer.css'
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import instagram from '../images/instagram.svg'
import twitch from '../images/twitch.svg'
import youtube from '../images/youtube.svg'

function Footer(){
    return(
        <div className='footer'>
            <div className='social'>
                <button><img className='social-icon' src={twitch} alt="twitch" /></button>
                <button><img className='social-icon' src={youtube} alt="youtube" /></button>
                <button><img className='social-icon' src={instagram} alt="instagram" /></button>
                <button><img className='social-icon' src={twitter} alt="twitter" /></button>
                <button><img className='social-icon' src={facebook} alt="facebook" /></button>
            </div>
            <div>© 2023 Martian Machines Corporation</div>
            <div>All Rights Reserved.</div>
        </div>
    )
}

export default Footer;