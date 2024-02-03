import logo from '../images/logo.png';
import './styles/Load.css';
import '@fontsource/kavoon';
import Vide from '../components/videoback.js';
import React,{useRef}from 'react';
import { Link } from 'react-router-dom';
function Load() {
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };
  const videoRef = useRef(null);
  return (
    <div className="loadcont">
      <div className="backapp">
         <div className="logoandsign">
             <div className="logo1">
               <img src={logo} alt="Logo" />
             </div>
             <div className="logopara">
               <p>WOOL INFO HEAVEN</p>
             </div>
             <div className="signinandsignup">
               <div>
               <Link to="/login"><p className="si1">Login</p></Link>
               </div>
               <div>
               <Link to="/signup"><p className="si1">Sign Up</p></Link>
               </div>
             </div>
             <Vide/>
           </div>
        </div>
    </div>
  );
}

export default Load;
