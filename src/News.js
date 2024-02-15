import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profile1 from './images/person_1.webp'
import Profile2 from './images/person_2.jpg.webp'
import Profile3 from './images/person_3.jpg.webp'
import './News.css'
import React from 'react'

export default function New() {
  return (
    <> 
       <div className='untree-session bg-light pt-5 pb-5'>
            <div className='container mt-5'>
                <div className='row mb-4'>
                    <div className='col-12 text-center'>
                        <h2 className='display-2 fs-1 fw-normal'>Our News</h2>
                        <p className='mb-4 text-muted'>Far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {/* card 1  */}
                    <div className='card-hover col-md-3 m-2 bg-white'>
                        <div className='p-3 text-start'>
                            <div className='d-flex align-items-center mb-4'>
                                <div>
                                    <img src={Profile1} alt='Img1' className='img-fluid rounded-pill me-2' width='50px' height='50px' />
                                </div>
                                <div className=''>
                                    <strong className='d-block fw-normal'>Posted By James</strong>
                                    <span className=' text-body-tertiary'>Jun 14, 2020</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <span className=' text-body-tertiary'>Digital Service, 4 min read</span>
                                <h3 className='mt-2 fs-5 fw-normal'>
                                    <a className='text-decoration-none text-black' href='#'>
                                        Far far away behind the word mountains far from the countries
                                    </a>
                                </h3>
                            </div>
                            <p className='mb-0'><FontAwesomeIcon icon={faArrowRight}/></p>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className='card-hover col-md-3 m-2 bg-white'>
                        <div className='p-3 text-start'>
                            <div className='d-flex align-items-center mb-4'>
                                <div>
                                    <img src={Profile2} alt='Img1' className='img-fluid rounded-pill me-2' width='50px' height='50px' />
                                </div>
                                <div className=''>
                                    <strong className='d-block fw-normal'>Posted By Khan</strong>
                                    <span className=' text-body-tertiary'>Jun 14, 2020</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <span className=' text-body-tertiary'>Digital Service, 4 min read</span>
                                <h3 className='mt-2 fs-5 fw-normal'>
                                    <a className='text-decoration-none text-black' href='#'>
                                        Far far away behind the word mountains far from the countries
                                    </a>
                                </h3>
                            </div>
                            <p className='mb-0'><FontAwesomeIcon icon={faArrowRight}/></p>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className='card-hover col-md-3 m-2 bg-white'>
                        <div className='p-3 text-start'>
                            <div className='d-flex align-items-center mb-4'>
                                <div>
                                    <img src={Profile3} alt='Img1' className='img-fluid rounded-pill me-2' width='50px' height='50px' />
                                </div>
                                <div className=''>
                                    <strong className='d-block fw-normal'>Posted By Rob</strong>
                                    <span className=' text-body-tertiary'>Jun 14, 2020</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <span className=' text-body-tertiary'>Digital Service, 4 min read</span>
                                <h3 className='mt-2 fs-5 fw-normal'>
                                    <a className='text-decoration-none text-black' href='#'>
                                        Far far away behind the word mountains far from the countries
                                    </a>
                                </h3>
                            </div>
                            <p className='mb-0'><FontAwesomeIcon icon={faArrowRight}/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

