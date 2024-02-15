import React from 'react'
import Dashboard2 from './images/dashboard2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsRotate, faBriefcase, faClone, faPoll } from '@fortawesome/free-solid-svg-icons'
import './Services.css'
export default function Services() {
  return (
    <>
        <div className='untree-session bg-light pt-5 pb-5'>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row justify-content-between'>
                            {/* for carousel */}
                            <div id='caruselServiceIndicator' className="carousel slide col-md-7 order-md-0 order-1" data-ride="carousel">

                                <div className='carousel-inner'>
                                    {/* slide 1 */}
                                    <div className='carousel-item active'>
                                        <div className=' p-3'>
                                            <div className='shadow p-2 bg-white'>
                                                <img className='img-fluid' src={Dashboard2}/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* slide 2 */}
                                    <div className=' carousel-item'>
                                        <div className=' p-3'>
                                            <div className='shadow p-2 bg-white'>
                                                <img className='img-fluid' src={Dashboard2}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                                <div className='col-md-5 p-3 order-md-1 order-0'>

                                    {/* 1 card */}
                                    <div className='mb-3 row-hover card border-0 shadow' data-bs-target="#caruselServiceIndicator" data-bs-slide="prev">
                                        <div className='service d-flex card-body'>
                                            <div className='btn btn-info text-white h-25 me-3 rounded-4'>
                                                <FontAwesomeIcon icon={faPoll} className='fs-5'/> 
                                            </div>
                                            <div className='text-start'>
                                                <h3 className='fw-normal fs-5'>Grow Your Business</h3>
                                                <p className='text-muted mb-0'>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2 card mb-3 */}
                                    <div className='mb-3 row-hover card border-0 shadow' data-bs-target="#caruselServiceIndicator" data-bs-slide="next">
                                        <div className='service d-flex card-body'>
                                            <div className='btn btn-warning rounded-4 text-white h-25 me-3'>
                                                <FontAwesomeIcon icon={faArrowsRotate} className='fs-5'/> 
                                            </div>
                                            <div className='text-start'>
                                                <h3 className=' fw-normal fs-5'>Build Products</h3>
                                                <p className=' text-muted mb-0'>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
                                            </div>
                                        </div>
                                    </div>
                                
                                    {/* 3 card mb-3 */}
                                    <div className='mb-3 row-hover card border-0 shadow' data-bs-target="#caruselServiceIndicator" data-bs-slide="next">
                                        <div className='service d-flex card-body'>
                                            <div className='btn btn-danger text-white h-25 me-3 rounded-4'>
                                                <FontAwesomeIcon icon={faBriefcase} className='fs-5' /> 
                                            </div>
                                            <div className='text-start'>
                                                <h3 className=' fw-normal fs-5'>Success Every Day</h3>
                                                <p className=' text-muted mb-0'>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 4 card mb-3 */}
                                    <div className='mb-3 row-hover card border-0 shadow' data-bs-target="#caruselServiceIndicator" data-bs-slide="next">
                                        <div className='service d-flex card-body'>
                                            <div className='btn btn-primary text-white h-25 me-3 rounded-4'>
                                                <FontAwesomeIcon icon={faClone} className='fs-5' /> 
                                            </div>
                                            <div className='text-start'>
                                                <h3 className=' fw-normal fs-5'>Bring Idea to Life</h3>
                                                <p className=' text-muted mb-0'>Far far away, behind the word mountains, 
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
