import React from "react";
import '../styles/news.css';
import paper from '../../images/37333.svg';
import NewsList from "../../components/NewsList"
export default function News(){
    return(
        <div className="news">
        <div className="head">
            <img src={paper} alt="paper" id="paper"></img>
            <h1>News Info Heaven</h1>
        </div>
        <div className="News-body"> 
            <NewsList/></div>
        </div>
    );
}