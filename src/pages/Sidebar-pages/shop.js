import React from "react";
import '../styles/shop.css';
import { useState } from "react";
import '../../components/woolform';
import Woolform from "../../components/woolform";
export default function Shop() {
    const [activeItem, setActiveItem] = useState("1");

    const handleItemClick = (id) => {
    setActiveItem(id);
    };
  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="list">
         <div className={`list-it ${activeItem === "1" ? "active" : ""}`}><a href="#" id="1" onClick={() => handleItemClick("1")}><p>Buy Wool</p></a></div>
         <div className={`list-it ${activeItem === "2" ? "active" : ""}`}><a href="#" id="2" onClick={() => handleItemClick("2")}><p>Sell Wool</p></a></div>
     </div>
     <div className="partition">
     {activeItem === "1" && <div className="wool-list">
      <h1>Hey</h1>
      </div>}
     {activeItem === "2" && <Woolform/>}
     </div>
    </div>
  );
}