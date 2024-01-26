import React from 'react'
import LaunchImg from './images/market-launch-pana.svg'

export default function home() {
  return (
    <>
        <div className='untree-session pt-3' id='home-session'>
            <div className='container pt-5 mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row align-items-center pb-5'>
                            {/* first column of home session */}
                            <div className='col-md-5 text-start order-1'>
                                <h1 className=' display-3 fw-semibold mb-4'>Promote Your Products by Colorlib</h1>
                                <div className='mb-4'>
                                    <p className='text-secondary '>
                                        Another cool free html css template by  
                                        <a href='#' className='higlight  text-decoration-none'> Colorlib </a> 
                                        Far far away, behind the word mountains, far from the countries 
                                        Vokalia and Consonantia, there live the blind texts. Separated 
                                        they live in Bookmarksgrove right at the coast
                                    </p>
                                </div>
                                <div className=' text-uppercase mb-2'>
                                    <a href='#features-session' className='btn btn-lg btn-primary rounded-5 small m-1 fs-6'>See Features</a>
                                    <a href='#price-session' className='btn btn-lg btn-outline-primary rounded-5 small fs-6'>Pricing</a>
                                </div>
                            </div>
                            {/* second column of home session */}
                            <div className='col-md-6 order-0'>
                                <img src={LaunchImg} alt='Image' className='image-fluid'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
