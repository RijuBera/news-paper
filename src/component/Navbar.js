import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export default class Navbar extends Component {
//   static propTypes = {second: third}

  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Link</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/">Action</Link></li>
                  <li><Link className="dropdown-item" to="/">Another action</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link disabled">Disabled</Link> */}
              </li>
              
              <li className='nav-item'><Link className='nav-link' to='/business'>Business</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/entertment'>entertment</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/general'>general</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/health'>health</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/science'>science</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/sports'>sports</Link></li>
              <li className='nav-item'><Link className='nav-link' to='/technology'>technology</Link></li>
            </ul>
            
          </div>
        </div>
      </nav>
    )
  }
}
