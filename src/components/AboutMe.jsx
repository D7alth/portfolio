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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus optio odio accusantium vitae at nostrum, tempora, distinctio quis aspernatur consectetur ipsa! Voluptatibus tempore, excepturi voluptatem similique enim officia doloribus sequi.
                </p>
            </div>
        </div>
    )
}

export default AboutMe
