import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Pricing() {
  return (
    <>
        <div className='bg-light'>
            <div className='container '>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h2 className='heading'>Pricing</h2>
                        <p>Pricing for everyone. Choose your plan now!</p>
                    </div>
                </div>
                <div className='row  justify-content-center'>
                    <div className='col-lg-10'>
                        <div className='row '>
                            {/* free card */}
                            <div className='col-lg-4'>
                                <div className='card'>
                                    <div className='p-3'>
                                        <div>
                                            <span className='d-block'>Free</span>
                                            <span>
                                                <sup>$</sup>
                                                <span>0</span>
                                            </span>
                                        </div>
                                        <ul className='list-unstyled mb-5'>
                                            <li><FontAwesomeIcon icon={faCheck} className='mr-2 fa-lg text-primary'/>There live the blind texts</li>
                                            <li><FontAwesomeIcon icon={faCheck} className='mr-2 fa-lg text-primary'/>Far far away behind the word</li>
                                            <li><FontAwesomeIcon icon={faCheck} className='mr-2 fa-lg text-primary'/>Far from the countries Vokalia and Consonantia</li>
                                        </ul>
                                        <p>
                                            <a href='#' className='btn btn-outline-primary rounded-pill'>Get Started</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Standard card */}
                            <div className='col-lg-4'>
                                <div className='card'>
                                    <div className='p-3'>
                                        <div>
                                            <span className='d-block'>Standard</span>
                                            <span>
                                                <sup>$</sup>
                                                <span>0</span>
                                            </span>
                                        </div>
                                        <ul className='list-unstyled mb-5'>
                                            <li><FontAwesomeIcon icon={faCheck} className='mr-2 fa-lg text-primary'/>There live the blind texts</li>
                                            <li><FontAwesomeIcon icon={faCheck} className='mr-2 fa-lg text-primary'/>Far far away behind the word</li>
                                            <li><FontAwesomeIcon icon={faCheck} className='mr-2 fa-lg text-primary'/>Far from the countries Vokalia and Consonantia</li>
                                        </ul>
                                        <p>
                                            <a href='#' className='btn btn-outline-primary rounded-pill'>Get Started</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* free card */}
                            <div className='col-lg-4'>
                                <div className='card'>
                                    <div className='p-3'>
                                        <div>
                                            <span className='d-block'>Free</span>
                                            <span>
                                                <sup>$</sup>
                                                <span>0</span>
                                            </span>
                                        </div>
                                        <ul className='list-unstyled mb-5'>
                                            <li><FontAwesomeIcon icon={faCheck} className='mr-2 fa-lg text-primary'/>There live the blind texts</li>
                                            <li><FontAwesomeIcon icon={faCheck} className='mr-2 fa-lg text-primary'/>Far far away behind the word</li>
                                            <li><FontAwesomeIcon icon={faCheck} className='mr-2 fa-lg text-primary'/>Far from the countries Vokalia and Consonantia</li>
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
