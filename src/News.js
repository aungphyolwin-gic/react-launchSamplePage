import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profile1 from './images/person_1.webp'
import Profile2 from './images/person_2.jpg.webp'
import Profile3 from './images/person_3.jpg.webp'
import React from 'react'

export default function New() {
  return (
    <> 
        <div className='untree-session bg-light'>
            <div className='contianer'>
                <div className='row mb-4'>
                    <div className='col-12 text-center'>
                        <h2 className='heading'>Our News</h2>
                        <p>Far from the countries Vokalia and Consonantia</p>
                    </div>
                </div>
                <div className='row'>
                    {/* card 1  */}
                    <div className='col-md-6 mb-4 col-lg-4 '>
                        <div className='p-3'>
                            <div className='d-flex align-items-center mb-4'>
                                <div>
                                    <img src={Profile1} alt='Img1' className='img-fluid rounded-pill' width='50px' height='50px' />
                                </div>
                                <div>
                                    <strong className=' d-block'>Posted By James</strong>
                                    <span>Jun 14, 2020</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <span className='caption'>Digital Service, 4 min read</span>
                                <h3>
                                    <a className='text-primary text-decoration-none' href='#'>
                                        Far far away behind the word mountains far from the countries
                                    </a>
                                </h3>
                            </div>
                            <p className='mb-0'><FontAwesomeIcon icon={faArrowRight}/></p>
                        </div>
                    </div>

                    {/* card 2 */}
                    <div className='col-md-6 mb-4 col-lg-4 '>
                        <div className='p-3'>
                            <div className='d-flex align-items-center mb-4'>
                                <div>
                                    <img src={Profile2} alt='Img1' className='img-fluid rounded-pill' width='50px' height='50px' />
                                </div>
                                <div>
                                    <strong className=' d-block'>Posted By James</strong>
                                    <span>Jun 14, 2020</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <span className='caption'>Digital Service, 4 min read</span>
                                <h3>
                                    <a className='text-primary text-decoration-none' href='#'>
                                        Far far away behind the word mountains far from the countries
                                    </a>
                                </h3>
                            </div>
                            <p className='mb-0'><FontAwesomeIcon icon={faArrowRight}/></p>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className='col-md-6 mb-4 col-lg-4 '>
                        <div className='p-3'>
                            <div className='d-flex align-items-center mb-4'>
                                <div>
                                    <img src={Profile3} alt='Img1' className='img-fluid rounded-pill' width='50px' height='50px' />
                                </div>
                                <div>
                                    <strong className=' d-block'>Posted By James</strong>
                                    <span>Jun 14, 2020</span>
                                </div>
                            </div>
                            <div className='mb-4'>
                                <span className='caption'>Digital Service, 4 min read</span>
                                <h3>
                                    <a className='text-primary text-decoration-none' href='#'>
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

