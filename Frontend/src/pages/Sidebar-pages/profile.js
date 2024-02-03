import React from "react";
import photo from "../../images/logo.png";
import '../styles/profile.css';
import SideBar from "../../sidebar";
import 'font-awesome/css/font-awesome.min.css';
export default function Profile(){
    return (
        <div className="app-container">
        <SideBar activeItem="7"/>
        <div className="Profile">
        <h1>Profile</h1>
        <p className="php">Ramesh</p>
    <div className="containerpro">
        <div className="c1">
            <p>I am Ramesh, a dedicated wool farmer with a passion for sustainable agriculture and the art of wool production. With generations of farming wisdom coursing through, I combine traditional methods with modern techniques to ensure the highest quality wool. From nurturing lambs to shearing and processing, every step of the journey is infused with my unwavering commitment to ethical practices and environmental stewardship.</p>
        </div>
        <div className="c2">
            <img src={photo}/>
            <a href="edit.html" class="edit-link">EDIT</a>
        </div>
        <div class="c3">
            <p><b>Name:</b></p>
            <p>Ramesh</p>
            <p><b>Age:</b></p>
            <p>40</p>
            <p><b>Location:</b></p>
            <p>Trichy</p>
     <div className="contact-foo">
         <h3 id="h3">Follow Me</h3>
         <div className="social-li">
          <a href="#" className="fa fa-facebook-f"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-linkedin"></a>
        </div>
      </div>
        </div>
    </div>
    </div>
        </div>
    );
}