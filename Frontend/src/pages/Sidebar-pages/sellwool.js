import React from "react";
import Woolform from "../../components/woolform";
import Shop from "./shop";
import '../styles/sellwool.css';
export default function SellWool(){
    return(
         <div className="sellwool"><Shop activeItem="2"/><Woolform /></div>
    );
}