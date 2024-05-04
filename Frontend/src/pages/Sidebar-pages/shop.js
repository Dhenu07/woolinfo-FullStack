import React from "react";
import '../styles/shop.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import SideBar from '../../sidebar';

export default function Shop() {
    const [activeItem, setActiveItem] = useState("1");
    const handleItemClick = (id) => {
        setActiveItem(id);
    };

    return (
        <div className="app-container">
            <SideBar activeItem="2"/>
            <div className="shop-container">
                <h1>Shop</h1>
                <div className="list">
                    <div className={`list-it ${activeItem === "1" ? "active" : ""}`}>
                        <Link to='/shop/buywool' onClick={() => handleItemClick("1")}>                            <p>Buy Wool</p>
                        </Link>
                    </div>
                    <div className={`list-it ${activeItem === "2" ? "active" : ""}`}>
                        <Link to='/shop/sellwool' onClick={() => handleItemClick("2")}>
                            <p>Sell Wool</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
