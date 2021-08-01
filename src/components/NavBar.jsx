import React from 'react'
import './test.css'
import myLogo from '../components/tdragon.png'
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand" href="#"><img className="logo" src={myLogo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">How work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contacts</a>
            </li>
          </ul>
        </div>
      </nav>

    )
}

export default NavBar
