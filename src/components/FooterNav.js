import '../styles/FooterNav.css'


function FooterNav(){
    return(
        <div className='footernav-links'>
            <div className='footernav-link-section'>
                <h4 className='footernav-link-section-header'>COMPANY</h4>
                <ul className='footernav-link-section-links'>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">T&C</a></li>
                    <li><a href="">Disclaimer</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Cookies Settings</a></li>
                    <li><a href="">Financing</a></li>
                </ul>
            </div>
            <div className='footernav-link-section'>
                <h4 className='footernav-link-section-header'>REVIEWS</h4>
                <ul className='footernav-link-section-links'>
                    <li><a href="">News</a></li>
                    <li><a href="">Testimonials</a></li>
                </ul>
            </div>
            <div className='footernav-link-section'>
                <h4 className='footernav-link-section-header'>SUPPORT</h4>
                <ul className='footernav-link-section-links'>
                    <li><a href="">Customer Service</a></li>
                    <li><a href="">FAQs</a></li>
                    <li><a href="">Wallpapers</a></li>
                    <li><a href="">Downloads</a></li>
                </ul>
            </div>
            <div className='footernav-link-section'>
                <h4 className='footernav-link-section-header'>COMMUNITY</h4>
                <ul className='footernav-link-section-links'>
                    <li><a href="">MARTIANMACHINESFAMILY</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Twitch Prime</a></li>
                    <li><a href="">Affiliates</a></li>
                </ul>
            </div>
            <div className='footernav-link-section'>
                <h4 className='footernav-link-section-header'>NEWSLETTER</h4>
                <ul className='footernav-link-section-links'>
                    <li>Get access to exclusive offers!</li>
                </ul>
                <button className='subscribe-btn'>SUBSCRIBE</button>
            </div>
        </div>
    )
}

export default FooterNav;