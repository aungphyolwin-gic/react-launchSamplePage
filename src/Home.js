import React from 'react'
import LaunchImg from './images/market-launch-pana.svg'

export default function home() {
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='row align-items-center'>
                         {/* first column of home session */}
                        <div className='col-md-5'>
                            <h1 className='heading'>Promote Your Products by Colorlib</h1>
                            <div>
                                <p className='text-'>
                                    Another cool free html css template by  
                                    <a href='#' className='higlight'> Colorlib </a> 
                                    Far far away, behind the word mountains, far from the countries 
                                    Vokalia and Consonantia, there live the blind texts. Separated 
                                    they live in Bookmarksgrove right at the coast
                                </p>
                            </div>
                            <div>
                                <a href='#features-session' className='btn btn-primary'>See Features</a>
                                <a href='#price-session' className='btn btn-outline-primary'>Pricing</a>
                            </div>
                        </div>
                        {/* second column of home session */}
                        <div className='col-md-6'>
                            <img src={LaunchImg} alt='Image' className='image-fluid'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
