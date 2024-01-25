import React from 'react'
import Dashboard2 from './images/dashboard2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faBriefcase, faClone, faPoll } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  return (
    <>
        <div className='untree-session bg-light p-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row justify-content-between'>
                            <div className='col-md-7 p-3'>
                                <div className=' shadow p-2 bg-white'>
                                    <img className='img-fluid' src={Dashboard2}/>
                                </div>
                            </div>
                            <div className='col-md-5 p-3'>
                                
                                {/* 1 card */}
                                <div className='mb-3 table-hover'>
                                    <div className='service d-flex'>
                                        <div className=' me-4'>
                                            <FontAwesomeIcon icon={faPoll} className='btn btn-info btn-lg rounded-3 text-white'/> 
                                        </div>
                                        <div className='text-start'>
                                            <h3 className=' fw-normal fs-5'>Grow Your Business</h3>
                                            <p className=' text-muted'>Far far away, behind the word mountains, 
                                            far from the countries Vokalia and Consonantia.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2 card mb-3 */}
                                <div className=' mb-3'>
                                        <div className='service d-flex'>
                                            <div className='me-4'>
                                                <FontAwesomeIcon icon={faArrowsRotate} className='btn btn-warning btn-lg rounded-3 text-white' /> 
                                            </div>
                                            <div className='text-start'>
                                                <h3 className=' fw-normal fs-5'>Build Products</h3>
                                                <p className=' text-muted'>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                {/* 3 card mb-3 */}
                                <div className=' mb-3'>
                                        <div className='service d-flex'>
                                            <div className='me-4'>
                                                <FontAwesomeIcon icon={faBriefcase} className='btn btn-danger btn-lg rounded-3 text-white' /> 
                                            </div>
                                            <div className='text-start'>
                                                <h3 className=' fw-normal fs-5'>Success Every Day</h3>
                                                <p className=' text-muted'>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 4 card mb-3 */}
                                    <div className=' mb-3'>
                                        <div className='service d-flex'>
                                            <div className='me-4'>
                                                <FontAwesomeIcon icon={faClone} className='btn btn-primary btn-lg rounded-3 text-white' /> 
                                            </div>
                                            <div className='text-start'>
                                                <h3 className=' fw-normal fs-5'>Bring Idea to Life</h3>
                                                <p className=' text-muted'>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
                                            </div>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
