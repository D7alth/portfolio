import React from 'react'
import './styles/presentation.css'
import myLogo from '../components/images/tdragon.png'
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
              <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Eu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projetos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contatos</a>
            </li>
          </ul>
        </div>
      </nav>

    )
}

export default NavBar
