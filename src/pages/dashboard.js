import React from "react";
import Home from './Sidebar-pages/home';
import Cart from './Sidebar-pages/cart';
import News from './Sidebar-pages/news';
import Education from './Sidebar-pages/education';
import Shop from './Sidebar-pages/shop';
import logo from '../images/logo.png';
import pic from '../images/Dsd.JPG';
import "./styles/dashboard.css";
import { useState } from "react";
export default function Dashboad(){
  const [activeItem, setActiveItem] = useState("1");

  const handleItemClick = (id) => {
    setActiveItem(id);
  };
    return(
        <div className="app-container">
           < div className="sidebar">
        <div className="sidebar-header">
            <div className="logodash">
                <img src={logo} alt="logo" />
            </div>
          <div className="app-icon">
            Wool Info Heaven
          </div>
        </div>
        <ul className="sidebar-list">
        <li className={`sidebar-list-item ${activeItem === "1" ? "active" : ""}`}>
            <a href="#" id="1" onClick={() => handleItemClick("1")}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              <span>Home</span>
            </a>
          </li>
          <li className={`sidebar-list-item ${activeItem === "2" ? "active" : ""}`}>
            <a href="#" id="2" onClick={() => handleItemClick("2")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              <span>Shop</span>
            </a>
          </li>
          <li className={`sidebar-list-item ${activeItem === "3" ? "active" : ""}`}>
            <a href="#" id="3" onClick={() => handleItemClick("3")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
              <span>News</span>
            </a>
          </li>
          <li className={`sidebar-list-item ${activeItem === "4" ? "active" : ""}`}>
            <a href="#" id="4" onClick={() => handleItemClick("4")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              <span>Education</span>
            </a>
          </li>
          <li className={`sidebar-list-item ${activeItem === "5" ? "active" : ""}`}>
            <a href="#" id="5" onClick={() => handleItemClick("5")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity"><circle cx="8" cy="21" r="2"></circle><circle cx="20" cy="21" r="2"></circle><path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1"></path></svg>
              <span>Cart</span>
            </a>
          </li>
        </ul>
        <div className="account-info">
          <div className="account-info-picture">
            <img src={pic} alt="Account"/>
          </div>
          <div className="account-info-name">Dhenu D S</div>
          <button className="account-info-more">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal" id="feather"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </button>
        </div>
      </div>
      <div className="app-content">
        {activeItem === "1" && <Home />}
        {activeItem === "2" && <Shop />}
        {activeItem === "3" && <News />}
        {activeItem === "4" && <Education />}
        {activeItem === "5" && <Cart />}
      </div>
        </div>
    );
} 