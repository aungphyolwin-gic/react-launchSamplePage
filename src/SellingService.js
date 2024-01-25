import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import DashBoradImg from './images/dashboard2.webp'
import Person1 from './images/person_1.webp'

export default function SellingService() {
  return (
    <>
        <div className='untree-session pb-5 pt-5'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div class="col-lg-4 text-start">
                        <span class=" text-uppercase text-primary fw-semibold">Digital Services</span>
                        <h3 class="display-2 fs-1 fw-normal" >Selling Digital Services</h3>
                        <div class="mb-4 text-body-tertiary" >
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast</p>
                            <ul class="list-unstyled ">
                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3'/>There live the blind texts</li>
                                <li><FontAwesomeIcon icon={faCheck} className='text-primary pe-3'/>Far far away behind the word</li>
                            </ul>
                        </div> 
                        
                            <div class="mb-4">
                                <div class="d-flex">
                                    <div class="text">
                                        <blockquote className=' blockquote fs-5 fst-italic mb-4'>
                                            "Separated they 
                                            <span class="highlight">live in Bookmarksgrove right at the coast of the Semantics
                                            </span>, a large language ocean. A small river named Duden flows by their place and 
                                            supplies it with the necessary regelialia."
                                        </blockquote>
                                        <div className='author d-flex'>
                                            <div className=' me-3'>
                                                <img className='img-fluid rounded-pill' width="50px" height="50px" src={Person1} alt='profileImg'/>
                                            </div>
                                            <div className='text-muted fw-light'>
                                                <strong className='d-block'> James Anderson</strong> 
                                                <span className='d-block'>Facebook, Products Lead</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        
                    </div>

                    <div className='col-lg-7 p-3 shadow'>
                        <a href='https://www.youtube.com/watch?v=ea0dBuzKUHk' className='btn-video'>
                            <img src={DashBoradImg} alt='Dashboard' className=' img-fluid'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
