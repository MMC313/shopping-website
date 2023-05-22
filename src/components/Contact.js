import '../styles/Contact.css'

function Contact(){
    return(
        <div className='contact-content'>
            <h1 className='contact-content-title'>CONTACT INFORMATION</h1>
            <div className='contact-content-cards'>
                <div className='contact-content-card'>
                    <h2 className='contact-content-card-title'>Customer Service</h2>
                    <div className='contact-content-card-information' > 
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>Martian Lifetime Online Support</div>
                            <div className='contact-content-card-info'>Support@martianmachines.com</div>
                            <div className='contact-content-card-info'>CustomerService@originpc.com</div>
                        </div>
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>24/7 Telephone Support</div>
                            <div className='contact-content-card-info'>1-877-MARTIAN (999-9999)</div><span>(US & Canada)</span>
                            <div className='contact-content-card-info'>1-877-MARTIAN (999-9999)</div><span>(International)</span>
                            <div className='contact-content-card-info'>1-877-MARTIAN (999-9999)</div><span>(Government & Corporate)</span>
                        </div>
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>Preexisting Martian AU customers</div>
                            <div className='contact-content-card-info'>1877 999 999</div><span>(Australia)</span>
                        </div>
                    </div>
                </div>
                <div className='contact-content-card'>
                    <h2 className='contact-content-card-title'>Sales & Other</h2>
                    <div className='contact-content-card-information' >
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>Sales Hours</div>
                            <div className='contact-content-card-info-dates'>Monday - Friday</div>
                            <div className='contact-content-card-info'>9:00am - 9:00pm EST</div>
                            <div className='contact-content-card-info-dates'>Saturday - Sunday, Holidays</div>
                            <div className='contact-content-card-info'>9:00am - 9:00pm EST</div>
                        </div>
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>Marketing</div>
                            <div className='contact-content-card-info'>Marketing@originpc.com</div>
                        
                        </div>
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>Government and Corporate</div>
                            <div className='contact-content-card-info'>GCBD@originpc.com</div>
                        </div>
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>General Inquries</div>
                            <div className='contact-content-card-info'>Info@originpc.com</div>
                        </div>
                    </div>
                </div>
                <div className='contact-content-card'>
                    <h2 className='contact-content-card-title'>Corporate Offices</h2>
                    <div className='contact-content-card-information' >
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>Headquarters</div>
                            <div className='contact-content-card-info'>115 N. McCarthy Blvd.</div>
                            <div className='contact-content-card-info'>Milpitas, CA 95035</div>
                        </div>
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>Florida Location</div>
                            <div className='contact-content-card-info'>12400 SW 134 Court Ste #8</div>
                            <div className='contact-content-card-info'>Miami, FL 33186</div>
                        </div>
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>Business Hours</div>
                            <div className='contact-content-card-info-dates'>Monday - Friday</div>
                            <div className='contact-content-card-info'>9:00am - 9:00pm EST</div>
                        </div>
                        <div className='contact-content-card-section'>
                            <div className='contact-content-card-info-title'>Human Resources</div>
                            <div className='contact-content-card-info'>HR@originpc.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact