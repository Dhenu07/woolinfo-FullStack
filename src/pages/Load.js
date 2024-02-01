import logo from '../images/logo.png';
import './styles/Load.css';
import '@fontsource/kavoon';
import Login from './login.js';
import Signup from './signup.js';
import React,{useRef,useState}from 'react';
function Load() {
  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };
  const [activeItem, setActiveItem] = useState("0");
    const handleItemClick = (id) => {
    setActiveItem(id);
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
               <a href="#" id="1" onClick={() => handleItemClick("1")}><p className="si1">Login</p></a>
               </div>
               <div>
               <a href="#" id="1" onClick={() => handleItemClick("2")}><p className="si1">Sign Up</p></a>
               </div>
             </div>
           </div>
        </div>
      <div className="centerheaven">
      {activeItem === "1" && <Login/>}
      {activeItem === "2" && <Signup/>}
      </div>
      <video
          ref={videoRef}
          src={process.env.PUBLIC_URL + '/Videos/Titlecard.mp4'}
          controls={false}
          autoPlay={true}
          loop={true}
          className="background-video"
          onEnded={handleVideoEnd}
        />
    </div>
  );
}

export default Load;
