import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faDribbbleSquare, faFacebook, faFacebookSquare, faInstagram, faInstagramSquare, faLinkedin, faPinterest, faPinterestSquare, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <>
        <footer>
            <div className='footer-section bg-body-secondary pt-5'>
                <div className='container'>
                    <div className='row text-start'>
                        <div class="col-lg-4">
                            <div class="widget">
                                <h3 className='display-2 fw-normal fs-5 mb-4'>About Launch<span class="text-primary">.</span> </h3>
                                <p className='text-secondary fs-6 display-3'>Far far away, behind the word mountains, far from the countries 
                                    Vokalia and Consonantia, there live the blind texts.</p>
                            </div> 
                            <div class="widget">
                                <h3 className='display-2 fw-normal fs-5 mb-4'>Connect</h3>
                                <ul class="list-unstyled d-flex justify-content-start ">
                                    <li className='p-1'><a href="#" className='btn btn-secondary rounded-circle text-white '><FontAwesomeIcon icon={faInstagram}  /></a></li>
                                    <li className='p-1 '><a href="#" className='btn btn-secondary rounded-circle text-white'><FontAwesomeIcon icon={faTwitter}  /></a></li>
                                    <li className='p-1'><a href="#" className='btn btn-secondary rounded-circle text-white'><FontAwesomeIcon icon={faFacebook}  /></a></li>
                                    <li className='p-1 '><a href="#" className='btn btn-secondary rounded-circle text-white'><FontAwesomeIcon icon={faLinkedin}  /></a></li>
                                    <li className='p-1'><a href="#" className='btn btn-secondary rounded-circle text-white'><FontAwesomeIcon icon={faPinterest}  /></a></li>
                                    <li className='p-1 '><a href="#" className='btn btn-secondary rounded-circle text-white'><FontAwesomeIcon icon={faDribbble}  /></a></li>

                                </ul>
                            </div> 
                        </div>

                        {/* Projects */}
                        <div class="col-lg-2 ml-auto">
                            <div class="widget">
                                <h3 className='display-2 fw-normal fs-5 mb-4'>Projects</h3>
                                <ul class="list-unstyled float-left ">
                                    <li className='mb-2'><a href="#" className=' text-decoration-none text-secondary fs-6'>La Lega Stadium</a></li>
                                    <li className='mb-2'><a href="#" className=' text-decoration-none text-secondary fs-6'>France Building</a></li>
                                    <li className='mb-2'><a href="#" className=' text-decoration-none text-secondary fs-6'>22 New Homes</a></li>
                                    <li className='mb-2'><a href="#" className=' text-decoration-none text-secondary fs-6'>Manage Center</a></li>
                                    <li className='mb-2'><a href="#" className=' text-decoration-none text-secondary fs-6'>Sports Hall</a></li>
                                </ul>
                            </div> 
                        </div>

                        {/* Service  */}
                        <div class="col-lg-2">
                            <div class="widget">
                                <h3 className='display-2 fw-normal fs-5 mb-4'>Services</h3>
                                <ul class="list-unstyled float-left mb-2">
                                <li className='mb-2'><a href="#" className='text-decoration-none text-secondary'>Architect</a></li>
                                <li className='mb-2'><a href="#" className='text-decoration-none text-secondary'>Interior Design</a></li>
                                <li className='mb-2'><a href="#" className='text-decoration-none text-secondary'>Landscape Design</a></li>
                                <li className='mb-2'><a href="#" className='text-decoration-none text-secondary'>Consultancy</a></li>
                                </ul>
                            </div> 
                        </div>

                        {/* Contact  */}
                        <div class="col-lg-3">
                            <div class="widget">
                            <h3 className='display-2 fw-normal fs-5 mb-4'>Contact</h3>
                            <address className='mb-2 text-secondary'>43 Raymouth Rd. Baltemoer, London 3910</address>
                            <ul class="list-unstyled links mb-4">
                                <li className='mb-2'><a href="tel://11234567890" className='text-decoration-none text-secondary'>+1(123)-456-7890</a></li>
                                <li className='mb-2'><a href="tel://11234567890" className='text-decoration-none text-secondary'>+1(123)-456-7890</a></li>
                                <li className='mb-2'><a href="mailto:info@mydomain.com" className='text-decoration-none text-secondary'>info@mydomain.com</a></li>
                            </ul>
                            </div> 
                        </div>
                    </div>

                    {/* copy right row  */}
                    <div className='row mt-4'>
                        <div class="col-12 text-center pt-3 pb-3">
                            <p className='text-secondary'>
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                                2024 All rights reserved | This template is made with 
                                <FontAwesomeIcon icon={faHeart} className='text-danger'/> by 
                                <a href="https://colorlib.com" target="_blank" className=' text-decoration-none'> Colorlib</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>

  )
}
