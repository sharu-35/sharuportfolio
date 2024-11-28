import React from "react";
import './Mobilenav.css'
const Mobilenav=({isopen,togglemenu})=>{
    return(
        <>
        <div className={`mobile-menu ${isopen ? "active" : ""}`}
        onClick={togglemenu}>
            <div className="mobile-menu-container">
                <ul>
                    <il>
                        <a className="menu-item">Home</a>
                    </il>
                    <li>
                    <a className='menu-item'>About Me</a>
                </li>
                <li>
                    <a className='menu-item'>Skills</a>
                </li>
                <li>
                    <a className='menu-item'>Project</a>
                </li>
                <li>
                    <a className='menu-item'>Contact Me</a>
                </li>
                <button className='contact-btn' onClick={()=>{}}>Hire Me</button>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Mobilenav;