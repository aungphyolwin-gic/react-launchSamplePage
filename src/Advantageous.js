import { faArrowsRotate, faBriefcase, faClone, faPoll } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function () {
  return (
    <>
        <div className='untree-session pt-5 pb-5'>
            <div className='container'>
                <div className='row mb-4'>
                    <div className='col-12 text-center'>
                        <h2 className='display-2 fs-1 fw-normal'>Advantageous of using our products </h2>
                        <p className=' text-muted'>Far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>

                {/* Advantageous 1 */}
                <div className='row'>
                    <div className='col-lg-6 mb-4'>
                        <div className='service d-flex'>
                            <div className=' mb-4 me-4'>
                                <FontAwesomeIcon icon={faPoll} className=' fa-2x text-info '/>
                            </div>
                            <div className='service-content text-start'>
                                <h3 className=' fw-normal fs-5 text-black'>Grow Your Business</h3>
                                <p className='text-muted'>Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href='#' className=' text-decoration-none fs-6 fa-sm'>Learn More</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Advantageous 2 */}
                    <div className='col-lg-6 mb-4'>
                        <div className='service d-flex'>
                            <div className=' mb-4 me-4'>
                                <FontAwesomeIcon icon={faArrowsRotate} className=' fa-2x text-warning '/>
                            </div>
                            <div className='service-content text-start'>
                                <h3 className=' fw-normal fs-5 text-black'>Build Products</h3>
                                <p className='text-muted'>Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href='#' className=' text-decoration-none fs-6  fa-sm'>Learn More</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Advantageous 3 */}
                    <div className='col-lg-6 mb-4'>
                        <div className='service d-flex'>
                            <div className=' mb-4 me-4'>
                                <FontAwesomeIcon icon={faBriefcase} className=' fa-2x text-danger '/>
                            </div>
                            <div className='service-content text-start'>
                                <h3 className=' fw-normal fs-5 text-black'>Success Every Day</h3>
                                <p className='text-muted'>Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href='#' className=' text-decoration-none fs-6  fa-sm'>Learn More</a></p>
                            </div>
                        </div>
                    </div>

                    {/* Advantageous 4 */}
                    <div className='col-lg-6 mb-4'>
                        <div className='service d-flex'>
                            <div className=' mb-4 me-4'>
                                <FontAwesomeIcon icon={faClone} className=' fa-2x text-primary '/>
                            </div>
                            <div className='service-content text-start'>
                                <h3 className=' fw-normal fs-5 text-black'>Bring Idea To Life</h3>
                                <p className='text-muted'>Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <p><a href='#' className=' text-decoration-none fs-6  fa-sm'>Learn More</a></p>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </>
  )
}
