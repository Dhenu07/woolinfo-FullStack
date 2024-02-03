import React from "react";
import {useRef}from 'react';
import './compostyle/backgroundv.css';
export default function Vide(){
        const handleVideoEnd = () => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
          }
        };
        const videoRef = useRef(null);
    return(
        <>
        <video
        ref={videoRef}
        src={process.env.PUBLIC_URL + '/Videos/Titlecard.mp4'}
        controls={false}
        autoPlay={true}
        loop={true}
        className="background-video"
        onEnded={handleVideoEnd}
      /></>
        );
}