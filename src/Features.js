import React from 'react'
import Dash_Features from './images/dashboard_features.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import Profile from './images/person_1.webp'
export default function Features() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='row justify-content-between'>
                        <div className='col-lg-4'>
                            <span className='caption'>DIGITAL SERVICES</span>
                            <h3 className='heading mb-4'>Selling Digital Services</h3>
                            <div className='mb-4'>
                                <p>
                                    Far far away, behind the word mountains, far from the countries 
                                    Vokalia and Consonantia, there live the blind texts. Separated 
                                    they live in Bookmarksgrove right at the coast
                                </p>
                            </div>
                            <ul className='list-unstyled ul-check primary '>
                                <li><FontAwesomeIcon icon={faCheck} className='text-primary' /> There live the blind texts</li>
                                <li><FontAwesomeIcon icon={faCheck} className='text-primary'/> Far far away behind the word</li>
                            </ul>
                            <div className='mb-4'>
                                <div className='text'>
                                    <blockquote>
                                         "Separated they
                                         <span className='highlight'>live in Bookmarksgrove right at the coast of the Semantics,  </span>
                                            a large language ocean. 
                                            A small river named Duden flows by their place and supplies it with the necessary 
                                            regelialia."
                                    </blockquote>
                                </div>
                                <div className='author d-flex'>
                                    <div className='pic mr-3'>
                                        <img className='img-fluid' width="50px" height="50px" src={Profile} alt='profileImg'/>
                                    </div>
                                    <div>
                                        <strong className='d-block'> James Anderson</strong> 
                                        <span className='d-block'>Facebook, Products Lead</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7'>
                            <img src={Dash_Features} alt='Image' className='img-fluid img-shadow' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
