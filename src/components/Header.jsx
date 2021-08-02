import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Alberth Henrique</h1>
                <Typed
                    className="typed-text"
                    strings={["Desenvolvedor back-end","Desenvolvedor front-end", "Desenvolvedor desktop", "CyberSecurity", "Redes"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header
