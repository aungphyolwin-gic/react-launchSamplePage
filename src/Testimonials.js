import { faArrowLeft, faArrowRight, faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Profile2 from './images/person_2.jpg.webp'
import Profile3 from './images/person_3.jpg.webp'

export default function Testimonials() {
  return (
    <>
        <div className='untree-session pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 mb-5'>
                        <div className='mb-4 text-start'>
                            <span className='text-uppercase text-primary'>Testimonials</span>
                            <h2 className='display-2 fs-1 fw-normal'>Our Customers Feedback</h2>
                            <div className=''>
                                {/* 2 icons arrow */}
                                <a href='#' className='btn btn-secondary m-1'><FontAwesomeIcon icon={faArrowLeft} /></a>
                                <a href='#' className='btn btn-secondary '><FontAwesomeIcon icon={faArrowRight}/></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-md-6 text-start'>
                                <div className=''>
                                    <div className='row'>
                                        <blockquote className=' blockquote text-wrap fst-italic fs-6'>
                                            "Separated they <span className='higight'>live in Bookmarksgrove right at the coast of 
                                            the Semantics</span>, a large language ocean. A small river named Duden 
                                            flows by their place and supplies it with the necessary regelialia."
                                        </blockquote>
                                    </div>
                                    <div className='author d-flex'>
                                            <div className=' me-3'>
                                                <img className='img-fluid rounded-pill' width="50px" height="50px" src={Profile2} alt='profileImg'/>
                                            </div>
                                            <div className=' fw-light'>
                                                <strong className='d-block'> James Anderson</strong> 
                                                <span className='d-block text-muted'>Facebook, Products Lead</span>
                                            </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 text-start'>
                                <div className=''>
                                    <div className='row'>
                                        <blockquote className=' blockquote  text-wrap fst-italic fs-6'>
                                            Separated they <span className='higight'>live in Bookmarksgrove right at the coast of 
                                            the Semantics</span>, a large language ocean. A small river named Duden 
                                            flows by their place and supplies it with the necessary regelialia. 
                                        </blockquote>
                                    </div>
                                    <div className='author d-flex'>
                                            <div className=' me-3'>
                                                <img className='img-fluid rounded-pill' width="50px" height="50px" src={Profile3} alt='profileImg'/>
                                            </div>
                                            <div className=' fw-light'>
                                                <strong className='d-block'> James Anderson</strong> 
                                                <span className='d-block text-muted'>Facebook, Products Lead</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <span className='m-1'><FontAwesomeIcon icon={faCircle} className='text-primary fa-sm'/></span>
                            <span className='m-1'><FontAwesomeIcon icon={faCircle} className='text-secondary fa-sm'/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}
