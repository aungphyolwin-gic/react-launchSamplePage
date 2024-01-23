import React from 'react'

export default function navbar() {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light dark mb-5 p-3">
            <div className='container'>
                <a class="navbar-brand" href="#">Launch <span className='text-primary'> .</span></a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        {/* Home */}
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        {/* Dropdown */}
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        {/* Features */}
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        {/* Pricing */}
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        {/* About */}
                        <li class="nav-item active">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        {/* Contact */}
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>

    </>
  )
}
