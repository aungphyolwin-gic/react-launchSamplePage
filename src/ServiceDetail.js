import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoll } from '@fortawesome/free-solid-svg-icons'

export default function ServiceDetail() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                {/* Grow your Business */}
                <div className='col-md-6 col-lg-3'>
                    <div className='service'>
                        <div className='service-icon mb-4 '>
                            <FontAwesomeIcon icon={faPoll} className='fa-3x text-info' /> 
                        </div>
                        <div className='service-contents'>
                            <h3>Grow Your Business</h3>
                            <p>Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia.</p>
                        </div>
                    </div>
                </div>
                
                {/* Build Products */}
                <div className='col-md-6 col-lg-3'>
                    <div className='service'>
                        <div className='service-icon mb-4'>
                            <FontAwesomeIcon icon={faPoll} className='fa-3x text-warning' /> 
                        </div>
                        <div className='service-contents'>
                            <h3>Grow Your Business</h3>
                            <p>Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia.</p>
                        </div>
                    </div>
                </div>

                {/* Success Every Day */}
                <div className='col-md-6 col-lg-3'>
                    <div className='service'>
                        <div className='service-icon mb-4'>
                            <FontAwesomeIcon icon={faPoll} className='fa-3x text-danger'/> 
                        </div>
                        <div className='service-contents'>
                            <h3>Grow Your Business</h3>
                            <p>Far far away, behind the word mountains, 
                                far from the countries Vokalia and Consonantia.</p>
                        </div>
                    </div>
                </div>

                {/* Bring Idea to Life */}
                <div className='col-md-6 col-lg-3'>
                    <div className='service'>
                        <div className='service-icon mb-4'>
                            <FontAwesomeIcon icon={faPoll} className='fa-3x text-primary'/> 
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
    </>
  )
}
