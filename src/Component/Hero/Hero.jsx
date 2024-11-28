import React from "react";
import './Hero.css'
import mee from '../../assets/mee.png'
import react from '../../assets/react.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import port from '../../assets/port.gif'
const Hero = () => {
    return (
        <>
        
            <section className="hero-container">
            
                <div className="hero-contant">
                <img className="hero-imgs" src={port} alt="gif" />
                <h2>Building Digital Experiences That Inspire</h2>
                    <p>
                      Passionate mern stack developer | Trabsforming ideas into seamless and visually stunning web solutions.
                    </p>
                </div>
                <div className="hero-img">
                    <div>
                        <div className="tech-icon">
                        <img src={react} alt="reactjs"/>

                    </div>
                    <img className="myimage" src={mee} alt="myimage"/>
                    </div>
                    <div>
                        <div className="tech-icon">
                            <img src={html} alt="html"/>
                        </div>
                        <div className="tech-icon">
                            <img src={css} alt="css"/>
                        </div>
                        <div className="tech-icon">
                            <img src={js} alt="js"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;