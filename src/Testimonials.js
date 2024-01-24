import { faArrowLeft, faArrowRight, faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Profile2 from './images/person_2.jpg.webp'
import Profile3 from './images/person_3.jpg.webp'

export default function Testimonials() {
  return (
    <>
        <div className='untree-session'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 mb-5'>
                        <div className='mb-4'>
                            <span className='caption'>Testimonials</span>
                            <h2 className='heading'>Our Customers Feedback</h2>
                        </div>
                        <div className=''>
                            {/* 2 icons arrow */}
                            <a href='#' className='btn btn-secondary m-1'><FontAwesomeIcon icon={faArrowLeft} /></a>
                            <a href='#' className='btn btn-secondary'><FontAwesomeIcon icon={faArrowRight}/></a>
                        </div>
                    </div>
                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className=''>
                                    <div className='row'>
                                        <blockquote >
                                            Separated they <span className='higight'>live in Bookmarksgrove right at the coast of 
                                            the Semantics</span>, a large language ocean. A small river named Duden 
                                            flows by their place and supplies it with the necessary regelialia. 
                                        </blockquote>
                                    </div>
                                    <div className='author row'>
                                        <div className=' mr-3'>
                                            <img src={Profile2} alt='ProfileImg' className=' img-fluid rounded-pill' width='50px' height='50px'></img>
                                        </div>
                                        <div className='col w-100'>
                                            <strong className='d-flex'>James Anderson</strong>
                                            <span className='d-flex'>Facebook, Product Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <div className=''>
                                    <div className='row'>
                                        <blockquote >
                                            Separated they <span className='higight'>live in Bookmarksgrove right at the coast of 
                                            the Semantics</span>, a large language ocean. A small river named Duden 
                                            flows by their place and supplies it with the necessary regelialia. 
                                        </blockquote>
                                    </div>
                                    <div className='author row'>
                                        <div className=' mr-3'>
                                            <img src={Profile3} alt='ProfileImg' className=' img-fluid rounded-pill' width='50px' height='50px'></img>
                                        </div>
                                        <div className='col w-100'>
                                            <strong className='d-flex'>James Anderson</strong>
                                            <span className='d-flex'>Facebook, Product Lead</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <span className='m-1'><FontAwesomeIcon icon={faCircle} className='text-primary'/></span>
                            <span className='m-1'><FontAwesomeIcon icon={faCircle} className='text-secondary'/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}
