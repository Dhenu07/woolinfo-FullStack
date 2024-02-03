import React from "react";
import SideBar from "../../sidebar";
import '../styles/cart.css';
export default function Cart(){
    return(
        <div className="app-container">
     <SideBar activeItem="5"/>
        <div className="cart">
            <h1>Cart</h1>
        </div>
        </div>
    );
}