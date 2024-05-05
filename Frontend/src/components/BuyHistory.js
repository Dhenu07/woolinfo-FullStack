import React from 'react';
import Profile from '../pages/Sidebar-pages/profile';
import { useState,useEffect } from 'react';
import './compostyle/sellhistory.css';
import BuyHistoryList from './BuyHistoryList';
export default function BuyHistory(){
    const[history,setHistory] = useState([]);
    useEffect(() =>{
    fetch('http://localhost:5000/buyhistory')
    .then(response=>response.json())
    .then(data=>setHistory(data))
    .catch(error => console.error("Error fetching history: ",error));
    },[]);
    return(
       <>
       <Profile activeItem="1"/>
       <div className='full-sell'>
       <div className="sellhistory">
       </div>
       <div className="hist-cont">
        {history.map(history =>(
            <BuyHistoryList
            wool={history.wool}
            cost={history.cost}
            length={history.length}
            vm={history.vm}
            farmname={history.farmname}
            image={history.image}
            quantity={history.quantity}
            date={history.date}
            />
        ))}
       </div>
       </div>
       </>
    );
}