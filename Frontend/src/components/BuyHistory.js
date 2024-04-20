import React from 'react';
import Profile from '../pages/Sidebar-pages/profile';
import { useState,useEffect } from 'react';
import './compostyle/buyhistory.css';
export default function BuyHistory(){
    return(
       <>
       <Profile activeItem="1"/>
       <div className="buyhistory">
       <h1>Buy History</h1>
       </div>
       </>
    );
}