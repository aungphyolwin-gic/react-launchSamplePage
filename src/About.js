import React from 'react'
import AboutImg from './images/about.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function () {
  return (
    <>
        <div className='untree-section pt-5 pb-5'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-md-8'>
                        <img src={AboutImg} className=' img-fluid' alt='AboutImg'/>
                    </div>
                    
                    <div className='col-md-4 text-start'>
                        {/* heading */}
                        <div className='mb-4'>
                            <span className='text-uppercase text-primary'>About</span>
                            <h2 className='display-2 fs-1 fw-normal'> About Us</h2>
                        </div>
                        {/* explain text */}
                        <div className='mb-4 text-muted'>
                            <p>Far far away, behind the word mountains, far from the countries 
                                Vokalia and Consonantia, there live the blind texts. Separated they 
                                live in Bookmarksgrove right at the coast</p>

                            <p>Separated they <span className='heading'>live in Bookmarksgrove right at the coast of the 
                                Semantics</span>, a large language ocean. A small river named Duden flows 
                                by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        {/* list  */}
                        <ul className='mb-4 list-unstyled'>
                            <li><FontAwesomeIcon icon={faCheck} className='text-primary me-3'/>There live the blind texts</li>
                            <li><FontAwesomeIcon icon={faCheck} className='text-primary me-3'/>Far far away behind the word</li>
                            <li><FontAwesomeIcon icon={faCheck} className='text-primary me-3'/>There place and supplies</li>
                        </ul> 
                        {/* count  */}
                        <div className='row'>
                            <div className='col-lg-6'>
                                <span className='d-block display-2 fs-2 fw-normal pb-2'>
                                    <span data-number="59">59</span>
                                    <span>M</span>
                                </span>
                                <span className=' text-uppercase text-muted small'>Members</span>
                            </div>
                            <div className='col-lg-6'>
                                <span className='d-block display-2 fs-2 fw-normal pb-2'>
                                    <span data-number="14">14</span>
                                </span>
                                <span className=' text-uppercase text-muted small'>Team</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}
