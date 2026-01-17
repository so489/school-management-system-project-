import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 p-0 ">
            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
              <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                      <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link" href="#">Gallery</a> */}
                      <Link to='/facility' className='nav-link'>Facilty</Link>
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link" href="#">About Us</a> */}
                      <Link to='/about' className='nav-link'>About Us</Link>
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link" href="#">Contact Us</a> */}
                      <Link to='/contact' className='nav-link'>Contact Us</Link>
                    </li>
                    <li className="nav-item">
                      {/* <a className="nav-link" href="#">Contact Us</a> */}
                      <Link to='/enquiry' className='nav-link'>Enquiry</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </div>
  )
}
