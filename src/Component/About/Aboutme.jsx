import React from "react";
import './Aboutme.css'
import mee from '../../assets/mee.png'
import resume from '../../assets/sharumathi.pdf'

const Aboutme = () => {
    return (
        <>
            <div className="aboutme">
                <div className="aboutme-contant">
                    <h2>AboutMe</h2>
                </div>
                <div className="aboutme-left">
                    <h1><img src={mee} alt="" />Sharumathi,  <span>MERN Stack Developer</span></h1>
                    <p>
                        A recent BSC graduate in Information Technology with a passion for building innovative web applications. I'm excited to showcase my skills and projects as a MERN stack developer.

                    </p>
                    <div className="aboutme-btn">
                        <button>
                        <a href={resume} class="download" download>Download CV</a>
                        </button>
                   


                        
                    </div>
                </div>
        
            </div>

        </>
    )
}
export default Aboutme