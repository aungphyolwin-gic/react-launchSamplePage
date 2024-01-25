import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Pricing() {
  return (
    <>
        <div className='bg-light pt-5 pb-5'>
            <div className='container '>
                <div className='row'>
                    <div className='col-12 text-center mb-5'>
                        <h2 className='display-2 fs-1 fw-normal'>Pricing</h2>
                        <p className='mb-2 text-muted'>Pricing for everyone. Choose your plan now!</p>
                    </div>
                </div>
                <div className='row  justify-content-center'>
                    <div className='col-lg-10'>
                        <div className='row justify-content-center'>
                            {/* free card */}
                                <div className='col-lg-4 col-md-6 mb-4'>
                                    <div className='card rounded-5 shadow border-0'>
                                        <div className='p-5'>
                                            <div>
                                                <span className='d-block fs-2'>Free</span>
                                                <span className='text-primary '>
                                                    <sup className='fs-4'>$</sup>
                                                    <span className='fs-1'>0</span>
                                                </span>
                                            </div>
                                            <ul className='list-unstyled mb-5 text-start text-muted'>
                                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3 fa-lg'/>There live the blind texts</li>
                                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3 fa-lg'/>Far far away behind the word</li>
                                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3 fa-lg'/>Far from the countries Vokalia and Consonantia</li>
                                            </ul>
                                            <p>
                                                <a href='#' className='btn btn-outline-primary rounded-pill'>Get Started</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            {/* standard card */}
                            <div className='col-lg-4 col-md-6 mb-4'>
                                    <div className='card rounded-5 shadow border-0'>
                                        <div className='p-5'>
                                            <div>
                                                <span className='d-block fs-2'>standard</span>
                                                <span className='text-primary '>
                                                    <sup className='fs-4'>$</sup>
                                                    <span className='fs-1'>19.99</span>
                                                </span>
                                            </div>
                                            <ul className='list-unstyled mb-5 text-start text-muted'>
                                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3 fa-lg'/>There live the blind texts</li>
                                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3 fa-lg'/>Far far away behind the word</li>
                                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3 fa-lg'/>Far from the countries Vokalia and Consonantia</li>
                                            </ul>
                                            <p>
                                                <a href='#' className='btn btn-primary rounded-pill'>Get Started</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                           {/* premium card */}
                           <div className='col-lg-4 col-md-6'>
                                    <div className='card rounded-5 shadow border-0'>
                                        <div className='p-5'>
                                            <div>
                                                <span className='d-block fs-2'>Premium</span>
                                                <span className='text-primary '>
                                                    <sup className='fs-4'>$</sup>
                                                    <span className='fs-1'>79.99</span>
                                                </span>
                                            </div>
                                            <ul className='list-unstyled mb-5 text-start text-muted'>
                                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3 fa-lg'/>There live the blind texts</li>
                                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3 fa-lg'/>Far far away behind the word</li>
                                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3 fa-lg'/>Far from the countries Vokalia and Consonantia</li>
                                            </ul>
                                            <p>
                                                <a href='#' className='btn btn-outline-primary rounded-pill'>Get Started</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
