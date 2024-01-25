import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faDribbbleSquare, faFacebook, faFacebookSquare, faInstagram, faInstagramSquare, faLinkedin, faPinterest, faPinterestSquare, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <>
        <div className='footer-section bg-body-secondary'>
            <div className='container'>
                <div className='row'>
                    <div class="col-lg-4">
                        <div class="widget">
                            <h3>About Launch<span class="text-primary">.</span> </h3>
                            <p>Far far away, behind the word mountains, far from the countries 
                                Vokalia and Consonantia, there live the blind texts.</p>
                        </div> 
                        <div class="widget">
                            <h3>Connect</h3>
                            <ul class="list-unstyled row justify-content-start ">
                                <li className='col p-0'><a href="#" className=' text-white '><span className='bg-secondary rounded-pill  '><FontAwesomeIcon icon={faInstagram}  /></span></a></li>
                                <li className='col p-0'><a href="#" className=' text-white'><span className='bg-secondary rounded-pill  '><FontAwesomeIcon icon={faTwitter}  /></span></a></li>
                                <li className='col p-0'><a href="#" className=' text-white'><span className='bg-secondary rounded-pill  '><FontAwesomeIcon icon={faFacebook}  /></span></a></li>
                                <li className='col p-0'><a href="#" className=' text-white'><span className='bg-secondary rounded-pill  '><FontAwesomeIcon icon={faLinkedin}  /></span></a></li>
                                <li className='col p-0'><a href="#" className=' text-white'><span className='bg-secondary rounded-pill  '><FontAwesomeIcon icon={faPinterest}  /></span></a></li>
                                <li className='col p-0'><a href="#" className=' text-white'><span className='bg-secondary rounded-pill  '><FontAwesomeIcon icon={faDribbble}  /></span></a></li>

                            </ul>
                        </div> 
                    </div>

                    {/* Projects */}
                    <div class="col-lg-2 ml-auto">
                        <div class="widget">
                            <h3>Projects</h3>
                            <ul class="list-unstyled float-left text-decoration-none">
                                <li><a href="#" className=' text-decoration-none text-secondary'>La Lega Stadium</a></li>
                                <li><a href="#" className=' text-decoration-none text-secondary'>France Building</a></li>
                                <li><a href="#" className=' text-decoration-none text-secondary'>22 New Homes</a></li>
                                <li><a href="#" className=' text-decoration-none text-secondary'>Manage Center</a></li>
                                <li><a href="#" className=' text-decoration-none text-secondary'>Sports Hall</a></li>
                            </ul>
                        </div> 
                    </div>

                    {/* Service  */}
                    <div class="col-lg-2">
                        <div class="widget">
                            <h3 className='mb-4'>Services</h3>
                            <ul class="list-unstyled float-left mb-2">
                            <li><a href="#" className='text-decoration-none text-secondary'>Architect</a></li>
                            <li><a href="#" className='text-decoration-none text-secondary'>Interior Design</a></li>
                            <li><a href="#" className='text-decoration-none text-secondary'>Landscape Design</a></li>
                            <li><a href="#" className='text-decoration-none text-secondary'>Consultancy</a></li>
                            </ul>
                        </div> 
                    </div>

                    {/* Contact  */}
                    <div class="col-lg-3">
                        <div class="widget">
                        <h3>Contact</h3>
                        <address>43 Raymouth Rd. Baltemoer, London 3910</address>
                        <ul class="list-unstyled links mb-4">
                            <li><a href="tel://11234567890" className='text-decoration-none text-secondary'>+1(123)-456-7890</a></li>
                            <li><a href="tel://11234567890" className='text-decoration-none text-secondary'>+1(123)-456-7890</a></li>
                            <li><a href="mailto:info@mydomain.com" className='text-decoration-none text-secondary'>info@mydomain.com</a></li>
                        </ul>
                        </div> 
                    </div>
                </div>

                {/* copy right row  */}
                <div className='row mt-5'>
                    <div class="col-12 text-center">
                        <p>
                            Copyright ©<script>document.write(new Date().getFullYear());</script>
                            2024 All rights reserved | This template is made with 
                            <FontAwesomeIcon icon={faHeart} className='text-danger'/> by 
                            <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}
