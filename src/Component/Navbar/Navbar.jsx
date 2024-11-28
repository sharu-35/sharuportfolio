import React from "react";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import Mobilenav from './Mobilenav/Mobilenav';

const Navbar=  ()=> {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Contact');

  }
  

  
    const [openmenu,setopenmenu] = useState(false);

    const togglemenu = () =>{
        setopenmenu(!openmenu);
    }
  
    return (
      <>
      <Mobilenav isopen={openmenu} togglemenu={togglemenu}/>
        <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src={logo} alt='logo'/>
            <ul>
            <li className="menu-item"><NavLink end to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li className="menu-item"><NavLink end to="/Aboutme" className={({ isActive }) => isActive ? 'active' : ''}>Aboutme</NavLink></li>
            <li className="menu-item"><NavLink end to="/Skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink></li>
            <li className="menu-item"><NavLink end to="/Project" className={({ isActive }) => isActive ? 'active' : ''}>Project</NavLink></li>
            <li className="menu-item"><NavLink end to="/Contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
          
          
            <button className="contact-btn" onClick={handleClick}>Hear Me</button>
            </ul>
            <button className='menu-btn' onClick={togglemenu}>
                <span
                 className={'material-symbols-outlined'}
                style={{fontSize:"1.8rem"}}>
                {openmenu ? "x" : "-"}
                </span>
            </button>
            </div>

    </nav>
      </>
    )
  }
  
  export default Navbar;