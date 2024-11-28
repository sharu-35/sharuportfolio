import React from "react";
import './Contactinfocard.css'

const Contactinfocard=({iconurl,text})=>{
    return(
        <>
        <div className="contact-details-card">
            <div className="icon">
                <img src={iconurl} alt={text}/>
            </div>
            <p>{text}</p>
        </div>
        </>
    )
}
export default Contactinfocard