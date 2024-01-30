import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faBriefcase, faClone, faPoll } from '@fortawesome/free-solid-svg-icons'

export default function ServiceDetail() {
  return (
    <>
        <div className='untree-session pt-5 pb-5'>
            <div className='container'>
                <div className='row text-start'>
                    {/* Grow your Business */}
                    <div className='col-md-6 col-lg-3'>
                        <div className='service'>
                            <div className='btn btn-info btn-lg text-white h-25 rounded-4 mb-4'>
                                <FontAwesomeIcon icon={faPoll} className='fs-2' /> 
                            </div>
                            <div className='service-content'>
                                <h3 className=' fw-normal fs-4'>Grow Your Business</h3>
                                <p className='text-muted fs-6'>Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Build Products */}
                    <div className='col-md-6 col-lg-3'>
                        <div className='service'>
                            <div className='btn btn-warning btn-lg text-white h-25 rounded-4 mb-4'>
                                <FontAwesomeIcon icon={faArrowsRotate} className='fs-2' /> 
                            </div>
                            <div className='service-content'>
                                <h3 className=' fw-normal fs-4'>Build Products</h3>
                                <p className='text-muted fs-6'>Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.</p>
                            </div>
                        </div>
                    </div>

                    {/* Success Every Day */}
                    <div className='col-md-6 col-lg-3'>
                        <div className='service'>
                            <div className='btn btn-danger btn-lg text-white h-25 rounded-4 mb-4'>
                                <FontAwesomeIcon icon={faBriefcase} className='fs-2'/> 
                            </div>
                            <div className=''>
                                <h3 className=' fw-normal fs-4'>Success Every Day</h3>
                                <p className='text-muted fs-6'>Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.</p>
                            </div>
                        </div>
                    </div>

                    {/* Bring Idea to Life */}
                    <div className='col-md-6 col-lg-3'>
                        <div className='service'>
                            <div className='btn btn-primary btn-lg text-white h-25 rounded-4 mb-4'>
                                <FontAwesomeIcon icon={faClone} className='fs-2'/> 
                            </div>
                            <div className='service-content'>
                                <h3 className=' fw-normal fs-4'>Bring Idea to Life</h3>
                                <p className='text-muted fs-6'>Far far away, behind the word mountains, 
                                    far from the countries Vokalia and Consonantia, 
                                    there live the blind texts.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
