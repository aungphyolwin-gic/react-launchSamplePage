import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <div className='bg-white fixed-top shadow'>
            <nav className="container navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand display-3 fw-semibold pb-3" href="#">
                        Launch<span className='text-primary fs-3'>.</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to={'/testimonials'}>Testimonials</Link></li>
                                    <li>
                                        <a className="dropdown-item dropdown-menu-end" href="#">Menu Two</a>
                                        
                                    </li>
                                    
                                    <li><a className="dropdown-item" href="#">Menu Three</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/feature'>Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/price'}>Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page"to={'/about '}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <a className="btn btn-outline-dark rounded-pill" type="submit"><small>Sign in</small></a>
                            <a className="btn btn-primary mx-2 rounded-pill" type="submit"><small>Register</small></a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}
