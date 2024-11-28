import React from "react";
import './Skillcard.css'

 
const Skillcard = ({title,iconurl,isActive,onclick}) =>{
    return(
        <>
        <div className={`skills-card ${isActive ? "active" : ""}`}
        onClick={()=> onclick()}>
            <div className="skill-icon">
                <img src={iconurl} alt={title}/>
            </div>
            <span>{title}</span>
        </div>
        </>
    )
}
export default Skillcard