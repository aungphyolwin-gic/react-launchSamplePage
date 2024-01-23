import React from 'react'
import Dashboard2 from './images/dashboard2.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoll } from '@fortawesome/free-solid-svg-icons'

export default function Services() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row justify-content-between'>
                        <div className='col-lg-7'>
                            <img className='img-fluid' src={Dashboard2}/>
                        </div>
                        <div className='col-lg-5'>
                            
                            {/* 1 card */}
                                <div className='card mb-3'>
                                    <div className='service d-flex'>
                                        <div className='service-icon bg-info text-light p-3 m-4'>
                                            <FontAwesomeIcon icon={faPoll} /> 
                                        </div>
                                        <div className='service-contents'>
                                            <h3>Grow Your Business</h3>
                                            <p>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
                                        </div>
                                    </div>
                                </div>

                            {/* 2 card mb-3 */}
                            <div className='card mb-3'>
                                    <div className='service d-flex'>
                                        <div className='service-icon bg-info text-light p-3 m-4'>
                                            <FontAwesomeIcon icon={faPoll} /> 
                                        </div>
                                        <div className='service-contents'>
                                            <h3>Grow Your Business</h3>
                                            <p>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
                                        </div>
                                    </div>
                                </div>
                            
                            {/* 3 card mb-3 */}
                            <div className='card mb-3'>
                                    <div className='service d-flex'>
                                        <div className='service-icon bg-info text-light p-3 m-4'>
                                            <FontAwesomeIcon icon={faPoll} /> 
                                        </div>
                                        <div className='service-contents'>
                                            <h3>Grow Your Business</h3>
                                            <p>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 4 card mb-3 */}
                                <div className='card mb-3'>
                                    <div className='service d-flex'>
                                        <div className='service-icon bg-info text-light p-3 m-4'>
                                            <FontAwesomeIcon icon={faPoll} /> 
                                        </div>
                                        <div className='service-contents'>
                                            <h3>Grow Your Business</h3>
                                            <p>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 5 card mb-3 */}
                                <div className='card mb-3'>
                                    <div className='service d-flex'>
                                        <div className='service-icon bg-info text-light p-3 m-4'>
                                            <FontAwesomeIcon icon={faPoll} /> 
                                        </div>
                                        <div className='service-contents'>
                                            <h3>Grow Your Business</h3>
                                            <p>Far far away, behind the word mountains, 
                                                far from the countries Vokalia and Consonantia.</p>
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
