import { faEnvelope, faGlobe, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Contact() {
  return (
    <>
        <div className='untree-session'>
            <div className='container'>
                {/* contact header */}
                <div className='row mb-4'>
                    <div className='col-12 text-center'>
                        <h2>Get In Touch</h2>
                        <p>Far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
                {/* body input */}
                <div className='row'>
                    {/* user contact info */}
                    <div className='col-lg-7'>
                        <form class="contact-form">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="" for="fname">First name</label>
                                        <input type="text" class="form-control border-0 border-bottom" id="fname"/>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="" for="lname">Last name</label>
                                        <input type="text" class="form-control  border-0 border-bottom" id="lname"/>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="" for="email">Email address</label>
                                <input type="email" class="form-control  border-0 border-bottom" id="email"/>
                            </div>
                            <div class="form-group">
                                <label class="" for="message">Message</label>
                                <textarea name="" class="form-control  border-0 border-bottom" id="message" cols="30" rows="5"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                    {/* company contact info */}
                    <div className='col-lg-4 ms-lg-auto'>
                        <h3 className='h5 mb-4'>Contact Info</h3>
                        <address className='text-black d-flex'>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt}/></span>
                            <span>43 Raymouth Rd. Baltemoer, London 3910</span>
                        </address>
                        <ul className='list-unstyled mb-4'>
                            <li><a href="tel://0912345789" className='d-flex'>
                                <FontAwesomeIcon icon={faPhone} className='mt-1 mr-2'/>
                                <span>(+959)123-456-789</span>
                                </a>
                            </li>
                            <li><a href="tel://0912345789" className='d-flex'>
                                <FontAwesomeIcon icon={faPhone} className='mt-1 mr-2'/>
                                <span>(+959)123-456-789</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto://info@launch.com" className=' text-decoration-none d-flex'>
                                    <FontAwesomeIcon icon={faEnvelope} className='mt-1 mr-2'/>
                                    <span>info@launch.com</span>
                                </a>
                            </li>
                            <li>
                                <a href='#' target='_blank' className='text-decoration-none'>
                                    <FontAwesomeIcon icon={faGlobe}/>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
