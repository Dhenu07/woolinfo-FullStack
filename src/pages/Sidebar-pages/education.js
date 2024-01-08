import React from "react";
import '../styles/education.css';
import indus from '../../images/industry.jpg';
import { useState } from "react";
export default function Education(){
    const [activeItem, setActiveItem] = useState("1");

    const handleItemClick = (id) => {
      setActiveItem(id);
    };
    return(
        <><div className="header">
            <img src={indus} alt="industry" />
        </div>
        <div className="introhead">
            <div className="intro">
            <p>Science & Tecnology Program</p>
            <h1>Intoduction to Wool Processing</h1>
            </div>
            <div className="introbox">
                <div className="top1">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                <p>Certificate</p>
                <h3>wool processing</h3>
                </div>
                <div className="top2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg>
                <p>Completion Time</p>
                <h3 id="line"><strong>5.5 Hours</strong></h3>
                </div>
                <div className="top3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                <p>No of Modules</p>
                <h3><strong>6</strong></h3>
                </div>
            </div>
            </div>
            <div className="list">
                <div className={`list-it ${activeItem === "1" ? "active" : ""}`}><a href="#" id="1" onClick={() => handleItemClick("1")}><p>Overview</p></a></div>
                <div className={`list-it ${activeItem === "2" ? "active" : ""}`}><a href="#" id="2" onClick={() => handleItemClick("2")}><p>Outcome</p></a></div>
                <div className={`list-it ${activeItem === "3" ? "active" : ""}`}><a href="#" id="3" onClick={() => handleItemClick("3")}><p>Structure</p></a></div>
            </div>
            <div className="para">

            </div>
            </>
    );
}