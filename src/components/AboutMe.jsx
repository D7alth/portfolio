import React from 'react'
import me from '../components/images/me.jpg'
import '../components/styles/AboutMe.css'

function AboutMe() {
    return (
        <div className="wrapper">
            <div className="main">
            <img className="PhotoMe" src={me} alt="me" srcset="" />
            </div>
            <div className="text">
                
                <p>
                    Se tu precisa de um dev que <span>flexível</span>, que já passou por várias <span>tecnologias</span>, que aprendi <span>rápido</span> e está disposto a perder inúmeras noites para aprender algo, que realmente quer <span>somar</span> em uma empresa, que e <span>colaborativo</span>, e que trabalha em <span>equipe</span>, eu sou o cara que vai fazer isso, ou se precisa de alguém para executar um processo <span>chato</span> é <span>repetitivo</span> é que <span>consome</span> horas, eu sou o cara que vai <span>automatizar</span> isso. 
                </p>
            </div>
        </div>
    )
}

export default AboutMe
