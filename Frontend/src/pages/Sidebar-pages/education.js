import React, { useRef, useState } from "react";
import '../styles/education.css';
import indus from '../../images/industry.jpg';
import mod1 from "../../images/mod1.jpg";
import mod2 from "../../images/mod2.jpg";
import mod3 from "../../images/mod3.jpg";
import mod4 from "../../images/mod4.jpg";
import mod5 from "../../images/mod5.jpg";
import mod6 from "../../images/mod6.jpg";
import SideBar from "../../sidebar";

export default function Education() {
    const [activeItem, setActiveItem] = useState("1");
    const [showVideo, setShowVideo] = useState(false); 
    const [videoSrc, setVideoSrc] = useState(null);
    const handleItemClick = (id) => {
        setActiveItem(id);
    };

    const handleVideoEnd = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
    };

    const handleBeginClick = (src) => {
        setVideoSrc(src);
        setShowVideo(true); 
    };

    const handleCloseVideo = () => {
        setShowVideo(false); 
    };

    const videoRef = useRef(null);
    
    return (
        <div className="app-container">
            <SideBar activeItem="4" />
            <div className="education">
                <div className="header">
                    <img src={indus} alt="industry" />
                </div>
                <div className="introhead">
                    <div className="intro">
                        <p>Science & Tecnology Program</p>
                        <h1>Intoduction to Wool Processing</h1>
                    </div>
                    <div className="introbox">
                        <div className="top1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                            <p>Certificate</p>
                            <h3>wool processing</h3>
                        </div>
                        <div className="top2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg>
                            <p>Completion Time</p>
                            <h3 id="line"><strong>5.5 Hours</strong></h3>
                        </div>
                        <div className="top3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
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
                <div className="paravid">
                    {activeItem === "1" && (
                        <div className="para">
                            <p>This course is designed to introduce you to wool, wool processing and to wool products.It provides an introductory overview to the journey of wool from farm to fashion.</p>
                            <p>You will explore the source of wool (sheep) and the process of harvesting wool (shearing, classing, baling and transport).The content covers the testing procedures carried out on raw wool to determine its value and explains how the raw wool is sold.</p>
                            <p>The manufacture of wool yarn through both the woollen and worsted processing systems is discussed and the manufacture of both knitted and woven wool textiles and products is covered. The course offers an overview of the quality assurance processes for wool products and showcases some of the latest product innovations incorporating wool fibres.</p>
                        </div>
                    )}
                    {activeItem === "2" && (
                        <div className="para">
                            <p>By the end of this course, you should be able to:</p>
                            <ul>
                                <li>explain briefly how wool is manufactured from a greasy raw fibre into worsted and woollen yarn</li>
                                <li>identify the different ways yarn can be woven or knitted and how this affects the end product</li>
                                <li>briefly describe the processes used to dye and finish wool and the environmentally-responsible options associated with each process</li>
                                <li>explain the garment faults that can occur during processing and how to best prevent them</li>
                                <li>recognise the quality assurance behind the Woolmark brand</li>
                                <li>identify different Merino innovations and how these can be used to enhance products made from wool.</li>
                            </ul>
                        </div>
                    )}
                    {activeItem === "3" && (
                        <div className="para">
                            <ol>
                                <li>Introduction</li>
                                <li>Farm to factory</li>
                                <li>Raw wool measurement</li>
                                <li>Manufacturing wool yarns</li>
                                <li>Manufacturing wool products</li>
                                <li>The quality of wool products</li>
                                <li>Innovations in wool products</li>
                            </ol>
                        </div>
                    )}
                    <div className="innerVid">
                        <div className="player1">
                            <video
                                ref={videoRef}
                                src={process.env.PUBLIC_URL + '/Videos/Wool Intro.mp4'}
                                controls={false}
                                autoPlay={true}
                                loop={true}
                                onEnded={handleVideoEnd}
                            />
                        </div>
                    </div>
                </div>
                <div className="Mod">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    <h3><b>MODULES : 6</b></h3>
                </div>
                <div className="coursecards">
                    <div className="innercard">
                        <div className="imgflex">
                            <img src={mod1} alt="sheep"/>
                        </div>
                        <div className="innerconten">
                            <h3>MODULE 1: FARM TO FACTORY</h3>
                            <p><b>Module 1: Farm to factory </b>reviews where wool comes from and how it is harvested, the impact of sheep breed on wool type and its key quality characteristics and their implication on end-product applications. It also offers a high-level view of the farm-to-factory pipeline, including wool valuing and the wool auction system</p>
                        </div>
                        <div className="innerconten1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg>
                            <h4>15 Minutes</h4><br/>
                            <button id='start' type="button" onClick={() => handleBeginClick(process.env.PUBLIC_URL + '/Videos/module1.mp4')}><h3>BEGIN</h3></button>
                        </div>   
                    </div>
                    <div className="innercard">
                        <div className="imgflex">
                            <img src={mod2} alt="sheep"/>
                        </div>
                        <div className="innerconten">
                            <h3>MODULE 2: RAW WOOL MEASUREMENT</h3>
                            <p><b>Module 2: Raw wool measurement </b>introduces the methods used to objectively measure the properties of raw wool. These measurements determine, in large part, the value of the wool and reflect the price paid for wool at auction.</p>
                        </div>
                        <div className="innerconten1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg>
                            <h4>1 Hour 23 Minutes</h4><br/>
                            <button id='start' type="button" onClick={() => handleBeginClick(process.env.PUBLIC_URL + '/Videos/Module2.mp4')}><h3>BEGIN</h3></button>
                        </div>   
                    </div>
                    <div className="innercard">
                        <div className="imgflex">
                            <img src={mod3} alt="sheep"/>
                        </div>
                        <div className="innerconten">
                            <h3>MODULE 3: MANUFACTURING WOOL YARNS</h3>
                            <p><b>Module 3: Manufacturing wool yarn </b>offers a brief overview of the wool yarn manufacturing process.  Individual processes are covered in greater depth in more advanced courses.</p>
                        </div>
                        <div className="innerconten1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg>
                            <h4>59 Minutes</h4><br/>
                            <button id='start' type="button" onClick={() => handleBeginClick(process.env.PUBLIC_URL + '/Videos/Module3.mp4')}><h3>BEGIN</h3></button>
                        </div>   
                    </div>
                    <div className="innercard">
                        <div className="imgflex">
                            <img src={mod4} alt="sheep"/>
                        </div>
                        <div className="innerconten">
                            <h3>MODULE 4: MANUFACTURING WOOL PRODUCTS</h3>
                            <p><b>Module 4: Manufacturing wool products </b>explores the processes used to manufacture wool products (fabric and garments) from worsted and woollen yarns). The individual processes are covered in detail in subsequent courses.</p>
                        </div>
                        <div className="innerconten1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg>
                            <h4>1 Hour 5 Minutes</h4><br/>
                            <button id='start' type="button" onClick={() => handleBeginClick(process.env.PUBLIC_URL + '/Videos/Module4.mp4')}><h3>BEGIN</h3></button>
                        </div>   
                    </div>
                    <div className="innercard">
                        <div className="imgflex">
                            <img src={mod5} alt="sheep"/>
                        </div>
                        <div className="innerconten">
                            <h3>MODULE 5: QUALITY OF WOOL PRODUCTS</h3>
                            <p><b>Module 5: The quality of wool products</b> highlights some of the characteristics of wool products associated with quality, how these characteristics are assessed in quality assurance (QA) programs and how faults in wool fabrics and garments can be avoided. </p>
                        </div>
                        <div className="innerconten1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg>
                            <h4>25 Minutes</h4><br/>
                            <button id='start' type="button" onClick={() => handleBeginClick(process.env.PUBLIC_URL + '/Videos/Module5.mp4')}><h3>BEGIN</h3></button>
                        </div>   
                    </div>
                    <div className="innercard">
                        <div className="imgflex">
                            <img src={mod6} alt="sheep"/>
                        </div>
                        <div className="innerconten">
                            <h3>MODULE 6: INNOVATIONS IN WOOL PRODUCTS</h3>
                            <p><b>Module 6: Innovations in wool products</b> is the final module in this course. This module will describe some of the recent innovations in wool products, which capitalise on the fibre’s inherent properties and new processing technology.</p>
                        </div>
                        <div className="innerconten1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 15 15"></polyline></svg>
                            <h4>1 Hour 30 Minutes</h4><br/>
                            <button id='start' type="button" onClick={() => handleBeginClick(process.env.PUBLIC_URL + '/Videos/Module6.mp4')}><h3>BEGIN</h3></button>
                        </div>   
                    </div>
                    
                </div>
            </div>
            {showVideo && (
                <div className="video-popup active">
                    <div className="video-popup-content">
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            controls
                            autoPlay
                            onEnded={handleVideoEnd}
                        />
                        <button className="close-btn" onClick={() => setShowVideo(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}