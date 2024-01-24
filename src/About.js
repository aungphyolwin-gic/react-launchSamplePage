import React from 'react'
import AboutImg from './images/about.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function () {
  return (
    <>
        <div className='untree-section'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-lg-8'>
                        <img src={AboutImg} className=' img-fluid' alt='AboutImg'/>
                    </div>
                    
                    <div className='col-lg-4'>
                        {/* heading */}
                        <div className='mb-4'>
                            <span className='caption'>About</span>
                            <h2 className='heading'> About Us</h2>
                        </div>
                        {/* explain text */}
                        <div className='mb-4'>
                            <p>Far far away, behind the word mountains, far from the countries 
                                Vokalia and Consonantia, there live the blind texts. Separated they 
                                live in Bookmarksgrove right at the coast</p>

                            <p>Separated they <span className='heading'>live in Bookmarksgrove right at the coast of the 
                                Semantics</span>, a large language ocean. A small river named Duden flows 
                                by their place and supplies it with the necessary regelialia.</p>
                        </div>
                        {/* list  */}
                        <ul className='mb-4 list-unstyled'>
                            <li><FontAwesomeIcon icon={faCheck} className='text-primary'/>There live the blind texts</li>
                            <li><FontAwesomeIcon icon={faCheck} className='text-primary'/>Far far away behind the word</li>
                            <li><FontAwesomeIcon icon={faCheck} className='text-primary'/>There place and supplies</li>
                        </ul> 
                        {/* count  */}
                        <div className='row'>
                            <div className='col-lg-6'>
                                <span className='d-block'>
                                    <span data-number="59">59</span>
                                    <span>M</span>
                                </span>
                                <span className='caption2'>Members</span>
                            </div>
                            <div className='col-lg-6'>
                                <span className='d-block'>
                                    <span data-number="14">14</span>
                                </span>
                                <span className='caption2'>Team</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}
