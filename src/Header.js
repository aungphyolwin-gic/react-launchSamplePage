import React from 'react'

export default function Header() {
  return (
    <>
        <div className='bg-white fixed-top shadow'>
            <nav className="container navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a class="navbar-brand display-3 fw-semibold" href="#">
                        Launch<span className='text-primary fs-3'>.</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                        aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home-session">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#testimonial-session">Testimonials</a></li>
                                    <li>
                                        <a className="dropdown-item dropdown-menu-end" href="#">Menu Two</a>
                                        
                                    </li>
                                    
                                    <li><a className="dropdown-item" href="#">Menu Three</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#feature-session">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#price-session">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#about-session">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#contact-section">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <a className="btn btn-outline-dark my-sm-0 rounded-pill" type="submit"><small>Sign in</small></a>
                            <a className="btn btn-primary mx-2 my-sm-0 rounded-pill" type="submit"><small>Register</small></a>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}
