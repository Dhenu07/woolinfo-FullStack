import React from 'react';
import Profile from '../pages/Sidebar-pages/profile';
import { useState,useEffect } from 'react';
import './compostyle/sellhistory.css';
import SellHistoryList from './sellhistoryList';
export default function SellHistory(){
    const [history, setHistory] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/sellhistory')
            .then(response => response.json())
            .then(data => setHistory(data))
            .catch(error => console.error('Error fetching forms:', error));
    }, []);
    // const a = require(`../uploads/${history.image}`);
    console.log(history.image);
    return(
       <>
       <Profile activeItem="2"/>
       <div className="full-sell">
       <div className="sellhistory">
       </div>   
        <div className="hist-cont">
            {history.map(history=>(
                <SellHistoryList
                wools={history.wools}
                available={history.available}
                cost={history.cost}
                length={history.length}
                Vm={history.Vm}
                Micorns={history.Microns}
                Country={history.Country}
                Address={history.Address}
                PostalCode={history.PostalCode}
                Email={history.Email}
                Phone={history.Phone}
                farmname={history.farmname}
                description={history.description}
                image={history.image}
                curr_date={history.curr_date}
                />
            ))}
        </div>
       </div> 
       </>
    );
}