import { faEnvelope, faGlobe, faGlobeEurope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Contact() {
  return (
    <>
        <div className='untree-session pt-5 pb-5' id='contact-section'>
            <div className='container mt-5'>
                {/* contact header */}
                <div className='row mb-4'>
                    <div className='col-12 text-center'>
                        <h2 className='display-2 fs-1 fw-normal'>Get In Touch</h2>
                        <p className='mb-4 text-muted'>Far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
                {/* body input */}
                <div className='row'>
                    {/* user contact info */}
                    <div className='col-lg-7 mb-4'>
                        <form className="contact-form text-body-tertiary">
                            <div className="row text-start">
                                <div className="col-6">
                                    <div className="form-group mb-4">
                                        <label className="" htmlFor="fname">First name</label>
                                        <input type="text" className="form-control border-0 border-bottom" id="fname"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group mb-4">
                                        <label className="" htmlFor="lname">Last name</label>
                                        <input type="text" className="form-control  border-0 border-bottom" id="lname"/>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-4 text-start">
                                <label className="" htmlFor="email">Email address</label>
                                <input type="email" className="form-control  border-0 border-bottom" id="email"/>
                            </div>
                            <div className="form-group mb-4 text-start">
                                <label className="" htmlFor="message">Message</label>
                                <textarea name="" className="form-control  border-0 border-bottom" id="message" cols="30" rows="5"></textarea>
                            </div>
                            <div className='text-start '>
                                <button type="submit" className="btn btn-primary rounded-pill text-uppercase lh-lg">Send Message</button>
                            </div>
                        </form>
                    </div>
                    {/* company contact info */}
                    <div className='col-lg-4 ms-lg-auto'>
                        <h3 className='h5 mb-4'>Contact Info</h3>
                        <address className='text-black d-flex mb-2'>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} className='mt-1 me-2'/></span>
                            <span>43 Raymouth Rd. Baltemoer, London 3910</span>
                        </address>
                        <ul className='list-unstyled mb-4 pt-2 pb-3'>
                            <li className='mb-3'>
                                <a href="tel://0912345789" className='d-flex text-decoration-none text-dark'>
                                <FontAwesomeIcon icon={faPhone} className='mt-1 me-2'/>
                                <span>(+959)123-456-789</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="tel://0912345789" className='d-flex text-decoration-none text-dark'>
                                <FontAwesomeIcon icon={faPhone} className='mt-1 me-2'/>
                                <span>(+959)123-456-789</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href="mailto://info@mydomain.com" className=' text-decoration-none d-flex text-dark'>
                                    <FontAwesomeIcon icon={faEnvelope} className='mt-1 me-2'/>
                                    <span>info@mydomain.com</span>
                                </a>
                            </li>
                            <li className='mb-3'>
                                <a href='#' target='_blank' className='text-decoration-none d-flex text-dark'>
                                    <FontAwesomeIcon icon={faGlobeEurope} className='mt-1 me-2'/>
                                    <span>https://Colorlib.com</span>
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
